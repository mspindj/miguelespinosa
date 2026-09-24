import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { buildTree, type TreeSpec } from "./tree";

/*
 * Live ASCII render in vanilla three.js, two passes per frame:
 *  1. The decision tree is drawn into a tiny render target, 2x2 texels per character cell.
 *     R = ink density (shadowed and near faces are denser), G = chosen-path mask, A = coverage.
 *  2. A full-screen pass splits the canvas into cells, reads the (bilinear averaged) cell value
 *     and draws the matching glyph from a runtime glyph atlas. Chosen-path cells use the accent.
 * The render target only has cols*2 x rows*2 pixels, so pass 1 costs next to nothing.
 * The RAF loop only runs while the canvas is on screen and motion is on; otherwise a single
 * frame is drawn when something changes (atlas ready, resize).
 */

const GLYPHS = " .:-=+*#%@";
const INK = new THREE.Vector3(14 / 255, 14 / 255, 14 / 255);
const ACCENT = new THREE.Vector3(1, 79 / 255, 0);
const BASE_YAW = 0.6; // matches the static fallback poster
const BASE_PITCH = -0.08;
const THICKEN = 1.35; // tubes a bit thicker than the poster so thin branches survive small grids
const MAX_DPR = 1.75;

const sceneVert = /* glsl */ `
  varying vec3 vN;
  varying float vZ;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vN = normalize(normalMatrix * normal);
    vZ = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`;
const sceneFrag = /* glsl */ `
  uniform float uChosen;
  uniform vec2 uDepth;
  varying vec3 vN;
  varying float vZ;
  void main() {
    vec3 L = normalize(vec3(-0.5, 0.7, 0.6));
    float diff = max(dot(normalize(vN), L), 0.0);
    float d = 0.28 + 0.72 * (1.0 - diff);
    d *= 1.0 - 0.45 * smoothstep(uDepth.x, uDepth.y, vZ);
    gl_FragColor = vec4(d, uChosen, 0.0, 1.0);
  }
`;
const postVert = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;
const postFrag = /* glsl */ `
  uniform sampler2D uScene;
  uniform sampler2D uAtlas;
  uniform vec2 uCells;
  uniform float uGlyphs;
  uniform vec3 uInk;
  uniform vec3 uAccent;
  varying vec2 vUv;
  void main() {
    vec2 grid = vUv * uCells;
    vec4 s = texture2D(uScene, (floor(grid) + 0.5) / uCells);
    float idx = min(floor(s.r * uGlyphs), uGlyphs - 1.0);
    vec2 local = fract(grid);
    float g = texture2D(uAtlas, vec2((idx + local.x) / uGlyphs, local.y)).r;
    float chosen = step(0.5, s.g / max(s.a, 0.001)) * step(0.3, s.a);
    vec3 col = mix(uInk, uAccent, chosen);
    gl_FragColor = vec4(col * g, g); // premultiplied: ink glyphs over the paper page
  }
`;

function createScene(spec: TreeSpec) {
  const { segments, tip } = buildTree(spec);
  const chosen: THREE.BufferGeometry[] = [];
  const rest: THREE.BufferGeometry[] = [];
  let tipR = 0.05;
  chosen.push(new THREE.IcosahedronGeometry(segments[0].r * THICKEN, 1));
  for (const s of segments) {
    const a = new THREE.Vector3(...s.a);
    const b = new THREE.Vector3(...s.b);
    const tube = new THREE.TubeGeometry(new THREE.LineCurve3(a, b), 1, s.r * THICKEN, 8, false);
    const tubeFlat = tube.toNonIndexed();
    tube.dispose();
    const joint = new THREE.IcosahedronGeometry(s.r * THICKEN, 1);
    joint.translate(b.x, b.y, b.z);
    (s.chosen ? chosen : rest).push(tubeFlat, joint);
    if (s.chosen) tipR = s.r * THICKEN;
  }
  // The decision itself: a faceted node at the end of the chosen path.
  const node = new THREE.IcosahedronGeometry(tipR * 2.4, 0);
  node.translate(tip[0], tip[1], tip[2]);
  chosen.push(node);

  const chosenGeo = mergeGeometries(chosen);
  const restGeo = mergeGeometries(rest);
  [...chosen, ...rest].forEach((g) => g.dispose());

  const mat = (c: number) =>
    new THREE.ShaderMaterial({
      vertexShader: sceneVert,
      fragmentShader: sceneFrag,
      uniforms: { uChosen: { value: c }, uDepth: { value: new THREE.Vector2(5, 9) } },
    });
  const chosenMat = mat(1);
  const restMat = mat(0);

  const inner = new THREE.Group();
  inner.add(new THREE.Mesh(chosenGeo, chosenMat), new THREE.Mesh(restGeo, restMat));
  const box = new THREE.Box3().setFromObject(inner);
  const center = box.getCenter(new THREE.Vector3());
  inner.position.copy(center).multiplyScalar(-1);
  const pivot = new THREE.Group();
  pivot.add(inner);
  pivot.rotation.set(BASE_PITCH, BASE_YAW, 0);

  // Radius of the tree around its vertical axis, for camera fitting while it spins.
  let radiusXZ = 0;
  for (const g of [chosenGeo, restGeo]) {
    const p = g.getAttribute("position");
    for (let i = 0; i < p.count; i++) {
      radiusXZ = Math.max(radiusXZ, Math.hypot(p.getX(i) - center.x, p.getZ(i) - center.z));
    }
  }
  const halfHeight = (box.max.y - box.min.y) / 2;

  const scene = new THREE.Scene();
  scene.add(pivot);
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);

  const fbo = new THREE.WebGLRenderTarget(2, 2, {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    depthBuffer: true,
    generateMipmaps: false,
  });

  const post = new THREE.ShaderMaterial({
    vertexShader: postVert,
    fragmentShader: postFrag,
    transparent: true,
    depthTest: false,
    depthWrite: false,
    uniforms: {
      uScene: { value: fbo.texture },
      uAtlas: { value: null as THREE.Texture | null },
      uCells: { value: new THREE.Vector2(1, 1) },
      uGlyphs: { value: GLYPHS.length },
      uInk: { value: INK },
      uAccent: { value: ACCENT },
    },
  });
  const quadGeo = new THREE.PlaneGeometry(2, 2);
  const quad = new THREE.Mesh(quadGeo, post);
  quad.frustumCulled = false;
  const postScene = new THREE.Scene();
  postScene.add(quad);
  const postCamera = new THREE.Camera();

  return {
    scene,
    camera,
    pivot,
    fbo,
    post,
    postScene,
    postCamera,
    fit(cols: number, rows: number, aspect: number) {
      fbo.setSize(cols * 2, rows * 2);
      post.uniforms.uCells.value.set(cols, rows);
      camera.aspect = aspect;
      const t = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
      const dist = Math.max((halfHeight * 1.06) / t, (radiusXZ * 1.1) / (t * aspect)) + radiusXZ * 0.6;
      camera.position.set(0, 0, dist);
      camera.near = Math.max(0.1, dist - radiusXZ * 2);
      camera.far = dist + radiusXZ * 2;
      camera.updateProjectionMatrix();
      const depth = new THREE.Vector2(dist - radiusXZ, dist + radiusXZ);
      chosenMat.uniforms.uDepth.value.copy(depth);
      restMat.uniforms.uDepth.value.copy(depth);
    },
    setAtlas(tex: THREE.Texture) {
      (post.uniforms.uAtlas.value as THREE.Texture | null)?.dispose();
      post.uniforms.uAtlas.value = tex;
    },
    dispose() {
      chosenGeo.dispose();
      restGeo.dispose();
      chosenMat.dispose();
      restMat.dispose();
      quadGeo.dispose();
      post.dispose();
      fbo.dispose();
      (post.uniforms.uAtlas.value as THREE.Texture | null)?.dispose();
    },
  };
}

/** Glyph atlas drawn once the page fonts are ready: white glyphs on black, one tile per glyph. */
function makeAtlas(cell: readonly [number, number]) {
  const th = 64;
  const tw = Math.round((th * cell[0]) / cell[1]);
  const canvas = document.createElement("canvas");
  canvas.width = tw * GLYPHS.length;
  canvas.height = th;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  ctx.font = `600 ${Math.round(th * 0.6)}px "Martian Mono Variable", ui-monospace, Menlo, monospace`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  for (let i = 0; i < GLYPHS.length; i++) ctx.fillText(GLYPHS[i], tw * i + tw / 2, th * 0.54);
  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}

export interface AsciiRendererOptions {
  spec: TreeSpec;
  cell: readonly [number, number];
  /** Called once, after the first frame has been drawn. */
  onReady: () => void;
}

export interface AsciiRenderer {
  /** On screen or not. Offscreen, nothing renders. */
  setActive(active: boolean): void;
  /** Motion allowed (not reduced, not paused). Off: one static frame. */
  setAnimate(animate: boolean): void;
  setCell(cell: readonly [number, number]): void;
  dispose(): void;
}

export function createAsciiRenderer(container: HTMLElement, opts: AsciiRendererOptions): AsciiRenderer {
  const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, MAX_DPR));
  renderer.setClearColor(0x000000, 0);
  const canvas = renderer.domElement;
  canvas.className = "tb-ascii-canvas";
  canvas.setAttribute("aria-hidden", "true");
  container.appendChild(canvas);

  const scene = createScene(opts.spec);
  let cell = opts.cell;
  let active = false;
  let animate = false;
  let atlasReady = false;
  let readyFired = false;
  let disposed = false;
  let raf = 0;
  let last = 0;
  let width = 0;
  let height = 0;
  const input = { px: 0, py: 0, scroll: 0 };
  const motion = { t: 0, yaw: BASE_YAW, pitch: BASE_PITCH };

  const fit = () => {
    width = container.clientWidth;
    height = container.clientHeight;
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    const cols = Math.max(8, Math.floor(width / cell[0]));
    const rows = Math.max(6, Math.floor(height / cell[1]));
    scene.fit(cols, rows, width / height);
  };

  const draw = () => {
    if (!atlasReady || !width || !height) return;
    scene.pivot.rotation.set(motion.pitch, motion.yaw, 0);
    renderer.setRenderTarget(scene.fbo);
    renderer.render(scene.scene, scene.camera);
    renderer.setRenderTarget(null);
    renderer.render(scene.postScene, scene.postCamera);
    if (!readyFired) {
      readyFired = true;
      opts.onReady();
    }
  };

  const loop = (now: number) => {
    raf = 0;
    if (disposed || !active || !animate) return;
    const dt = Math.min((now - (last || now)) / 1000, 0.05);
    last = now;
    motion.t += dt;
    const yaw = BASE_YAW + motion.t * 0.16 + input.scroll * Math.PI * 0.9 + input.px * 0.35;
    const pitch = BASE_PITCH + input.py * 0.12;
    const k = 1 - Math.exp(-dt * 4);
    motion.yaw += (yaw - motion.yaw) * k;
    motion.pitch += (pitch - motion.pitch) * k;
    draw();
    raf = requestAnimationFrame(loop);
  };

  /** Start the loop when allowed, otherwise draw a single static frame. */
  const schedule = () => {
    if (disposed || raf) return;
    if (!active) return;
    if (animate) {
      last = 0;
      raf = requestAnimationFrame(loop);
    } else {
      raf = requestAnimationFrame(() => {
        raf = 0;
        draw();
      });
    }
  };

  const onPointer = (e: PointerEvent) => {
    input.px = (e.clientX / window.innerWidth) * 2 - 1;
    input.py = (e.clientY / window.innerHeight) * 2 - 1;
  };
  const onScroll = () => {
    input.scroll = window.scrollY / Math.max(1, window.innerHeight);
  };
  const listen = (on: boolean) => {
    if (on) {
      onScroll();
      window.addEventListener("pointermove", onPointer, { passive: true });
      window.addEventListener("scroll", onScroll, { passive: true });
    } else {
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
    }
  };

  const buildAtlas = async () => {
    try {
      await document.fonts.ready;
      await document.fonts.load(`600 38px "Martian Mono Variable"`);
    } catch {
      /* fall back to the generic monospace in the font stack */
    }
    if (disposed) return;
    const tex = makeAtlas(cell);
    if (!tex) return;
    scene.setAtlas(tex);
    atlasReady = true;
    schedule();
  };

  const ro = new ResizeObserver(() => {
    fit();
    if (!animate) schedule();
  });
  ro.observe(container);
  fit();
  buildAtlas();

  return {
    setActive(next) {
      if (active === next) return;
      active = next;
      if (!active && raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
      schedule();
    },
    setAnimate(next) {
      if (animate === next) return;
      animate = next;
      listen(animate);
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
      schedule(); // paused: the last pose stays as a static frame
    },
    setCell(next) {
      if (next[0] === cell[0] && next[1] === cell[1]) return;
      cell = next;
      fit();
      atlasReady = false;
      buildAtlas();
    },
    dispose() {
      disposed = true;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      listen(false);
      ro.disconnect();
      scene.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      canvas.remove();
    },
  };
}

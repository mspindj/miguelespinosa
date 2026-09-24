import { useEffect, useRef, useState } from "react";
import { useMedia, useMotion } from "../context";
import { FALLBACK_MASK, FALLBACK_ROWS } from "./fallback";
import type { AsciiRenderer } from "./renderer";
import type { TreeSpec } from "./tree";

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

/** Pre-rendered ASCII poster. Shown until the live render has drawn a frame, and when WebGL is missing. */
function AsciiFallback() {
  const ref = useRef<HTMLPreElement>(null);
  // Fit the 64 x 30 poster into the stage: each cell is 0.7em wide and 1.1667em tall.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cols = FALLBACK_ROWS[0].length;
    const rows = FALLBACK_ROWS.length;
    const fit = () => {
      const size = Math.min(el.clientWidth / (cols * 0.7), el.clientHeight / (rows * 1.1667));
      el.style.fontSize = `${Math.max(4, size).toFixed(2)}px`;
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <pre ref={ref} className="tb-ascii-pre" aria-hidden="true">
      {FALLBACK_ROWS.map((row, r) => {
        const mask = FALLBACK_MASK[r];
        const runs: { text: string; on: boolean }[] = [];
        for (let i = 0; i < row.length; i++) {
          const on = mask[i] === "1";
          const last = runs[runs.length - 1];
          if (last && last.on === on) last.text += row[i];
          else runs.push({ text: row[i], on });
        }
        return (
          <span key={r} className="tb-ascii-row">
            {runs.map((run, i) => (run.on ? <b key={i}>{run.text}</b> : run.text))}
            {"\n"}
          </span>
        );
      })}
    </pre>
  );
}

interface Props {
  spec: TreeSpec;
  className?: string;
  caption?: string;
}

/**
 * Decorative ASCII decision tree. three.js is fetched as its own chunk after the first paint,
 * so the headline (LCP) never waits for it. Without WebGL the poster stays.
 */
export default function AsciiStage({ spec, className = "", caption }: Props) {
  const { animate } = useMotion();
  const small = useMedia("(max-width: 640px)");
  const ref = useRef<HTMLDivElement>(null);
  const instance = useRef<AsciiRenderer | null>(null);
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState(false);
  // Bigger cells on small screens: fewer glyphs, legible texture, less fill-rate.
  const cw = small ? 11 : 9;
  const ch = small ? 18 : 15;

  // Latest values for the async creation below, without re-creating the renderer.
  const latest = useRef({ animate, active, cw, ch });
  latest.current = { animate, active, cw, ch };

  const { seed, rootBranches, chosenIndex, depth } = spec;
  useEffect(() => {
    const el = ref.current;
    if (!el || !hasWebGL()) return;
    let cancelled = false;
    let r2 = 0;
    // Mount after the first paint, then load three.js.
    const r1 = requestAnimationFrame(() => {
      r2 = requestAnimationFrame(async () => {
        const { createAsciiRenderer } = await import("./renderer");
        if (cancelled) return;
        const { animate: a, active: on, cw: w, ch: h } = latest.current;
        const r = createAsciiRenderer(el, {
          spec: { seed, rootBranches, chosenIndex, depth },
          cell: [w, h],
          onReady: () => {
            if (!cancelled) setReady(true);
          },
        });
        r.setAnimate(a);
        r.setActive(on);
        instance.current = r;
      });
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(r1);
      cancelAnimationFrame(r2);
      instance.current?.dispose();
      instance.current = null;
      setReady(false);
    };
  }, [seed, rootBranches, chosenIndex, depth]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), { rootMargin: "80px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => instance.current?.setActive(active), [active]);
  useEffect(() => instance.current?.setAnimate(animate), [animate]);
  useEffect(() => instance.current?.setCell([cw, ch]), [cw, ch]);

  return (
    <div ref={ref} className={`tb-ascii ${className}`} data-ready={ready ? "true" : "false"} aria-hidden="true">
      <AsciiFallback />
      {caption && <span className="tb-ascii-cap">{caption}</span>}
    </div>
  );
}

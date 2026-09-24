// Deterministic "decision tree": one trunk, several options at each junction,
// exactly one path carried to the top (the decision). Rejected options are pruned
// after two levels. Pure math, no three.js, so the static fallback generator
// (scripts in the report) can reproduce it exactly.

export type V3 = [number, number, number];

export interface Segment {
  a: V3;
  b: V3;
  r: number;
  chosen: boolean;
}

export interface TreeSpec {
  seed: number;
  rootBranches: number;
  chosenIndex: number;
  depth: number;
}

const TAU = Math.PI * 2;

function mulberry32(seed: number) {
  let a = seed | 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const add = (a: V3, b: V3): V3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const scale = (a: V3, s: number): V3 => [a[0] * s, a[1] * s, a[2] * s];
const dot = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const normalize = (a: V3): V3 => scale(a, 1 / Math.hypot(a[0], a[1], a[2]));

/** Rodrigues rotation of v around a unit axis. */
function rotate(v: V3, axis: V3, ang: number): V3 {
  const k = normalize(axis);
  const c = Math.cos(ang);
  const s = Math.sin(ang);
  return add(add(scale(v, c), scale(cross(k, v), s)), scale(k, dot(k, v) * (1 - c)));
}

const perp = (d: V3): V3 => cross(d, Math.abs(d[0]) < 0.9 ? [1, 0, 0] : [0, 1, 0]);

export function buildTree(spec: TreeSpec) {
  const rand = mulberry32(spec.seed);
  const segments: Segment[] = [];
  let tip: V3 = [0, 0, 0];

  const grow = (p: V3, d: V3, len: number, r: number, level: number, chosen: boolean, budget: number) => {
    const q = add(p, scale(d, len));
    segments.push({ a: p, b: q, r, chosen });
    if (budget <= 0) {
      if (chosen) tip = q;
      return;
    }
    const n = level === 0 ? spec.rootBranches : rand() < 0.5 ? 2 : 3;
    const pick = chosen ? (level === 0 ? spec.chosenIndex : Math.floor(rand() * n)) : -1;
    const az0 = rand() * TAU;
    for (let i = 0; i < n; i++) {
      const tilt = 0.5 + rand() * 0.35;
      let nd = rotate(d, perp(d), tilt);
      nd = rotate(nd, d, az0 + (i * TAU) / n);
      nd = normalize(add(nd, [0, 0.45, 0]));
      const isChosen = i === pick;
      const nextBudget = isChosen ? budget - 1 : chosen ? Math.min(budget - 1, 2) : budget - 1;
      grow(q, nd, level === 0 ? 1.1 : len * 0.8, Math.max(r * 0.76, 0.045), level + 1, isChosen, nextBudget);
    }
  };

  grow([0, 0, 0], [0, 1, 0], 0.9, 0.15, 0, true, spec.depth);
  return { segments, tip };
}

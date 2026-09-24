import { createContext, useContext, useEffect, useState, useSyncExternalStore } from "react";

export interface MotionState {
  /** OS-level prefers-reduced-motion. Disables Lenis, scramble, blinking, WebGL animation. */
  reduced: boolean;
  /** User toggle in the status bar (key M). Pauses ambient motion: ticker and ASCII rotation. */
  motionOn: boolean;
  toggleMotion: () => void;
}

export const MotionContext = createContext<MotionState>({ reduced: false, motionOn: true, toggleMotion: () => {} });
export const useMotion = () => {
  const m = useContext(MotionContext);
  return { ...m, animate: !m.reduced && m.motionOn };
};

export function useMedia(query: string, initial = false) {
  const [match, setMatch] = useState(() => (typeof window === "undefined" ? initial : window.matchMedia(query).matches));
  useEffect(() => {
    const mq = window.matchMedia(query);
    const on = () => setMatch(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [query]);
  return match;
}

export const useReducedMotion = () => useMedia("(prefers-reduced-motion: reduce)");

/* Active section: a tiny external store so only the header and status bar re-render on scroll. */
export interface ActiveSection {
  id: string;
  label: string;
}
let active: ActiveSection = { id: "", label: "" };
const listeners = new Set<() => void>();
export const sectionStore = {
  get: () => active,
  set(next: ActiveSection) {
    if (next.id === active.id && next.label === active.label) return;
    active = next;
    listeners.forEach((l) => l());
  },
  subscribe(l: () => void) {
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  },
};
export const useActiveSection = () => useSyncExternalStore(sectionStore.subscribe, sectionStore.get, sectionStore.get);

/** Fires once when the element enters the viewport. */
export function useInViewOnce<T extends Element>(ref: React.RefObject<T | null>, rootMargin = "0px 0px -15% 0px") {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, rootMargin, seen]);
  return seen;
}

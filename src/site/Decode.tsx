import { useEffect, useRef } from "react";
import { useInViewOnce, useMotion } from "./context";

const NOISE = "!<>-_\\/[]{}=+*^?#%01";

interface Props {
  text: string;
  className?: string;
  /** Delay in ms after entering the viewport. */
  delay?: number;
  duration?: number;
  onDone?: () => void;
}

/**
 * Character decode. Screen readers get the real text (visually hidden copy); the scrambling
 * layer is aria-hidden and written straight to the DOM, so React does not re-render per frame.
 * Monospace + same character count means the scramble never reflows the line.
 */
export default function Decode({ text, className = "", delay = 0, duration = 1300, onDone }: Props) {
  const { animate } = useMotion();
  const wrap = useRef<HTMLSpanElement>(null);
  const layer = useRef<HTMLSpanElement>(null);
  const seen = useInViewOnce(wrap, "0px 0px -20% 0px");
  const done = useRef(false);
  const doneCb = useRef(onDone);
  useEffect(() => {
    doneCb.current = onDone;
  }, [onDone]);

  useEffect(() => {
    const el = layer.current;
    if (!el) return;
    if (!animate || done.current) {
      el.textContent = text;
      if (!done.current) {
        done.current = true;
        doneCb.current?.();
      }
      return;
    }
    if (!seen) {
      el.textContent = text.replace(/\S/g, "·");
      return;
    }
    let raf = 0;
    let last = 0;
    const start = performance.now() + delay;
    const tick = (now: number) => {
      const p = (now - start) / duration;
      if (p >= 1) {
        el.textContent = text;
        done.current = true;
        doneCb.current?.();
        return;
      }
      if (now - last > 45) {
        last = now;
        let out = "";
        for (let i = 0; i < text.length; i++) {
          const ch = text[i];
          const resolveAt = (i / text.length) * 0.75;
          if (ch === " " || p > resolveAt + 0.25) out += ch;
          else if (p < 0) out += "·";
          else out += NOISE[(Math.random() * NOISE.length) | 0];
        }
        el.textContent = out;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, animate, text, delay, duration]);

  return (
    <span ref={wrap} className={className}>
      <span className="tb-sr">{text}</span>
      <span ref={layer} aria-hidden="true">
        {animate ? text.replace(/\S/g, "·") : text}
      </span>
    </span>
  );
}

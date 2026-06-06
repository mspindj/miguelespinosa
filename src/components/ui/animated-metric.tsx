import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

type ParsedMetric =
  | { kind: "simple"; prefix: string; number: number; suffix: string }
  | { kind: "range"; from: number; to: number; suffix: string }
  | { kind: "decimal"; prefix: string; number: number; suffix: string; decimals: number };

function parse(value: string): ParsedMetric {
  // "0 → 12"
  const range = value.match(/^(\d+)\s*→\s*(\d+)(.*)$/);
  if (range) return { kind: "range", from: +range[1], to: +range[2], suffix: range[3] };
  // "$2.3K"
  const decimal = value.match(/^([^\d]*)(\d+\.\d+)(.*)$/);
  if (decimal) {
    const decimals = decimal[2].split(".")[1].length;
    return { kind: "decimal", prefix: decimal[1], number: +decimal[2], suffix: decimal[3], decimals };
  }
  // "−40%", "96%+", "23%"
  const simple = value.match(/^([^\d]*)(\d+)(.*)$/);
  if (simple) return { kind: "simple", prefix: simple[1], number: +simple[2], suffix: simple[3] };
  return { kind: "simple", prefix: "", number: 0, suffix: value };
}

interface AnimatedMetricProps {
  value: string;
  className?: string;
}

export function AnimatedMetric({ value, className = "" }: AnimatedMetricProps) {
  const parsed = parse(value);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(() => {
    // Initial zeroed state
    if (parsed.kind === "range") return `${parsed.from} → ${parsed.from}`;
    if (parsed.kind === "decimal") return `${parsed.prefix}0.${"0".repeat(parsed.decimals)}${parsed.suffix}`;
    return `${parsed.prefix}0${parsed.suffix}`;
  });

  useEffect(() => {
    if (!isInView) return;

    if (parsed.kind === "range") {
      const ctrl = animate(parsed.from, parsed.to, {
        duration: 1.4,
        ease: "easeOut",
        onUpdate: (v) => setDisplay(`${parsed.from} → ${Math.round(v)}${parsed.suffix}`),
      });
      return ctrl.stop;
    }

    if (parsed.kind === "decimal") {
      const ctrl = animate(0, parsed.number, {
        duration: 1.4,
        ease: "easeOut",
        onUpdate: (v) => setDisplay(`${parsed.prefix}${v.toFixed(parsed.decimals)}${parsed.suffix}`),
      });
      return ctrl.stop;
    }

    // simple
    const ctrl = animate(0, parsed.number, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(`${parsed.prefix}${Math.round(v)}${parsed.suffix}`),
    });
    return ctrl.stop;
  }, [isInView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {display}
    </span>
  );
}

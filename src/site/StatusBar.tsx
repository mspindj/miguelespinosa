import { useEffect, useState } from "react";
import { useActiveSection, useMotion } from "./context";

const clock = new Intl.DateTimeFormat("en-GB", {
  timeZone: "America/Bogota",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

function useBogotaTime() {
  const [now, setNow] = useState(() => clock.format(new Date()));
  useEffect(() => {
    let interval = 0;
    const tick = () => setNow(clock.format(new Date()));
    // Align to the minute boundary, then tick every minute.
    const timeout = window.setTimeout(() => {
      tick();
      interval = window.setInterval(tick, 60_000);
    }, 60_000 - (Date.now() % 60_000) + 50);
    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, []);
  return now;
}

function useScrollPercent() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    let raf = 0;
    const measure = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setPct(max > 0 ? Math.round(Math.min(1, Math.max(0, window.scrollY / max)) * 100) : 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return pct;
}

interface Props {
  onKeys: () => void;
}

export default function StatusBar({ onKeys }: Props) {
  const section = useActiveSection();
  const pct = useScrollPercent();
  const time = useBogotaTime();
  const { motionOn, toggleMotion, reduced } = useMotion();

  return (
    <aside className="tb-status" aria-label="Status bar">
      <span className="tb-status-cell tb-status-sec">
        <span className="tb-live" aria-hidden="true" />
        <span className="tb-status-k">Sec</span> {section.label || "Index"}
      </span>
      <span className="tb-status-cell tb-status-pct">
        <span className="tb-status-k">Scroll</span> {String(pct).padStart(3, "0")}%
      </span>
      <span className="tb-status-cell tb-status-time">
        <span className="tb-status-k">Bogotá</span> <time>{time}</time>
      </span>
      <span className="tb-status-cell tb-status-hints">
        <kbd>1</kbd>–<kbd>5</kbd> record <kbd>H</kbd> home <kbd>M</kbd> motion <kbd>?</kbd> keys
      </span>
      <span className="tb-status-actions">
        {!reduced && (
          <button type="button" role="switch" aria-checked={motionOn} className="tb-status-btn" onClick={toggleMotion}>
            <span className="tb-status-k">Motion</span>{" "}
            <span aria-hidden="true" className={motionOn ? "tb-on" : undefined}>
              {motionOn ? "On" : "Off"}
            </span>
          </button>
        )}
        <button type="button" className="tb-status-btn" onClick={onKeys} aria-haspopup="dialog" aria-label="Keys: keyboard shortcuts">
          <kbd aria-hidden="true">?</kbd> <span className="tb-status-k">Keys</span>
        </button>
      </span>
    </aside>
  );
}

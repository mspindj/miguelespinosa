import "@fontsource-variable/martian-mono/wdth.css";
import "@fontsource-variable/geist/wght.css";
import "./site.css";

import Lenis from "lenis";
import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { matchPath, Outlet, useLocation, useNavigate } from "react-router-dom";
import { caseHref, getRecord, recordId, records } from "./content/cases";
import { DEFAULT_TITLE, site } from "./content/site";
import { getArticle } from "./content/insights";
import { MotionContext, useReducedMotion } from "./context";
import ShortcutsDialog from "./ShortcutsDialog";
import SiteHeader from "./SiteHeader";
import StatusBar from "./StatusBar";

/** Old anchors that still arrive from links elsewhere. */
const HASH_ALIASES: Record<string, string> = { philosophy: "manifesto" };

const STATIC_TITLES: Record<string, string> = {
  "/about": "About",
  "/insights": "Insights",
  "/ai-design-os": "The AI Design Operating System",
  "/privacy": "Privacy Policy",
};

function titleFor(pathname: string) {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/") return DEFAULT_TITLE;
  if (STATIC_TITLES[path]) return `${STATIC_TITLES[path]} | ${site.name}`;
  const c = matchPath("/case-study/:slug", path);
  const r = c ? getRecord(c.params.slug) : undefined;
  if (r) return `${r.title} · ${recordId(r)} | ${site.name}`;
  const a = matchPath("/insights/:slug", path);
  const article = a ? getArticle(a.params.slug) : undefined;
  if (article) return `${article.title} | ${site.name}`;
  return `Record not found | ${site.name}`;
}

/**
 * Shell for every redesigned route: header, status bar, skip link, Lenis, keyboard layer,
 * per-route document.title, and scroll-to-top / scroll-to-hash on navigation.
 */
export default function SiteLayout() {
  const { pathname, hash, key } = useLocation();
  const navigate = useNavigate();

  const reduced = useReducedMotion();
  const [motionOn, setMotionOn] = useState(true);
  const toggleMotion = useCallback(() => setMotionOn((m) => !m), []);
  const motion = useMemo(() => ({ reduced, motionOn, toggleMotion }), [reduced, motionOn, toggleMotion]);
  const animate = !reduced && motionOn;

  const [keysOpen, setKeysOpen] = useState(false);
  const [keysEnabled, setKeysEnabled] = useState(true);
  const menuOpen = useRef(false);
  const lenis = useRef<Lenis | null>(null);

  // Paper behind overscroll, restored when leaving the redesigned routes.
  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.backgroundColor;
    html.style.backgroundColor = "#ECECE6";
    return () => {
      html.style.backgroundColor = prev;
    };
  }, []);

  useEffect(() => {
    document.title = titleFor(pathname);
  }, [pathname]);
  useEffect(
    () => () => {
      document.title = DEFAULT_TITLE;
    },
    [],
  );

  // Smooth scroll, never under reduced motion. Fully destroyed on unmount.
  useEffect(() => {
    if (reduced) return;
    const l = new Lenis({ autoRaf: true, lerp: 0.14 });
    lenis.current = l;
    return () => {
      l.destroy();
      lenis.current = null;
    };
  }, [reduced]);

  // Route change: scroll to the hash target (and move focus there) or to the top.
  useEffect(() => {
    const raw = decodeURIComponent(hash.slice(1));
    const id = HASH_ALIASES[raw] ?? raw;
    const target = id ? document.getElementById(id) : null;
    if (target) {
      const raf = requestAnimationFrame(() => {
        if (lenis.current) lenis.current.scrollTo(target, { duration: 1.1 }); // Lenis honours scroll-margin-top
        else target.scrollIntoView({ block: "start" });
        target.focus({ preventScroll: true });
      });
      return () => cancelAnimationFrame(raf);
    }
    if (lenis.current) lenis.current.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
  }, [pathname, hash, key]);

  // Keyboard layer. Never touches Tab, Space, arrows or modified keys; ignores form fields.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey || e.repeat) return;
      const t = e.target instanceof Element ? e.target : null;
      if (t?.closest("input, textarea, select, [contenteditable]:not([contenteditable='false'])")) return;
      if (!keysEnabled || menuOpen.current) return;
      if (keysOpen && e.key !== "?") return;
      const k = e.key.toLowerCase();
      if (e.key === "?") {
        e.preventDefault();
        setKeysOpen((o) => !o);
      } else if (/^[1-5]$/.test(k) && records[Number(k) - 1]) {
        navigate(caseHref(records[Number(k) - 1]));
      } else if (k === "h") {
        // "h" alone or the "g h" sequence: "g" is a harmless prefix, "h" does the work.
        navigate("/");
      } else if (k === "m") {
        if (!reduced) toggleMotion();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, keysEnabled, keysOpen, reduced, toggleMotion]);

  const onMenuToggle = useCallback((open: boolean) => {
    menuOpen.current = open;
    if (open) lenis.current?.stop();
    else lenis.current?.start();
  }, []);

  const skip = (e: React.MouseEvent) => {
    e.preventDefault();
    const main = document.getElementById("main-content");
    main?.focus();
    main?.scrollIntoView({ block: "start" });
  };

  return (
    <MotionContext.Provider value={motion}>
      <div className="tb" data-motion={animate ? "on" : "off"}>
        <a href="#main-content" className="tb-skip" onClick={skip}>
          Skip to content
        </a>
        <SiteHeader onMenuToggle={onMenuToggle} />
        <main id="main-content" tabIndex={-1}>
          {/* Lazy routes: keep the viewport height while their chunk loads. */}
          <Suspense fallback={<div className="tb-loading" aria-busy="true" />}>
            <Outlet />
          </Suspense>
        </main>
        <StatusBar onKeys={() => setKeysOpen(true)} />
        <ShortcutsDialog
          open={keysOpen}
          onClose={() => setKeysOpen(false)}
          enabled={keysEnabled}
          onToggleEnabled={() => setKeysEnabled((v) => !v)}
        />
      </div>
    </MotionContext.Provider>
  );
}

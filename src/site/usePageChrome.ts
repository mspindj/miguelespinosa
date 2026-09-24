import { useEffect } from "react";
import { sectionStore } from "./context";

/**
 * Wires the current page into the shell once its DOM exists: the section spy that feeds the
 * header and the status bar, and the one-shot "compile" reveals. Every page calls it, because
 * lazy pages mount after the layout's own effects have already run.
 */
export function usePageChrome() {
  useEffect(() => {
    const el = document.getElementById("main-content");
    if (!el) return;
    const sections = Array.from(el.querySelectorAll<HTMLElement>("[data-tb-section]"));
    if (sections[0]) sectionStore.set({ id: sections[0].id, label: sections[0].dataset.tbSection ?? "" });
    const spy = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const t = e.target as HTMLElement;
            sectionStore.set({ id: t.id, label: t.dataset.tbSection ?? "" });
          }
        }
      },
      { rootMargin: "-45% 0px -54% 0px" },
    );
    sections.forEach((s) => spy.observe(s));

    const reveal = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            reveal.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    el.querySelectorAll("[data-tb-reveal]").forEach((n) => reveal.observe(n));
    return () => {
      spy.disconnect();
      reveal.disconnect();
      sectionStore.set({ id: "", label: "" });
    };
  }, []);
}

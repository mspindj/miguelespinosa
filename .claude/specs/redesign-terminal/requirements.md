# Redesign "Terminal Brutal": requirements

Feature: migrate the whole of miguelespinosa.co to the visual system of lab prototype C ("Terminal Brutal"), chosen by Miguel on 2026-09-24 after reviewing three navigable prototypes (`~/Documents/dev/miguelespinosa-lab`, commit e5cc5db).
Scope decided by Miguel: every page at once ("todo de una vez"). The flamingo-feather image stays on the TP Design System case (Miguel's call). The word "Flamingo" must not appear in visible text.

Goal: an Awwwards-grade site (target Honorable Mention / SOTD) that remains fast and scannable for C-level/VP hiring managers on corporate hardware.

## R1. Routes and URLs (no SEO loss)
- R1.1 Every URL that exists today keeps working with the same path: `/`, `/about`, `/case-study/tp-design-system`, `/case-study/design-transformation`, `/case-study/tati-ai`, `/case-study/cash-conversion`, `/case-study/birdie-club`, `/ai-design-os`, `/privacy`, `/insights`, the 21 `/insights/<slug>` article routes, and the static `/ai-design-os.html` guide.
- R1.2 Unknown paths render a styled 404 in the new system with a link home.
- R1.3 Home anchors `#work`, `#manifesto` (replaces `#philosophy`), `#insights`, `#contact` scroll to their sections, also when arriving from another route.
- R1.4 Each route sets a specific `document.title`; the default title and all meta/OG/JSON-LD in `index.html` stay.

## R2. Content integrity
- R2.1 No content loss: every section, metric, list item and quote on today's five case pages appears in the new case pages (restructured as Decision Records is fine; dropped content is not).
- R2.2 No invented content: no new metrics, clients, testimonials or claims. Approved exceptions (Miguel, 2026-09-24), each dated in the UI: Design Transformation team 0 → 20+ at TP (Miguel's figure); The Birdie Club 185 paying members (verified via the public `founders-count` edge function, `active: 185`) and 200+ registered users (Miguel's figure); the composed BBVA summary. New microcopy is limited to labels and system UI (record IDs, section labels, status bar), listed in design.md.
- R2.3 The 21 article bodies are not edited; they render through the redesigned `ArticleLayout`.
- R2.4 Text newly written or restructured for this migration contains no em dash (—). Pre-existing article bodies are out of scope (tracked separately).
- R2.5 "Flamingo" appears nowhere in visible text, alt text or published file names introduced by this change.
- R2.6 The AI Design OS lead-magnet form keeps its behavior: POST `/api/subscribe` with the email, loading/success/error states, and the link to `/ai-design-os.html` on success. `api/subscribe.ts` is not modified.

## R3. Visual system (from prototype C)
- R3.1 Palette: paper `#ECECE6`, ink `#0E0E0E`, secondary ink `#55554F`, one accent `#FF4F00` used only for selected/active/hover/focus/live states (as a fill behind ink text on hover of primary actions, 5.86:1) and never as text on paper. Exception: glyphs of the decorative, `aria-hidden` ASCII art (chosen path), which are image, not text.
- R3.2 Type: Martian Mono variable (wdth, wght) for display, labels and UI; Geist variable for long-form text. Self-hosted via @fontsource.
- R3.3 Exposed 12-column grid with 1px rules, zero border radius.
- R3.4 Home = prototype C home; case pages = Decision Record template; the same language extends to About, Insights hub, articles, AI Design OS and Privacy.

## R4. Interaction
- R4.1 Keyboard layer: `1`–`5` open records, `h` home, `m` toggles motion, `?` opens the shortcuts dialog. Ignored while typing in inputs; never overrides Tab, Space or arrows. A control can turn single-key shortcuts off (WCAG 2.1.4).
- R4.2 Fixed status bar with current section, scroll %, Bogotá time and motion toggle. Below 768px it shows a subset so the bar never wraps or overflows: section, Bogotá time (unlabelled), motion toggle and the `?` keys button; on articles the reading % replaces the time.
- R4.3 ASCII WebGL decision tree on home (and on case pages ≥1024px), with a static ASCII poster fallback.

## R5. Accessibility (Awwwards weights usability ~30%)
- R5.1 WCAG 2.2 AA contrast for all text; visible focus; skip link on every page; semantic headings and tables.
- R5.2 Accessible mobile menu (dialog semantics, Esc closes, focus returns).
- R5.3 `prefers-reduced-motion`: no smooth scroll, no scramble, no blinking, static WebGL frame. Motion toggle stops all non-essential animation, including smooth scroll (WCAG 2.2.2). Under OS reduced motion everything is already static, so the toggle is hidden.
- R5.4 Canvas is decorative (`aria-hidden`); all text is real HTML.

## R6. Performance (target hardware: corporate laptops)
- R6.1 Scroll-linked (scrubbed) animation touches only `transform`, `opacity`, `clip-path`; variable-font axes are never tied to scroll position. One-shot transitions (a heading settling once on enter, row hover) may animate font axes. The WebGL canvas may redraw on scroll (tree rotation) because it is gated by R6.3 and never re-lays out text. Ruling 2026-09-24: the glitch Miguel saw in prototype A came from scroll-scrubbed weight on display type.
- R6.2 Routes other than Home, case pages and the 404 are lazy-loaded (the 404 is also rendered by the case page for unknown slugs, ~1 KB). The WebGL code loads after first paint in its own chunk and never on routes that don't show it. No React Three Fiber (keeps React 18; lighter chunk).
- R6.3 Rendering stops when the canvas is offscreen or motion is off; DPR capped at 1.75.
- R6.4 No horizontal scroll at 375px on any route.

## R7. Delivery
- R7.1 Work happens on branch `redesign-terminal`; production deploy (push to `main`) only with Miguel's explicit OK.
- R7.2 `bun run build` passes; lint does not get worse than the current baseline.
- R7.3 Before merge: `spec-conformance-review` (interno) clean, Kimi + GPT reviews on the final diff, findings verified, smoke on a Vercel preview.

### VERDICT: PASS WITH GAPS

### Requirements coverage

**R1. Routes**
- R1.1 ✅ covered — all static + 5 case slugs via `:slug` (src/App.tsx:39-43; slugs in src/site/content/cases.ts records), all 21 article routes present and matching the old file 1:1 (src/App.tsx:45-65), `/ai-design-os.html` untouched and still linked on success (src/site/pages/SubscribeForm.tsx:~84).
- R1.2 ✅ covered — catch-all inside SiteLayout (src/App.tsx:66), styled "Record not found" + `Link to="/"` (src/site/pages/NotFound.tsx:~24).
- R1.3 ✅ covered — hash effect with focus + alias `#philosophy→#manifesto` (src/site/SiteLayout.tsx:17, 98-112); section ids on Home (`id="work"/"manifesto"/"insights"/"contact"`); header links use `/#…` (src/site/SiteHeader.tsx:8-13). Works cross-route since Home is in the main chunk.
- R1.4 ✅ covered — per-route titles via `titleFor` + effect (src/site/SiteLayout.tsx:26-37, 75-83); index.html not touched in diff.

**R2. Content**
- R2.1 ✅ covered — section-by-section parity verified for all five records against the deleted pages (metrics, lists, quotes, links, images: tp-key-visual + tati-hero), src/site/content/cases.ts. TP feather image kept with neutral alt (cases.ts DR-001 `image`).
- R2.2 ✅ covered — new strings match the design.md microcopy list; the BBVA records-table summary is the documented "one composed sentence" (cases.ts DR-005 `summary`; design.md:59).
- R2.3 ✅ covered — old import path is a shim re-exporting the new layout with compatible props (`patternClass` optional) (src/components/article/ArticleLayout.tsx:3); the 21 article files are absent from the diff.
- R2.4 ✅ covered — em dashes systematically rewritten to commas/colons/parens/periods in all new visible copy (cases.ts, site.ts, aiDesignOs.ts, pages); none found in added strings.
- R2.5 ✅ covered — `flamingo.webp→tp-key-visual.webp` rename, `flamingo.jpeg` deleted, neutral alt "Abstract feather texture…", "(Flamingo)" scrubbed from DR-002 Systems pillar (cases.ts:~320).
- R2.6 ✅ covered — identical request `POST /api/subscribe` body `{email, source:"ai-design-os"}` (src/site/pages/SubscribeForm.tsx:~27-40), loading "Saving...", success link to `/ai-design-os.html`, error state; `api/subscribe.ts` not in diff.

**R3. Visual system**
- R3.1 ✅ covered — tokens `--paper/--ink/--ink-2/--accent` (src/site/site.css:22-26); accent only on selected/active/focus/live (nav `aria-current`, pressed tags/switch, `Verdict-on`, focus ring, selection, live dot, caret); never accent text on paper; ASCII chosen-path glyphs are `aria-hidden` (src/site/ascii/AsciiStage.tsx:~48).
- R3.2 ⚠️ partial — Martian Mono imported as `…/martian-mono/wdth.css` only (src/site/SiteLayout.tsx:1); [UNVERIFIED — package file not in diff] fontsource per-axis files pin other axes, so wght (used 100→800 everywhere, incl. the compile animation) may be fixed at 400. Geist wght import fine (wght-only font).
- R3.3 ✅ covered — 12-col 1px rules via `.tb-sec` gradients (site.css:~113-125), blanket `border-radius: 0` (site.css:~60).
- R3.4 ✅ covered — all pages implemented in the system under src/site/pages/*.

**R4. Interaction**
- R4.1 ✅ covered — 1–5/h/m/? layer, input-guard, no modifier keys, dialog-open guard, off switch (src/site/SiteLayout.tsx:114-137; src/site/ShortcutsDialog.tsx:~84-97).
- R4.2 ✅ covered — section/scroll %/Bogotá time/motion/keys (src/site/StatusBar.tsx:83-99); <768px subset with labels hidden, % hidden, time unlabelled (site.css:~505-520); articles: `data-reading` shows Read % and hides time on mobile (StatusBar.tsx:~78; site.css:~524-532).
- R4.3 ✅ covered — AsciiStage on Home (src/site/pages/Home.tsx:~45) and case pages ≥1024 via `useMedia` (src/site/pages/CasePage.tsx:~247, ~300); static poster fallback incl. no-WebGL path (AsciiStage.tsx:~30-63, ~76).

**R5. Accessibility**
- R5.1 ✅ covered — contrast ratios documented and plausible (site.css:5-13), ink keyline + accent focus (site.css:~77-83), skip link in layout (SiteLayout.tsx:~160), scoped th/captions/heading hierarchy throughout.
- R5.2 ✅ covered — native `<dialog>` + `showModal`, Esc native, focus return guarded for link navigation (src/site/SiteHeader.tsx:~36-60, ~95-120).
- R5.3 ✅ covered — Lenis created only when motion allowed (SiteLayout.tsx:87-95), `prefers-reduced-motion` + `[data-motion="off"]` kill all animation/transition (site.css:~3255-3288), Decode renders final text (src/site/Decode.tsx:~37), renderer draws one static frame (renderer.ts `schedule`).
- R5.4 ✅ covered — container, canvas and poster all `aria-hidden` (AsciiStage.tsx:~128; renderer.ts:~235).

**R6. Performance**
- R6.1 ✅ covered — scroll-linked work is transform/text only (status progress `scaleX`, WebGL yaw); font axes only on one-shot enter/hover (site.css compile + row hovers); settled-flag prevents replay (SiteLayout.tsx:52-56).
- R6.2 ✅ covered — About/Insights/AIOS/Privacy/21 articles lazy (src/App.tsx:8-33); three.js via dynamic `import("./renderer")` after double rAF (AsciiStage.tsx:~90-105); no R3F in package.json; React stays 18.
- R6.3 ✅ covered — IntersectionObserver gates RAF (AsciiStage.tsx:~112-118), motion flag gates RAF, DPR cap `MAX_DPR = 1.75` + `setPixelRatio` (renderer.ts:21, ~230).
- R6.4 ⚠️ partial — strong provisions (`overflow-x: clip` on `.tb`, mobile card layouts replacing tables, clamp-based title sizing), but "no horizontal scroll at 375px on any route" is runtime-verifiable only.

**R7. Delivery**
- R7.1/R7.2/R7.3 ⚠️ unverifiable from a diff — branch, `bun run build`, lint baseline, reviews and preview smoke are process items. Static scan found no obvious type/import errors; both lockfiles updated consistently.

### Design decisions respected
1. ✅ React 18 + RR6 + Vite kept; R3F replaced by vanilla three (package.json; src/site/ascii/renderer.ts).
2. ✅ New code in `src/site/`; every rule scoped under `.tb`, keyframes `tb-` prefixed (site.css:20+).
3. ✅ Tailwind kept; no Tailwind utilities in new pages (all `tb-*` classes); old deps retained.
4. ✅ One layout for every route (src/App.tsx:38 `Route element={<SiteLayout />}`).
5. ✅ Case URLs unchanged; order DR-001→DR-005 matches; keys 1–5 follow array order (SiteLayout.tsx:126-127); BBVA in Archive group on index (Home.tsx `archive`).
6. ✅ Status "Accepted" rendered for all five (CasePage meta dd; Home RecordRow status cell).
7. ✅ Articles: container-only redesign, LOG-NNN, category/date/reading time from lib, long-form styles incl. `.article-callout`/`.article-list`, prev/next (src/site/article/ArticleLayout.tsx; site.css `.tb-prose`).
- Content model mapping ⚠️ — design.md:24 maps **pillars → IMPLEMENTATION**, but DR-002 places "The Four Pillars" in `decision` (src/site/content/cases.ts:~298). No content lost and source order preserved; section grouping deviates from the documented mapping. Judgement call, not a blocker.
- Microcopy list ✅ adhered to; no unlisted new copy found.

### Out-of-scope changes
- None. `.claude/specs/*` are the spec docs themselves; the `index.css` change (dropping the Google Fonts import) is part of R3.2 self-hosting; all deletions are the migration itself. `api/subscribe.ts`, `index.html`, `src/lib/articles.ts` untouched.

### Blockers (must fix before merge)
- None proven from the diff.

### Unverified concerns
1. **Font axis (highest risk):** [UNVERIFIED — package contents not in diff] `import "@fontsource-variable/martian-mono/wdth.css"` (SiteLayout.tsx:1). If fontsource's per-axis convention holds, wght is pinned at 400, breaking all 600/700/800 UI text and the wght compile animation (R3.2). Check `node_modules/@fontsource-variable/martian-mono/wdth.css` for the declared wght range; likely fix is importing `full.css`.
2. **Broken imports in untouched files:** [UNVERIFIED — the 21 article files are not in the diff] deleted shared modules (`Header`, `Footer`, `NavLink`, `ReadingProgress`, `InsightCard`, `FilterPills`, `SearchCommand`, `animated-metric`, `SystemDiagram`, `case-study/*`, toast/QueryClient providers in App). If any surviving file imports one, the build fails (R7.2). Grep remaining src for those import paths before merge.
3. **Default title match:** [UNVERIFIED — index.html not in diff] `DEFAULT_TITLE` (src/site/content/site.ts:3) is written over `document.title` on `/`; confirm it equals the existing `<title>` in index.html (R1.4).
4. **ASCII glyph edge darkening:** post pass outputs premultiplied `vec4(col * g, g)` (renderer.ts:~76) but the material uses default NormalBlending with `transparent: true` (~:168), so stored rgb is multiplied by alpha twice (g²); glyph antialiasing will render slightly darker than the poster. Verify canvas-vs-poster parity on a preview; if visible, use CustomBlending (One, OneMinusSrcAlpha).
5. **Lenis anchor offset:** comment claims "Lenis honours scroll-margin-top" (SiteLayout.tsx:104); if it doesn't, hash landings sit 56px high under the sticky header. Verify `/#work` arrival on a preview.
6. **375px horizontal scroll (R6.4)** and status-bar fit on narrow screens: provisions exist; verify on a real viewport across all routes.
7. **`/ai-design-os.html` static asset:** not in diff; confirm it still exists in `public/`.
8. **tasks.md absent:** execution decisions unknown; specifically the BBVA composed summary is documented as "pending Miguel's OK" (design.md:59) — that approval cannot be confirmed here. R7.1/R7.3 items (branch, reviews, preview smoke) likewise unverifiable from this diff.

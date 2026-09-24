### VERDICT: PASS WITH GAPS

### Requirements coverage

**R1. Routes and URLs**
- R1.1 ✅ src/App.tsx:61-88 — all routes preserved: `/`, `/about`, `/case-study/:slug` (5 slugs served from `src/site/content/cases.ts`), `/ai-design-os`, `/privacy`, `/insights`, 21 article routes (counted, matches old list 1:1), catch-all at :88. `/ai-design-os.html` untouched (not in diff; linked at src/site/pages/SubscribeForm.tsx:72).
- R1.2 ✅ src/App.tsx:88 `<Route path="*" element={<NotFound />} />` + src/site/pages/NotFound.tsx:23-26 (styled 404, link home).
- R1.3 ✅ src/site/SiteLayout.tsx:20 (`HASH_ALIASES` philosophy→manifesto) and :103-119 (hash scroll + focus on arrival from any route); section ids src/site/pages/Home.tsx:142 (`#work`), :233 (`#manifesto`), :267 (`#insights`), :310 (`#contact`).
- R1.4 ✅ src/site/SiteLayout.tsx:30-43 (`titleFor`) + :79-81 (effect). index.html untouched (not in diff).

**R2. Content integrity**
- R2.1 ✅ src/site/content/cases.ts — section-by-section check of all five cases against the deleted pages: every metric (TP 5/5, DT 4/4, Tati 4/4, Birdie 4/4, BBVA 6/6), every list, both BBVA quotes, award callout, product rows, ambassador stats present.
- R2.2 ⚠️ partial — three new label strings not in the design.md microcopy list: src/site/pages/Home.tsx:143 `meta={`${records.length} entries`}` ("5 entries"), src/site/pages/Home.tsx:311 `meta="Email · LinkedIn · Behance · CV"`, src/site/pages/Home.tsx:307 `"CV (PDF)"`. Also see judgment call on the BBVA summary below.
- R2.3 ✅ src/components/article/ArticleLayout.tsx:3 re-exports `src/site/article/ArticleLayout.tsx`; no article file touched in diff.
- R2.4 ✅ scanned all new/restructured copy (cases.ts, site.ts, aiDesignOs.ts, pages, shell): only en dashes (year ranges), middots and arrows; no `—` found.
- R2.5 ✅ `flamingo.webp → tp-key-visual.webp` rename, `flamingo.jpeg` deleted, neutral alt at src/site/content/cases.ts:29, "(Flamingo)" removed from the DT Systems pillar (src/site/content/cases.ts:282 vs deleted DesignTransformationCase).
- R2.6 ✅ src/site/pages/SubscribeForm.tsx:24-38 — identical POST `/api/subscribe`, body `{ email, source: "ai-design-os" }`, `res.ok` success, loading "Saving...", error state, `/ai-design-os.html` link on success. `api/subscribe.ts` not in diff.

**R3. Visual system**
- R3.1 ✅ src/site/site.css:18-24 (exact hex tokens). Accent usage audited: selection, focus ring, cursor block, live dot, aria-current nav background, switch/tag/verdict backgrounds, chosen-path glyphs (aria-hidden), `Motion On` text only on ink (site.css:621). No accent-as-text-on-paper found.
- R3.2 ✅ src/site/SiteLayout.tsx:1-2 (`@fontsource-variable/martian-mono/wdth.css`, `geist/wght.css`); stacks at site.css:34-35. But see Unverified #1 on the wdth-only subpath.
- R3.3 ✅ site.css:148-163 (exposed column rules, 1px) and :131-135 (`border-radius: 0` on `.tb *`).
- R3.4 ✅ src/site/pages/Home.tsx (C home), src/site/pages/CasePage.tsx (Decision Record + CONSTRAINTS/LOG), same `.tb` system across About/Insights/Article/AI-OS/Privacy/404.

**R4. Interaction**
- R4.1 ✅ src/site/SiteLayout.tsx:121-146 — 1–5 records, h home, m motion, `?` dialog; input/contenteditable guard, no modifier/repeat, only `?` calls preventDefault; off-switch at src/site/ShortcutsDialog.tsx:80-93 (WCAG 2.1.4).
- R4.2 ⚠️ partial — full bar (section, scroll %, Bogotá time, motion toggle) at src/site/StatusBar.tsx:76-98, but site.css:633-650 hides `.tb-status-pct` below 768px (except on articles) and site.css:669-678 hides the time on articles below 768px. On a 375px non-article page the status bar shows no scroll %. Deliberate responsive trade-off visible in the diff, but a literal deviation from R4.2.
- R4.3 ✅ src/site/pages/Home.tsx:41; case pages gated at src/site/pages/CasePage.tsx:310 (`useMedia("(min-width: 1024px)")`) + :345-351; static poster fallback src/site/ascii/AsciiStage.tsx:44-79.

**R5. Accessibility**
- R5.1 ✅ contrast values documented site.css:6-16; focus ring+keyline site.css:80-90; skip link src/site/SiteLayout.tsx:163-165 (single layout ⇒ every page); semantic tables (src/site/pages/Home.tsx:145-183, captions/scopes) and headings.
- R5.2 ✅ src/site/SiteHeader.tsx:99-127 — native `<dialog>` + `showModal()`, native Esc, focus return at :60-64.
- R5.3 ✅ Lenis only when `animate` src/site/SiteLayout.tsx:93-101 (destroyed on toggle); Decode static when motion off src/site/Decode.tsx:32-38; renderer draws one static frame src/site/ascii/renderer.ts:355-379; reduced-motion CSS site.css:3254-3267; cursor blink self-terminates (5 iterations) site.css:243-257.
- R5.4 ✅ canvas + poster aria-hidden src/site/ascii/AsciiStage.tsx:128 and renderer.ts:242; Decode keeps sr-only real text src/site/Decode.tsx:72-76.

**R6. Performance**
- R6.1 ✅ scroll consumers limited to: status-bar transform gauge (site.css:657-668), one-shot compile reveals on enter (site.css:222-231, explicitly allowed), hover transitions (allowed), WebGL rotation (allowed). No scroll-scrubbed font axes found.
- R6.2 ✅ lazy routes src/App.tsx:32-55; WebGL chunk imported after double rAF src/site/ascii/AsciiStage.tsx:99-104; AsciiStage referenced only from Home and CasePage; vanilla three, no R3F.
- R6.3 ✅ DPR cap src/site/ascii/renderer.ts:27; IntersectionObserver + motion flag gate the RAF loop renderer.ts:351-379.
- R6.4 ⚠️ unclear — guards present (site.css:52 `overflow-x: clip`, longest-word title fit site.css:1706-1716) but 375px rendering can't be proven from a diff.

**R7. Delivery**
- R7.1 ⚠️ unclear — branch not visible in a diff.
- R7.2 ⚠️ unclear — build/lint not runnable here; static pass found no broken imports (incl. `three/examples/jsm/utils/BufferGeometryUtils.js`, Lenis options, UMD type-position `React.CSSProperties`).
- R7.3 ⚠️ unclear — process gate; this review is one input to it.

### Design decisions respected
1. React 18 + RR6 + Vite 5 ✅ — react ^18.3.1 kept (package.json), vanilla `three` renderer, no `@react-three/fiber` anywhere.
2. Code in `src/site/` ✅ — all new code under src/site/; every rule scoped `.tb`.
3. Tailwind stays, unused on new pages ✅ — index.css keeps `@tailwind` directives; new pages use only `tb-*`; shadcn `ui/` left in place.
4. One layout ✅ — all routes nested under `<SiteLayout />` (src/App.tsx:60).
5. URLs/order/IDs ✅ — records array order DR-001 TP → DR-005 BBVA (src/site/content/cases.ts:9,163,320,470,649); keys 1–5 index the same array; `featured:false` puts BBVA under Archive.
6. "Accepted" everywhere ✅ — src/site/pages/Home.tsx:101/:129, src/site/pages/CasePage.tsx:~360.
7. Articles container-only ✅ — shim re-export, LOG-NNN from publication order (src/site/content/insights.ts:24), reading time from lib/articles.
- Content model ✅ (site.ts / cases.ts / types.ts / insights.ts; insights not duplicated).
- Page designs ✅ all eight match the spec (incl. `$ grep` replacing cmdk — SearchCommand.tsx deleted; ResourceCallout on Home and hub).
- WebGL decisions ✅ (two passes, DPR ≤1.75, IO+motion gating, dispose incl. `forceContextLoss`, lazy post-first-paint).
- ⚠️ No tasks.md found (.claude/specs/redesign-terminal/ contains only requirements.md and design.md per this diff): the deviations above (R4.2 mobile, R2.2 strings) cannot be matched against approved execution decisions.
- ⚠️ Judgment call (not a defect): the BBVA composed summary ships in code (src/site/content/cases.ts:657 "The first dedicated Design Authority at country level. Five products, one portfolio, and the Design Ambassadors Program.") while design.md:55 marks it "pending Miguel's OK". R7.1 gates production on Miguel's OK anyway, but that OK should explicitly cover this sentence before deploy.

### Out-of-scope changes
None detected. All deletions are old-system components being replaced; the only touched pre-existing file is the ArticleLayout shim (decision 7); spec-listed follow-ups (shadcn ui/, index.css dead rules, article bodies) are untouched as specified.

### Blockers (must fix before merge)
None found in the diff.

### Unverified concerns
1. Fontsource axes (src/site/SiteLayout.tsx:1): if `@fontsource-variable/martian-mono/wdth.css` ships only the wdth axis (fontsource splits multi-axis fonts per subpath), `font-weight: 100→800` in the compile animation and all 700/800 UI weights render synthesized, violating R3.2 "(wdth, wght)". Check the @font-face ranges in `node_modules/@fontsource-variable/martian-mono/wdth.css`; if wdth-only, import the package index (all axes) instead. To be real, this requires wdth.css to exclude the wght axis.
2. The 21 article files are not in the diff: confirm each (a) imports its layout via `@/components/article/ArticleLayout` (the shim) and (b) imports nothing deleted in this diff (e.g. `components/insights/ReadingProgress`, `ui/animated-metric`, the removed `Toaster`/`QueryClientProvider` context). If any does, the build breaks.
3. `public/ai-design-os.html` and `index.html` (title/meta/OG/JSON-LD) are not in the diff: confirm they are unchanged, and that `DEFAULT_TITLE` (src/site/content/site.ts:3) matches index.html's `<title>`.
4. Vercel static/SPA precedence for `/ai-design-os.html` (hosting config not in diff) — must still serve the static file, not the SPA fallback.
5. R6.4 at 375px on a real device: watch the nowrap status bar (site.css:492-510) and long metric values ("Limited → Structured", handled via `data-long` at src/site/pages/CasePage.tsx:~236).
6. Run `bun run build` and lint against baseline (R7.2); confirm the working branch is `redesign-terminal` (R7.1).

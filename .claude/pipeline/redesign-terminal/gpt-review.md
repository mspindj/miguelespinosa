### VERDICT: PASS WITH GAPS

### Requirements coverage

- **R1.1** ⚠️ partial — SPA routes, including all 21 articles, remain registered (`src/App.tsx:42-68`). [UNVERIFIED — depends on code not in diff] Confirm the static `/ai-design-os.html` asset still exists and is served.
- **R1.2** ✅ covered — catch-all and unknown case slugs render the styled 404 with a home link (`src/App.tsx:68`, `src/site/pages/CasePage.tsx:390-393`, `src/site/pages/NotFound.tsx:6-27`).
- **R1.3** ✅ covered — required anchors exist and cross-route hash navigation scrolls and focuses them (`src/site/pages/Home.tsx:139`, `src/site/pages/Home.tsx:236`, `src/site/pages/Home.tsx:278`, `src/site/pages/Home.tsx:323`, `src/site/SiteLayout.tsx:94-118`).
- **R1.4** ✅ covered — route-specific titles are resolved centrally; `index.html` is untouched (`src/site/SiteLayout.tsx:24-39`, `src/site/SiteLayout.tsx:76-84`).

- **R2.1** ✅ covered — all five previous case pages are consolidated into five complete Decision Records (`src/site/content/cases.ts:10-839`).
- **R2.2** ✅ covered — approved TP and Birdie figures are scoped and dated, and BBVA is represented as the archive record (`src/site/content/cases.ts:179-181`, `src/site/content/cases.ts:287-293`, `src/site/content/cases.ts:473-475`, `src/site/content/cases.ts:622-629`, `src/site/pages/Home.tsx:173-187`).
- **R2.3** ✅ covered — article route components remain in use through the redesigned layout bridge (`src/components/article/ArticleLayout.tsx:1-3`, `src/App.tsx:48-67`).
- **R2.4** ✅ covered — migrated content explicitly rewrites em dashes and visible added content uses alternatives (`src/site/content/cases.ts:1-3`, `src/site/content/site.ts:1`).
- **R2.5** ✅ covered — the published asset is renamed neutrally and its new alt text contains no prohibited term (`src/site/content/cases.ts:25`, `src/assets/tp-key-visual.webp:1`).
- **R2.6** ✅ covered — form POST, payload, loading/error/success handling, and guide link are preserved (`src/site/pages/SubscribeForm.tsx:17-40`, `src/site/pages/SubscribeForm.tsx:62-65`, `src/site/pages/SubscribeForm.tsx:84-104`).

- **R3.1** ✅ covered — required palette and accent constraints are encoded in the scoped design system (`src/site/site.css:15-24`, `src/site/site.css:72-76`, `src/site/site.css:169-186`).
- **R3.2** ✅ covered — Martian Mono and Geist variable fonts are self-hosted and loaded (`package.json:14-15`, `src/site/SiteLayout.tsx:1-2`, `src/site/site.css:34-35`).
- **R3.3** ✅ covered — 12-column exposed rules and global zero-radius treatment are implemented (`src/site/site.css:58-62`, `src/site/site.css:103-117`).
- **R3.4** ✅ covered — all required page families use the new shared system and Decision Record language (`src/App.tsx:42-68`, `src/site/pages/CasePage.tsx:271-380`).

- **R4.1** ✅ covered — keys `1`–`5`, `h`, `m`, and `?` are implemented, typing targets are ignored, and the dialog contains a shortcut-disable switch (`src/site/SiteLayout.tsx:120-148`, `src/site/ShortcutsDialog.tsx:81-97`).
- **R4.2** ✅ covered — fixed status bar includes section, progress, Bogotá time, motion, keys, and article/mobile substitutions (`src/site/StatusBar.tsx:61-98`, `src/site/site.css:555-582`).
- **R4.3** ✅ covered — home and desktop case pages render lazy WebGL ASCII with a static poster fallback (`src/site/pages/Home.tsx:42`, `src/site/pages/CasePage.tsx:313-320`, `src/site/ascii/AsciiStage.tsx:24-64`, `src/site/ascii/AsciiStage.tsx:101-105`).

- **R5.1** ⚠️ partial — contrast tokens, visible focus, skip link, semantic tables and heading structures are present (`src/site/site.css:1-12`, `src/site/site.css:72-89`, `src/site/SiteLayout.tsx:163-166`, `src/site/pages/InsightsPage.tsx:115-142`). [UNVERIFIED — depends on runtime rendering] Confirm all computed states pass WCAG 2.2 AA in an accessibility audit.
- **R5.2** ✅ covered — native modal menu, Esc focus return, route focus, and hash-target focus are implemented (`src/site/SiteHeader.tsx:51-56`, `src/site/SiteHeader.tsx:98-125`, `src/site/SiteLayout.tsx:94-118`).
- **R5.3** ✅ covered — reduced motion and the user toggle disable Lenis, scrambling, CSS animation, transitions, and continuous WebGL rendering; the toggle is hidden under OS reduction (`src/site/SiteLayout.tsx:86-92`, `src/site/Decode.tsx:31-39`, `src/site/StatusBar.tsx:85-92`, `src/site/site.css:3247-3288`).
- **R5.4** ✅ covered — ASCII stage and canvas are decorative and hidden from accessibility APIs (`src/site/ascii/AsciiStage.tsx:136-139`, `src/site/ascii/renderer.ts:244-248`).

- **R6.1** ✅ covered — font-axis changes are one-shot or hover-based, while scroll-driven WebGL changes do not re-layout text (`src/site/site.css:135-154`, `src/site/site.css:889-904`, `src/site/ascii/renderer.ts:286-301`).
- **R6.2** ✅ covered — non-home/non-case routes are lazy, WebGL renderer is dynamically imported after first paint, and vanilla three.js is used (`src/App.tsx:8-35`, `src/site/ascii/AsciiStage.tsx:97-105`, `src/site/ascii/renderer.ts:1`).
- **R6.3** ✅ covered — IntersectionObserver gates activity, motion gates RAF, and DPR is capped at 1.75 (`src/site/ascii/AsciiStage.tsx:125-134`, `src/site/ascii/renderer.ts:24`, `src/site/ascii/renderer.ts:243-244`, `src/site/ascii/renderer.ts:350-368`).
- **R6.4** ⚠️ partial — responsive layouts and `overflow-x: clip` are present (`src/site/site.css:39-57`). [UNVERIFIED — depends on runtime rendering] Test every route at 375px for horizontal overflow.

- **R7.1** ⚠️ partial — [UNVERIFIED — depends on repository state not in diff] Confirm the branch is `redesign-terminal` and no production push occurred without approval.
- **R7.2** ⚠️ partial — [UNVERIFIED — depends on commands not shown in diff] Run `bun run build` and compare lint output with baseline.
- **R7.3** ⚠️ partial — [UNVERIFIED — depends on review/deployment records not in diff] Confirm clean conformance review, Kimi/GPT reviews, verified findings, and Vercel preview smoke testing.

### Design decisions respected

- **1. React 18, router 6, Vite 5, vanilla three.js** — ✅ respected (`package.json:56-66`, `src/site/ascii/renderer.ts:1`).
- **2. New system under `src/site/` with scoped/prefixed CSS** — ✅ respected (`src/site/site.css:1-3`, `src/site/site.css:15`).
- **3. Tailwind retained but unused by new pages** — ✅ respected (`src/index.css:1-3`, `src/site/pages/Home.tsx:1-358`).
- **4. One `SiteLayout` for every route** — ✅ respected (`src/App.tsx:41-69`).
- **5. Unchanged case URLs and DR-001 through DR-005 order** — ✅ respected (`src/site/content/cases.ts:10-12`, `src/site/content/cases.ts:165`, `src/site/content/cases.ts:343`, `src/site/content/cases.ts:460`, `src/site/content/cases.ts:645`).
- **6. Accepted status for all five** — ✅ respected (`src/site/pages/CasePage.tsx:333-338`, `src/site/pages/Home.tsx:106-110`).
- **7. Article container redesigned without editing article bodies** — ✅ respected (`src/components/article/ArticleLayout.tsx:1-3`, `src/site/article/ArticleLayout.tsx:23-114`).

### Out-of-scope changes

- No proven out-of-scope changes. Removed legacy page/components are directly replaced by the redesigned route system.
- Both `bun.lock` and `package-lock.json` were updated for in-scope dependencies.

### Blockers (must fix before merge)

- None proven by the diff.

### Unverified concerns

- [UNVERIFIED — depends on code not in diff] `tasks.md` is absent, so authorized carry-overs, deliberate deviations, and deferred tests cannot be checked.
- [UNVERIFIED — depends on the public asset tree/build output] Verify `/ai-design-os.html` still ships unchanged.
- [UNVERIFIED — depends on runtime testing] Audit computed contrast, keyboard focus after every mobile-menu navigation, and 375px overflow on every route.
- [UNVERIFIED — depends on repository and CI state] Verify branch policy, build/lint results, required external reviews, and Vercel preview smoke results.

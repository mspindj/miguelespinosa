### VERDICT: FAIL

### Requirements coverage
- R1.1 ⚠️ partial — SPA routes, including all 21 article paths, are preserved (`src/App.tsx:45-69`). [UNVERIFIED — depends on code not in diff] Confirm `/ai-design-os.html` still exists and is served directly.
- R1.2 ✅ covered (`src/App.tsx:69`, `src/site/pages/NotFound.tsx:7-27`)
- R1.3 ✅ covered (`src/site/SiteLayout.tsx:18`, `src/site/SiteLayout.tsx:94-110`, `src/site/pages/Home.tsx:138`, `src/site/pages/Home.tsx:223`, `src/site/pages/Home.tsx:265`, `src/site/pages/Home.tsx:309`)
- R1.4 ⚠️ partial — route-specific title resolution is implemented (`src/site/SiteLayout.tsx:23-36`, `src/site/SiteLayout.tsx:79-88`). [UNVERIFIED — depends on unchanged file not in diff] Confirm `index.html` default metadata, OG data, and JSON-LD remain intact.
- R2.1 ❌ missing — the Birdie metric description loses the existing “pre-open market” qualifier (`src/pages/BirdieClubCase.tsx:145`, `src/site/content/cases.ts:711`).
- R2.2 ✅ covered — approved TP and Birdie figures are scoped and dated (`src/site/content/cases.ts:170`, `src/site/content/cases.ts:711-712`)
- R2.3 ✅ covered (`src/components/article/ArticleLayout.tsx:1-3`, `src/App.tsx:13-35`)
- R2.4 ✅ covered — migrated content explicitly rewrites em dashes, with no visible introduced em dash proven in the new content (`src/site/content/site.ts:1`, `src/site/content/cases.ts:1-3`, `src/site/content/aiDesignOs.ts:1`)
- R2.5 ✅ covered — the asset is renamed and neutral alt text is used (`src/assets/tp-key-visual.webp:1`, `src/site/content/cases.ts:29`)
- R2.6 ✅ covered (`src/site/pages/SubscribeForm.tsx:19-39`, `src/site/pages/SubscribeForm.tsx:85-94`)
- R3.1 ✅ covered (`src/site/site.css:14-25`, `src/site/site.css:80-84`, `src/site/site.css:157-181`)
- R3.2 ✅ covered (`src/site/SiteLayout.tsx:1-2`, `src/site/site.css:39-40`, `package.json:14-15`)
- R3.3 ✅ covered (`src/site/site.css:96-108`, `src/site/site.css:67-71`)
- R3.4 ⚠️ partial — the specified page language and Decision Record structure are implemented (`src/site/pages/Home.tsx:337-356`, `src/site/pages/CasePage.tsx:285-388`). [UNVERIFIED — depends on prototype code not in diff] Exact fidelity to prototype C cannot be compared.
- R4.1 ✅ covered (`src/site/SiteLayout.tsx:112-140`, `src/site/ShortcutsDialog.tsx:84-98`)
- R4.2 ✅ covered (`src/site/StatusBar.tsx:65-98`, `src/site/site.css:548-570`, `src/site/site.css:589-598`)
- R4.3 ✅ covered (`src/site/pages/Home.tsx:43`, `src/site/pages/CasePage.tsx:282-334`, `src/site/ascii/AsciiStage.tsx:25-63`)
- R5.1 ✅ covered (`src/site/SiteLayout.tsx:157-165`, `src/site/site.css:73-91`, `src/site/pages/Home.tsx:142-183`, `src/site/pages/CasePage.tsx:33-67`)
- R5.2 ❌ violated — menu-link activation explicitly disables focus restoration, and `onClose` then skips focusing the trigger (`src/site/SiteHeader.tsx:53-57`, `src/site/SiteHeader.tsx:65-68`).
- R5.3 ✅ covered (`src/site/SiteLayout.tsx:90-110`, `src/site/Decode.tsx:31-43`, `src/site/site.css:3249-3288`)
- R5.4 ✅ covered (`src/site/ascii/AsciiStage.tsx:134-138`, `src/site/ascii/renderer.ts:239-242`)
- R6.1 ✅ covered (`src/site/ascii/renderer.ts:284-301`, `src/site/site.css:135-153`)
- R6.2 ✅ covered (`src/App.tsx:7-35`, `src/site/ascii/AsciiStage.tsx:92-124`)
- R6.3 ✅ covered (`src/site/ascii/renderer.ts:25`, `src/site/ascii/renderer.ts:237`, `src/site/ascii/renderer.ts:303-317`, `src/site/ascii/AsciiStage.tsx:126-132`)
- R6.4 ✅ covered at the CSS containment level (`src/site/site.css:62`). [UNVERIFIED — depends on runtime rendering] Confirm every route at 375px in preview.
- R7.1 ⚠️ [UNVERIFIED — branch and deployment state are not represented in the diff] Confirm branch is `redesign-terminal` and no push to `main` occurs without approval.
- R7.2 ⚠️ [UNVERIFIED — build and lint output are not in the diff] Run `bun run build` and compare lint against baseline.
- R7.3 ⚠️ [UNVERIFIED — review and preview evidence are not in the diff] Confirm Kimi review, verified findings, and Vercel smoke testing. This conformance review is not clean due to the blockers below.

### Design decisions respected
- 1. ✅ respected — React 18 remains and vanilla `three` is used without React Three Fiber (`package.json:55`, `package.json:66`, `src/site/ascii/renderer.ts:1`)
- 2. ✅ respected — new system code and scoped CSS live under `src/site/` (`src/site/SiteLayout.tsx:1-16`, `src/site/site.css:14-67`)
- 3. ✅ respected — new pages use `tb-*` classes rather than Tailwind utilities; Tailwind remains installed (`src/site/pages/Home.tsx:20-76`, `package.json:63-67`)
- 4. ✅ respected (`src/App.tsx:44-71`, `src/site/SiteLayout.tsx:157-172`)
- 5. ✅ respected (`src/site/content/cases.ts:12`, `src/site/content/cases.ts:153`, `src/site/content/cases.ts:348`, `src/site/content/cases.ts:491`, `src/site/content/cases.ts:730`)
- 6. ✅ respected (`src/site/pages/CasePage.tsx:347-351`)
- 7. ✅ respected (`src/components/article/ArticleLayout.tsx:1-3`, `src/site/article/ArticleLayout.tsx:23-114`)

### Out-of-scope changes
- None proven. Removed legacy page and presentation components are directly replaced by the redesigned routes and shared system.

### Blockers (must fix before merge)
- Restore the dropped “pre-open market” qualifier from the Birdie impact metric to satisfy strict no-content-loss (`src/pages/BirdieClubCase.tsx:145`, `src/site/content/cases.ts:711`).
- Restore focus to the mobile-menu trigger whenever the menu closes, including after selecting a link (`src/site/SiteHeader.tsx:53-57`, `src/site/SiteHeader.tsx:65-68`).

### Unverified concerns
- [UNVERIFIED — depends on unchanged public assets] Verify `/ai-design-os.html` still exists and loads directly.
- [UNVERIFIED — depends on unchanged `index.html`] Verify default title, meta, OG, and JSON-LD are unchanged.
- [UNVERIFIED — depends on repository state and CI output] Verify branch policy, build, lint baseline, Kimi review, and Vercel preview smoke.
- [UNVERIFIED — depends on runtime testing] Test all routes at 375px for horizontal overflow and validate menu/dialog focus behavior with keyboard-only navigation.
- [UNVERIFIED — depends on the external lab prototype] Compare Home and interaction details against prototype C commit `e5cc5db`.

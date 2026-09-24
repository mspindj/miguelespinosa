### VERDICT: FAIL

### Requirements coverage

- **R1.1** ⚠️ partial — All SPA paths, including the five case paths through `:slug` and 21 article routes, are retained (`src/App.tsx:49-70`). [UNVERIFIED — depends on code not in diff] Confirm the static `/ai-design-os.html` file still exists in the built output.
- **R1.2** ✅ covered (`src/App.tsx:70`, `src/site/pages/NotFound.tsx:8-27`)
- **R1.3** ✅ covered (`src/site/SiteHeader.tsx:8-14`, `src/site/SiteLayout.tsx:85-101`)
- **R1.4** ⚠️ partial — Route-specific titles are implemented (`src/site/SiteLayout.tsx:27-40`, `src/site/SiteLayout.tsx:71-73`). [UNVERIFIED — depends on code not in diff] Confirm `index.html` default metadata, OG tags, and JSON-LD remain unchanged.

- **R2.1** ✅ covered (`src/site/content/cases.ts:12-833`)
- **R2.2** ⚠️ partial — Content is centralized and status/system labels follow the documented model (`src/site/content/cases.ts:12-833`). The BBVA composed summary remains explicitly pending approval (`.claude/specs/redesign-terminal/design.md:56`).
- **R2.3** ✅ covered — Existing article routes still use their original files, while only the shared layout is redirected (`src/App.tsx:14-34`, `src/components/article/ArticleLayout.tsx:1-3`).
- **R2.4** ✅ covered (`src/site/content/site.ts:1`, `src/site/content/cases.ts:1-3`, `src/site/content/aiDesignOs.ts:1`)
- **R2.5** ✅ covered — The published asset was renamed neutrally and the visible alt text is neutral (`src/site/content/cases.ts:28`, `src/assets/tp-key-visual.webp`).
- **R2.6** ✅ covered (`src/site/pages/SubscribeForm.tsx:19-38`, `src/site/pages/SubscribeForm.tsx:85-94`)

- **R3.1** ✅ covered (`src/site/site.css:13-29`)
- **R3.2** ✅ covered (`src/site/SiteLayout.tsx:1-2`, `src/site/site.css:37-38`)
- **R3.3** ✅ covered (`src/site/site.css:83-88`, `src/site/site.css:113-128`)
- **R3.4** ⚠️ partial — The required page families use the shared Terminal Brutal shell and templates (`src/App.tsx:46-72`, `src/site/pages/CasePage.tsx:271-388`). [UNVERIFIED — depends on code not in diff] Exact fidelity to prototype C requires comparison against the external lab repository.

- **R4.1** ✅ covered (`src/site/SiteLayout.tsx:103-130`, `src/site/ShortcutsDialog.tsx:85-98`)
- **R4.2** ✅ covered (`src/site/StatusBar.tsx:61-98`, `src/site/site.css:487-499`)
- **R4.3** ✅ covered (`src/site/pages/Home.tsx:40`, `src/site/pages/CasePage.tsx:314-321`, `src/site/ascii/AsciiStage.tsx:25-62`)

- **R5.1** ✅ covered (`src/site/site.css:1-11`, `src/site/site.css:69-108`, `src/site/pages/CasePage.tsx:37-65`)
- **R5.2** ✅ covered (`src/site/SiteHeader.tsx:42-56`, `src/site/SiteHeader.tsx:101-127`)
- **R5.3** ❌ missing — Reduced-motion handling is comprehensive, but the user motion toggle does not stop all non-essential CSS animation and transitions. It only pauses the ticker and cursor (`src/site/site.css:1729-1731`, `src/site/site.css:3241-3243`), while compile and canvas transitions remain active (`src/site/site.css:169-181`, `src/site/site.css:691-705`).
- **R5.4** ✅ covered (`src/site/ascii/AsciiStage.tsx:134-138`, `src/site/ascii/renderer.ts:237-240`)

- **R6.1** ✅ covered (`src/site/ascii/renderer.ts:299-312`, `src/site/usePageChrome.ts:28-40`)
- **R6.2** ✅ covered (`src/App.tsx:9-34`, `src/site/ascii/AsciiStage.tsx:91-119`)
- **R6.3** ✅ covered (`src/site/ascii/AsciiStage.tsx:122-131`, `src/site/ascii/renderer.ts:25`, `src/site/ascii/renderer.ts:364-389`)
- **R6.4** ⚠️ partial — Root clipping and responsive layouts are present (`src/site/site.css:58`, `src/site/site.css:61-65`). [UNVERIFIED — depends on runtime testing] Confirm every route at 375px in the required smoke test.

- **R7.1** ⚠️ partial — [UNVERIFIED — depends on repository state not in diff] Confirm the branch is `redesign-terminal` and no production push occurred without approval.
- **R7.2** ⚠️ partial — [UNVERIFIED — depends on command output not in diff] Run `bun run build` and compare lint results with the baseline.
- **R7.3** ⚠️ partial — [UNVERIFIED — depends on review and deployment records not in diff] Confirm clean spec review, Kimi and GPT final-diff reviews, verified findings, and Vercel preview smoke.

### Design decisions respected

1. ✅ respected — React 18 remains and vanilla `three` is used without React Three Fiber (`package.json:56-66`, `src/site/ascii/renderer.ts:1`).
2. ✅ respected — New implementation code is under `src/site/`, with only necessary integration changes elsewhere (`src/App.tsx:3-7`, `src/components/article/ArticleLayout.tsx:1-3`).
3. ✅ respected — New pages use scoped CSS rather than Tailwind utilities (`src/site/site.css:1-2`).
4. ✅ respected — All routes are nested under `SiteLayout` (`src/App.tsx:47-71`).
5. ✅ respected — Record order, IDs, slugs, and keyboard mapping match the decision (`src/site/content/cases.ts:12-13`, `src/site/content/cases.ts:153`, `src/site/content/cases.ts:327`, `src/site/content/cases.ts:457`, `src/site/content/cases.ts:656`, `src/site/SiteLayout.tsx:118-120`).
6. ✅ respected — All records render “Accepted”; BBVA is separately grouped as archive (`src/site/pages/CasePage.tsx:335-339`, `src/site/pages/Home.tsx:175-189`).
7. ✅ respected — Article bodies remain in their existing files and use the redesigned shared layout (`src/components/article/ArticleLayout.tsx:1-3`, `src/site/article/ArticleLayout.tsx:22-115`).

### Out-of-scope changes

- None proven by the diff.

### Blockers (must fix before merge)

- The motion toggle does not stop all non-essential animation as required by R5.3. Compile animations and canvas opacity transitions remain active when `data-motion="off"` (`src/site/site.css:169-181`, `src/site/site.css:691-705`, `src/site/site.css:3241-3243`). Add a user-toggle rule equivalent to the reduced-motion treatment for all non-essential animations and transitions.

### Unverified concerns

- [UNVERIFIED — depends on code not in diff] Confirm `/ai-design-os.html` remains present in the final build.
- [UNVERIFIED — depends on approval not in diff] Confirm Miguel approved the BBVA records-table summary; the design document still marks it pending (`.claude/specs/redesign-terminal/design.md:56`).
- [UNVERIFIED — depends on repository state not in diff] No `tasks.md` was supplied, so execution decisions, authorized deviations, and deferred tests cannot be checked.
- [UNVERIFIED — depends on runtime testing] Test all routes at 375px for horizontal scrolling and test keyboard, focus return, reduced motion, canvas fallback, and hash navigation on the Vercel preview.
- [UNVERIFIED — depends on command/review output not in diff] Verify branch state, build, lint baseline, Kimi review, final GPT review, spec-conformance review, and preview smoke before merge.

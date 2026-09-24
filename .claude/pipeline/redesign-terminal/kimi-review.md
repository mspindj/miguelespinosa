### VERDICT: PASS WITH GAPS

### Requirements coverage

- R1.1 ✅ `src/App.tsx:39-66` — all static paths, `/case-study/:slug` (5 records in `src/site/content/cases.ts:11`), 21 article routes (`src/App.tsx:45-65`); `/ai-design-os.html` referenced at `src/site/pages/SubscribeForm.tsx:92`.
- R1.2 ✅ `src/App.tsx:66` + `src/site/pages/NotFound.tsx:23` (`Return to index` link).
- R1.3 ✅ Home sections `id="work"` (`src/site/pages/Home.tsx:136`), `id="manifesto"` (~:232), `id="insights"` (~:262), `id="contact"` (~:296); cross-route hash scroll + focus in `src/site/SiteLayout.tsx:98-118`; alias `philosophy: "manifesto"` at `SiteLayout.tsx:17`.
- R1.4 ✅ `titleFor` (`SiteLayout.tsx:26-37`) + effect at :74-76; `index.html` not in diff (unchanged).
- R2.1 ✅ All five cases fully re-mapped in `src/site/content/cases.ts` (spot-verified: every section list, metric grid, quote, product row, role/URL links from the deleted pages are present; BBVA award callout and Ambassadors stats included).
- R2.2 ✅ Approved figures only: `0 → 20+` (DR-002), `180+`/`2,200+` dated `· Sep 2026` (`cases.ts` DR-004 metric ~:441 and consequences); "still growing" dropped from the 244 label; BBVA composed summary present. No em-dash-containing microcopy found outside the design.md list (trivial unlisted table headers, see Unverified #8).
- R2.3 ✅ No article files in diff; shim re-export at `src/components/article/ArticleLayout.tsx:3`.
- R2.4 ✅ All rewritten strings audited in `cases.ts`, `site.ts`, `aiDesignOs.ts`, pages: em dashes replaced with commas/colons/periods; only en dashes (`2023–2025`) and `→` remain.
- R2.5 ✅ `flamingo.jpeg` deleted, `flamingo.webp` → `tp-key-visual.webp`; neutral alt `cases.ts:26`; DR-002 "Systems" pillar drops "(Flamingo)" (~:244).
- R2.6 ✅ `SubscribeForm.tsx:33-41` identical POST/payload; `Saving...`, success link to `/ai-design-os.html` (:92), error state; `api/subscribe.ts` untouched.
- R3.1 ✅ Tokens `src/site/site.css:17-21`; accent confined to fills/badges/focus/selection, text-on-ink only (`.tb-status .tb-on`), and the `aria-hidden` poster/canvas exception.
- R3.2 ⚠️ Imports at `SiteLayout.tsx:1-2` are correct on their face, but see Unverified #1 (axis coverage of `martian-mono/wdth.css`).
- R3.3 ✅ `site.css:58-62` (`border-radius: 0` sweep), 1px column rules on `.tb-sec` (~:144-160).
- R3.4 ✅ `Home.tsx`, `CasePage.tsx` (record template + CONSTRAINTS + LOG), `AboutPage`, `InsightsPage`, `AIDesignOSPage`, `PrivacyPage` all in the system.
- R4.1 ✅ `SiteLayout.tsx:122-143` (1–5, h, m, ?; input guard :125; modified/repeat guard :123); off-switch `role="switch"` in `ShortcutsDialog.tsx:85-95`.
- R4.2 ✅ `src/site/StatusBar.tsx:73-101`; mobile subset + reading-%-replaces-time via `data-reading` CSS (`site.css` `@media (max-width: 767px)` block ~:560-575).
- R4.3 ✅ `AsciiStage` on Home (:43) and case pages gated `useMedia("(min-width: 1024px)")` (`CasePage.tsx:266`); static poster fallback (`AsciiStage.tsx:24-59`).
- R5.1 ✅ Contrast documented `site.css:4-12`; focus ring :79-83; skip link `SiteLayout.tsx:161-163`; semantic tables with captions/scope (`CasePage.tsx:46-90`, `Home.tsx:160-175`).
- R5.2 ✅ Native dialog + Esc focus return (`SiteHeader.tsx:50-53`); focus to `#main-content` on route change (`SiteLayout.tsx:117`) and to hash target (:109).
- R5.3 ✅ Lenis gated on `animate` (`SiteLayout.tsx:86-94`); `prefers-reduced-motion` CSS block (~:3278); Decode/renderer static paths; toggle hidden when reduced (`StatusBar.tsx:82`).
- R5.4 ✅ `AsciiStage.tsx:133` container `aria-hidden`; canvas `aria-hidden` in `renderer.ts:249`.
- R6.1 ✅ No scroll-scrubbed font axes anywhere; scrubbed effects limited to transform (`tb-ticker`, `tb-status-progress`) and the explicitly allowed WebGL rotation.
- R6.2 ✅ Lazy routes `App.tsx:9-33`; WebGL chunk via double-rAF `await import("./renderer")` (`AsciiStage.tsx:103`); no `@react-three/fiber` in `package.json`.
- R6.3 ✅ IO gating (`AsciiStage.tsx:122-126` + `renderer.ts` `setActive`), motion flag (`setAnimate`), `MAX_DPR = 1.75` (`renderer.ts:23`).
- R6.4 ✅ By construction: `overflow-x: clip` (`site.css:49`), fluid clamps on display type, mobile card layouts; confirm with a device smoke (R7.3).
- R7.1 ⚠️ Branch not visible in a diff.
- R7.2 ⚠️ Build/lint not verifiable from a diff (no obvious type/import breakage found in review).
- R7.3 ⚠️ Process step; also no `tasks.md` found — see Unverified #5.

### Design decisions respected

1. React 18 + RR6 + Vite 5 kept ✅ (`package.json` react ^18.3.1; vanilla three, no fiber).
2. `src/site/` + scoped CSS ✅ (every `site.css` selector under `.tb` / `tb-` prefix; keyframes `tb-`-prefixed).
3. Tailwind stays, unused by new pages ✅ (only `tb-` classes in new code; shadcn/radix/framer left installed).
4. One layout ✅ (`App.tsx:38`).
5. Case URLs/IDs/order DR-001→005, keys 1–5 in that order, BBVA as ARCHIVE ✅ (`cases.ts` record order; `featured: false` on DR-005).
6. Status "Accepted" for all five ✅ (record rows, cards, and record meta).
7. Articles: container redesigned, bodies untouched ✅ (`src/site/article/ArticleLayout.tsx`; long-form styles for `p/h2/h3/ul/ol/blockquote/code/.article-callout/.article-list` in `site.css` `.tb-prose`).

### Out-of-scope changes

- `.claude/specs/redesign-terminal/{design,requirements}.md` added — spec docs, presumably intentional; harmless.
- `index.css`: Google Fonts import removed — supports R3.2 (self-hosted); not one of the deferred cleanups but aligned.
- Both `bun.lock` and `package-lock.json` updated for the same dep set — consistent, required.
- Nothing improper found.

### Blockers (must fix before merge)

None proven by the diff.

### Unverified concerns

1. **Font axis coverage (highest risk).** `SiteLayout.tsx:1` imports `@fontsource-variable/martian-mono/wdth.css`. Fontsource v5 variable packages split axes into per-axis files; if `wdth.css` ships only the wdth axis, every `font-weight` variation (all 800-weight display type, the wght 100→800 compile animations) silently fails or faux-bolds. Check the installed package's CSS/woff2 for the wght axis; if absent, import the full/index variant instead.
2. `DEFAULT_TITLE` (`SiteLayout.tsx:19`, defined in `content/site.ts:3`) must equal the existing `<title>` in `index.html` (R1.4 "default title stays"). `index.html` is not in the diff — compare the two strings.
3. Old home metrics "$2.3K ARR · 8 Days" and "0 → 12 Team Scale" (deleted `CaseStudySection.tsx`) do not appear anywhere new. The 0→20+ and 180+/2,200+ replacements are approved exceptions; confirm Miguel intended the $2.3K figure to be superseded rather than preserved.
4. `SubscribeForm` error fallback email changed from `mspin.dj@gmail.com` (old `AIDesignOS.tsx`) to `hola@miguelespinosa.co` (`SubscribeForm.tsx:104`). Likely intentional unification; confirm.
5. **No `tasks.md` found** — execution decisions (authorized deviations) are unknown; nothing in this review could be cross-checked against them. If any finding above was already an approved deviation, treat it as such.
6. `QueryClientProvider`/toasters removed (`App.tsx`). The 21 untouched article files are not in the diff; if any imports `useQuery` it will now throw at runtime. Grep `src/pages/articles/` for `@tanstack/react-query` (very unlikely — static content).
7. `logDate` (`content/insights.ts:5-14`) assumes `"May 13, 2026"`-style dates in `lib/articles.ts` (not in diff). Fallback is safe (uppercase, unsorted); verify the actual date format so LOG dates, ISO attributes and `latestInsights` sorting work.
8. Records-table column headers `ID / Years / Title / Client / Outcome / Status` (`Home.tsx` thead ~:160-175) are label copy not enumerated in the design.md microcopy list ("Outcome" in particular). Confirm the list is illustrative, or add them to it.
9. R7.1/R7.2/R7.3 (branch, `bun run build`, lint baseline, external reviews, Vercel preview smoke incl. 375px horizontal-scroll check) cannot be verified from a diff.

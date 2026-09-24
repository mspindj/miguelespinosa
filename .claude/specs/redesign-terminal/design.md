# Redesign "Terminal Brutal": design

Source of the visual system and interaction model: `~/Documents/dev/miguelespinosa-lab/src/prototypes/terminal/` (commit e5cc5db). This document says how it lands in the production repo.

## Architecture decisions

1. **Keep React 18 + react-router 6 + Vite 5.** The lab ran React 19. The only React-19-only dependency in C was `@react-three/fiber` (one file). It is replaced by a vanilla three.js renderer instead of upgrading React, which would touch ~40 shadcn/Radix components for no user-facing gain. Side effect: a smaller WebGL chunk (R6.2).
2. **New code lives in `src/site/`.** It holds the design system (`site.css`, every rule scoped under the root class `.tb`), the shell (layout, header, status bar, shortcuts dialog, keyboard layer, Lenis), `ascii/` (the vanilla three renderer), and `content/` (typed data).
3. **Tailwind stays installed but new pages don't use it.** Its preflight keeps loading; `.tb`-scoped rules win on specificity. The unused shadcn `ui/` files and the framer-motion/radix deps are left for a follow-up cleanup, because deleting them would bloat this diff past the review limit without changing any behavior.
4. **One layout for every route.** `App.tsx` wraps all routes in `SiteLayout`, which owns the header, status bar, skip link, Lenis, keyboard shortcuts and per-route titles. Pages render content only.
5. **Case URLs are unchanged.** Record order and IDs: DR-001 TP Design System (`tp-design-system`), DR-002 Design Transformation (`design-transformation`), DR-003 Tati (`tati-ai`), DR-004 The Birdie Club (`birdie-club`), DR-005 BBVA Colombia (`cash-conversion`, shown as ARCHIVE). Keys 1–5 follow this order.
6. **Record status is "Accepted" for all five.** This is the ADR-native status: the decision was taken. It replaces the lab's "Shipped", which overstated the Design Transformation case.
7. **Articles: redesign the container, not the content.** `ArticleLayout` becomes a log entry (LOG-NNN, category, date, reading time from `src/lib/articles.ts`), with long-form styles for `p`, `h2`, `h3`, `ul`, `ol`, `blockquote`, `code`, `.article-callout` and `.article-list`, plus prev/next navigation. The 21 article files are untouched.

## Content model (`src/site/content/`)

- `site.ts`: headline, subhead, social proof, manifesto (short quote + the 8 principles from `/about`), contact links, CV path.
- `cases.ts`: one `DecisionRecord` per case, holding the full content of today's page (R2.1). Mapping from today's sections:
  - CONTEXT ← vision + context paragraphs + role
  - PROBLEM ← "the real problem" + problem list
  - CONSTRAINTS ← "why it was hard"
  - OPTIONS ← paths explored, with SELECTED/REJECTED only where the source names the choice; Design Transformation renders as SHIFTS (from → to)
  - DECISION ← strategic decision / core insight
  - IMPLEMENTATION ← what we built / pillars / enablers / BBVA products (challenge, decision, result)
  - CONSEQUENCES ← every impact metric with its description
  - LOG ← how we operated, what I learned, leadership reflection, pull quotes
  - Image: TP gets the feather key visual (Miguel's decision, 2026-09-24), with neutral alt text. Tati gets `tati-hero.png`.
- Insights come from the existing `src/lib/articles.ts`, which is not duplicated.

## Page designs

- **Home.** Prototype C: hero with ASCII tree, decision-records table, ticker, manifesto (decode), latest 3 insights plus "All insights", contact. Also the AI Design OS resource as a record-style callout, since today it is linked from Insights.
- **Case (`/case-study/:slug`).** Decision Record template (C `CasePage`), extended with the CONSTRAINTS and LOG sections. Prev/next records.
- **Insights (`/insights`).** A log table: date, category, title, reading time. Filter by tag (the existing `filterTag` values) and a text filter shown as `$ grep` (replaces the cmdk search), plus the AI Design OS banner as a record.
- **Article.** Log entry as above, reading-progress in the status bar.
- **About.** "Operator profile": photo (`miguel-profile.jpg`, 1px frame, grayscale), bio, the 8 manifesto principles as a numbered spec list, experience timeline table, certifications, CV link.
- **AI Design OS.** Same content (components 01–05, artifacts, 7-day plan, form) in terminal language. The form is a command-line style input with the same states and endpoint (R2.6).
- **Privacy.** Plain long-form in the article styles.
- **404.** C's "Record not found".

## WebGL (`src/site/ascii/`)

This is the vanilla port of C's `AsciiCanvas`. It keeps the same two passes (scene to a small render target, then ASCII glyph atlas post-pass), the same tree generator and the same poster fallback. It adds a `WebGLRenderer` with DPR ≤ 1.75, an IntersectionObserver plus a motion flag that gate the RAF loop, and it disposes everything on unmount. It is lazy-imported by `AsciiStage` after first paint, and only on Home and on case pages ≥1024px.

## Microcopy introduced (R2.2)

System and label copy only: the nav indices `[01]`–`[04]`, "Decision records", "Record ID / Status / Years / Client / Role", "Accepted", "Archive", section labels (Context, Problem, Constraints, Options, Decision, Implementation, Consequences, Log), "Selected", "Rejected", "Shifts", the status bar labels, the shortcuts dialog text, "Record not found", "Log entry", "Operator profile", "$ grep", "$ mail", "[ Full case study ]" style commands, and "Previously" before the social proof.

## Out of scope (follow-ups)

- Removing unused shadcn `ui/` components and the framer-motion/radix/react-query dependencies.
- Removing em dashes from pre-existing article bodies.
- Prerendering/SSR for SEO.
- Awwwards submission.

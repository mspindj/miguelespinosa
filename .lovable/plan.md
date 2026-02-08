

## Complete the Insights Hub: 3 New Articles + 3x3 Grid

Add three final articles to achieve a symmetrical 9-article grid, with visual prominence for the pillar articles.

---

### 1. New Filter Tags

The new articles introduce two new category tags that need to be added to the filter system:

| New Tag | Label |
|---------|-------|
| `ai-ethics` | AI Ethics |
| `ops-strategy` | Ops Strategy |

**Note:** "Talent Strategy" will map to the existing `soft-skills` filter to keep the filter count manageable.

**File:** `src/lib/articles.ts`
- Update `filterTag` type to include `'ai-ethics' | 'ops-strategy'`
- Add new filter options to `filterOptions` array

---

### 2. New Article Entries

Add three new articles to the centralized data store:

**File:** `src/lib/articles.ts`

```typescript
// Article 7
{
  slug: "strategy-bottleneck",
  category: "AI Ethics",
  filterTag: "ai-ethics",
  title: "The Strategy Bottleneck: Why 'Can AI do it?' is the Wrong Question",
  subtitle: "When generative speed replaces strategic friction, we stop solving problems and start just picking options.",
  date: "Feb 20, 2026",
  readingTime: "4 min read",
  summary: "As leaders, our role is to reintroduce Strategic Friction.",
  patternClass: "pattern-bottleneck",
  featured: false,
}

// Article 8
{
  slug: "research-inflection",
  category: "Ops Strategy",
  filterTag: "ops-strategy",
  title: "The Research Inflection Point: The End of Manual Analysis",
  subtitle: "Jakob Nielsen's 2026 findings are clear: AI is now a better observer of user emotion than a junior researcher.",
  date: "Feb 25, 2026",
  readingTime: "5 min read",
  summary: "We aren't automating empathy; we are automating observation.",
  patternClass: "pattern-research",
  featured: false,
}

// Article 9
{
  slug: "generalist-advantage",
  category: "Talent Strategy",
  filterTag: "soft-skills",
  title: "The Return of the Generalist: Why Depth is Dead",
  subtitle: "In an AI world, specialized execution is a commodity. Synthesis is the new premium.",
  date: "Mar 1, 2026",
  readingTime: "5 min read",
  summary: "Don't polish the pixel; orchestrate the system.",
  patternClass: "pattern-generalist",
  featured: false,
}
```

---

### 3. New Article Pages

Create three new article page components using the existing `ArticleLayout` template:

| File | Content |
|------|---------|
| `src/pages/articles/StrategyBottleneckArticle.tsx` | Strategy Bottleneck content |
| `src/pages/articles/ResearchInflectionArticle.tsx` | Research Inflection Point content |
| `src/pages/articles/GeneralistAdvantageArticle.tsx` | Generalist Advantage content |

Each article follows the existing structure:
- Import ArticleLayout
- Category tag, title, subtitle, date, pattern class
- Article body with paragraphs, callouts, and bullet lists

---

### 4. New CSS Patterns

Add three new geometric patterns for the article thumbnails:

**File:** `src/index.css`

```css
/* Strategy Bottleneck - Converging lines representing friction */
.pattern-bottleneck { ... }

/* Research Inflection - Data visualization aesthetic */
.pattern-research { ... }

/* Generalist Advantage - Connected nodes representing synthesis */
.pattern-generalist { ... }
```

---

### 5. Update Routes

**File:** `src/App.tsx`

Add three new route imports and route definitions:

```tsx
import StrategyBottleneckArticle from "./pages/articles/StrategyBottleneckArticle";
import ResearchInflectionArticle from "./pages/articles/ResearchInflectionArticle";
import GeneralistAdvantageArticle from "./pages/articles/GeneralistAdvantageArticle";

// New routes
<Route path="/insights/strategy-bottleneck" element={<StrategyBottleneckArticle />} />
<Route path="/insights/research-inflection" element={<ResearchInflectionArticle />} />
<Route path="/insights/generalist-advantage" element={<GeneralistAdvantageArticle />} />
```

---

### 6. Visual Grid Update: Symmetrical 3x3

**File:** `src/pages/InsightsHub.tsx`

Update the grid to display a clean 3x3 layout with pillar articles emphasized:

**Layout Changes:**
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` (already in place)
- Remove special column spanning logic
- All 9 cards display equally in the grid

**Pillar Article Emphasis:**
- Mark "ROI of Experience" and "Outcome Stories" as `featured: true` in data
- Featured cards get enhanced typography treatment

---

### 7. Enhanced Card for Pillar Articles

**File:** `src/components/insights/InsightCard.tsx`

Add conditional styling for featured/pillar articles:

```tsx
// Featured articles get larger title font
<h3 className={`font-semibold leading-tight tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors duration-300 ${
  featured ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"
}`}>
```

---

### 8. Implementation Summary

| File | Action |
|------|--------|
| `src/lib/articles.ts` | Add 3 articles + 2 new filter tags |
| `src/pages/articles/StrategyBottleneckArticle.tsx` | Create |
| `src/pages/articles/ResearchInflectionArticle.tsx` | Create |
| `src/pages/articles/GeneralistAdvantageArticle.tsx` | Create |
| `src/index.css` | Add 3 new pattern classes |
| `src/App.tsx` | Add 3 new routes |
| `src/components/insights/InsightCard.tsx` | Enhance featured card typography |
| `src/components/insights/FilterPills.tsx` | Will auto-update from articles.ts |

---

### 9. Final Grid Structure

```text
+-------------------+-------------------+-------------------+
| ROI of Experience | AI Paradox        | Authority Gap     |
| (Pillar - larger) | (Featured)        | (Featured)        |
+-------------------+-------------------+-------------------+
| Outcome Stories   | Lean Leadership   | AI Guardrails     |
| (Pillar - larger) |                   |                   |
+-------------------+-------------------+-------------------+
| Strategy          | Research          | Generalist        |
| Bottleneck        | Inflection        | Advantage         |
+-------------------+-------------------+-------------------+
```

---

### 10. Article Order Strategy

To ensure pillar articles appear prominently:
1. Keep "ROI of Experience" first (top-left position)
2. Move "Outcome Stories" to position 4 (first in second row)
3. Both marked with `featured: true` for enhanced typography




## Insights Hub: Full-Page Knowledge Center

Transform the blog section into a dedicated, searchable knowledge hub with advanced filtering, bento grid layout, and enhanced reading experience.

---

### 1. Structural Overview

```text
+------------------------------------------------------------------+
|  /insights (New Hub Page)                                         |
|  +------------------------------------------------------------+  |
|  |  HEADER: Glassmorphism nav with search trigger (Cmd+K)     |  |
|  +------------------------------------------------------------+  |
|  |  HERO: "Cognitive Infrastructure" + subtitle               |  |
|  +------------------------------------------------------------+  |
|  |  FILTERS: [All] [AI Strategy] [Design Leadership] [ROI]   |  |
|  +------------------------------------------------------------+  |
|  |  BENTO GRID: 6 article cards (masonry-style)               |  |
|  |  +--------+  +------------------+  +--------+              |  |
|  |  | Card 1 |  |     Card 2       |  | Card 3 |              |  |
|  |  +--------+  +------------------+  +--------+              |  |
|  |  +------------------+  +--------+  +--------+              |  |
|  |  |     Card 4       |  | Card 5 |  | Card 6 |              |  |
|  |  +------------------+  +--------+  +--------+              |  |
|  +------------------------------------------------------------+  |
+------------------------------------------------------------------+
```

---

### 2. New Files to Create

| File | Purpose |
|------|---------|
| `src/pages/InsightsHub.tsx` | Main hub page with grid, filters, and search |
| `src/components/insights/InsightCard.tsx` | Enhanced article card with reading time, glow effects |
| `src/components/insights/FilterPills.tsx` | Category filter pills |
| `src/components/insights/SearchCommand.tsx` | Terminal-style Cmd+K search modal |
| `src/components/insights/ReadingProgress.tsx` | Progress bar for article pages |
| `src/pages/articles/OutcomeStoriesArticle.tsx` | New article: Outcome Stories |
| `src/pages/articles/LeanLeadershipArticle.tsx` | New article: Lean Leadership |
| `src/pages/articles/AIGuardrailsArticle.tsx` | New article: AI Guardrails |
| `src/lib/articles.ts` | Centralized article data store |

---

### 3. Files to Modify

| File | Changes |
|------|---------|
| `src/App.tsx` | Add `/insights` route + 3 new article routes |
| `src/components/BlogSection.tsx` | Convert to "Featured Insights" preview with 3 cards + CTA |
| `src/components/Header.tsx` | Update "Insights" nav to link to `/insights` page |
| `src/components/article/ArticleLayout.tsx` | Add reading progress bar at top |
| `src/index.css` | Add new patterns and card glow animations |

---

### 4. Article Data Structure

Create a centralized data store with all 6 articles:

```typescript
// src/lib/articles.ts
export interface Article {
  slug: string;
  category: string;
  filterTag: 'ai-strategy' | 'design-leadership' | 'business-roi' | 'soft-skills';
  title: string;
  subtitle: string;
  date: string;
  readingTime: string;
  summary: string;
  patternClass: string;
  featured?: boolean;
}

export const articles: Article[] = [
  // 3 existing + 3 new articles
];
```

**Complete Article List:**

| Title | Category | Filter Tag | Reading Time |
|-------|----------|------------|--------------|
| The ROI of Experience | Business Strategy | business-roi | 4 min |
| The AI Leadership Paradox | AI / Leadership | ai-strategy | 5 min |
| The Authority Gap | Executive Presence | design-leadership | 4 min |
| Outcome Stories (NEW) | Design Leadership | design-leadership | 6 min |
| Lean Leadership (NEW) | Soft Skills | soft-skills | 5 min |
| AI Guardrails (NEW) | AI Strategy | ai-strategy | 7 min |

---

### 5. Insights Hub Page Structure

**Hero Section:**
- Title: "Cognitive Infrastructure"
- Subtitle: "Strategic thinking on design, AI, and organizational transformation"
- Terminal-style search trigger with keyboard shortcut hint

**Filter System:**
- Pill-shaped buttons with glassmorphism effect
- Categories: All, AI Strategy, Design Leadership, Business ROI, Soft Skills
- Active state uses primary orange color

**Bento Grid Layout:**
- CSS Grid with varying column spans for visual interest
- First two articles span 2 columns (featured)
- Remaining articles span 1 column each
- Responsive: 1 column mobile, 2 tablet, 3 desktop

---

### 6. Enhanced Card Design

Each InsightCard displays:
- Abstract pattern thumbnail (existing patterns)
- Category tag (orange pill)
- Title with tight tracking
- Subtitle preview
- Reading time indicator (clock icon)
- Date

**Hover Interactions:**
- Orange-600 border glow (`box-shadow: 0 0 30px -5px hsl(24 95% 53% / 0.4)`)
- "Read Article" CTA slides in from bottom
- Subtle scale transform (1.02)

---

### 7. Terminal-Style Search (Cmd+K)

Leverage existing `cmdk` component with custom styling:
- Dark glassmorphism background
- Monospace font for input
- Keyboard shortcut badge in corner
- Real-time filtering of articles
- Shows title, category, and reading time in results

---

### 8. Reading Progress Bar

Add to ArticleLayout:
- Fixed position at very top of viewport
- Orange-600 fill color
- Width based on scroll percentage
- Smooth animation (60fps)
- Height: 3px for minimal intrusion

---

### 9. Home Page "Featured Insights" Section

Transform BlogSection to show:
- Section header: "Featured Insights" with "View All" link
- Top 3 articles only (marked as `featured: true`)
- Prominent CTA button: "Explore All Insights" linking to `/insights`

---

### 10. New Article Content (Placeholder Structure)

**Outcome Stories:**
- Focus on measuring design impact through outcome narratives
- Category: Design Leadership

**Lean Leadership:**
- Principles of efficient team management
- Category: Soft Skills

**AI Guardrails:**
- Building safe, trustworthy AI products
- Category: AI Strategy

These will use the existing ArticleLayout component with appropriate content sections.

---

### 11. Visual Design Specs

**Colors:**
- Primary accent: `hsl(24 95% 53%)` (International Orange / #ea580c)
- Card background: `bg-white/5 backdrop-blur-md`
- Card border: `border-white/10` (default), `border-primary/40` (hover)

**Typography:**
- Headlines: Inter, tracking-tight, font-semibold
- Body: Inter, text-muted-foreground
- Monospace accents: JetBrains Mono for tags, dates, reading time

**Effects:**
- Glassmorphism: `backdrop-blur-md bg-white/5`
- Orange glow: `box-shadow: 0 0 40px -10px hsl(24 95% 53% / 0.3)`

---

### 12. Route Configuration

```tsx
// New routes in App.tsx
<Route path="/insights" element={<InsightsHub />} />
<Route path="/insights/outcome-stories" element={<OutcomeStoriesArticle />} />
<Route path="/insights/lean-leadership" element={<LeanLeadershipArticle />} />
<Route path="/insights/ai-guardrails" element={<AIGuardrailsArticle />} />
```

---

### 13. Implementation Sequence

1. Create centralized article data store (`lib/articles.ts`)
2. Build InsightCard component with enhanced interactions
3. Create FilterPills component
4. Build SearchCommand modal with cmdk
5. Create InsightsHub page with bento grid
6. Add ReadingProgress component to ArticleLayout
7. Create 3 new article pages with placeholder content
8. Update BlogSection to "Featured Insights" preview
9. Update Header navigation
10. Add new CSS patterns and animations
11. Configure all routes in App.tsx


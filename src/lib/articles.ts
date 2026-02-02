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
  {
    slug: "roi-of-experience",
    category: "Business Strategy",
    filterTag: "business-roi",
    title: "Beyond Vanity Metrics: The ROI of Experience in 2026",
    subtitle: "If you are reporting NPS in a budget meeting, you've already lost the room.",
    date: "Jan 20, 2026",
    readingTime: "4 min read",
    summary: "Strategic design is no longer about how the user feels, but about how fast the organization moves.",
    patternClass: "pattern-systems",
    featured: true,
  },
  {
    slug: "ai-leadership-paradox",
    category: "AI / Leadership",
    filterTag: "ai-strategy",
    title: "The AI Paradox: High-Tech Demands High-Touch Leadership",
    subtitle: "AI generates answers; leaders generate the right questions.",
    date: "Jan 25, 2026",
    readingTime: "5 min read",
    summary: "As AI commoditizes execution, the value of a 'Maker' shifts toward the 'Director'.",
    patternClass: "pattern-ai",
    featured: true,
  },
  {
    slug: "authority-gap",
    category: "Executive Presence",
    filterTag: "design-leadership",
    title: "The Authority Gap: Why Your Title Isn't Enough",
    subtitle: "Shifting from 'Design Evangelist' to 'Strategic Architect'.",
    date: "Jan 30, 2026",
    readingTime: "4 min read",
    summary: "Authority in 2026 isn't granted by a seat at the table; it's earned by solving expensive problems.",
    patternClass: "pattern-leadership",
    featured: true,
  },
  {
    slug: "outcome-stories",
    category: "Design Leadership",
    filterTag: "design-leadership",
    title: "Outcome Stories: Measuring Design Impact That Matters",
    subtitle: "Stop counting deliverables. Start counting decisions influenced.",
    date: "Feb 5, 2026",
    readingTime: "6 min read",
    summary: "The most powerful design metric isn't pixels shipped—it's organizational behavior changed.",
    patternClass: "pattern-outcomes",
    featured: false,
  },
  {
    slug: "lean-leadership",
    category: "Soft Skills",
    filterTag: "soft-skills",
    title: "Lean Leadership: The Art of Doing Less, Better",
    subtitle: "Efficiency isn't about speed—it's about eliminating waste.",
    date: "Feb 10, 2026",
    readingTime: "5 min read",
    summary: "High-performing design teams don't work harder. They work on fewer, better things.",
    patternClass: "pattern-lean",
    featured: false,
  },
  {
    slug: "ai-guardrails",
    category: "AI Strategy",
    filterTag: "ai-strategy",
    title: "AI Guardrails: Building Trust at Scale",
    subtitle: "Users don't want magical AI. They want predictable AI.",
    date: "Feb 15, 2026",
    readingTime: "7 min read",
    summary: "The difference between delightful and dangerous AI is a well-designed constraint system.",
    patternClass: "pattern-guardrails",
    featured: false,
  },
];

export const filterOptions = [
  { value: "all", label: "All" },
  { value: "ai-strategy", label: "AI Strategy" },
  { value: "design-leadership", label: "Design Leadership" },
  { value: "business-roi", label: "Business ROI" },
  { value: "soft-skills", label: "Soft Skills" },
] as const;

export type FilterValue = typeof filterOptions[number]['value'];

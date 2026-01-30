import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Article {
  category: string;
  title: string;
  date: string;
  summary: string;
  slug: string;
  patternClass: string;
}

const articles: Article[] = [
  {
    category: "Business Strategy",
    title: "Beyond Vanity Metrics: The ROI of Experience in 2026",
    date: "Jan 20, 2026",
    summary: "If you are reporting NPS in a budget meeting, you've already lost the room. Strategic design is no longer about how the user feels, but about how fast the organization moves.",
    slug: "roi-of-experience",
    patternClass: "pattern-systems",
  },
  {
    category: "AI / Leadership",
    title: "The AI Paradox: High-Tech Demands High-Touch Leadership",
    date: "Jan 25, 2026",
    summary: "AI generates answers; leaders generate the right questions. As AI commoditizes execution, the value of a 'Maker' shifts toward the 'Director'.",
    slug: "ai-leadership-paradox",
    patternClass: "pattern-ai",
  },
  {
    category: "Executive Presence",
    title: "The Authority Gap: Why Your Title Isn't Enough",
    date: "Jan 30, 2026",
    summary: "Shifting from 'Design Evangelist' to 'Strategic Architect'. Authority in 2026 isn't granted by a seat at the table; it's earned by solving expensive problems.",
    slug: "authority-gap",
    patternClass: "pattern-leadership",
  },
];

const BlogSection = () => {
  return (
    <section id="insights" className="py-32 lg:py-40 border-t border-white/10">
      <div className="container mx-auto px-6">
        {/* Section header - Editorial style */}
        <div className="mb-16 lg:mb-20">
          <span className="text-xs font-mono text-primary uppercase tracking-widest mb-4 block">
            Insights
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-6">
            Thinking & Strategy
          </h2>
          <div className="h-px bg-border w-full" />
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article) => (
            <Link to={`/insights/${article.slug}`} key={article.slug}>
              <article className="group cursor-pointer border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md hover:border-primary/40 hover:bg-white/10 transition-all duration-300 h-full">
                {/* Abstract geometric thumbnail */}
                <div className={`aspect-[16/10] relative overflow-hidden ${article.patternClass}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  {/* Category tag */}
                  <span className="text-xs font-mono text-primary uppercase tracking-widest mb-4 block">
                    {article.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-semibold leading-tight text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {article.title}
                  </h3>

                  {/* Date */}
                  <time className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4 block">
                    {article.date}
                  </time>

                  {/* Summary */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                    {article.summary}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

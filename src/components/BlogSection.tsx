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
    category: "Design Systems & Ops",
    title: "Why Your Design System is Failing (It's Not the UI Kit)",
    date: "Oct 12, 2025",
    summary: "Most Design Systems die in the 'figma graveyard' because they focus on artifacts instead of governance. Based on the TP Design System global rollout, here is how to shift from shipping components to scaling decision-making across distributed teams.",
    slug: "design-system-failing",
    patternClass: "pattern-systems",
  },
  {
    category: "AI & Product Strategy",
    title: "AI-Driven Design: Moving from Spectacle to Utility",
    date: "Nov 04, 2025",
    summary: "We need to stop trying to impress users with AI magic and start building trust. A look at why 'boring' AI—automating operational friction and ensuring traceability—is the true driver of business ROI in the next decade.",
    slug: "ai-driven-design",
    patternClass: "pattern-ai",
  },
  {
    category: "Leadership",
    title: "Design is a Behavior, Not a Department",
    date: "Jan 15, 2026",
    summary: "Transitioning from a service-bureau model to a strategic partner requires breaking silos. Insights on how to mature an organization's UX culture from 'make it pretty' to 'business first' strategies.",
    slug: "design-behavior",
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
              <article className="group cursor-pointer border border-white/10 rounded-2xl overflow-hidden bg-card/30 hover:border-primary/30 transition-all duration-300 h-full">
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

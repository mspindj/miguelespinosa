import { ArrowUpRight } from "lucide-react";

interface Article {
  title: string;
  description: string;
  tag: string;
}

const articles: Article[] = [
  {
    title: "The ROI of Psychology",
    description: "How cognitive science principles translate into measurable business outcomes.",
    tag: "Research",
  },
  {
    title: "Design Debt",
    description: "Understanding and managing the hidden costs of design shortcuts.",
    tag: "Strategy",
  },
  {
    title: "The CFO Perspective",
    description: "Speaking the language of finance to advocate for design investment.",
    tag: "Leadership",
  },
];

const BlogSection = () => {
  return (
    <section className="py-32 lg:py-40 border-t border-white/10">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            Cognitive Infrastructure
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.title}
              className="glass-card p-6 rounded-2xl group cursor-pointer hover:border-primary/30 transition-all"
            >
              <span className="text-xs font-mono text-primary uppercase tracking-widest mb-4 block">
                {article.tag}
              </span>

              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {article.description}
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                <span>Coming Soon</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

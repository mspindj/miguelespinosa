import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { articles } from "@/lib/articles";

const BlogSection = () => {
  // Get featured articles only (top 3)
  const featuredArticles = articles.filter(a => a.featured).slice(0, 3);

  return (
    <section id="insights" className="py-32 lg:py-40 border-t border-white/10">
      <div className="container mx-auto px-6">
        {/* Section header - Editorial style */}
        <div className="mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-primary uppercase tracking-widest mb-4 block">
              Featured Insights
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
              Cognitive Infrastructure
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Strategic thinking on design, AI, and organizational transformation.
            </p>
          </div>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
          >
            <span>Explore All Insights</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="h-px bg-border mb-12" />

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredArticles.map((article) => (
            <Link to={`/insights/${article.slug}`} key={article.slug}>
              <motion.article 
                className="group cursor-pointer border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md hover:border-primary/40 transition-all duration-300 h-full"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 30px -5px hsl(24 95% 53% / 0.4)"
                }}
              >
                {/* Abstract geometric thumbnail */}
                <div className={`aspect-[16/10] relative overflow-hidden ${article.patternClass}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  {/* Category tag */}
                  <span className="inline-block text-xs font-mono text-primary-foreground bg-primary/90 px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                    {article.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-semibold leading-tight tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {article.title}
                  </h3>

                  {/* Meta row */}
                  <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
                    <time>{article.date}</time>
                    <span className="text-border">•</span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      <span>{article.readingTime}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                    {article.summary}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Link
            to="/insights"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            <span>Explore All Insights</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

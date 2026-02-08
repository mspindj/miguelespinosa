import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Article } from "@/lib/articles";

interface InsightCardProps {
  article: Article;
  featured?: boolean;
}

const InsightCard = ({ article, featured = false }: InsightCardProps) => {
  return (
    <Link to={`/insights/${article.slug}`}>
      <motion.article
        className={`group cursor-pointer border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md hover:border-primary/40 transition-all duration-300 h-full ${
          featured ? "lg:col-span-2" : ""
        }`}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 0 30px -5px hsl(24 95% 53% / 0.4)"
        }}
        transition={{ duration: 0.2 }}
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
          <h3 className={`font-semibold leading-tight tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors duration-300 ${
            featured ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"
          }`}>
            {article.title}
          </h3>

          {/* Subtitle */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
            {article.subtitle}
          </p>

          {/* Meta row: Date + Reading time */}
          <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground uppercase tracking-wider mb-6">
            <time>{article.date}</time>
            <span className="text-border">•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              <span>{article.readingTime}</span>
            </div>
          </div>

          {/* CTA with slide-in animation */}
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-primary transition-all duration-300">
            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              Read Article
            </span>
            <ArrowRight className="w-4 h-4 -translate-x-6 group-hover:translate-x-0 transition-transform duration-300" />
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default InsightCard;

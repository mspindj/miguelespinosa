import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface ArticleLayoutProps {
  category: string;
  title: string;
  subtitle: string;
  date: string;
  patternClass: string;
  children: ReactNode;
}

const ArticleLayout = ({
  category,
  title,
  subtitle,
  date,
  patternClass,
  children,
}: ArticleLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Back navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <Link
            to="/#insights"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights</span>
          </Link>
        </div>
      </div>

      {/* Hero section */}
      <header className="pt-24 pb-12 lg:pt-32 lg:pb-16">
        <div className="container mx-auto px-6">
          {/* Pattern banner */}
          <div className={`aspect-[21/9] lg:aspect-[3/1] rounded-2xl overflow-hidden mb-12 ${patternClass}`} />

          <div className="max-w-3xl">
            {/* Category */}
            <span className="text-xs font-mono text-primary uppercase tracking-widest mb-4 block">
              {category}
            </span>

            {/* Title */}
            <h1 className="text-3xl lg:text-5xl font-semibold tracking-tight text-foreground mb-6 leading-tight">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-8">
              {subtitle}
            </p>

            {/* Date and author */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time className="font-mono uppercase tracking-wider">{date}</time>
              <span className="text-border">•</span>
              <span>Miguel Espinosa</span>
            </div>
          </div>
        </div>
      </header>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Article body */}
      <article className="py-12 lg:py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl article-body">{children}</div>
        </div>
      </article>

      {/* Author signature */}
      <footer className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-card border border-white/10 flex items-center justify-center">
                <span className="text-xl font-semibold text-primary">M</span>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Miguel Espinosa</p>
                <p className="text-sm text-muted-foreground">
                  Design Director & Strategic Leader
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArticleLayout;

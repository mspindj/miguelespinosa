import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import InsightCard from "@/components/insights/InsightCard";
import FilterPills from "@/components/insights/FilterPills";
import SearchCommand, { SearchTrigger } from "@/components/insights/SearchCommand";
import { articles, type FilterValue } from "@/lib/articles";
import Header from "@/components/Header";

const InsightsHub = () => {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");
  const [searchOpen, setSearchOpen] = useState(false);

  // Keyboard shortcut for search
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const filteredArticles = useMemo(() => {
    if (activeFilter === "all") return articles;
    return articles.filter((article) => article.filterTag === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16">
        <div className="container mx-auto px-6">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-mono text-primary uppercase tracking-widest mb-4 block">
              Knowledge Hub
            </span>
            <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6">
              Cognitive Infrastructure
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-10">
              Strategic thinking on design, AI, and organizational transformation.
            </p>

            {/* Search trigger */}
            <div className="mb-10">
              <SearchTrigger onClick={() => setSearchOpen(true)} />
            </div>

            {/* Filter pills */}
            <FilterPills activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Articles Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {filteredArticles.map((article) => (
              <motion.div
                key={article.slug}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <InsightCard article={article} featured={article.featured} />
              </motion.div>
            ))}
          </motion.div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground font-mono">
                No articles found for this filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Search Command Modal */}
      <SearchCommand open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
};

export default InsightsHub;

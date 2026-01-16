import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface CaseStudyHeroProps {
  number: string;
  year: string;
  title: string;
  subtitle: string;
}

const CaseStudyHero = ({ number, year, title, subtitle }: CaseStudyHeroProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center relative z-10 max-w-5xl"
      >
        {/* Meta */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-xs font-mono text-primary">{number}</span>
          <span className="w-8 h-px bg-border" />
          <span className="text-xs font-mono text-muted-foreground">{year}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter text-foreground mb-6">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground font-light">
          {subtitle}
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CaseStudyHero;

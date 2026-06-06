import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const socialProof = ["Teleperformance", "Globant", "BBVA", "Zinobe"];

const rotatingPhrases = [
  "PRODUCT DECISIONS",
  "BUSINESS STRATEGY",
  "AI INNOVATION",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end pb-32 pt-40">
      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(ellipse at center, hsl(70 77% 55% / 0.10) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Status indicator */}
        <div className="flex items-center gap-3 mb-8">
          <span className="glow-dot" />
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            Senior Director of Product Design
          </span>
        </div>

        {/* Main headline */}
        <div className="space-y-4 mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground">
            LEADERSHIP THROUGH
          </h1>
          {/* Rotating second line */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground/40"
              >
                {rotatingPhrases[currentIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          Senior Director of Product Design.{" "}
          <span className="text-foreground/70">
            Bridging business strategy, human-centered design, and AI innovation.
          </span>
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <button
            onClick={scrollToWork}
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <span>Explore Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
          <Link
            to="/about"
            className="group inline-flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="uppercase tracking-widest">Read Manifesto</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Social proof */}
        <div className="flex flex-wrap items-center gap-6 lg:gap-10">
          {socialProof.map((company) => (
            <span
              key={company}
              className="text-sm font-medium text-muted-foreground/30 tracking-wide uppercase"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const socialProof = ["Teleperformance", "Globant", "BBVA", "Zinobe"];

const HeroSection = () => {
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground/40">
            PRODUCT DECISIONS
          </h1>
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

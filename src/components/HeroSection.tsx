import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end pb-24 pt-32">
      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(ellipse at center, hsl(24 95% 53% / 0.12) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Status indicator */}
        <div className="flex items-center gap-3 mb-8">
          <span className="glow-dot" />
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            Senior Product Leadership
          </span>
        </div>

        {/* Main headline */}
        <div className="space-y-4 mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-foreground">
            LEADERSHIP THROUGH
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-foreground/40">
            PRODUCT DECISIONS
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          Bridging the gap between business strategy and design execution.
          <br />
          <span className="text-foreground/60">
            Focusing on scalable systems, data-driven outcomes, and team empowerment.
          </span>
        </p>

        {/* CTA */}
        <button
          onClick={scrollToWork}
          className="group inline-flex items-center gap-3 text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          <span className="uppercase tracking-widest">View Selected Work</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

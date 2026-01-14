import BentoGrid from "@/components/BentoGrid";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Subtle grid pattern overlay */}
      <div className="fixed inset-0 grid-pattern opacity-50 pointer-events-none" />
      
      {/* Ambient glow */}
      <div 
        className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'var(--gradient-glow)' }}
      />

      <main className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        {/* Header */}
        <header className="mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="glow-dot" />
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              System Online
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight gradient-text mb-4">
            Building scalable systems<br />
            <span className="text-muted-foreground">for the modern web.</span>
          </h1>
          <p className="text-muted-foreground max-w-xl">
            Architecting high-performance, distributed systems that power mission-critical applications.
          </p>
        </header>

        {/* Bento Grid */}
        <BentoGrid />
      </main>
    </div>
  );
};

export default Index;

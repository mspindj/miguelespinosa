/**
 * SystemDiagram — Visual proof of the AI Design OS
 * Two sections:
 * 1. Architecture: how the 5 components relate to the model session
 * 2. Before/After: AI output without vs. with context files
 */

const NODE_BASE =
  "rounded-xl border px-4 py-3 text-xs font-mono leading-snug";
const INPUT_NODE =
  NODE_BASE + " border-primary/30 bg-primary/5 text-primary";
const OUTPUT_NODE =
  NODE_BASE + " border-white/20 bg-card text-muted-foreground";
const MODEL_NODE =
  "rounded-2xl border-2 border-primary/60 bg-primary/10 px-6 py-5 text-center";

function Arrow({ vertical = false }: { vertical?: boolean }) {
  return (
    <div
      className={`flex items-center justify-center text-primary/40 font-mono text-sm select-none ${
        vertical ? "py-1" : "px-1"
      }`}
    >
      {vertical ? "↓" : "→"}
    </div>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="w-full overflow-x-auto">
      {/* Desktop layout */}
      <div className="hidden md:flex items-center gap-2 min-w-[640px]">

        {/* Inputs */}
        <div className="flex flex-col gap-2 flex-1 min-w-[160px]">
          <div className={INPUT_NODE}>
            <div className="text-primary/50 text-[10px] tracking-widest uppercase mb-1">Context</div>
            DESIGN.md<br />voice.md<br />domain-patterns.md
          </div>
          <div className={INPUT_NODE}>
            <div className="text-primary/50 text-[10px] tracking-widest uppercase mb-1">Memory</div>
            corrections.md<br />dont-do.md
          </div>
        </div>

        <Arrow />

        {/* Model */}
        <div className="flex-shrink-0 w-[160px]">
          <div className={MODEL_NODE}>
            <div className="text-[10px] font-mono tracking-widest text-primary/50 uppercase mb-2">
              Model Session
            </div>
            <div className="text-sm font-semibold text-foreground mb-3">AI Agent</div>
            <div className="flex flex-col gap-1.5">
              {["specifier", "implementer", "reviewer"].map((r) => (
                <div
                  key={r}
                  className="text-[10px] font-mono text-primary/70 border border-primary/20 rounded px-2 py-1 bg-primary/5"
                >
                  {r}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Arrow />

        {/* Outputs */}
        <div className="flex flex-col gap-2 flex-1 min-w-[140px]">
          <div className={OUTPUT_NODE}>
            <div className="text-white/30 text-[10px] tracking-widest uppercase mb-1">04</div>
            Validation<br />
            <span className="text-white/30 text-[10px]">scope · output · quality</span>
          </div>
          <div className={OUTPUT_NODE}>
            <div className="text-white/30 text-[10px] tracking-widest uppercase mb-1">05</div>
            Human Gate<br />
            <span className="text-white/30 text-[10px]">you decide · then ship</span>
          </div>
        </div>

        <Arrow />

        {/* Result */}
        <div className="flex-shrink-0">
          <div className="rounded-xl border border-primary/40 bg-primary/10 px-4 py-3 text-center">
            <div className="text-primary text-lg mb-0.5">✓</div>
            <div className="text-[10px] font-mono text-primary/70 uppercase tracking-widest">
              Predictable<br />output
            </div>
          </div>
        </div>

      </div>

      {/* Mobile layout */}
      <div className="flex md:hidden flex-col items-center gap-1">
        <div className={INPUT_NODE + " w-full text-center"}>
          Context Files + Memory
        </div>
        <Arrow vertical />
        <div className={MODEL_NODE + " w-full"}>
          <div className="text-[10px] font-mono text-primary/50 uppercase tracking-widest mb-1">Model Session</div>
          <div className="text-sm font-semibold text-foreground">AI Agent + Roles</div>
        </div>
        <Arrow vertical />
        <div className={OUTPUT_NODE + " w-full text-center"}>
          Validation → Human Gate
        </div>
        <Arrow vertical />
        <div className="rounded-xl border border-primary/40 bg-primary/10 px-4 py-3 text-center w-full">
          <span className="text-primary text-sm font-mono">✓ Predictable output</span>
        </div>
      </div>
    </div>
  );
}

const beforeCode = `// No context files loaded
// Model guesses from training data

<Button
  style={{
    backgroundColor: '#3b82f6',
    padding: '8px 16px',
    borderRadius: '4px',
    fontSize: '14px'
  }}
>
  Get Started
</Button>

// Wrong color. Wrong radius.
// Hardcoded values. Every time.`;

const afterCode = `// DESIGN.md loaded — model reads your system

<Button
  variant="default"
  size="md"
  className="rounded-md"
>
  Get Started
</Button>

// Correct tokens. Correct component.
// Matches your design system exactly.`;

function BeforeAfter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      {/* Before */}
      <div className="rounded-2xl border border-white/10 overflow-hidden">
        <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <span className="text-[11px] font-mono text-muted-foreground/50 uppercase tracking-widest">
            without context files
          </span>
        </div>
        <pre className="p-4 text-[12px] font-mono leading-relaxed text-muted-foreground/60 overflow-x-auto">
          <code>{beforeCode}</code>
        </pre>
      </div>

      {/* After */}
      <div className="rounded-2xl border border-primary/25 overflow-hidden">
        <div className="px-4 py-3 border-b border-primary/20 flex items-center gap-3 bg-primary/5">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/25" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/15" />
          </div>
          <span className="text-[11px] font-mono text-primary/60 uppercase tracking-widest">
            with DESIGN.md loaded
          </span>
        </div>
        <pre className="p-4 text-[12px] font-mono leading-relaxed text-muted-foreground overflow-x-auto">
          <code>{afterCode}</code>
        </pre>
      </div>

    </div>
  );
}

export default function SystemDiagram() {
  return (
    <section className="py-16 lg:py-20 bg-card/30">
      <div className="container mx-auto px-6">

        {/* Architecture */}
        <div className="max-w-4xl mb-16">
          <span className="text-xs font-mono text-primary uppercase tracking-widest mb-4 block">
            How it fits together
          </span>
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-foreground mb-10">
            The model is in the middle.<br className="hidden lg:block" /> Everything else is the environment.
          </h2>
          <ArchitectureDiagram />
        </div>

        {/* Before / After */}
        <div className="max-w-4xl">
          <span className="text-xs font-mono text-primary uppercase tracking-widest mb-4 block">
            The difference in practice
          </span>
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-foreground mb-3">
            Same prompt. Same model.
          </h2>
          <p className="text-muted-foreground mb-10">
            The only variable is whether the context files are there.
          </p>
          <BeforeAfter />
        </div>

      </div>
    </section>
  );
}

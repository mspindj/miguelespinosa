import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";

const components = [
  {
    number: "01",
    name: "Context Files",
    description:
      "What the model reads before it acts. DESIGN.md captures your visual system. voice.md defines how the AI sounds and handles uncertainty. domain-patterns.md encodes the industry knowledge no model can infer. Without these, the model invents its own version of your product.",
    files: ["DESIGN.md", "voice.md", "domain-patterns.md"],
  },
  {
    number: "02",
    name: "Agent Roles",
    description:
      "The agent that writes the spec shouldn't write the code. Separation of concerns applies to agents too. One agent to specify, one to implement, one to review. Each role gets its own context, its own constraints, its own definition of done.",
    files: ["specifier", "implementer", "reviewer"],
  },
  {
    number: "03",
    name: "Memory",
    description:
      "The model doesn't remember you. Your files do. corrections.md captures every time the model did something wrong and what the right answer was. dont-do.md captures approaches you've explicitly rejected. Both travel with the project forever.",
    files: ["corrections.md", "dont-do.md"],
  },
  {
    number: "04",
    name: "Validation",
    description:
      "Checkpoints that run after the model acts. Did it touch files outside the task scope? Stop. Does the output match what was specified? Verify. Validation is how you build trust incrementally — not by hoping the model got it right.",
    files: ["scope checks", "output verification", "quality gates"],
  },
  {
    number: "05",
    name: "Human Gates",
    description:
      "Deliberate pauses where you — not the model — decide what happens next. Not because you don't trust the model. Because trust gets earned incrementally, and some decisions are yours to make.",
    files: ["review checkpoints", "approval workflows"],
  },
];

const artifacts = [
  {
    name: "DESIGN.md",
    description:
      "A machine-readable version of your design system. Not for engineers — for the model. Semantic color tokens, spacing scale, type scale, component inventory. When the model generates a button, it reads this file instead of pattern-matching against random code it saw in training.",
  },
  {
    name: "voice.md",
    description:
      "How the AI speaks in your product. How certain it sounds at different confidence levels. What it says when it doesn't know. How it handles errors. This isn't marketing copy — it's calibration for every AI-generated string in the product.",
  },
  {
    name: "domain-patterns.md",
    description:
      "Industry knowledge the model can't infer. In a golf app: what's the difference between a handicap and a playing handicap? In banking: what does 'cash conversion' actually mean to a retail customer? Domain depth lives here.",
  },
  {
    name: "corrections.md",
    description:
      "An append-only log of every agent mistake and its correction. Date, context, what went wrong, what the right behavior is. No measurable ROI on day one. By month three, it's the most valuable artifact in your project.",
  },
];

const week = [
  { day: "Day 1", action: "Write DESIGN.md", detail: "Two hours. Semantic tokens, spacing, type scale, component list. It will pay back in weeks." },
  { day: "Day 2", action: "Write your first corrections.md entry", detail: "Find something the model got wrong today. Document it. The file exists now." },
  { day: "Day 3", action: "Define three agents", detail: "Specifier. Implementer. Reviewer. They don't have to be smart. They have to be separate." },
  { day: "Day 4", action: "Add your first human gate", detail: "One checkpoint where you approve before the agent continues." },
  { day: "Day 5", action: "Write domain-patterns.md", detail: "What does your product domain know that the model doesn't? Write that down." },
  { day: "Day 7", action: "You have a system", detail: "Not perfect. Not complete. A real system you built yourself, that reflects how you actually work." },
];

function EmailCapture({ id }: { id: string }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "ai-design-os" }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex items-start gap-3 text-sm text-muted-foreground">
        <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          <Check className="w-3 h-3 text-primary" />
        </div>
        <div>
          <p className="mb-2">Done. Here's your guide — open it in the browser or print to PDF.</p>
          <a
            href="/ai-design-os.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-primary font-medium hover:text-primary/80 transition-colors"
          >
            Open the guide
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 bg-card border border-white/10 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
      />
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 whitespace-nowrap"
      >
        {loading ? "Saving..." : "Get the PDF"}
        {!loading && <ArrowRight className="w-4 h-4" />}
      </button>
      {error && (
        <p className="text-xs text-red-400">
          Something went wrong. Try again or email{" "}
          <a href="mailto:mspin.dj@gmail.com" className="underline">mspin.dj@gmail.com</a>.
        </p>
      )}
    </form>
  );
}

const AIDesignOS = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="container mx-auto px-6">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>

          {/* Pattern banner */}
          <div className="aspect-[21/6] rounded-2xl overflow-hidden mb-12 pattern-ai" />

          <div className="max-w-3xl">
            <span className="text-xs font-mono text-primary uppercase tracking-widest mb-4 block">
              Free Resource
            </span>
            <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6 leading-tight">
              The AI Design<br />Operating System
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-10">
              Most designers let AI happen to them. The ones pulling ahead built
              a system around it. Here's the five-component framework I use.
            </p>

            {/* Primary CTA */}
            <div className="bg-card border border-white/10 rounded-2xl p-6 lg:p-8 max-w-xl">
              <p className="text-sm text-muted-foreground mb-4">
                Get the formatted PDF — read it in 20 minutes, implement it in a week.
              </p>
              <EmailCapture id="primary-form" />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* What this is */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              This is a practical framework — not a theoretical one. Built from running real product
              design work with AI agents embedded throughout: at Teleperformance (125+ designers,
              60+ countries), BBVA Colombia, Tati, The Birdie Club.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Most designers interact with AI the way they interact with Google Search. One prompt,
              one response, no memory, no context, no system. It works for one-off tasks. It fails
              for the sustained work of product design — where decisions compound, context matters,
              and quality is non-negotiable.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              The designers who are pulling ahead aren't using better models. They're using AI inside
              a structured environment. This guide is that environment, described plainly.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Five components */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-primary uppercase tracking-widest mb-4 block">
              The Framework
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
              Five components. One afternoon to set up.
            </h2>
          </div>

          <div className="max-w-4xl space-y-6">
            {components.map((c) => (
              <div
                key={c.number}
                className="bg-card border border-white/10 rounded-2xl p-6 lg:p-8 grid grid-cols-[auto_1fr] gap-6"
              >
                <span className="text-xs font-mono text-primary/50 tracking-widest pt-1">
                  {c.number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{c.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{c.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.files.map((f) => (
                      <span
                        key={f}
                        className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* New artifacts */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-primary uppercase tracking-widest mb-4 block">
              The New Artifacts
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
              What you actually produce now
            </h2>
            <p className="text-lg text-muted-foreground">
              When your product is built with AI agents, you produce things that didn't exist five
              years ago. These four files are the core.
            </p>
          </div>

          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
            {artifacts.map((a) => (
              <div
                key={a.name}
                className="bg-card border border-white/10 rounded-2xl p-6"
              >
                <span className="text-xs font-mono text-primary tracking-widest mb-3 block">
                  {a.name}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* First week */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-primary uppercase tracking-widest mb-4 block">
              Getting Started
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
              Your first week
            </h2>
          </div>

          <div className="max-w-3xl space-y-0">
            {week.map((item, i) => (
              <div
                key={item.day}
                className="flex gap-6 py-6 border-b border-white/10 last:border-0"
              >
                <div className="w-16 flex-shrink-0">
                  <span className="text-xs font-mono text-primary/60 uppercase tracking-widest">
                    {item.day}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-foreground font-medium mb-1">{item.action}</p>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
                {i === week.length - 1 && (
                  <div className="flex-shrink-0 self-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Who it's for */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-primary uppercase tracking-widest mb-4 block">
              Who This Is For
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-mono text-primary/60 uppercase tracking-wider mb-4">This is for you if</p>
                <ul className="space-y-3">
                  {[
                    "You're already using AI tools and feel like you're losing control",
                    'You want to go from "AI generates random things" to "AI does predictable things"',
                    "You're a designer or design leader running real product work",
                    "You want a system you can set up this week, not a theory for next quarter",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider mb-4">This is not for you if</p>
                <ul className="space-y-3">
                  {[
                    "You're looking for a technical architecture guide",
                    "You haven't started using AI in your workflow yet",
                    "You want a framework someone else built that you can just install",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground/50">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Secondary CTA */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="bg-card border border-primary/20 rounded-2xl p-8 lg:p-10">
              <span className="text-xs font-mono text-primary uppercase tracking-widest mb-4 block">
                Free PDF
              </span>
              <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-3">
                Get the formatted guide
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg">
                The full "AI Design Operating System" as a formatted PDF — complete with templates
                for DESIGN.md, voice.md, corrections.md, and the first-week setup checklist.
              </p>
              <EmailCapture id="secondary-form" />
            </div>
          </div>
        </div>
      </section>

      {/* Author */}
      <footer className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-card border border-white/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-semibold text-primary">M</span>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Miguel Espinosa</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Senior Director of Product Design
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                  The system in this guide is the actual system I use. Built from running design
                  work with embedded AI at Teleperformance (design system across 60+ countries),
                  BBVA Colombia, Tati (AI translation), and The Birdie Club (AI golf app). Practice
                  first, then documentation.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <Link
                    to="/insights"
                    className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                  >
                    Read the Insights
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  <Link
                    to="/about"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About Miguel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIDesignOS;

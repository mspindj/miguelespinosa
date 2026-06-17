import { motion, type Easing } from "framer-motion";
import BackToHome from "@/components/case-study/BackToHome";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import MetricGrid from "@/components/case-study/MetricGrid";
import PullQuote from "@/components/case-study/PullQuote";

const bulletVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" as Easing },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const BirdieClubCase = () => {
  const problems = [
    {
      title: "Coaching doesn't scale",
      description:
        "David's methodology lived entirely in his head and in-person sessions. Hours available, students coached, and revenue generated were all tightly coupled.",
    },
    {
      title: "Generic AI destroys brand trust",
      description:
        "A chatbot giving generic golf tips would contradict everything David had built. The product had to sound like him — or not launch at all.",
    },
    {
      title: "Two audiences, two contracts",
      description:
        "New market users expected a product. Existing 1,800+ students expected continuity with a relationship they already had. Both had to feel honored.",
    },
    {
      title: "AI output is probabilistic, coaching isn't",
      description:
        "Users comparing AI feedback to real instructor feedback have zero tolerance for vagueness. The swing analysis needed to feel authoritative, not hedged.",
    },
  ];

  const constraints = [
    {
      label: "01",
      title: "No traditional dev team",
      description:
        "Development ran through Lovable with a 5-credit daily budget. Every prompt had to be precision-targeted — no exploratory iteration.",
    },
    {
      label: "02",
      title: "Live platform, no staging",
      description:
        "Beta testers were real paying prospects. Bugs in production weren't abstract — they were visible failures during the founder launch window.",
    },
    {
      label: "03",
      title: "LATAM mobile constraints",
      description:
        "Target users are 40–60+ year-old golfers on 4G in Colombia, Mexico, Argentina, Chile, Spain. Video streaming had to work on real networks, not ideal ones.",
    },
    {
      label: "04",
      title: "iOS PWA as primary delivery",
      description:
        "No App Store. No install friction. The product had to feel native on iPhone while living inside Safari — with all the edge cases that implies.",
    },
  ];

  const decisions = [
    {
      from: "Generic AI",
      to: "Methodology-first",
      description: "David's RJ100 framework (Ritmo, Juego Corto, 100 Yardas) defines the coaching structure — not a general golf knowledge base.",
    },
    {
      from: "Chatbot UI",
      to: "Coaching thread",
      description: "Sessions persist across time. The AI remembers your last drill, your committed plan, and your follow-up check-in.",
    },
    {
      from: "One product",
      to: "Three-tier model",
      description: "Gift access for 1,800+ existing students. Founder pricing ($18/mo, 200 spots). Premium circle ($300/mo) as the future ceiling.",
    },
  ];

  const deliverables = [
    {
      title: "AI Video Analysis",
      description:
        "Gemini 2.5 Flash analyzing swing video through David's RJ100 lens — returning prioritized checkpoints, specific drills, and a weekly focus area.",
    },
    {
      title: "Coaching Memory",
      description:
        "coaching_sessions table persisting drills completed, committed plans, and follow-up check-ins across every session — the AI knows what you've been working on.",
    },
    {
      title: "Mass Onboarding Architecture",
      description:
        "HMAC-signed activation URLs for 1,862 users — no password pre-creation, no account waste. Activation on click, auto-login, redirect to dashboard.",
    },
    {
      title: "CRM Lifecycle Automation",
      description:
        "GHL integration tracking every lifecycle event — activation, first swing, first round, inactivity — without manual CRM entry.",
    },
    {
      title: "82-Lesson Academy",
      description:
        "Full program migrated to proprietary CDN. Seven modules. Videos, PDFs, and structured learning paths — all inside the app, no YouTube leakage.",
    },
  ];

  const metrics = [
    { direction: "up" as const, value: "$2.3K", label: "ARR in first 8 days" },
    { direction: "up" as const, value: "20", label: "Paying customers · 5 countries" },
    { direction: "up" as const, value: "213", label: "Gift activations from 1,862-person list" },
    { direction: "down" as const, value: "0", label: "Critical failures at launch" },
    { direction: "up" as const, value: "82", label: "Academy lessons on proprietary CDN" },
    { direction: "up" as const, value: "5", label: "Production bugs resolved in-flight" },
  ];

  return (
    <main className="bg-background text-foreground">
      <BackToHome />

      <CaseStudyHero
        number="05"
        year="2025 — 2026"
        title="The Birdie Club"
        subtitle="Building a Creator's Digital Twin with AI"
      />

      {/* Role + Project URL */}
      <div className="container mx-auto px-6 max-w-4xl pt-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground border border-border rounded-full px-3 py-1">
          Co-founder &amp; Head of Product Design
        </span>
        <a
          href="https://app.davidvanegas.com.co"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono text-primary hover:text-primary/80 transition-colors uppercase tracking-widest"
        >
          app.davidvanegas.com.co
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>

      {/* Vision */}
      <CaseStudySection label="The Vision">
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          Build a <span className="text-primary font-semibold">digital twin</span> of a golf
          instructor — delivering personalized AI coaching to thousands of students without losing
          the human voice, the methodology, or the trust that took a decade to build.
        </p>
      </CaseStudySection>

      {/* Context */}
      <CaseStudySection label="The Context">
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          David Vanegas built a 70k+ following as a Colombian golf instructor through YouTube,
          in-person clinics, and direct coaching. His RJ100 system — a structured methodology
          around Ritmo, Juego Corto, and 100 Yardas — had proven results. But the model had a
          ceiling: one instructor, limited hours, and a student base that had already outgrown
          what he could serve personally.
        </p>
      </CaseStudySection>

      {/* My Role */}
      <CaseStudySection label="My Role">
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          Co-founder and Head of Product Design. I defined the product strategy,
          designed the full user experience, and orchestrated development using an
          AI-augmented harness — Lovable for UI generation, Claude Code for logic
          and edge functions, and the SDD methodology I've published as the{" "}
          <a
            href="/ai-design-os"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            AI Design Operating System
          </a>
          . No traditional dev team. Product decisions and design execution, shared between two people.
        </p>
      </CaseStudySection>

      {/* The Real Problem */}
      <CaseStudySection label="The Real Problem">
        <p className="text-lg text-foreground mb-10">
          The challenge wasn't building an AI. It was encoding a person's judgment into software — at scale, with no margin for feeling generic.
        </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={bulletVariants}
              className="glass-card p-6 rounded-xl border border-destructive/20"
            >
              <h4 className="text-foreground font-semibold mb-2">{problem.title}</h4>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </CaseStudySection>

      {/* Why It Was Hard */}
      <CaseStudySection label="Why This Was Hard">
        <p className="text-lg text-foreground mb-10">
          Building for a creator means the product IS the person. Every constraint was architectural, not just technical.
        </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {constraints.map((constraint, index) => (
            <motion.div
              key={index}
              variants={bulletVariants}
              className="glass-card p-6 rounded-xl border border-border"
            >
              <span className="text-xs font-mono text-primary mb-2 block">{constraint.label}</span>
              <h4 className="text-foreground font-semibold mb-2">{constraint.title}</h4>
              <p className="text-muted-foreground text-sm">{constraint.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </CaseStudySection>

      {/* The Strategic Decision */}
      <CaseStudySection label="The Strategic Decision">
        <p className="text-lg text-foreground mb-10">
          Three decisions defined the product architecture:
        </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {decisions.map((decision, index) => (
            <motion.div
              key={index}
              variants={bulletVariants}
              className="flex items-start gap-6 p-6 rounded-xl bg-card/50 border border-border"
            >
              <div className="flex items-center gap-3 min-w-[220px] flex-shrink-0">
                <span className="text-muted-foreground font-mono text-sm line-through">{decision.from}</span>
                <span className="text-primary text-sm">→</span>
                <span className="text-primary font-semibold">{decision.to}</span>
              </div>
              <p className="text-muted-foreground text-sm">{decision.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </CaseStudySection>

      {/* The Core Insight */}
      <CaseStudySection label="The Core Insight">
        <div className="glass-card p-8 lg:p-12 rounded-2xl border border-primary/20">
          <p className="text-xl lg:text-2xl text-foreground leading-relaxed mb-6">
            We rejected the <span className="text-muted-foreground line-through">generic AI coach pattern</span>.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            David's RJ100 methodology isn't content — it's the{" "}
            <span className="text-primary font-semibold">product architecture</span>. Every AI output
            is structured around its three pillars. Every drill maps to a specific focus area.
            Every session builds on the last. The AI doesn't give golf tips. It coaches the way
            David coaches — because his framework is what defines the system prompt, the output schema,
            and the coaching memory model.
          </p>
        </div>
      </CaseStudySection>

      {/* What We Built */}
      <CaseStudySection label="What We Built">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              variants={bulletVariants}
              className="flex items-start gap-6 p-6 rounded-xl bg-card/50 border border-border"
            >
              <span className="text-xs font-mono text-primary mt-1 flex-shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h4 className="text-foreground font-semibold mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </CaseStudySection>

      {/* The Impact */}
      <CaseStudySection label="The Impact">
        <MetricGrid metrics={metrics} />
      </CaseStudySection>

      {/* How We Operated */}
      <CaseStudySection label="How We Operated">
        <div className="glass-card p-8 lg:p-12 rounded-2xl border border-border">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Five daily Lovable credits. No staging environment. Real beta users from day one.
            The constraint forced a discipline that most teams don't have: every prompt had to
            be precise, every feature had to earn its place, and every production change had
            to be intentional.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We used the SDD harness — context files encoding David's voice and RJ100 methodology,
            separated agent roles for spec and implementation, persistent corrections logs — to
            maintain product coherence across dozens of sprints without a single design handoff doc.
            The same system is now the{" "}
            <a
              href="/ai-design-os"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              AI Design Operating System
            </a>
            .
          </p>
        </div>
      </CaseStudySection>

      {/* What I Learned */}
      <CaseStudySection label="What I Learned" className="pb-32">
        <p className="text-lg text-muted-foreground mb-10">
          The hardest design challenge on this project wasn't teaching AI to analyze a golf swing.
          It was designing trust at three levels simultaneously: the paying customer trusting an AI
          with their technique, 1,800 existing students trusting that this new product honored the
          relationship they already had with David, and David trusting that his methodology —
          his competitive advantage — wasn't being commoditized into a generic chatbot.
          Getting all three right required product decisions, not just engineering ones.
        </p>
        <PullQuote
          quote="The AI wasn't the product. David's methodology was the product. The AI was the delivery system we built so one instructor could coach thousands."
          author="Miguel Espinosa"
          role="Co-founder & Head of Product Design, The Birdie Club"
        />
      </CaseStudySection>
    </main>
  );
};

export default BirdieClubCase;

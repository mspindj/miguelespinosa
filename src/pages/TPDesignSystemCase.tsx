import { motion, type Easing } from "framer-motion";
import BackToHome from "@/components/case-study/BackToHome";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import flamingoImage from "@/assets/flamingo.jpeg";
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

const TPDesignSystemCase = () => {
  const problems = [
    "UX quality depended entirely on local context — not on shared standards.",
    "Patterns diverged across products with every sprint.",
    "Delivery slowed as teams negotiated decisions that should have already been made.",
    "Design was perceived as an execution phase, not a strategic input.",
  ];

  const challenges = [
    { label: "01", text: "Global scale with strong local autonomy — alignment couldn't be imposed." },
    { label: "02", text: "Products at very different lifecycle stages (Angular, React, Vue)." },
    { label: "03", text: "Uneven design maturity across teams and business units." },
    { label: "04", text: "No shared governance model — every team invented their own." },
  ];

  const paths = [
    {
      option: "Option A",
      title: "Local design systems",
      description: "Each product team owns their own system. Fast to start, impossible to align.",
      chosen: false,
    },
    {
      option: "Option B",
      title: "Centralized UI library",
      description: "One team owns all components. High consistency, low adoption. Creates dependency, not capability.",
      chosen: false,
    },
    {
      option: "Option C",
      title: "Design system as product",
      description: "Embedded in teams, governed federally. Built by contributors, not guardians.",
      chosen: true,
    },
  ];

  const deliverables = [
    {
      title: "Shared design language",
      description: "Tokens, patterns, and principles applied across TP Optymize (Angular), TPPS Studio (React), TPPS Sidebar (React), and myForms viewer (Vue.js).",
    },
    {
      title: "Reusable component library",
      description: "Multi-framework implementation (React, Vue, Angular) — built for real product contexts, not abstract use cases.",
    },
    {
      title: "Federation governance model",
      description: "Contribution model that gave teams ownership without fragmenting the system. Autonomy with alignment.",
    },
    {
      title: "Design embedded in delivery",
      description: "The system lived inside product squads — not maintained by a separate design ops function from outside.",
    },
    {
      title: "Documentation and enablement",
      description: "Decision rationale documented alongside components, so teams could extend the system with confidence.",
    },
  ];

  const metrics = [
    { direction: "down" as const, value: "40%", label: "Design-to-development handoff time" },
    { direction: "down" as const, value: "70%", label: "Duplicated component creation" },
    { direction: "down" as const, value: "25%", label: "UI-related bugs reported" },
    { direction: "up" as const, value: "80%", label: "Team adoption within 6 months" },
    { direction: "up" as const, value: "90%", label: "UI consistency across products" },
  ];

  return (
    <main className="bg-background text-foreground">
      <BackToHome />

      <CaseStudyHero
        number="01"
        year="2023 — 2025"
        title="TP Design System"
        subtitle="Scaling Design by Scaling Decisions"
      />

      {/* Hero image */}
      <div className="container mx-auto px-6 py-12">
        <div className="rounded-2xl overflow-hidden">
          <img
            src={flamingoImage}
            alt="TP Design System"
            className="w-full aspect-[21/9] object-cover"
          />
        </div>
      </div>

      {/* Vision */}
      <CaseStudySection label="The Vision">
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          We envisioned a future where design at scale wouldn't depend on individuals,
          but on shared decisions, shared language, and shared responsibility.
          The TP Design System was created to make design decisions reusable, discussable,
          and scalable across a global organization.
        </p>
      </CaseStudySection>

      {/* Context */}
      <CaseStudySection label="The Context">
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          Teleperformance operates dozens of internal platforms and client-facing products
          across regions, business units, and maturity levels.
          Design work existed everywhere. Design alignment did not.
        </p>
      </CaseStudySection>

      {/* The Real Problem */}
      <CaseStudySection label="The Real Problem">
        <p className="text-lg text-foreground mb-8">
          The issue wasn't visual inconsistency. It was <em>decision fragmentation at scale</em>.
        </p>
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {problems.map((problem, index) => (
            <motion.li
              key={index}
              variants={bulletVariants}
              className="flex items-start gap-4"
            >
              <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
              <span className="text-lg text-muted-foreground">{problem}</span>
            </motion.li>
          ))}
        </motion.ul>
      </CaseStudySection>

      {/* Strategic Challenge */}
      <CaseStudySection label="Why It Was Hard">
        <p className="text-lg text-foreground mb-10">
          This was an organizational challenge, not a tooling one.
        </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              variants={bulletVariants}
              className="glass-card p-6 rounded-xl border border-border"
            >
              <span className="text-xs font-mono text-primary mb-2 block">{challenge.label}</span>
              <p className="text-foreground">{challenge.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </CaseStudySection>

      {/* Paths Explored */}
      <CaseStudySection label="The Paths We Explored">
        <p className="text-lg text-muted-foreground mb-10">
          We didn't jump to a solution. We mapped the options and stress-tested each one
          against TP's operational reality.
        </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {paths.map((path, index) => (
            <motion.div
              key={index}
              variants={bulletVariants}
              className={`p-6 rounded-xl border ${
                path.chosen
                  ? "border-primary/40 bg-primary/5"
                  : "border-border bg-card/30 opacity-60"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-primary">{path.option}</span>
                {path.chosen && (
                  <span className="text-xs font-mono text-primary bg-primary/20 px-2 py-0.5 rounded-full">
                    Chosen
                  </span>
                )}
              </div>
              <h4 className="text-foreground font-semibold mb-2">{path.title}</h4>
              <p className="text-muted-foreground text-sm">{path.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </CaseStudySection>

      {/* The Decision */}
      <CaseStudySection label="The Decision">
        <div className="glass-card p-8 lg:p-12 rounded-2xl border border-primary/20">
          <p className="text-xl lg:text-2xl text-foreground leading-relaxed">
            We deliberately positioned the TP Design System not as a{" "}
            <span className="text-muted-foreground line-through">component library</span>,
            but as <span className="text-primary font-semibold">design infrastructure</span>.
            A system designed to align teams, enable autonomy, and scale decisions —
            not to centralize control.
          </p>
        </div>
      </CaseStudySection>

      {/* What We Built */}
      <CaseStudySection label="What We Built">
        <p className="text-lg text-muted-foreground mb-10">
          The system was built inside product teams, not alongside them.
          That distinction changed everything about adoption.
        </p>
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

      {/* Impact */}
      <CaseStudySection label="The Impact">
        <MetricGrid metrics={metrics} />
      </CaseStudySection>

      {/* Leadership Reflection */}
      <CaseStudySection label="Leadership Reflection" className="pb-32">
        <p className="text-lg text-muted-foreground mb-10">
          My role was to create the conditions for the system to exist and scale —
          through vision, stakeholder alignment, and a governance model that gave
          teams ownership without fragmenting the system.
          The real outcome wasn't consistency. It was <strong className="text-foreground">autonomy with alignment</strong>.
        </p>
        <PullQuote
          quote="Scaling design is not about standardizing creativity. It's about standardizing how teams make decisions together."
          author="Miguel Espinosa"
          role="Senior Director of Product Design"
        />
      </CaseStudySection>
    </main>
  );
};

export default TPDesignSystemCase;

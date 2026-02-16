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
    "UX quality depended entirely on local context.",
    "Patterns diverged across products.",
    "Delivery slowed due to misalignment.",
    "Design was perceived merely as an execution phase.",
  ];

  const challenges = [
    "Global scale with strong local autonomy.",
    "Products at very different lifecycle stages.",
    "Uneven design maturity across teams.",
    "Lack of a shared governance model.",
  ];

  const deliverables = [
    "A shared design language across products.",
    "Reusable patterns grounded in real use cases.",
    "Governance and contribution models.",
    "Design embedded in product delivery.",
    "Documentation and enablement.",
  ];

  const metrics = [
    { direction: "down" as const, value: "40%", label: "Design-to-development handoff time" },
    { direction: "down" as const, value: "70%", label: "Duplicated component creation" },
    { direction: "down" as const, value: "25%", label: "UI-related bugs" },
    { direction: "up" as const, value: "80%", label: "Team adoption in 6 months" },
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
            alt="TP Design System — Flamingo"
            className="w-full aspect-[21/9] object-cover"
          />
        </div>
      </div>

      {/* Vision */}
      <CaseStudySection label="The Vision">
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          We envisioned a future where design at scale wouldn't depend on individuals, 
          but on shared decisions, shared language, and shared responsibility. The TP Design System 
          was created to make design decisions reusable, discussable, and scalable 
          across a global organization.
        </p>
      </CaseStudySection>

      {/* Context */}
      <CaseStudySection label="The Context">
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          Teleperformance (TP) operates dozens of internal platforms and client-facing 
          products across regions, business units, and maturity levels. While design 
          work existed everywhere, design alignment did not.
        </p>
      </CaseStudySection>

      {/* The Real Problem */}
      <CaseStudySection label="The Real Problem">
        <p className="text-lg text-foreground mb-8">
          The issue wasn't just visual inconsistency; it was decision fragmentation at scale.
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
      <CaseStudySection label="The Strategic Challenge">
        <p className="text-lg text-foreground mb-10">
          This was an organizational challenge, not a tooling one. It was difficult because of:
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
              <span className="text-xs font-mono text-primary mb-2 block">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-foreground">{challenge}</p>
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
            It was a system designed to align teams, enable autonomy, and scale decisions.
          </p>
        </div>
      </CaseStudySection>

      {/* What We Built */}
      <CaseStudySection label="What We Built">
        <p className="text-lg text-muted-foreground mb-10">
          The TP Design System was built inside product teams, not alongside them:
        </p>
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {deliverables.map((item, index) => (
            <motion.li
              key={index}
              variants={bulletVariants}
              className="flex items-center gap-4"
            >
              <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-3 h-3 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-lg text-foreground">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </CaseStudySection>

      {/* Impact */}
      <CaseStudySection label="The Impact">
        <MetricGrid metrics={metrics} />
      </CaseStudySection>

      {/* Leadership Reflection */}
      <CaseStudySection label="Leadership Reflection" className="pb-32">
        <p className="text-lg text-muted-foreground mb-10">
          While execution was owned by the teams, my responsibility was to ensure 
          the TP Design System could exist and scale through vision, stakeholder alignment, and governance.
        </p>
        <PullQuote
          quote="Scaling design is not about standardizing creativity. It's about standardizing how teams make decisions together. Trust enables scale."
          author="Miguel Espinosa"
          role="Senior Design Director"
        />
      </CaseStudySection>
    </main>
  );
};

export default TPDesignSystemCase;

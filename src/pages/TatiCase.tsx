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

const TatiCase = () => {
  const problems = [
    "Sensitive domains (legal, NGOs, human rights) require extreme precision.",
    "Errors have significant legal and reputational impact.",
    "Generic AI lacks domain awareness and terminology control.",
    "Users need predictability over experimentation.",
  ];

  const constraints = [
    { title: "Accuracy", description: "High expectations for specific domain-specific terminology." },
    { title: "Complexity", description: "Document-level processing requires asynchronous workflows." },
    { title: "Predictability", description: "Costs and margins must be transparent and auditable." },
    { title: "UX Challenge", description: "Asynchronous processing introduces uncertainty that must be reduced through design." },
  ];

  const deliverables = [
    { title: "Glossary-Driven Logic", description: "Ensuring translation quality aligns with expert standards." },
    { title: "Async Workflow", description: "A robust upload-based system with clear status tracking to manage user expectations." },
    { title: "Simplified Pricing", description: "Predictable per-document costs to ensure scalability." },
    { title: "Auditability", description: "Access to history and downloads for full accountability." },
  ];

  const metrics = [
    { direction: "up" as const, value: "MVP", label: "Functional MVP shipped successfully" },
    { direction: "down" as const, value: "Low", label: "Variable costs per document" },
    { direction: "up" as const, value: "100%", label: "Quality standards met" },
    { direction: "up" as const, value: "Trust", label: "Core product feature for scaling" },
  ];

  return (
    <main className="bg-background text-foreground">
      <BackToHome />

      <CaseStudyHero
        number="03"
        year="2024 — 2025"
        title="Tati AI"
        subtitle="AI Translation Designed for Trust"
      />

      {/* Vision */}
      <CaseStudySection label="The Vision">
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          We envisioned a future where AI-powered translation would not optimize for speed 
          or volume, but for <span className="text-primary font-semibold">trust, accuracy, and responsibility</span>. 
          Tati was designed to amplify human expertise, not replace it.
        </p>
      </CaseStudySection>

      {/* Context */}
      <CaseStudySection label="The Context">
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          Professional translation workflows are traditionally slow, expensive, and highly 
          dependent on expert knowledge. While generic AI tools exist, they often prioritize 
          speed at the cost of accuracy, tone, and accountability.
        </p>
      </CaseStudySection>

      {/* The Real Problem */}
      <CaseStudySection label="The Real Problem">
        <p className="text-lg text-foreground mb-8">
          The challenge wasn't just translating text; it was creating confidence in AI-generated output.
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

      {/* Constraints */}
      <CaseStudySection label="Why This Was Hard">
        <p className="text-lg text-foreground mb-10">
          Constraints defined the product:
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
              <span className="text-xs font-mono text-primary mb-2 block">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h4 className="text-foreground font-semibold mb-2">{constraint.title}</h4>
              <p className="text-muted-foreground text-sm">{constraint.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </CaseStudySection>

      {/* The Decision */}
      <CaseStudySection label="The Strategic Decision">
        <div className="glass-card p-8 lg:p-12 rounded-2xl border border-primary/20">
          <p className="text-xl lg:text-2xl text-foreground leading-relaxed mb-6">
            We avoided the <span className="text-muted-foreground line-through">"AI spectacle" of real-time chat</span>.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Instead, we designed Tati as a <span className="text-primary font-semibold">document-first, asynchronous service</span> powered 
            by AI but guided by expert-curated glossaries. We prioritized clarity and 
            traceability over speed.
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
            <motion.li
              key={index}
              variants={bulletVariants}
              className="flex items-center gap-4 list-none"
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
              <div>
                <span className="text-foreground font-semibold">{item.title}:</span>{" "}
                <span className="text-muted-foreground">{item.description}</span>
              </div>
            </motion.li>
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
          AI product design is less about the "intelligence" of the model and more 
          about the responsibility and trust of the interface.
        </p>
        <PullQuote
          quote="Good AI products don't just impress users—they reassure them."
          author="Miguel Espinosa"
          role="Senior Design Director"
        />
      </CaseStudySection>
    </main>
  );
};

export default TatiCase;

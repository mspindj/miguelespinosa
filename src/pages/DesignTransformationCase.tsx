import { motion, type Easing } from "framer-motion";
import BackToHome from "@/components/case-study/BackToHome";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudySection from "@/components/case-study/CaseStudySection";
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

const DesignTransformationCase = () => {
  const problems = [
    {
      title: "UX without standards",
      description: "Experience quality varied dramatically across products and regions — with no shared baseline.",
    },
    {
      title: "Research without credibility",
      description: "Insights existed but were questioned or ignored. Research had no organizational home.",
    },
    {
      title: "Design as execution",
      description: "Teams treated design as 'making screens'. Discovery was skipped. Speed trumped understanding.",
    },
    {
      title: "Invisible strategic value",
      description: "The impact of design on business outcomes wasn't being measured, framed, or communicated.",
    },
  ];

  const whyHard = [
    { label: "01", text: "Global organization with strong local execution culture — alignment couldn't be mandated." },
    { label: "02", text: "Design maturity was uneven across teams, regions, and business units." },
    { label: "03", text: "Skepticism toward research — data-informed decisions were not the default." },
    { label: "04", text: "TP is an operations company first. Speed and efficiency are structural values." },
  ];

  const shifts = [
    { from: "Execution", to: "Capability", description: "From deliverables to organizational infrastructure." },
    { from: "Isolated", to: "Embedded", description: "From a separate design team to design inside every squad." },
    { from: "Output", to: "Outcome", description: "From shipping features to shaping business results." },
  ];

  const pillars = [
    {
      label: "People",
      description: "Redesigned the global design org. Standardized roles, career paths, and mentorship. Built the extended design community across 6 practices.",
    },
    {
      label: "Process",
      description: "Introduced discovery-first workflows. Integrated design into the Agile/product lifecycle from problem framing to delivery — not just after specs.",
    },
    {
      label: "Systems",
      description: "Built the TP Design System (Flamingo) as shared infrastructure. Centralized Figma libraries, research repositories, and documentation.",
    },
    {
      label: "Culture",
      description: "Launched Design S-Cool: a 6-module design thinking program for ALL TP employees — not just designers. Design became a shared organizational language.",
    },
  ];

  const enablers = [
    {
      title: "TP Design System",
      description: "Shared component library and design language across all internal products (TP Optymize, TPPS Studio, myForms viewer).",
    },
    {
      title: "Design S-Cool",
      description: "6-module design thinking learning path opened to all TP employees — building design literacy across the organization.",
    },
    {
      title: "Design Hub",
      description: "Centralized knowledge platform (SharePoint) for shared process, templates, research, and documentation.",
    },
    {
      title: "Design as a Service",
      description: "Structured offering of UX, visual, service design, and research capabilities available to internal business units.",
    },
    {
      title: "Research Archetypes",
      description: "Digital user archetypes defined across territorial, cultural, age, and technological variables — giving teams a shared model of who they're designing for.",
    },
  ];

  const impacts = [
    {
      metric: "Limited → Structured",
      label: "UX Maturity (NNGroup model)",
      description: "Assessed using the Nielsen Norman Group maturity framework — moved from reactive execution to structured practice.",
    },
    {
      metric: "30+",
      label: "Extended design community",
      description: "Designers embedded across squads: Trust & Safety, Employee Platforms, Security & Ops, Chat/CRM/Omnichannel.",
    },
    {
      metric: "Earlier",
      label: "Design involvement in product lifecycle",
      description: "Discovery became the default — design enters at problem framing, not at spec handoff.",
    },
    {
      metric: "Stronger",
      label: "Stakeholder alignment on research",
      description: "Research confidence increased significantly as archetypes and shared process gave teams a common decision framework.",
    },
  ];

  return (
    <main className="bg-background text-foreground">
      <BackToHome />

      <CaseStudyHero
        number="02"
        year="2022 — 2025"
        title="Design Transformation"
        subtitle="Building Design as an Organizational Capability"
      />

      {/* Vision */}
      <CaseStudySection label="The Vision">
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          The goal was to reposition design — not as a service layer, a phase in a process,
          or a specialized role — but as a <strong className="text-foreground">shared organizational capability</strong>.
          A function embedded into how Teleperformance thinks, decides, and ships.
        </p>
      </CaseStudySection>

      {/* Context */}
      <CaseStudySection label="The Context">
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          Design existed across teams, but with dramatically different levels of maturity,
          visibility, and impact. There was talent everywhere.
          What was missing was the infrastructure to make that talent work together —
          and the organizational language to make design legible to the business.
        </p>
      </CaseStudySection>

      {/* The Real Problem */}
      <CaseStudySection label="The Real Problem">
        <p className="text-lg text-foreground mb-10">
          The bottleneck wasn't a lack of designers. It was a lack of organizational infrastructure.
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
      <CaseStudySection label="Why It Was Hard">
        <p className="text-lg text-foreground mb-10">
          Transformation at a global operations company isn't a design problem.
          It's a change management problem with design at the center.
        </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {whyHard.map((item, index) => (
            <motion.div
              key={index}
              variants={bulletVariants}
              className="glass-card p-6 rounded-xl border border-border"
            >
              <span className="text-xs font-mono text-primary mb-2 block">{item.label}</span>
              <p className="text-foreground">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </CaseStudySection>

      {/* Strategic Shift */}
      <CaseStudySection label="The Strategic Shift">
        <p className="text-lg text-foreground mb-10">
          Three fundamental transitions defined the transformation:
        </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {shifts.map((shift, index) => (
            <motion.div
              key={index}
              variants={bulletVariants}
              className="flex items-center gap-6 p-6 rounded-xl bg-card/50 border border-border"
            >
              <div className="flex items-center gap-3 min-w-[200px]">
                <span className="text-muted-foreground font-mono text-sm line-through">{shift.from}</span>
                <span className="text-primary text-sm">→</span>
                <span className="text-primary font-semibold">{shift.to}</span>
              </div>
              <p className="text-muted-foreground text-sm">{shift.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </CaseStudySection>

      {/* The Four Pillars */}
      <CaseStudySection label="The Four Pillars">
        <p className="text-lg text-muted-foreground mb-10">
          Transformation was structured around four interdependent dimensions:
        </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={bulletVariants}
              className="glass-card p-8 rounded-2xl border border-primary/20"
            >
              <span className="text-xs font-mono text-primary mb-3 block uppercase tracking-widest">
                {pillar.label}
              </span>
              <p className="text-muted-foreground">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </CaseStudySection>

      {/* Key Enablers */}
      <CaseStudySection label="Key Enablers">
        <p className="text-lg text-muted-foreground mb-10">
          The transformation ran on five purpose-built programs and platforms:
        </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {enablers.map((item, index) => (
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              variants={bulletVariants}
              className="glass-card p-6 rounded-xl border border-primary/20"
            >
              <div className="mb-3">
                <span className="text-2xl font-black text-primary">{impact.metric}</span>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mt-1">
                  {impact.label}
                </p>
              </div>
              <p className="text-muted-foreground text-sm">{impact.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </CaseStudySection>

      {/* Leadership Reflection */}
      <CaseStudySection label="Leadership Reflection" className="pb-32">
        <p className="text-lg text-muted-foreground mb-10">
          My role throughout was not to design the transformation —
          it was to design the conditions for it to happen.
          That meant vision setting, stakeholder alignment, building the operating model,
          and then getting out of the way so teams could own it.
          Transformation isn't something you deliver. It's something you enable.
        </p>
        <PullQuote
          quote="Design doesn't scale when you hire more designers. It scales when the organization learns to think like one."
          author="Miguel Espinosa"
          role="Senior Director of Product Design"
        />
      </CaseStudySection>
    </main>
  );
};

export default DesignTransformationCase;

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
    { title: "Siloed Execution", description: "Design teams worked in isolation, leading to redundant efforts." },
    { title: "Maturity Gaps", description: "Varying levels of design understanding across stakeholders." },
    { title: "Invisible Value", description: "The impact of design on operational efficiency wasn't being measured or communicated effectively." },
    { title: "Tactical Perception", description: "Design was viewed as 'the department that makes things look good' rather than a strategic partner." },
  ];

  const pillars = [
    { title: "People", description: "Standardizing roles, career paths, and mentorship." },
    { title: "Process", description: "Integrating design into the Agile/Product lifecycle from discovery to delivery." },
    { title: "Governance", description: "Establishing DesignOps to manage tools, research repositories, and quality standards." },
  ];

  const deliverables = [
    { title: "Global Design Org", description: "A unified structure that balanced central governance with local product autonomy." },
    { title: "DesignOps Framework", description: "Implementing standardized workflows to reduce friction and improve speed-to-market." },
    { title: "Research Governance", description: "Scaling user insights through a centralized repository, ensuring product decisions were data-informed." },
    { title: "Culture of Accountability", description: "Setting clear KPIs for design teams aligned with business outcomes." },
  ];

  const impacts = [
    { title: "Structured Design Teams", description: "Successfully scaled multidisciplinary teams across regions." },
    { title: "Standardized Workflows", description: "Reduced operational friction between Design, Product, and Engineering." },
    { title: "Executive Buy-in", description: "Elevated design representation in strategic product roadmaps." },
    { title: "Operational Efficiency", description: "Drastic reduction in design rework through clear governance and shared standards." },
  ];

  return (
    <main className="bg-background text-foreground">
      <BackToHome />

      <CaseStudyHero
        number="02"
        year="2022 — 2024"
        title="Design Transformation"
        subtitle="Scaling Design through Organization"
      />

      {/* Vision */}
      <CaseStudySection label="The Vision">
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          We aimed to move design from a service-oriented execution layer to a strategic 
          core function. The goal was to build a high-performance design organization 
          capable of driving business value across a global enterprise.
        </p>
      </CaseStudySection>

      {/* Context */}
      <CaseStudySection label="The Context: Teleperformance">
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          As a global leader in customer experience, TP faced the challenge of digitizing 
          its vast operational landscape. Design was distributed, siloed, and often 
          integrated too late in the product lifecycle to make a meaningful impact on strategy.
        </p>
      </CaseStudySection>

      {/* The Real Problem */}
      <CaseStudySection label="The Real Problem">
        <p className="text-lg text-foreground mb-10">
          The bottleneck wasn't a lack of talent; it was a lack of organizational infrastructure.
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

      {/* Strategic Shift */}
      <CaseStudySection label="The Strategic Shift">
        <p className="text-lg text-foreground mb-10">
          We transitioned from managing "designers" to managing design as a capability. 
          This required a focus on:
        </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={bulletVariants}
              className="glass-card p-8 rounded-2xl border border-primary/20 text-center"
            >
              <span className="inline-block w-12 h-12 rounded-full bg-primary/20 text-primary font-bold text-lg mb-4 leading-[3rem]">
                {index + 1}
              </span>
              <h4 className="text-xl font-semibold text-foreground mb-3">{pillar.title}</h4>
              <p className="text-muted-foreground text-sm">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </CaseStudySection>

      {/* What We Built */}
      <CaseStudySection label="What We Built">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              variants={bulletVariants}
              className="flex items-start gap-6 p-6 rounded-xl bg-card/50 border border-border"
            >
              <span className="text-xs font-mono text-primary mt-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h4 className="text-foreground font-semibold mb-1">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
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
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-primary"
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
                <h4 className="text-foreground font-semibold">{impact.title}</h4>
              </div>
              <p className="text-muted-foreground text-sm pl-11">{impact.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </CaseStudySection>

      {/* Leadership Reflection */}
      <CaseStudySection label="Leadership Reflection" className="pb-32">
        <p className="text-lg text-muted-foreground mb-10">
          True transformation is an exercise in Operationalized Empathy. It requires 
          understanding the business's constraints as deeply as the user's needs.
        </p>
        <PullQuote
          quote="Scaling a design organization is not about hiring more designers. It's about designing the environment where those designers can create the most value for the business."
          author="Miguel Espinosa"
          role="Senior Design Director"
        />
      </CaseStudySection>
    </main>
  );
};

export default DesignTransformationCase;

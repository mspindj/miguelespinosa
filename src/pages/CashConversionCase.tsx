import { motion, type Easing } from "framer-motion";
import { Award } from "lucide-react";
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

const CashConversionCase = () => {
  const problems = [
    { title: "Technical Barriers", description: "Users were forced to navigate complex banking jargon." },
    { title: "High-Stakes Anxiety", description: "Fear of making mistakes during high-value transfers." },
    { title: "Fragmented Experience", description: "A disconnect between the mobile app and the user's daily financial reality." },
  ];

  const deliverables = [
    { title: "Streamlined Transfer Flows", description: "Reducing the steps required to move money by 40%." },
    { title: "Trust Indicators", description: "Real-time validation and clear feedback loops to reassure users during the process." },
    { title: "Human-Centric Language", description: "Replacing technical banking terms with clear, actionable copy." },
    { title: "Predictive Shortcuts", description: "Using AI to anticipate frequent transactions, making the 'repeat' action effortless." },
  ];

  const impacts = [
    { icon: Award, title: "Award-Winning UX", description: "Recognized as the 'Best Mobile Bank in Colombia' (2019)." },
    { title: "Increased Adoption", description: "Significant growth in digital transaction volume among previously hesitant segments." },
    { title: "Reduced Support Costs", description: "Lower volume of inquiries related to 'how to' transfer or fix transfer errors." },
    { title: "Market Leadership", description: "Established BBVA as a benchmark for digital transformation in the region." },
  ];

  return (
    <main className="bg-background text-foreground">
      <BackToHome />

      <CaseStudyHero
        number="04"
        year="2018 — 2020"
        title="Cash Conversion"
        subtitle="Redefining Mental Models in Fintech"
      />

      {/* Vision */}
      <CaseStudySection label="The Vision">
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          We envisioned a banking experience where moving money wasn't a technical chore, 
          but a seamless human interaction. The goal was to transform complex financial 
          operations into intuitive, friction-less experiences that align with how people 
          actually think about their money.
        </p>
      </CaseStudySection>

      {/* Context */}
      <CaseStudySection label="The Context: BBVA Colombia">
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          In the competitive landscape of digital banking in Colombia, speed and trust 
          are the primary currencies. Traditional banking flows were often burdened by 
          legacy mental models—focusing on account numbers, routing codes, and technical 
          barriers rather than the user's intent.
        </p>
      </CaseStudySection>

      {/* The Real Problem */}
      <CaseStudySection label="The Real Problem">
        <p className="text-lg text-foreground mb-10">
          The friction wasn't just in the number of clicks; it was in the cognitive load.
        </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={bulletVariants}
              className="flex items-start gap-4 p-5 rounded-xl bg-card/50 border border-destructive/20"
            >
              <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
              <div>
                <h4 className="text-foreground font-semibold mb-1">{problem.title}</h4>
                <p className="text-muted-foreground text-sm">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </CaseStudySection>

      {/* The Decision */}
      <CaseStudySection label="The Strategic Decision">
        <div className="glass-card p-8 lg:p-12 rounded-2xl border border-primary/20 mb-8">
          <p className="text-lg text-muted-foreground mb-6">
            I invoked <span className="text-primary font-semibold">Jakob's Law</span> to leverage 
            existing mental models while simplifying the path to completion.
          </p>
          <p className="text-xl lg:text-2xl text-foreground leading-relaxed">
            We made a deliberate choice to prioritize{" "}
            <span className="text-primary font-semibold">Clarity over "Innovation Tax"</span>. 
            Instead of reinventing the wheel, we optimized the "physics" of the transaction 
            to reduce hesitation and errors.
          </p>
        </div>
        <div className="p-6 rounded-xl bg-secondary/50 border border-border">
          <p className="text-sm text-muted-foreground italic">
            <span className="text-foreground font-medium">Jakob's Law:</span> Users spend most of their 
            time on other sites. This means that users prefer your site to work the same way as all the 
            other sites they already know.
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
              className={`glass-card p-6 rounded-xl border ${
                impact.icon ? "border-primary/40 bg-primary/5" : "border-border"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                {impact.icon ? (
                  <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <impact.icon className="w-5 h-5 text-primary" />
                  </span>
                ) : (
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
                )}
                <h4 className="text-foreground font-semibold">{impact.title}</h4>
              </div>
              <p className="text-muted-foreground text-sm pl-11 lg:pl-13">{impact.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </CaseStudySection>

      {/* Leadership Reflection */}
      <CaseStudySection label="Leadership Reflection" className="pb-32">
        <p className="text-lg text-muted-foreground mb-10">
          In Fintech, every pixel has a price. You don't win by adding features; you win 
          by removing the distance between a user's intent and the result.
        </p>
        <PullQuote
          quote="Strategic simplification is about aligning business complexity with the user's mental model. Our job is to carry the complexity so the user doesn't have to."
          author="Miguel Espinosa"
          role="Senior Design Director"
        />
      </CaseStudySection>
    </main>
  );
};

export default CashConversionCase;

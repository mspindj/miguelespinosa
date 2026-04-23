import { motion, type Easing } from "framer-motion";
import { Award } from "lucide-react";
import BackToHome from "@/components/case-study/BackToHome";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import MetricGrid from "@/components/case-study/MetricGrid";
import PullQuote from "@/components/case-study/PullQuote";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as Easing },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const problems = [
  {
    title: "Design as a service layer",
    description:
      "Each product team operated independently. No shared principles, no shared language. Design was called in at the end to make things look good.",
  },
  {
    title: "Fragmented digital portfolio",
    description:
      "Mobile app, transfers, FX, investments, and public website — all built in silos. The user experienced five different mental models inside one bank.",
  },
  {
    title: "Low digital trust",
    description:
      "Users avoided the app for critical transactions. Moving money felt risky. Opening an investment account required a branch visit.",
  },
  {
    title: "No design culture",
    description:
      "Design decisions were made by whoever was in the room. There was no framework for quality, consistency, or long-term coherence.",
  },
];

const products = [
  {
    number: "01",
    name: "Transfers",
    challenge:
      "760,000+ operations per month — the most critical flow in the app. Users experienced high cognitive load, unclear feedback, and anxiety around high-value transactions.",
    decision:
      "Redesigned the full mental model of 'sending money': simplified the step structure, introduced real-time validation, and replaced banking jargon with intent-based language.",
    result: "−23% transaction time (2:03 → 1:35 min) · Emotional satisfaction +11 pts · Validated with 135 users",
  },
  {
    number: "02",
    name: "FX Banca Móvil",
    challenge:
      "International money transfers required a physical branch visit — a process that took hours and involved paperwork and hidden fees.",
    decision:
      "Designed a mobile-first FX experience built on three principles: instructive (guided at every step), simple (no additional documents, no hidden fees), and self-sufficient (users manage operations autonomously).",
    result: "Multi-hour office process → minutes from mobile. 100% document-free. Full fee transparency.",
  },
  {
    number: "03",
    name: "Investment Fund",
    challenge:
      "Customers couldn't open an investment fund from BBVA Mobile. The opportunity: millions of customers who wanted to invest but didn't know how or where to start.",
    decision:
      "Designed a 100% digital onboarding experience built around three user insights: simplicity (invest with one tap), expert support nearby, and financial planning for the future.",
    result: "80% of all investment fund contracts are now completed through the mobile channel.",
  },
  {
    number: "04",
    name: "App / Tienda de Pagos",
    challenge:
      "Active users averaged one transaction per month. The app was functional but not emotionally engaging — users didn't return unless they had to.",
    decision:
      "Redesigned payments around the formula: Trustworthy + Emotion = Recurrence. Built a narrative layer — storytelling and familiarity — to transform payments from a chore into a habit.",
    result: "Increased transaction recurrence among active users. Grew digital payment operations.",
  },
  {
    number: "05",
    name: "Public Website",
    challenge:
      "The website didn't reflect the real product offering. Information was outdated, structured around internal categories rather than user goals.",
    decision:
      "Rebuilt the information architecture from scratch — user research informed a new goal-based navigation. Aligned content to the current product reality across all segments.",
    result: "Information aligned to real product offering. Improved discoverability across LATAM and Colombia audience.",
  },
];

const metrics = [
  { direction: "down" as const, value: "23%", label: "Transfer time reduced" },
  { direction: "up" as const, value: "80%", label: "Investment fund contracts via mobile" },
  { direction: "up" as const, value: "760K+", label: "Monthly transfer operations" },
  { direction: "up" as const, value: "125+", label: "Design Ambassadors trained" },
  { direction: "up" as const, value: "#1", label: "Mobile Bank in Colombia — 2019" },
  { direction: "up" as const, value: "2×", label: "Accenture Innovation Awards" },
];

const BBVACaseStudy = () => {
  return (
    <main className="bg-background text-foreground">
      <BackToHome />

      <CaseStudyHero
        number="04"
        year="2016 — 2019"
        title="BBVA Colombia"
        subtitle="Building Colombia's #1 Mobile Bank"
      />

      {/* Role context */}
      <CaseStudySection label="The Role">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            { label: "Company", value: "BBVA Colombia S.A." },
            { label: "Title", value: "UX & Design Manager" },
            { label: "Scope", value: "Full digital portfolio — mobile, web, investments, FX" },
          ].map((item) => (
            <div key={item.label} className="border-t border-white/10 pt-4">
              <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">{item.label}</p>
              <p className="text-foreground font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* Vision */}
      <CaseStudySection label="The Vision">
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          I joined BBVA Colombia as the highest-ranking design leader — the first time the bank had a
          dedicated Design Authority at the country level. The mandate wasn't to redesign one product.
          It was to transform how design worked inside a major financial institution: from invisible
          execution layer to strategic decision-making function.
        </p>
      </CaseStudySection>

      {/* The Real Problem */}
      <CaseStudySection label="The Real Problem">
        <p className="text-lg text-foreground mb-10">
          The product problems were symptoms. The root cause was structural.
        </p>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex items-start gap-4 p-5 rounded-xl bg-card/50 border border-white/10"
            >
              <span className="text-xs font-mono text-primary mt-1 flex-shrink-0">0{i + 1}</span>
              <div>
                <h4 className="text-foreground font-semibold mb-1">{problem.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </CaseStudySection>

      {/* The Strategic Decision */}
      <CaseStudySection label="The Strategic Decision">
        <div className="glass-card p-8 lg:p-12 rounded-2xl border border-primary/20">
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-6">The framework</p>
          <p className="text-xl lg:text-2xl text-foreground leading-relaxed">
            Build design authority{" "}
            <span className="text-primary font-semibold">in parallel</span> — not sequentially.
            Ship products and build culture at the same time. Don't wait for the organization to be ready.
            Create the conditions while delivering the work.
          </p>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            This meant defining shared design principles, establishing research governance, building
            the Design Ambassadors Program, and redesigning critical products — all simultaneously,
            across a 3.5-year tenure.
          </p>
        </div>
      </CaseStudySection>

      <PullQuote
        quote="You don't fix a fragmented product portfolio with better UI. You fix it by building a shared language for decisions."
        author="Miguel Espinosa"
        role="UX & Design Manager, BBVA Colombia"
      />

      {/* The Work */}
      <CaseStudySection label="The Work — 5 Products, One Portfolio">
        <div className="space-y-0 divide-y divide-white/10">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="grid grid-cols-1 lg:grid-cols-[4rem_1fr_1fr] gap-6 lg:gap-10 py-10"
            >
              {/* Number */}
              <div className="flex lg:flex-col gap-3 items-start">
                <span className="text-xs font-mono text-primary">{product.number}</span>
                <span className="text-sm font-semibold text-foreground lg:hidden">{product.name}</span>
              </div>

              {/* Challenge + Decision */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 hidden lg:block">
                  {product.name}
                </h3>
                <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-widest mb-2">
                  Challenge
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {product.challenge}
                </p>
                <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-widest mb-2">
                  Decision
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.decision}
                </p>
              </div>

              {/* Result */}
              <div className="lg:border-l lg:border-white/10 lg:pl-10">
                <p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">
                  Result
                </p>
                <p className="text-foreground/90 text-sm leading-relaxed font-medium">
                  {product.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </CaseStudySection>

      {/* Design Ambassadors */}
      <CaseStudySection label="Building the Culture">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Design Ambassadors Program
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Products improve at the speed of the organization's design maturity.
              To scale impact beyond my team, I founded the Design Ambassadors Program —
              training non-designers across the bank to apply user-centered thinking in their
              daily decisions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The program created a distributed network of design advocates inside engineering,
              product, marketing, and operations — ensuring design principles outlasted any single project.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "125+", label: "Ambassadors trained" },
              { value: "5+", label: "Departments reached" },
              { value: "3.5", label: "Years of sustained culture change" },
              { value: "1st", label: "Design Authority in BBVA Colombia history" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-card p-5 rounded-xl text-center border border-white/10"
              >
                <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CaseStudySection>

      {/* Metrics */}
      <CaseStudySection label="The Impact">
        <MetricGrid metrics={metrics} />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 glass-card p-8 rounded-2xl border border-primary/30 bg-primary/5"
        >
          <div className="flex items-start gap-4">
            <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
              <Award className="w-5 h-5 text-primary" />
            </span>
            <div>
              <h4 className="text-foreground font-semibold mb-2">
                Best Mobile Bank in Colombia — 2019
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The recognition wasn't for one product — it was for a consistent, cross-portfolio
                elevation of the digital experience over three years. Every product worked better,
                felt better, and was more trusted than when we started.
              </p>
            </div>
          </div>
        </motion.div>
      </CaseStudySection>

      {/* Leadership Reflection */}
      <CaseStudySection label="Leadership Reflection" className="pb-32">
        <p className="text-lg text-muted-foreground mb-10 max-w-3xl leading-relaxed">
          BBVA Colombia taught me that design authority is not a title — it's a practice.
          You earn it by shipping things that work, building relationships that last, and
          creating systems that function when you're not in the room.
          The products improved because the decisions improved. And the decisions improved
          because we built a shared language for making them.
        </p>
        <PullQuote
          quote="The best design system you can build inside an organization isn't a component library. It's a shared understanding of what good decisions look like."
          author="Miguel Espinosa"
          role="UX & Design Manager, BBVA Colombia"
        />
      </CaseStudySection>
    </main>
  );
};

export default BBVACaseStudy;

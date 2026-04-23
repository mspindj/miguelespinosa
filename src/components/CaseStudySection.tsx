import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CaseStudyData {
  number: string;
  year: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  path: string;
  tags: string[];
}

const caseStudies: CaseStudyData[] = [
  {
    number: "01",
    year: "2023 — 2025",
    title: "TP Design System",
    description:
      "Multi-brand design system unifying fragmented UI libraries across a 500K+ employee organization. Token architecture + engineer-handoff automation.",
    metric: "−40%",
    metricLabel: "Handoff Time",
    path: "/case-study/tp-design-system",
    tags: ["Design Systems", "DesignOps", "Teleperformance"],
  },
  {
    number: "02",
    year: "2022 — 2024",
    title: "Design Transformation",
    description:
      "Moved design from execution layer to strategic function inside a global BPO. Built the operating model, hiring framework, and design culture from scratch.",
    metric: "0 → 12",
    metricLabel: "Team Scale",
    path: "/case-study/design-transformation",
    tags: ["Leadership", "DesignOps", "Org Design"],
  },
  {
    number: "03",
    year: "2025 — 2026",
    title: "Tati — AI Translation",
    description:
      "Designed the trust layer between humans and AI agents for a specialized translation platform. The interface is a promise: clarity, confidence, control.",
    metric: "96%+",
    metricLabel: "Quality Standard",
    path: "/case-study/tati-ai",
    tags: ["AI Product", "Trust UX", "Co-founder"],
  },
];

const CaseStudySection = () => {
  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            Selected Cases
          </span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs font-mono text-muted-foreground">
            {caseStudies.length} projects
          </span>
        </div>

        {/* Case list */}
        <div className="divide-y divide-white/10">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link
                to={study.path}
                className="group grid grid-cols-1 lg:grid-cols-[5rem_1fr_auto] gap-4 lg:gap-8 py-10 items-start hover:bg-white/[0.02] -mx-6 px-6 transition-colors"
              >
                {/* Number + year */}
                <div className="flex lg:flex-col gap-3 lg:gap-1">
                  <span className="text-xs font-mono text-primary">{study.number}</span>
                  <span className="text-xs font-mono text-muted-foreground/60">{study.year}</span>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl lg:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {study.title}
                    </h2>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-4">
                    {study.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-muted-foreground/50 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key metric */}
                <div className="text-right hidden lg:block flex-shrink-0">
                  <div className="text-2xl font-black text-foreground/90 tracking-tight">
                    {study.metric}
                  </div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mt-1">
                    {study.metricLabel}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View all */}
        <div className="pt-12 flex items-center gap-4">
          <div className="flex-1 h-px bg-border" />
          <Link
            to="/case-study/cash-conversion"
            className="group inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground uppercase tracking-widest transition-colors"
          >
            Also: BBVA Colombia — Digital Banking at Scale
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;

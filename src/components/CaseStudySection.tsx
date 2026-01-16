import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudy {
  number: string;
  year: string;
  codename: string;
  subtitle: string;
  description: string;
  metrics: { value: string; label: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    number: "01",
    year: "2023 — 2025",
    codename: "Flamingo DS",
    subtitle: "Design System Architecture",
    description:
      "Architected a multi-brand design system to unify product fragmented UI libraries. Focused on tokenization and engineer-handoff automation.",
    metrics: [
      { value: "-40%", label: "Handoff Time" },
      { value: "100%", label: "Consistency" },
    ],
  },
  {
    number: "02",
    year: "2022 — 2024",
    codename: "Cash Conversion",
    subtitle: "Fintech UX Transformation",
    description:
      "Transforming complex financial operations into seamless, human-centric experiences. Simplification of mental models for enterprise workflows.",
    metrics: [
      { value: "2x", label: "Velocity" },
      { value: "$2.4M", label: "Cost Savings" },
    ],
  },
  {
    number: "03",
    year: "2024 — 2025",
    codename: "Tati AI",
    subtitle: "AI Integration Project",
    description:
      "Designing the trust layer between humans and AI agents. Focused on clarity, specialized interfaces, and user confidence in AI-driven products.",
    metrics: [
      { value: "90%", label: "Adoption" },
      { value: "4.8/5", label: "CSAT Score" },
    ],
  },
];

const CaseStudySection = () => {
  return (
    <section id="work" className="py-32 lg:py-40">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-20">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            Selected Cases
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Case studies */}
        <div className="space-y-32">
          {caseStudies.map((study, index) => (
            <article
              key={study.codename}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image placeholder */}
              <div
                className={`glass-card aspect-[16/10] rounded-2xl overflow-hidden group cursor-pointer ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="w-full h-full bg-gradient-to-br from-card to-secondary flex items-center justify-center relative">
                  <span className="text-6xl font-bold text-muted-foreground/20">
                    {study.number}
                  </span>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-mono text-primary">{study.number}</span>
                  <span className="text-xs font-mono text-muted-foreground">{study.year}</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-2">
                  {study.codename}
                </h2>
                <h3 className="text-lg text-muted-foreground mb-6">{study.subtitle}</h3>

                <p className="text-muted-foreground leading-relaxed mb-8">{study.description}</p>

                {/* Metrics */}
                <div className="flex gap-8 mb-8">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-2xl font-semibold text-foreground">{metric.value}</div>
                      <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link 
                  to={study.codename === "Flamingo DS" ? "/case-study/flamingo" : "#"}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  <span className="uppercase tracking-widest">Read Case Study</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;

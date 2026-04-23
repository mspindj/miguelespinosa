import headshot from "@/assets/miguel-profile.jpg";

interface Experience {
  title: string;
  company: string;
  period: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Director of Product Design",
    company: "Teleperformance",
    period: "Mar 2022 – Nov 2025",
    highlights: [
      "Led the global product design organization across 4 geographies — from vision to governance.",
      "Built a multi-brand design system that cut handoff time 40% and achieved 90% UI consistency across products.",
      "Drove design transformation from execution layer to strategic organizational capability.",
    ],
  },
  {
    title: "Senior UX Lead",
    company: "Globant",
    period: "Oct 2020 – Feb 2022",
    highlights: [
      "Technical UX Lead for DIRECTV — embedded in product squads, aligned design with engineering delivery.",
      "Mentored and grew a team of 7 designers.",
    ],
  },
  {
    title: "Head of Product Design",
    company: "Zinobe",
    period: "Dec 2019 – Aug 2020",
    highlights: [
      "Led product design for a fintech platform that disbursed +1M credits.",
      "Simplified complex credit workflows for underserved financial populations.",
    ],
  },
  {
    title: "UX & Design Manager",
    company: "BBVA Colombia",
    period: "May 2016 – Dec 2019",
    highlights: [
      "Built the design team from 0 to 12 — hiring, culture, process.",
      "Redesigned the cash conversion flow: BBVA named Best Mobile Bank in Colombia 2019.",
      "Created the Design Ambassadors Program with 125+ employees across business units.",
    ],
  },
];

const competencies = [
  "Design Leadership",
  "Design Systems at Scale",
  "AI Product Strategy",
  "DesignOps",
  "Digital Transformation",
  "Team Building",
  "Product Strategy",
  "Stakeholder Alignment",
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 lg:py-40">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-20">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            Experience
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left column - Photo and intro */}
          <div className="lg:col-span-1">
            {/* Profile photo */}
            <div className="relative aspect-square rounded-2xl overflow-hidden mb-8">
              <img
                src={headshot}
                alt="Miguel Espinosa - Senior Design Director"
                className="w-full h-full object-cover object-top grayscale contrast-110"
                style={{
                  maskImage: "radial-gradient(ellipse 80% 90% at 50% 40%, black 50%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(ellipse 80% 90% at 50% 40%, black 50%, transparent 100%)",
                }}
              />
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              15+ years scaling design organizations, building design systems at global scale,
              and leading AI product strategy. I resolve the problem behind the problem —
              design is not a service layer, it's decision-making infrastructure.
            </p>

            {/* Competencies */}
            <div className="mb-8">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4 block">
                Competencies
              </span>
              <div className="flex flex-wrap gap-2">
                {competencies.map((comp) => (
                  <span
                    key={comp}
                    className="text-xs font-mono text-muted-foreground bg-secondary px-3 py-1.5 rounded-md"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="/CV_MiguelEspinosa_2026.pdf"
              download
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Download Resume →
            </a>
          </div>

          {/* Right column - Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 lg:left-4 top-0 bottom-0 w-px bg-border" />

              {/* Experience items */}
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <article key={index} className="relative pl-8 lg:pl-12">
                    {/* Node */}
                    <div className="absolute left-0 lg:left-4 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-border group-hover:bg-primary transition-colors" />

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-primary">{exp.company}</p>
                      </div>
                      <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

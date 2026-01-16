import headshot from "@/assets/spin-profile.jpg";

interface Experience {
  title: string;
  company: string;
  period: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Global Director of Design",
    company: "Teleperformance",
    period: "Mar 2022 – Nov 2025",
    highlights: [
      "Lead the global product design organization, overseeing strategy and execution across multiple geographies.",
      "Integrated AI-driven tools to enhance operational efficiency and innovation.",
    ],
  },
  {
    title: "Senior UX Designer / Technical Leader",
    company: "Globant",
    period: "Oct 2020 – Feb 2022",
    highlights: [
      "Served as Technical UX Lead for major accounts including DIRECTV.",
      "Mentored a team of 7 designers, fostering growth and best practices.",
    ],
  },
  {
    title: "Head of Product Design",
    company: "Zinobe SAS",
    period: "Dec 2019 – Aug 2020",
    highlights: [
      "Spearheaded product design for a leading fintech, focusing on accessible financial products.",
      "Led design for financial products with +1M credits disbursed.",
    ],
  },
  {
    title: "UX & Design Manager",
    company: "BBVA Colombia",
    period: "May 2016 – Dec 2019",
    highlights: [
      "Built and scaled the design capabilities within the organization.",
      "Created and managed the Design Ambassadors Program (125+ employees).",
    ],
  },
];

const competencies = [
  "Product Strategy",
  "Design Systems",
  "Team Leadership",
  "Agile/Scrum",
  "Data Analytics",
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
              Over 10 years of experience defining product vision and leading high-performing
              design teams. I thrive in complex environments where technical constraints meet user
              needs.
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

            <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              Download Resume →
            </button>
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

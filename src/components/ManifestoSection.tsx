import { motion, type Variants } from "framer-motion";

interface ManifestoCard {
  number: string;
  category: string;
  title: string;
  description: string;
  tags?: string[];
  quote?: string;
}

const manifestoCards: ManifestoCard[] = [
  {
    number: "01",
    category: "The Context",
    title: "Navigating Complexity",
    description:
      "In 2026, the interface is no longer just a screen; it's an intelligent layer between intent and outcome. We design for ecosystems, not just pages.",
    tags: ["Systemic thinking", "Adaptive interfaces"],
  },
  {
    number: "02",
    category: "How I Define UX",
    title: "Orientation, Not Advocacy",
    description:
      "Moving beyond 'empathy' as a buzzword to strategic business alignment. UX provides the map for the organization.",
    quote: "UX IS NOT ADVOCACY. UX IS ORIENTATION.",
  },
  {
    number: "03",
    category: "How I Lead",
    title: "Clarity Earns Priority",
    description:
      "Leadership is about reducing ambiguity. A clear vision empowers autonomous decision-making and decentralized execution.",
    tags: ["Reduce friction", "Enable velocity"],
  },
  {
    number: "04",
    category: "AI as Infrastructure",
    title: "The New Substrate",
    description:
      "AI isn't a feature; it's the substrate. We design the guardrails and the goals, allowing the system to handle the path.",
    quote: "FROM UI KITS TO LOGIC LIBRARIES",
  },
  {
    number: "05",
    category: "Ethics & Research",
    title: "The Responsible Future",
    description:
      "With great automation comes the need for rigorous ethical frameworks. Research shifts from validation to discovery of unintended consequences.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const ManifestoSection = () => {
  return (
    <section id="philosophy" className="py-32 lg:py-40">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-20">
          <div className="lg:col-span-1">
            <span className="text-xs font-mono text-primary uppercase tracking-widest mb-4 block">
              Core Belief
            </span>
            <blockquote className="text-2xl lg:text-3xl font-semibold text-foreground leading-tight">
              "UX is decision infrastructure."
            </blockquote>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
              How I Think and Lead UX in 2026:
            </h2>
            <p className="text-xl text-muted-foreground">A Personal Manifesto</p>
          </div>
        </div>

        {/* Manifesto cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {manifestoCards.map((card) => (
            <motion.article
              key={card.number}
              variants={cardVariants}
              whileHover={{
                y: -4,
                boxShadow: "0 0 30px -5px hsl(24 95% 53% / 0.3)",
                borderColor: "hsl(24 95% 53% / 0.4)",
              }}
              transition={{ duration: 0.2 }}
              className="glass-card p-6 rounded-2xl transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-primary">{card.number}</span>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  — {card.category}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {card.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {card.description}
              </p>

              {card.tags && (
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {card.quote && (
                <p className="text-xs font-mono text-primary/80 mt-4 pt-4 border-t border-white/10">
                  {card.quote}
                </p>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ManifestoSection;

import { ArrowLeft, ArrowUpRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import headshot from "@/assets/miguel-profile.jpg";

const manifestoPoints = [
  {
    number: "01",
    title: "UX is not UI. It's Decision Design.",
    body: "The value is not in the artifact — it's in reducing uncertainty. My role is to make trade-offs explicit so organizations can move with confidence.",
  },
  {
    number: "02",
    title: "Clarity is the New Moat.",
    body: "In a world of AI-generated noise, the competitive advantage is clarity: in framing, in language, in impact. Whoever frames the problem owns the solution.",
  },
  {
    number: "03",
    title: "Research without a decision is vanity.",
    body: "Research exists to unlock courses of action, not to accumulate insights. If it doesn't change something, it was theater.",
  },
  {
    number: "04",
    title: "Impact is designed, not reported.",
    body: "I speak the language of solvency: Cost, Risk, Revenue. Design that can't be measured can't be defended — and shouldn't be.",
  },
  {
    number: "05",
    title: "I design systems and trust, not screens.",
    body: "With agents and GenUI, we design rules, limits, policies, and behavioral contracts. The interface is a promise.",
  },
  {
    number: "06",
    title: "Leadership without permission.",
    body: "Influence is built before entering the room. I create the conditions for teams to make better decisions even when I'm not there.",
  },
  {
    number: "07",
    title: "Design debt is strategy debt.",
    body: "A confused product doesn't have a visual problem — it has accumulated decisions without coherence. Inconsistency is a leadership failure.",
  },
  {
    number: "08",
    title: "The future is human, not artisanal.",
    body: "Execution will be automatic. Judgment will not. I don't compete with the machine's speed — I compete with the quality of thought.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const About = () => {
  return (
    <main className="bg-background text-foreground">
      {/* Back nav */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-50 glass-card px-4 py-2 rounded-full inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        <span>Back</span>
      </Link>

      {/* Hero */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <img
                src={headshot}
                alt="Miguel Espinosa — Senior Director of Product Design"
                className="w-full aspect-[4/5] object-cover object-top grayscale contrast-110"
                style={{
                  maskImage: "radial-gradient(ellipse 90% 95% at 50% 35%, black 55%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(ellipse 90% 95% at 50% 35%, black 55%, transparent 100%)",
                }}
              />
            </motion.div>

            {/* Bio */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
              className="lg:pt-8"
            >
              <motion.div variants={fadeUp}>
                <span className="text-xs font-mono text-primary uppercase tracking-widest mb-6 block">
                  About
                </span>
                <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-8">
                  Miguel Espinosa
                </h1>
              </motion.div>

              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-6">
                Senior Director of Product Design with 15+ years of experience leading digital
                transformation, scaling high-performance design organizations, and evolving
                enterprise UX through AI-driven automation and data-informed strategies.
              </motion.p>

              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-6">
                Built design systems at global scale at Teleperformance, scaled teams from 0 to 12
                at BBVA Colombia, led digital transformation for DIRECTV via Globant, and
                co-founded AI-powered products in fintech and translation.
              </motion.p>

              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-10">
                My approach: resolve the problem behind the problem. Design is not a service layer —
                it's a decision-making infrastructure that shapes how organizations think.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
                {["Bogotá, Colombia", "Spanish passport — EU work authorization", "Open to C-Level & VP roles"].map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono text-muted-foreground bg-secondary px-3 py-1.5 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <a
                  href="/CV_MiguelEspinosa_2026_ATS_ENG.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
                <a
                  href="https://www.linkedin.com/in/mspin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                >
                  LinkedIn
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-24 lg:py-32 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <span className="text-xs font-mono text-primary uppercase tracking-widest mb-4 block">
              How I Lead
            </span>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-foreground mb-6">
              Leadership Manifesto
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              I lead through clarity, systems, and decisions. Design scales when people
              share language, ownership, and trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {manifestoPoints.map((point, index) => (
              <motion.div
                key={point.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 2) * 0.1 }}
                className="border-b border-white/10 py-10 md:px-8 first-of-type:border-t"
                style={{ borderLeft: index % 2 === 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}
              >
                <div className="flex items-start gap-6">
                  <span className="text-xs font-mono text-primary mt-1 flex-shrink-0">{point.number}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{point.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{point.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 lg:py-32 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6 block">
            Design Leadership · AI Product Strategy · Design Systems
          </span>
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-foreground mb-8">
            Let's operationalize your design strategy.
          </h2>
          <a
            href="mailto:hola@miguelespinosa.co"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;

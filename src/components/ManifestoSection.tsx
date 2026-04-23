import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ManifestoSection = () => {
  return (
    <section id="philosophy" className="py-32 lg:py-48 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, hsl(70 77% 55% / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-5xl mx-auto text-center"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest mb-12 block">
            On AI Products
          </span>

          <blockquote className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter text-foreground leading-[0.95] mb-8">
            "Good AI products
            <br />
            <span className="text-foreground/30">don't impress users</span>
            <br />— they reassure them."
          </blockquote>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            When the interface is a promise, clarity becomes the core feature.
            I design the trust layer between humans and intelligent systems.
          </p>

          <Link
            to="/about"
            className="group inline-flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="uppercase tracking-widest">Read the Full Manifesto</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ManifestoSection;

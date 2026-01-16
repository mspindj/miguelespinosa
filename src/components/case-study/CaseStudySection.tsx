import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CaseStudySectionProps {
  label: string;
  children: ReactNode;
  className?: string;
}

const CaseStudySection = ({ label, children, className = "" }: CaseStudySectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-20 lg:py-28 ${className}`}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-xs font-mono text-primary uppercase tracking-widest">
            {label}
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {children}
      </div>
    </motion.section>
  );
};

export default CaseStudySection;

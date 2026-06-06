"use client";

import { motion } from "framer-motion";

const MARQUEE_TEXT = "SCALING DECISIONS THROUGH DESIGN";

const PhilosophyMarquee = () => {
  return (
    <section className="py-24 lg:py-32 overflow-hidden border-y border-white/10 relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 28,
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-6xl md:text-8xl font-black mx-10 select-none"
            style={{
              WebkitTextStroke: "1.5px hsl(var(--foreground) / 0.22)",
              color: "transparent",
            }}
          >
            {MARQUEE_TEXT}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default PhilosophyMarquee;

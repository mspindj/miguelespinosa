import { motion, type Easing } from "framer-motion";

interface Metric {
  direction: "up" | "down";
  value: string;
  label: string;
}

interface MetricGridProps {
  metrics: Metric[];
}

const MetricGrid = ({ metrics }: MetricGridProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as Easing },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="glass-card p-6 rounded-xl text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span
              className={`text-5xl lg:text-6xl font-bold ${
                metric.direction === "down" ? "text-emerald-500" : "text-primary"
              }`}
            >
              {metric.direction === "down" ? "↓" : "↑"}
            </span>
            <span className="text-4xl lg:text-5xl font-bold text-foreground">
              {metric.value}
            </span>
          </div>
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
            {metric.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MetricGrid;

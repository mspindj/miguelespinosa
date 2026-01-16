import { motion } from "framer-motion";

interface PullQuoteProps {
  quote: string;
  author: string;
  role: string;
}

const PullQuote = ({ quote, author, role }: PullQuoteProps) => {
  return (
    <motion.blockquote
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-l-4 border-primary pl-8 py-4"
    >
      <p className="text-xl lg:text-2xl text-foreground leading-relaxed italic mb-6">
        "{quote}"
      </p>
      <footer className="flex items-center gap-2">
        <span className="text-sm font-medium text-foreground">{author}</span>
        <span className="text-muted-foreground">—</span>
        <span className="text-sm text-muted-foreground">{role}</span>
      </footer>
    </motion.blockquote>
  );
};

export default PullQuote;

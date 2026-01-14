import { Cpu } from "lucide-react";

const technologies = [
  "TypeScript",
  "React",
  "Node.js",
  "AWS",
  "Kubernetes",
  "PostgreSQL",
];

const StackCard = () => {
  return (
    <div className="bento-card">
      <div className="flex items-center gap-2 text-muted-foreground mb-4">
        <Cpu className="h-4 w-4" />
        <span className="text-xs font-mono uppercase tracking-widest">Tech Stack</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs font-mono text-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StackCard;

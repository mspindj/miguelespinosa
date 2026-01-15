import { Compass } from "lucide-react";

const expertise = [
  "Design Strategy",
  "UX Research",
  "Design Systems",
  "AI/ML Products",
  "Enterprise SaaS",
  "Team Leadership",
];

const StackCard = () => {
  return (
    <div className="bento-card">
      <div className="flex items-center gap-2 text-muted-foreground mb-4">
        <Compass className="h-4 w-4" />
        <span className="text-xs font-mono uppercase tracking-widest">Expertise</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {expertise.map((item) => (
          <span
            key={item}
            className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs font-mono text-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StackCard;

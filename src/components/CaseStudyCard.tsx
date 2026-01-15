import { Layers, Brain, Wallet } from "lucide-react";

interface CaseStudyCardProps {
  codename: string;
  title: string;
  description: string;
  icon: "design-system" | "ai" | "fintech";
}

const iconMap = {
  "design-system": Layers,
  "ai": Brain,
  "fintech": Wallet,
};

const CaseStudyCard = ({ codename, title, description, icon }: CaseStudyCardProps) => {
  const Icon = iconMap[icon];
  
  return (
    <div className="bento-card group cursor-pointer">
      <div className="flex items-center gap-2 text-muted-foreground mb-3">
        <Icon className="h-4 w-4" />
        <span className="text-xs font-mono uppercase tracking-widest">{codename}</span>
      </div>
      <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default CaseStudyCard;

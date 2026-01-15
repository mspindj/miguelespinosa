import { TrendingUp } from "lucide-react";

const metrics = [
  { label: "Years Leading", value: "15+" },
  { label: "Global Teams", value: "50+" },
  { label: "Enterprise", value: "B2B" },
];

const MetricsCard = () => {
  return (
    <div className="bento-card">
      <div className="flex items-center gap-2 text-muted-foreground mb-4">
        <TrendingUp className="h-4 w-4" />
        <span className="text-xs font-mono uppercase tracking-widest">Impact</span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="text-center">
            <div className="text-2xl font-semibold text-primary">{metric.value}</div>
            <div className="text-xs text-muted-foreground font-mono mt-1">{metric.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsCard;

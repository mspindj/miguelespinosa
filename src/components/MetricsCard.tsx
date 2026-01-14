import { Activity } from "lucide-react";

const metrics = [
  { label: "Years Exp", value: "8+" },
  { label: "Projects", value: "50+" },
  { label: "Uptime SLA", value: "99.9%" },
];

const MetricsCard = () => {
  return (
    <div className="bento-card">
      <div className="flex items-center gap-2 text-muted-foreground mb-4">
        <Activity className="h-4 w-4" />
        <span className="text-xs font-mono uppercase tracking-widest">Metrics</span>
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

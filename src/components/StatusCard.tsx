import { Terminal } from "lucide-react";

const StatusCard = () => {
  return (
    <div className="bento-card flex flex-col justify-between">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Terminal className="h-4 w-4" />
        <span className="text-xs font-mono uppercase tracking-widest">Status</span>
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <span className="glow-dot" />
          <span className="text-sm font-medium">Available for projects</span>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Open to consulting & full-time
        </p>
      </div>
    </div>
  );
};

export default StatusCard;

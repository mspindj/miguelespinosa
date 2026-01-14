import { Briefcase } from "lucide-react";

const ExperienceCard = () => {
  return (
    <div className="bento-card col-span-2">
      <div className="flex items-center gap-2 text-muted-foreground mb-4">
        <Briefcase className="h-4 w-4" />
        <span className="text-xs font-mono uppercase tracking-widest">Experience</span>
      </div>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium">Lead System Architect</h3>
            <p className="text-sm text-muted-foreground">Enterprise Solutions</p>
          </div>
          <span className="text-xs text-muted-foreground font-mono">2020 — Present</span>
        </div>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium">Senior Software Engineer</h3>
            <p className="text-sm text-muted-foreground">Cloud Infrastructure</p>
          </div>
          <span className="text-xs text-muted-foreground font-mono">2017 — 2020</span>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

import headshot from "@/assets/miguel-espinosa.jpg";

const ProfileCard = () => {
  return (
    <div className="bento-card col-span-2 row-span-2 flex flex-col lg:col-span-1 min-h-[420px] p-0 overflow-hidden">
      {/* Profile image container with all styling */}
      <div className="relative flex-1 min-h-[320px] overflow-hidden rounded-t-2xl">
        <img 
          src={headshot} 
          alt="Miguel Espinosa - System Architect"
          className="absolute inset-0 w-full h-full object-cover object-top grayscale brightness-[0.85] contrast-[1.15]"
          style={{
            filter: 'grayscale(100%) brightness(0.85) contrast(1.15)',
          }}
        />
        {/* Darken the blue background via overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(24, 24, 27, 0.3) 0%, rgba(24, 24, 27, 0.1) 30%, rgba(24, 24, 27, 0.6) 70%, rgba(24, 24, 27, 1) 100%)',
          }}
        />
      </div>
      
      {/* Caption section */}
      <div className="relative z-10 p-6 pt-4 space-y-2 bg-card">
        <span className="tech-label">
          <span className="glow-dot" />
          SYS.ARCHITECT
        </span>
        <p className="text-sm text-muted-foreground font-mono tracking-wide">
          Miguel Espinosa / System Architect
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
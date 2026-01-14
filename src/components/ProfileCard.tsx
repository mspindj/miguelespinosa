const ProfileCard = () => {
  return (
    <div className="bento-card col-span-2 row-span-2 flex flex-col lg:col-span-1 min-h-[400px]">
      <div className="profile-image flex-1 mb-4 min-h-[280px]">
        <img 
          src="/lovable-uploads/oUjz2NfSTXxCGVhQEVeq_Professional Headshot  (2).jpg" 
          alt="Miguel Espinosa - System Architect"
          className="object-cover object-top w-full h-full"
        />
      </div>
      <div className="relative z-10 space-y-2">
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
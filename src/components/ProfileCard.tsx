import headshot from "@/assets/spin-profile.jpg";

const ProfileCard = () => {
  return (
    <div className="bento-card col-span-2 row-span-2 flex flex-col lg:col-span-1 min-h-[420px] p-0 overflow-hidden">
      {/* Profile image container with all styling */}
      <div className="relative flex-1 min-h-[320px] overflow-hidden rounded-t-2xl">
        <img 
          src={headshot} 
          alt="Miguel Espinosa - Senior Design Director"
          className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-110"
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
          }}
        />
      </div>
      
      {/* Caption section */}
      <div className="relative z-10 p-6 pt-4 space-y-2 bg-card">
        <span className="tech-label">
          <span className="glow-dot" />
          DESIGN.DIRECTOR
        </span>
        <p className="text-sm text-muted-foreground font-mono tracking-wide">
          Miguel Espinosa / Senior Design Director
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
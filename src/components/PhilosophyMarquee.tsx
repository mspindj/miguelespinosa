const PhilosophyMarquee = () => {
  return (
    <section className="py-16 overflow-hidden border-y border-white/10">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-6xl md:text-8xl font-bold text-stroke mx-8 select-none"
          >
            SCALING DECISIONS THROUGH DESIGN
          </span>
        ))}
      </div>
    </section>
  );
};

export default PhilosophyMarquee;

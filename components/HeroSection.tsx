export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden" style={{ backgroundColor: '#9D0000' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero_section.png"
        alt="Tân Niên 2026"
        className="absolute inset-0 w-full h-full object-contain object-center"
      />
      {/* Left fade */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-24" style={{ background: 'linear-gradient(to right, #9D0000, transparent)' }} />
      {/* Right fade */}
      <div className="absolute inset-y-0 right-0 w-16 md:w-24" style={{ background: 'linear-gradient(to left, #9D0000, transparent)' }} />
    </section>
  );
}

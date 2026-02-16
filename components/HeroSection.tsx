export default function HeroSection() {
  return (
    <section className="relative w-full h-[240px] md:h-screen overflow-hidden bg-[#8b0000]">
      <img
        src="/hero_section.png"
        alt="Tân Niên 2026"
        className="absolute inset-0 w-full h-full object-contain object-center md:object-cover"
      />
      {/* Optional: Add a subtle overlay if needed for contrast, but keeping it clean for now */}
      <div className="absolute inset-0 bg-black/5 md:hidden" />
    </section>
  );
}

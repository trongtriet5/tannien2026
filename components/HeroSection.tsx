export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] md:h-[70vh] overflow-hidden bg-[#8b0000]">
      <picture>
        {/* Mobile - Uncomment when hero_mobile.png is available */}
        {/* <source media="(max-width: 639px)" srcSet="/hero_mobile.png" /> */}
        {/* Tablet - Uncomment when hero_tablet.png is available */}
        {/* <source media="(max-width: 1023px)" srcSet="/hero_tablet.png" /> */}
        {/* Desktop - Fallback for all devices if specific images are missing */}
        <img
          src="/hero_section.png"
          alt="Tân Niên 2026"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </picture>
    </section>
  );
}

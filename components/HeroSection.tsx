export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero_section.png"
        alt="Tân Niên 2026"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
    </section>
  );
}

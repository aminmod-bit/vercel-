import { Reveal } from "./ui";

const logos = [
  "The New York Times",
  "The Atlantic",
  "Wired",
  "The Economist",
  "Smithsonian",
  "National Geographic",
  "The Guardian",
  "BBC History",
];

const stats = [
  { value: "12K+", label: "Volumes" },
  { value: "47K", label: "Readers" },
  { value: "180+", label: "Countries" },
  { value: "4.9★", label: "Rating" },
];

export function SocialProof() {
  return (
    <section className="relative bg-ink py-16 sm:py-20 overflow-hidden border-y border-[#c9a96a]/10">
      <Reveal>
        <p className="text-center text-[11px] uppercase tracking-[0.3em] text-[#8a7e6a] mb-8">
          Featured in
        </p>
      </Reveal>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0b0a08] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0b0a08] to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden will-change-transform">
          <div className="flex animate-marquee gap-16 shrink-0 pr-16">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="font-serif text-xl sm:text-2xl text-[#5a5040] hover:text-[#c9a96a] transition-colors whitespace-nowrap"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-16">
        <Reveal delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#c9a96a]/10 rounded-2xl overflow-hidden">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group relative bg-[#0b0a08] p-6 sm:p-8 text-center hover:bg-[#15110b] transition-colors"
              >
                <div className="font-serif text-3xl sm:text-5xl font-semibold text-[#f5efe6] tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-2 text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#8a7e6a] group-hover:text-[#c9a96a] transition-colors">
                  {stat.label}
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 bg-[#c9a96a] group-hover:w-1/2 transition-all duration-500" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

const logos = [
  "Forbes", "TechCrunch", "Bloomberg", "Wired", "The Verge", "Robb Report", "Architectural Digest", "GQ",
];

const stats = [
  { value: "12.4K+", label: "Premium vehicles" },
  { value: "120+", label: "Cities served" },
  { value: "4.96", label: "Average rating" },
  { value: "28 min", label: "Average delivery" },
];

export default function SocialProof() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs uppercase tracking-[0.3em] text-ink-400"
        >
          Trusted by discerning drivers and featured in
        </motion.p>

        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink-950 to-transparent" />
          <div className="flex w-max gap-12 marquee-track will-change-transform">
            {[...logos, ...logos].map((l, i) => (
              <div
                key={i}
                className="flex h-10 min-w-[140px] items-center justify-center text-lg font-semibold text-ink-400/70 transition-colors hover:text-white"
                style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: "0.02em" }}
              >
                {l}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-aurora-1/0 blur-2xl transition-all duration-700 group-hover:bg-aurora-1/30" />
              <div className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-ink-400">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

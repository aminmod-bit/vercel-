import { motion } from "framer-motion";

const logos = [
  "Cambridge Wellness",
  "Aman Clinic",
  "PurePath Health",
  "As-Sunnah Society",
  "Raha Wellness",
  "Marhab Centre",
  "Hikma Group",
  "Tibi Centre",
];

export default function SocialProof() {
  return (
    <section className="relative border-y border-emerald-900/10 bg-cream-100/40 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-ink-500"
        >
          Trusted by wellness leaders & community clinics
        </motion.p>
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex w-max items-center gap-12 animate-marquee">
            {[...logos, ...logos].map((l, i) => (
              <div
                key={i}
                className="flex items-center gap-2 whitespace-nowrap text-ink-700"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-emerald-800"
                  fill="currentColor"
                >
                  <circle cx="12" cy="12" r="10" opacity="0.2" />
                  <circle cx="12" cy="12" r="5" />
                </svg>
                <span className="font-serif text-lg font-medium tracking-tight">
                  {l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

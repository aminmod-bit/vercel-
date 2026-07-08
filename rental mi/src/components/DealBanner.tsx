import { motion } from "framer-motion";
import { ArrowRight, Tag, Zap, Heart } from "lucide-react";

const deals = [
  {
    icon: Tag,
    eyebrow: "Long-term",
    title: "Weekly rentals",
    desc: "From $189 / week with unlimited mileage. Best for road trips and extended stays.",
    cta: "See weekly rates",
  },
  {
    icon: Zap,
    eyebrow: "Electric",
    title: "Tesla & EV deals",
    desc: "Drive the future for less. Free charging card and 200 miles included daily.",
    cta: "Explore EVs",
    highlight: true,
  },
  {
    icon: Heart,
    eyebrow: "Loyalty",
    title: "APEX Plus",
    desc: "Members save 15% on every booking, plus free upgrades and priority pickup.",
    cta: "Join free",
  },
];

export default function DealBanner() {
  return (
    <section className="relative bg-ink-1000 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-apex-500"
            >
              <span className="h-px w-8 bg-apex-500" /> Today's deals
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-black tracking-tight text-white sm:text-5xl"
            >
              Big savings. <span className="text-apex-500">No compromises.</span>
            </motion.h2>
          </div>
          <a href="#" className="group inline-flex items-center gap-1 text-sm font-bold text-apex-500 transition-colors hover:text-apex-300">
            View all deals
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {deals.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`group relative overflow-hidden border-2 p-7 transition-all duration-300 ${
                  d.highlight
                    ? "border-apex-500 bg-gradient-to-br from-apex-500/[0.08] to-transparent"
                    : "border-white/10 bg-white/[0.02] hover:border-white/30"
                }`}
              >
                {d.highlight && (
                  <div className="absolute right-4 top-4 bg-apex-500 px-2 py-1 text-[10px] font-black uppercase tracking-widest text-ink-1000">
                    Hot
                  </div>
                )}
                <div className={`inline-flex h-12 w-12 items-center justify-center ${
                  d.highlight ? "bg-apex-500 text-ink-1000" : "bg-white/5 text-apex-500"
                }`}>
                  <Icon className="h-5 w-5" strokeWidth={2.5} />
                </div>
                <div className="mt-6 text-xs font-bold uppercase tracking-widest text-apex-500">
                  {d.eyebrow}
                </div>
                <h3 className="mt-2 text-2xl font-black text-white">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{d.desc}</p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-white transition-colors group-hover:text-apex-500"
                >
                  {d.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Choose your car",
    desc: "Browse 222,000+ vehicles by class, brand, or location. Filter by price, features, and availability in real time.",
  },
  {
    n: "02",
    title: "Book in 60 seconds",
    desc: "Pick dates, extras, and add-ons. Insurance, taxes, and unlimited mileage are already included in the price.",
  },
  {
    n: "03",
    title: "Skip the counter",
    desc: "We'll deliver your car in 30 minutes. Or pick it up at one of 2,200 locations — no lines, no paperwork.",
  },
  {
    n: "04",
    title: "Return & go",
    desc: "Drop at any location. We refuel, recharge, and clean. Your receipt is in your inbox before you land home.",
  },
];

export default function Process() {
  return (
    <section className="relative bg-ink-1000 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-apex-500"
          >
            <span className="h-px w-8 bg-apex-500" /> How it works
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-black tracking-tight text-white sm:text-5xl"
          >
            From tap to <span className="text-apex-500">turning the key</span> in 4 steps.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden border border-white/10 bg-ink-900 p-7 transition-all hover:border-apex-500"
            >
              <div className="absolute -right-4 -top-4 text-7xl font-black text-apex-500/10 transition-colors group-hover:text-apex-500/20">
                {s.n}
              </div>
              <div className="relative">
                <div className="text-xs font-black uppercase tracking-widest text-apex-500">
                  Step {s.n}
                </div>
                <h3 className="mt-3 text-xl font-black text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

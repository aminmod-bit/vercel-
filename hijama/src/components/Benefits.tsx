import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  HeartPulse,
  Leaf,
  Moon,
  ShieldPlus,
} from "lucide-react";

const benefits = [
  {
    icon: Activity,
    title: "Relieves chronic pain",
    text: "Reduces muscular tension, migraine frequency, and back & joint pain through targeted decompression and increased blood flow.",
    accent: "from-emerald-700 to-emerald-500",
  },
  {
    icon: HeartPulse,
    title: "Boosts circulation",
    text: "Stimulates microcirculation and lymphatic drainage, helping your body clear metabolic waste and deliver fresh oxygen.",
    accent: "from-rose-500 to-amber-500",
  },
  {
    icon: Brain,
    title: "Calms the nervous system",
    text: "Triggers a parasympathetic shift — softening stress, anxiety, and the exhausting pace of modern life.",
    accent: "from-indigo-500 to-violet-500",
  },
  {
    icon: ShieldPlus,
    title: "Strengthens immunity",
    text: "Modulates immune markers and supports the body's natural defense response — preventive care with a legacy.",
    accent: "from-emerald-800 to-emerald-600",
  },
  {
    icon: Moon,
    title: "Restores deep sleep",
    text: "Many clients report deeper, more restorative sleep within days — a hallmark of true nervous system reset.",
    accent: "from-amber-500 to-yellow-500",
  },
  {
    icon: Leaf,
    title: "Detoxifies naturally",
    text: "Supports the liver, kidneys and skin — the body's natural detox pathways — without harsh interventions.",
    accent: "from-teal-500 to-emerald-500",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative bg-emerald-900 py-24 text-cream-50 sm:py-32">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-emerald-700/40 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-gold-500/20 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05] bg-grid" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-cream-50/20 bg-cream-50/5 px-3 py-1 text-xs font-medium text-cream-100/90 backdrop-blur"
          >
            <span className="h-1 w-1 rounded-full bg-gold-400" />
            Whole-body benefits
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl"
          >
            What changes after a session.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-lg leading-relaxed text-cream-100/80"
          >
            Clients describe it as "the exhale they didn't know they were
            holding." Here's what the science — and 2,400+ sessions — show.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.7 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${b.accent} shadow-lg`}
              >
                <b.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-medium tracking-tight">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-100/75">
                {b.text}
              </p>
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/5 opacity-0 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

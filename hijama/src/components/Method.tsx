import { motion } from "framer-motion";
import { Droplet, Wind, Sparkles, Heart } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Heart,
    title: "Consult & assess",
    text: "A 10-minute intake to understand your body, lifestyle and goals — every session is tailored, never templated.",
  },
  {
    n: "02",
    icon: Sparkles,
    title: "Sanctuary prep",
    text: "A calm, private room prepared with single-use medical-grade cups, sterile instruments, and warming oils.",
  },
  {
    n: "03",
    icon: Wind,
    title: "Strategic placement",
    text: "Cups are placed on prophetic points — upper back, shoulders, legs — to release stagnation and improve flow.",
  },
  {
    n: "04",
    icon: Droplet,
    title: "Restore & integrate",
    text: "Aftercare guidance, herbal support, and a follow-up plan to extend the benefits well beyond the session.",
  },
];

export default function Method() {
  return (
    <section id="method" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-emerald-700/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-cream-100/60 px-3 py-1 text-xs font-medium text-emerald-800"
          >
            <span className="h-1 w-1 rounded-full bg-emerald-700" />
            The Sakina Method
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-4xl font-medium tracking-tight text-ink-900 sm:text-5xl"
          >
            Four gentle steps,{" "}
            <span className="italic text-emerald-800">one profound</span> reset.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-lg leading-relaxed text-ink-700"
          >
            Hijama is more than a therapy. It is a deliberate pause — a return
            to the body's natural intelligence. Our method is rooted in
            tradition and refined through years of clinical care.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-emerald-900/10 bg-white/60 p-7 shadow-sm backdrop-blur transition-shadow hover:shadow-xl hover:shadow-emerald-900/10"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-700/5 transition group-hover:bg-emerald-700/10" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-600 text-cream-50 shadow-md shadow-emerald-900/20">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 font-mono text-xs tracking-widest text-ink-500">
                STEP {s.n}
              </div>
              <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {s.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

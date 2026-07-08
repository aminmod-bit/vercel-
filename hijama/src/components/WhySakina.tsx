import { motion } from "framer-motion";
import { Check, X, Award, GraduationCap, Heart } from "lucide-react";

const rows = [
  {
    feature: "Medical-grade sterile kits",
    us: true,
    them: false,
  },
  {
    feature: "Same-gender practitioners on request",
    us: true,
    them: false,
  },
  {
    feature: "60–90 minute unrushed sessions",
    us: true,
    them: false,
  },
  {
    feature: "Personalized aftercare plan",
    us: true,
    them: false,
  },
  {
    feature: "12+ years certified experience",
    us: true,
    them: false,
  },
  {
    feature: "Calm, hotel-grade treatment rooms",
    us: true,
    them: false,
  },
];

const reasons = [
  {
    icon: Award,
    title: "Recognized excellence",
    text: "Voted Best Complementary Therapy clinic 3 years running by the Wellness Council.",
  },
  {
    icon: GraduationCap,
    title: "Educated practitioners",
    text: "Continuous training in modern anatomy, classical Hijama, and patient-centred care.",
  },
  {
    icon: Heart,
    title: "Care without compromise",
    text: "We treat one client at a time. We never rush. We always listen.",
  },
];

export default function WhySakina() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-400/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-cream-100/60 px-3 py-1 text-xs font-medium text-emerald-800"
            >
              <span className="h-1 w-1 rounded-full bg-emerald-700" />
              Why Sakina
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-ink-900 sm:text-5xl"
            >
              The difference is in the{" "}
              <span className="italic text-emerald-800">details</span> others
              skip.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-lg leading-relaxed text-ink-700"
            >
              Hijama is widespread. Sakina Hijama is uncommon — by design. We
              treat cupping as the medical art it is, and the sacred practice
              it's meant to be.
            </motion.p>

            <div className="mt-8 space-y-5">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-600 text-cream-50 shadow-md shadow-emerald-900/20">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium tracking-tight text-ink-900">
                      {r.title}
                    </h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink-700">
                      {r.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="overflow-hidden rounded-3xl border border-emerald-900/10 bg-white/80 shadow-xl shadow-emerald-900/5 backdrop-blur">
              <div className="grid grid-cols-3 border-b border-emerald-900/10 bg-cream-100/60 px-6 py-4 text-sm font-medium text-ink-500">
                <div>Feature</div>
                <div className="text-center font-serif text-base font-semibold text-emerald-900">
                  Sakina
                </div>
                <div className="text-center text-ink-500">Typical clinic</div>
              </div>
              {rows.map((r, i) => (
                <motion.div
                  key={r.feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="grid grid-cols-3 items-center border-b border-emerald-900/5 px-6 py-4 text-sm last:border-0 hover:bg-emerald-900/[0.02]"
                >
                  <div className="text-ink-700">{r.feature}</div>
                  <div className="flex justify-center">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-700 text-cream-50 shadow-sm">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                  </div>
                  <div className="flex justify-center">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink-300/40 text-ink-500">
                      <X className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

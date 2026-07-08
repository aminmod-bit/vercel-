import { motion } from "framer-motion";
import {
  Clock,
  Lock,
  Sparkles,
  Thermometer,
  Users,
  ShieldCheck,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Medical-grade sterile kits",
    text: "Single-use, individually sealed cups and blades. Opened in front of you. Disposed of after.",
  },
  {
    icon: Lock,
    title: "Private 1:1 treatment rooms",
    text: "Sound-insulated, gender-respected spaces. Lockable. Calm. Yours alone for the entire session.",
  },
  {
    icon: Thermometer,
    title: "Climate & comfort tuned",
    text: "Warm rooms, soft lighting, weighted blankets and curated aromatherapy — your comfort is clinical.",
  },
  {
    icon: Clock,
    title: "60–90 minute sessions",
    text: "Unhurried. From intake to aftercare, every minute is yours. No back-to-back rush.",
  },
  {
    icon: Users,
    title: "Practitioner you can trust",
    text: "12+ years certified, background-checked, and trained in both classical and modern cupping technique.",
  },
  {
    icon: Sparkles,
    title: "Aftercare that extends results",
    text: "Personalized nutrition, movement and follow-up plan delivered to your inbox after each visit.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          {/* Left visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto aspect-square w-full max-w-md">
              {/* Layered glass cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 overflow-hidden rounded-[2.2rem] border border-white/40 bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 shadow-2xl shadow-emerald-900/30"
              >
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-400/30 blur-2xl" />
                <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-emerald-400/20 blur-2xl" />

                <div className="relative flex h-full w-full flex-col justify-between p-8 text-cream-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-full border border-cream-50/20 bg-cream-50/10 px-3 py-1.5 text-[10px] uppercase tracking-widest backdrop-blur">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-400" />
                      In session
                    </div>
                    <div className="font-serif text-sm italic text-cream-100/80">
                      Sakina
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream-100/60">
                      Live biometrics
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { l: "Heart rate", v: "62", u: "bpm" },
                        { l: "Cortisol", v: "−38", u: "%" },
                        { l: "SpO₂", v: "98", u: "%" },
                        { l: "Tension", v: "−54", u: "%" },
                      ].map((m) => (
                        <div
                          key={m.l}
                          className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur"
                        >
                          <div className="text-[9px] uppercase tracking-widest text-cream-100/60">
                            {m.l}
                          </div>
                          <div className="mt-0.5 flex items-baseline gap-1">
                            <span className="font-serif text-2xl font-medium text-cream-50">
                              {m.v}
                            </span>
                            <span className="text-[10px] text-cream-100/70">
                              {m.u}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating stat card */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="glass absolute -right-4 top-12 hidden rounded-2xl p-3 shadow-xl sm:flex sm:items-center sm:gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/20">
                  <Sparkles className="h-4 w-4 text-gold-500" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-ink-500">
                    Repeat rate
                  </div>
                  <div className="font-serif text-xl font-medium text-emerald-900">
                    94%
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="glass absolute -left-4 bottom-12 hidden rounded-2xl p-3 shadow-xl sm:flex sm:items-center sm:gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-700">
                  <ShieldCheck className="h-4 w-4 text-cream-50" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-ink-500">
                    Hygiene score
                  </div>
                  <div className="font-serif text-xl font-medium text-emerald-900">
                    A+
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-cream-100/60 px-3 py-1 text-xs font-medium text-emerald-800"
            >
              <span className="h-1 w-1 rounded-full bg-emerald-700" />
              The Sakina experience
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-ink-900 sm:text-5xl"
            >
              Designed like a{" "}
              <span className="italic text-emerald-800">spa.</span>{" "}
              Delivered like a clinic.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 max-w-xl text-lg leading-relaxed text-ink-700"
            >
              We obsessed over the details so your body can stop obsessing over
              stress. From the room temperature to the playlist to the
              aftercare — every detail has a purpose.
            </motion.p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {items.map((it, i) => (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.06, duration: 0.6 }}
                  className="group flex gap-4 rounded-2xl border border-emerald-900/10 bg-white/50 p-4 transition hover:border-emerald-900/20 hover:bg-white/80"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-900/5 text-emerald-800 transition group-hover:bg-emerald-800 group-hover:text-cream-50">
                    <it.icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium tracking-tight text-ink-900">
                      {it.title}
                    </h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink-700">
                      {it.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

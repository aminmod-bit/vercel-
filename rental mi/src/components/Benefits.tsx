import { motion } from "framer-motion";
import { TrendingUp, Wallet, Heart, Lock, Globe2, Award } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Always the newest fleet",
    desc: "Vehicles replaced every 12 months. You drive the latest model year, not a 5-year-old fleet car.",
  },
  {
    icon: Wallet,
    title: "Save up to 40%",
    desc: "Subscription-style pricing beats traditional rentals — with no surprise fees, ever.",
  },
  {
    icon: Lock,
    title: "Bank-grade security",
    desc: "256-bit encryption, biometric login, and PCI-compliant payments. Your data is sacred.",
  },
  {
    icon: Globe2,
    title: "120+ cities, one account",
    desc: "Travel the world without paperwork. Same app, same concierge — from LA to Lisbon.",
  },
  {
    icon: Heart,
    title: "Built for moments",
    desc: "Anniversaries, road trips, board meetings. We have a vehicle that matches the occasion.",
  },
  {
    icon: Award,
    title: "Concierge guarantee",
    desc: "If anything is less than perfect, we make it right — and often comp the entire day.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Sticky left visual */}
          <div className="relative">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden rounded-3xl border border-white/10"
              >
                <img
                  src="https://images.pexels.com/photos/35440178/pexels-photo-35440178.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200"
                  alt="Premium sedan"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="rounded-2xl border border-white/15 bg-ink-950/70 p-5 backdrop-blur-xl">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-glow to-aurora-3">
                        <Award className="h-5 w-5 text-ink-950" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Concierge-rated 4.96 / 5</div>
                        <div className="text-xs text-ink-300">From 8,420 verified reviews</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right list */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-ink-200 backdrop-blur"
            >
              Why Velocita
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl"
            >
              Six reasons drivers{" "}
              <span className="font-serif italic text-gradient">never go back.</span>
            </motion.h2>

            <div className="mt-10 space-y-2">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: i * 0.06 }}
                    className="group flex items-start gap-5 rounded-2xl border border-transparent p-4 transition-colors duration-300 hover:border-white/10 hover:bg-white/[0.02]"
                  >
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 group-hover:scale-110 group-hover:border-aurora-1/40 group-hover:bg-aurora-1/10">
                      <Icon className="h-5 w-5 text-ink-100 transition-colors group-hover:text-aurora-1" />
                      <div className="absolute inset-0 -z-10 rounded-2xl bg-aurora-1/0 blur-xl transition-all duration-500 group-hover:bg-aurora-1/30" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">{b.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-300">{b.desc}</p>
                    </div>
                    <div className="text-2xl font-serif text-ink-500 transition-colors group-hover:text-aurora-1">
                      0{i + 1}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

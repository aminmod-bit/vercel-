import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Single session",
    desc: "A focused, one-time reset — perfect for first-timers and acute relief.",
    price: { m: 120, y: 120 },
    features: [
      "60-minute Hijama session",
      "Private treatment room",
      "Medical-grade sterile kit",
      "Personalized aftercare plan",
      "Complimentary herbal tea",
    ],
    cta: "Book once",
    highlighted: false,
  },
  {
    name: "Renewal package",
    desc: "Our most-chosen plan — the rhythm your body actually needs.",
    price: { m: 95, y: 95 },
    badge: "Most popular",
    features: [
      "3 sessions · 90 min each",
      "Full intake & health review",
      "Ongoing practitioner access",
      "Custom nutrition & recovery plan",
      "Priority booking",
      "10% off retail products",
    ],
    cta: "Start renewal",
    highlighted: true,
  },
  {
    name: "Sakina annual",
    desc: "A year of proactive care for those who treat their body like a home.",
    price: { m: 79, y: 79 },
    features: [
      "6 sessions annually",
      "2 partner sessions to gift",
      "Quarterly wellness reviews",
      "All aftercare & plans included",
      "Concierge scheduling",
      "Members-only retreats",
    ],
    cta: "Join annual",
    highlighted: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
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
            Transparent pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-ink-900 sm:text-5xl"
          >
            Simple. Honest. Built to last.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-lg leading-relaxed text-ink-700"
          >
            No hidden fees, no upsells. Pay per session or unlock a deeper
            rhythm with our packages.
          </motion.p>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-emerald-900/15 bg-cream-100/60 p-1.5 backdrop-blur"
          >
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                !annual
                  ? "bg-emerald-900 text-cream-50 shadow"
                  : "text-ink-700 hover:text-emerald-900"
              }`}
            >
              Per session
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                annual
                  ? "bg-emerald-900 text-cream-50 shadow"
                  : "text-ink-700 hover:text-emerald-900"
              }`}
            >
              Package price
            </button>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: idx * 0.1, duration: 0.7 }}
              whileHover={{ y: -6 }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border p-8 transition ${
                p.highlighted
                  ? "border-transparent bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-cream-50 shadow-2xl shadow-emerald-900/30"
                  : "border-emerald-900/10 bg-white/70 text-ink-900 hover:border-emerald-900/25"
              }`}
            >
              {p.highlighted && (
                <>
                  <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gold-400/30 blur-3xl" />
                  <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-emerald-400/20 blur-3xl" />
                </>
              )}
              {p.badge && (
                <div className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full border border-gold-400/40 bg-gold-400/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold-400 backdrop-blur">
                  <Sparkles className="h-3 w-3" /> {p.badge}
                </div>
              )}
              <div className="relative">
                <h3
                  className={`font-serif text-2xl font-medium tracking-tight ${
                    p.highlighted ? "text-cream-50" : "text-ink-900"
                  }`}
                >
                  {p.name}
                </h3>
                <p
                  className={`mt-1.5 text-sm ${
                    p.highlighted ? "text-cream-100/80" : "text-ink-500"
                  }`}
                >
                  {p.desc}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span
                    className={`font-serif text-5xl font-medium tracking-tight ${
                      p.highlighted ? "text-cream-50" : "text-emerald-900"
                    }`}
                  >
                    ${annual ? p.price.y : p.price.m}
                  </span>
                  <span
                    className={`text-sm ${
                      p.highlighted ? "text-cream-100/70" : "text-ink-500"
                    }`}
                  >
                    {annual ? "/ session" : "/ session"}
                  </span>
                </div>

                <ul className="mt-7 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span
                        className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full ${
                          p.highlighted
                            ? "bg-gold-400/20 text-gold-400"
                            : "bg-emerald-900/8 text-emerald-800"
                        }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span
                        className={
                          p.highlighted ? "text-cream-100/85" : "text-ink-700"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#book"
                  className={`btn-shine group/btn mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                    p.highlighted
                      ? "bg-gold-400 text-emerald-900 hover:bg-gold-500"
                      : "bg-emerald-900 text-cream-50 hover:bg-emerald-800"
                  }`}
                >
                  {p.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink-500">
          All packages include a free 15-minute consultation. HSA / FSA
          accepted.
        </p>
      </div>
    </section>
  );
}

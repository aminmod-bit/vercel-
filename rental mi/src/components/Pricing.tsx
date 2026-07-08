import { motion } from "framer-motion";
import { useState } from "react";
import { Check, ArrowUpRight, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Day",
    tagline: "The spontaneous escape.",
    price: { monthly: 179, yearly: 149 },
    desc: "Perfect for weekend getaways, business trips, and special occasions.",
    features: [
      "Unlimited daily swaps",
      "Premium insurance included",
      "Concierge delivery in 30 min",
      "Full tank, every time",
      "Cancel up to 6h before",
    ],
    accent: "from-white to-ink-200",
    textColor: "text-ink-950",
    cta: "Start driving",
    highlighted: false,
  },
  {
    name: "Week",
    tagline: "The classic choice.",
    price: { monthly: 269, yearly: 219 },
    desc: "Most popular for road trips, family visits, and extended stays.",
    features: [
      "Everything in Day, plus:",
      "Free vehicle upgrade after day 4",
      "Two-driver profile",
      "Priority concierge line",
      "Cross-state mileage included",
      "Free cancellation up to 24h",
    ],
    accent: "from-aurora-1 via-aurora-2 to-aurora-3",
    textColor: "text-ink-950",
    cta: "Reserve this week",
    highlighted: true,
  },
  {
    name: "Month",
    tagline: "The freedom pass.",
    price: { monthly: 399, yearly: 329 },
    desc: "For those who want a premium vehicle without a lease contract.",
    features: [
      "Everything in Week, plus:",
      "Swap vehicles up to 6× / month",
      "Dedicated personal concierge",
      "Premium audio & accessories",
      "Free valet pickup & return",
      "Travel-ready in 120+ cities",
    ],
    accent: "from-amber-glow to-aurora-3",
    textColor: "text-ink-950",
    cta: "Go all-in",
    highlighted: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-ink-200 backdrop-blur"
          >
            <Sparkles className="h-3 w-3 text-amber-glow" /> Simple pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            One transparent price.{" "}
            <span className="font-serif italic text-gradient">Zero fine print.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1"
          >
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                !yearly ? "bg-white text-ink-950" : "text-ink-300 hover:text-white"
              }`}
            >
              Pay per day
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                yearly ? "bg-white text-ink-950" : "text-ink-300 hover:text-white"
              }`}
            >
              Membership <span className="ml-1 text-[10px] text-aurora-2">−20%</span>
            </button>
          </motion.div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-500 ${
                p.highlighted
                  ? "border-white/20 bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-[0_20px_60px_rgba(110,139,255,0.15)]"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              {p.highlighted && (
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-aurora-2/30 blur-3xl" />
              )}
              {p.highlighted && (
                <div className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-aurora-1 to-aurora-3 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink-950">
                  Most loved
                </div>
              )}

              <div className="relative">
                <div className="text-xs uppercase tracking-widest text-ink-400">{p.name}</div>
                <div className="mt-1 text-lg font-semibold text-white">{p.tagline}</div>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-semibold tracking-tight text-white">
                    ${yearly ? p.price.yearly : p.price.monthly}
                  </span>
                  <span className="text-sm text-ink-400">/ {yearly ? "month" : "day"}</span>
                </div>
                <p className="mt-3 text-sm text-ink-300">{p.desc}</p>
              </div>

              <ul className="mt-7 space-y-3 border-t border-white/5 pt-7">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-ink-200">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-8 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r ${p.accent} px-5 py-3 text-sm font-semibold ${p.textColor} transition-transform duration-300 hover:scale-[1.03] active:scale-95`}
              >
                {p.cta}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Reveal, SectionHeading, staggerContainer, staggerItem } from "./ui";

type Plan = {
  name: string;
  tagline: string;
  monthly: number;
  yearly: number;
  features: string[];
  cta: string;
  highlight?: boolean;
  badge?: string;
};

const plans: Plan[] = [
  {
    name: "Apprentice",
    tagline: "For the curious",
    monthly: 9,
    yearly: 7,
    features: [
      "Access to 1,200 core volumes",
      "Read on 1 device",
      "Basic search",
      "Light & sepia reading modes",
      "30-day money-back guarantee",
    ],
    cta: "Start free trial",
  },
  {
    name: "Scholar",
    tagline: "For the devoted reader",
    monthly: 19,
    yearly: 15,
    features: [
      "All 12,000+ volumes",
      "Read on 3 devices",
      "Full cross-volume search",
      "Margin notes & highlights",
      "Narrated editions",
      "Offline downloads",
      "30-day money-back guarantee",
    ],
    cta: "Start free trial",
    highlight: true,
    badge: "Most popular",
  },
  {
    name: "Patron",
    tagline: "For libraries & families",
    monthly: 39,
    yearly: 32,
    features: [
      "Everything in Scholar",
      "Up to 6 family members",
      "Shared notes & book clubs",
      "Early access to new releases",
      "Concierge curation",
      "Gift subscriptions",
      "Priority support",
    ],
    cta: "Start free trial",
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative bg-paper py-24 sm:py-36 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a96a]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              A library is a gift.
              <br />
              <em className="italic font-light text-[#8a6a2f]">To yourself.</em>
            </>
          }
          description="Less than a coffee a month. More valuable than a college semester. Cancel anytime — keep your highlights forever."
        />

        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-[#1a1410]/10 bg-white p-1 shadow-sm">
            <button
              onClick={() => setYearly(false)}
              className={`relative px-5 py-2 rounded-full text-[13px] font-medium transition-colors ${
                !yearly ? "text-[#f5efe6]" : "text-[#5a4f3c] hover:text-[#1a1410]"
              }`}
            >
              {!yearly && (
                <motion.div
                  layoutId="toggle"
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1a1410] to-[#0b0a08]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative">Monthly</span>
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`relative px-5 py-2 rounded-full text-[13px] font-medium transition-colors ${
                yearly ? "text-[#f5efe6]" : "text-[#5a4f3c] hover:text-[#1a1410]"
              }`}
            >
              {yearly && (
                <motion.div
                  layoutId="toggle"
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1a1410] to-[#0b0a08]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative flex items-center gap-1.5">
                Yearly
                <span className="rounded-full bg-[#c9a96a]/20 px-1.5 py-0.5 text-[10px] font-semibold text-[#c9a96a]">
                  −25%
                </span>
              </span>
            </button>
          </div>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={staggerItem}
              whileHover={{ y: plan.highlight ? -6 : -3 }}
              transition={{ duration: 0.2 }}
              className={`group relative rounded-3xl p-7 sm:p-8 transition-colors duration-300 ${
                plan.highlight
                  ? "bg-gradient-to-br from-[#1a1410] via-[#0b0a08] to-[#1a1410] text-[#f5efe6] border border-[#c9a96a]/30 shadow-2xl shadow-[#c9a96a]/10 lg:scale-[1.03]"
                  : "bg-white border border-[#1a1410]/8 text-[#1a1410] hover:border-[#c9a96a]/30"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#e7c98a] via-[#c9a96a] to-[#8a6a2f] px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.15em] text-[#0b0a08] shadow-lg">
                  <Sparkles className="h-3 w-3" />
                  {plan.badge}
                </div>
              )}

              {plan.highlight && (
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[#c9a96a]/15 blur-3xl" />
                </div>
              )}

              <div className="relative">
                <div className="flex items-baseline justify-between">
                  <h3
                    className={`font-serif text-2xl sm:text-3xl font-semibold tracking-tight ${
                      plan.highlight ? "text-[#f5efe6]" : "text-[#1a1410]"
                    }`}
                  >
                    {plan.name}
                  </h3>
                </div>
                <p
                  className={`mt-1 text-[13px] ${
                    plan.highlight ? "text-[#a89c84]" : "text-[#5a4f3c]"
                  }`}
                >
                  {plan.tagline}
                </p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span
                    className={`font-serif text-5xl sm:text-6xl font-semibold tracking-tight ${
                      plan.highlight ? "text-[#f5efe6]" : "text-[#1a1410]"
                    }`}
                  >
                    ${yearly ? plan.yearly : plan.monthly}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.highlight ? "text-[#a89c84]" : "text-[#5a4f3c]"
                    }`}
                  >
                    / month
                  </span>
                </div>
                <div
                  className={`mt-1 text-[12px] ${
                    plan.highlight ? "text-[#8a7e6a]" : "text-[#5a4f3c]"
                  }`}
                >
                  {yearly
                    ? `Billed annually ($${plan.yearly * 12}/year)`
                    : "Billed monthly"}
                </div>

                <a
                  href="#"
                  className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-[14px] font-semibold transition-all ${
                    plan.highlight
                      ? "bg-gradient-to-br from-[#e7c98a] via-[#c9a96a] to-[#8a6a2f] text-[#0b0a08] shadow-lg shadow-[#c9a96a]/30 hover:shadow-[#c9a96a]/50 btn-shine"
                      : "bg-[#1a1410] text-[#f5efe6] hover:bg-[#0b0a08]"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </a>

                <div
                  className={`mt-8 h-px ${
                    plan.highlight
                      ? "bg-gradient-to-r from-transparent via-[#c9a96a]/30 to-transparent"
                      : "bg-[#1a1410]/10"
                  }`}
                />

                <ul className="mt-7 space-y-3.5">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-3 text-[13.5px] leading-relaxed ${
                        plan.highlight ? "text-[#d4c8b0]" : "text-[#5a4f3c]"
                      }`}
                    >
                      <div
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5 ${
                          plan.highlight
                            ? "bg-[#c9a96a]/20 text-[#c9a96a]"
                            : "bg-[#c9a96a]/15 text-[#8a6a2f]"
                        }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </div>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.3} className="mt-12 text-center">
          <p className="text-[13px] text-[#5a4f3c]">
            <span className="font-semibold text-[#1a1410]">Student or educator?</span>{" "}
            Get 50% off any plan.{" "}
            <a href="#" className="font-semibold text-[#8a6a2f] underline underline-offset-4 hover:text-[#c9a96a]">
              Verify status →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

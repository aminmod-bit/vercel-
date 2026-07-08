import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "What's included in the rental price?",
    a: "Everything. Comprehensive insurance, taxes, 200 free miles per day (unlimited on most cars), 24/7 roadside assistance, and a full tank. The price you see is the price you pay.",
  },
  {
    q: "How fast can you deliver a car?",
    a: "Our average delivery time is 28 minutes within city centers. At airports, we aim for 15 minutes after you clear baggage claim.",
  },
  {
    q: "Can I cancel or change my booking?",
    a: "Yes. Free cancellation up to 6 hours before pickup. You can modify dates, locations, or vehicle class up to 2 hours before pickup at no charge.",
  },
  {
    q: "Do I need a credit card?",
    a: "No. We accept all major credit and debit cards. There are no credit card surcharges — a rare thing in our industry.",
  },
  {
    q: "What's the minimum age to rent?",
    a: "21 for most cars. Some premium and exotic vehicles require a minimum age of 25 and 2+ years of driving experience.",
  },
  {
    q: "Can I take the car across borders?",
    a: "Yes. UK to EU, EU to UK, and most cross-border rentals in the EU are included. We just need 24 hours' notice to prepare the green card insurance.",
  },
  {
    q: "What about fuel and charging?",
    a: "For petrol/diesel cars: full tank on pickup, refuel at wholesale prices on return. For EVs: 200 miles included daily, charging cable provided, and a free charging card for the network.",
  },
  {
    q: "What if I have an accident?",
    a: "Call our 24/7 line. We'll dispatch roadside assistance within 15 minutes, a replacement vehicle within 60, and handle the insurance claim directly. There's a $0 deductible on all plans.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-ink-1000 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-apex-500"
          >
            <MessageCircle className="h-3 w-3" /> Help center
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-black tracking-tight text-white sm:text-5xl"
          >
            Questions? <span className="text-apex-500">Answered.</span>
          </motion.h2>
        </div>

        <div className="border border-white/10 bg-ink-900">
          {faqs.map((f, i) => (
            <div key={f.q} className="border-b border-white/5 last:border-b-0">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-white/[0.02] sm:px-8"
              >
                <span className="text-base font-bold text-white sm:text-lg">{f.q}</span>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center border transition-all duration-300 ${
                    open === i
                      ? "border-apex-500 bg-apex-500 text-ink-1000 rotate-45"
                      : "border-white/20 text-white"
                  }`}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pr-12 text-sm leading-relaxed text-ink-300 sm:px-8 sm:text-base">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-8 border-2 border-apex-500 bg-apex-500/5 p-6 text-center sm:p-8">
          <p className="text-sm text-ink-200">
            Can&apos;t find what you&apos;re looking for? Our concierge is online 24/7.
          </p>
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-2 bg-apex-500 px-6 py-3 text-sm font-black uppercase tracking-wider text-ink-1000 transition-colors hover:bg-apex-400"
          >
            Chat with us
          </a>
        </div>
      </div>
    </section>
  );
}

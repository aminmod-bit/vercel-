import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Does Hijama hurt?",
    a: "Most clients describe a gentle pulling or pressure sensation, not pain. We use precise, controlled technique and walk you through every step. Many people find the experience deeply relaxing — some even fall asleep.",
  },
  {
    q: "Is it safe and hygienic?",
    a: "Absolutely. We use single-use, medical-grade, individually sealed cups and blades that are opened in front of you and disposed of after each session. All surfaces are sanitized between clients, and our hygiene protocol is rated A+ by independent auditors.",
  },
  {
    q: "How should I prepare for my first session?",
    a: "Eat lightly 2 hours before, hydrate well, and wear loose, comfortable clothing. We provide robes and private changing areas. After your session, rest for the remainder of the day and avoid intense exercise for 24 hours.",
  },
  {
    q: "How many sessions will I need?",
    a: "Most clients see meaningful change after one session. For chronic conditions, a 3-session protocol over 4–6 weeks is typical. Your practitioner will recommend a personalized rhythm after your initial assessment — never a hard sell.",
  },
  {
    q: "Is Hijama rooted in religious tradition?",
    a: "Yes. Hijama (cupping) is mentioned in authentic prophetic tradition as a remedy and a practice of the Sunnah. At Sakina, we honour that lineage with reverence and pair it with the highest standards of modern clinical care.",
  },
  {
    q: "Do you offer Hijama for women?",
    a: "We provide Hijama for women in a fully private, female-practitioner environment. Our women's clinic follows strict modesty protocols with same-gender practitioners and dedicated treatment rooms.",
  },
  {
    q: "Can I claim this on insurance?",
    a: "Sakina is HSA / FSA eligible in most regions. We provide itemized receipts for reimbursement. Some private insurers also cover complementary therapies — check with your provider.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-cream-100/60 px-3 py-1 text-xs font-medium text-emerald-800"
          >
            <span className="h-1 w-1 rounded-full bg-emerald-700" />
            Common questions
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-ink-900 sm:text-5xl"
          >
            Everything you'd ask, answered.
          </motion.h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="overflow-hidden rounded-2xl border border-emerald-900/10 bg-white/70 backdrop-blur transition hover:border-emerald-900/20"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="font-serif text-lg font-medium tracking-tight text-ink-900">
                  {f.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                    open === i
                      ? "bg-emerald-900 text-cream-50"
                      : "bg-emerald-900/5 text-emerald-800"
                  }`}
                >
                  <Plus className="h-4 w-4" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-sm leading-relaxed text-ink-700">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

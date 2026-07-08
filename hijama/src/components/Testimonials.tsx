import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    quote:
      "After three sessions, my chronic shoulder pain I'd carried for 6 years is finally gone. The clinic feels like a five-star hotel — and the care is genuine.",
    name: "Ahmed R.",
    role: "Software engineer",
    location: "London",
    rating: 5,
  },
  {
    quote:
      "I'd never tried Hijama before. The team made me feel completely at ease — explained everything, sterile, calm. I sleep deeper than I have in years.",
    name: "Yusuf K.",
    role: "Architect",
    location: "Dubai",
    rating: 5,
  },
  {
    quote:
      "The follow-up plan after my session was unexpected. They treated my whole life, not just my back. The whole experience is world-class.",
    name: "Bilal S.",
    role: "Physician",
    location: "Toronto",
    rating: 5,
  },
  {
    quote:
      "My migraines dropped from 3 a week to nearly none. I cancelled my preventive medication. Sakina changed my life — quietly, professionally.",
    name: "Hamza M.",
    role: "Entrepreneur",
    location: "New York",
    rating: 5,
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % reviews.length);
  const prev = () => setI((p) => (p - 1 + reviews.length) % reviews.length);

  return (
    <section className="relative bg-cream-100/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-white/70 px-3 py-1 text-xs font-medium text-emerald-800 backdrop-blur"
          >
            <span className="h-1 w-1 rounded-full bg-emerald-700" />
            Client stories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-ink-900 sm:text-5xl"
          >
            Real people. Real resets.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-14 overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white/80 p-8 shadow-xl shadow-emerald-900/5 backdrop-blur sm:p-12"
        >
          <Quote className="absolute -left-2 -top-2 h-24 w-24 text-emerald-900/5" />
          <Quote className="absolute -bottom-2 -right-2 h-24 w-24 rotate-180 text-emerald-900/5" />

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="flex items-center gap-1 text-gold-500">
              {[...Array(reviews[i].rating)].map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-5 font-serif text-2xl font-medium leading-snug tracking-tight text-ink-900 sm:text-3xl">
              "{reviews[i].quote}"
            </blockquote>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-emerald-700 to-emerald-500 font-serif text-base font-medium text-cream-50">
                  {reviews[i].name[0]}
                </div>
                <div>
                  <div className="font-semibold text-ink-900">
                    {reviews[i].name}
                  </div>
                  <div className="text-sm text-ink-500">
                    {reviews[i].role} · {reviews[i].location}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-900/15 bg-white text-emerald-900 transition hover:border-emerald-900/30 hover:bg-emerald-900 hover:text-cream-50"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-900/15 bg-white text-emerald-900 transition hover:border-emerald-900/30 hover:bg-emerald-900 hover:text-cream-50"
                  aria-label="Next"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 flex items-center justify-center gap-1.5">
            {reviews.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Go to review ${k + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  k === i
                    ? "w-8 bg-emerald-800"
                    : "w-1.5 bg-emerald-900/20 hover:bg-emerald-900/40"
                }`}
              />
            ))}
          </div>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { v: "4.98", l: "Average rating" },
            { v: "2,400+", l: "Sessions" },
            { v: "94%", l: "Return rate" },
            { v: "48h", l: "Avg. booking" },
          ].map((s, k) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: k * 0.08 }}
              className="rounded-2xl border border-emerald-900/10 bg-white/60 p-5 text-center"
            >
              <div className="font-serif text-2xl font-medium tracking-tight text-emerald-900">
                {s.v}
              </div>
              <div className="mt-1 text-xs text-ink-500">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

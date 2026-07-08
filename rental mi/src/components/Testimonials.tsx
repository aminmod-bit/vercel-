import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I rented the M4 for a 2-day road trip through the Lake District. It was ready at the train station before I arrived. That's the dream.",
    name: "Sophie R.",
    role: "Marketing director",
    initial: "S",
    color: "apex-500",
  },
  {
    quote: "Best rental experience I've ever had. Delivered to my hotel at 7am, picked up at 9pm. No paperwork, no fuss, no extra charges.",
    name: "James T.",
    role: "Architect",
    initial: "J",
    color: "white",
  },
  {
    quote: "Drove the Tesla Model 3 across the US. Charging was free, mileage unlimited, app worked perfectly. Already booked my next one.",
    name: "Marcus L.",
    role: "Software engineer",
    initial: "M",
    color: "apex-500",
  },
  {
    quote: "APEX Plus paid for itself in three rentals. Free upgrades, no fees, priority pickup. I can't imagine going back to a traditional company.",
    name: "Yuki H.",
    role: "Consultant",
    initial: "Y",
    color: "white",
  },
  {
    quote: "The concierge is unreal. I needed a car at 4am in Lisbon — they had one waiting in 22 minutes. That's concierge.",
    name: "Léa M.",
    role: "Travel photographer",
    initial: "L",
    color: "apex-500",
  },
  {
    quote: "Took the Range Rover Sport on a family road trip through Scotland. Seven seats, four suitcases, zero stress. APEX delivered.",
    name: "Daniel K.",
    role: "Finance director",
    initial: "D",
    color: "white",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-ink-1000 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-apex-500"
            >
              <span className="h-px w-8 bg-apex-500" /> 24,000+ happy drivers
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-black tracking-tight text-white sm:text-5xl"
            >
              Real reviews.{" "}
              <span className="text-apex-500">Real first-class service.</span>
            </motion.h2>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-apex-500 text-apex-500" />
              ))}
            </div>
            <span>4.8 / 5</span>
            <span className="text-ink-400">Trustpilot</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="group relative border border-white/10 bg-ink-900 p-7 transition-colors hover:border-apex-500"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-apex-500/10" />
              <div className="flex">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-apex-500 text-apex-500" />
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-ink-100">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                <div
                  className={`flex h-10 w-10 items-center justify-center font-black ${
                    t.color === "apex-500" ? "bg-apex-500 text-ink-1000" : "bg-white text-ink-1000"
                  }`}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="text-sm font-black text-white">{t.name}</div>
                  <div className="text-xs text-ink-400">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

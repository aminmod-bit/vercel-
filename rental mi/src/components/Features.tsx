import { motion } from "framer-motion";
import { ShieldCheck, Clock, Fuel, KeyRound, Phone, CreditCard, MapPin, Gauge } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Ready in 30 minutes",
    desc: "Skip the counter. Your car is brought directly to your terminal, hotel, or home — usually within half an hour.",
  },
  {
    icon: ShieldCheck,
    title: "Premium coverage",
    desc: "Comprehensive insurance and roadside assistance are always included. No upsells, no hidden costs.",
  },
  {
    icon: Fuel,
    title: "Full tank, free",
    desc: "We deliver with a full tank (or a full charge) and refuel after your trip at wholesale prices.",
  },
  {
    icon: KeyRound,
    title: "Contactless pickup",
    desc: "Unlock your car from the APEX app. Skip paperwork, kiosks, and counters entirely.",
  },
  {
    icon: Phone,
    title: "24/7 concierge",
    desc: "Real humans on call, anytime. Roadside help arrives within 15 minutes in 90% of cities.",
  },
  {
    icon: CreditCard,
    title: "No credit card fees",
    desc: "We don't add a premium for card payments. Pay however you like, with no surprise charges.",
  },
  {
    icon: MapPin,
    title: "One-way freedom",
    desc: "Pick up in London, drop in Paris. Cross-border rentals are included on weekly and monthly plans.",
  },
  {
    icon: Gauge,
    title: "Unlimited mileage",
    desc: "On most vehicles, the miles are unlimited. Drive to the coast. Drive to the mountains. Just drive.",
  },
];

export default function Features() {
  return (
    <section id="cars" className="relative bg-ink-1000 py-20 sm:py-28">
      <div className="absolute inset-0 stripes opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mb-14 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-apex-500"
          >
            <span className="h-px w-8 bg-apex-500" /> Why APEX
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-black tracking-tight text-white sm:text-5xl"
          >
            Premium cars.{" "}
            <span className="text-apex-500">Stress-free service.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-ink-300"
          >
            We rebuilt the rental experience from scratch — no counters, no paper, no
            surprises. Just you, the open road, and a car that fits the moment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative bg-ink-1000 p-6 transition-colors hover:bg-ink-900"
              >
                <div className="absolute left-0 top-0 h-1 w-0 bg-apex-500 transition-all duration-500 group-hover:w-full" />
                <Icon className="h-7 w-7 text-apex-500" strokeWidth={1.5} />
                <h3 className="mt-5 text-base font-black text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

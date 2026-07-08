import { motion } from "framer-motion";
import { useState } from "react";
import { Gauge, Zap, Users, Briefcase, ChevronRight } from "lucide-react";

const cars = [
  {
    id: "gt",
    name: "Apex GT",
    category: "Performance",
    tagline: "Pure adrenaline, engineered.",
    image: "https://images.pexels.com/photos/33268786/pexels-photo-33268786.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    price: 389,
    specs: { power: "720 hp", accel: "2.9s", seats: "2 seats", bag: "2 bags" },
    accent: "from-aurora-2 to-aurora-3",
    badge: "Most popular",
  },
  {
    id: "ev",
    name: "Lumen E1",
    category: "Electric",
    tagline: "Silent power. Infinite future.",
    image: "https://images.pexels.com/photos/29952735/pexels-photo-29952735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    price: 219,
    specs: { power: "510 hp", accel: "3.4s", seats: "5 seats", bag: "3 bags" },
    accent: "from-aurora-1 to-emerald-400",
    badge: "Eco choice",
  },
  {
    id: "suv",
    name: "Stratos X",
    category: "SUV",
    tagline: "Command every road.",
    image: "https://images.pexels.com/photos/11808155/pexels-photo-11808155.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    price: 269,
    specs: { power: "450 hp", accel: "4.1s", seats: "7 seats", bag: "5 bags" },
    accent: "from-amber-glow to-aurora-1",
    badge: "Family ready",
  },
  {
    id: "sedan",
    name: "Mistral S",
    category: "Sedan",
    tagline: "Refined. Unhurried. Yours.",
    image: "https://images.pexels.com/photos/11194747/pexels-photo-11194747.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    price: 179,
    specs: { power: "380 hp", accel: "4.6s", seats: "5 seats", bag: "4 bags" },
    accent: "from-ink-300 to-ink-500",
    badge: "Business class",
  },
];

export default function Showcase() {
  const [active, setActive] = useState(0);
  const car = cars[active];

  return (
    <section id="fleet" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-ink-200 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-aurora-1" />
              The fleet
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 max-w-xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl"
            >
              A vehicle for{" "}
              <span className="font-serif italic text-gradient">every story.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-sm text-ink-300"
          >
            From whisper-quiet EVs to track-ready supercars — every model under 12 months old,
            meticulously maintained.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr]">
          {/* Tabs */}
          <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col lg:gap-3">
            {cars.map((c, i) => (
              <motion.button
                key={c.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                onClick={() => setActive(i)}
                className={`group relative flex shrink-0 flex-col items-start gap-1 rounded-2xl border p-4 text-left transition-all duration-500 lg:p-5 ${
                  active === i
                    ? "border-white/20 bg-white/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
                    : "border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.03]"
                }`}
              >
                {active === i && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute left-0 top-1/2 hidden h-8 w-1 -translate-y-1/2 rounded-r-full bg-gradient-to-b from-aurora-1 to-aurora-2 lg:block"
                  />
                )}
                <span className="text-[10px] uppercase tracking-widest text-ink-400">
                  {c.category}
                </span>
                <span className="text-lg font-semibold text-white">{c.name}</span>
                <span className="text-sm text-ink-300">From ${c.price}/day</span>
              </motion.button>
            ))}
          </div>

          {/* Car display */}
          <motion.div
            key={car.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-white/10"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <motion.img
                key={car.image}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                src={car.image}
                alt={car.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />

              <div className={`absolute right-5 top-5 rounded-full bg-gradient-to-r ${car.accent} px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink-950`}>
                {car.badge}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="text-xs uppercase tracking-widest text-ink-300">{car.category}</div>
                <h3 className="mt-1 text-3xl font-semibold text-white sm:text-4xl">{car.name}</h3>
                <p className="mt-1 max-w-md text-ink-200">{car.tagline}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px bg-white/5 sm:grid-cols-4">
              <Spec icon={<Zap className="h-4 w-4" />} label="Power" value={car.specs.power} />
              <Spec icon={<Gauge className="h-4 w-4" />} label="0—60 mph" value={car.specs.accel} />
              <Spec icon={<Users className="h-4 w-4" />} label="Seats" value={car.specs.seats} />
              <Spec icon={<Briefcase className="h-4 w-4" />} label="Luggage" value={car.specs.bag} />
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-ink-950/60 p-5 sm:p-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-ink-400">Starting at</div>
                <div className="text-2xl font-semibold text-white">
                  ${car.price} <span className="text-sm font-normal text-ink-400">/ day</span>
                </div>
              </div>
              <a
                href="#cta"
                className="group inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink-950 transition-transform duration-300 hover:scale-[1.04] active:scale-95"
              >
                Reserve {car.name}
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Spec({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 bg-ink-950/80 p-4">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-aurora-1">
        {icon}
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-ink-400">{label}</div>
        <div className="text-sm font-semibold text-white">{value}</div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import { MapPin, ArrowRight, Plane, Building2, Hotel, Train } from "lucide-react";

const locations = [
  { name: "London", count: 87, country: "UK" },
  { name: "Manchester", count: 24, country: "UK" },
  { name: "Edinburgh", count: 18, country: "UK" },
  { name: "Dublin", count: 22, country: "Ireland" },
  { name: "Paris", count: 96, country: "France" },
  { name: "Berlin", count: 64, country: "Germany" },
  { name: "Munich", count: 42, country: "Germany" },
  { name: "Madrid", count: 38, country: "Spain" },
  { name: "Rome", count: 35, country: "Italy" },
  { name: "Milan", count: 31, country: "Italy" },
  { name: "Amsterdam", count: 28, country: "Netherlands" },
  { name: "Barcelona", count: 26, country: "Spain" },
];

const pickupPoints = [
  { icon: Plane, label: "Airports" },
  { icon: Train, label: "Train stations" },
  { icon: Hotel, label: "Hotels" },
  { icon: Building2, label: "City centers" },
];

export default function Locations() {
  return (
    <section id="locations" className="relative bg-ink-1000 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-apex-500"
            >
              <span className="h-px w-8 bg-apex-500" /> 2,200+ locations
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-black tracking-tight text-white sm:text-5xl"
            >
              Wherever you go,{" "}
              <span className="text-apex-500">we're already there.</span>
            </motion.h2>
            <p className="mt-4 text-ink-300">
              From major airports to small-town stations, our network covers the places
              you actually travel. And we deliver — to your door, hotel, or terminal.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2">
              {pickupPoints.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.label}
                    className="flex items-center gap-2 border border-white/10 bg-white/[0.02] p-3 text-sm font-semibold text-white"
                  >
                    <Icon className="h-4 w-4 text-apex-500" />
                    {p.label}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {locations.map((l, i) => (
              <motion.a
                href="#"
                key={l.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                whileHover={{ y: -3 }}
                className="group relative overflow-hidden border border-white/10 bg-ink-900 p-4 transition-all hover:border-apex-500 hover:bg-ink-800"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-apex-500">
                      {l.country}
                    </div>
                    <div className="mt-1 text-base font-black text-white">{l.name}</div>
                  </div>
                  <MapPin className="h-4 w-4 text-ink-500 transition-colors group-hover:text-apex-500" />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-ink-400">{l.count} pickup points</span>
                  <ArrowRight className="h-3.5 w-3.5 text-ink-500 transition-all group-hover:translate-x-1 group-hover:text-apex-500" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

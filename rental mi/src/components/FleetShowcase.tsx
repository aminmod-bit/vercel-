import { motion } from "framer-motion";
import { useState } from "react";
import { Fuel, Settings2, Users, Luggage, ArrowRight, Heart } from "lucide-react";

const cars = [
  {
    id: "bmw-m4",
    name: "BMW M4 Competition",
    category: "Sports car",
    image: "https://images.pexels.com/photos/33345481/pexels-photo-33345481.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    price: 189,
    period: "day",
    seats: 4,
    bags: 2,
    transmission: "Automatic",
    fuel: "Petrol",
    badge: "Most popular",
    accent: true,
  },
  {
    id: "tesla-model3",
    name: "Tesla Model 3 Long Range",
    category: "Electric sedan",
    image: "https://images.pexels.com/photos/11194747/pexels-photo-11194747.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    price: 129,
    period: "day",
    seats: 5,
    bags: 2,
    transmission: "Automatic",
    fuel: "Electric",
    badge: "Eco-friendly",
  },
  {
    id: "mercedes-glc",
    name: "Mercedes-Benz GLC 300",
    category: "Premium SUV",
    image: "https://images.pexels.com/photos/20430089/pexels-photo-20430089.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    price: 159,
    period: "day",
    seats: 5,
    bags: 4,
    transmission: "Automatic",
    fuel: "Hybrid",
    badge: "Family pick",
  },
  {
    id: "porsche-911",
    name: "Porsche 911 Carrera S",
    category: "Supercar",
    image: "https://images.pexels.com/photos/94272/sports-car-pkw-auto-vehicle-94272.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    price: 449,
    period: "day",
    seats: 2,
    bags: 1,
    transmission: "Automatic",
    fuel: "Petrol",
    badge: "Premium",
    accent: true,
  },
  {
    id: "range-rover",
    name: "Range Rover Sport",
    category: "Luxury SUV",
    image: "https://images.pexels.com/photos/11808155/pexels-photo-11808155.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    price: 219,
    period: "day",
    seats: 5,
    bags: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    badge: "New",
  },
  {
    id: "lamborghini",
    name: "Lamborghini Huracán",
    category: "Exotic supercar",
    image: "https://images.pexels.com/photos/13155782/pexels-photo-13155782.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    price: 899,
    period: "day",
    seats: 2,
    bags: 1,
    transmission: "Automatic",
    fuel: "Petrol",
    badge: "Ultimate",
    accent: true,
  },
];

const filters = ["All", "SUV", "Sports", "Electric", "Luxury", "Exotic"];

export default function FleetShowcase() {
  const [active, setActive] = useState("All");
  const [favs, setFavs] = useState<Set<string>>(new Set(["bmw-m4"]));

  const filtered = active === "All" ? cars : cars.filter((c) =>
    c.category.toLowerCase().includes(active.toLowerCase())
  );

  const toggleFav = (id: string) => {
    setFavs((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section id="fleet" className="relative bg-ink-1000 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-apex-500"
            >
              <span className="h-px w-8 bg-apex-500" /> Our fleet
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-black tracking-tight text-white sm:text-5xl"
            >
              Find your <span className="text-apex-500">perfect ride.</span>
            </motion.h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 text-sm font-bold transition-all ${
                  active === f
                    ? "bg-apex-500 text-ink-1000"
                    : "border border-white/10 bg-white/5 text-ink-200 hover:border-apex-500 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c, i) => (
            <motion.article
              key={c.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden border-2 bg-ink-900 transition-colors ${
                c.accent ? "border-apex-500" : "border-white/10 hover:border-white/30"
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-ink-950">
                <motion.img
                  src={c.image}
                  alt={c.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-1000 via-transparent to-transparent" />

                <div className="absolute left-3 top-3 flex items-center gap-2">
                  <span className="bg-apex-500 px-2 py-1 text-[10px] font-black uppercase tracking-widest text-ink-1000">
                    {c.badge}
                  </span>
                </div>

                <button
                  onClick={() => toggleFav(c.id)}
                  className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center border border-white/20 bg-ink-1000/80 backdrop-blur transition-colors hover:border-apex-500"
                  aria-label="Save"
                >
                  <Heart
                    className={`h-4 w-4 transition-colors ${
                      favs.has(c.id) ? "fill-apex-500 text-apex-500" : "text-white"
                    }`}
                  />
                </button>

                <div className="absolute bottom-3 left-3 rounded bg-ink-1000/80 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur">
                  {c.category}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-black text-white">{c.name}</h3>

                <div className="mt-3 grid grid-cols-4 gap-2 border-y border-white/5 py-3 text-[10px]">
                  <Spec icon={<Users className="h-3 w-3" />} value={`${c.seats} seats`} />
                  <Spec icon={<Luggage className="h-3 w-3" />} value={`${c.bags} bags`} />
                  <Spec icon={<Settings2 className="h-3 w-3" />} value={c.transmission} />
                  <Spec icon={<Fuel className="h-3 w-3" />} value={c.fuel} />
                </div>

                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-ink-400">From</div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-white">${c.price}</span>
                      <span className="text-xs text-ink-400">/ {c.period}</span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="group/btn inline-flex items-center gap-1 bg-apex-500 px-3 py-2 text-xs font-black uppercase tracking-wider text-ink-1000 transition-colors hover:bg-apex-400"
                  >
                    Book
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-white/20 bg-transparent px-6 py-3 text-sm font-bold text-white transition-colors hover:border-apex-500 hover:bg-apex-500 hover:text-ink-1000"
          >
            Browse all 222,000 vehicles
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Spec({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <div className="flex items-center gap-1 text-ink-300">
      <span className="text-apex-500">{icon}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

import { motion } from "framer-motion";

const brands = [
  "BMW", "Mercedes-Benz", "Audi", "Porsche", "Tesla", "Range Rover",
  "Lamborghini", "Ferrari", "Volkswagen", "Ford", "Toyota", "Volvo",
];

const stats = [
  { value: "222K+", label: "Vehicles in fleet" },
  { value: "2,200+", label: "Locations worldwide" },
  { value: "105", label: "Countries" },
  { value: "4.8★", label: "Customer rating" },
];

export default function BrandMarquee() {
  return (
    <section className="relative border-y border-white/10 bg-ink-1000 py-12 sm:py-16">
      <div className="overflow-hidden">
        <div className="flex w-max gap-12 marquee-track will-change-transform">
          {[...brands, ...brands].map((b, i) => (
            <div
              key={i}
              className="text-2xl font-black uppercase tracking-tight text-ink-500 transition-colors hover:text-apex-500 sm:text-3xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {b}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-6 px-4 sm:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group relative border-l-2 border-apex-500 pl-4"
          >
            <div className="text-3xl font-black text-white sm:text-4xl">{s.value}</div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-ink-400">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

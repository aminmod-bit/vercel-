import { motion } from "framer-motion";
import { Sparkles, Check, ArrowRight } from "lucide-react";

const experiences = [
  {
    title: "Weekend escapes",
    desc: "Quick getaways made easy. Pre-book a convertible, time the pickup, and skip the line on the way out of town.",
    image: "https://images.pexels.com/photos/33268786/pexels-photo-33268786.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    items: ["Free additional driver", "200 free miles / day", "Flexible return time"],
  },
  {
    title: "Business travel",
    desc: "Designed for the boardroom. Premium sedans, priority pickup, and monthly invoicing for hassle-free expenses.",
    image: "https://images.pexels.com/photos/28986786/pexels-photo-28986786.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    items: ["Corporate accounts", "Priority concierge", "VAT-compliant invoices"],
  },
  {
    title: "Special occasions",
    desc: "Make it unforgettable. Reserve a supercar for the wedding, a vintage for the anniversary, or an SUV for the family reunion.",
    image: "https://images.pexels.com/photos/13155782/pexels-photo-13155782.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    items: ["Custom ribbons & decor", "Chauffeur options", "Multi-day discounts"],
  },
];

export default function Experience() {
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
              <Sparkles className="h-3 w-3" /> Built for the moment
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-black tracking-tight text-white sm:text-5xl"
            >
              Three rentals.{" "}
              <span className="text-apex-500">Three very different days.</span>
            </motion.h2>
          </div>
        </div>

        <div className="space-y-4">
          {experiences.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`group relative grid grid-cols-1 overflow-hidden border-2 border-white/10 bg-ink-900 transition-colors hover:border-apex-500 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={e.image}
                  alt={e.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ink-900/60 to-transparent lg:from-transparent" />
                <div className="absolute left-4 top-4 bg-ink-1000 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-apex-500">
                  0{i + 1}
                </div>
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-12">
                <h3 className="text-3xl font-black text-white sm:text-4xl">{e.title}</h3>
                <p className="mt-4 max-w-md text-ink-300">{e.desc}</p>
                <ul className="mt-6 space-y-2">
                  {e.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm text-ink-200">
                      <Check className="h-4 w-4 text-apex-500" strokeWidth={3} />
                      {it}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-bold text-apex-500 transition-colors hover:text-apex-300"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

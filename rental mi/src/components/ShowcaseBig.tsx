import { motion } from "framer-motion";
import { ArrowRight, Gauge, Fuel, Settings2, Users } from "lucide-react";

export default function ShowcaseBig() {
  return (
    <section id="deals" className="relative overflow-hidden bg-ink-1000 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden border-2 border-apex-500"
        >
          {/* Orange gradient backdrop */}
          <div className="absolute inset-0 bg-gradient-to-br from-apex-500/20 via-ink-1000 to-ink-1000" />
          <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-apex-500/30 blur-[120px]" />

          <div className="relative grid grid-cols-1 items-center gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-16">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 bg-apex-500 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-ink-1000">
                Featured · Save 35% this week
              </div>
              <h2 className="text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
                The new <span className="text-apex-500">BMW M4</span><br />
                Competition. <span className="text-ink-400 line-through">$289</span> <span className="text-apex-500">$189</span>
                <span className="text-base font-bold text-ink-400"> / day</span>
              </h2>
              <p className="mt-5 max-w-md text-lg text-ink-300">
                Twin-turbo inline-6. 503 hp. Carbon fiber roof. The legendary M4 is back in
                our premium fleet — at a price that actually makes sense.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <Stat icon={<Gauge className="h-4 w-4" />} value="503 hp" label="Power" />
                <Stat icon={<Settings2 className="h-4 w-4" />} value="3.8s" label="0—60 mph" />
                <Stat icon={<Fuel className="h-4 w-4" />} value="22 mpg" label="Efficiency" />
                <Stat icon={<Users className="h-4 w-4" />} value="4" label="Seats" />
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 bg-apex-500 px-6 py-3.5 text-sm font-black uppercase tracking-wider text-ink-1000 transition-all duration-300 hover:bg-apex-400 active:scale-95"
                >
                  Reserve the M4
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:border-white/50"
                >
                  Compare with similar
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/33345481/pexels-photo-33345481.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200"
                  alt="BMW M4 Competition"
                  className="drift aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-1000/60 to-transparent" />

                {/* Floating spec card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute bottom-4 left-4 right-4 border border-white/10 bg-ink-1000/80 p-4 backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-apex-500">Available</div>
                      <div className="text-base font-black text-white">5 cars at this price</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                      </span>
                      <span className="text-xs text-ink-300">Live now</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="border-l-2 border-apex-500 pl-3">
      <div className="flex items-center gap-1.5 text-apex-500">
        {icon}
        <span className="text-2xl font-black text-white">{value}</span>
      </div>
      <div className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-ink-400">
        {label}
      </div>
    </div>
  );
}

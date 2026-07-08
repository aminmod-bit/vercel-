import { motion } from "framer-motion";
import { Search, MapPin, Calendar, ArrowRight, Sparkles, Star } from "lucide-react";
import { useState } from "react";

const carClasses = [
  { id: "all", label: "All cars" },
  { id: "small", label: "Small" },
  { id: "sedan", label: "Sedan" },
  { id: "suv", label: "SUV" },
  { id: "lux", label: "Luxury" },
  { id: "ev", label: "Electric" },
  { id: "truck", label: "Truck" },
];

export default function Hero() {
  const [tab, setTab] = useState("all");
  const [returnSame, setReturnSame] = useState(true);

  return (
    <section className="relative overflow-hidden bg-ink-1000">
      {/* Decorative orange glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-apex-500/30 blur-[140px] glow-pulse" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-apex-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:pb-24 sm:pt-16">
        {/* Sticker */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: -8 }}
          transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
          className="wiggle absolute right-6 top-32 z-10 hidden h-24 w-24 items-center justify-center rounded-full bg-apex-500 text-center text-[11px] font-black uppercase leading-tight tracking-tight text-ink-1000 sm:flex"
        >
          Save<br />40%<br />Today
        </motion.div>

        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-ink-200 backdrop-blur"
            >
              <Sparkles className="h-3 w-3 text-apex-500" />
              Spring Sale · 40% off weekend rentals
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[44px] font-black leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-[88px]"
            >
              Drive <span className="text-apex-500">first</span>
              <br />
              <span className="text-stroke">class.</span>{" "}
              <span className="text-apex-500">Pay</span>
              <br />
              <span className="relative inline-block">
                economy.
                <svg className="absolute -bottom-2 left-0 h-4 w-full text-apex-500" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                  <path d="M2 6 Q 50 0 100 6 T 198 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-ink-300 sm:text-xl"
            >
              Premium vehicles without the premium price tag. Choose from{" "}
              <span className="font-bold text-white">222,000+ rental cars</span> across 105
              countries — delivered to your door in under 30 minutes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-6 text-sm"
            >
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-apex-500 text-apex-500" />
                  ))}
                </div>
                <span className="font-bold text-white">4.8</span>
                <span className="text-ink-400">/ 24,000+ reviews</span>
              </div>
              <div className="flex items-center gap-2 text-ink-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>No credit card fees</span>
              </div>
              <div className="hidden items-center gap-2 text-ink-300 sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Free cancellation</span>
              </div>
            </motion.div>
          </div>

          {/* Car classes tabs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden flex-wrap gap-2 lg:flex lg:flex-col lg:items-end"
          >
            {carClasses.map((c) => (
              <button
                key={c.id}
                onClick={() => setTab(c.id)}
                className={`group inline-flex items-center gap-2 px-4 py-2 text-sm font-bold transition-all ${
                  tab === c.id
                    ? "bg-apex-500 text-ink-1000"
                    : "border border-white/10 bg-white/5 text-ink-200 hover:border-apex-500 hover:text-white"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    tab === c.id ? "bg-ink-1000" : "bg-apex-500"
                  }`}
                />
                {c.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Booking widget */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 mt-12 sm:mt-16"
        >
          <div className="bg-apex-500 p-1">
            <div className="grid grid-cols-1 gap-1 bg-ink-1000 p-2 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr_auto]">
              <BookingField
                icon={<MapPin className="h-4 w-4" />}
                label="Pick-up location"
                value="London Heathrow (LHR)"
              />
              <BookingField icon={<Calendar className="h-4 w-4" />} label="Pick-up date" value="Fri, 14 Mar · 10:00" />
              <BookingField icon={<Calendar className="h-4 w-4" />} label="Return date" value="Mon, 17 Mar · 10:00" />
              <div className="flex items-center gap-3 px-4 py-2.5">
                <input
                  type="checkbox"
                  checked={returnSame}
                  onChange={(e) => setReturnSame(e.target.checked)}
                  className="h-4 w-4 accent-apex-500"
                  id="returnsame"
                />
                <label htmlFor="returnsame" className="cursor-pointer text-sm text-ink-200">
                  Return car to same location
                </label>
              </div>
              <button className="group inline-flex items-center justify-center gap-2 bg-apex-500 px-6 py-4 text-sm font-black uppercase tracking-wider text-ink-1000 transition-all duration-300 hover:bg-apex-400 active:scale-[0.98]">
                <Search className="h-4 w-4" />
                Search
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Quick chips */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-semibold uppercase tracking-widest text-ink-400">Popular:</span>
            {["Heathrow", "Gatwick", "Manchester", "Edinburgh", "Birmingham", "Dublin"].map((c) => (
              <button
                key={c}
                className="border border-white/10 bg-white/5 px-3 py-1.5 font-medium text-ink-200 transition-all hover:border-apex-500 hover:bg-apex-500/10 hover:text-white"
              >
                {c}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BookingField({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <button className="group flex flex-col items-start gap-0.5 px-4 py-3 text-left transition-colors hover:bg-white/[0.03]">
      <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-apex-500">
        {icon} {label}
      </span>
      <span className="text-sm font-bold text-white">{value}</span>
    </button>
  );
}

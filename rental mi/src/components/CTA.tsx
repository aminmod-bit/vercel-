import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section id="booking" className="relative overflow-hidden bg-ink-1000 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-apex-500/10 via-transparent to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-apex-500/20 blur-[150px] glow-pulse" />

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden border-2 border-apex-500 bg-ink-1000"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr]">
            <div className="relative p-8 sm:p-12 lg:p-16">
              <div className="mb-4 inline-flex items-center gap-2 bg-apex-500 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-ink-1000">
                <span className="h-1.5 w-1.5 animate-pulse bg-ink-1000" />
                Live · 240 cars available near you
              </div>
              <h2 className="text-balance text-4xl font-black leading-[1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Your next drive is{" "}
                <span className="text-apex-500">28 minutes</span> away.
              </h2>
              <p className="mt-5 max-w-md text-lg text-ink-300">
                Book a BMW M4 for $189/day. Or a Tesla Model 3 from $129. Or a 911 from $449.
                All delivered to your door, hotel, or airport.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 bg-apex-500 px-7 py-4 text-sm font-black uppercase tracking-wider text-ink-1000 transition-all duration-300 hover:bg-apex-400 active:scale-95"
                >
                  Search cars
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 border border-white/20 px-7 py-4 text-sm font-bold text-white transition-colors hover:border-white/50"
                >
                  <Phone className="h-4 w-4" />
                  Call concierge
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink-400">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Free cancellation
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> No card fees
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> 24/7 support
                </span>
              </div>
            </div>

            <div className="relative border-t-2 border-apex-500 bg-ink-900 p-8 sm:p-12 lg:border-l-2 lg:border-t-0">
              <div className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-apex-500">
                <MapPin className="h-3.5 w-3.5" /> Get the app
              </div>
              <h3 className="text-2xl font-black text-white sm:text-3xl">
                Manage every trip<br />from your pocket.
              </h3>
              <p className="mt-3 text-sm text-ink-300">
                Unlock, locate, extend, or return — all from the APEX app. Real-time
                support and one-tap rebooking.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href="#"
                  className="group flex items-center gap-3 border border-white/20 bg-ink-1000 px-4 py-3 transition-colors hover:border-apex-500"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" aria-hidden>
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div>
                    <div className="text-[10px] text-ink-400">Download on</div>
                    <div className="text-sm font-bold text-white">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-3 border border-white/20 bg-ink-1000 px-4 py-3 transition-colors hover:border-apex-500"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                    <path d="M3.5 2.5v19l8.5-9.5-8.5-9.5z" fill="#FF5A14" />
                    <path d="M3.5 2.5l11 6.5-2.5 2.5-8.5-9z" fill="#FFB547" />
                    <path d="M3.5 21.5l11-6.5-2.5-2.5-8.5 9z" fill="#FF7A2E" />
                    <path d="M14.5 9l5 2.5c1.5.75 1.5 2.25 0 3L14.5 17l-3-3 3-5z" fill="#fff" />
                  </svg>
                  <div>
                    <div className="text-[10px] text-ink-400">Get it on</div>
                    <div className="text-sm font-bold text-white">Google Play</div>
                  </div>
                </a>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-apex-500" />
                  <span className="text-ink-300">hello@apexdrive.com</span>
                </div>
                <div className="mt-2 flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-apex-500" />
                  <span className="text-ink-300">+44 20 4566 0700</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

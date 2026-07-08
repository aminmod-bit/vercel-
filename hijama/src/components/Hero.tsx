import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles, Star, ShieldCheck, Quote } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-emerald-700/25 via-emerald-600/10 to-transparent blur-3xl animate-float-slow" />
        <div className="absolute top-40 -right-24 h-[440px] w-[440px] rounded-full bg-gradient-to-br from-gold-400/30 via-sand-300/15 to-transparent blur-3xl animate-float-slower" />
        <div className="absolute inset-0 bg-grid opacity-[0.5]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream-50/40 to-cream-50" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          {/* Left content */}
          <div className="lg:col-span-7">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-white/60 px-3.5 py-1.5 text-xs font-medium text-emerald-800 shadow-sm backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
              </span>
              Now booking — Spring availability
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="mt-6 font-serif text-[2.7rem] font-medium leading-[1.05] tracking-tight text-ink-900 sm:text-6xl lg:text-[4.4rem]"
            >
              Ancient healing,{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-shimmer">reimagined</span>
                <svg
                  className="absolute -bottom-2 left-0 z-0 h-3 w-full text-gold-400/70"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M2 8 C 50 2, 150 2, 198 8"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="220"
                    initial={{ strokeDashoffset: 220 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1.4, delay: 0.8, ease: "easeOut" }}
                  />
                </svg>
              </span>{" "}
              for modern life.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-7 max-w-xl text-lg leading-relaxed text-ink-700"
            >
              Sakina Hijama blends the prophetic tradition of cupping therapy with
              clinical precision — easing chronic pain, restoring circulation, and
              renewing the body's natural balance in a calm, private sanctuary.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="#book"
                className="btn-shine group inline-flex items-center gap-2 rounded-full bg-emerald-900 px-6 py-3.5 text-sm font-semibold text-cream-50 shadow-xl shadow-emerald-900/20 transition hover:bg-emerald-800 hover:shadow-emerald-900/30"
              >
                Reserve your session
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#method"
                className="group inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-white/60 px-6 py-3.5 text-sm font-semibold text-emerald-900 backdrop-blur transition hover:border-emerald-900/30 hover:bg-white"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-900/10">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-800" />
                </span>
                Explore the method
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-10 flex flex-wrap items-center gap-6 text-sm text-ink-700"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    "from-emerald-700 to-emerald-500",
                    "from-gold-500 to-sand-400",
                    "from-emerald-800 to-emerald-600",
                    "from-sand-400 to-gold-400",
                  ].map((c, i) => (
                    <div
                      key={i}
                      className={`h-9 w-9 rounded-full border-2 border-cream-50 bg-gradient-to-br ${c} shadow-sm`}
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-gold-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                    <span className="ml-1 text-xs font-semibold text-ink-900">
                      4.98
                    </span>
                  </div>
                  <div className="text-xs text-ink-500">
                    2,400+ sessions completed
                  </div>
                </div>
              </div>
              <div className="hidden h-8 w-px bg-emerald-900/15 sm:block" />
              <div className="flex items-center gap-2 text-xs">
                <ShieldCheck className="h-4 w-4 text-emerald-700" />
                Certified • Sterile • Discreet
              </div>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 gap-6 border-t border-emerald-900/10 pt-10 sm:grid-cols-4"
        >
          {[
            { v: "12+", l: "Years of practice" },
            { v: "2,400+", l: "Sessions delivered" },
            { v: "98%", l: "Client satisfaction" },
            { v: "1:1", l: "Private treatment" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="text-center sm:text-left"
            >
              <div className="font-serif text-3xl font-medium tracking-tight text-emerald-900 sm:text-4xl">
                {s.v}
              </div>
              <div className="mt-1 text-sm text-ink-500">{s.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
      {/* Outer rotating ring */}
      <div className="absolute -inset-6">
        <svg
          viewBox="0 0 400 500"
          className="h-full w-full animate-spin-slow opacity-60"
        >
          <defs>
            <path
              id="circlePath"
              d="M 200, 200 m -160, 0 a 160,160 0 1,1 320,0 a 160,160 0 1,1 -320,0"
            />
          </defs>
          <text fill="#14513E" fontSize="11" letterSpacing="3" fontWeight="500">
            <textPath href="#circlePath">
              ✦ SAKINA HIJAMA ✦ RESTORE ✦ REVIVE ✦ RENEW ✦ SUNNAH HEALING ✦
            </textPath>
          </text>
        </svg>
      </div>

      {/* Card stack */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-2 overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br from-cream-100 via-cream-50 to-sand-300/40 shadow-2xl shadow-emerald-900/20"
      >
        {/* Decorative inner shapes */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br from-emerald-700/30 to-transparent blur-2xl" />
        <div className="absolute -right-12 -bottom-12 h-48 w-48 rounded-full bg-gradient-to-br from-gold-400/40 to-transparent blur-2xl" />

        {/* Centerpiece cupping illustration */}
        <div className="relative flex h-full w-full items-center justify-center">
          <CuppingArtwork />

          {/* Floating info chips */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="glass absolute left-4 top-6 flex items-center gap-2.5 rounded-full px-3 py-2 shadow-lg"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-700">
              <ShieldCheck className="h-3.5 w-3.5 text-cream-50" />
            </div>
            <div className="leading-tight">
              <div className="text-[10px] uppercase tracking-wider text-ink-500">
                Safety
              </div>
              <div className="text-xs font-semibold text-emerald-900">
                Medical grade
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="glass absolute right-4 top-20 flex items-center gap-2 rounded-2xl px-3 py-2 shadow-lg"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-500/20">
              <Sparkles className="h-3.5 w-3.5 text-gold-500" />
            </div>
            <div className="text-xs font-semibold text-emerald-900">
              <span className="text-gold-500">Sunnah</span> practice
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="glass-dark absolute bottom-6 left-4 right-4 rounded-2xl p-3.5 shadow-xl"
          >
            <div className="flex items-start gap-2.5">
              <Quote className="h-4 w-4 shrink-0 text-gold-400" />
              <p className="text-[11px] leading-relaxed text-cream-100/90">
                "Indeed in cupping there is a cure." — Prophetic tradition
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative blob behind */}
      <div className="absolute -right-6 top-12 -z-10 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-600/30 to-emerald-700/10 blur-2xl" />
      <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-full bg-gradient-to-br from-gold-400/40 to-sand-300/10 blur-2xl" />
    </div>
  );
}

function CuppingArtwork() {
  return (
    <div className="relative h-64 w-64 sm:h-72 sm:w-72">
      <svg viewBox="0 0 300 300" className="h-full w-full">
        <defs>
          <radialGradient id="cupBody" cx="50%" cy="35%">
            <stop offset="0%" stopColor="#F6F1E7" />
            <stop offset="55%" stopColor="#EDE3CF" />
            <stop offset="100%" stopColor="#C5A977" />
          </radialGradient>
          <linearGradient id="liquid" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7B1F2B" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#3F0F18" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="rim" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B8923E" />
            <stop offset="100%" stopColor="#7A5E2A" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#D4B26A" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#D4B26A" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Glow */}
        <circle cx="150" cy="150" r="140" fill="url(#glow)" />

        {/* Drop shadow */}
        <ellipse cx="150" cy="270" rx="80" ry="8" fill="#14513E" opacity="0.18" />

        {/* Cup body */}
        <path
          d="M 80 100 Q 80 240 150 250 Q 220 240 220 100 Z"
          fill="url(#cupBody)"
          stroke="#A88A56"
          strokeWidth="1.5"
        />

        {/* Liquid inside */}
        <path
          d="M 90 130 Q 90 235 150 245 Q 210 235 210 130 Z"
          fill="url(#liquid)"
          opacity="0.9"
        />

        {/* Cup rim */}
        <ellipse cx="150" cy="100" rx="70" ry="14" fill="url(#rim)" />
        <ellipse cx="150" cy="100" rx="64" ry="10" fill="#0E3B2E" />
        <ellipse cx="150" cy="98" rx="60" ry="8" fill="#1B6A52" />

        {/* Highlight on cup */}
        <path
          d="M 95 110 Q 92 180 105 235"
          stroke="#FBF8F3"
          strokeWidth="3"
          fill="none"
          opacity="0.55"
          strokeLinecap="round"
        />

        {/* Sparkles */}
        {[
          { x: 60, y: 80, s: 1 },
          { x: 240, y: 70, s: 0.8 },
          { x: 250, y: 180, s: 1.1 },
          { x: 50, y: 200, s: 0.9 },
        ].map((sp, i) => (
          <g key={i} transform={`translate(${sp.x} ${sp.y}) scale(${sp.s})`}>
            <path
              d="M 0 -8 L 1.5 -1.5 L 8 0 L 1.5 1.5 L 0 8 L -1.5 1.5 L -8 0 L -1.5 -1.5 Z"
              fill="#D4B26A"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

import { motion } from "framer-motion";
import {
  Search,
  Bookmark,
  Highlighter,
  Headphones,
  Languages,
  Cloud,
  Lock,
  Sparkles,
} from "lucide-react";
import { Reveal, SectionHeading, staggerContainer, staggerItem } from "./ui";

const features = [
  {
    icon: Search,
    title: "Cross-volume search",
    desc: "Find any passage, idea, or person across the entire library in milliseconds.",
  },
  {
    icon: Highlighter,
    title: "Margin notes",
    desc: "Highlight, annotate, and connect your thoughts across 12,000+ books.",
  },
  {
    icon: Bookmark,
    title: "Smart bookmarks",
    desc: "Save where you left off. Resume on any device, in any format.",
  },
  {
    icon: Headphones,
    title: "Narrated editions",
    desc: "Listen to histories read by award-winning narrators in studio quality.",
  },
  {
    icon: Languages,
    title: "120+ languages",
    desc: "Read ancient Greek, modern Mandarin, or anything in between.",
  },
  {
    icon: Cloud,
    title: "Offline reading",
    desc: "Your library is yours. Download once, read forever — even on a plane.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative bg-paper py-24 sm:py-36 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a96a]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Crafted for Readers"
          title={
            <>
              Every feature designed
              <br />
              for the love of <em className="italic font-light text-[#8a6a2f]">books</em>.
            </>
          }
          description="Six tools that disappear into the background — so the only thing between you and the next chapter is a single tap."
          light={false}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group relative rounded-2xl border border-[#1a1410]/8 bg-white p-7 hover:border-[#c9a96a]/40 transition-colors duration-300 overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9a96a]/0 via-[#c9a96a]/0 to-[#c9a96a]/0 group-hover:from-[#c9a96a]/5 group-hover:via-[#c9a96a]/3 group-hover:to-transparent transition-all duration-700" />

              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#c9a96a]/15 to-[#c9a96a]/5 border border-[#c9a96a]/20 group-hover:border-[#c9a96a]/50 group-hover:scale-110 transition-transform duration-300">
                  <f.icon className="h-5 w-5 text-[#8a6a2f]" strokeWidth={1.75} />
                </div>

                <h3 className="mt-5 font-serif text-xl sm:text-2xl font-semibold text-[#1a1410] tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-[#5a4f3c]">
                  {f.desc}
                </p>

                <div className="mt-5 inline-flex items-center gap-1 text-[12px] font-semibold text-[#8a6a2f] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300">
                  Learn more
                  <span>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight feature row */}
        <Reveal delay={0.2} className="mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1410] via-[#0b0a08] to-[#1a1410] p-8 sm:p-12 lg:p-16">
            {/* Decorative grid */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(201,169,106,0.15) 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#c9a96a]/25 bg-[#c9a96a]/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c9a96a]">
                  <Sparkles className="h-3 w-3" />
                  Coming this winter
                </div>
                <h3 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#f5efe6] leading-[1.1] tracking-tight">
                  The Library <em className="italic font-light text-[#c9a96a]">remembers</em> for you.
                </h3>
                <p className="mt-5 text-lg text-[#a89c84] leading-relaxed max-w-lg">
                  Our new AI-powered Memory weaves every book you've read into a living
                  graph of ideas. Ask a question, and the library answers with citations
                  across centuries.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f5efe6] px-5 py-3 text-[14px] font-semibold text-[#0b0a08] hover:bg-white transition-colors"
                  >
                    Join the waitlist
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#c9a96a]/25 px-5 py-3 text-[14px] font-medium text-[#f5efe6] hover:border-[#c9a96a]/50 transition-colors"
                  >
                    <Lock className="h-3.5 w-3.5" />
                    Private beta
                  </a>
                </div>
              </div>

              {/* Visual: floating book marks */}
              <div className="relative h-[400px] hidden lg:block">
                <div className="absolute inset-0">
                  {[
                    { x: "10%", y: "15%", label: "Greece, 480 BC", delay: 0 },
                    { x: "55%", y: "8%", label: "Rome, 44 BC", delay: 0.5 },
                    { x: "20%", y: "55%", label: "Constantinople, 1453", delay: 1 },
                    { x: "60%", y: "60%", label: "Paris, 1789", delay: 1.5 },
                    { x: "40%", y: "80%", label: "Tokyo, 1945", delay: 2 },
                  ].map((dot, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: dot.delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute"
                      style={{ left: dot.x, top: dot.y }}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 -m-2 rounded-full bg-[#c9a96a]/20 animate-ping" style={{ animationDelay: `${dot.delay}s` }} />
                        <div className="relative h-3 w-3 rounded-full bg-[#c9a96a] ring-4 ring-[#0b0a08]" />
                        <div className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-[#c9a96a]/20 bg-[#0b0a08]/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-[#e7c98a]">
                          {dot.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Connecting lines */}
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <motion.path
                      d="M 60 75 Q 200 30 350 50 Q 500 70 480 240 Q 460 360 320 340 Q 180 320 240 200"
                      stroke="url(#lineGradient)"
                      strokeWidth="1"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                    />
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#c9a96a" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#b04a2f" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { BookOpen, Bookmark, Highlighter, ChevronRight, Settings, Sun } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

export function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      id="library"
      ref={ref}
      className="relative bg-ink py-24 sm:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <motion.div style={{ y }} className="order-2 lg:order-1">
            <Reveal>
              <ReaderMockup />
            </Reveal>
          </motion.div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="The Reader"
              title={
                <>
                  A reading experience
                  <br />
                  <em className="italic font-light text-[#c9a96a]">worthy</em> of the words.
                </>
              }
              description="Type set by hand. Margins by the millimeter. Lighting that follows the time of day. We obsessed over the details so you can lose yourself in the story."
              align="left"
              light
            />

            <Reveal delay={0.3} className="mt-10 space-y-4">
              {[
                {
                  icon: Sun,
                  title: "Adaptive reading light",
                  text: "Screen warmth that follows the sun — warmer at dusk, cooler at noon.",
                },
                {
                  icon: Highlighter,
                  title: "Subtle annotations",
                  text: "Highlight, note, and revisit. Your margin thoughts, preserved forever.",
                },
                {
                  icon: Bookmark,
                  title: "Position memory",
                  text: "Page 247, paragraph 3. Exactly where you left it — on any device.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group flex items-start gap-4 rounded-2xl border border-[#c9a96a]/10 bg-white/[0.02] p-5 hover:border-[#c9a96a]/30 hover:bg-white/[0.04] transition-all"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c9a96a]/10 border border-[#c9a96a]/20 group-hover:bg-[#c9a96a]/20 transition-colors">
                    <item.icon className="h-4.5 w-4.5 text-[#c9a96a]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-[#f5efe6] tracking-tight">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[14px] text-[#a89c84] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReaderMockup() {
  const [highlighted, setHighlighted] = useState<number | null>(null);
  const [theme, setTheme] = useState<"light" | "sepia" | "dark">("sepia");

  const themes = {
    light: "from-white to-slate-50 text-slate-900 bg-white",
    sepia: "from-[#faf6ef] to-[#f0e9d8] text-[#2a231a]",
    dark: "from-[#1a1410] to-[#0b0a08] text-[#f5efe6]",
  };

  return (
    <div className="relative">
      {/* Ambient glow */}
      <div className="absolute -inset-10 bg-gradient-to-br from-[#c9a96a]/20 to-transparent blur-3xl rounded-full" />

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="relative will-change-transform"
      >
        {/* Browser chrome */}
        <div className="relative rounded-2xl border border-[#c9a96a]/15 bg-gradient-to-br from-[#1a1410] to-[#0b0a08] shadow-2xl shadow-black/60 overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center justify-between border-b border-[#c9a96a]/10 bg-[#0b0a08]/80 backdrop-blur-md px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-[#b04a2f]/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#c9a96a]/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#4a5d4a]/60" />
              </div>
              <div className="ml-3 flex items-center gap-2 text-[11px] text-[#8a7e6a]">
                <BookOpen className="h-3 w-3" />
                <span>history.library / the-histories / chapter-iii</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex bg-black/40 rounded-lg p-0.5 border border-white/10">
                {(["light", "sepia", "dark"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={`px-2 py-0.5 text-[9px] rounded-md transition-all ${
                      theme === t ? "bg-[#c9a96a] text-black font-bold" : "text-[#8a7e6a] hover:text-[#d4c8b0]"
                    }`}
                  >
                    {t.toUpperCase()}
                  </button>
                ))}
              </div>
              <Settings className="h-3.5 w-3.5 text-[#8a7e6a]" />
            </div>
          </div>

          {/* Content area */}
          <div className="grid grid-cols-12 min-h-[460px]">
            {/* Sidebar */}
            <div className="col-span-3 border-r border-[#c9a96a]/10 bg-[#0b0a08]/40 p-4 hidden sm:block">
              <div className="text-[9px] uppercase tracking-[0.2em] text-[#8a7e6a] mb-3">
                Contents
              </div>
              {[
                { n: "I", t: "Of the Persians", active: false },
                { n: "II", t: "Of the Egyptians", active: false },
                { n: "III", t: "Of the Scythians", active: true },
                { n: "IV", t: "Of Libya", active: false },
                { n: "V", t: "Of Greece", active: false },
              ].map((ch) => (
                <div
                  key={ch.n}
                  className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[11px] mb-1 cursor-pointer transition-colors ${
                    ch.active
                      ? "bg-[#c9a96a]/15 text-[#e7c98a]"
                      : "text-[#8a7e6a] hover:bg-white/5 hover:text-[#d4c8b0]"
                  }`}
                >
                  <span className="font-mono text-[10px]">{ch.n}</span>
                  <span className="font-serif">{ch.t}</span>
                  {ch.active && <ChevronRight className="h-3 w-3 ml-auto" />}
                </div>
              ))}

              <div className="mt-6 text-[9px] uppercase tracking-[0.2em] text-[#8a7e6a] mb-3">
                Notes
              </div>
              <div className="text-[10px] text-[#8a7e6a] leading-relaxed">
                <div className="border-l-2 border-[#c9a96a]/30 pl-2 mb-2 italic">
                  "Scythian customs — parallels with modern steppe..."
                </div>
                <div className="border-l-2 border-[#b04a2f]/30 pl-2 italic">
                  "Reread for thesis ch.2"
                </div>
              </div>
            </div>

            {/* Reading area */}
            <div className={`col-span-12 sm:col-span-9 p-6 sm:p-10 bg-gradient-to-br ${themes[theme]} relative transition-colors duration-500 overflow-hidden`}>
              <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

              <div className="relative max-w-md mx-auto">
                <div className="text-center mb-6">
                  <div className={`text-[9px] uppercase tracking-[0.3em] ${theme === 'dark' ? 'text-[#c9a96a]' : 'text-[#8a6a2f]'}`}>
                    Book III
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mt-1 italic tracking-tight">
                    Of the Scythians
                  </h3>
                  <div className={`mt-2 flex items-center justify-center gap-2 text-[10px] ${theme === 'dark' ? 'text-[#8a7e6a]' : 'text-[#5a4f3c]'}`}>
                    <span>Herodotus</span>
                    <span>·</span>
                    <span>440 BC</span>
                  </div>
                </div>

                <div className={`font-serif text-[12.5px] leading-[1.85] space-y-3 ${theme === 'dark' ? 'text-[#d4c8b0]' : 'text-[#2a231a]'}`}>
                  <p className={`text-[10px] uppercase tracking-[0.2em] mb-2 text-center ${theme === 'dark' ? 'text-[#c9a96a]' : 'text-[#8a6a2f]'}`}>
                    ¶ 17
                  </p>
                  <p>
                    Of all the nations of the world, the{" "}
                    <span
                      onClick={() => setHighlighted(highlighted === 1 ? null : 1)}
                      className={`cursor-pointer transition-all px-0.5 rounded ${
                        highlighted === 1
                          ? theme === 'dark' ? "bg-[#c9a96a]/30 text-white" : "bg-[#c9a96a]/40 text-[#1a1410]"
                          : theme === 'dark' ? "hover:bg-white/10" : "hover:bg-[#c9a96a]/20"
                      }`}
                    >
                      Scythians are the most remarkable
                    </span>{" "}
                    in the wisdom of their institutions and in the valour of their arms.
                  </p>
                  <p>
                    They are said to have sprung from the union of{" "}
                    <span
                      onClick={() => setHighlighted(highlighted === 2 ? null : 2)}
                      className={`cursor-pointer transition-all px-0.5 rounded ${
                        highlighted === 2
                          ? theme === 'dark' ? "bg-[#b04a2f]/30 text-white" : "bg-[#b04a2f]/30 text-[#1a1410]"
                          : theme === 'dark' ? "hover:bg-white/10" : "hover:bg-[#c9a96a]/20"
                      }`}
                    >
                      Targitaus, son of Zeus
                    </span>
                    , and a daughter of the river Borysthenes.
                  </p>
                  <p className={theme === 'dark' ? "text-[#8a7e6a]" : "text-[#5a4f3c]"}>
                    Their land, bounded by the Ister to the west and the Tanais to the
                    east, stretches as far as the eye can see, a great and open plain,
                    where the wind blows free and the grass never withers.
                  </p>
                </div>

                {/* Highlight indicator */}
                <AnimatePresence>
                {highlighted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`mt-4 rounded-lg border p-2.5 text-[10.5px] italic font-serif ${
                      theme === 'dark' ? "border-[#c9a96a]/30 bg-[#c9a96a]/10 text-[#d4c8b0]" : "border-[#c9a96a]/30 bg-[#c9a96a]/10 text-[#5a4f3c]"
                    }`}
                  >
                    "Wisdom of institutions" — saved to your notes
                  </motion.div>
                )}
                </AnimatePresence>

                {/* Page indicator */}
                <div className={`mt-6 flex items-center justify-between text-[10px] ${theme === 'dark' ? 'text-[#8a7e6a]' : 'text-[#5a4f3c]'}`}>
                  <span>Page 47</span>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`h-1 w-3 rounded-full ${
                          i === 2 ? "bg-[#c9a96a]" : theme === 'dark' ? "bg-white/10" : "bg-[#c9a96a]/20"
                        }`}
                      />
                    ))}
                  </div>
                  <span>of 320</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating annotations card */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute -right-4 sm:-right-8 -top-4 sm:-top-8 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="glass-dark rounded-xl p-3.5 shadow-2xl max-w-[200px] will-change-transform"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-[#c9a96a] animate-pulse" />
            <span className="text-[10px] font-semibold text-[#c9a96a]">New highlight</span>
          </div>
          <p className="font-serif text-[11.5px] text-[#d4c8b0] leading-snug italic">
            "The wind blows free and the grass never withers."
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

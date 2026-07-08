import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Reveal } from "./ui";

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 1]);

  return (
    <section ref={ref} className="relative bg-ink overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
        <motion.div
          style={{ y, opacity }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1a1410] via-[#0b0a08] to-[#1a1410] p-8 sm:p-16 lg:p-20"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-noise opacity-30" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(201,169,106,0.1) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-[#c9a96a]/20 to-transparent blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-[#b04a2f]/15 to-transparent blur-3xl" />

          {/* Floating book icons */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 sm:top-16 sm:right-20 hidden md:block opacity-30"
          >
            <BookOpen className="h-16 w-16 text-[#c9a96a]" strokeWidth={1} />
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-16 left-12 sm:left-24 hidden md:block opacity-20"
          >
            <BookOpen className="h-20 w-20 text-[#b04a2f]" strokeWidth={1} />
          </motion.div>

          <div className="relative max-w-3xl mx-auto text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c9a96a]/30 bg-[#c9a96a]/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c9a96a]">
                <Sparkles className="h-3 w-3" />
                14 days free · No credit card
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-7 font-serif text-4xl sm:text-6xl lg:text-7xl font-medium text-[#f5efe6] leading-[0.98] tracking-[-0.02em] text-balance">
                Open the doors to{" "}
                <em className="italic font-light text-gradient-gold">
                  5,000 years
                </em>{" "}
                of human thought.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-lg sm:text-xl text-[#a89c84] leading-relaxed max-w-2xl mx-auto text-pretty">
                Join 47,000 readers, writers, and thinkers who carry the library in
                their pocket. Start your free 14-day trial today.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="#"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#e7c98a] via-[#c9a96a] to-[#8a6a2f] px-7 py-4 text-[15px] font-semibold text-[#0b0a08] shadow-2xl shadow-[#c9a96a]/30 hover:shadow-[#c9a96a]/50 hover:scale-[1.02] transition-all btn-shine"
                >
                  Start your free trial
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </a>
                <a
                  href="#pricing"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-[#c9a96a]/25 bg-white/[0.04] backdrop-blur-md px-7 py-4 text-[15px] font-medium text-[#f5efe6] hover:bg-white/[0.08] hover:border-[#c9a96a]/50 transition-all"
                >
                  See pricing
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12.5px] text-[#8a7e6a]">
                <span className="flex items-center gap-1.5">
                  <span className="text-[#c9a96a]">✓</span> Cancel anytime
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#c9a96a]">✓</span> 30-day refund
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#c9a96a]">✓</span> Read offline
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#c9a96a]">✓</span> Keep your notes
                </span>
              </div>
            </Reveal>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

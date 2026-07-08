import { motion } from "framer-motion";
import { Brain, Clock, Compass, Quote } from "lucide-react";
import { Reveal, SectionHeading, staggerContainer, staggerItem } from "./ui";

const benefits = [
  {
    icon: Brain,
    stat: "3.2x",
    title: "Sharper thinking",
    text: "Readers of long-form history develop deeper analytical reasoning and richer context for every decision.",
  },
  {
    icon: Clock,
    stat: "23 min",
    title: "A day well spent",
    text: "The average member reads 23 minutes a day — and reports a 40% drop in stress within two weeks.",
  },
  {
    icon: Compass,
    stat: "12K",
    title: "Worlds to explore",
    text: "From the libraries of Alexandria to the streets of Edo — every chapter is a passport.",
  },
];

export function Benefits() {
  return (
    <section className="relative bg-paper py-24 sm:py-36 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a96a]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why It Matters"
          title={
            <>
              The books you read
              <br />
              become the <em className="italic font-light text-[#8a6a2f]">person</em> you are.
            </>
          }
          description="History is the longest-running case study in human behavior. Read it, and you carry 5,000 years of decisions with you."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-20 grid lg:grid-cols-3 gap-6"
        >
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group relative rounded-3xl border border-[#1a1410]/8 bg-white p-8 overflow-hidden transition-colors duration-300 hover:border-[#c9a96a]/40 hover:shadow-xl hover:shadow-[#c9a96a]/10"
            >
              {/* Decorative number */}
              <div className="absolute -right-4 -top-8 font-serif text-[180px] font-bold text-[#1a1410]/3 leading-none select-none">
                0{i + 1}
              </div>

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1a1410] to-[#0b0a08] shadow-lg">
                    <b.icon className="h-5 w-5 text-[#c9a96a]" strokeWidth={1.75} />
                  </div>
                  <div className="font-serif text-3xl font-semibold text-[#8a6a2f]">
                    {b.stat}
                  </div>
                </div>

                <h3 className="mt-8 font-serif text-2xl sm:text-3xl font-semibold text-[#1a1410] tracking-tight">
                  {b.title}
                </h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-[#5a4f3c]">
                  {b.text}
                </p>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a96a] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.div>
          ))}
        </motion.div>

        {/* Quote block */}
        <Reveal delay={0.3} className="mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1410] via-[#0b0a08] to-[#1a1410] p-8 sm:p-12 lg:p-16">
            <Quote className="absolute top-6 left-6 sm:top-10 sm:left-10 h-16 sm:h-24 w-16 sm:w-24 text-[#c9a96a]/10" strokeWidth={1} />
            <Quote className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 h-16 sm:h-24 w-16 sm:w-24 text-[#c9a96a]/10 rotate-180" strokeWidth={1} />

            <div className="relative max-w-3xl mx-auto text-center">
              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#f5efe6] leading-[1.35] font-light italic text-balance">
                "A reader lives a thousand lives before he dies. The man who never
                reads lives only one."
              </div>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="h-px w-8 bg-[#c9a96a]" />
                <span className="font-serif text-sm text-[#c9a96a] tracking-wide">
                  George R.R. Martin
                </span>
                <div className="h-px w-8 bg-[#c9a96a]" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

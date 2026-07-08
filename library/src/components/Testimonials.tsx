import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Reveal, SectionHeading, staggerContainer, staggerItem } from "./ui";

const testimonials = [
  {
    quote:
      "I used to read two books a year. History Library made me a reader again. The typography alone is worth the subscription.",
    name: "Eleanor Whitmore",
    role: "Editor-in-Chief, Lapham's Quarterly",
    avatar: "EW",
    color: "from-[#c9a96a] to-[#8a6a2f]",
  },
  {
    quote:
      "The search across 12,000 volumes is uncanny. I asked about 'silk roads' and got annotated excerpts from twelve centuries.",
    name: "Dr. Marcus Chen",
    role: "Historian, Cambridge",
    avatar: "MC",
    color: "from-[#b04a2f] to-[#6b2a1a]",
  },
  {
    quote:
      "It's the closest thing to a private reading room with a research librarian. I keep finding books I never knew I needed.",
    name: "Aisha Okonkwo",
    role: "Author, The Long Memory",
    avatar: "AO",
    color: "from-[#4a5d4a] to-[#2a3a2a]",
  },
  {
    quote:
      "I gave this to my father for his 70th. He calls it the best gift he's ever received. He reads Gibbon at breakfast now.",
    name: "James Thornton",
    role: "Reader since 2023",
    avatar: "JT",
    color: "from-[#6b3f6b] to-[#3a1f3a]",
  },
  {
    quote:
      "The narrated editions are studio-quality. I listen to Herodotus on long drives. It's made traffic almost enjoyable.",
    name: "Sofia Reyes",
    role: "Reader since 2024",
    avatar: "SR",
    color: "from-[#5a4a3a] to-[#3a2a1a]",
  },
  {
    quote:
      "Worth every cent. I deleted three other reading apps the day I subscribed. The curation is what keeps me.",
    name: "Tomás Lindqvist",
    role: "Designer, Stockholm",
    avatar: "TL",
    color: "from-[#c9a96a] to-[#8a6a2f]",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-ink py-24 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <SectionHeading
          eyebrow="Voices from the Library"
          title={
            <>
              Trusted by readers,
              <br />
              <em className="italic font-light text-[#c9a96a]">praised</em> by writers.
            </>
          }
          description="From Pulitzer finalists to Pulitzer juries — see why the world's most demanding readers choose History Library."
          light
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group relative rounded-2xl border border-[#c9a96a]/12 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-7 hover:border-[#c9a96a]/30 transition-colors duration-300"
            >
              <Quote className="absolute top-5 right-5 h-7 w-7 text-[#c9a96a]/15 group-hover:text-[#c9a96a]/30 transition-colors" strokeWidth={1.5} />

              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-[#c9a96a] text-[#c9a96a]"
                  />
                ))}
              </div>

              <p className="font-serif text-[16.5px] leading-relaxed text-[#f5efe6] text-pretty">
                "{t.quote}"
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div
                  className={`h-10 w-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center font-serif text-sm font-semibold text-white shadow-lg ring-2 ring-[#c9a96a]/20`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-[13.5px] font-semibold text-[#f5efe6]">
                    {t.name}
                  </div>
                  <div className="text-[11.5px] text-[#8a7e6a]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.3} className="mt-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              { v: "47K+", l: "Active readers" },
              { v: "4.9/5", l: "Average rating" },
              { v: "98%", l: "Renewal rate" },
              { v: "180+", l: "Countries" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#c9a96a]">
                  {s.v}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[#8a7e6a]">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

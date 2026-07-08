import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Star, Search } from "lucide-react";
import { useState, useEffect } from "react";

const books = [
  { title: "The Histories", author: "Herodotus", c1: "#c9a96a", c2: "#8a6a2f", year: "440 BC" },
  { title: "Republic", author: "Plato", c1: "#b04a2f", c2: "#6b2a1a", year: "380 BC" },
  { title: "Meditations", author: "Marcus Aurelius", c1: "#4a5d4a", c2: "#2a3a2a", year: "180 AD" },
  { title: "Iliad", author: "Homer", c1: "#6b3f6b", c2: "#3a1f3a", year: "800 BC" },
  { title: "Decline & Fall", author: "Gibbon", c1: "#5a4a3a", c2: "#3a2a1a", year: "1776" },
];

const searchSuggestions = [
  "The fall of Rome",
  "Ancient Greek philosophy",
  "Silk Road traders",
  "The Renaissance",
  "Byzantine Empire",
];

export function AnimatedHero() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  // Softer springs for smoother follow
  const orbX = useSpring(mouseX, { damping: 50, stiffness: 80 });
  const orbY = useSpring(mouseY, { damping: 50, stiffness: 80 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    let rafId: number | null = null;
    let pendingX = 0;
    let pendingY = 0;
    let lastUpdate = 0;

    const updateMouse = () => {
      mouseX.set(pendingX);
      mouseY.set(pendingY);
      rafId = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      pendingX = (e.clientX - innerWidth / 2) * 0.04;
      pendingY = (e.clientY - innerHeight / 2) * 0.04;
      // Throttle to ~60fps max
      const now = performance.now();
      if (now - lastUpdate > 16) {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(updateMouse);
        lastUpdate = now;
      } else if (!rafId) {
        rafId = requestAnimationFrame(updateMouse);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32 bg-ink grain">
      {/* Mouse-following orb - optimized */}
      <motion.div
        style={{ x: orbX, y: orbY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#c9a96a]/8 to-transparent blur-3xl pointer-events-none will-change-transform"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: y1, willChange: "transform" }}
          className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#c9a96a]/12 to-transparent blur-3xl"
        />
        <motion.div
          style={{ y: y2, willChange: "transform" }}
          className="absolute -bottom-40 -right-40 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-[#b04a2f]/8 to-transparent blur-3xl"
        />
      </div>

      <motion.div style={{ opacity }} className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="text-center"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="inline-flex"
          >
            <div className="group inline-flex items-center gap-2 rounded-full border border-[#c9a96a]/25 bg-[#c9a96a]/5 backdrop-blur-md px-4 py-1.5 text-[12px] font-medium text-[#e7c98a] hover:bg-[#c9a96a]/10 transition-colors cursor-pointer">
              <Sparkles className="h-3 w-3" />
              <span>12,000+ volumes. One timeless library.</span>
              <span className="text-[#c9a96a]">→</span>
            </div>
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-8 font-serif text-[44px] sm:text-7xl lg:text-[88px] font-medium leading-[0.95] tracking-[-0.03em] text-[#f5efe6] text-balance"
          >
            Read the books
            <br />
            <span className="italic font-light text-gradient-gold">that built</span> the world.
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mx-auto mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-[#b8a98c] text-pretty"
          >
            A curated digital library of the most influential history books ever
            written. Beautifully typeset, deeply searchable, and yours to keep —{" "}
            <span className="text-[#f5efe6]">forever</span>.
          </motion.p>

          {/* Interactive search */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-10 max-w-xl mx-auto"
          >
            <SearchBar />
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="#pricing"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#e7c98a] via-[#c9a96a] to-[#8a6a2f] px-7 py-4 text-[15px] font-semibold text-[#0b0a08] shadow-xl shadow-[#c9a96a]/25 hover:shadow-[#c9a96a]/50 hover:scale-[1.02] transition-all btn-shine"
            >
              Start your library
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </a>
            <a
              href="#explorer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-[#c9a96a]/25 bg-white/[0.03] backdrop-blur-md px-7 py-4 text-[15px] font-medium text-[#f5efe6] hover:bg-white/[0.08] hover:border-[#c9a96a]/50 transition-all"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#c9a96a]">
                <span className="absolute h-2 w-2 rounded-full bg-[#c9a96a] animate-ping" />
              </span>
              Explore the collection
            </a>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-[#8a7e6a]"
          >
            <div className="flex items-center gap-1.5">
              <div className="flex -space-x-1.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-6 w-6 rounded-full border-2 border-[#0b0a08] bg-gradient-to-br from-[#c9a96a] to-[#8a6a2f]"
                    style={{ opacity: 0.5 + i * 0.1 }}
                  />
                ))}
              </div>
              <span className="ml-1">47,000+ readers</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-[#8a7e6a]" />
            <div className="flex items-center gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-[#c9a96a] text-[#c9a96a]" />
              ))}
              <span className="ml-1.5">4.9 on App Store</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-[#8a7e6a]" />
            <span>30-day money back</span>
          </motion.div>
        </motion.div>

        {/* Book display */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 sm:mt-28"
        >
          <div className="relative mx-auto max-w-5xl">
            <BookShelf books={books} />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0a08] to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#8a7e6a]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-[#c9a96a] to-transparent"
        />
      </motion.div>
    </section>
  );
}

function SearchBar() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((i) => (i + 1) % searchSuggestions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative group">
      <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#c9a96a] via-[#b04a2f] to-[#c9a96a] opacity-30 blur-md transition-opacity duration-500 ${focused ? "opacity-70" : "group-hover:opacity-50"}`} />
      <div className="relative flex items-center rounded-2xl border border-[#c9a96a]/20 bg-[#0b0a08]/80 backdrop-blur-xl shadow-2xl overflow-hidden">
        <Search className="ml-4 h-4 w-4 text-[#c9a96a]" strokeWidth={2} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder=""
          className="flex-1 bg-transparent px-4 py-4 text-[14.5px] text-[#f5efe6] outline-none placeholder-transparent"
        />
        {!query && (
          <div className="absolute left-11 pointer-events-none text-[14.5px] text-[#8a7e6a] flex items-center">
            <motion.span
              key={placeholderIndex}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              Search{" "}
              <span className="text-[#c9a96a] italic font-serif">"{searchSuggestions[placeholderIndex]}"</span>
            </motion.span>
          </div>
        )}
        <button className="m-1.5 inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-br from-[#e7c98a] via-[#c9a96a] to-[#8a6a2f] px-4 py-2.5 text-[13px] font-semibold text-[#0b0a08] hover:scale-[1.02] transition-transform">
          Search
        </button>
      </div>
    </div>
  );
}

type BookType = { title: string; author: string; c1: string; c2: string; year: string };

function BookShelf({ books }: { books: BookType[] }) {
  return (
    <div className="relative">
      <div className="absolute inset-x-1/4 -bottom-8 h-32 bg-gradient-to-t from-[#c9a96a]/20 to-transparent blur-2xl" />

      <div className="relative grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-6 px-4">
        {books.map((book, i) => (
          <motion.div
            key={book.title}
            initial={{ opacity: 0, y: 40, rotateY: -30 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{
              duration: 1,
              delay: 0.6 + i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -12,
              rotateZ: i % 2 === 0 ? -2 : 2,
              transition: { duration: 0.4 },
            }}
            className="book-3d group cursor-pointer"
          >
            <div className="book-3d relative">
              <div className="absolute right-0 top-1 bottom-1 w-2 book-pages rounded-r-sm" />
              <div className="absolute right-1 top-1 bottom-1 w-1.5 book-pages rounded-r-sm" />

              <div
                className="book-cover relative aspect-[2/3] rounded-l-md rounded-r-sm p-4 flex flex-col justify-between overflow-hidden"
                style={
                  {
                    "--c1": book.c1,
                    "--c2": book.c2,
                  } as React.CSSProperties
                }
              >
                <div className="absolute inset-0 opacity-30 bg-noise" />

                <div className="relative">
                  <div className="text-[8px] sm:text-[9px] font-serif italic text-white/70 tracking-wider mb-1">
                    {book.author}
                  </div>
                  <div className="font-serif text-[13px] sm:text-[15px] font-semibold text-white leading-tight">
                    {book.title}
                  </div>
                </div>

                <div className="relative flex flex-col items-center gap-1.5">
                  <div className="h-px w-8 bg-white/40" />
                  <div className="h-1.5 w-1.5 rotate-45 border border-white/40" />
                  <div className="h-px w-8 bg-white/40" />
                </div>

                <div className="relative text-[8px] sm:text-[9px] font-mono text-white/60 tracking-widest">
                  {book.year}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 h-px bg-gradient-to-r from-transparent via-[#c9a96a]/40 to-transparent"
      />
    </div>
  );
}

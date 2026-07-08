import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Star, Calendar, Quote, ArrowRight, BookOpen } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

type Book = {
  id: number;
  title: string;
  author: string;
  year: string;
  c1: string;
  c2: string;
  category: string;
  rating: number;
  pages: number;
  description: string;
  quote: string;
  era: string;
};

const books: Book[] = [
  {
    id: 1,
    title: "The Histories",
    author: "Herodotus",
    year: "440 BC",
    c1: "#c9a96a",
    c2: "#8a6a2f",
    category: "Ancient",
    rating: 4.8,
    pages: 720,
    era: "Classical Antiquity",
    description: "Often considered the founding work of history, Herodotus's masterpiece chronicles the Greco-Persian Wars while exploring the cultures, geography, and customs of the known world.",
    quote: "Of all the struggles the Greeks waged, the greatest was the one against the Persians.",
  },
  {
    id: 2,
    title: "The Decline and Fall",
    author: "Edward Gibbon",
    year: "1776",
    c1: "#5a4a3a",
    c2: "#3a2a1a",
    category: "Modern",
    rating: 4.7,
    pages: 3456,
    era: "Enlightenment",
    description: "A monumental work tracing the collapse of the Roman Empire across 1,500 years — a sweeping meditation on civilization, religion, and the cycles of history.",
    quote: "History is indeed little more than the register of the crimes, follies, and misfortunes of mankind.",
  },
  {
    id: 3,
    title: "Meditations",
    author: "Marcus Aurelius",
    year: "180 AD",
    c1: "#4a5d4a",
    c2: "#2a3a2a",
    category: "Philosophy",
    rating: 4.9,
    pages: 254,
    era: "Imperial Rome",
    description: "The private journal of the Roman emperor and Stoic philosopher — a timeless guide to self-discipline, virtue, and the art of living well.",
    quote: "You have power over your mind — not outside events. Realize this, and you will find strength.",
  },
  {
    id: 4,
    title: "A People's History",
    author: "Howard Zinn",
    year: "1980",
    c1: "#b04a2f",
    c2: "#6b2a1a",
    category: "Modern",
    rating: 4.6,
    pages: 729,
    era: "Contemporary",
    description: "Tells America's story from the perspective of women, workers, and ordinary people — a radical re-examination of the nation's past.",
    quote: "History is not a matter of dates and battles. It is about people and their dreams.",
  },
  {
    id: 5,
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    year: "1997",
    c1: "#6b3f6b",
    c2: "#3a1f3a",
    category: "Science",
    rating: 4.5,
    pages: 528,
    era: "Contemporary",
    description: "A Pulitzer-winning exploration of why Eurasian civilizations conquered others — geography, agriculture, and the deep currents of human history.",
    quote: "History followed different courses for different peoples because of differences among peoples' environments.",
  },
  {
    id: 6,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    year: "2011",
    c1: "#8a6a2f",
    c2: "#c9a96a",
    category: "Modern",
    rating: 4.7,
    pages: 443,
    era: "Contemporary",
    description: "A breathtaking account of how Homo sapiens came to dominate the world — through cognitive revolution, agricultural revolution, and the unifying power of stories.",
    quote: "We did not domesticate wheat. It domesticated us.",
  },
  {
    id: 7,
    title: "The Republic",
    author: "Plato",
    year: "380 BC",
    c1: "#b04a2f",
    c2: "#6b2a1a",
    category: "Philosophy",
    rating: 4.8,
    pages: 416,
    era: "Classical Antiquity",
    description: "Plato's masterwork on justice, the ideal state, and the nature of reality — a dialogue that has shaped Western thought for 2,400 years.",
    quote: "The beginning is the most important part of the work.",
  },
  {
    id: 8,
    title: "The Iliad",
    author: "Homer",
    year: "800 BC",
    c1: "#6b3f6b",
    c2: "#3a1f3a",
    category: "Ancient",
    rating: 4.6,
    pages: 683,
    era: "Archaic Greece",
    description: "The oldest surviving work of Western literature — an epic of wrath, honor, and mortality set during the Trojan War.",
    quote: "Rage — Goddess, sing the rage of Peleus' son Achilles.",
  },
];

const categories = ["All", "Ancient", "Philosophy", "Modern", "Science"];

export function BookExplorer() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBooks =
    activeCategory === "All"
      ? books
      : books.filter((b) => b.category === activeCategory);

  return (
    <section id="explorer" className="relative bg-paper py-24 sm:py-36 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a96a]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Featured Collection"
          title={
            <>
              Explore the <em className="italic font-light text-[#8a6a2f]">library</em>.
            </>
          }
          description="Click any volume to open a sample. Eight of the most influential works in human history — at your fingertips."
        />

        {/* Category filter */}
        <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
                activeCategory === cat
                  ? "text-[#f5efe6]"
                  : "text-[#5a4f3c] hover:text-[#1a1410]"
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="cat-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1a1410] to-[#0b0a08]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative">{cat}</span>
            </button>
          ))}
        </Reveal>

        {/* Books grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredBooks.map((book, i) => (
              <motion.button
                key={book.id}
                layout="position"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setSelectedBook(book)}
                className="group text-left cursor-pointer will-change-transform"
              >
                <div className="book-3d">
                  <div className="book-3d relative">
                    <div className="absolute right-0 top-1 bottom-1 w-2 book-pages rounded-r-sm" />
                    <div className="absolute right-1 top-1 bottom-1 w-1.5 book-pages rounded-r-sm" />

                    <div
                      className="book-cover relative aspect-[2/3] rounded-l-md rounded-r-sm p-3 sm:p-4 flex flex-col justify-between overflow-hidden"
                      style={
                        {
                          "--c1": book.c1,
                          "--c2": book.c2,
                        } as React.CSSProperties
                      }
                    >
                      <div className="absolute inset-0 opacity-30 bg-noise" />

                      <div className="relative">
                        <div className="text-[7px] sm:text-[8px] font-serif italic text-white/70 tracking-wider mb-0.5">
                          {book.author}
                        </div>
                        <div className="font-serif text-[11px] sm:text-[14px] font-semibold text-white leading-tight">
                          {book.title}
                        </div>
                      </div>

                      <div className="relative flex flex-col items-center gap-1">
                        <div className="h-px w-6 sm:w-8 bg-white/40" />
                        <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 rotate-45 border border-white/40" />
                        <div className="h-px w-6 sm:w-8 bg-white/40" />
                      </div>

                      <div className="relative flex items-center justify-between">
                        <div className="text-[7px] sm:text-[8px] font-mono text-white/60 tracking-widest">
                          {book.year}
                        </div>
                        <div className="flex items-center gap-0.5">
                          <Star className="h-2 w-2 sm:h-2.5 sm:w-2.5 fill-white text-white" />
                          <span className="text-[7px] sm:text-[8px] text-white/80 font-mono">
                            {book.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Book modal */}
      <AnimatePresence>
        {selectedBook && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBook(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-[#1a1410] via-[#0b0a08] to-[#1a1410] border border-[#c9a96a]/20 shadow-2xl"
            >
              <button
                onClick={() => setSelectedBook(null)}
                className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#f5efe6] hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="grid sm:grid-cols-5 gap-0">
                {/* Book cover */}
                <div className="sm:col-span-2 p-8 sm:p-10 flex items-center justify-center bg-gradient-to-br from-black/40 to-transparent">
                  <div className="book-3d">
                    <div className="book-3d relative">
                      <div className="absolute right-0 top-1 bottom-1 w-3 book-pages rounded-r-sm" />
                      <div
                        className="book-cover relative w-48 aspect-[2/3] rounded-l-md rounded-r-sm p-5 flex flex-col justify-between overflow-hidden"
                        style={
                          {
                            "--c1": selectedBook.c1,
                            "--c2": selectedBook.c2,
                          } as React.CSSProperties
                        }
                      >
                        <div className="absolute inset-0 opacity-30 bg-noise" />

                        <div className="relative">
                          <div className="text-[10px] font-serif italic text-white/70 tracking-wider mb-1">
                            {selectedBook.author}
                          </div>
                          <div className="font-serif text-[20px] font-semibold text-white leading-tight">
                            {selectedBook.title}
                          </div>
                        </div>

                        <div className="relative flex flex-col items-center gap-1.5">
                          <div className="h-px w-12 bg-white/40" />
                          <div className="h-2 w-2 rotate-45 border border-white/40" />
                          <div className="h-px w-12 bg-white/40" />
                        </div>

                        <div className="relative text-[10px] font-mono text-white/60 tracking-widest">
                          {selectedBook.year}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Book details */}
                <div className="sm:col-span-3 p-8 sm:p-10">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#c9a96a] font-semibold mb-2">
                    {selectedBook.era} · {selectedBook.category}
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#f5efe6] leading-tight tracking-tight">
                    {selectedBook.title}
                  </h3>
                  <div className="mt-2 text-[15px] text-[#a89c84] italic font-serif">
                    by {selectedBook.author}
                  </div>

                  {/* Stats */}
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {[
                      { icon: Star, label: "Rating", value: selectedBook.rating },
                      { icon: BookOpen, label: "Pages", value: selectedBook.pages },
                      { icon: Calendar, label: "Year", value: selectedBook.year },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl border border-[#c9a96a]/10 bg-white/[0.02] p-3 text-center"
                      >
                        <stat.icon className="h-3.5 w-3.5 text-[#c9a96a] mx-auto mb-1" strokeWidth={1.75} />
                        <div className="font-serif text-lg font-semibold text-[#f5efe6]">
                          {stat.value}
                        </div>
                        <div className="text-[10px] uppercase tracking-wider text-[#8a7e6a]">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 text-[14.5px] leading-relaxed text-[#d4c8b0]">
                    {selectedBook.description}
                  </p>

                  {/* Quote */}
                  <div className="mt-6 rounded-xl border border-[#c9a96a]/15 bg-gradient-to-br from-[#c9a96a]/5 to-transparent p-4">
                    <Quote className="h-4 w-4 text-[#c9a96a] mb-2" strokeWidth={1.5} />
                    <p className="font-serif text-[14px] italic text-[#e7c98a] leading-relaxed">
                      "{selectedBook.quote}"
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 flex flex-col sm:flex-row gap-2">
                    <a
                      href="#pricing"
                      onClick={() => setSelectedBook(null)}
                      className="group flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#e7c98a] via-[#c9a96a] to-[#8a6a2f] px-4 py-3 text-[13.5px] font-semibold text-[#0b0a08] shadow-lg shadow-[#c9a96a]/30 hover:shadow-[#c9a96a]/50 transition-all btn-shine"
                    >
                      Read with subscription
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
                    </a>
                    <button
                      onClick={() => setSelectedBook(null)}
                      className="rounded-xl border border-[#c9a96a]/20 bg-white/5 px-4 py-3 text-[13.5px] font-medium text-[#f5efe6] hover:bg-white/10 transition-colors"
                    >
                      Preview sample
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

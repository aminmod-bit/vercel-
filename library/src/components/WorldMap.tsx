import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Reveal, SectionHeading } from "./ui";
import { Calendar, MapPin, X } from "lucide-react";

type Event = {
  id: number;
  x: number; // percentage
  y: number; // percentage
  title: string;
  era: string;
  year: string;
  region: string;
  description: string;
  books: string[];
  color: string;
};

const events: Event[] = [
  {
    id: 1,
    x: 53,
    y: 38,
    title: "The Athenian Experiment",
    era: "Classical Antiquity",
    year: "508 BC",
    region: "Greece",
    description: "Birthplace of democracy. Cleisthenes reforms the constitution, creating the world's first known democracy.",
    books: ["The Histories", "Republic", "The Iliad"],
    color: "#c9a96a",
  },
  {
    id: 2,
    x: 51,
    y: 36,
    title: "Roman Republic Founded",
    era: "Classical Antiquity",
    year: "509 BC",
    region: "Italy",
    description: "The last Roman king is overthrown, giving birth to a republic that would dominate the Mediterranean for 500 years.",
    books: ["The Decline and Fall", "Meditations"],
    color: "#b04a2f",
  },
  {
    id: 3,
    x: 65,
    y: 35,
    title: "The Silk Road Opens",
    era: "Antiquity",
    year: "130 BC",
    region: "Central Asia",
    description: "Trade routes connecting China to the Mediterranean open, exchanging silk, spices, ideas, and religions.",
    books: ["Sapiens", "Guns, Germs, and Steel"],
    color: "#c9a96a",
  },
  {
    id: 4,
    x: 48,
    y: 32,
    title: "Fall of Rome",
    era: "Late Antiquity",
    year: "476 AD",
    region: "Italy",
    description: "The Western Roman Empire falls to Odoacer, ending nearly 1,000 years of Roman dominance in the West.",
    books: ["The Decline and Fall"],
    color: "#b04a2f",
  },
  {
    id: 5,
    x: 78,
    y: 42,
    title: "Tang Dynasty Golden Age",
    era: "Medieval",
    year: "618 AD",
    region: "China",
    description: "A golden age of Chinese civilization, with poetry, art, and technology flourishing across a vast empire.",
    books: ["Sapiens"],
    color: "#4a5d4a",
  },
  {
    id: 6,
    x: 49,
    y: 30,
    title: "Magna Carta Signed",
    era: "Medieval",
    year: "1215",
    region: "England",
    description: "King John seals the Magna Carta at Runnymede, establishing limits on royal power and seeds of constitutional law.",
    books: ["A People's History"],
    color: "#6b3f6b",
  },
  {
    id: 7,
    x: 55,
    y: 32,
    title: "Black Death Strikes",
    era: "Medieval",
    year: "1347",
    region: "Europe",
    description: "The plague kills 30-60% of Europe's population, transforming medieval society, labor, and religion.",
    books: ["Sapiens", "Guns, Germs, and Steel"],
    color: "#5a4a3a",
  },
  {
    id: 8,
    x: 75,
    y: 45,
    title: "Edo Period Begins",
    era: "Early Modern",
    year: "1603",
    region: "Japan",
    description: "Tokugawa Ieyasu unifies Japan, beginning 250 years of peace, isolation, and cultural flowering.",
    books: ["Sapiens"],
    color: "#8a6a2f",
  },
  {
    id: 9,
    x: 50,
    y: 31,
    title: "French Revolution",
    era: "Modern",
    year: "1789",
    region: "France",
    description: "Storming of the Bastille ignites a revolution that would reshape Europe and inspire movements worldwide.",
    books: ["A People's History", "Sapiens"],
    color: "#b04a2f",
  },
  {
    id: 10,
    x: 22,
    y: 40,
    title: "American Revolution",
    era: "Modern",
    year: "1776",
    region: "United States",
    description: "Thirteen colonies declare independence from Britain, creating a new republic based on Enlightenment ideals.",
    books: ["A People's History"],
    color: "#c9a96a",
  },
  {
    id: 11,
    x: 85,
    y: 55,
    title: "Meiji Restoration",
    era: "Modern",
    year: "1868",
    region: "Japan",
    description: "Japan rapidly modernizes and westernizes, transforming from feudal society to industrial power in one generation.",
    books: ["Guns, Germs, and Steel"],
    color: "#4a5d4a",
  },
  {
    id: 12,
    x: 60,
    y: 50,
    title: "World War I",
    era: "Modern",
    year: "1914",
    region: "Europe",
    description: "The Great War shatters the old European order, killing millions and remaking the global map.",
    books: ["Sapiens", "Guns, Germs, and Steel"],
    color: "#6b3f6b",
  },
];

export function WorldMap() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [activeEra, setActiveEra] = useState<string>("All");

  const eras = ["All", "Antiquity", "Medieval", "Early Modern", "Modern"];

  const filteredEvents =
    activeEra === "All"
      ? events
      : events.filter((e) => e.era.includes(activeEra));

  return (
    <section className="relative bg-ink py-24 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <SectionHeading
          eyebrow="Cartography of Knowledge"
          title={
            <>
              Twelve turning points.
              <br />
              <em className="italic font-light text-[#c9a96a]">One world</em> transformed.
            </>
          }
          description="Click any marker to discover the moment, the place, and the books that tell its story. A curated journey through 2,500 years of human history."
          light
        />

        {/* Era filter */}
        <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {eras.map((era) => (
            <button
              key={era}
              onClick={() => setActiveEra(era)}
              className={`relative px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
                activeEra === era
                  ? "text-[#f5efe6]"
                  : "text-[#8a7e6a] hover:text-[#d4c8b0]"
              }`}
            >
              {activeEra === era && (
                <motion.div
                  layoutId="era-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-[#c9a96a] to-[#8a6a2f]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{era}</span>
            </button>
          ))}
        </Reveal>

        {/* Map */}
        <Reveal delay={0.3} className="mt-12">
          <div className="relative aspect-[2/1] rounded-3xl border border-[#c9a96a]/15 bg-gradient-to-br from-[#15110b] to-[#0b0a08] overflow-hidden">
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(201,169,106,0.15) 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Simplified world map (SVG) */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 50"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Continents - simplified shapes */}
              <g fill="rgba(201, 169, 106, 0.08)" stroke="rgba(201, 169, 106, 0.25)" strokeWidth="0.1">
                {/* North America */}
                <path d="M 8,8 L 25,8 L 28,15 L 25,22 L 20,28 L 12,25 L 8,18 Z" />
                {/* South America */}
                <path d="M 22,28 L 30,30 L 32,40 L 28,48 L 24,45 L 22,38 Z" />
                {/* Europe */}
                <path d="M 45,10 L 55,10 L 58,18 L 50,22 L 45,18 Z" />
                {/* Africa */}
                <path d="M 47,22 L 58,22 L 60,32 L 55,42 L 50,38 L 47,30 Z" />
                {/* Asia */}
                <path d="M 58,8 L 88,8 L 92,18 L 88,25 L 78,28 L 70,25 L 60,20 Z" />
                {/* India */}
                <path d="M 65,25 L 72,25 L 72,32 L 68,32 Z" />
                {/* Southeast Asia */}
                <path d="M 75,28 L 85,28 L 85,35 L 78,35 Z" />
                {/* Australia */}
                <path d="M 80,38 L 92,38 L 92,45 L 84,45 Z" />
              </g>
            </svg>

            {/* Event markers */}
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event, i) => (
                <motion.button
                  key={event.id}
                  layout
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.4, type: "spring", damping: 15 }}
                  onClick={() => setSelectedEvent(event)}
                  className="absolute group cursor-pointer"
                  style={{ left: `${event.x}%`, top: `${event.y}%`, transform: "translate(-50%, -50%)" }}
                >
                  <div className="relative">
                    <div
                      className="absolute inset-0 -m-2 rounded-full animate-ping opacity-50"
                      style={{ backgroundColor: event.color }}
                    />
                    <div
                      className="relative h-3 w-3 rounded-full ring-4 ring-[#0b0a08] transition-transform group-hover:scale-150"
                      style={{ backgroundColor: event.color }}
                    />
                    <div className="absolute left-1/2 -translate-x-1/2 -top-10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      <div className="rounded-md border border-[#c9a96a]/30 bg-[#0b0a08]/95 backdrop-blur-md px-2 py-1 text-[10px] font-semibold text-[#e7c98a] shadow-lg">
                        {event.year}
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>

      {/* Event modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl bg-gradient-to-br from-[#1a1410] via-[#0b0a08] to-[#1a1410] border border-[#c9a96a]/20 shadow-2xl p-6 sm:p-8"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#f5efe6] hover:bg-white/10 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-1.5 w-1.5 rounded-full" style={{ backgroundColor: selectedEvent.color }} />
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#c9a96a] font-semibold">
                  {selectedEvent.era}
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#f5efe6] leading-tight tracking-tight">
                {selectedEvent.title}
              </h3>

              <div className="mt-3 flex flex-wrap items-center gap-3 text-[13px] text-[#a89c84]">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{selectedEvent.year}</span>
                </div>
                <div className="h-1 w-1 rounded-full bg-[#5a5040]" />
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{selectedEvent.region}</span>
                </div>
              </div>

              <p className="mt-5 text-[14.5px] leading-relaxed text-[#d4c8b0]">
                {selectedEvent.description}
              </p>

              <div className="mt-5 pt-5 border-t border-[#c9a96a]/10">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#8a7e6a] font-semibold mb-3">
                  Read more
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedEvent.books.map((book) => (
                    <span
                      key={book}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#c9a96a]/10 border border-[#c9a96a]/20 px-3 py-1 text-[12px] text-[#e7c98a]"
                    >
                      {book}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

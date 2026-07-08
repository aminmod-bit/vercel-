import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Sparkles, RotateCcw } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

type Question = {
  q: string;
  options: string[];
  result: string[];
};

const questions: Question[] = [
  {
    q: "A great library burns. What do you save?",
    options: [
      "The oldest scroll",
      "The most referenced book",
      "The rarest manuscript",
      "The most beautiful codex",
    ],
    result: ["Herodotus", "Plato", "Marcus Aurelius", "Homer"],
  },
  {
    q: "Your ideal evening?",
    options: [
      "Reading by candlelight",
      "Debating at a tavern",
      "Walking through old ruins",
      "Writing letters to friends",
    ],
    result: ["Marcus Aurelius", "Socrates", "Plato", "Cicero"],
  },
  {
    q: "Pick a weapon of choice:",
    options: [
      "The quill",
      "The shield",
      "The compass",
      "The hourglass",
    ],
    result: ["Homer", "Alexander", "Marco Polo", "Augustine"],
  },
  {
    q: "What legacy do you want to leave?",
    options: [
      "A new way of thinking",
      "A conquered empire",
      "A great work of art",
      "A just society",
    ],
    result: ["Plato", "Caesar", "Homer", "Cicero"],
  },
];

type Result = {
  name: string;
  era: string;
  description: string;
  traits: string[];
  book: string;
  color: string;
};

const results: Record<string, Result> = {
  "Herodotus": {
    name: "Herodotus",
    era: "The Father of History · 484 BC",
    description: "You are a curious observer, drawn to the strange and wonderful. You collect stories, weave them into tapestries, and find meaning in the unfamiliar.",
    traits: ["Curious", "Wandering", "Storyteller"],
    book: "The Histories",
    color: "#c9a96a",
  },
  "Plato": {
    name: "Plato",
    era: "The Philosopher · 428 BC",
    description: "You see beyond the surface. Where others see shadows, you seek the forms of truth. Ideas are your weapons, and the academy is your arena.",
    traits: ["Visionary", "Idealist", "Teacher"],
    book: "The Republic",
    color: "#b04a2f",
  },
  "Marcus Aurelius": {
    name: "Marcus Aurelius",
    era: "The Stoic Emperor · 121 AD",
    description: "You carry weight with grace. Calm in the storm, you master yourself before attempting to master the world. Duty and virtue are your compass.",
    traits: ["Disciplined", "Reflective", "Resilient"],
    book: "Meditations",
    color: "#4a5d4a",
  },
  "Homer": {
    name: "Homer",
    era: "The Epic Bard · 800 BC",
    description: "You feel the world deeply. Joy, rage, sorrow — you experience all at full volume. Your words have the power to make the gods weep.",
    traits: ["Passionate", "Imaginative", "Memorable"],
    book: "The Iliad",
    color: "#6b3f6b",
  },
  "Socrates": {
    name: "Socrates",
    era: "The Gadfly of Athens · 470 BC",
    description: "You question everything — especially yourself. Comfortable in uncertainty, you understand that wisdom begins with knowing what you don't know.",
    traits: ["Inquisitive", "Witty", "Uncomfortable"],
    book: "The Apology",
    color: "#5a4a3a",
  },
  "Alexander": {
    name: "Alexander the Great",
    era: "The Conqueror · 356 BC",
    description: "You move fast, dream bigger, and refuse to accept limits. The known world is too small. You're already planning the next campaign.",
    traits: ["Bold", "Driven", "Charismatic"],
    book: "Anabasis",
    color: "#b04a2f",
  },
  "Marco Polo": {
    name: "Marco Polo",
    era: "The Explorer · 1254",
    description: "You are at home everywhere and nowhere. Trade routes, languages, customs — you collect them all and bring back stories that change maps.",
    traits: ["Adventurous", "Adaptable", "Worldly"],
    book: "The Travels",
    color: "#8a6a2f",
  },
  "Augustine": {
    name: "Augustine of Hippo",
    era: "The Theologian · 354 AD",
    description: "You wrestle with time, memory, and meaning. Confident in faith but honest about doubt, you turn inner struggle into universal truth.",
    traits: ["Introspective", "Devout", "Profound"],
    book: "Confessions",
    color: "#6b3f6b",
  },
  "Caesar": {
    name: "Julius Caesar",
    era: "The Dictator · 100 BC",
    description: "Decisive, ambitious, supremely capable. You build, you conquer, you write about yourself in the third person. History bends around your will.",
    traits: ["Strategic", "Ambitious", "Authoritative"],
    book: "The Gallic Wars",
    color: "#b04a2f",
  },
  "Cicero": {
    name: "Cicero",
    era: "The Orator · 106 BC",
    description: "Words are your weapon, your art, your legacy. You defend the Republic, expose the corrupt, and never miss a chance for a perfect phrase.",
    traits: ["Eloquent", "Principled", "Political"],
    book: "On the Republic",
    color: "#4a5d4a",
  },
};

export function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (result: string) => {
    const newAnswers = [...answers, result];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 250);
    } else {
      setTimeout(() => setShowResult(true), 250);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  // Calculate most picked character
  const finalResult = (() => {
    if (answers.length === 0) return results["Plato"];
    const counts: Record<string, number> = {};
    answers.forEach((a) => (counts[a] = (counts[a] || 0) + 1));
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    return results[sorted[0][0]] || results["Plato"];
  })();

  return (
    <section className="relative bg-paper py-24 sm:py-36 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a96a]/30 to-transparent" />

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Discover Yourself"
          title={
            <>
              Which ancient thinker
              <br />
              <em className="italic font-light text-[#8a6a2f]">are you</em>?
            </>
          }
          description="Four questions. One timeless answer. Discover which historical figure shares your worldview — and which book to read first."
        />

        <Reveal delay={0.2} className="mt-12">
          <div className="relative rounded-3xl border border-[#1a1410]/8 bg-white overflow-hidden shadow-2xl shadow-[#c9a96a]/10">
            {/* Progress bar */}
            {!showResult && (
              <div className="h-1 bg-[#1a1410]/5">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#e7c98a] via-[#c9a96a] to-[#8a6a2f]"
                  initial={{ width: 0 }}
                  animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            )}

            <div className="p-6 sm:p-10 min-h-[400px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!showResult ? (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#8a6a2f] font-semibold mb-3">
                      Question {step + 1} of {questions.length}
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1a1410] leading-tight tracking-tight mb-7">
                      {questions[step].q}
                    </h3>
                    <div className="space-y-2.5">
                      {questions[step].options.map((option, i) => (
                        <motion.button
                          key={option}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06 }}
                          whileHover={{ x: 4, backgroundColor: "rgba(201, 169, 106, 0.08)" }}
                          onClick={() => handleAnswer(questions[step].result[i])}
                          className="group w-full flex items-center justify-between gap-3 rounded-xl border border-[#1a1410]/10 bg-white px-4 py-3.5 text-left text-[14.5px] text-[#1a1410] hover:border-[#c9a96a]/40 transition-all"
                        >
                          <span>{option}</span>
                          <ArrowRight className="h-4 w-4 text-[#8a6a2f] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" strokeWidth={2.5} />
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", damping: 12 }}
                      className="inline-flex items-center gap-2 rounded-full border border-[#c9a96a]/30 bg-[#c9a96a]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a6a2f] mb-4"
                    >
                      <Sparkles className="h-3 w-3" />
                      You are
                    </motion.div>

                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="font-serif text-4xl sm:text-5xl font-semibold leading-[1] tracking-tight"
                      style={{ color: finalResult.color }}
                    >
                      {finalResult.name}
                    </motion.h3>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="mt-2 text-[13px] uppercase tracking-[0.18em] text-[#5a4f3c] font-semibold"
                    >
                      {finalResult.era}
                    </motion.div>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mt-6 text-[15px] sm:text-base leading-relaxed text-[#5a4f3c] max-w-md mx-auto"
                    >
                      {finalResult.description}
                    </motion.p>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="mt-6 flex flex-wrap items-center justify-center gap-2"
                    >
                      {finalResult.traits.map((trait) => (
                        <span
                          key={trait}
                          className="inline-flex items-center rounded-full bg-[#1a1410]/5 px-3 py-1 text-[12px] font-medium text-[#1a1410]"
                        >
                          {trait}
                        </span>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
                    >
                      <a
                        href="#pricing"
                        className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#e7c98a] via-[#c9a96a] to-[#8a6a2f] px-5 py-3 text-[14px] font-semibold text-[#0b0a08] shadow-lg shadow-[#c9a96a]/30 hover:shadow-[#c9a96a]/50 transition-all btn-shine"
                      >
                        Read {finalResult.book}
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
                      </a>
                      <button
                        onClick={reset}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#1a1410]/10 bg-white px-5 py-3 text-[14px] font-medium text-[#1a1410] hover:bg-[#1a1410]/5 transition-colors"
                      >
                        <RotateCcw className="h-3.5 w-3.5" />
                        Retake
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

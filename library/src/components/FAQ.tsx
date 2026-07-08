import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const faqs = [
  {
    q: "What exactly is in the library?",
    a: "12,000+ meticulously curated volumes of history, philosophy, biography, and the primary sources that shaped our world — from Herodotus and Thucydides to Toynbee and Ferguson. We add 30+ new titles every month, hand-selected by our editorial board of historians.",
  },
  {
    q: "Is this a subscription or do I own the books?",
    a: "Your subscription grants unlimited access to the full library. Your highlights, notes, and bookmarks are yours forever — exported in standard formats whenever you wish. Many of our volumes are also available for one-time purchase in our bookstore.",
  },
  {
    q: "Can I read offline?",
    a: "Yes. Download any volume to your device with one tap. Your position syncs the moment you reconnect. We use industry-standard DRM, but your notes and annotations are always exportable as plain text or Markdown.",
  },
  {
    q: "What devices and platforms do you support?",
    a: "iOS, Android, macOS, Windows, and the web. Your library syncs in real time across all of them. We also have a dedicated Kindle and Kobo integration for E Ink readers — your highlights flow back into the app automatically.",
  },
  {
    q: "How is this different from a normal e-book store?",
    a: "A store sells you individual books. History Library gives you a connected, searchable, annotated corpus. Find every mention of Carthage across 50 books in a single search. See how Gibbon's view of Rome changed over three editions. Read like a researcher.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Of course. One click in your settings, no questions, no emails to support. Your access continues until the end of your billing period. And we offer a full 30-day money-back guarantee, no questions asked.",
  },
  {
    q: "Do you have a free trial?",
    a: "Yes — 14 days, full access to the Scholar plan. No credit card required to start. We want you to fall in love with the library before you ever pay a cent.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-ink py-24 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none" />

      <div className="mx-auto max-w-4xl px-5 sm:px-8 relative">
        <SectionHeading
          eyebrow="Frequently Asked"
          title={
            <>
              Questions, <em className="italic font-light text-[#c9a96a]">answered</em>.
            </>
          }
          description="Everything you might want to know before opening the doors."
          light
        />

        <div className="mt-16 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div
                  className={`group rounded-2xl border transition-all duration-500 ${
                    isOpen
                      ? "border-[#c9a96a]/40 bg-gradient-to-br from-white/[0.04] to-white/[0.01]"
                      : "border-[#c9a96a]/10 bg-white/[0.02] hover:border-[#c9a96a]/25 hover:bg-white/[0.03]"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 sm:px-7 py-5 text-left"
                  >
                    <span
                      className={`font-serif text-base sm:text-lg font-medium transition-colors ${
                        isOpen ? "text-[#f5efe6]" : "text-[#d4c8b0] group-hover:text-[#f5efe6]"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        isOpen
                          ? "border-[#c9a96a] bg-[#c9a96a]/10 text-[#c9a96a]"
                          : "border-[#c9a96a]/20 text-[#a89c84] group-hover:border-[#c9a96a]/40"
                      }`}
                    >
                      <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-7 pb-6 text-[15px] leading-relaxed text-[#a89c84] text-pretty">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3} className="mt-12 text-center">
          <p className="text-[14px] text-[#8a7e6a]">
            Still have questions?{" "}
            <a
              href="#"
              className="font-semibold text-[#c9a96a] underline underline-offset-4 hover:text-[#e7c98a]"
            >
              Talk to a librarian →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf, ArrowUpRight, Phone } from "lucide-react";

const links = [
  { label: "Method", href: "#method" },
  { label: "Benefits", href: "#benefits" },
  { label: "Experience", href: "#experience" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className={`flex w-full max-w-6xl items-center justify-between rounded-full border transition-all duration-500 ${
          scrolled
            ? "glass border-white/60 px-4 py-2.5 shadow-[0_8px_40px_-12px_rgba(20,81,62,0.25)]"
            : "border-transparent bg-transparent px-5 py-3"
        }`}
      >
        <a href="#" className="group flex items-center gap-2.5">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-800 to-emerald-600 shadow-md shadow-emerald-900/20">
            <Leaf className="h-4.5 w-4.5 text-cream-50" strokeWidth={2.2} />
            <span className="absolute -inset-0.5 -z-10 rounded-full bg-emerald-700/30 blur-md transition group-hover:bg-emerald-600/50" />
          </div>
          <div className="leading-tight">
            <div className="font-serif text-[1.05rem] font-semibold tracking-tight text-emerald-900">
              Sakina <span className="text-gold-500">Hijama</span>
            </div>
            <div className="hidden text-[10px] uppercase tracking-[0.18em] text-ink-500 sm:block">
              Prophetic Therapy
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-700 transition hover:bg-emerald-900/5 hover:text-emerald-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="tel:+10000000000"
            className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-ink-700 transition hover:text-emerald-800"
          >
            <Phone className="h-3.5 w-3.5" /> (000) 000-0000
          </a>
          <a
            href="#book"
            className="btn-shine group inline-flex items-center gap-1.5 rounded-full bg-emerald-900 px-5 py-2.5 text-sm font-semibold text-cream-50 shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-800"
          >
            Book Session
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-900/10 bg-white/60 text-emerald-900 backdrop-blur md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <div
              className="absolute inset-0 bg-emerald-900/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ type: "spring", damping: 22, stiffness: 200 }}
              className="absolute left-4 right-4 top-4 rounded-3xl border border-white/40 bg-cream-50 p-6 shadow-2xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="font-serif text-xl font-semibold text-emerald-900">
                  Sakina <span className="text-gold-500">Hijama</span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-900/5 text-emerald-900"
                  aria-label="Close menu"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-ink-700 transition hover:bg-emerald-900/5 hover:text-emerald-900"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </div>
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-900 py-3.5 text-sm font-semibold text-cream-50"
              >
                Book Your Session <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

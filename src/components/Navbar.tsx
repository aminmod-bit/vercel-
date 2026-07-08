import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { BookOpen, Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
  });

  const links = [
    { label: "Library", href: "#library" },
    { label: "Features", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div
            className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-colors duration-300 ${
              scrolled
                ? "glass-dark shadow-2xl shadow-black/20"
                : "bg-transparent"
            }`}
          >
            <a href="#" className="group flex items-center gap-2.5">
              <div className="relative">
                <div className="absolute inset-0 bg-[#c9a96a] blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
                <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#c9a96a] to-[#8a6a2f] shadow-lg">
                  <BookOpen className="h-4.5 w-4.5 text-[#0b0a08]" strokeWidth={2.5} />
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-[17px] font-semibold text-[#f5efe6] tracking-tight">
                  History Library
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#c9a96a] mt-0.5">
                  est. 1847
                </span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="relative px-3.5 py-2 text-[13.5px] font-medium text-[#d4c8b0] hover:text-[#f5efe6] transition-colors group"
                >
                  {l.label}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-px w-0 bg-[#c9a96a] group-hover:w-5 transition-all duration-300" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#"
                className="hidden sm:inline-flex text-[13.5px] font-medium text-[#d4c8b0] hover:text-[#f5efe6] px-3 py-2 transition-colors"
              >
                Sign in
              </a>
              <a
                href="#pricing"
                className="group relative inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-br from-[#e7c98a] via-[#c9a96a] to-[#8a6a2f] px-4 sm:px-5 py-2.5 text-[13px] font-semibold text-[#0b0a08] shadow-lg shadow-[#c9a96a]/20 hover:shadow-[#c9a96a]/40 transition-all btn-shine"
              >
                Start reading
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
              </a>
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden p-2 text-[#f5efe6] hover:text-[#c9a96a] transition-colors"
                aria-label="Toggle menu"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: open ? 1 : 0,
          y: open ? 0 : -20,
          pointerEvents: open ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-x-0 top-[80px] z-40 lg:hidden px-5"
      >
        <div className="glass-dark rounded-2xl p-5 shadow-2xl">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-[15px] font-medium text-[#d4c8b0] hover:text-[#f5efe6] hover:bg-white/5 rounded-lg transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="px-3 py-3 text-[15px] font-medium text-[#d4c8b0] hover:text-[#f5efe6] hover:bg-white/5 rounded-lg transition-colors"
            >
              Sign in
            </a>
          </nav>
        </div>
      </motion.div>
    </>
  );
}

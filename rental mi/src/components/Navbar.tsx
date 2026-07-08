import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Globe, User } from "lucide-react";

const links = [
  { label: "Cars", href: "#cars" },
  { label: "Deals", href: "#deals" },
  { label: "Fleet", href: "#fleet" },
  { label: "Locations", href: "#locations" },
  { label: "Business", href: "#business" },
  { label: "Help", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top utility bar */}
      <div className="relative z-50 border-b border-white/10 bg-ink-1000">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs text-ink-300">
          <div className="hidden items-center gap-4 sm:flex">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-apex-500" />
              2,200+ locations · 105 countries
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hidden items-center gap-1.5 transition-colors hover:text-white sm:flex">
              <Phone className="h-3 w-3" /> +44 20 4566 0700
            </a>
            <a href="#" className="flex items-center gap-1.5 transition-colors hover:text-white">
              <Globe className="h-3 w-3" /> EN · USD
            </a>
            <a href="#" className="flex items-center gap-1.5 transition-colors hover:text-white">
              <User className="h-3 w-3" /> Sign in
            </a>
          </div>
        </div>
      </div>

      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky top-0 z-40 border-b transition-all duration-300 ${
          scrolled ? "border-white/10 bg-ink-1000/95 backdrop-blur-xl" : "border-transparent bg-ink-1000"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20">
          <a href="#" className="group flex items-center gap-2">
            <div className="relative flex h-9 w-9 items-center justify-center bg-apex-500">
              <span className="text-xl font-black text-ink-1000">A</span>
              <div className="absolute -bottom-1 -right-1 h-2 w-2 bg-ink-1000" />
              <div className="absolute -bottom-1 -right-1 h-2 w-2 border-r-2 border-b-2 border-apex-500" />
            </div>
            <div className="leading-none">
              <div className="text-xl font-black tracking-tight text-white">APEX</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-apex-500">Drive</div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="link-underline rounded-md px-3.5 py-2 text-sm font-semibold text-ink-200 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <button className="flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-semibold text-ink-200 transition-colors hover:text-white">
              More <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#"
              className="hidden text-sm font-semibold text-ink-200 transition-colors hover:text-white md:block"
            >
              Manage booking
            </a>
            <a
              href="#booking"
              className="group inline-flex items-center gap-2 bg-apex-500 px-4 py-2.5 text-sm font-bold text-ink-1000 transition-all duration-300 hover:bg-apex-400 active:scale-95 sm:px-5"
            >
              Book now
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="ml-1 inline-flex h-10 w-10 items-center justify-center text-white lg:hidden"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-white/10 bg-ink-1000 lg:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-1 px-4 py-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-semibold text-ink-200 hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

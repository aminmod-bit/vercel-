import { BookOpen, Mail, ArrowUpRight } from "lucide-react";

// Inline social icons (avoids lucide version mismatches)
const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);
const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);
const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);
import { Reveal } from "./ui";

const columns = [
  {
    title: "Library",
    links: [
      "Browse volumes",
      "New releases",
      "Editor's picks",
      "By century",
      "By region",
      "Primary sources",
    ],
  },
  {
    title: "Product",
    links: [
      "Features",
      "Pricing",
      "iOS app",
      "Android app",
      "Web reader",
      "E-ink support",
    ],
  },
  {
    title: "Company",
    links: [
      "About",
      "Editorial board",
      "Careers",
      "Press",
      "Contact",
      "Affiliates",
    ],
  },
  {
    title: "Resources",
    links: [
      "Reading guides",
      "Book clubs",
      "Librarian's blog",
      "Help center",
      "API & developers",
      "Status",
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-[#08070a] text-[#a89c84] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a96a]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-10">
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand column */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#c9a96a] blur-md opacity-30" />
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#c9a96a] to-[#8a6a2f] shadow-lg">
                    <BookOpen className="h-5 w-5 text-[#0b0a08]" strokeWidth={2.5} />
                  </div>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-serif text-lg font-semibold text-[#f5efe6] tracking-tight">
                    History Library
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#c9a96a] mt-0.5">
                    est. 1847
                  </span>
                </div>
              </div>

              <p className="mt-5 text-[14px] leading-relaxed text-[#8a7e6a] max-w-sm">
                A modern home for the books that built the world. Curated, typeset,
                and kept in the hands of curious readers — wherever they are.
              </p>

              {/* Newsletter */}
              <div className="mt-7">
                <div className="text-[11px] uppercase tracking-[0.2em] text-[#c9a96a] mb-3 font-semibold">
                  The Marginalia
                </div>
                <p className="text-[13px] text-[#8a7e6a] mb-3.5 leading-relaxed">
                  A weekly letter from our editors. One book, one idea, one reason to read.
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="group flex items-center rounded-xl border border-[#c9a96a]/20 bg-white/[0.02] focus-within:border-[#c9a96a]/50 transition-colors"
                >
                  <Mail className="ml-3 h-4 w-4 text-[#8a7e6a] shrink-0" />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 bg-transparent px-3 py-3 text-[13.5px] text-[#f5efe6] placeholder-[#5a5040] outline-none"
                  />
                  <button
                    type="submit"
                    className="m-1 inline-flex items-center gap-1 rounded-lg bg-gradient-to-br from-[#e7c98a] via-[#c9a96a] to-[#8a6a2f] px-3 py-2 text-[12.5px] font-semibold text-[#0b0a08] hover:scale-[1.02] transition-transform"
                  >
                    Subscribe
                    <ArrowUpRight className="h-3 w-3" strokeWidth={2.5} />
                  </button>
                </form>
              </div>

              {/* Socials */}
              <div className="mt-8 flex items-center gap-2">
                {[Twitter, Instagram, Facebook, Youtube, Github].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#c9a96a]/15 text-[#8a7e6a] hover:border-[#c9a96a]/40 hover:text-[#c9a96a] hover:bg-[#c9a96a]/5 transition-all"
                    aria-label="social link"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
              {columns.map((col) => (
                <div key={col.title}>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[#c9a96a] font-semibold mb-4">
                    {col.title}
                  </div>
                  <ul className="space-y-2.5">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-[13.5px] text-[#8a7e6a] hover:text-[#f5efe6] transition-colors inline-flex items-center gap-1 group"
                        >
                          {link}
                          <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#c9a96a]/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-[#5a5040]">
              <span>© 2026 History Library Co.</span>
              <a href="#" className="hover:text-[#c9a96a] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#c9a96a] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#c9a96a] transition-colors">Cookies</a>
              <a href="#" className="hover:text-[#c9a96a] transition-colors">Accessibility</a>
            </div>
            <div className="flex items-center gap-2 text-[11.5px] text-[#5a5040]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4a5d4a] animate-blink" />
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

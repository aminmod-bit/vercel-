import { motion } from "framer-motion";
import { Leaf, Send, Mail, MessageCircle, Globe } from "lucide-react";

const columns = [
  {
    title: "Therapy",
    links: [
      "Hijama cupping",
      "Sports recovery",
      "Women's health",
      "Sunni wellness",
      "Group sessions",
    ],
  },
  {
    title: "Company",
    links: [
      "Our story",
      "Practitioners",
      "Locations",
      "Press",
      "Careers",
    ],
  },
  {
    title: "Resources",
    links: [
      "Aftercare guide",
      "Blog",
      "Research",
      "FAQ",
      "Contact",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-cream-100 pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 pb-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <a href="#" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-800 to-emerald-600">
                <Leaf className="h-4.5 w-4.5 text-cream-50" />
              </div>
              <div className="font-serif text-xl font-semibold tracking-tight text-emerald-900">
                Sakina <span className="text-gold-500">Hijama</span>
              </div>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-700">
              The art of cupping, restored. Rooted in prophetic tradition,
              refined for modern life — practiced with clinical precision and
              human warmth.
            </p>

            <div className="mt-7">
              <div className="text-xs font-medium uppercase tracking-widest text-ink-500">
                Quiet newsletter
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-3 flex max-w-sm items-center gap-2 rounded-full border border-emerald-900/15 bg-white/70 p-1.5 backdrop-blur"
              >
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="flex-1 bg-transparent px-3 py-1.5 text-sm text-ink-900 placeholder:text-ink-500 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-900 text-cream-50 transition hover:bg-emerald-800"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Mail, href: "#" },
                { Icon: MessageCircle, href: "#" },
                { Icon: Globe, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-900/15 bg-white/60 text-emerald-900 transition hover:border-emerald-900/30 hover:bg-emerald-900 hover:text-cream-50"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-3">
            {columns.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="font-serif text-base font-semibold tracking-tight text-ink-900">
                  {c.title}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-ink-700 transition hover:text-emerald-800"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-emerald-900/10 py-7 text-xs text-ink-500 sm:flex-row">
          <div>© {new Date().getFullYear()} Sakina Hijama. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="transition hover:text-emerald-800">
              Privacy
            </a>
            <a href="#" className="transition hover:text-emerald-800">
              Terms
            </a>
            <a href="#" className="transition hover:text-emerald-800">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

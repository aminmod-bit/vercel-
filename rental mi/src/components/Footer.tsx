import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const columns = [
  {
    title: "Drive",
    links: ["All cars", "Luxury", "Sports", "Electric", "SUVs", "Vans & trucks"],
  },
  {
    title: "Service",
    links: ["Concierge", "Delivery", "One-way rentals", "Long-term", "Corporate", "Weddings"],
  },
  {
    title: "Company",
    links: ["About APEX", "Press", "Careers", "Sustainability", "Investors", "Newsroom"],
  },
  {
    title: "Support",
    links: ["Help center", "Contact", "Manage booking", "Roadside help", "Terms", "Privacy"],
  },
];

const socials = [
  { label: "Instagram", d: "M12 2.2c2.7 0 3 0 4.1.1 1.1 0 1.8.2 2.4.5.6.2 1.2.6 1.7 1.1.5.5.8 1.1 1.1 1.7.3.6.4 1.3.5 2.4.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1.1-.2 1.8-.5 2.4-.2.6-.6 1.2-1.1 1.7-.5.5-1.1.8-1.7 1.1-.6.3-1.3.4-2.4.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1.1 0-1.8-.2-2.4-.5-.6-.2-1.2-.6-1.7-1.1-.5-.5-.8-1.1-1.1-1.7-.3-.6-.4-1.3-.5-2.4C2.2 15 2.2 14.7 2.2 12s0-3 .1-4.1c0-1.1.2-1.8.5-2.4.2-.6.6-1.2 1.1-1.7.5-.5 1.1-.8 1.7-1.1.6-.3 1.3-.4 2.4-.5C9 2.2 9.3 2.2 12 2.2zm0 1.8c-2.6 0-3 0-4 .1-.9 0-1.5.2-1.9.4-.5.2-.8.4-1.2.8-.4.4-.6.7-.8 1.2-.2.4-.3 1-.4 1.9-.1 1-.1 1.3-.1 4s0 3 .1 4c0 .9.2 1.5.4 1.9.2.5.4.8.8 1.2.4.4.7.6 1.2.8.4.2 1 .3 1.9.4 1 .1 1.3.1 4 .1s3 0 4-.1c.9 0 1.5-.2 1.9-.4.5-.2.8-.4 1.2-.8.4-.4.6-.7.8-1.2.2-.4.3-1 .4-1.9.1-1 .1-1.3.1-4s0-3-.1-4c0-.9-.2-1.5-.4-1.9-.2-.5-.4-.8-.8-1.2-.4-.4-.7-.6-1.2-.8-.4-.2-1-.3-1.9-.4-1-.1-1.3-.1-4-.1zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2zm5.1-2.2a1.2 1.2 0 1 1 0 2.3 1.2 1.2 0 0 1 0-2.3z" },
  { label: "Twitter", d: "M22 5.9c-.7.3-1.5.5-2.4.6.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1-1.5-1.6-4-1.7-5.6-.2-1 1-1.5 2.5-1.2 3.9C8.7 8.7 5.7 7.1 3.7 4.5 2.6 6.4 3.1 8.7 4.9 9.9c-.6 0-1.3-.2-1.9-.5 0 1.8 1.3 3.4 3.1 3.7-.6.2-1.2.2-1.8.1.5 1.5 1.9 2.6 3.5 2.6-1.5 1.2-3.4 1.7-5.2 1.5 1.7 1.1 3.7 1.7 5.7 1.7 6.9 0 10.7-5.7 10.7-10.7v-.5c.7-.5 1.4-1.2 1.9-2z" },
  { label: "LinkedIn", d: "M20.5 2h-17C2.7 2 2 2.7 2 3.5v17c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5zM8 19H5V9h3v10zM6.5 7.7a1.8 1.8 0 1 1 0-3.5 1.8 1.8 0 0 1 0 3.5zM19 19h-3v-5c0-1.2-.4-2-1.5-2-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8V19h-3V9h3v1.3c.4-.6 1.1-1.5 2.7-1.5 2 0 3.5 1.3 3.5 4.1V19z" },
  { label: "YouTube", d: "M21.6 7.2s-.2-1.4-.8-2c-.7-.8-1.6-.8-2-.9-2.8-.2-7-.2-7-.2s-4.2 0-7 .2c-.4.1-1.3.1-2 .9-.6.6-.8 2-.8 2S1.7 8.8 1.7 10.4v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.7.8 1.7.8 2.1.9 1.5.1 6.6.2 6.6.2s4.2 0 7-.2c.4-.1 1.3-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5c0-1.6-.2-3.2-.2-3.2zM9.9 14V8.2l5.4 2.9-5.4 2.9z" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-1000">
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-10">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="relative flex h-9 w-9 items-center justify-center bg-apex-500">
                <span className="text-xl font-black text-ink-1000">A</span>
              </div>
              <div className="leading-none">
                <div className="text-xl font-black tracking-tight text-white">APEX</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-apex-500">Drive</div>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm text-ink-400">
              Premium car rental, redefined. Drive first-class. Pay economy. 222,000+
              vehicles across 105 countries.
            </p>

            <div className="mt-6 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center border border-white/10 bg-white/5 text-ink-300 transition-all hover:border-apex-500 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>

            <div className="mt-6 inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-2 text-xs text-ink-300">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              All systems operational
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-black uppercase tracking-widest text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-1 text-sm text-ink-400 transition-colors hover:text-apex-500"
                    >
                      {l}
                      <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-ink-500">© 2026 APEX Drive Mobility Ltd. All rights reserved.</p>
          <div className="flex items-center gap-5 text-xs text-ink-500">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
            <a href="#" className="hover:text-white">Accessibility</a>
            <a href="#" className="hover:text-white">Imprint</a>
          </div>
          <p className="text-xs text-ink-500">Crafted in London · Made for the road</p>
        </div>

        {/* Giant wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 overflow-hidden text-center"
        >
          <div
            className="select-none whitespace-nowrap text-[18vw] font-black uppercase leading-none tracking-tighter text-apex-500 sm:text-[14vw]"
            style={{ WebkitTextStroke: "0px" }}
          >
            APEX.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Check, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="book"
      className="relative overflow-hidden bg-emerald-900 py-24 text-cream-50 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-700/50 blur-3xl" />
        <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-gold-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-[0.04]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-cream-50/20 bg-cream-50/5 px-3 py-1 text-xs font-medium text-cream-100/90 backdrop-blur"
            >
              <span className="h-1 w-1 rounded-full bg-gold-400" />
              Booking now open
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl"
            >
              Your body is waiting.{" "}
              <span className="text-gold-400">Give it back</span> to itself.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 max-w-lg text-lg leading-relaxed text-cream-100/85"
            >
              Book a 60-minute session in under 90 seconds. We'll confirm
              within 2 hours and send your practitioner profile before you
              arrive.
            </motion.p>

            <div className="mt-8 space-y-3">
              {[
                "Free 15-minute consultation included",
                "Same-week appointments available",
                "HSA / FSA accepted",
              ].map((c) => (
                <div key={c} className="flex items-center gap-2.5 text-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-400/20 text-gold-400">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {c}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 text-sm text-cream-100/80 sm:flex-row sm:gap-6">
              <a
                href="tel:+10000000000"
                className="inline-flex items-center gap-2 transition hover:text-gold-400"
              >
                <Phone className="h-4 w-4" /> (000) 000-0000
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 transition hover:text-gold-400"
              >
                <MapPin className="h-4 w-4" /> 4 sanctuary studios worldwide
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md sm:p-8"
            >
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gold-400/20 blur-3xl" />

              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-400/20 text-gold-400">
                    <Calendar className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <div className="font-serif text-xl font-medium">
                      Reserve your session
                    </div>
                    <div className="text-xs text-cream-100/70">
                      We'll confirm within 2 hours
                    </div>
                  </div>
                </div>

                {!submitted ? (
                  <div className="space-y-3">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <Field label="First name" placeholder="Your name" />
                      <Field
                        label="Last name"
                        placeholder="Your surname"
                      />
                    </div>
                    <Field
                      label="Email"
                      type="email"
                      placeholder="you@example.com"
                    />
                    <Field
                      label="Phone"
                      type="tel"
                      placeholder="+1 (000) 000-0000"
                    />
                    <div>
                      <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-cream-100/70">
                        Session type
                      </label>
                      <select className="w-full appearance-none rounded-xl border border-white/10 bg-emerald-800/40 px-4 py-3 text-sm text-cream-50 transition focus:border-gold-400 focus:outline-none">
                        <option>Single session — $120</option>
                        <option>Renewal package — $285 (3 sessions)</option>
                        <option>Annual membership — inquire</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="btn-shine group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 text-sm font-semibold text-emerald-900 transition hover:bg-gold-500"
                    >
                      Reserve my session
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="pt-1 text-center text-[11px] text-cream-100/60">
                      No charge until confirmed · Cancel anytime
                    </p>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="py-10 text-center"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-400/20 text-gold-400">
                      <Check className="h-6 w-6" strokeWidth={3} />
                    </div>
                    <div className="mt-4 font-serif text-2xl font-medium">
                      Reserved with care.
                    </div>
                    <p className="mt-2 text-sm text-cream-100/75">
                      Check your inbox — your practitioner profile and
                      preparation guide are on their way.
                    </p>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-cream-100/70">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required
        className="w-full rounded-xl border border-white/10 bg-emerald-800/40 px-4 py-3 text-sm text-cream-50 placeholder:text-cream-100/40 transition focus:border-gold-400 focus:outline-none"
      />
    </div>
  );
}

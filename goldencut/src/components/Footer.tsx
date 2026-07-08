"use client";

import Link from "next/link";
import { Scissors, MapPin, Phone, Clock, AtSign } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-800 relative overflow-hidden">
      {/* Decorative barber pole accents */}
      <div className="absolute top-0 left-0 w-1 h-full barber-pole opacity-40" />
      <div className="absolute top-0 right-0 w-1 h-full barber-pole opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/20">
                <Scissors className="w-5 h-5 text-stone-950" />
              </div>
              <div>
                <span className="text-lg font-bold text-white font-serif">
                  Golden Cut
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              London&apos;s premier barbershop for gentlemen who appreciate style,
              quality, and an exceptional grooming experience.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/services?category=haircuts", label: "Haircuts" },
                { href: "/services?category=beard", label: "Beard & Shave" },
                { href: "/services?category=face-care", label: "Face Care" },
                { href: "/services?category=combo", label: "Packages" },
                { href: "/services?category=products", label: "Products" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold-400 transition-colors hover-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  15 Savile Row, Mayfair, London W1S
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span className="text-sm">+44 20 7123 4567</span>
              </li>
              <li className="flex items-center gap-2.5">
                <AtSign className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span className="text-sm">@goldencut_london</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Opening Hours
            </h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p>Mon — Fri: 9:00 AM — 8:00 PM</p>
                  <p>Sat — Sun: 10:00 AM — 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-600">
            © {new Date().getFullYear()} Golden Cut Barbershop. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/"
              className="text-xs text-stone-600 hover:text-gold-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-xs text-stone-600 hover:text-gold-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

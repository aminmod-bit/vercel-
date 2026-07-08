"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "./CartProvider";
import { ShoppingBag, Menu, X, Scissors } from "lucide-react";

export default function Header() {
  const { totalItems, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-black/20 border-b border-gold-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center group-hover:from-gold-300 group-hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/20">
              <Scissors className="w-5 h-5 text-stone-950 animate-scissors group-hover:animate-none" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-white tracking-wide font-serif">
                Golden Cut
              </span>
              <span className="text-[10px] text-gold-400 tracking-[0.25em] uppercase -mt-1 hidden sm:block">
                Barbershop
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/services?category=products", label: "Products" },
              { href: "/checkout", label: "Book Now" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-stone-300 hover:text-gold-400 transition-colors tracking-wide uppercase hover-underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={openCart}
              className="relative p-2 text-stone-300 hover:text-gold-400 transition-all duration-300 hover:scale-110"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-gradient-to-r from-gold-400 to-gold-600 text-stone-950 text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center animate-scale-in">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-stone-300 hover:text-gold-400 transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 animate-fade-in-up">
            <div className="flex flex-col gap-1">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/services?category=products", label: "Products" },
                { href: "/checkout", label: "Book Now" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-stone-300 hover:text-gold-400 transition-colors tracking-wide uppercase py-3 border-b border-stone-800/50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

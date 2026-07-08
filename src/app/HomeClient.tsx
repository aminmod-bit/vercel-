"use client";

import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, Scissors, Award, Users, Clock, Star } from "lucide-react";
import type { Product, Category } from "@/lib/types";

interface HomeClientProps {
  cats: Category[];
  featuredProducts: Product[];
  bestSellers: Product[];
}

export default function HomeClient({
  cats,
  featuredProducts,
  bestSellers,
}: HomeClientProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/7195814/pexels-photo-7195814.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920"
            alt="Golden Cut Barbershop"
            fill
            className="object-cover animate-ken-burns"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-stone-950" />
          {/* Gold dust particles overlay */}
          <div className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(1px 1px at 20% 30%, rgba(230,173,53,0.4) 0%, transparent 100%),
                                radial-gradient(1px 1px at 80% 20%, rgba(230,173,53,0.3) 0%, transparent 100%),
                                radial-gradient(1px 1px at 40% 70%, rgba(230,173,53,0.2) 0%, transparent 100%),
                                radial-gradient(1px 1px at 60% 50%, rgba(230,173,53,0.3) 0%, transparent 100%),
                                radial-gradient(1px 1px at 10% 80%, rgba(230,173,53,0.2) 0%, transparent 100%),
                                radial-gradient(1px 1px at 90% 90%, rgba(230,173,53,0.3) 0%, transparent 100%)`,
            }}
          />
        </div>

        {/* Barber pole accents on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 barber-pole opacity-50 hidden lg:block" />
        <div className="absolute right-0 top-0 bottom-0 w-1.5 barber-pole opacity-50 hidden lg:block" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
          <div className="animate-fade-in-up">
            {/* Decorative ornament */}
            <div className="ornament-divider max-w-xs mx-auto mb-8">
              <span className="text-gold-400 text-sm uppercase tracking-[0.3em] font-medium whitespace-nowrap">
                Est. 2019 &bull; London
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-serif font-bold text-white mb-6 leading-[0.9] tracking-tight">
              Golden
              <span className="gold-shimmer"> Cut</span>
            </h1>

            <p className="text-lg sm:text-xl text-stone-300 max-w-2xl mx-auto mb-4 leading-relaxed">
              The art of men&apos;s grooming, elevated. Classic haircuts, royal
              hot-towel shaves & premium treatments — all in the atmosphere of
              a true gentleman&apos;s club.
            </p>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-1 mb-10">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className="w-4 h-4 text-gold-400 fill-gold-400"
                />
              ))}
              <span className="text-stone-400 text-sm ml-2">
                4.9 — Rated by 500+ gentlemen
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-stone-950 font-bold rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/25 text-sm uppercase tracking-wider pulse-glow"
              >
                Our Services
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/checkout"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-stone-600 text-white font-bold rounded-xl hover:border-gold-500 hover:text-gold-400 transition-all duration-300 text-sm uppercase tracking-wider"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-stone-600 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-gold-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-stone-900/50 border-y border-stone-800/50 relative overflow-hidden">
        {/* Subtle gold line across */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Scissors, value: "5+", label: "Years of Craft" },
              { icon: Users, value: "10K+", label: "Happy Clients" },
              { icon: Award, value: "15+", label: "Master Barbers" },
              { icon: Clock, value: "7/7", label: "Days a Week" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`text-center animate-stagger stagger-${i + 1}`}
              >
                <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-gold-400" />
                </div>
                <p className="text-3xl font-bold text-white font-serif">
                  {stat.value}
                </p>
                <p className="text-sm text-stone-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      {cats.length > 0 && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <div className="ornament-divider max-w-xs mx-auto mb-4">
                <span className="text-gold-400 text-sm uppercase tracking-[0.2em] font-medium whitespace-nowrap">
                  What We Offer
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-3">
                Services & Products
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cats.map((cat, i) => (
                <Link
                  key={cat.id}
                  href={`/services?category=${cat.slug}`}
                  className={`group relative aspect-[3/2] rounded-2xl overflow-hidden animate-stagger stagger-${i + 1}`}
                >
                  {cat.image && (
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent group-hover:from-stone-950/95 transition-all duration-500" />
                  {/* Gold border on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gold-500/30 transition-all duration-500" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-serif font-bold text-white mb-1 group-hover:text-gold-400 transition-colors duration-300">
                      {cat.name}
                    </h3>
                    {cat.description && (
                      <p className="text-sm text-stone-400 line-clamp-2">
                        {cat.description}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1 text-gold-400 text-sm mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured */}
      {featuredProducts.length > 0 && (
        <section className="py-24 bg-stone-900/30 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4">
              <div>
                <div className="ornament-divider max-w-[200px] mb-3">
                  <span className="text-gold-400 text-sm uppercase tracking-[0.2em] font-medium whitespace-nowrap">
                    Featured
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-3">
                  Editor&apos;s Picks
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 text-sm font-medium transition-colors hover-underline"
              >
                View All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Best sellers */}
      {bestSellers.length > 0 && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4">
              <div>
                <div className="ornament-divider max-w-[200px] mb-3">
                  <span className="text-gold-400 text-sm uppercase tracking-[0.2em] font-medium whitespace-nowrap">
                    Popular
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-3">
                  Bestselling Services
                </h2>
              </div>
              <Link
                href="/services?bestSeller=true"
                className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 text-sm font-medium transition-colors hover-underline"
              >
                View All Bestsellers <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {bestSellers.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/12339159/pexels-photo-12339159.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1920"
            alt="Golden Cut Interior"
            fill
            className="object-cover animate-ken-burns"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-stone-950/85" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="animate-fade-in-up">
            <Scissors className="w-10 h-10 text-gold-400 mx-auto mb-6 animate-scissors" />
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-6">
              Ready for Your{" "}
              <span className="gold-shimmer">Transformation</span>?
            </h2>
            <p className="text-stone-300 text-lg mb-10 leading-relaxed">
              Book your appointment today and experience the Golden Cut
              difference. Our master barbers will craft your perfect look.
            </p>
            <Link
              href="/checkout"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-stone-950 font-bold rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/25 text-sm uppercase tracking-wider pulse-glow"
            >
              Book Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

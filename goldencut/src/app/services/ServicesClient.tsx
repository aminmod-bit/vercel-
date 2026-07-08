"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { Search, SlidersHorizontal, X, Scissors } from "lucide-react";
import type { Product, Category } from "@/lib/types";

interface ServicesClientProps {
  cats: Category[];
  allProducts: Product[];
}

export default function ServicesClient({
  cats,
  allProducts,
}: ServicesClientProps) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const initialBestSeller = searchParams.get("bestSeller") === "true";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [onlyBestSeller, setOnlyBestSeller] = useState(initialBestSeller);

  const filtered = useMemo(() => {
    let result = [...allProducts];

    if (activeCategory) {
      result = result.filter((p) => p.categorySlug === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.shortDescription && p.shortDescription.toLowerCase().includes(q))
      );
    }

    if (onlyBestSeller) {
      result = result.filter((p) => p.bestSeller);
    }

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case "price-desc":
        result.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case "rating":
        result.sort((a, b) => Number(b.avgRating) - Number(a.avgRating));
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [allProducts, activeCategory, sortBy, searchQuery, onlyBestSeller]);

  const activeCatName = cats.find((c) => c.slug === activeCategory)?.name;

  return (
    <div className="pt-20 sm:pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 animate-fade-in-up">
          <div className="ornament-divider max-w-[160px] mb-3">
            <span className="text-gold-400 text-sm uppercase tracking-[0.2em] font-medium whitespace-nowrap">
              Catalogue
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-3">
            {activeCatName || "All Services & Products"}
          </h1>
          <p className="text-stone-400 mt-2">
            {filtered.length}{" "}
            {filtered.length === 1 ? "item" : "items"} available
          </p>
        </div>

        {/* Filters bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-stone-900 border border-stone-800 rounded-xl text-sm text-white placeholder-stone-500 focus:outline-none focus:border-gold-500/50 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex gap-3">
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2.5 bg-stone-900 border border-stone-800 rounded-xl text-sm text-white focus:outline-none focus:border-gold-500/50 transition-colors cursor-pointer"
            >
              <option value="featured">Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="name">Alphabetical</option>
            </select>

            {/* Filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2.5 border rounded-xl text-sm transition-all duration-300 ${
                showFilters
                  ? "bg-gradient-to-r from-gold-500 to-gold-600 text-stone-950 border-gold-500"
                  : "bg-stone-900 text-white border-stone-800 hover:border-stone-700"
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:inline">Filters</span>
            </button>
          </div>
        </div>

        {/* Expanded filters */}
        {showFilters && (
          <div className="mb-8 p-5 bg-stone-900/50 rounded-2xl border border-stone-800/50 animate-fade-in-up">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-white">Categories</h3>
              {(activeCategory || onlyBestSeller) && (
                <button
                  onClick={() => {
                    setActiveCategory("");
                    setOnlyBestSeller(false);
                  }}
                  className="text-xs text-gold-400 hover:text-gold-300 transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <button
                onClick={() => setActiveCategory("")}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                  !activeCategory
                    ? "bg-gradient-to-r from-gold-500 to-gold-600 text-stone-950 font-medium shadow-lg shadow-gold-500/20"
                    : "bg-stone-800 text-stone-300 hover:bg-stone-700"
                }`}
              >
                All
              </button>
              {cats.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                    activeCategory === cat.slug
                      ? "bg-gradient-to-r from-gold-500 to-gold-600 text-stone-950 font-medium shadow-lg shadow-gold-500/20"
                      : "bg-stone-800 text-stone-300 hover:bg-stone-700"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={onlyBestSeller}
                onChange={(e) => setOnlyBestSeller(e.target.checked)}
                className="w-4 h-4 rounded border-stone-600 text-gold-500 focus:ring-gold-500 bg-stone-800"
              />
              <span className="text-sm text-stone-300">
                Bestsellers only
              </span>
            </label>
          </div>
        )}

        {/* Category pills (always visible) */}
        {!showFilters && (
          <div className="flex gap-2 mb-8 overflow-x-auto scrollbar-hide pb-2 animate-fade-in">
            <button
              onClick={() => setActiveCategory("")}
              className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all duration-300 ${
                !activeCategory
                  ? "bg-gradient-to-r from-gold-500 to-gold-600 text-stone-950 font-medium shadow-lg shadow-gold-500/20"
                  : "bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800"
              }`}
            >
              All
            </button>
            {cats.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.slug
                    ? "bg-gradient-to-r from-gold-500 to-gold-600 text-stone-950 font-medium shadow-lg shadow-gold-500/20"
                    : "bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}

        {/* Products Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-in">
            <Scissors className="w-16 h-16 text-stone-700 mx-auto mb-4 animate-scissors" />
            <p className="text-stone-500 text-lg">No results found</p>
            <p className="text-stone-600 text-sm mt-1">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

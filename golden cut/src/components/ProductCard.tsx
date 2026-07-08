"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, ShoppingBag } from "lucide-react";
import StarRating from "./StarRating";
import { useCart } from "./CartProvider";
import type { Product } from "@/lib/types";

function formatGBP(value: number) {
  return `£${value.toFixed(2)}`;
}

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();
  const mainImage = product.images?.[0] || "";
  const price = parseFloat(product.price);
  const comparePrice = product.compareAtPrice
    ? parseFloat(product.compareAtPrice)
    : null;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: product.id,
      name: product.name,
      price,
      image: mainImage,
      quantity: 1,
      slug: product.slug,
    });
  };

  const staggerClass = index < 9 ? `stagger-${index + 1}` : "stagger-9";

  return (
    <Link
      href={`/services/${product.slug}`}
      className={`group bg-stone-900 rounded-2xl overflow-hidden border border-stone-800/50 hover:border-gold-500/30 card-hover flex flex-col animate-stagger ${staggerClass}`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {mainImage && (
          <Image
            src={mainImage}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {product.bestSeller && (
            <span className="px-2.5 py-1 bg-gradient-to-r from-gold-400 to-gold-600 text-stone-950 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg">
              Bestseller
            </span>
          )}
          {comparePrice && (
            <span className="px-2.5 py-1 bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg">
              Sale
            </span>
          )}
        </div>

        {/* Quick add */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 right-3 w-11 h-11 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-stone-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 hover:scale-110 shadow-lg shadow-gold-500/30 translate-y-2 group-hover:translate-y-0"
          aria-label="Add to cart"
        >
          <ShoppingBag className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        {product.categoryName && (
          <p className="text-[11px] text-gold-500 uppercase tracking-[0.15em] font-medium mb-1.5">
            {product.categoryName}
          </p>
        )}
        <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold-400 transition-colors duration-300 mb-1.5">
          {product.name}
        </h3>
        {product.shortDescription && (
          <p className="text-sm text-stone-400 line-clamp-2 mb-3 flex-1">
            {product.shortDescription}
          </p>
        )}

        <div className="flex items-center gap-2 mb-3">
          {Number(product.avgRating) > 0 && (
            <StarRating
              rating={Number(product.avgRating)}
              count={Number(product.reviewCount)}
              size={12}
            />
          )}
        </div>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-stone-800/50">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-white">
              {formatGBP(price)}
            </span>
            {comparePrice && (
              <span className="text-sm text-stone-500 line-through">
                {formatGBP(comparePrice)}
              </span>
            )}
          </div>
          {product.duration && (
            <div className="flex items-center gap-1 text-stone-500">
              <Clock className="w-3.5 h-3.5" />
              <span className="text-xs">{product.duration}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

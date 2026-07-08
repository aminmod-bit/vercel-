"use client";

import { useCart } from "./CartProvider";
import { X, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

function formatGBP(value: number) {
  return `£${value.toFixed(2)}`;
}

export default function CartSlideout() {
  const {
    items,
    removeItem,
    updateQuantity,
    totalItems,
    totalPrice,
    isCartOpen,
    closeCart,
  } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 animate-fade-in"
        onClick={closeCart}
      />

      {/* Panel */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-stone-950 shadow-2xl animate-slide-in-right flex flex-col border-l border-gold-500/10">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-stone-800">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-gold-400" />
            <h2 className="text-lg font-serif font-bold text-white">
              Your Cart
            </h2>
            {totalItems > 0 && (
              <span className="text-sm text-stone-400">({totalItems})</span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="p-1.5 text-stone-400 hover:text-white transition-colors rounded-full hover:bg-stone-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-hide">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-stone-700 mb-4 animate-float" />
              <p className="text-stone-400 text-lg">Your cart is empty</p>
              <p className="text-stone-600 text-sm mt-1">
                Add services or products to get started
              </p>
              <button
                onClick={closeCart}
                className="mt-6 px-6 py-2.5 bg-gradient-to-r from-gold-500 to-gold-600 text-stone-950 text-sm font-semibold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300"
              >
                Browse Services
              </button>
            </div>
          ) : (
            items.map((item, idx) => (
              <div
                key={item.productId}
                className={`flex gap-3 bg-stone-900/50 rounded-xl p-3 border border-stone-800/50 card-hover animate-stagger stagger-${idx + 1}`}
              >
                <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/services/${item.slug}`}
                    onClick={closeCart}
                    className="text-sm font-medium text-white hover:text-gold-400 transition-colors line-clamp-2"
                  >
                    {item.name}
                  </Link>
                  <p className="text-gold-400 font-semibold mt-1 text-sm">
                    {formatGBP(item.price)}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity - 1)
                        }
                        className="w-7 h-7 rounded-md bg-stone-800 text-stone-300 hover:bg-stone-700 flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm text-white w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity + 1)
                        }
                        className="w-7 h-7 rounded-md bg-stone-800 text-stone-300 hover:bg-stone-700 flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.productId)}
                      className="text-xs text-stone-500 hover:text-red-400 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-stone-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-stone-400">Subtotal</span>
              <span className="text-xl font-bold text-white">
                {formatGBP(totalPrice)}
              </span>
            </div>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 text-stone-950 font-bold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 text-sm pulse-glow"
            >
              Checkout
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

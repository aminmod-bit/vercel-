"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import {
  ArrowLeft,
  Check,
  ShoppingBag,
  Trash2,
  Minus,
  Plus,
  Scissors,
} from "lucide-react";

function formatGBP(value: number) {
  return `£${value.toFixed(2)}`;
}

export default function CheckoutClient() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } =
    useCart();
  const [step, setStep] = useState<"cart" | "info" | "done">("cart");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: form.name,
          customerEmail: form.email,
          customerPhone: form.phone,
          notes: form.notes,
          items: items.map((item) => ({
            productId: item.productId,
            productName: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
        }),
      });

      if (res.ok) {
        const order = await res.json();
        setOrderNumber(order.orderNumber);
        clearCart();
        setStep("done");
      }
    } catch {
      // ignore
    } finally {
      setSubmitting(false);
    }
  };

  if (step === "done") {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center animate-scale-in">
          <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-emerald-500" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-white mb-4">
            Booking Confirmed!
          </h1>
          <p className="text-stone-400 mb-2">Your order number:</p>
          <p className="text-2xl font-bold text-gold-400 mb-6 font-mono">
            {orderNumber}
          </p>
          <p className="text-stone-500 text-sm mb-8">
            We&apos;ll be in touch to confirm your appointment. Thank you for
            choosing Golden Cut!
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-stone-950 font-bold rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all duration-300 text-sm"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center animate-fade-in-up">
          <ShoppingBag className="w-20 h-20 text-stone-700 mx-auto mb-6 animate-float" />
          <h1 className="text-3xl font-serif font-bold text-white mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-stone-500 mb-8">
            Add services or products to your cart
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-stone-950 font-bold rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all duration-300 text-sm"
          >
            Browse Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 sm:pt-24 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Steps */}
        <div className="flex items-center gap-4 mb-10 animate-fade-in">
          <button
            onClick={() => setStep("cart")}
            className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
              step === "cart" ? "text-gold-400" : "text-stone-500"
            }`}
          >
            <span
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                step === "cart"
                  ? "bg-gradient-to-r from-gold-500 to-gold-600 text-stone-950 shadow-lg shadow-gold-500/20"
                  : "bg-stone-800 text-stone-400"
              }`}
            >
              1
            </span>
            Cart
          </button>
          <div className="h-px flex-1 bg-stone-800 relative overflow-hidden">
            <div
              className={`absolute inset-y-0 left-0 bg-gradient-to-r from-gold-500 to-gold-600 transition-all duration-500 ${
                step === "info" ? "w-full" : "w-0"
              }`}
            />
          </div>
          <button
            onClick={() => step === "info" && setStep("info")}
            className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
              step === "info" ? "text-gold-400" : "text-stone-500"
            }`}
          >
            <span
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                step === "info"
                  ? "bg-gradient-to-r from-gold-500 to-gold-600 text-stone-950 shadow-lg shadow-gold-500/20"
                  : "bg-stone-800 text-stone-400"
              }`}
            >
              2
            </span>
            Details
          </button>
        </div>

        {step === "cart" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="lg:col-span-2 space-y-4">
              <h1 className="text-2xl font-serif font-bold text-white mb-6 animate-fade-in-up">
                Your Cart
              </h1>
              {items.map((item, idx) => (
                <div
                  key={item.productId}
                  className={`flex gap-4 p-4 bg-stone-900/50 rounded-xl border border-stone-800/50 card-hover animate-stagger stagger-${Math.min(idx + 1, 9)}`}
                >
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/services/${item.slug}`}
                      className="font-medium text-white hover:text-gold-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-gold-400 font-semibold mt-1">
                      {formatGBP(item.price)}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.productId, item.quantity - 1)
                          }
                          className="w-8 h-8 rounded-lg bg-stone-800 text-stone-300 hover:bg-stone-700 flex items-center justify-center transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-white font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.productId, item.quantity + 1)
                          }
                          className="w-8 h-8 rounded-lg bg-stone-800 text-stone-300 hover:bg-stone-700 flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-white font-bold">
                          {formatGBP(item.price * item.quantity)}
                        </span>
                        <button
                          onClick={() => removeItem(item.productId)}
                          className="text-stone-500 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 p-6 bg-stone-900/50 rounded-2xl border border-stone-800/50 animate-fade-in-right">
                <h3 className="text-lg font-serif font-bold text-white mb-4">
                  Order Summary
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-400">
                      Items: {items.length}
                    </span>
                    <span className="text-white">
                      {formatGBP(totalPrice)}
                    </span>
                  </div>
                  <div className="h-px bg-stone-800" />
                  <div className="flex justify-between">
                    <span className="text-white font-bold">Total</span>
                    <span className="text-xl font-bold text-gold-400">
                      {formatGBP(totalPrice)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setStep("info")}
                  className="w-full py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 text-stone-950 font-bold rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all duration-300 text-sm uppercase tracking-wider pulse-glow"
                >
                  Continue
                </button>
                <Link
                  href="/services"
                  className="flex items-center justify-center gap-2 mt-3 text-sm text-stone-400 hover:text-gold-400 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}

        {step === "info" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 animate-fade-in-left">
              <button
                onClick={() => setStep("cart")}
                className="flex items-center gap-2 text-sm text-stone-400 hover:text-gold-400 transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Cart
              </button>

              <h1 className="text-2xl font-serif font-bold text-white mb-6">
                Contact Information
              </h1>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-stone-400 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-xl text-white placeholder-stone-600 focus:outline-none focus:border-gold-500/50 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-stone-400 mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-xl text-white placeholder-stone-600 focus:outline-none focus:border-gold-500/50 transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-stone-400 mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-xl text-white placeholder-stone-600 focus:outline-none focus:border-gold-500/50 transition-colors"
                    placeholder="+44 7XXX XXX XXX"
                  />
                </div>
                <div>
                  <label className="block text-sm text-stone-400 mb-1.5">
                    Notes
                  </label>
                  <textarea
                    value={form.notes}
                    onChange={(e) =>
                      setForm({ ...form, notes: e.target.value })
                    }
                    rows={3}
                    className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-xl text-white placeholder-stone-600 focus:outline-none focus:border-gold-500/50 transition-colors resize-none"
                    placeholder="Preferred time, barber, or any special requests..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 text-stone-950 font-bold rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all duration-300 text-sm uppercase tracking-wider disabled:opacity-50 pulse-glow flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    "Processing..."
                  ) : (
                    <>
                      <Scissors className="w-4 h-4" />
                      Place Order
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 p-6 bg-stone-900/50 rounded-2xl border border-stone-800/50 animate-fade-in-right">
                <h3 className="text-lg font-serif font-bold text-white mb-4">
                  Your Order
                </h3>
                <div className="space-y-3 mb-5">
                  {items.map((item) => (
                    <div
                      key={item.productId}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-stone-400 truncate mr-2">
                        {item.name} × {item.quantity}
                      </span>
                      <span className="text-white whitespace-nowrap">
                        {formatGBP(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="h-px bg-stone-800 mb-4" />
                <div className="flex justify-between">
                  <span className="text-white font-bold">Total</span>
                  <span className="text-xl font-bold text-gold-400">
                    {formatGBP(totalPrice)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

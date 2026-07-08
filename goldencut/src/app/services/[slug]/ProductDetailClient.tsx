"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Clock,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  Check,
  Star,
  ArrowLeft,
  Shield,
  Sparkles,
  Award,
  Heart,
} from "lucide-react";
import StarRating from "@/components/StarRating";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/components/CartProvider";
import type { Product, Review } from "@/lib/types";

function formatGBP(value: number) {
  return `£${value.toFixed(2)}`;
}

interface ProductDetailProps {
  product: Product & { reviews: Review[]; related: Product[] };
}

export default function ProductDetailClient({ product }: ProductDetailProps) {
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    author: "",
    rating: 5,
    title: "",
    body: "",
  });
  const [submittingReview, setSubmittingReview] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const images = product.images || [];
  const price = parseFloat(product.price);
  const comparePrice = product.compareAtPrice
    ? parseFloat(product.compareAtPrice)
    : null;
  const discount = comparePrice
    ? Math.round(((comparePrice - price) / comparePrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price,
      image: images[0] || "",
      quantity,
      slug: product.slug,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittingReview(true);
    try {
      await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.id,
          ...reviewForm,
        }),
      });
      setReviewSubmitted(true);
      setReviewForm({ author: "", rating: 5, title: "", body: "" });
    } catch {
      // ignore
    } finally {
      setSubmittingReview(false);
    }
  };

  const nextImage = () =>
    setSelectedImage((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="pt-20 sm:pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm animate-fade-in">
          <Link
            href="/services"
            className="text-stone-500 hover:text-gold-400 transition-colors flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            All Services
          </Link>
          {product.categoryName && (
            <>
              <span className="text-stone-700">/</span>
              <Link
                href={`/services?category=${product.categorySlug}`}
                className="text-stone-500 hover:text-gold-400 transition-colors"
              >
                {product.categoryName}
              </Link>
            </>
          )}
          <span className="text-stone-700">/</span>
          <span className="text-stone-300">{product.name}</span>
        </div>

        {/* Product */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 mb-20">
          {/* Gallery */}
          <div className="animate-fade-in-left">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-900 mb-4 group">
              {images[selectedImage] && (
                <Image
                  src={images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              )}

              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {product.bestSeller && (
                  <span className="px-3 py-1.5 bg-gradient-to-r from-gold-400 to-gold-600 text-stone-950 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                    Bestseller
                  </span>
                )}
                {discount > 0 && (
                  <span className="px-3 py-1.5 bg-red-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                    -{discount}%
                  </span>
                )}
              </div>

              {/* Nav arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass text-white flex items-center justify-center hover:bg-stone-800/80 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass text-white flex items-center justify-center hover:bg-stone-800/80 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Image counter */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        selectedImage === i
                          ? "bg-gold-400 w-6"
                          : "bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === i
                        ? "border-gold-500 shadow-lg shadow-gold-500/20"
                        : "border-stone-800 hover:border-stone-600"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="animate-fade-in-right">
            {product.categoryName && (
              <p className="text-gold-500 text-sm uppercase tracking-[0.15em] font-medium mb-2">
                {product.categoryName}
              </p>
            )}

            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            {Number(product.avgRating) > 0 && (
              <div className="flex items-center gap-3 mb-5">
                <StarRating
                  rating={Number(product.avgRating)}
                  showValue
                  count={Number(product.reviewCount)}
                  size={16}
                />
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-white">
                {formatGBP(price)}
              </span>
              {comparePrice && (
                <span className="text-lg text-stone-500 line-through">
                  {formatGBP(comparePrice)}
                </span>
              )}
              {discount > 0 && (
                <span className="text-sm text-emerald-400 font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  Save {formatGBP(comparePrice! - price)}
                </span>
              )}
            </div>

            {/* Duration */}
            {product.duration && (
              <div className="flex items-center gap-2 mb-6 text-stone-400">
                <Clock className="w-5 h-5 text-gold-500" />
                <span>Duration: {product.duration}</span>
              </div>
            )}

            {/* Razor line divider */}
            <div className="razor-line mb-6" />

            {/* Description */}
            <p className="text-stone-300 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Add to cart */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-stone-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-stone-400 hover:text-white hover:bg-stone-800 transition-all duration-300"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-3 text-white font-medium min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-stone-400 hover:text-white hover:bg-stone-800 transition-all duration-300"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={added}
                className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-500 ${
                  added
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/20"
                    : "bg-gradient-to-r from-gold-500 to-gold-600 text-stone-950 hover:from-gold-400 hover:to-gold-500 hover:shadow-xl hover:shadow-gold-500/25 pulse-glow"
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5" />
                    Added!
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    Add to Cart
                  </>
                )}
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Award, text: "Expert Barbers" },
                { icon: Sparkles, text: "Premium Products" },
                { icon: Shield, text: "Quality Guaranteed" },
                { icon: Heart, text: "Relaxing Atmosphere" },
              ].map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-stone-900/50 border border-stone-800/50"
                >
                  <feature.icon className="w-4 h-4 text-gold-500 flex-shrink-0" />
                  <span className="text-sm text-stone-400">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-serif font-bold text-white">
              Reviews
              {product.reviews.length > 0 && (
                <span className="text-stone-500 text-lg ml-2">
                  ({product.reviews.length})
                </span>
              )}
            </h2>
          </div>

          {product.reviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              {product.reviews.map((review, idx) => (
                <div
                  key={review.id}
                  className={`p-5 bg-stone-900/50 rounded-xl border border-stone-800/50 card-hover animate-stagger stagger-${Math.min(idx + 1, 9)}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-400/20 to-gold-600/20 text-gold-400 flex items-center justify-center text-sm font-bold border border-gold-500/20">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          {review.author}
                        </p>
                        {review.verified && (
                          <p className="text-[10px] text-emerald-500 uppercase tracking-wider flex items-center gap-1">
                            <Check className="w-3 h-3" />
                            Verified Client
                          </p>
                        )}
                      </div>
                    </div>
                    <StarRating rating={review.rating} size={12} />
                  </div>
                  {review.title && (
                    <p className="font-medium text-white text-sm mb-1">
                      {review.title}
                    </p>
                  )}
                  {review.body && (
                    <p className="text-sm text-stone-400 leading-relaxed">
                      {review.body}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-stone-500 mb-10">No reviews yet</p>
          )}

          {/* Review form */}
          {!reviewSubmitted ? (
            <div className="max-w-xl p-6 bg-stone-900/30 rounded-2xl border border-stone-800/50">
              <h3 className="text-lg font-serif font-bold text-white mb-5">
                Leave a Review
              </h3>
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-sm text-stone-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={reviewForm.author}
                    onChange={(e) =>
                      setReviewForm({ ...reviewForm, author: e.target.value })
                    }
                    className="w-full px-4 py-2.5 bg-stone-900 border border-stone-800 rounded-xl text-sm text-white placeholder-stone-600 focus:outline-none focus:border-gold-500/50 transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm text-stone-400 mb-1.5">
                    Rating
                  </label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() =>
                          setReviewForm({ ...reviewForm, rating: star })
                        }
                        className="p-0.5 transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-7 h-7 transition-colors ${
                            star <= reviewForm.rating
                              ? "text-gold-400 fill-gold-400"
                              : "text-stone-600 hover:text-stone-500"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-stone-400 mb-1.5">
                    Title
                  </label>
                  <input
                    type="text"
                    value={reviewForm.title}
                    onChange={(e) =>
                      setReviewForm({ ...reviewForm, title: e.target.value })
                    }
                    className="w-full px-4 py-2.5 bg-stone-900 border border-stone-800 rounded-xl text-sm text-white placeholder-stone-600 focus:outline-none focus:border-gold-500/50 transition-colors"
                    placeholder="Sum up your experience"
                  />
                </div>
                <div>
                  <label className="block text-sm text-stone-400 mb-1.5">
                    Review
                  </label>
                  <textarea
                    value={reviewForm.body}
                    onChange={(e) =>
                      setReviewForm({ ...reviewForm, body: e.target.value })
                    }
                    rows={3}
                    className="w-full px-4 py-2.5 bg-stone-900 border border-stone-800 rounded-xl text-sm text-white placeholder-stone-600 focus:outline-none focus:border-gold-500/50 resize-none transition-colors"
                    placeholder="Tell us about your experience..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submittingReview}
                  className="px-6 py-2.5 bg-gradient-to-r from-gold-500 to-gold-600 text-stone-950 font-bold text-sm rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all duration-300 disabled:opacity-50"
                >
                  {submittingReview ? "Submitting..." : "Submit Review"}
                </button>
              </form>
            </div>
          ) : (
            <div className="p-6 bg-emerald-900/20 rounded-2xl border border-emerald-800/30 text-center animate-scale-in">
              <Check className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
              <p className="text-emerald-400 font-medium">
                Thank you for your review!
              </p>
              <p className="text-emerald-600 text-sm mt-1">
                It will be published after moderation
              </p>
            </div>
          )}
        </section>

        {/* Related */}
        {product.related.length > 0 && (
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

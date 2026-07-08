"use client";

import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  size?: number;
  showValue?: boolean;
  count?: number;
}

export default function StarRating({ rating, size = 14, showValue = false, count }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${
              star <= Math.round(rating)
                ? "text-gold-400 fill-gold-400"
                : "text-stone-600"
            }`}
            style={{ width: size, height: size }}
          />
        ))}
      </div>
      {showValue && (
        <span className="text-sm text-stone-400 ml-1">
          {Number(rating).toFixed(1)}
        </span>
      )}
      {count !== undefined && (
        <span className="text-xs text-stone-500 ml-0.5">
          ({count})
        </span>
      )}
    </div>
  );
}

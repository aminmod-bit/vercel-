import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { products, reviews, categories } from "@/db/schema";
import { eq, sql, desc } from "drizzle-orm";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const productRows = await db
    .select({
      id: products.id,
      name: products.name,
      slug: products.slug,
      description: products.description,
      shortDescription: products.shortDescription,
      price: products.price,
      compareAtPrice: products.compareAtPrice,
      categoryId: products.categoryId,
      categoryName: categories.name,
      categorySlug: categories.slug,
      images: products.images,
      duration: products.duration,
      featured: products.featured,
      bestSeller: products.bestSeller,
      inStock: products.inStock,
      avgRating: sql<number>`COALESCE(AVG(${reviews.rating}), 0)`.as("avg_rating"),
      reviewCount: sql<number>`COUNT(${reviews.id})`.as("review_count"),
    })
    .from(products)
    .leftJoin(categories, eq(products.categoryId, categories.id))
    .leftJoin(reviews, eq(products.id, reviews.productId))
    .where(eq(products.slug, slug))
    .groupBy(products.id, categories.name, categories.slug)
    .limit(1);

  if (productRows.length === 0) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  const productReviews = await db
    .select()
    .from(reviews)
    .where(eq(reviews.productId, productRows[0].id))
    .orderBy(desc(reviews.createdAt));

  return NextResponse.json({
    ...productRows[0],
    reviews: productReviews,
  });
}

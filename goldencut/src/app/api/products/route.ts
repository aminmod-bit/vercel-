import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { products, reviews, categories } from "@/db/schema";
import { eq, ilike, asc, desc, sql, and } from "drizzle-orm";

export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  const category = url.searchParams.get("category");
  const search = url.searchParams.get("search");
  const sort = url.searchParams.get("sort") || "featured";
  const featured = url.searchParams.get("featured");
  const bestSeller = url.searchParams.get("bestSeller");

  const conditions = [];

  if (category) {
    const cat = await db
      .select()
      .from(categories)
      .where(eq(categories.slug, category))
      .limit(1);
    if (cat.length > 0) {
      conditions.push(eq(products.categoryId, cat[0].id));
    }
  }

  if (search) {
    conditions.push(ilike(products.name, `%${search}%`));
  }

  if (featured === "true") {
    conditions.push(eq(products.featured, true));
  }

  if (bestSeller === "true") {
    conditions.push(eq(products.bestSeller, true));
  }

  let orderBy;
  switch (sort) {
    case "price-asc":
      orderBy = asc(products.price);
      break;
    case "price-desc":
      orderBy = desc(products.price);
      break;
    case "name":
      orderBy = asc(products.name);
      break;
    case "newest":
      orderBy = desc(products.createdAt);
      break;
    default:
      orderBy = desc(products.featured);
  }

  const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

  const result = await db
    .select({
      id: products.id,
      name: products.name,
      slug: products.slug,
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
    .where(whereClause)
    .groupBy(products.id, categories.name, categories.slug)
    .orderBy(orderBy);

  return NextResponse.json(result);
}

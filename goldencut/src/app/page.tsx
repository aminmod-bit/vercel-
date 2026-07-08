import { db } from "@/db";
import { products, reviews, categories } from "@/db/schema";
import { eq, desc, sql } from "drizzle-orm";
import HomeClient from "./HomeClient";

export const dynamic = "force-dynamic";

async function getData() {
  try {
    const cats = await db
      .select()
      .from(categories)
      .orderBy(categories.sortOrder);

    const featuredProducts = await db
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
      .where(eq(products.featured, true))
      .groupBy(products.id, categories.name, categories.slug)
      .orderBy(desc(products.bestSeller))
      .limit(6);

    const bestSellers = await db
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
      .where(eq(products.bestSeller, true))
      .groupBy(products.id, categories.name, categories.slug)
      .limit(6);

    return { cats, featuredProducts, bestSellers };
  } catch {
    return { cats: [], featuredProducts: [], bestSellers: [] };
  }
}

export default async function HomePage() {
  const data = await getData();
  return <HomeClient {...data} />;
}

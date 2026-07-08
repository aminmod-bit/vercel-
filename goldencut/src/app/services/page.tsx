import { db } from "@/db";
import { products, reviews, categories } from "@/db/schema";
import { eq, sql, asc } from "drizzle-orm";
import ServicesClient from "./ServicesClient";

export const dynamic = "force-dynamic";

async function getData() {
  try {
    const cats = await db
      .select()
      .from(categories)
      .orderBy(asc(categories.sortOrder));

    const allProducts = await db
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
        avgRating:
          sql<number>`COALESCE(AVG(${reviews.rating}), 0)`.as("avg_rating"),
        reviewCount:
          sql<number>`COUNT(${reviews.id})`.as("review_count"),
      })
      .from(products)
      .leftJoin(categories, eq(products.categoryId, categories.id))
      .leftJoin(reviews, eq(products.id, reviews.productId))
      .groupBy(products.id, categories.name, categories.slug);

    return { cats, allProducts };
  } catch {
    return { cats: [], allProducts: [] };
  }
}

export default async function ServicesPage() {
  const data = await getData();
  return <ServicesClient {...data} />;
}

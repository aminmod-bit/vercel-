import { db } from "@/db";
import { products, reviews, categories } from "@/db/schema";
import { eq, sql, ne, and } from "drizzle-orm";
import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";

export const dynamic = "force-dynamic";

async function getProduct(slug: string) {
  const rows = await db
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
      avgRating:
        sql<number>`COALESCE(AVG(${reviews.rating}), 0)`.as("avg_rating"),
      reviewCount:
        sql<number>`COUNT(${reviews.id})`.as("review_count"),
    })
    .from(products)
    .leftJoin(categories, eq(products.categoryId, categories.id))
    .leftJoin(reviews, eq(products.id, reviews.productId))
    .where(eq(products.slug, slug))
    .groupBy(products.id, categories.name, categories.slug)
    .limit(1);

  if (rows.length === 0) return null;

  const productReviews = await db
    .select()
    .from(reviews)
    .where(eq(reviews.productId, rows[0].id));

  // Related products from same category
  const related = rows[0].categoryId
    ? await db
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
        .where(
          and(
            eq(products.categoryId, rows[0].categoryId),
            ne(products.id, rows[0].id)
          )
        )
        .groupBy(products.id, categories.name, categories.slug)
        .limit(3)
    : [];

  return {
    ...rows[0],
    reviews: productReviews,
    related,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}

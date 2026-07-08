import { NextResponse } from "next/server";
import { db } from "@/db";
import { categories, products, reviews } from "@/db/schema";
import { sql } from "drizzle-orm";

export async function POST() {
  try {
    await db.execute(sql`TRUNCATE order_items, orders, reviews, products, categories RESTART IDENTITY CASCADE`);

    const cats = await db.insert(categories).values([
      {
        name: "Haircuts",
        slug: "haircuts",
        description: "Classic and modern men's haircuts crafted by master barbers",
        image: "https://images.pexels.com/photos/1453005/pexels-photo-1453005.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        sortOrder: 1,
      },
      {
        name: "Beard & Shave",
        slug: "beard",
        description: "Professional beard grooming and royal hot-towel shaves",
        image: "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        sortOrder: 2,
      },
      {
        name: "Face Care",
        slug: "face-care",
        description: "Luxury spa treatments and skincare for the modern gentleman",
        image: "https://images.pexels.com/photos/5912294/pexels-photo-5912294.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        sortOrder: 3,
      },
      {
        name: "Styling",
        slug: "styling",
        description: "Professional styling and premium hair products",
        image: "https://images.pexels.com/photos/5192490/pexels-photo-5192490.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        sortOrder: 4,
      },
      {
        name: "Packages",
        slug: "combo",
        description: "Value bundles for a complete grooming transformation",
        image: "https://images.pexels.com/photos/7195814/pexels-photo-7195814.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        sortOrder: 5,
      },
      {
        name: "Products",
        slug: "products",
        description: "Professional-grade grooming products for home care",
        image: "https://images.pexels.com/photos/7697641/pexels-photo-7697641.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        sortOrder: 6,
      },
    ]).returning();

    const catMap: Record<string, number> = {};
    cats.forEach(c => { catMap[c.slug] = c.id; });

    const prods = await db.insert(products).values([
      {
        name: "Classic Haircut",
        slug: "classic-haircut",
        description: "Our signature classic haircut includes a consultation with your barber, a luxurious hair wash with premium shampoo, precision cutting with scissors and clippers, and a final styling with professional products. Our master barbers are trained in all classic techniques and will help find the perfect look for your face shape and hair type.",
        shortDescription: "Traditional men's haircut with consultation & styling",
        price: "28.00",
        compareAtPrice: null,
        categoryId: catMap["haircuts"],
        images: [
          "https://images.pexels.com/photos/1453005/pexels-photo-1453005.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          "https://images.pexels.com/photos/897263/pexels-photo-897263.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          "https://images.pexels.com/photos/897273/pexels-photo-897273.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        ],
        duration: "45 min",
        featured: true,
        bestSeller: true,
      },
      {
        name: "Designer Haircut",
        slug: "model-haircut",
        description: "The designer haircut is a bespoke experience tailored to your unique style. Your barber will select a cut based on your face shape, hair texture and personal preferences. Includes full consultation, precision cutting, luxury wash and professional finishing.",
        shortDescription: "Bespoke cut with design elements & personal styling",
        price: "38.00",
        compareAtPrice: "45.00",
        categoryId: catMap["haircuts"],
        images: [
          "https://images.pexels.com/photos/13138585/pexels-photo-13138585.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          "https://images.pexels.com/photos/5970247/pexels-photo-5970247.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        ],
        duration: "60 min",
        featured: true,
        bestSeller: false,
      },
      {
        name: "Fade Haircut",
        slug: "fade-haircut",
        description: "Expert fade haircut with a seamless gradient transition from short to long. Available in low, mid and high fade variations. Your barber will create a flawless blend that elevates your style. Includes consultation and finishing.",
        shortDescription: "Seamless gradient fade in any style you choose",
        price: "32.00",
        categoryId: catMap["haircuts"],
        images: [
          "https://images.pexels.com/photos/7447148/pexels-photo-7447148.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          "https://images.pexels.com/photos/37533244/pexels-photo-37533244.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        ],
        duration: "50 min",
        featured: false,
        bestSeller: true,
      },
      {
        name: "Junior Haircut",
        slug: "kids-haircut",
        description: "A stylish haircut for young gentlemen under 12. Our barbers know exactly how to work with younger clients — we'll create a sharp look in a comfortable, relaxed atmosphere. Includes wash and styling.",
        shortDescription: "Stylish haircut for boys under 12",
        price: "18.00",
        categoryId: catMap["haircuts"],
        images: [
          "https://images.pexels.com/photos/9971241/pexels-photo-9971241.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        ],
        duration: "30 min",
        featured: false,
        bestSeller: false,
      },
      {
        name: "Beard Trim & Shape",
        slug: "beard-trim",
        description: "Professional beard grooming includes shape selection for your face type, beard and moustache trimming, and precise contour lining with a straight razor. Your barber will craft the ideal beard shape and offer home-care advice.",
        shortDescription: "Expert beard shaping tailored to your face",
        price: "22.00",
        categoryId: catMap["beard"],
        images: [
          "https://images.pexels.com/photos/3998421/pexels-photo-3998421.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          "https://images.pexels.com/photos/7697443/pexels-photo-7697443.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        ],
        duration: "30 min",
        featured: true,
        bestSeller: true,
      },
      {
        name: "Royal Hot-Towel Shave",
        slug: "royal-shave",
        description: "The Royal Shave is a ritual for true gentlemen. Hot towels to open pores, pre-shave oil, precision straight-razor shaving, and a soothing aftershave balm. Experience unmatched smoothness and total relaxation.",
        shortDescription: "Straight-razor shave with hot towels & luxury oils",
        price: "35.00",
        compareAtPrice: "42.00",
        categoryId: catMap["beard"],
        images: [
          "https://images.pexels.com/photos/7697481/pexels-photo-7697481.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        ],
        duration: "40 min",
        featured: true,
        bestSeller: false,
      },
      {
        name: "Beard Colour Camouflage",
        slug: "beard-camouflage",
        description: "Natural grey-blending for your beard — a seamless result without harsh colour lines. We use professional semi-permanent products that gradually wash out. Results last up to 4 weeks.",
        shortDescription: "Natural grey-blending for a youthful beard",
        price: "25.00",
        categoryId: catMap["beard"],
        images: [
          "https://images.pexels.com/photos/3998414/pexels-photo-3998414.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        ],
        duration: "35 min",
        featured: false,
        bestSeller: false,
      },
      {
        name: "Charcoal Face Mask",
        slug: "black-mask",
        description: "Deep-cleansing activated charcoal peel-off mask. The treatment includes cleansing, steam, mask application and removal, followed by a finishing moisturiser. Leaves skin clean, clear and mattified.",
        shortDescription: "Deep-cleansing charcoal peel-off mask",
        price: "30.00",
        categoryId: catMap["face-care"],
        images: [
          "https://images.pexels.com/photos/5912294/pexels-photo-5912294.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          "https://images.pexels.com/photos/6187298/pexels-photo-6187298.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        ],
        duration: "30 min",
        featured: false,
        bestSeller: true,
      },
      {
        name: "Facial Massage",
        slug: "face-massage",
        description: "A relaxing facial massage using premium oils. Relieves tension, improves circulation and leaves your skin looking healthy and refreshed. The perfect add-on to any haircut.",
        shortDescription: "Relaxing facial massage with premium oils",
        price: "20.00",
        categoryId: catMap["face-care"],
        images: [
          "https://images.pexels.com/photos/6187298/pexels-photo-6187298.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        ],
        duration: "20 min",
        featured: false,
        bestSeller: false,
      },
      {
        name: "Hair Styling",
        slug: "hair-styling",
        description: "Professional styling using premium finishing products. Your barber will find the perfect look and show you how to recreate it at home. Ideal for special occasions or refreshing your everyday style.",
        shortDescription: "Professional blow-dry & finish with premium products",
        price: "15.00",
        categoryId: catMap["styling"],
        images: [
          "https://images.pexels.com/photos/5192490/pexels-photo-5192490.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          "https://images.pexels.com/photos/3944747/pexels-photo-3944747.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        ],
        duration: "20 min",
        featured: false,
        bestSeller: false,
      },
      {
        name: "Grey Camouflage",
        slug: "hair-camouflage",
        description: "Natural grey-blending without a dramatic colour change. We use ammonia-free professional toners for the most natural-looking result. Lasts 4–6 weeks.",
        shortDescription: "Ammonia-free grey-blending for natural results",
        price: "35.00",
        categoryId: catMap["styling"],
        images: [
          "https://images.pexels.com/photos/12464843/pexels-photo-12464843.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        ],
        duration: "45 min",
        featured: false,
        bestSeller: false,
      },
      {
        name: "Haircut & Beard Combo",
        slug: "haircut-beard-combo",
        description: "Our best-value package: a classic or designer haircut paired with a full beard trim and shape. Save up to 20% compared to booking separately. A complete transformation in one visit.",
        shortDescription: "Haircut + beard trim bundle — save 20%",
        price: "42.00",
        compareAtPrice: "50.00",
        categoryId: catMap["combo"],
        images: [
          "https://images.pexels.com/photos/4969874/pexels-photo-4969874.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          "https://images.pexels.com/photos/897273/pexels-photo-897273.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        ],
        duration: "75 min",
        featured: true,
        bestSeller: true,
      },
      {
        name: "The Gentleman Package",
        slug: "gentleman-package",
        description: "The ultimate grooming experience: designer haircut, full beard trim, royal hot-towel shave of the contours, charcoal face mask and facial massage. A premium experience for those who value quality. Includes a complimentary drink.",
        shortDescription: "Full luxury treatment: cut, beard, face care & drink",
        price: "85.00",
        compareAtPrice: "110.00",
        categoryId: catMap["combo"],
        images: [
          "https://images.pexels.com/photos/7195814/pexels-photo-7195814.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          "https://images.pexels.com/photos/12339159/pexels-photo-12339159.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        ],
        duration: "120 min",
        featured: true,
        bestSeller: true,
      },
      {
        name: "Father & Son",
        slug: "father-son",
        description: "A special package for dad and lad: two haircuts at a discounted price. Spend quality time together in the stylish atmosphere of our barbershop.",
        shortDescription: "Two haircuts: for dad and the young gentleman",
        price: "40.00",
        compareAtPrice: "46.00",
        categoryId: catMap["combo"],
        images: [
          "https://images.pexels.com/photos/9971241/pexels-photo-9971241.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        ],
        duration: "75 min",
        featured: false,
        bestSeller: false,
      },
      {
        name: "Styling Pomade",
        slug: "styling-pomade",
        description: "Professional medium-hold pomade with a natural sheen. Water-soluble for easy wash-out. Perfect for classic and modern styles. 100 ml.",
        shortDescription: "Medium-hold pomade with a natural sheen",
        price: "18.00",
        categoryId: catMap["products"],
        images: [
          "https://images.pexels.com/photos/9511913/pexels-photo-9511913.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        ],
        duration: null,
        featured: false,
        bestSeller: false,
      },
      {
        name: "Beard Oil",
        slug: "beard-oil",
        description: "Nourishing beard oil infused with jojoba, argan and vitamin E. Softens facial hair, moisturises skin and delivers a healthy shine. 50 ml.",
        shortDescription: "Nourishing oil with jojoba, argan & vitamin E",
        price: "16.00",
        categoryId: catMap["products"],
        images: [
          "https://images.pexels.com/photos/7697641/pexels-photo-7697641.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        ],
        duration: null,
        featured: false,
        bestSeller: true,
      },
      {
        name: "Complete Grooming Set",
        slug: "full-care-set",
        description: "A luxury gift set containing styling pomade, beard oil, aftershave balm and a handcrafted wooden comb. The perfect present for the gentleman in your life.",
        shortDescription: "Gift set: pomade, beard oil, balm & wooden comb",
        price: "55.00",
        compareAtPrice: "68.00",
        categoryId: catMap["products"],
        images: [
          "https://images.pexels.com/photos/31840003/pexels-photo-31840003.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          "https://images.pexels.com/photos/3944747/pexels-photo-3944747.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        ],
        duration: null,
        featured: true,
        bestSeller: false,
      },
    ]).returning();

    const reviewData = [
      { productSlug: "classic-haircut", author: "James M.", rating: 5, title: "Best haircut in London", body: "Been coming here for six months — brilliant result every time. The barbers truly know their craft!", verified: true },
      { productSlug: "classic-haircut", author: "David K.", rating: 5, title: "Highly recommend!", body: "Fantastic atmosphere, professional approach. The cut holds its shape perfectly.", verified: true },
      { productSlug: "classic-haircut", author: "Ian P.", rating: 4, title: "Great quality, bit pricey", body: "Quality is top-notch, but the price is on the higher side. Worth it though.", verified: false },
      { productSlug: "model-haircut", author: "Sebastian V.", rating: 5, title: "Absolutely brilliant!", body: "My barber found the perfect cut for me. Getting compliments every day!", verified: true },
      { productSlug: "model-haircut", author: "Max L.", rating: 5, title: "True professionals", body: "Individual approach, the barber listened to all my wishes. Result exceeded expectations.", verified: true },
      { productSlug: "fade-haircut", author: "Arthur G.", rating: 5, title: "Perfect fade", body: "The smoothest gradient I've ever had! The barber is a true artist. Won't go anywhere else.", verified: true },
      { productSlug: "fade-haircut", author: "Nick S.", rating: 4, title: "Very good", body: "Excellent haircut, pleasant atmosphere. Only had to wait a few minutes.", verified: true },
      { productSlug: "beard-trim", author: "William N.", rating: 5, title: "Magazine-worthy beard", body: "Perfect shape, razor-sharp lines. The barber gave great home-care advice too.", verified: true },
      { productSlug: "beard-trim", author: "Paul D.", rating: 5, title: "Finally found my barber", body: "Tried many barbershops, this one is the best by far. Beard game on point.", verified: true },
      { productSlug: "royal-shave", author: "Andrew K.", rating: 5, title: "A royal experience", body: "Hot towels, straight razor — it's something else! Skin has never been smoother. Incredibly relaxing.", verified: true },
      { productSlug: "royal-shave", author: "Oliver T.", rating: 4, title: "Lovely treatment", body: "Thoroughly enjoyed it, very relaxing procedure. Will definitely come back.", verified: false },
      { productSlug: "haircut-beard-combo", author: "Ryan S.", rating: 5, title: "Best combo deal", body: "Haircut and beard in one visit — super convenient. Top quality, great value.", verified: true },
      { productSlug: "haircut-beard-combo", author: "Eugene B.", rating: 5, title: "Total transformation", body: "Walked in one man, walked out another! The missus barely recognised me :) Highly recommend!", verified: true },
      { productSlug: "haircut-beard-combo", author: "Michael R.", rating: 4, title: "Solid package", body: "Everything done professionally and efficiently. Good value for money.", verified: true },
      { productSlug: "gentleman-package", author: "Constantine A.", rating: 5, title: "VIP treatment", body: "The full package is something else. Two hours of pure relaxation and grooming. Felt like a new man!", verified: true },
      { productSlug: "gentleman-package", author: "Dennis F.", rating: 5, title: "Best gift ever", body: "My wife got me a voucher. Best present I've ever received! Absolutely doing it again.", verified: true },
      { productSlug: "black-mask", author: "Tim H.", rating: 5, title: "Clear skin", body: "Skin was noticeably cleaner after the mask. Recommend adding it to any haircut visit.", verified: true },
      { productSlug: "beard-oil", author: "George M.", rating: 5, title: "Excellent oil", body: "Beard became soft and manageable. The scent is pleasant and not overpowering.", verified: true },
      { productSlug: "beard-oil", author: "Victor Z.", rating: 4, title: "Good quality", body: "Nice oil, but it runs out quite fast. Overall would recommend.", verified: true },
      { productSlug: "full-care-set", author: "Alexander P.", rating: 5, title: "Perfect gift", body: "Gave it to a mate for his birthday — he was chuffed! Beautiful packaging, quality products.", verified: true },
    ];

    const prodMap: Record<string, number> = {};
    prods.forEach(p => { prodMap[p.slug] = p.id; });

    for (const r of reviewData) {
      const productId = prodMap[r.productSlug];
      if (productId) {
        await db.insert(reviews).values({
          productId,
          author: r.author,
          rating: r.rating,
          title: r.title,
          body: r.body,
          verified: r.verified,
        });
      }
    }

    return NextResponse.json({ success: true, products: prods.length, reviews: reviewData.length });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

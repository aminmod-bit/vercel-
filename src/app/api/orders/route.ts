import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { orders, orderItems } from "@/db/schema";
import { v4 as uuid } from "uuid";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { customerName, customerEmail, customerPhone, notes, items } = body;

    if (!customerName || !customerEmail || !items || items.length === 0) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const subtotal = items.reduce(
      (sum: number, item: { price: number; quantity: number }) =>
        sum + item.price * item.quantity,
      0
    );

    const orderNumber = `GC-${uuid().slice(0, 8).toUpperCase()}`;

    const order = await db.insert(orders).values({
      orderNumber,
      customerName,
      customerEmail,
      customerPhone: customerPhone || null,
      subtotal: subtotal.toFixed(2),
      total: subtotal.toFixed(2),
      notes: notes || null,
    }).returning();

    for (const item of items) {
      await db.insert(orderItems).values({
        orderId: order[0].id,
        productId: item.productId,
        productName: item.productName,
        price: item.price.toFixed(2),
        quantity: item.quantity,
      });
    }

    return NextResponse.json(order[0], { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

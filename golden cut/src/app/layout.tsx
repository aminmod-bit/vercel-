import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartSlideout from "@/components/CartSlideout";

export const metadata: Metadata = {
  title: "Golden Cut Barbershop — Premium Grooming Experience",
  description:
    "London's premier barbershop. Expert haircuts, hot towel shaves, beard grooming & luxury treatments. Book your appointment online.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-stone-950 text-stone-100 antialiased min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <CartSlideout />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

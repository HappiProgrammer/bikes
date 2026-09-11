"use client";
// components/layout/Navbar.tsx

import Link from "next/link";
import { useCart } from "../../lib/cart-context";
import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/Button";

export default function Navbar() {
  const { itemCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-surface text-onSurface shadow-md backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-display text-primary">
          KINETIX
        </Link>

        {/* Primary navigation */}
        <div className="hidden md:flex space-x-6 font-body text-sm">
          <Link href="/shop" className="hover:text-primaryDark transition-colors">
            Shop
          </Link>
          <Link href="/build-your-bike" className="hover:text-primaryDark transition-colors">
            Build Your Bike
          </Link>
          <Link href="/accessories" className="hover:text-primaryDark transition-colors">
            Accessories
          </Link>
          <Link href="/store-locator" className="hover:text-primaryDark transition-colors">
            Find a Store
          </Link>
        </div>

        {/* Cart icon with live count */}
        <Button variant="outline" className="relative flex items-center">
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary rounded-full text-xs px-1.5 py-0.5 text-onSurface">
              {itemCount}
            </span>
          )}
        </Button>
      </div>
    </nav>
  );
}

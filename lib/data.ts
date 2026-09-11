// lib/data.ts

import { Product } from "../types/product";
import { products } from "../data/products";

export function getProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export interface FilterOptions {
  category?: string;
  minPriceCents?: number;
  maxPriceCents?: number;
  // add more filters as needed (range, motor power, etc.)
}

export function filterProducts(options: FilterOptions): Product[] {
  return products.filter((p) => {
    if (options.category && p.category !== options.category) return false;
    if (options.minPriceCents) {
      const min = options.minPriceCents;
      if (!p.variants.some((v) => v.priceCents >= min)) return false;
    }
    if (options.maxPriceCents) {
      const max = options.maxPriceCents;
      if (!p.variants.some((v) => v.priceCents <= max)) return false;
    }
    return true;
  });
}

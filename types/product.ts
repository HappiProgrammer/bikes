// types/product.ts

export interface Variant {
  id: string;
  name: string; // e.g., "Standard", "Pro", "Long Range"
  priceCents: number; // price in cents
  priceId?: string;
  color?: string;
  frameSize?: string;
  accessoryIds?: string[];
}

export interface SpecSheet {
  motor?: string;
  battery?: string;
  range?: string;
  topSpeed?: string;
  weight?: string;
  torque?: string;
  class?: string;
  frameSizes?: string;
  wheelSize?: string;
  chargeTime?: string;
  payload?: string;
  assistLevels?: string;
  categorySpecific?: Record<string, string>;
}

export interface Product {
  slug: string; // URL friendly identifier
  name: string;
  description: string;
  shortDescription: string;
  images: string[]; // paths relative to /public/images
  specs: SpecSheet;
  variants: Variant[];
  category: "commuter" | "all-terrain" | "mobility-scooters" | "labubu";
  bikeType?: "all-terrain e-bike" | "urban commuter e-bike";
  compatibleAccessories?: string[];
}

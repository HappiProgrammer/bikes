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
  motor: string;
  battery: string;
  range: string; // e.g., "85mi"
  topSpeed: string; // e.g., "28mph"
  weight: string;
  torque: string;
  class: string;
  frameSizes: string;
  wheelSize: string;
  chargeTime: string;
  payload: string;
  assistLevels: string;
}

export interface Product {
  slug: string; // URL friendly identifier
  name: string;
  description: string;
  shortDescription: string;
  images: string[]; // paths relative to /public/images
  specs: SpecSheet;
  variants: Variant[];
  category: "commuter" | "all-terrain";
  compatibleAccessories: string[];
}

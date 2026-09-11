// data/products.ts

import { Product } from "../types/product";

export const products: Product[] = [
  {
    slug: "apex-7",
    name: "Apex-7",
    shortDescription: "All‑Terrain Hyper‑Commuter",
    description: "The Apex‑7 combines a 750W mid‑drive motor, 95Nm torque, and a 720Wh battery to deliver up to 85 mi range and 28 mph top speed. Perfect for city‑to‑trail adventures.",
    images: ["/images/apex-7/front.jpg", "/images/apex-7/side.jpg"],
    category: "commuter",
    specs: {
      motor: "Bafang M620 750W",
      battery: "720Wh LG Cell",
      range: "85mi",
      topSpeed: "28mph",
      weight: "28.5 lbs",
      torque: "95Nm",
    },
    variants: [
      {
        id: "apex-7-standard",
        name: "Standard",
        priceCents: 349900,
        priceId: "price_apex7_standard",
        color: "Carbon Black",
        frameSize: "M",
      },
      {
        id: "apex-7-pro",
        name: "Pro",
        priceCents: 399900,
        priceId: "price_apex7_pro",
        color: "Matte Metallic",
        frameSize: "L",
      },
    ],
  },
  {
    slug: "stealth-r",
    name: "Stealth‑R",
    shortDescription: "Carbon Aero Urban Rocket",
    description: "A lightweight carbon frame paired with a 350W hub motor and Gates CDX belt for silent, maintenance‑free rides. Top speed 32 mph.",
    images: ["/images/stealth-r/front.jpg", "/images/stealth-r/side.jpg"],
    category: "commuter",
    specs: {
      motor: "350W Hub Motor",
      battery: "500Wh",
      range: "45mi",
      topSpeed: "32mph",
      weight: "24.7 lbs",
    },
    variants: [
      {
        id: "stealth-r-standard",
        name: "Standard",
        priceCents: 289900,
        priceId: "price_stealthr_standard",
        color: "Midnight Carbon",
        frameSize: "S",
      },
    ],
  },
  // Add more products as needed
];

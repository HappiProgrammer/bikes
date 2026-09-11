export type AccessoryCategory =
  | "carry"
  | "protection"
  | "visibility"
  | "security"
  | "power"
  | "maintenance";

export interface Accessory {
  id: string;
  name: string;
  category: AccessoryCategory;
  description: string;
  priceCents: number;
  compatibleWith: string[];
  image?: string;
  imageAlt?: string;
}

export const accessories: Accessory[] = [
  {
    id: "commuter-rack",
    name: "Commuter Rear Rack",
    category: "carry",
    description: "Tubular aluminum rack rated for 55 lb pannier and cargo loads.",
    priceCents: 12900,
    compatibleWith: ["apex-7", "stealth-r"],
    image: "/images/accessories/commuter-rear-rack.jpg",
    imageAlt: "Bicycle luggage rack mounted above a rear wheel",
  },
  {
    id: "waterproof-panniers",
    name: "Waterproof Pannier Pair",
    category: "carry",
    description: "Two 20-liter roll-top bags with reflective panels for daily cargo.",
    priceCents: 14900,
    compatibleWith: ["apex-7", "stealth-r"],
    image: "/images/accessories/waterproof-pannier-pair.jpg",
    imageAlt: "Leather pannier bag attached to a bicycle rear rack",
  },
  {
    id: "all-weather-fenders",
    name: "All-Weather Fender Set",
    category: "protection",
    description: "Full-coverage front and rear mudguards for wet commutes and gravel spray.",
    priceCents: 7900,
    compatibleWith: ["apex-7", "stealth-r"],
    image: "/images/accessories/all-weather-fenders.jpg",
    imageAlt: "Bicycle mudguard and front lamp over a front wheel",
  },
  {
    id: "commuter-light-kit",
    name: "Commuter Light Kit",
    category: "visibility",
    description: "600-lumen front light and rear red light with rechargeable USB-C batteries.",
    priceCents: 6900,
    compatibleWith: ["apex-7", "stealth-r"],
    image: "/images/accessories/commuter-light-kit.jpg",
    imageAlt: "Bicycle front light mounted on a handlebar",
  },
  {
    id: "u-lock-cable",
    name: "U-Lock and Cable",
    category: "security",
    description: "Hardened steel U-lock with a 4-foot secondary cable for securing both wheels.",
    priceCents: 5900,
    compatibleWith: ["apex-7", "stealth-r"],
    image: "/images/accessories/u-lock-and-cable.jpg",
    imageAlt: "Combination bicycle lock secured around an orange bicycle frame",
  },
  {
    id: "spare-720wh-battery",
    name: "720Wh Spare Battery",
    category: "power",
    description: "Locking replacement battery for the Apex-7, with a protective travel case.",
    priceCents: 89900,
    compatibleWith: ["apex-7"],
  },
  {
    id: "spare-500wh-battery",
    name: "500Wh Spare Battery",
    category: "power",
    description: "Locking replacement battery for the Stealth-R commuter e-bike.",
    priceCents: 69900,
    compatibleWith: ["stealth-r"],
  },
  {
    id: "fast-charger",
    name: "4A Fast Charger",
    category: "power",
    description: "Compact replacement charger for faster charging at home or the office.",
    priceCents: 11900,
    compatibleWith: ["apex-7", "stealth-r"],
  },
  {
    id: "handlebar-phone-mount",
    name: "Handlebar Phone Mount",
    category: "carry",
    description: "Vibration-resistant mount with a tool-free quick-release cradle.",
    priceCents: 3900,
    compatibleWith: ["apex-7", "stealth-r"],
    image: "/images/accessories/handlebar-phone-mount.jpg",
    imageAlt: "Smartphone displaying navigation on an electric bike handlebar mount",
  },
  {
    id: "trail-repair-kit",
    name: "Trail Repair Kit",
    category: "maintenance",
    description: "Multi-tool, tire levers, patches, chain quick-link, and a compact pump.",
    priceCents: 4900,
    compatibleWith: ["apex-7", "stealth-r"],
    image: "/images/accessories/trail-repair-kit.jpg",
    imageAlt: "Cyclist repairing a bicycle with tools indoors",
  },
];
"use client";

import { useCart } from '@/lib/cart-context';
import Button from '@/components/ui/Button';
import { Product } from '@/types/product';
import { accessories } from '@/data/accessories';

export default function ProductDetails({ product }: { product: Product }) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, product.variants[0], 1);
  };

  return (
    <div className="flex flex-col space-y-6">
      <h1 className="text-4xl font-bold text-primary-volt">{product.name}</h1>
      <p className="text-sm font-medium uppercase tracking-[0.12em] text-primary">{product.bikeType ?? product.category.replace("-", " ")}</p>
      <p className="text-lg text-gray-300">{product.description}</p>
      <div className="text-2xl font-semibold text-primary-volt">
        Starting at ${product.variants[0].priceCents / 100}
      </div>
      <div className="grid grid-cols-2 gap-3 border-y border-gray-700 py-5 text-sm md:grid-cols-3">
        {Object.entries({ Motor: product.specs.motor, Battery: product.specs.battery, Range: product.specs.range, Torque: product.specs.torque, "Top speed": product.specs.topSpeed, "E-bike class": product.specs.class, "Frame sizes": product.specs.frameSizes, "Wheel size": product.specs.wheelSize, "Charge time": product.specs.chargeTime, Payload: product.specs.payload, Assist: product.specs.assistLevels, Weight: product.specs.weight, ...product.specs.categorySpecific }).filter(([, value]) => value).map(([label, value]) => <div key={label}><span className="block text-gray-400">{label}</span><span>{value}</span></div>)}
      </div>
      <div>
        <h2 className="font-display text-xl text-primary">Compatible accessories</h2>
        <p className="mt-2 text-sm text-gray-300">
          {product.compatibleAccessories?.length ? accessories.filter((accessory) => product.compatibleAccessories?.includes(accessory.id)).map((accessory) => accessory.name).join(' · ') : 'Category-specific product; no bike accessory compatibility applies.'}
        </p>
      </div>
      <Button onClick={handleAddToCart} className="w-max">
        Add to Cart
      </Button>
    </div>
  );
}
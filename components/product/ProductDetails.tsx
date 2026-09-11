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
      <p className="text-sm font-medium uppercase tracking-[0.12em] text-primary">{product.bikeType}</p>
      <p className="text-lg text-gray-300">{product.description}</p>
      <div className="text-2xl font-semibold text-primary-volt">
        Starting at ${product.variants[0].priceCents / 100}
      </div>
      <div className="grid grid-cols-2 gap-3 border-y border-gray-700 py-5 text-sm md:grid-cols-3">
        <div><span className="block text-gray-400">Motor</span><span>{product.specs.motor}</span></div>
        <div><span className="block text-gray-400">Battery</span><span>{product.specs.battery}</span></div>
        <div><span className="block text-gray-400">Range</span><span>{product.specs.range}</span></div>
        <div><span className="block text-gray-400">Torque</span><span>{product.specs.torque}</span></div>
        <div><span className="block text-gray-400">Top speed</span><span>{product.specs.topSpeed}</span></div>
        <div><span className="block text-gray-400">E-bike class</span><span>{product.specs.class}</span></div>
        <div><span className="block text-gray-400">Frame sizes</span><span>{product.specs.frameSizes}</span></div>
        <div><span className="block text-gray-400">Wheel size</span><span>{product.specs.wheelSize}</span></div>
        <div><span className="block text-gray-400">Charge time</span><span>{product.specs.chargeTime}</span></div>
        <div><span className="block text-gray-400">Payload</span><span>{product.specs.payload}</span></div>
        <div><span className="block text-gray-400">Assist</span><span>{product.specs.assistLevels}</span></div>
        <div><span className="block text-gray-400">Weight</span><span>{product.specs.weight}</span></div>
      </div>
      <div>
        <h2 className="font-display text-xl text-primary">Compatible accessories</h2>
        <p className="mt-2 text-sm text-gray-300">
          {accessories.filter((accessory) => product.compatibleAccessories.includes(accessory.id)).map((accessory) => accessory.name).join(' · ')}
        </p>
      </div>
      <Button onClick={handleAddToCart} className="w-max">
        Add to Cart
      </Button>
    </div>
  );
}
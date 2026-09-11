"use client";

import { useCart } from '@/lib/cart-context';
import Button from '@/components/ui/Button';
import { Product } from '@/types/product';

export default function ProductDetails({ product }: { product: Product }) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, product.variants[0], 1);
  };

  return (
    <div className="flex flex-col space-y-6">
      <h1 className="text-4xl font-bold text-primary-volt">{product.name}</h1>
      <p className="text-lg text-gray-300">{product.description}</p>
      <div className="text-2xl font-semibold text-primary-volt">
        Starting at ${product.variants[0].priceCents / 100}
      </div>
      <Button onClick={handleAddToCart} className="w-max">
        Add to Cart
      </Button>
    </div>
  );
}
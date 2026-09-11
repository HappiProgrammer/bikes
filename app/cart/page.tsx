import { useCart } from '@/lib/cart-context';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { items, itemCount, subtotalCents, updateQuantity, removeItem } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    router.push('/checkout');
  };

  if (items.length === 0) {
    return (
      <section className="container mx-auto py-12">
        <h2 className="text-2xl font-bold text-primary-volt">Your cart is empty</h2>
        <p className="mt-4 text-gray-300">Browse our products and add items to your cart.</p>
        <Button className="mt-6" onClick={() => router.push('/')}>Continue Shopping</Button>
      </section>
    );
  }

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-primary-volt mb-8">Shopping Cart ({itemCount} items)</h2>
      <div className="space-y-6">
        {items.map((item) => (
          <Card key={item.variant.id} className="flex items-center p-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-primary-volt">{item.product.name}</h3>
              <p className="text-gray-300">{item.variant.name}</p>
              <p className="text-gray-300 mt-1">${(item.variant.priceCents / 100).toFixed(2)}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Input
                type="number"
                min={1}
                value={item.quantity}
                className="w-16"
                onChange={(e) => updateQuantity(item.variant.id, Number(e.target.value))}
              />
              <Button variant="secondary" onClick={() => removeItem(item.variant.id)}>
                Remove
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-8 flex justify-between items-center">
        <div className="text-xl font-semibold text-primary-volt">
          Subtotal: ${ (subtotalCents / 100).toFixed(2) }
        </div>
        <Button onClick={handleCheckout}>Proceed to Checkout</Button>
      </div>
    </section>
  );
}

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { createCheckoutSession, CustomerInfo } from '@/lib/checkout';
import { useCart } from '@/lib/cart-context';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';

// Validation schema for shipping info
const checkoutSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  address: z.string().min(1, 'Address is required'),
});

type CheckoutForm = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutForm>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = async (data: CheckoutForm) => {
    if (items.length === 0) {
      alert('Your cart is empty');
      return;
    }
    const customer: CustomerInfo = {
      name: data.name,
      email: data.email,
      address: data.address,
    };
    const result = await createCheckoutSession(items, customer);
    // In a real app you would redirect to Stripe Checkout. Here we just navigate to a mock confirm page.
    router.push(result.url);
    clearCart();
  };

  return (
    <section className="container mx-auto py-12">
      <Card className="max-w-xl mx-auto p-8">
        <h2 className="text-2xl font-bold text-primary-volt mb-6">Checkout</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Name</label>
            <Input type="text" {...register('name')} className={errors.name ? 'border-red-500' : ''} />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <Input type="email" {...register('email')} className={errors.email ? 'border-red-500' : ''} />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Address</label>
            <Input type="text" {...register('address')} className={errors.address ? 'border-red-500' : ''} />
            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full mt-4">
            {isSubmitting ? 'Processing...' : 'Complete Order'}
          </Button>
        </form>
      </Card>
    </section>
  );
}

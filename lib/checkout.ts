// lib/checkout.ts

import { CartItem } from '@/lib/cart-context';

export interface CustomerInfo {
  name: string;
  email: string;
  address: string;
}

/**
 * Mock checkout session creator.
 * Returns a fake redirect URL. Replace with real Stripe integration later.
 */
export async function createCheckoutSession(
  cartItems: CartItem[],
  customer: CustomerInfo
): Promise<{ url: string }> {
  const totalCents = cartItems.reduce(
    (sum, item) => sum + item.variant.priceCents * item.quantity,
    0
  );
  const sessionId = `mock_sess_${Date.now()}`;
  const url = `/checkout/confirm?session=${sessionId}&amount=${totalCents}`;

  return { url };
}

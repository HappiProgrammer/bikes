// lib/cart-context.tsx

"use client";
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Product, Variant } from "../types/product";

export interface CartItem {
  product: Product;
  variant: Variant;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  itemCount: number;
  subtotalCents: number;
}

export interface CartContextValue extends CartState {
  addItem: (product: Product, variant: Variant, quantity?: number) => void;
  removeItem: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product, variant: Variant, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.variant.id === variant.id);
      if (existing) {
        return prev.map((i) =>
          i.variant.id === variant.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { product, variant, quantity }];
    });
  };

  const removeItem = (variantId: string) => {
    setItems((prev) => prev.filter((i) => i.variant.id !== variantId));
  };

  const updateQuantity = (variantId: string, quantity: number) => {
    setItems((prev) =>
      prev.map((i) => (i.variant.id === variantId ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => setItems([]);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotalCents = items.reduce(
    (sum, i) => sum + i.variant.priceCents * i.quantity,
    0
  );

  const value: CartContextValue = {
    items,
    itemCount,
    subtotalCents,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextValue => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
};

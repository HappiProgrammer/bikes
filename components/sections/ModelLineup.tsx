// components/sections/ModelLineup.tsx

import React from "react";
import Link from "next/link";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { getProducts } from "../../lib/data";

export default function ModelLineup() {
  const products = getProducts();

  return (
    <section className="py-12 bg-surface">
      <h2 className="font-display text-3xl text-center text-primary mb-8">Our Models</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {products.map((p) => (
          <Card key={p.slug} className="hover:shadow-xl transition-shadow">
            <Link href={`/product/${p.slug}`}>
              <div className="relative h-48 w-full">
                <img
                  src={p.images[0]}
                  alt={p.name}
                  className="object-cover w-full h-full rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-xl text-onSurface mb-2">
                  {p.name}
                </h3>
                <p className="text-sm text-onSurface mb-2 line-clamp-2">
                  {p.shortDescription}
                </p>
                <Badge variant="primary">{p.category}</Badge>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}

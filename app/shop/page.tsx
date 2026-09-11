import Link from "next/link";
import ModelLineup from "@/components/sections/ModelLineup";
import { getProducts } from "@/lib/data";

export const metadata = {
  title: "Shop KINETIX E-Bikes",
  description: "Compare KINETIX commuter and all-terrain electric bikes by motor, battery, range, and riding purpose.",
};

export default async function ShopPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const products = getProducts().filter((product) => !category || product.category === category);
  const categoryLinks = [["", "All products"], ["commuter", "E-Bikes"], ["mobility-scooters", "Mobility Scooters"], ["labubu", "Labubu"]];
  return (
    <section className="py-8">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">The KINETIX range</p>
        <h1 className="mt-3 font-display text-4xl text-onSurface md:text-5xl">Choose your electric ride.</h1>
        <p className="mt-4 text-lg text-gray-300">Browse e-bikes, mobility scooters, and designer collectibles in one catalog.</p>
      </div>
      <nav className="mb-8 flex flex-wrap gap-3" aria-label="Product categories">
        {categoryLinks.map(([value, label]) => <Link key={label} href={value ? `/shop?category=${value}` : "/shop"} className={`border px-4 py-2 text-sm ${category === value ? "border-primary bg-primary text-onSurface" : "border-gray-600 text-gray-300 hover:border-primary hover:text-primary"}`}>{label}</Link>)}
      </nav>
      <ModelLineup products={products} />
    </section>
  );
}

import Link from "next/link";
import { accessories } from "@/data/accessories";
import { products } from "@/data/products";
import Card from "@/components/ui/Card";

const categoryLabels = {
  carry: "Carry more",
  protection: "Stay dry",
  visibility: "Be seen",
  security: "Lock it down",
  power: "Keep riding",
  maintenance: "Maintain your bike",
};

export default function AccessoriesPage() {
  return (
    <section className="py-8">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">E-bike equipment</p>
        <h1 className="mt-3 font-display text-4xl text-onSurface md:text-5xl">Accessories that earn their space.</h1>
        <p className="mt-4 text-lg text-gray-300">Practical equipment for carrying groceries, staying visible, protecting your drivetrain, and extending the useful range of your KINETIX e-bike.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {accessories.map((accessory) => (
          <Card key={accessory.id} className="flex flex-col p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-primary">{categoryLabels[accessory.category]}</p>
            <h2 className="mt-3 font-display text-2xl text-onSurface">{accessory.name}</h2>
            <p className="mt-3 flex-1 text-sm leading-6 text-gray-300">{accessory.description}</p>
            <div className="mt-5 border-t border-gray-700 pt-4">
              <p className="text-xl text-primary">${(accessory.priceCents / 100).toLocaleString()}</p>
              <p className="mt-2 text-xs text-gray-400">Fits: {accessory.compatibleWith.map((slug) => products.find((product) => product.slug === slug)?.name).join(", ")}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 border border-primary/40 bg-primary/10 p-6 md:flex md:items-center md:justify-between md:gap-6">
        <div>
          <h2 className="font-display text-2xl text-primary">Need the whole setup?</h2>
          <p className="mt-2 text-gray-300">Choose your fit, wheels, finish, and compatible accessories in the build studio.</p>
        </div>
        <Link href="/build-your-bike" className="mt-5 inline-flex bg-primary px-5 py-3 font-medium text-onSurface md:mt-0">Open build studio</Link>
      </div>
    </section>
  );
}

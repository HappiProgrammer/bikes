import ModelLineup from "@/components/sections/ModelLineup";

export const metadata = {
  title: "Shop KINETIX E-Bikes",
  description: "Compare KINETIX commuter and all-terrain electric bikes by motor, battery, range, and riding purpose.",
};

export default function ShopPage() {
  return (
    <section className="py-8">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">The KINETIX range</p>
        <h1 className="mt-3 font-display text-4xl text-onSurface md:text-5xl">Choose your electric ride.</h1>
        <p className="mt-4 text-lg text-gray-300">Compare motor output, battery capacity, assisted range, and fit before you choose a city commuter or an all-terrain e-bike.</p>
      </div>
      <ModelLineup />
    </section>
  );
}

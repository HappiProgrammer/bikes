"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { accessories } from "@/data/accessories";
import { products } from "@/data/products";
import { useCart } from "@/lib/cart-context";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const buildOptions = {
  frameSizes: ["S", "M", "L", "XL"],
  colors: ["Carbon Black", "Glacier Silver", "Moss Green"],
  wheelSizes: ["27.5 in", "29 in"],
};

export default function BuildYourBikePage() {
  const { addItem } = useCart();
  const [modelSlug, setModelSlug] = useState("apex-7");
  const [frameSize, setFrameSize] = useState("M");
  const [color, setColor] = useState("Carbon Black");
  const [wheelSize, setWheelSize] = useState("29 in");
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);

  const model = products.find((product) => product.slug === modelSlug) ?? products[0];
  const compatibleAccessories = accessories.filter((accessory) =>
    accessory.compatibleWith.includes(model.slug)
  );
  const selectedAccessoryTotal = compatibleAccessories
    .filter((accessory) => selectedAccessories.includes(accessory.id))
    .reduce((total, accessory) => total + accessory.priceCents, 0);
  const basePrice = model.variants[0].priceCents;
  const totalPrice = basePrice + selectedAccessoryTotal;
  const variantId = `${model.slug}-${frameSize.toLowerCase()}-${color.toLowerCase().replaceAll(" ", "-")}`;

  const selectedAccessoryNames = useMemo(
    () => compatibleAccessories
      .filter((accessory) => selectedAccessories.includes(accessory.id))
      .map((accessory) => accessory.name),
    [compatibleAccessories, selectedAccessories]
  );

  const toggleAccessory = (accessoryId: string) => {
    setSelectedAccessories((current) => current.includes(accessoryId)
      ? current.filter((id) => id !== accessoryId)
      : [...current, accessoryId]
    );
  };

  const addBuildToCart = () => {
    addItem(model, {
      id: variantId,
      name: `${frameSize} / ${color} / ${wheelSize}${selectedAccessoryNames.length ? ` + ${selectedAccessoryNames.length} accessory` : ""}`,
      priceCents: totalPrice,
      color,
      frameSize,
      accessoryIds: selectedAccessories,
    }, 1);
  };

  return (
    <section className="py-8">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">KINETIX configuration studio</p>
        <h1 className="mt-3 font-display text-4xl text-onSurface md:text-5xl">Build your e-bike around the ride.</h1>
        <p className="mt-4 text-lg text-gray-300">Choose the motor platform, fit, finish, wheels, and practical carry or visibility gear before your build goes into the cart.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="font-display text-2xl text-primary">1. Choose your motor platform</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {products.map((product) => (
                <label key={product.slug} className={`cursor-pointer border p-4 ${modelSlug === product.slug ? "border-primary bg-primary/10" : "border-gray-700"}`}>
                  <input type="radio" name="model" value={product.slug} checked={modelSlug === product.slug} onChange={() => { setModelSlug(product.slug); setSelectedAccessories([]); }} className="sr-only" />
                  <span className="font-display text-xl">{product.name}</span>
                  <span className="mt-1 block text-xs font-medium uppercase tracking-[0.12em] text-primary">{product.bikeType}</span>
                  <span className="mt-2 block text-sm text-gray-300">{product.specs.motor} · {product.specs.battery} · {product.specs.range}</span>
                  <span className="mt-3 block text-sm text-primary">From ${(product.variants[0].priceCents / 100).toLocaleString()}</span>
                </label>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="font-display text-2xl text-primary">2. Set your fit and finish</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
              <label className="text-sm text-gray-300">Frame size
                <select value={frameSize} onChange={(event) => setFrameSize(event.target.value)} className="mt-2 w-full border border-gray-600 bg-background p-3 text-onSurface">
                  {buildOptions.frameSizes.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
              <label className="text-sm text-gray-300">Color / finish
                <select value={color} onChange={(event) => setColor(event.target.value)} className="mt-2 w-full border border-gray-600 bg-background p-3 text-onSurface">
                  {buildOptions.colors.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
              <label className="text-sm text-gray-300">Wheel size
                <select value={wheelSize} onChange={(event) => setWheelSize(event.target.value)} className="mt-2 w-full border border-gray-600 bg-background p-3 text-onSurface">
                  {buildOptions.wheelSizes.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
            </div>
            <p className="mt-4 text-sm text-gray-400">The {model.name} is engineered around {model.specs.wheelSize}, with frame sizing available from {model.specs.frameSizes}.</p>
          </Card>

          <Card className="p-6">
            <h2 className="font-display text-2xl text-primary">3. Add ride-ready equipment</h2>
            <p className="mt-2 text-sm text-gray-300">Only accessories compatible with the {model.name} are shown.</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {compatibleAccessories.map((accessory) => (
                <label key={accessory.id} className="flex cursor-pointer items-start gap-3 border border-gray-700 p-4">
                  <input type="checkbox" checked={selectedAccessories.includes(accessory.id)} onChange={() => toggleAccessory(accessory.id)} className="mt-1 accent-primary" />
                  <span>
                    <span className="block font-medium">{accessory.name}</span>
                    <span className="mt-1 block text-sm text-gray-400">{accessory.description}</span>
                    <span className="mt-2 block text-sm text-primary">+ ${(accessory.priceCents / 100).toLocaleString()}</span>
                  </span>
                </label>
              ))}
            </div>
          </Card>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Card className="p-6">
            <div className="relative mb-5 aspect-[4/3] overflow-hidden bg-background">
              <Image src={model.images[0]} alt={`${model.name} ${model.category} electric bike`} fill sizes="(max-width: 1024px) 100vw, 360px" className="object-cover" />
            </div>
            <p className="text-sm uppercase tracking-[0.16em] text-gray-400">Your build</p>
            <h2 className="mt-2 font-display text-3xl text-primary">{model.name}</h2>
            <p className="mt-1 text-sm uppercase tracking-[0.12em] text-gray-400">{model.bikeType}</p>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between gap-4"><dt className="text-gray-400">Motor</dt><dd>{model.specs.motor}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-gray-400">Battery</dt><dd>{model.specs.battery}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-gray-400">Estimated range</dt><dd>{model.specs.range}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-gray-400">Fit</dt><dd>{frameSize} / {wheelSize}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-gray-400">Finish</dt><dd>{color}</dd></div>
            </dl>
            <div className="mt-6 border-t border-gray-700 pt-5">
              <div className="flex justify-between text-xl"><span>Total</span><span className="text-primary">${(totalPrice / 100).toLocaleString()}</span></div>
              <Button onClick={addBuildToCart} className="mt-5 w-full">Add configured e-bike</Button>
            </div>
          </Card>
        </aside>
      </div>
    </section>
  );
}

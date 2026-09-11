// components/sections/Hero.tsx

import React from "react";
import { Button } from "../ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden rounded-lg shadow-lg mb-12">
      {/* Background image (replace with actual bike hero) */}
      <Image
        src="/images/hero-bike.jpg"
        alt="KINETIX flagship bike"
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-onSurface mb-4">
          Ride the Future
        </h1>
        <p className="font-body text-lg md:text-xl text-onSurface mb-6 max-w-2xl mx-auto">
          Premium electric bikes that blend kinetic power, sleek design, and unstoppable adventure.
        </p>
        <Button variant="primary" className="text-lg px-8 py-3">
          Shop Now
        </Button>
      </div>
    </section>
  );
}

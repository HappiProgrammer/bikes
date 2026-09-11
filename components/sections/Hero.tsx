// components/sections/Hero.tsx

import React from "react";
import { Button } from "../ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden rounded-lg shadow-lg mb-12">
      {/* Background image (replace with actual bike hero) */}
      <Image
        src="/images/hero-bike.jpg"
        alt="KINETIX Apex-7 electric bike on a city-to-trail route"
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-onSurface mb-4">
          Power every mile.
        </h1>
        <p className="font-body text-lg md:text-xl text-onSurface mb-6 max-w-2xl mx-auto">
          Meet the Apex-7: a 750W mid-drive e-bike with 95Nm of torque, a 720Wh battery, and 120mm of front suspension for the commute that does not end at the pavement.
        </p>
        <Link href="/shop"><Button variant="primary" className="text-lg px-8 py-3">Shop e-bikes</Button></Link>
      </div>
    </section>
  );
}

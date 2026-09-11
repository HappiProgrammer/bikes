export const metadata = {
  title: "E-Bike Warranty | KINETIX",
  description: "Coverage information for KINETIX electric bike frames, motors, batteries, and components.",
};

export default function WarrantyPage() {
  return (
    <section className="py-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Protection for the ride</p>
        <h1 className="mt-3 font-display text-4xl text-onSurface md:text-5xl">Warranty coverage for your KINETIX e-bike.</h1>
        <p className="mt-4 text-lg text-gray-300">Coverage applies to the frame, motor, battery, display, and original electrical components when used and maintained according to the rider guide.</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <div className="border border-gray-700 bg-surface p-5"><h2 className="font-display text-xl text-primary">Frame</h2><p className="mt-3 text-gray-300">Coverage for manufacturing defects in the frame and fork.</p></div>
        <div className="border border-gray-700 bg-surface p-5"><h2 className="font-display text-xl text-primary">Electrical system</h2><p className="mt-3 text-gray-300">Coverage for the motor, controller, display, wiring, and battery defects.</p></div>
        <div className="border border-gray-700 bg-surface p-5"><h2 className="font-display text-xl text-primary">Wear items</h2><p className="mt-3 text-gray-300">Brake pads, tires, chains, belts, and cosmetic wear are routine maintenance items.</p></div>
      </div>
    </section>
  );
}

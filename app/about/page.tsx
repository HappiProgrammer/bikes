export const metadata = {
  title: "About KINETIX E-Bikes",
  description: "Learn how KINETIX designs electric bikes around useful range, confident handling, and everyday serviceability.",
};

export default function AboutPage() {
  return (
    <section className="py-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Why KINETIX</p>
        <h1 className="mt-3 font-display text-4xl text-onSurface md:text-5xl">Electric bikes built for the route you actually take.</h1>
        <p className="mt-4 text-lg text-gray-300">KINETIX focuses on the details that make pedal-assist useful every day: predictable motor response, battery capacity that matches the ride, fit across real frame sizes, and components that can be serviced instead of discarded.</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <div className="border border-gray-700 bg-surface p-5"><h2 className="font-display text-xl text-primary">Measured range</h2><p className="mt-3 text-gray-300">Range estimates are tied to assist mode, battery capacity, tires, terrain, and rider load rather than a vague best-case promise.</p></div>
        <div className="border border-gray-700 bg-surface p-5"><h2 className="font-display text-xl text-primary">Useful power</h2><p className="mt-3 text-gray-300">A commuter hub motor and an all-terrain mid-drive serve different roads, climbs, loads, and maintenance needs.</p></div>
        <div className="border border-gray-700 bg-surface p-5"><h2 className="font-display text-xl text-primary">Serviceable by design</h2><p className="mt-3 text-gray-300">Standard wear parts, replaceable batteries, and compatible accessories keep the bike useful long after the first ride.</p></div>
      </div>
    </section>
  );
}

export const metadata = {
  title: "E-Bike Service | KINETIX",
  description: "Find help with fitting, service, battery care, and KINETIX electric bike setup.",
};

export default function StoreLocatorPage() {
  return (
    <section className="py-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Try and service KINETIX</p>
        <h1 className="mt-3 font-display text-4xl text-onSurface md:text-5xl">Find your nearest e-bike service point.</h1>
        <p className="mt-4 text-lg text-gray-300">Service partners help with fit checks, brake adjustments, drivetrain service, diagnostics, and battery replacement for KINETIX electric bikes.</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="border border-gray-700 bg-surface p-6"><h2 className="font-display text-2xl text-primary">Workshop support</h2><p className="mt-3 text-gray-300">Bring your bike in for a safety check, firmware diagnosis, hydraulic brake service, or wheel and tire setup.</p></div>
        <div className="border border-gray-700 bg-surface p-6"><h2 className="font-display text-2xl text-primary">Before you visit</h2><p className="mt-3 text-gray-300">Have your frame serial number, battery key, charger, and a description of the issue ready for the service team.</p></div>
      </div>
    </section>
  );
}

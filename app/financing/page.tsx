export const metadata = {
  title: "E-Bike Financing | KINETIX",
  description: "Explore payment planning for KINETIX electric bikes and compatible equipment.",
};

export default function FinancingPage() {
  return (
    <section className="py-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Plan your purchase</p>
        <h1 className="mt-3 font-display text-4xl text-onSurface md:text-5xl">Make the upgrade manageable.</h1>
        <p className="mt-4 text-lg text-gray-300">KINETIX bikes range from commuter-ready builds to high-output all-terrain setups. Review the total build price in the configurator before choosing a payment plan through your preferred provider.</p>
      </div>
      <div className="mt-10 border border-gray-700 bg-surface p-6">
        <h2 className="font-display text-2xl text-primary">What can be financed?</h2>
        <p className="mt-3 max-w-2xl leading-7 text-gray-300">A complete e-bike build, including compatible racks, lights, fenders, panniers, chargers, and spare batteries selected in the build studio. Approval, rates, and payment terms are set by the financing provider.</p>
      </div>
    </section>
  );
}

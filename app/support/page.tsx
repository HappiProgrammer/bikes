export const metadata = {
  title: "E-Bike Support | KINETIX",
  description: "Setup, charging, maintenance, and riding support for KINETIX electric bikes.",
};

const topics = [
  ["First ride setup", "Set saddle height, check brake lever reach, and complete the pre-ride bolt and tire-pressure check before enabling assist."],
  ["Charging and storage", "Charge the battery indoors with the supplied charger, keep contacts dry, and store it between 10 and 25 degrees Celsius."],
  ["Range care", "Use lower assist on flat routes, keep tires inflated, and avoid storing a depleted battery to protect real-world range."],
  ["Maintenance", "Inspect brake pads, chain or belt tension, tire wear, and motor cable connections at regular service intervals."],
];

export default function SupportPage() {
  return (
    <section className="py-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">KINETIX rider support</p>
        <h1 className="mt-3 font-display text-4xl text-onSurface md:text-5xl">Keep your e-bike ready to ride.</h1>
        <p className="mt-4 text-lg text-gray-300">Practical guidance for setup, battery care, range, and the maintenance checks that keep an electric bike dependable.</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {topics.map(([title, description]) => (
          <article key={title} className="border border-gray-700 bg-surface p-6">
            <h2 className="font-display text-2xl text-primary">{title}</h2>
            <p className="mt-3 leading-7 text-gray-300">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const features = [
  { id: "01", title: "Locally Sourced Produce", desc: "Seasonal farms within 100 miles." },
  { id: "02", title: "Chef’s Tasting Menu", desc: "Seven courses, nightly." },
  { id: "03", title: "Private Dining", desc: "Intimate room for up to 16." },
  { id: "04", title: "Delivery & Pickup", desc: "Hot, fast, and careful." },
  { id: "05", title: "Wine Pairings", desc: "Curated cellar highlights." },
  { id: "06", title: "Seasonal Menu", desc: "New dishes each week." },
];

export default function Features(){
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(f => (
            <div key={f.id} className="rounded-xl bg-[#181818] border border-white/10 p-5 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40 transition">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#222426] text-[#FF6A00] border border-white/10">{f.id}</span>
              <h3 className="mt-3 text-white font-semibold">{f.title}</h3>
              <p className="text-white/70 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

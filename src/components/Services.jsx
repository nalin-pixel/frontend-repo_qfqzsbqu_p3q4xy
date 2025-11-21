import { ChevronRight } from "lucide-react";

const services = [
  { title: "Dine-In", desc: "Reserve your table and enjoy the full experience." },
  { title: "Delivery", desc: "Order to your door with our trusted partners." },
  { title: "Catering", desc: "From boardrooms to weddings, we’ve got you." },
];

export default function Services(){
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-4">
          {services.map(s => (
            <a key={s.title} href="#order" className="rounded-xl bg-[#181818] border border-white/10 p-5 flex items-center justify-between hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40 transition">
              <div>
                <h4 className="text-white font-semibold">{s.title}</h4>
                <p className="text-white/70 text-sm mt-1">{s.desc}</p>
              </div>
              <ChevronRight className="text-white/60" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

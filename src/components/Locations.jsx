import { useEffect, useState } from "react";

export default function Locations(){
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/locations`);
        const data = await res.json();
        setLocations(data);
      } catch(e) {}
    };
    load();
  }, []);

  return (
    <section id="locations" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#181818] border border-white/10 p-6">
          <div className="h-80 md:h-96 rounded-xl overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1644424187803-e618a3b00432?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHlsaXplZCUyMGRhcmslMjBtYXB8ZW58MHwwfHx8MTc2Mzc1NjE4Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Stylized dark map" className="w-full h-full object-cover" loading="lazy" />
            {locations.map((loc, idx) => (
              <div key={idx} className="absolute" style={{ left: `${30 + idx*20}%`, top: `${40 + idx*10}%` }}>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF6A00] ring-2 ring-white/30"></div>
                <div className="mt-2 rounded-lg bg-[#222426] border border-white/10 p-3 text-xs text-white/80">
                  <div className="font-semibold text-white">{loc.name}</div>
                  <div>{loc.address}, {loc.city}</div>
                  <div className="text-white/60">{loc.hours}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

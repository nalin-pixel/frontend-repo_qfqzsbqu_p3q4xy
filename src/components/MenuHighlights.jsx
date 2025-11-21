import { useEffect, useState } from "react";

const categories = ["Starters", "Mains", "Desserts", "Drinks"];

function Item({ item }){
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl bg-[#181818] border border-white/10 p-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left">
        <div>
          <h4 className="text-white font-semibold">{item.title}</h4>
          <p className="text-white/60 text-sm">${item.price.toFixed(2)}</p>
        </div>
        <span className="text-white/60">{open ? '−' : '+'}</span>
      </button>
      {open && item.description && (
        <p className="text-white/70 text-sm mt-3">{item.description}</p>
      )}
    </div>
  );
}

export default function MenuHighlights(){
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/menu`);
        const data = await res.json();
        setMenu(data);
      } catch (e) {}
    };
    load();
  }, []);

  return (
    <section id="menu" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map(cat => (
            <div key={cat} className="rounded-2xl bg-[#222426] border border-white/10 p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-bold text-xl">{cat}</h3>
                <a href="#" className="text-[#FF6A00] text-sm hover:underline">See all</a>
              </div>
              <div className="mt-4 space-y-3">
                {menu.filter(i => i.category === cat).slice(0,4).map(i => (
                  <Item key={i.title} item={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/20 text-white hover:border-[#FF6A00] hover:text-[#FF6A00] transition">Download full menu (PDF)</a>
        </div>
      </div>
    </section>
  );
}

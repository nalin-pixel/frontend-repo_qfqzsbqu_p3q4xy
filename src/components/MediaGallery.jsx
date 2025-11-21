import { Play } from "lucide-react";
import { useEffect, useState } from "react";

export default function MediaGallery(){
  const [items, setItems] = useState([]);
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/gallery`);
        const data = await res.json();
        setItems(data);
      } catch(e) {}
    };
    load();
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden bg-[#181818] border border-white/10 relative">
          <img src={items[1]?.url || "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1400&auto=format&fit=crop"} alt={items[1]?.alt || "Dining room and food highlights collage"} className="w-full h-[380px] md:h-[480px] object-cover" loading="lazy" />
          <button className="absolute inset-0 grid place-items-center group">
            <span className="w-16 h-16 rounded-full bg-white/10 backdrop-blur border border-white/30 flex items-center justify-center group-hover:scale-105 transition" aria-label="Play video">
              <Play className="text-white" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from "react";

function Counter({ to, label }) {
  const ref = useRef(null);
  useEffect(() => {
    let start = 0;
    const end = to;
    const duration = 900;
    const startTime = performance.now();
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * end);
      if (ref.current) ref.current.textContent = value + (label.includes("+") ? "+" : "");
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [to, label]);
  return (
    <div>
      <div ref={ref} className="text-3xl md:text-4xl font-extrabold text-white">0</div>
      <div className="text-white/70 text-sm mt-1">{label}</div>
    </div>
  );
}

export default function AboutStats(){
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(1200px_600px_at_20%_0%,#FF6A00_0%,transparent_60%)]" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl">
          <h2 className="text-white text-3xl font-bold">Thoughtful cooking, rooted in seasonality</h2>
          <p className="mt-3 text-white/80">Our team crafts memorable meals with impeccable sourcing and a devotion to hospitality.</p>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-6">
          <Counter to={10} label="Years" />
          <Counter to={20} label="Weekly Rotating Dishes" />
          <Counter to={50} label="Happy Guests+" />
        </div>
      </div>
    </section>
  );
}

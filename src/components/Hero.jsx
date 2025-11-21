import { useEffect, useState } from "react";

const accent = "#FF6A00";

function Stat({ label, value }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-extrabold text-white">{value}</div>
      <div className="text-sm text-white/60 mt-1">{label}</div>
    </div>
  );
}

export default function Hero({ onReserve }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [party, setParty] = useState(2);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleReserve = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ""}/api/reservations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Walk-in Guest",
          email: "guest@example.com",
          phone: "",
          date,
          time,
          party_size: Number(party),
          notes: "Quick reservation from hero",
          source: "web",
        }),
      });
      const data = await res.json();
      if (data?.ok) setMessage("Reserved! We'll email you a confirmation.");
      else setMessage("Something went wrong. Try again.");
    } catch (err) {
      setMessage("Network error. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative pt-28 md:pt-36" id="top">
      <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_10%_10%,rgba(255,106,0,0.15),transparent_60%)]" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight text-white">
            <span className="block">WE SERVE</span>
            <span className="block text-[${accent}]" style={{ color: accent }}>FLAVOR</span>
            <span className="block">ALL OVER TOWN.</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl">
            Seasonal ingredients. Thoughtful technique. An unforgettable table.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#reserve" className="px-5 py-3 rounded-lg bg-[#FF6A00] text-black font-medium hover:brightness-110 transition">Book a Table</a>
            <a href="#order" className="px-5 py-3 rounded-lg border border-white/20 text-white hover:border-[#FF6A00] hover:text-[#FF6A00] transition">Order Online</a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            <Stat label="Years" value="10+" />
            <Stat label="Weekly Rotating Dishes" value="20+" />
            <Stat label="Happy Guests" value="50k+" />
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden bg-[#181818] border border-white/10 shadow-2xl shadow-black/50">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop"
              alt="Close-up of a plated signature dish with warm, dramatic lighting"
              className="w-full h-[360px] object-cover"
              loading="eager"
            />
          </div>
          <form id="reserve" onSubmit={handleReserve} className="-mt-6 md:-mt-10 relative z-10 mx-3 md:mx-8 rounded-xl bg-[#181818] border border-white/10 p-4 md:p-5 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="bg-[#0F0F11] text-white/90 rounded-lg px-3 py-2 border border-white/10" required />
              <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="bg-[#0F0F11] text-white/90 rounded-lg px-3 py-2 border border-white/10" required />
              <select value={party} onChange={(e) => setParty(e.target.value)} className="bg-[#0F0F11] text-white/90 rounded-lg px-3 py-2 border border-white/10">
                {[...Array(10)].map((_, i) => (
                  <option key={i+1} value={i+1}>{i+1} {i+1 === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
              <button disabled={submitting} className="bg-[#FF6A00] text-black font-medium rounded-lg px-4 py-2 hover:brightness-110 disabled:opacity-60">{submitting ? 'Reserving…' : 'Reserve'}</button>
            </div>
            {message && <p className="text-sm text-white/80 mt-3">{message}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

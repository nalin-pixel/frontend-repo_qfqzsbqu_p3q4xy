import { useState } from "react";

export default function Footer(){
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();
    try{
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/newsletter`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, consent: true })
      });
      const data = await res.json();
      if (data?.ok) setDone(true);
    }catch(e){}
  }

  return (
    <footer className="pt-12 md:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#222426] border border-white/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-white text-2xl font-bold">Let us serve your next meal</h3>
            <p className="text-white/70">Reserve now or browse our seasonal menus.</p>
          </div>
          <div className="flex gap-3">
            <a href="#reserve" className="px-5 py-3 rounded-lg bg-[#FF6A00] text-black font-medium hover:brightness-110 transition">Reserve Now</a>
            <a href="#menu" className="px-5 py-3 rounded-lg border border-white/20 text-white hover:border-[#FF6A00] hover:text-[#FF6A00] transition">Download Menu</a>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-4 gap-8">
          <div>
            <div className="w-8 h-8 rounded-lg bg-[#FF6A00] mb-3" aria-hidden="true"></div>
            <p className="text-white/70 text-sm">Bistro Nova • 123 Main St, Metropolis, NY</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Navigate</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#menu" className="hover:text-white">Menu</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#locations" className="hover:text-white">Locations</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Hours</h4>
            <p className="text-white/70 text-sm">Mon–Sun 11am–11pm</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Newsletter</h4>
            {done ? (
              <p className="text-white/80 text-sm">Thanks for joining! Check your inbox.</p>
            ) : (
              <form onSubmit={subscribe} className="flex gap-2">
                <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" placeholder="Your email" className="flex-1 bg-[#0F0F11] text-white/90 rounded-lg px-3 py-2 border border-white/10" />
                <button className="px-4 py-2 rounded-lg bg-[#FF6A00] text-black font-medium">Sign up</button>
              </form>
            )}
          </div>
        </div>

        <div className="py-6 text-center text-white/50 text-sm">© {new Date().getFullYear()} Bistro Nova. All rights reserved.</div>
      </div>
    </footer>
  );
}

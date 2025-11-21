import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${scrolled ? "bg-[#0F0F11]/90 backdrop-blur border-b border-white/5" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#FF6A00]" aria-hidden="true"></div>
          <span className="text-white font-semibold tracking-tight">Bistro Nova</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#menu" className="text-white/80 hover:text-white">Menu</a>
          <a href="#about" className="text-white/80 hover:text-white">About</a>
          <a href="#locations" className="text-white/80 hover:text-white">Locations</a>
          <a href="#contact" className="text-white/80 hover:text-white">Contact</a>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="#order" className="px-4 py-2 rounded-lg border border-white/20 text-white hover:border-[#FF6A00] hover:text-[#FF6A00] transition">Order Online</a>
          <a href="#reserve" className="px-4 py-2 rounded-lg bg-[#FF6A00] text-black font-medium hover:brightness-110 transition">Book a Table</a>
        </div>
        <button className="md:hidden p-2 text-white" aria-label="Open menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0F0F11]">
          <div className="px-4 py-4 space-y-3">
            <a href="#menu" className="block text-white/80 hover:text-white">Menu</a>
            <a href="#about" className="block text-white/80 hover:text-white">About</a>
            <a href="#locations" className="block text-white/80 hover:text-white">Locations</a>
            <a href="#contact" className="block text-white/80 hover:text-white">Contact</a>
            <div className="pt-2 flex gap-2">
              <a href="#order" className="flex-1 px-4 py-2 rounded-lg border border-white/20 text-white text-center">Order</a>
              <a href="#reserve" className="flex-1 px-4 py-2 rounded-lg bg-[#FF6A00] text-black font-medium text-center">Book</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AboutStats from "./components/AboutStats";
import MenuHighlights from "./components/MenuHighlights";
import MediaGallery from "./components/MediaGallery";
import Services from "./components/Services";
import Locations from "./components/Locations";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-[#0F0F11]">
      <Navbar />
      <main className="space-y-8 md:space-y-12">
        <Hero />
        <Features />
        <AboutStats />
        <MenuHighlights />
        <MediaGallery />
        <Services />
        <Locations />
        <Footer />
      </main>
    </div>
  );
}

export default App;

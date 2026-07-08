import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandMarquee from "./components/BrandMarquee";
import DealBanner from "./components/DealBanner";
import FleetShowcase from "./components/FleetShowcase";
import Features from "./components/Features";
import ShowcaseBig from "./components/ShowcaseBig";
import Experience from "./components/Experience";
import Process from "./components/Process";
import Locations from "./components/Locations";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="grain relative min-h-screen overflow-x-hidden bg-ink-1000 text-white selection:bg-apex-500 selection:text-ink-1000">
      <Navbar />
      <main>
        <Hero />
        <BrandMarquee />
        <DealBanner />
        <FleetShowcase />
        <Features />
        <ShowcaseBig />
        <Experience />
        <Process />
        <Locations />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Method from "./components/Method";
import Benefits from "./components/Benefits";
import Experience from "./components/Experience";
import WhySakina from "./components/WhySakina";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-cream-50 text-ink-900">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Method />
        <Benefits />
        <Experience />
        <WhySakina />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

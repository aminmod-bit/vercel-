import { Navbar } from "./components/Navbar";
import { AnimatedHero } from "./components/AnimatedHero";
import { SocialProof } from "./components/SocialProof";
import { Features } from "./components/Features";
import { Showcase } from "./components/Showcase";
import { BookExplorer } from "./components/BookExplorer";
import { WorldMap } from "./components/WorldMap";
import { Benefits } from "./components/Benefits";
import { Quiz } from "./components/Quiz";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/ui";
import { ThemeProvider } from "./components/ThemeProvider";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CustomCursor />
      <ThemeProvider />
      <Navbar />
      <main>
        <AnimatedHero />
        <SocialProof />
        <Features />
        <Showcase />
        <BookExplorer />
        <WorldMap />
        <Benefits />
        <Quiz />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

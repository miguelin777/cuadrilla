import { MotionConfig } from "framer-motion";
import Intro from "./components/Intro";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import WhatsAppFab from "./components/WhatsAppFab";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Manifesto from "./components/Manifesto";
import Services from "./components/Services";
import Process from "./components/Process";
import DemoCFDI from "./components/DemoCFDI";
import Work from "./components/Work";
import Plans from "./components/Plans";
import Faq from "./components/Faq";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Intro />
      <div className="grain" aria-hidden />
      <Cursor />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Work />
        <Services />
        <Process />
        <DemoCFDI />
        <Plans />
        <Faq />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </MotionConfig>
  );
}

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import TechStack from "./components/TechStack";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex flex-col flex-1 outline-none">
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Process />
        <TechStack />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

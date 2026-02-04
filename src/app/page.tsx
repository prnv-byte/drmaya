import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy"; // New!
import Specialities from "@/components/Specialities";
import About from "@/components/About";
import Support from "@/components/Support";
import Background from "@/components/Background";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Philosophy /> {/* Adds character and storytelling */}
      <Specialities />
      <About />
      <Testimonials />
      <Support />
      <Background />
      <Gallery />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
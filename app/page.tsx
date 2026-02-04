import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Specialities from "@/components/Specialities";
import About from "@/components/About";
import Support from "@/components/Support";
import Background from "@/components/Background";
import Gallery from "@/components/Gallery"; // New Import
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <Specialities />
      <Testimonials />
      <About />
      <Support />
      <Background />
      <Gallery /> {/* Added Section */}
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
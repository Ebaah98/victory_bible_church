import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import Event from "@/components/Event";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Testimony from "@/components/Testimony";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Event />
      <Welcome />
      <About />
      <Contact />
      <Testimony/>
      <Footer/>
  </div>
  );
}

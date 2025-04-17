import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import Event from "@/components/Event";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Testimony from "@/components/Testimony";
import Donation from "@/components/Donation";
import Departments from "@/components/Department";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Event />
      <Welcome />
      <About />
      <Departments/>
      <Contact />
      <Testimony />
      <Donation/>
      <Footer/>
  </div>
  );
}

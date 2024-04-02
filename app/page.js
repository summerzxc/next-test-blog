import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./single_use/Hero";
import Features from "./single_use/Features";
import About from "./single_use/About";
import Pricing from "./single_use/Pricing";
import Action from "./single_use/Action";
import Footer from "./single_use/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero id="hero" />
      <Features id="features" />
      <About id="about" />
      <Pricing />
      <Action />
      <Footer />
    </main>
  );
}

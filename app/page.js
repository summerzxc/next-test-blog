import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./single_use/Hero";
import Features from "./single_use/Features";
import About from "./single_use/About";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>
      <Features/>
      <About/>
    </main>
  );
}

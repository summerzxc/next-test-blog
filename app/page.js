import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./single_use/Hero";
import Features from "./single_use/Features";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>
      <Features/>
    </main>
  );
}

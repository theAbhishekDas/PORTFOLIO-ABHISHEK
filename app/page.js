import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return <main>
    <Hero />
    <About />
    <Services />
    <Work />
    <Cta />
  </main>;
}

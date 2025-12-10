import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Facilities from "./components/Facilities";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyChooseUs />   
      <Facilities />
      <Stats />
      <Testimonials />
    </main>
  );
}

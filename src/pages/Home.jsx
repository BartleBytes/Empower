import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import WhyEmpower from "../components/WhyEmpower";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyEmpower />
      <Testimonials />
      <About />
    </>
  );
}

export default Home;

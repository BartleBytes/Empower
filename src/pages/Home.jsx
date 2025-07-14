import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import WhyEmpower from "../components/WhyEmpower";
import Testimonials from "../components/Testimonials";
import Spacer from "../components/Spacer";

function Home() {
  return (
    <>
      <Hero />
      <Spacer />
      <Services />
      <Spacer />
      <WhyEmpower />
      <Spacer />
      <Testimonials />
      <Spacer />
      <About />
    </>
  );
}

export default Home;

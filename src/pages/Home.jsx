import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import WhyEmpower from "../components/WhyEmpower";
import Testimonials from "../components/Testimonials";
import Spacer from "../components/Spacer";
import WhyPrivateSpeech from "../components/WhyPrivateSpeech";
import Faqs from "../components/Faqs";

function Home() {
  return (
    <>
      <Hero />
      <Spacer />
      <Services />
      <Faqs />
      <Spacer />
      <WhyEmpower />
      <WhyPrivateSpeech />
      <Spacer />
      <Testimonials />
      <Spacer />
      <About />
    </>
  );
}

export default Home;

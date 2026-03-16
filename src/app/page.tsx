import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustBlock from "@/components/TrustBlock";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import FadeInSection from "@/components/FadeInSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FadeInSection>
        <Services />
      </FadeInSection>
      <TrustBlock />
      <FadeInSection delay={100}>
        <About />
      </FadeInSection>
      <FadeInSection delay={150}>
        <Testimonials />
      </FadeInSection>
      <FadeInSection delay={100}>
        <FAQ />
      </FadeInSection>
      <FadeInSection delay={100}>
        <Contact />
      </FadeInSection>
    </>
  );
}

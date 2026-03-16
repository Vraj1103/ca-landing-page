import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustBlock from "@/components/TrustBlock";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import FadeInSection from "@/components/FadeInSection";
import { siteUrl, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteName} | Chartered Accountants in Ahmedabad`,
  description:
    "Chartered accountants in Ahmedabad—audit, tax, and advisory. Maninagar, Gujarat. ICAI regulated. Call +91 98983 20491.",
  openGraph: {
    title: `${siteName} | Chartered Accountants in Ahmedabad`,
    description:
      "Chartered accountants in Ahmedabad—audit, tax, and advisory. Maninagar, Gujarat. ICAI regulated.",
    url: siteUrl,
  },
  alternates: { canonical: siteUrl },
};

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

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
  title: `${siteName} | CA Ahmedabad, Gujarat – Tax, Audit & NRI Consultant India`,
  description:
    "Chartered accountants in Ahmedabad, Gujarat & India—audit, tax, GST, company registration. NRI tax consultant: ITR for NRIs, 15CA 15CB, property sale TDS. Maninagar, Ahmedabad. ICAI regulated. Call +91 98983 20491.",
  openGraph: {
    title: `${siteName} | CA Ahmedabad, Gujarat – Tax, Audit & NRI Consultant India`,
    description:
      "CA firm Ahmedabad, Gujarat & pan-India. Audit, tax, GST, company registration. NRI tax consultant India—ITR, 15CA/15CB, NRI property sale. Maninagar, Ahmedabad.",
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

import type { Metadata } from "next";
import Services from "@/components/Services";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services | HETAL J SHAH & Co.",
  description:
    "Business registration, company formation, audit, direct tax, indirect tax, NRI tax, corporate laws, and consultancy services. Chartered accountants in Ahmedabad.",
  openGraph: {
    title: "Services | HETAL J SHAH & Co.",
    description:
      "Business registration, company formation, audit, direct tax, indirect tax, NRI tax, corporate laws, and consultancy.",
    url: `${siteUrl}/services`,
  },
  alternates: { canonical: `${siteUrl}/services` },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Services />
    </main>
  );
}

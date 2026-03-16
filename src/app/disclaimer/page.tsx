import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer | HETAL J SHAH & Co.",
  description:
    "Disclaimer and terms for HETAL J SHAH & Co. website and services. General information only; seek professional advice for your situation.",
  openGraph: {
    title: "Disclaimer | HETAL J SHAH & Co.",
    url: `${siteUrl}/disclaimer`,
  },
  alternates: { canonical: `${siteUrl}/disclaimer` },
  robots: { index: true, follow: true },
};

export default function DisclaimerPage() {
  return (
    <main id="main-content" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <Link
        href="/#contact"
        className="text-muted hover:text-accent text-sm font-medium mb-8 inline-block"
      >
        ← Back to home
      </Link>
      <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-primary mb-8">
        Disclaimer
      </h1>
      <div className="prose prose-lg text-muted space-y-4">
        <p className="leading-relaxed">
          The information on this website is for general purposes only and does not constitute professional advice. You should seek specific advice from a qualified chartered accountant or other professional before making decisions based on any content here.
        </p>
        <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-2">
          No client relationship
        </h2>
        <p className="leading-relaxed">
          Use of this website or contacting us through it does not create a client–firm relationship. Such a relationship arises only when we expressly agree in writing to provide services to you.
        </p>
        <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-2">
          Accuracy
        </h2>
        <p className="leading-relaxed">
          We endeavour to keep the information on this site accurate and up to date but do not guarantee its completeness or suitability for any particular purpose. Tax and regulatory positions change; professional advice should be taken for your specific situation.
        </p>
        <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-2">
          Contact
        </h2>
        <p className="leading-relaxed">
          For questions about our services or engagement terms, please contact us at{" "}
          <a href="mailto:info@hetaljshahco.com" className="text-accent hover:underline">
            info@hetaljshahco.com
          </a>
          .
        </p>
        <p className="text-sm text-muted/80 mt-12">
          Last updated: March 2025.
        </p>
      </div>
    </main>
  );
}

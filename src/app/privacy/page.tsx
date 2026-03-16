import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | HETAL J SHAH & Co.",
  description:
    "Privacy policy for HETAL J SHAH & Co. chartered accountants. How we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | HETAL J SHAH & Co.",
    url: `${siteUrl}/privacy`,
  },
  alternates: { canonical: `${siteUrl}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <Link
        href="/#contact"
        className="text-muted hover:text-accent text-sm font-medium mb-8 inline-block"
      >
        ← Back to home
      </Link>
      <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-primary mb-8">
        Privacy Policy
      </h1>
      <div className="prose prose-lg text-muted space-y-4">
        <p className="leading-relaxed">
          HETAL J SHAH & Co. (“we”, “us”) is committed to protecting your personal information. This policy describes how we collect, use, and safeguard data when you use our website or engage our services.
        </p>
        <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-2">
          Information we collect
        </h2>
        <p className="leading-relaxed">
          We may collect name, email, phone number, company details, and other information you provide via our contact form or in the course of our professional engagement. We do not sell your data to third parties.
        </p>
        <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-2">
          Use of information
        </h2>
        <p className="leading-relaxed">
          We use your information to respond to enquiries, deliver our services, comply with legal and regulatory obligations, and improve our website and services. We retain data only as long as necessary for these purposes or as required by law.
        </p>
        <h2 className="font-heading text-xl font-semibold text-primary mt-8 mb-2">
          Contact
        </h2>
        <p className="leading-relaxed">
          For questions about this policy or your personal data, contact us at{" "}
          <a href="mailto:info@hetaljshahco.com" className="text-accent hover:underline">
            info@hetaljshahco.com
          </a>
          .
        </p>
        <p className="text-sm text-muted/80 mt-12">
          Last updated: March 2025. We may update this policy from time to time; the current version will always be on this page.
        </p>
      </div>
    </main>
  );
}

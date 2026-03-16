import BlogDisclaimer from "../BlogDisclaimer";
import Link from "next/link";

export default function UdyamMsmeBenefitsPost() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <BlogDisclaimer />

      <p className="leading-relaxed">
        Udyam Registration replaced the earlier MSME/UDYOG Aadhaar registration. It is a free, online registration that gives micro, small, and medium enterprises a unique identity and access to a range of benefits—from priority sector lending to government schemes and subsidies.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Who Can Register?</h2>
      <p className="leading-relaxed">
        Any person or entity engaged in manufacturing or provision of services can register as long as they meet the investment and turnover criteria for micro, small, or medium enterprises. The classification is based on turnover and investment in plant and machinery or equipment. Registration is done on the official Udyam portal using Aadhaar; no fee is charged.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Key Benefits of Udyam Registration</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Priority sector lending:</strong> Banks have targets for lending to MSMEs; registered entities find it easier to get loans under priority sector.</li>
        <li><strong className="text-primary">Interest subvention and credit support:</strong> Government schemes often offer reduced interest rates or collateral-free loans to registered MSMEs.</li>
        <li><strong className="text-primary">Government tenders:</strong> Many central and state tenders reserve a percentage for MSMEs; Udyam registration is often a prerequisite.</li>
        <li><strong className="text-primary">Protection against delayed payments:</strong> Under the MSME Development Act, buyers must pay within the agreed time; delayed payment can attract interest and penalties.</li>
        <li><strong className="text-primary">Concessions and subsidies:</strong> Various state and central schemes offer subsidies on registration, patent filing, or technology upgradation for Udyam-registered units.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">How to Apply</h2>
      <p className="leading-relaxed">
        Visit the Udyam registration portal, link your Aadhaar, and fill in details such as name of the enterprise, type (manufacturing/service), location, bank account, and investment/turnover. No documents need to be uploaded; the portal uses Aadhaar for verification. Once submitted, you receive an Udyam Registration Number (URN) and an e-certificate. Keep your turnover and investment updated annually to retain the correct classification.
      </p>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <p className="text-muted mb-4">We assist with Udyam registration, reclassification, and compliance with MSME-related filings and schemes.</p>
        <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors">Get in touch</Link>
      </div>
    </article>
  );
}

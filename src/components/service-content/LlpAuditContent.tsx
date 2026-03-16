import Link from "next/link";

export default function LlpAuditContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness only. LLP audit thresholds and filing requirements are subject to revision under the LLP Act, 2008 and MCA notifications. Please refer to the{" "}
        <a href="https://www.mca.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">official MCA portal</a>{" "}
        for the most current requirements.
      </div>

      <h2 className="text-2xl mt-10 mb-4">What is an LLP Audit?</h2>
      <p className="leading-relaxed">
        An <strong className="text-primary">LLP Audit</strong> is a crucial compliance requirement under the <strong className="text-primary">Limited Liability Partnership Act, 2008</strong>, designed to ensure transparency, financial accuracy, and legal accountability in the operations of Limited Liability Partnerships. While LLPs enjoy greater flexibility and fewer compliance burdens compared to private limited companies, they are still mandated to maintain proper books of accounts and undergo an audit if they cross specified threshold limits.
      </p>
      <p className="leading-relaxed">
        An LLP Audit involves the independent review and verification of financial statements by a qualified Chartered Accountant. The audit process typically includes:
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Verification of books of accounts (income, expenses, assets, liabilities)</li>
        <li>Review of internal controls and accounting policies</li>
        <li>Detection of financial irregularities, if any</li>
        <li>Ensuring compliance with ROC filing requirements</li>
      </ul>
      <p className="leading-relaxed">
        An audited financial report also serves as a key document for seeking bank loans, attracting investors, or complying with requirements under the Income Tax Act and GST Act.
      </p>

      <h2 className="text-2xl mt-10 mb-4">When is an LLP Audit Mandatory?</h2>
      <p className="leading-relaxed">
        A statutory audit for an LLP is mandatory if <strong className="text-primary">either</strong> of the following conditions is met:
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Annual turnover exceeds <strong className="text-primary">₹40 lakhs</strong>, <strong>OR</strong></li>
        <li>Capital contribution exceeds <strong className="text-primary">₹25 lakhs</strong></li>
      </ul>
      <p className="leading-relaxed">
        Only a <strong className="text-primary">Practising Chartered Accountant (CA)</strong> is eligible to conduct an audit of LLP accounts.
      </p>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Need Help with LLP Audit?</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. provides end-to-end LLP audit services across India — ensuring legal accuracy, transparent reporting, and full compliance with the LLP Act and related regulations.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>Statutory audit for LLP as per regulatory mandates</li>
          <li>LLP tax audit under relevant Income Tax provisions</li>
          <li>Comprehensive financial review and annual audit report preparation</li>
          <li>Guidance on LLP compliance and ROC filings</li>
          <li>Checklist-based review for smooth and efficient LLP audit</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

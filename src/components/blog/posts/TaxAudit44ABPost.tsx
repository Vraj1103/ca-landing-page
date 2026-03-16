import BlogDisclaimer from "../BlogDisclaimer";
import Link from "next/link";

export default function TaxAudit44ABPost() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <BlogDisclaimer />

      <p className="leading-relaxed">
        Section 44AB of the Income Tax Act requires certain taxpayers to get their accounts audited by a chartered accountant. The audit report must be furnished electronically along with the return. Knowing whether you fall under this requirement helps you plan in advance and avoid penalties.
      </p>

      <h2 className="text-2xl mt-10 mb-4">When Is Tax Audit Mandatory?</h2>
      <p className="leading-relaxed">Tax audit under Section 44AB is required when:</p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Business:</strong> Total sales, turnover, or gross receipts exceed ₹1 crore (or ₹10 crore if cash receipts and payments are within the prescribed limit).</li>
        <li><strong className="text-primary">Profession:</strong> Gross receipts exceed ₹50 lakh.</li>
        <li><strong className="text-primary">Presumptive taxation:</strong> You have opted for Section 44AD, 44ADA, or 44AE but declare income lower than the prescribed percentage or exceed the turnover limit for presumptive scheme.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">What Does the Auditor Report?</h2>
      <p className="leading-relaxed">
        The CA examines the books of account and furnishes Form 3CA/3CB (audit report) and Form 3CD (statement of particulars). The report covers compliance with accounting standards, correctness of income and deductions, TDS compliance, and other particulars as required. The report is uploaded on the e-filing portal and linked to the return.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Due Date</h2>
      <p className="leading-relaxed">
        The tax audit report must be obtained and uploaded by the due date of filing the return (e.g. 31 October for taxpayers whose accounts are required to be audited). Late filing attracts a penalty under Section 271B. It is advisable to engage a CA well before the due date so that the audit and return filing are completed on time.
      </p>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <p className="text-muted mb-4">We conduct tax audits and file the required forms. Get in touch for Section 44AB audit and return filing support.</p>
        <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors">Get in touch</Link>
      </div>
    </article>
  );
}

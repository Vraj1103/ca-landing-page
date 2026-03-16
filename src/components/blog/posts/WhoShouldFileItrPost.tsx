import BlogDisclaimer from "../BlogDisclaimer";
import Link from "next/link";

export default function WhoShouldFileItrPost() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <BlogDisclaimer />

      <p className="leading-relaxed">
        Filing an income tax return (ITR) is required for many individuals and entities once their income exceeds the basic exemption limit or they meet other conditions. Here is an overview of who should file and the key due dates for the financial year 2025-26.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Who Should File an ITR?</h2>
      <p className="leading-relaxed">You generally need to file an ITR if:</p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Your total income before deductions exceeds the basic exemption limit (e.g. ₹3 lakh for FY 2025-26 under the new regime for certain taxpayers; limits vary by age and regime).</li>
        <li>You have income from capital gains, foreign assets, or you want to carry forward losses.</li>
        <li>You have paid TDS and wish to claim a refund.</li>
        <li>You are a company, firm, or trust; filing is mandatory for such entities if they have taxable income.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Which ITR Form to Use?</h2>
      <p className="leading-relaxed">
        The correct form depends on your source of income and taxpayer type. For example, ITR-1 (Sahaj) is for individuals with salary, one house property, and other limited sources; ITR-2 is for individuals/HUF not having income from business or profession; ITR-3/ITR-4 apply for business income. The Income Tax Department’s e-filing portal has an option to help you choose the right form.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Key Due Dates for FY 2025-26</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">31 July 2026:</strong> For individuals, HUF, etc. (no audit required).</li>
        <li><strong className="text-primary">31 October 2026:</strong> For taxpayers whose accounts are required to be audited.</li>
      </ul>
      <p className="leading-relaxed mt-4">
        Late filing attracts a fee under Section 234F and may affect carry-forward of losses. Filing on time also helps avoid notices and ensures refunds are processed smoothly.
      </p>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <p className="text-muted mb-4">Need help with ITR filing or tax planning? We offer end-to-end income tax return and consultancy services.</p>
        <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors">Get in touch</Link>
      </div>
    </article>
  );
}

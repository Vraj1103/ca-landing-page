import Link from "next/link";

export default function TaxAuditContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness only. Turnover thresholds and audit requirements under Section 44AB are subject to revision by the Government of India. Please refer to the{" "}
        <a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">official Income Tax portal</a>{" "}
        for the most current requirements before making any compliance decisions.
      </div>

      <h2 className="text-2xl mt-10 mb-4">What is a Tax Audit?</h2>
      <p className="leading-relaxed">
        A tax audit in India involves a thorough review of a taxpayer&apos;s financial records and tax returns to confirm the accuracy of tax payments made and the tax liability declared. Governed by the <strong className="text-primary">Income Tax Act, 1961</strong>, it is conducted by a Chartered Accountant appointed by the taxpayer when their turnover surpasses prescribed threshold limits.
      </p>
      <p className="leading-relaxed">
        If the audit uncovers any discrepancies or instances of non-compliance, the taxpayer is liable to pay the additional tax along with applicable interest and penalties.
      </p>

      <h2 className="text-2xl mt-10 mb-4">What is Section 44AB?</h2>
      <p className="leading-relaxed">
        <strong className="text-primary">Section 44AB</strong> of the Income Tax Act mandates a tax audit for certain individuals and entities engaged in business or profession. The audit must be conducted by a Chartered Accountant and submitted in the prescribed format before the specified due date.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Objectives of Tax Audit</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Ensuring Compliance</strong> – Verifies adherence to the Income Tax Act, particularly Section 44AB.</li>
        <li><strong className="text-primary">Accuracy of Financial Statements</strong> – Validates that income, expenses, and profits are accurately recorded in accordance with accounting standards.</li>
        <li><strong className="text-primary">Prevention of Tax Evasion</strong> – Deters misrepresentation of income, inflation of expenses, or underreporting of profits.</li>
        <li><strong className="text-primary">Verification of Books of Accounts</strong> – Ensures all receipts, expenses, and assets are properly documented and comply with applicable laws.</li>
        <li><strong className="text-primary">Minimising Penalty Risk</strong> – Helps identify and rectify errors before submission, avoiding penalties for incorrect or incomplete returns.</li>
        <li><strong className="text-primary">Facilitating Transparency</strong> – Provides a professional check on the accuracy of financial data submitted to the Income Tax Department.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Who Must Get a Tax Audit? (Section 44AB)</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full border border-muted/30 rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-muted/10">
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Category</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Audit Threshold</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-muted/20">Business (general)</td><td className="p-3 border-b border-muted/20">Total turnover/gross receipts exceed <strong>₹1 crore</strong></td></tr>
            <tr><td className="p-3 border-b border-muted/20">Business (cash transactions ≤5%)</td><td className="p-3 border-b border-muted/20">Enhanced limit: <strong>₹10 crore</strong> (if both cash receipts and payments each ≤5%)</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Profession</td><td className="p-3 border-b border-muted/20">Gross receipts exceed <strong>₹50 lakh</strong></td></tr>
            <tr><td className="p-3 border-b border-muted/20">Presumptive Taxation – Profession (Sec 44ADA)</td><td className="p-3 border-b border-muted/20">If income declared is lower than presumptive rate AND total income exceeds basic exemption limit</td></tr>
            <tr><td className="p-3">Presumptive Business (Sec 44AD)</td><td className="p-3">If income declared is lower than 8%/6% of turnover AND total income exceeds basic exemption limit</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-muted italic">Thresholds are subject to revision. Please verify on the official Income Tax portal.</p>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Need Help with Tax Audit?</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. provides comprehensive tax audit services across India — ensuring accurate reporting, compliance with Section 44AB, and timely submission to avoid penalties.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>Complete assistance with Tax Audit under Section 44AB</li>
          <li>Preparation and filing of accurate Tax Audit Reports by qualified CAs</li>
          <li>Review of books and financials for tax compliance</li>
          <li>Expert advisory on audit applicability and turnover thresholds</li>
          <li>Support with tax filing, reconciliations, and adjustments</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

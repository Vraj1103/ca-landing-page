import Link from "next/link";

export default function GstReturnFilingContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness only. GST return forms, due dates, and applicability thresholds are subject to revision by CBIC. Please refer to the{" "}
        <a href="https://www.gst.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">official GST portal</a>{" "}
        for the most current and accurate requirements before making any compliance decisions.
      </div>

      <h2 className="text-2xl mt-10 mb-4">What is a GST Return?</h2>
      <p className="leading-relaxed">
        A <strong className="text-primary">GST return</strong> is a document that contains details of sales, purchases, tax payments, and other financial information that taxpayers are required to report periodically to the government. The filing frequency — monthly, quarterly, or annually — depends on the nature and turnover of the business. Timely and accurate filing ensures businesses can claim input tax credits, avoid penalties, and maintain seamless supply chain compliance.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Types of GST Returns</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full border border-muted/30 rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-muted/10">
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Form</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Purpose</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-muted/20 font-medium">GSTR-1</td><td className="p-3 border-b border-muted/20">Outward supplies (invoices, debit/credit notes)</td><td className="p-3 border-b border-muted/20">11th of following month (monthly); Quarterly under QRMP</td></tr>
            <tr><td className="p-3 border-b border-muted/20 font-medium">GSTR-2B</td><td className="p-3 border-b border-muted/20">Auto-generated ITC summary (static, read-only)</td><td className="p-3 border-b border-muted/20">Generated on 14th of following month</td></tr>
            <tr><td className="p-3 border-b border-muted/20 font-medium">GSTR-3B</td><td className="p-3 border-b border-muted/20">Summary self-declared return of tax liability</td><td className="p-3 border-b border-muted/20">20th (monthly); 22nd/24th (QRMP, by state category)</td></tr>
            <tr><td className="p-3 border-b border-muted/20 font-medium">GSTR-4</td><td className="p-3 border-b border-muted/20">Annual return for Composition Scheme taxpayers</td><td className="p-3 border-b border-muted/20">30th April of the following financial year</td></tr>
            <tr><td className="p-3 border-b border-muted/20 font-medium">GSTR-5</td><td className="p-3 border-b border-muted/20">Non-resident foreign taxpayers</td><td className="p-3 border-b border-muted/20">20th of following month</td></tr>
            <tr><td className="p-3 border-b border-muted/20 font-medium">GSTR-6</td><td className="p-3 border-b border-muted/20">Input Service Distributors (ISDs)</td><td className="p-3 border-b border-muted/20">13th of following month</td></tr>
            <tr><td className="p-3 border-b border-muted/20 font-medium">GSTR-7</td><td className="p-3 border-b border-muted/20">TDS deductors (government agencies)</td><td className="p-3 border-b border-muted/20">10th of following month</td></tr>
            <tr><td className="p-3 border-b border-muted/20 font-medium">GSTR-8</td><td className="p-3 border-b border-muted/20">E-commerce operators</td><td className="p-3 border-b border-muted/20">10th of following month</td></tr>
            <tr><td className="p-3 border-b border-muted/20 font-medium">GSTR-9</td><td className="p-3 border-b border-muted/20">Annual return (all regular taxpayers)</td><td className="p-3 border-b border-muted/20">31st December of the following financial year</td></tr>
            <tr><td className="p-3 border-b border-muted/20 font-medium">GSTR-9C</td><td className="p-3 border-b border-muted/20">Reconciliation statement (turnover &gt; ₹5 crore)</td><td className="p-3 border-b border-muted/20">31st December of the following financial year</td></tr>
            <tr><td className="p-3 font-medium">GSTR-10</td><td className="p-3">Final return on GST cancellation</td><td className="p-3">Within 3 months of cancellation order</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl mt-10 mb-4">Our GST Return Filing Services</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Analysing client data to ensure accurate disclosures</li>
        <li>Reviewing draft GST returns for compliance and correctness</li>
        <li>Assessing input tax credit eligibility on purchases and capital goods</li>
        <li>Evaluating and calculating GST liabilities</li>
        <li>Verifying applicability of reverse charge mechanism (RCM) and tax payments under RCM</li>
        <li>Assisting with GST payments, reconciliation, and return filing</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Steps to File a GST Return</h2>
      <ol className="list-decimal pl-6 space-y-1 my-4">
        <li>Log into the GST portal using your credentials.</li>
        <li>Navigate to the &ldquo;Returns&rdquo; section and select the applicable tax period and form.</li>
        <li>Enter details of taxable supplies, tax rates, and tax liability.</li>
        <li>Declare any input tax credit you wish to claim.</li>
        <li>Pay applicable taxes, fees, or interest before the due date.</li>
        <li>Preview, submit, and authenticate using Aadhaar OTP or Digital Signature Certificate (DSC).</li>
      </ol>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Need Help with GST Return Filing?</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. provides comprehensive GST return filing services across India — ensuring every return is accurate, timely, and fully compliant with GST regulations.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>Monthly, quarterly, and annual GST return filing (GSTR-1, GSTR-3B, GSTR-9)</li>
          <li>GST reconciliation, ITC optimisation, and notice handling</li>
          <li>Advisory on return form applicability and QRMP scheme</li>
          <li>Ongoing GST compliance support for businesses across sectors</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

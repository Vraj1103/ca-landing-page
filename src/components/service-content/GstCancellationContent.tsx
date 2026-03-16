import Link from "next/link";

export default function GstCancellationContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness only. GST cancellation rules, procedures, and consequences are subject to revision by CBIC. Please refer to the{" "}
        <a href="https://www.gst.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">official GST portal</a>{" "}
        for the most current requirements before initiating or responding to any cancellation proceedings.
      </div>

      <h2 className="text-2xl mt-10 mb-4">What is GST Cancellation?</h2>
      <p className="leading-relaxed">
        GST registration is mandatory for businesses meeting prescribed turnover limits or operating in specific sectors. However, in certain circumstances, a GST registration may be cancelled — either voluntarily by the taxpayer or by the tax authorities. Understanding the reasons and consequences of GST cancellation is crucial to ensure compliance and avoid legal repercussions.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Voluntary Cancellation of GST Registration</h2>
      <p className="leading-relaxed">A taxpayer may choose to cancel their GST registration under the following conditions:</p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li><strong className="text-primary">Business Closure:</strong> If a business ceases operations permanently.</li>
        <li><strong className="text-primary">Turnover Falls Below Threshold:</strong> If the annual turnover falls below the mandatory GST registration limit.</li>
        <li><strong className="text-primary">Change in Business Structure:</strong> Merger, acquisition, or change in ownership that renders the existing registration invalid.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">GST Cancellation by Tax Authorities</h2>
      <p className="leading-relaxed">The GST authorities may cancel a taxpayer&rsquo;s registration due to non-compliance or violations, including:</p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Consistent non-filing of GST returns for a specified period</li>
        <li>Failure to pay GST dues on time</li>
        <li>Fraudulent activities — tax evasion, fake invoices, or misreported transactions</li>
        <li>Non-compliant business operations in violation of GST laws</li>
        <li>GST registration obtained through misrepresentation or incorrect details</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Impact of GST Cancellation on Your Business</h2>

      <h3 className="text-lg mt-6 mb-2">Loss of Legal Authorization to Collect GST</h3>
      <p className="leading-relaxed">Once cancelled, the business can no longer legally charge GST on sales, making it non-compliant and potentially alienating GST-registered customers and vendors.</p>

      <h3 className="text-lg mt-6 mb-2">Inability to Claim Input Tax Credit (ITC)</h3>
      <p className="leading-relaxed">Without registration, the business loses its right to claim ITC on purchases, increasing overall costs and reducing competitiveness.</p>

      <h3 className="text-lg mt-6 mb-2">Damage to Business Reputation</h3>
      <p className="leading-relaxed">GST cancellation may signal financial instability or non-compliance to customers, suppliers, and business partners, eroding trust and credibility.</p>

      <h3 className="text-lg mt-6 mb-2">Legal and Compliance Penalties</h3>
      <p className="leading-relaxed">Non-compliance may result in penalties, fines, and immediate settlement demands for pending GST dues, creating additional financial pressure.</p>

      <h3 className="text-lg mt-6 mb-2">Restricted Business Operations</h3>
      <p className="leading-relaxed">Sectors such as e-commerce and government tenders require active GST registration. Without it, the business may lose valuable contracts and be restricted from major platforms.</p>

      <h2 className="text-2xl mt-10 mb-4">GST Revocation (Reactivation)</h2>
      <p className="leading-relaxed">
        If a GST registration has been cancelled by the authorities, the taxpayer may apply for <strong className="text-primary">revocation of cancellation</strong> within 30 days (extendable by up to 180 days on the Commissioner&rsquo;s approval) by filing an application on the GST portal (Form GST REG-21), clearing all pending returns, and paying all outstanding dues.
      </p>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Need Help with GST Cancellation or Revocation?</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. provides end-to-end GST cancellation and revocation services across India — ensuring compliance with all regulatory requirements while minimising penalties or delays.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>End-to-end assistance to cancel GST registration online</li>
          <li>Advisory on conditions for voluntary surrender or compulsory cancellation</li>
          <li>Filing revocation application (GST REG-21) for reactivation</li>
          <li>Handling departmental notices or queries during the GST exit process</li>
          <li>Ensuring compliance and post-cancellation documentation</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

import Link from "next/link";

export default function IncomeTaxNoticeContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness only and may be updated as the Income Tax Act, 1961 is amended. Please refer to the{" "}
        <a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">official Income Tax portal</a>{" "}
        for the most current provisions. Receiving a notice is not automatically an indication of wrongdoing — prompt and professional response is key.
      </div>

      <h2 className="text-2xl mt-10 mb-4">What is an Income Tax Notice?</h2>
      <p className="leading-relaxed">
        An income tax notice is an official communication from the tax authorities to individuals or businesses. In many instances, these notices are routine — triggered by verification of information, clarification of discrepancies, or processing of returns. Understanding the reason behind the notice and responding appropriately can prevent further complications.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Common Reasons for Receiving a Notice</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Mismatch in Income Details</strong> – If income declared in your return does not align with Form 26AS, AIS, or TIS data available with the department.</li>
        <li><strong className="text-primary">Failure to File Returns</strong> – If you are required to file an ITR but have not done so.</li>
        <li><strong className="text-primary">Discrepancies in Tax Payment</strong> – Tax paid (self-assessment, advance tax, or TDS) does not match the calculated liability.</li>
        <li><strong className="text-primary">High-Value Transactions</strong> – Large cash deposits, property purchases, stock investments, or credit card expenditures inconsistent with reported income.</li>
        <li>
          <strong className="text-primary">Defective Return — Section 139(9)</strong> – Return found defective due to missing details, incorrect income reporting, or tax payment mismatches. Must be corrected and resubmitted within the given deadline, or it may be deemed invalid.
        </li>
        <li>
          <strong className="text-primary">Scrutiny Assessment — Section 143(2)</strong> – Return selected for scrutiny to verify accuracy. May be triggered by discrepancies, high-value transactions, unusual deductions, or random selection. Taxpayer must provide supporting documents.
        </li>
        <li>
          <strong className="text-primary">Reassessment — Section 148</strong> – Issued when the department suspects income was not reported in previous filings — based on financial records, third-party reports, or data under CRS/DTAA treaties.
        </li>
        <li>
          <strong className="text-primary">Non-Reporting of Foreign Assets</strong> – Failure to disclose foreign income, offshore accounts, or overseas assets. India&apos;s tax treaties (CRS, DTAA) enable exchange of financial information between countries.
        </li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">How We Help Resolve Income Tax Notices</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Detailed Notice Analysis</strong> – Thorough examination of the tax notice to understand the reasons and determine the best course of action.</li>
        <li><strong className="text-primary">Document Review &amp; Compliance Check</strong> – Review of tax returns, financial statements, and relevant documents to identify discrepancies.</li>
        <li><strong className="text-primary">Drafting a Strong Reply</strong> – Legally compliant, precise response to the tax department with all necessary explanations and supporting documents.</li>
        <li><strong className="text-primary">Representation Before Tax Authorities</strong> – Our team represents you in scrutiny assessments, reassessments, or further inquiries by the Income Tax Department.</li>
        <li><strong className="text-primary">Foreign Income &amp; Tax Treaty Compliance</strong> – Expert assistance on notices involving foreign income, undisclosed assets, or transactions under DTAA or CRS.</li>
        <li><strong className="text-primary">Avoiding Penalties &amp; Legal Complications</strong> – Ensuring timely and proper responses to avoid unnecessary penalties, interest charges, or further scrutiny.</li>
      </ul>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Received an Income Tax Notice? Let Experts Handle It.</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. provides prompt and accurate Income Tax Notice Reply services across India — helping individuals, businesses, and NRIs comply with legal obligations and avoid penalties.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>End-to-end support to respond to income tax notices of all types</li>
          <li>Expert analysis and drafting of responses</li>
          <li>Assistance with notices under Section 143(1), 139(9), 148, and others</li>
          <li>Representation before the Income Tax Department</li>
          <li>Appeals before CIT (Appeals) &amp; ITAT</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

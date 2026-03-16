import Link from "next/link";

export default function GstAuditContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness only. GST audit applicability, GSTR-9/9C thresholds, and due dates are subject to revision by CBIC. Please refer to the{" "}
        <a href="https://www.gst.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">official GST portal</a>{" "}
        for the most current requirements before making any compliance decisions.
      </div>

      <h2 className="text-2xl mt-10 mb-4">What is a GST Audit?</h2>
      <p className="leading-relaxed">
        A <strong className="text-primary">GST Audit</strong> involves a thorough examination of a taxpayer&apos;s financial records, tax returns, input tax credit (ITC) claims, applicable tax rates, and other relevant documentation. The audit process ensures that revenue declared, taxes paid, input credits availed, and refunds claimed are all accurate and in compliance with the GST Act. Such verifications must be conducted by qualified professionals like Chartered Accountants.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Our GST Audit Process</h2>
      <ol className="list-decimal pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Initial Assessment</strong> – In-depth understanding of your business and financial transactions to identify potential GST compliance areas of concern.</li>
        <li><strong className="text-primary">Document Collection &amp; Review</strong> – Collection and detailed review of sales/purchase invoices, GST returns, and accounting records for accuracy and completeness.</li>
        <li><strong className="text-primary">Reconciliation</strong> – Reconciling GST returns with books of accounts to identify discrepancies and ensure data alignment with authority records.</li>
        <li><strong className="text-primary">Verification of Input Tax Credit (ITC)</strong> – Careful verification that ITC is legitimate, correctly reported, and claimed only on eligible purchases and services.</li>
        <li><strong className="text-primary">Auditing GST Returns</strong> – Examination of GSTR-1, GSTR-3B, and GSTR-9 for discrepancies between reported amounts and books of accounts.</li>
        <li><strong className="text-primary">Final Reporting</strong> – A detailed audit report including discrepancies, errors, recommendations, and areas of improvement.</li>
        <li><strong className="text-primary">Support for Filing</strong> – Assistance in filing necessary adjustments or returns with tax authorities after the audit is complete.</li>
      </ol>

      <h2 className="text-2xl mt-10 mb-4">Applicability of GSTR-9 &amp; GSTR-9C</h2>

      <h3 className="text-xl mt-6 mb-3">GSTR-9 – Annual Return</h3>
      <p className="leading-relaxed">
        GSTR-9 is an annual return that consolidates details of outward and inward supplies, ITC, and tax paid for the entire financial year. Key points (as per current CBIC notifications):
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Mandatory for all regular taxpayers with aggregate turnover exceeding <strong className="text-primary">₹2 crore</strong> during the financial year.</li>
        <li>Taxpayers with turnover up to ₹2 crore are exempted but can file voluntarily.</li>
        <li>Due date: <strong className="text-primary">31st December</strong> (unless extended by CBIC).</li>
        <li>Late fee: ₹200 per day, subject to a maximum of 0.25% of turnover in the respective state/UT.</li>
        <li>Not applicable to Composition taxpayers (they file GSTR-9A instead), Casual taxable persons, Non-resident taxable persons, Input Service Distributors, and TDS/TCS deductors.</li>
      </ul>

      <h3 className="text-xl mt-6 mb-3">GSTR-9C – Reconciliation Statement</h3>
      <p className="leading-relaxed">
        GSTR-9C reconciles the data filed in GSTR-9 with the taxpayer&apos;s audited financial statements. Key points:
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Mandatory for registered persons with aggregate turnover exceeding <strong className="text-primary">₹5 crore</strong> in the financial year.</li>
        <li>Must be <strong className="text-primary">self-certified</strong> by the taxpayer (audit by a CA/CMA is no longer required).</li>
        <li>Due date: <strong className="text-primary">31st December</strong> (unless extended by notification).</li>
      </ul>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Need Help with GST Audit?</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. offers comprehensive GST audit and compliance services across India — helping businesses navigate GST regulations, optimise input tax credits, and file accurate returns on time.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>Thorough GST compliance review and reconciliation</li>
          <li>Expert-led GSTR-9 and GSTR-9C filing</li>
          <li>Identification and rectification of compliance gaps</li>
          <li>Advisory on GST tax efficiency and ITC optimisation</li>
          <li>End-to-end guidance for GST filing and documentation</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

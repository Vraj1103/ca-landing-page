import Link from "next/link";

export default function GstConsultancyContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness only. GST laws, rules, and compliance requirements are subject to frequent revision by CBIC. Please refer to the{" "}
        <a href="https://www.gst.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">official GST portal</a>{" "}
        for the most current and accurate requirements before making any compliance decisions.
      </div>

      <h2 className="text-2xl mt-10 mb-4">Why GST Consultancy Matters</h2>
      <p className="leading-relaxed">
        GST compliance is essential for businesses of all sizes. However, navigating GST regulations can be challenging due to frequent updates, complex rules, and multiple return types. A qualified Chartered Accountant firm plays a crucial role in ensuring businesses comply with GST laws while optimising tax benefits and avoiding costly errors.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Our GST Consultancy Services</h2>

      <h3 className="text-lg mt-6 mb-2">GST Registration &amp; Amendments</h3>
      <p className="leading-relaxed">We provide end-to-end assistance for new GST registration, ensuring all legal requirements are met. We also handle amendments to existing registrations — including changes in business name, address, or ownership structure — ensuring continuous compliance.</p>

      <h3 className="text-lg mt-6 mb-2">GST Return Filing &amp; Compliance</h3>
      <p className="leading-relaxed">Accurate and timely filing of GST returns is critical to avoid penalties and interest. We ensure timely filing of:</p>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <li>Monthly/Quarterly Returns (GSTR-1, GSTR-3B)</li>
        <li>Annual Returns (GSTR-9, GSTR-9C)</li>
      </ul>

      <h3 className="text-lg mt-6 mb-2">GST Reconciliation &amp; ITC Claims</h3>
      <p className="leading-relaxed">Many businesses face ITC mismatches due to incorrect filings by suppliers. We assist in matching purchase records with GST portal data, rectifying errors to maximise ITC claims, and handling ITC-related notices from tax authorities.</p>

      <h3 className="text-lg mt-6 mb-2">GST Number Reactivation &amp; Cancellation</h3>
      <p className="leading-relaxed">We assist in reactivating cancelled GST registrations caused by non-compliance or voluntary cancellation, as well as facilitating smooth GST cancellation while settling all tax liabilities.</p>

      <h3 className="text-lg mt-6 mb-2">GST Audit &amp; Tax Assessment</h3>
      <p className="leading-relaxed">We conduct internal GST audits to identify errors before authorities do, and assist with government GST audits and tax assessments — helping prevent tax disputes and penalties.</p>

      <h3 className="text-lg mt-6 mb-2">GST Litigation &amp; Legal Support</h3>
      <p className="leading-relaxed">We provide representation before tax authorities, appeal filing against incorrect tax demands, and resolution of GST non-compliance issues — ensuring businesses handle legal matters efficiently with minimal risk.</p>

      <h3 className="text-lg mt-6 mb-2">E-Way Bill &amp; E-Invoicing Compliance</h3>
      <p className="leading-relaxed">For businesses involved in goods transportation or meeting e-invoicing turnover thresholds, we assist in generating and managing e-way bills and setting up compliant e-invoicing systems.</p>

      <h3 className="text-lg mt-6 mb-2">GST Advisory &amp; Training</h3>
      <p className="leading-relaxed">GST regulations change frequently. We offer tax planning strategies to reduce liabilities, training sessions for in-house accounting teams, and expert consultation on industry-specific GST challenges.</p>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Partner with Expert GST Consultants</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. provides comprehensive GST consultancy services across India — ensuring your business remains compliant, tax-efficient, and current with evolving regulatory frameworks.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>GST registration assistance for new businesses</li>
          <li>Accurate and timely GST return filing (GSTR-1, GSTR-3B, GSTR-9)</li>
          <li>Expert GST audit support and compliance review</li>
          <li>Strategic GST advisory to optimise tax planning</li>
          <li>Representation in departmental queries and notices</li>
          <li>Comprehensive GST services for domestic and export businesses</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

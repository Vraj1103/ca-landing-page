import Link from "next/link";

export default function StatutoryAuditContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness only and may be updated as the Companies Act, 2013 or related MCA/ICAI guidelines are revised. Please refer to the{" "}
        <a href="https://www.mca.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">official MCA portal</a>{" "}
        and the{" "}
        <a href="https://www.icai.org" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">ICAI website</a>{" "}
        for the most current requirements.
      </div>

      <h2 className="text-2xl mt-10 mb-4">What is a Statutory Audit?</h2>
      <p className="leading-relaxed">
        In India, statutory audits are governed by the provisions of the <strong className="text-primary">Companies Act, 2013</strong>. A statutory audit is a legally mandated evaluation of an organisation&apos;s financial records and operations, conducted by an independent Chartered Accountant appointed by the shareholders. The objective is to provide an impartial assessment of the company&apos;s financial health and its adherence to applicable laws and accounting standards.
      </p>
      <p className="leading-relaxed">
        The audit primarily involves a comprehensive review of financial statements such as the Balance Sheet and the Profit &amp; Loss Account, and is compulsory for certain businesses that meet specified criteria. The auditor must have no affiliation or relationship with the entity being audited.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Types of Audit Opinions</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li><strong className="text-primary">Unqualified (Clean) Opinion</strong> – The financials are accurate and comply with all regulatory standards.</li>
        <li><strong className="text-primary">Qualified Opinion</strong> – The financials are mostly accurate, but with some exceptions.</li>
        <li><strong className="text-primary">Adverse Opinion</strong> – Significant inaccuracies or non-compliance with statutory requirements.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Our Statutory Audit Process</h2>
      <ol className="list-decimal pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Understanding the Business Environment</strong> – In-depth review of your operations, industry, internal controls, and financial reporting framework to identify risk areas and design a tailored audit strategy.</li>
        <li><strong className="text-primary">Planning the Audit</strong> – A comprehensive, risk-based audit plan covering scope, objectives, timelines, and key focus areas.</li>
        <li><strong className="text-primary">Assessment of Internal Controls</strong> – Evaluation of internal control systems — processes, approvals, documentation, and segregation of duties.</li>
        <li><strong className="text-primary">Substantive Testing and Verification</strong> – Detailed testing of financial records, account balances, ledger scrutiny, revenue recognition, asset valuation, and liabilities.</li>
        <li><strong className="text-primary">Analytical Procedures</strong> – Comparison of current financial data with historical trends, budgets, and industry benchmarks; unusual variances are thoroughly investigated.</li>
        <li><strong className="text-primary">Compliance Review</strong> – Verification of compliance with the Companies Act, 2013, applicable Accounting Standards (AS/Ind AS), and other regulatory requirements.</li>
        <li><strong className="text-primary">Reporting &amp; Audit Opinion</strong> – A statutory audit report in the prescribed format, highlighting observations, qualified or unqualified opinion, and any adverse remarks.</li>
        <li><strong className="text-primary">Discussion and Feedback</strong> – Detailed discussion with management to present findings, suggest improvements, and help enhance financial practices and internal controls.</li>
      </ol>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Need Help with Statutory Audit?</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. provides reliable statutory audit services across India — ensuring financial transparency, governance, and full compliance with the Companies Act, 2013 and applicable accounting standards.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>Comprehensive company audit as mandated by statute</li>
          <li>End-to-end management of the audit process with detailed reporting</li>
          <li>Services by qualified statutory auditors for companies and LLPs</li>
          <li>Advisory on legal audit compliance and internal control systems</li>
          <li>Assistance with audit planning, documentation, and report finalisation</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

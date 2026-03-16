import Link from "next/link";

export default function ConsultancyContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness only. Regulatory requirements, accounting standards, and compliance obligations are subject to change. Please consult our team or refer to the relevant statutory bodies for the most current requirements before making any business decisions.
      </div>

      <h2 className="text-2xl mt-10 mb-4">End-to-End Business Consultancy Services</h2>
      <p className="leading-relaxed">
        For any business to achieve its goals, robust advisory and consulting support is essential. HETAL J SHAH &amp; Co. provides comprehensive business consultancy services — helping clients streamline operations, maintain compliance, and make informed financial decisions.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Regulatory &amp; Advisory Services</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Regulatory compliance advisory across direct tax, indirect tax, and corporate laws</li>
        <li>Advisory on new regulatory requirements and their impact on business operations</li>
        <li>Liaison with government authorities and regulators on behalf of clients</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Accounting &amp; Book-keeping Services</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Day-to-day accounting and book-keeping for SMEs and corporates</li>
        <li>Reconciliation of accounts and ledger maintenance</li>
        <li>Preparation of financial statements under applicable accounting standards</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Payroll Processing Services</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>End-to-end payroll processing and salary disbursement coordination</li>
        <li>Statutory deductions — PF, ESIC, Professional Tax, TDS on salaries</li>
        <li>Payslip generation and annual Form 16 issuance</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Management Reporting</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Monthly / quarterly MIS reports tailored to management requirements</li>
        <li>Business performance dashboards and variance analysis</li>
        <li>Budgeting, forecasting, and scenario planning</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">FEMA-Related Services &amp; RBI Filings</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Advisory on outward and inward remittances under FEMA</li>
        <li>Form 15CA/15CB certification for outward remittances</li>
        <li>RBI filings for foreign investments, ECBs, and overseas transactions</li>
        <li>Compounding applications for FEMA contraventions</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Project Reports &amp; Bank Approvals</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Preparation of detailed project reports (DPRs) for bank finance</li>
        <li>CMA data, working capital assessment, and term loan projections</li>
        <li>Assistance with bank documentation and loan disbursement coordination</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Financial Controls, Valuation &amp; Other Services</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Cash flow planning and fund flow analysis</li>
        <li>Valuation and verification of fixed assets</li>
        <li>Design and review of financial controls, systems, and processes</li>
        <li>Advance ruling representational services</li>
        <li>IND AS conversion and implementation support</li>
        <li>Group reporting under IFRS / US GAAP for subsidiaries of global entities</li>
      </ul>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Let Us Be Your Business Advisory Partner</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. provides end-to-end business consultancy services for SMEs, startups, and established enterprises across India — combining technical expertise with practical business insight to help you grow with confidence.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>Accounting, book-keeping, and financial statement preparation</li>
          <li>Payroll processing and statutory compliance management</li>
          <li>FEMA advisory and RBI filings</li>
          <li>Project reports for bank approvals and working capital loans</li>
          <li>IND AS / IFRS reporting and financial controls review</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

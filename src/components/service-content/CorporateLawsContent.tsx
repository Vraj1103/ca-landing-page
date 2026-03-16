import Link from "next/link";

export default function CorporateLawsContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness only. Provisions under the Companies Act, 2013 and MCA regulations are subject to amendment. Please refer to the{" "}
        <a href="https://www.mca.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">Ministry of Corporate Affairs portal</a>{" "}
        for the most current requirements before making any compliance decisions.
      </div>

      <h2 className="text-2xl mt-10 mb-4">Corporate Laws &amp; ROC Compliances</h2>
      <p className="leading-relaxed">
        The <strong className="text-primary">Companies Act, 2013</strong> governs the incorporation and operation of companies and Limited Liability Partnerships (LLPs) in India. It is administered by the Ministry of Corporate Affairs (MCA) through the Registrar of Companies (ROC). Compliance with this Act protects a company from legal risks, ensures transparent governance, and maintains credibility with banks, investors, and regulators.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Company Law &amp; Secretarial Compliances</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Compliances relating to meetings of the Board of Directors, Members, and Creditors</li>
        <li>Filing Annual Returns (MGT-7) and financial statements (AOC-4) with the MCA/ROC</li>
        <li>Maintenance of Minutes Books, Statutory Registers, and other statutory records</li>
        <li>Change/alteration of the company name or registered office</li>
        <li>Alteration of the Memorandum of Association (MoA) — name, registered office, object, and capital clauses</li>
        <li>Alteration of the Articles of Association (AoA)</li>
        <li>Issue and allotment of shares, and all related compliances</li>
        <li>Transfer of shares</li>
        <li>Appointment and resignation of Directors; filing DIR-12</li>
        <li>Managerial remuneration and related compliances</li>
        <li>Creation, modification, and satisfaction of charges (CHG-1, CHG-4)</li>
        <li>Acceptance of deposits and related compliances</li>
        <li>Secretarial Audit (applicable to prescribed class of companies)</li>
        <li>Compounding of offences under the Companies Act</li>
        <li>Drafting of Directors&rsquo; Report, Annual Report, and Corporate Governance Report</li>
        <li>Application for Director&rsquo;s Identification Number (DIN) and related compliances</li>
        <li>Striking off companies (Form STK-2)</li>
        <li>Employee Stock Option Plans (ESOPs), buy-back of securities, rights issue</li>
        <li>XBRL filings for prescribed class of companies</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Statutory Certification</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Signing and certifying the Annual Return of Private &amp; Public Companies</li>
        <li>Certifying compliance with requirements of the Companies Act, 2013</li>
        <li>Certifying all documents required to be submitted to the Registrar of Companies</li>
        <li>Certifying compliance with Listing Agreement requirements (for listed entities)</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Legal Consultancy</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Drafting contracts and legal agreements</li>
        <li>Joint Venture Agreements</li>
        <li>Legal opinions on corporate matters</li>
        <li>Labour laws advisory and related matters</li>
        <li>Drafting of Service Rules and Personnel Policy</li>
        <li>MOUs/Agreements between shareholders or business partners</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Event-Based &amp; Annual ROC Filings</h2>
      <p className="leading-relaxed">Every company and LLP must file certain forms annually and on the occurrence of specific events. Key annual filings include:</p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li><strong>MGT-7 / MGT-7A</strong> — Annual Return (within 60 days of AGM)</li>
        <li><strong>AOC-4 / AOC-4 XBRL</strong> — Financial Statements (within 30 days of AGM)</li>
        <li><strong>ADT-1</strong> — Appointment of Auditor (within 15 days of AGM)</li>
        <li><strong>DIR-3 KYC</strong> — Annual KYC for all Directors (by 30 September each year)</li>
        <li><strong>LLP Form 8 &amp; Form 11</strong> — Annual Statement of Accounts and Solvency / Annual Return</li>
      </ul>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Need Help with ROC Compliances &amp; Corporate Laws?</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. provides comprehensive corporate law and ROC compliance services across India — helping companies and LLPs meet all statutory obligations under the Companies Act, 2013.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>Annual filing of MGT-7, AOC-4, ADT-1, and other statutory forms</li>
          <li>DIN KYC, FEMA compliance, and Director updates</li>
          <li>Secretarial documentation and minutes maintenance</li>
          <li>Event-based filings for share transfers, charges, and changes</li>
          <li>Advisory on regulatory compliance under Companies Act, 2013</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

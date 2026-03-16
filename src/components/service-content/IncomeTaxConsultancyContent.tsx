import Link from "next/link";

export default function IncomeTaxConsultancyContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness only. Tax laws, rates, and regulations are subject to revision in each Union Budget. Please refer to the{" "}
        <a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">official Income Tax portal</a>{" "}
        for the most current requirements. Consult a qualified Chartered Accountant for personalised tax advice.
      </div>

      <h2 className="text-2xl mt-10 mb-4">Comprehensive Income Tax Consultancy</h2>
      <p className="leading-relaxed">
        HETAL J SHAH &amp; Co. provides comprehensive income tax consultancy services to individuals, businesses, startups, and corporates. Our team specialises in income tax compliance, tax planning, tax audits, handling notices, litigation support, and corporate taxation — delivering personalised and legally compliant solutions that help optimise tax liabilities while maintaining full compliance.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Our Income Tax Consultancy Services</h2>

      <h3 className="text-xl mt-6 mb-3">Income Tax Filing &amp; Compliance</h3>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Assistance in filing Income Tax Returns (ITR) for individuals, businesses, and corporations</li>
        <li>Advance tax calculation and payment guidance to avoid interest or penalties</li>
        <li>Ensuring compliance with TDS &amp; TCS provisions</li>
        <li>Filing of Form 15CA &amp; 15CB for foreign remittances</li>
        <li>Correction of defective returns under Section 139(9)</li>
      </ul>

      <h3 className="text-xl mt-6 mb-3">Handling Income Tax Notices &amp; Litigation</h3>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Drafting and submission of responses for notices under Sections 143(1), 143(2), 139(9), 148, etc.</li>
        <li>Representation before tax authorities for scrutiny assessments and reassessment cases</li>
        <li>Handling appeals before CIT (Appeals) &amp; ITAT (Income Tax Appellate Tribunal)</li>
        <li>Support in tax raids, surveys, and investigations</li>
        <li>Resolution of tax disputes and minimising penalties or liabilities</li>
      </ul>

      <h3 className="text-xl mt-6 mb-3">Strategic Tax Planning &amp; Advisory</h3>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Personalised tax planning for individuals, businesses, and corporates</li>
        <li>Guidance on tax-saving investments under Sections 80C, 80D, 80G, etc.</li>
        <li>Capital gains tax planning to structure transactions for lower tax impact</li>
        <li>Advisory on Minimum Alternate Tax (MAT) and tax incentives</li>
        <li>HUF taxation planning for wealth distribution and tax efficiency</li>
      </ul>

      <h3 className="text-xl mt-6 mb-3">Business &amp; Corporate Taxation</h3>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Income tax compliance for companies, LLPs, and partnership firms</li>
        <li>Structuring tax-efficient models for startups and growing businesses</li>
        <li>Assistance in obtaining TAN and PAN</li>
        <li>Tax audits under Section 44AB and preparation of audit reports</li>
        <li>Expert guidance on GST &amp; direct taxation coordination</li>
      </ul>

      <h3 className="text-xl mt-6 mb-3">International Taxation &amp; Cross-Border Transactions</h3>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Compliance with Double Taxation Avoidance Agreements (DTAA)</li>
        <li>Advisory on FDI, Overseas Direct Investment (ODI), and FEMA regulations</li>
        <li>Transfer pricing compliance and documentation for multinational businesses</li>
        <li>Taxation solutions for NRIs, foreign income, and asset disclosure</li>
        <li>Filing of Foreign Asset &amp; Income Disclosure (Schedule FA)</li>
      </ul>

      <h3 className="text-xl mt-6 mb-3">Wealth Management &amp; Estate Tax Planning</h3>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Tax-efficient estate planning to safeguard assets for future generations</li>
        <li>Succession planning and HUF taxation advisory</li>
        <li>Expert consultation on gift tax, inheritance considerations, and property transfer taxation</li>
      </ul>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Need Expert Income Tax Consultancy?</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. is your trusted partner for comprehensive income tax advisory across India — delivering clarity, compliance, and confidence in your financial decisions.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>Personalised income tax consultancy for individuals and businesses</li>
          <li>Strategic income tax planning to reduce liabilities</li>
          <li>Assistance with assessments, scrutiny notices, and appeals</li>
          <li>Advisory on tax savings, exemptions, and deductions</li>
          <li>Ongoing compliance for salaried individuals, professionals, and firms</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

import Link from "next/link";

export default function NriItrContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness only. NRI tax rules, ITR forms, due dates, and DTAA provisions are subject to change. Please refer to the{" "}
        <a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">Income Tax portal</a>{" "}
        for the most current information before making any tax decisions.
      </div>

      <h2 className="text-2xl mt-10 mb-4">NRI Income Tax in India — An Overview</h2>
      <p className="leading-relaxed">
        A <strong className="text-primary">Non-Resident Indian (NRI)</strong> refers to an Indian citizen who has moved overseas. In India, tax obligations are determined by an individual&rsquo;s <em>residential status</em> rather than nationality or place of domicile. With increasing cross-border mobility, understanding and complying with Indian tax regulations is essential for NRIs earning income in India.
      </p>

      <h2 className="text-2xl mt-10 mb-4">When Does an NRI Need to File an ITR in India?</h2>
      <p className="leading-relaxed">An NRI must file an income tax return in India if their <strong className="text-primary">total income from Indian sources exceeds the basic exemption limit</strong> in a financial year. Common sources of Indian income for NRIs include:</p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Rental income from property in India</li>
        <li>Capital gains from sale of immovable property, shares, or mutual funds</li>
        <li>Interest income from NRO accounts, fixed deposits, or bonds</li>
        <li>Business income generated in India</li>
        <li>Dividends from Indian companies</li>
      </ul>
      <p className="leading-relaxed">Even if TDS has been deducted, filing a return may be necessary to claim refunds or report other income.</p>

      <h2 className="text-2xl mt-10 mb-4">NRI Tax Services We Offer</h2>

      <h3 className="text-lg mt-6 mb-2">Income Tax Return (ITR) Filing</h3>
      <p className="leading-relaxed">We provide expert assistance to NRIs in accurately filing their Indian income tax returns, ensuring all necessary documents and financial details are properly compiled and submitted within statutory deadlines. We also assist in claiming eligible tax refunds efficiently.</p>

      <h3 className="text-lg mt-6 mb-2">Income Tax Planning</h3>
      <p className="leading-relaxed">We help NRIs strategically plan their taxes to reduce liabilities while staying compliant — advising on optimal tax structures for investments and business ventures in India, and guidance on tax-efficient fund transfers.</p>

      <h3 className="text-lg mt-6 mb-2">Income Tax Representation</h3>
      <p className="leading-relaxed">We act on behalf of NRIs in interactions with tax authorities, addressing queries and resolving tax-related concerns. We also advise on tax implications of selling or transferring assets in India.</p>

      <h3 className="text-lg mt-6 mb-2">Double Taxation Avoidance Agreement (DTAA)</h3>
      <p className="leading-relaxed">India has DTAAs with over 90 countries. We provide guidance on leveraging these agreements to legally reduce or eliminate double taxation on global income — advising on treaty benefits, forms to file, and conditions for eligibility.</p>

      <h3 className="text-lg mt-6 mb-2">FEMA &amp; PMLA Compliance</h3>
      <p className="leading-relaxed">We help NRIs remain compliant with the Foreign Exchange Management Act (FEMA) and the Prevention of Money Laundering Act (PMLA), including PAN card obligations and foreign asset reporting.</p>

      <h3 className="text-lg mt-6 mb-2">Lower TDS Deduction Certificate</h3>
      <p className="leading-relaxed">We assist NRIs in obtaining a Lower Tax Deduction Certificate (LDC) under Section 197, which allows reduced withholding tax rates on eligible income earned in India — particularly for property transactions.</p>

      <h3 className="text-lg mt-6 mb-2">Tax Planning Before Returning to India</h3>
      <p className="leading-relaxed">For NRIs planning to relocate back to India, we offer transition tax planning strategies, including guidance on repatriation of funds and financial restructuring to optimise tax outflows.</p>

      <h2 className="text-2xl mt-10 mb-4">Why Choose a CA for NRI Tax Filing?</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>NRI tax laws involve the Income Tax Act, FEMA, and multiple DTAA treaties — specialised expertise is essential</li>
        <li>Errors in residential status determination can result in significant tax demands and penalties</li>
        <li>Proper filing can unlock refunds and optimise tax outflows</li>
        <li>Representation capabilities if notices are received from the Income Tax Department</li>
      </ul>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Need Help with NRI Income Tax Return Filing?</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. provides expert NRI tax filing services across India. Whether you are managing investments, selling property, or simply need to file your Indian ITR from abroad, our team offers reliable and timely assistance.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>ITR filing for NRIs across all income categories</li>
          <li>Assistance with property, capital gains, and interest income</li>
          <li>Representation for Income Tax Department queries</li>
          <li>DTAA advisory and foreign asset reporting</li>
          <li>Seamless remote service delivery for clients across geographies</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

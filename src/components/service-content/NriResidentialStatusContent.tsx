import Link from "next/link";

export default function NriResidentialStatusContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness only. Residential status rules, day-count thresholds, and FEMA definitions are subject to change under the Income Tax Act and the Foreign Exchange Management Act. Please refer to the{" "}
        <a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">Income Tax portal</a>{" "}
        and the{" "}
        <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">RBI website</a>{" "}
        for the most current requirements before making any tax or compliance decisions.
      </div>

      <h2 className="text-2xl mt-10 mb-4">Why Residential Status Matters</h2>
      <p className="leading-relaxed">
        The <strong className="text-primary">Income Tax Act, 1961</strong> applies to all persons having income earned or accrued in India, but its applicability differs based on the residential status of the person. Residential status under the Income Tax Act is <em>not</em> the same as citizenship — an Indian citizen can be a non-resident, and a foreign citizen can be a resident for Indian tax purposes. Tax liability is calculated based on this classification, making it critically important.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Conditions for Resident Status</h2>
      <p className="leading-relaxed">A person is regarded as a <strong className="text-primary">resident of India</strong> if either of the following criteria is satisfied in a previous year:</p>
      <ol className="list-decimal pl-6 space-y-2 my-4">
        <li>The person is in India for <strong>182 days or more</strong> (cumulatively) in the previous year; <em>or</em></li>
        <li>The person is in India for <strong>60 days or more</strong> in the previous year <em>and</em> for a cumulative <strong>365 days or more</strong> in the four immediately preceding years.</li>
      </ol>

      <h3 className="text-lg mt-6 mb-2">Exceptions to the 60-Day Rule</h3>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>An Indian citizen leaving India for employment abroad (or as a crew member under the Merchant Shipping Act) — the 60-day threshold is raised to <strong>182 days</strong>.</li>
        <li>An Indian citizen or Person of Indian Origin (PIO) visiting India from abroad — the 60-day threshold is raised to <strong>182 days</strong>. However, if their total Indian income (excluding foreign-source income) exceeds ₹15 lakh, the threshold is reduced to <strong>120 days</strong>.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Ordinarily Resident vs. Not Ordinarily Resident</h2>
      <p className="leading-relaxed">Once classified as a resident, a person may be further categorised as <strong className="text-primary">Resident and Ordinarily Resident (ROR)</strong> or <strong className="text-primary">Resident but Not Ordinarily Resident (RNOR)</strong>.</p>

      <p className="leading-relaxed mt-4">A person is <em>Not Ordinarily Resident</em> if either condition below is met:</p>
      <ol className="list-decimal pl-6 space-y-2 my-4">
        <li>The person has been a non-resident in <strong>9 out of 10</strong> previous years immediately preceding the current year; <em>or</em></li>
        <li>The person has been in India for <strong>729 days or less</strong> (cumulatively) in the 7 years immediately preceding the current year.</li>
      </ol>

      <p className="leading-relaxed mt-4">Additionally, the following persons are treated as <strong>RNOR</strong>:</p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>An Indian citizen or PIO with Indian income exceeding ₹15 lakh (excluding foreign-source income) who is present in India for 120–179 days in the previous year.</li>
        <li>An Indian citizen whose Indian income exceeds ₹15 lakh and whose income is not taxable in any other country (deemed resident concept under Section 6(1A)).</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Definition of NRI under FEMA</h2>
      <p className="leading-relaxed">
        Under the <strong className="text-primary">Foreign Exchange Management Act (FEMA)</strong>, a person is resident outside India if they are in India for less than 182 days during the course of the preceding financial year, and includes a person who stays abroad:
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>For employment, business, or vocation;</li>
        <li>Under circumstances indicating an intention to stay outside India for an uncertain duration; or</li>
        <li>As an Indian citizen deputed abroad temporarily for employment or education.</li>
      </ul>

      <div className="not-prose my-8 p-4 rounded-xl bg-accent/10 border border-accent/20 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Note:</strong> The definition of NRI under the Income Tax Act (based on day-count in a financial year) and under FEMA (based on purpose and intention to stay abroad) can differ. Both definitions need to be assessed independently for tax planning and compliance.
      </div>

      <h2 className="text-2xl mt-10 mb-4">NRI Services We Offer</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Determination of residential status for tax compliance</li>
        <li>NRI Income Tax Return (ITR) filing in India</li>
        <li>Tax planning for NRIs — investments, property, and repatriation</li>
        <li>Form 15CA &amp; 15CB certification for outward remittances</li>
        <li>Lower/Nil TDS deduction certificate (Section 197) for property sales</li>
        <li>Double Taxation Avoidance Agreement (DTAA) advisory</li>
        <li>Response to income tax notices received by NRIs</li>
        <li>FEMA and PMLA compliance advisory</li>
      </ul>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Need Help Determining Your Residential Status?</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. specialises in NRI taxation services across India. Whether you are newly classified as an NRI, returning to India, or managing cross-border investments, our team provides clear, accurate, and compliant guidance.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

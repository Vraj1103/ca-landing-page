import Link from "next/link";

export default function ItrFilingContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness only. ITR forms, due dates, exemption limits, and penalty provisions are subject to revision in each Union Budget. Please refer to the{" "}
        <a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">official Income Tax e-filing portal</a>{" "}
        for the most current and accurate information before making any compliance decisions.
      </div>

      <h2 className="text-2xl mt-10 mb-4">What is an Income Tax Return (ITR)?</h2>
      <p className="leading-relaxed">
        An <strong className="text-primary">Income Tax Return (ITR)</strong> is a prescribed statutory form through which a taxpayer reports details of income earned during a financial year, taxes paid, deductions claimed, and the resulting tax liability or refund due. The obligation to furnish an ITR arises under <strong className="text-primary">Section 139 of the Income-tax Act, 1961</strong>.
      </p>
      <p className="leading-relaxed">
        Filing an ITR is not merely a disclosure of income — it is a formal compliance document that determines final tax liability, enables claim of refunds, allows carry-forward of losses, serves as official proof of income, and facilitates financial transactions such as loans and visa processing.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Types of Income Covered</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Income from Salary</li>
        <li>Income from House Property</li>
        <li>Profits and Gains of Business or Profession</li>
        <li>Capital Gains</li>
        <li>Income from Other Sources</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">ITR Forms — Which One Applies to You?</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full border border-muted/30 rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-muted/10">
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Form</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Applicable To</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Key Conditions</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-muted/20 font-medium">ITR-1 (Sahaj)</td><td className="p-3 border-b border-muted/20">Resident Individuals</td><td className="p-3 border-b border-muted/20">Income up to ₹50 lakh; salary/pension, one house property, other sources. Excludes directors and holders of unlisted equity shares.</td></tr>
            <tr><td className="p-3 border-b border-muted/20 font-medium">ITR-2</td><td className="p-3 border-b border-muted/20">Individuals, HUFs, NRIs</td><td className="p-3 border-b border-muted/20">No income from Business/Profession; includes capital gains, multiple properties, foreign assets/income, RNOR/NRI status.</td></tr>
            <tr><td className="p-3 border-b border-muted/20 font-medium">ITR-3</td><td className="p-3 border-b border-muted/20">Individuals &amp; HUFs</td><td className="p-3 border-b border-muted/20">Income from Profits and Gains of Business or Profession (PGBP). Also for partners of a firm receiving salary/interest/bonus.</td></tr>
            <tr><td className="p-3 border-b border-muted/20 font-medium">ITR-4 (Sugam)</td><td className="p-3 border-b border-muted/20">Resident Individuals, HUFs, Firms (not LLP)</td><td className="p-3 border-b border-muted/20">Income up to ₹50 lakh; opting for Presumptive Taxation u/s 44AD, 44ADA, or 44AE.</td></tr>
            <tr><td className="p-3 border-b border-muted/20 font-medium">ITR-5</td><td className="p-3 border-b border-muted/20">Firms, LLPs, AOPs, BOIs, Co-operatives</td><td className="p-3 border-b border-muted/20">Entities other than Individual/HUF/Company/ITR-7 entities.</td></tr>
            <tr><td className="p-3 border-b border-muted/20 font-medium">ITR-6</td><td className="p-3 border-b border-muted/20">Companies</td><td className="p-3 border-b border-muted/20">All companies except those claiming exemption under Section 11. Mandatory even with no income/loss.</td></tr>
            <tr><td className="p-3 font-medium">ITR-7</td><td className="p-3">Trusts, Political Parties, Research/Educational Institutions</td><td className="p-3">Entities filing under Sections 139(4A)–139(4F).</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl mt-10 mb-4">Who Must File ITR for FY 2025-26?</h2>
      <h3 className="text-xl mt-6 mb-3">Basic Exemption Limits</h3>
      <div className="overflow-x-auto my-4">
        <table className="w-full border border-muted/30 rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-muted/10">
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Tax Regime</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Category</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Exemption Limit</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-muted/20">Old Regime</td><td className="p-3 border-b border-muted/20">Below 60 years</td><td className="p-3 border-b border-muted/20">₹2,50,000</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Old Regime</td><td className="p-3 border-b border-muted/20">Senior Citizen (60–79 years)</td><td className="p-3 border-b border-muted/20">₹3,00,000</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Old Regime</td><td className="p-3 border-b border-muted/20">Super Senior Citizen (80+ years)</td><td className="p-3 border-b border-muted/20">₹5,00,000</td></tr>
            <tr><td className="p-3">New Regime (Default)</td><td className="p-3">All individuals</td><td className="p-3">₹4,00,000</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-muted italic mb-4">The new tax regime is the default. Taxpayers must actively opt out if they wish to use the old regime.</p>

      <p className="leading-relaxed"><strong className="text-primary">Also mandatory even if income is below the exemption limit</strong> in cases such as: holding foreign assets, deposits exceeding ₹1 crore in current accounts, electricity expenditure exceeding ₹1 lakh, foreign travel expenditure exceeding ₹2 lakh, TDS/TCS of ₹25,000 or more, or to claim a refund of excess TDS.</p>

      <h2 className="text-2xl mt-10 mb-4">ITR Due Dates for FY 2025-26</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full border border-muted/30 rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-muted/10">
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Category of Taxpayer</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-muted/20">Individuals / HUF / AOP / BOI (Non-Audit)</td><td className="p-3 border-b border-muted/20">31st July 2026</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Non-audit business cases and Trusts</td><td className="p-3 border-b border-muted/20">31st August 2026</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Corporate Taxpayers (Companies)</td><td className="p-3 border-b border-muted/20">31st October 2026</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Tax Audit Cases (Section 44AB)</td><td className="p-3 border-b border-muted/20">31st October 2026</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Transfer Pricing Cases (Section 92E)</td><td className="p-3 border-b border-muted/20">30th November 2026</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Belated Return Filing</td><td className="p-3 border-b border-muted/20">31st December 2026</td></tr>
            <tr><td className="p-3">Revised Return Filing</td><td className="p-3">31st March 2026</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl mt-10 mb-4">Consequences of Not Filing on Time</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full border border-muted/30 rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-muted/10">
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Consequence</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Provision</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Impact</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-muted/20">Late Filing Fee</td><td className="p-3 border-b border-muted/20">Section 234F</td><td className="p-3 border-b border-muted/20">₹5,000 (income &gt; ₹5 lakh); ₹1,000 (income ≤ ₹5 lakh)</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Interest Liability</td><td className="p-3 border-b border-muted/20">Sections 234A, 234B, 234C</td><td className="p-3 border-b border-muted/20">1% per month on tax payable</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Loss of Carry Forward</td><td className="p-3 border-b border-muted/20">Section 139(3)</td><td className="p-3 border-b border-muted/20">Business/capital losses cannot be carried forward</td></tr>
            <tr><td className="p-3">Prosecution</td><td className="p-3">Section 276CC</td><td className="p-3">Imprisonment (3 months to 7 years) and fine for wilful default</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl mt-10 mb-4">Common Filing Mistakes to Avoid</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Selecting the incorrect ITR form</li>
        <li>Mismatch with Form 26AS / AIS / TIS data</li>
        <li>Omitting interest income, dividend income, or capital gains</li>
        <li>Incorrect claim of deductions or HRA exemptions</li>
        <li>Non-disclosure of foreign assets (mandatory for residents)</li>
        <li>Improper capital gains computation (incorrect indexation, ignoring special rates)</li>
        <li>Not completing e-verification within the prescribed timeline</li>
        <li>Incorrect bank details causing refund failure</li>
      </ul>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Need Help with ITR Filing?</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. offers accurate, timely, and hassle-free Income Tax Return filing services across India — for individuals, NRIs, businesses, and corporates.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>ITR filing for salaried, self-employed, NRIs, senior citizens, and companies</li>
          <li>Capital gains, business, freelancing, and LLP/partnership ITR filing</li>
          <li>Expert tax computation, deduction planning, and refund claim</li>
          <li>Assistance with belated, revised, and updated return filings</li>
          <li>Advisory on tax-saving investments and compliance</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

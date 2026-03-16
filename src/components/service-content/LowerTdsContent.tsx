import Link from "next/link";

export default function LowerTdsContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness only. TDS rates, LTCG/STCG thresholds, and Section 197 procedures are subject to change under the Income Tax Act. Please refer to the{" "}
        <a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">Income Tax portal</a>{" "}
        and{" "}
        <a href="https://www.tdscpc.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">TRACES portal</a>{" "}
        for the most current requirements before initiating any application.
      </div>

      <h2 className="text-2xl mt-10 mb-4">What is a Lower TDS Deduction Certificate?</h2>
      <p className="leading-relaxed">
        A <strong className="text-primary">Lower TDS Deduction Certificate (Section 197)</strong> is an official authorization from the Income Tax Department permitting a buyer (deductor) to deduct tax at a rate lower than the standard statutory rate — or even at Nil. It is particularly critical for <strong className="text-primary">Non-Resident Indians (NRIs)</strong> and Overseas Citizens of India (OCIs) selling immovable property in India, where high TDS rates can otherwise block a significant portion of sale proceeds.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Why Is TDS High on NRI Property Sales?</h2>
      <p className="leading-relaxed">Under the Indian Income Tax Act, TDS rates differ based on the seller&rsquo;s residential status:</p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border border-muted/30 rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-muted/10">
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Seller Type</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Applicable Section</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">TDS Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-muted/20">Resident Indian</td><td className="p-3 border-b border-muted/20">Section 194-IA</td><td className="p-3 border-b border-muted/20">1% of sale consideration (if ≥ ₹50 lakh)</td></tr>
            <tr><td className="p-3 border-b border-muted/20">NRI — Long-term Capital Gains (held &gt; 2 years, after 23 July 2024)</td><td className="p-3 border-b border-muted/20">Section 195</td><td className="p-3 border-b border-muted/20">12.5% + surcharge + cess (~14.95%)</td></tr>
            <tr><td className="p-3">NRI — Short-term Capital Gains (held ≤ 2 years)</td><td className="p-3">Section 195</td><td className="p-3">As per applicable income tax slab rates</td></tr>
          </tbody>
        </table>
      </div>

      <p className="leading-relaxed">Without a Section 197 certificate, an NRI seller can have up to ~15% of the total sale proceeds blocked as TDS — even if the actual tax liability is far lower (after exemptions under Sections 54 and 54F). A Lower TDS Certificate helps prevent over-blocking of funds.</p>

      <h2 className="text-2xl mt-10 mb-4">Eligibility for Lower TDS Certificate</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>The seller&rsquo;s actual tax on capital gains is lower than the standard TDS rate</li>
        <li>The seller has reinvested the gains under Sections 54 or 54F (e.g., purchased another residential house)</li>
        <li>The seller&rsquo;s total income in India is below the basic exemption limit</li>
        <li>In case of a capital loss, a Nil TDS Certificate may be issued</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Documents Required</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Income Tax login credentials and TRACES registration of the NRI seller</li>
        <li>Draft Agreement to Sell</li>
        <li>Buyer&rsquo;s TAN (Tax Deduction Account Number) and TAN letter</li>
        <li>Copy of the NRI&rsquo;s passport</li>
        <li>Circle rate/stamp duty valuation report of the property</li>
        <li>Sale deed or builder&rsquo;s agreement for original acquisition</li>
        <li>Last 3 years&rsquo; Income Tax Returns with computation</li>
        <li>KYC documents of buyer and seller</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Step-by-Step Application Process (Form 13)</h2>
      <ol className="list-decimal pl-6 space-y-2 my-4">
        <li><strong>Registration:</strong> Register as a &ldquo;Taxpayer&rdquo; on the TRACES portal using your PAN.</li>
        <li><strong>Filing Form 13:</strong> Access the &ldquo;Statements/Forms&rdquo; section and initiate a Form 13 request.</li>
        <li><strong>Data Entry:</strong> Enter details of the buyer (PAN/TAN), property value, and applicable section (195).</li>
        <li><strong>Computation:</strong> Upload a detailed calculation of estimated capital gains.</li>
        <li><strong>Submission:</strong> Verify using a Digital Signature Certificate (DSC) or Electronic Verification Code (EVC).</li>
        <li><strong>AO Processing:</strong> The Jurisdictional Assessing Officer reviews the application and may raise queries before issuing the certificate.</li>
      </ol>

      <h2 className="text-2xl mt-10 mb-4">Important Points</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong>Validity:</strong> The certificate is valid only for the financial year in which it is issued.</li>
        <li><strong>Specificity:</strong> The certificate is linked to the specific buyer&rsquo;s TAN mentioned in the application.</li>
        <li><strong>Value Limit:</strong> Valid only up to the &ldquo;Amount of Income&rdquo; approved. TDS at the standard rate applies on any amount exceeding the approved limit.</li>
        <li><strong>Joint Buyers:</strong> Each buyer&rsquo;s TAN must be included in the Form 13 application for the reduced rate to apply to the entire transaction.</li>
        <li><strong>New Buyer:</strong> If a deal falls through and a new buyer is found, a fresh Form 13 must be filed citing the new buyer&rsquo;s TAN.</li>
        <li><strong>ITR Filing Still Required:</strong> The certificate only regulates withholding. The seller must still file their ITR to report the final capital gains and any exemptions claimed.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Common Errors That Lead to Rejection</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Incorrect TAN of the buyer — the certificate becomes invalid</li>
        <li>Undisclosed tax arrears on the seller&rsquo;s PAN</li>
        <li>Filing after the sale deed is registered (the buyer cannot honour a certificate issued after the date of deduction)</li>
        <li>Discrepancies between the Agreement to Sell and the uploaded computation</li>
      </ul>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Need Help with Lower TDS Certificate – Form 13?</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. provides expert assistance in securing Lower and Nil TDS Deduction Certificates for NRIs selling property in India — ensuring accurate filings, timely processing, and maximum liquidity.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>Filing and follow-up for Form 13 with the Income Tax Department</li>
          <li>Professional advice on eligibility and documentation</li>
          <li>Capital gains computation and exemption planning (Sec 54/54F)</li>
          <li>Liaison with the Assessing Officer for query resolution</li>
          <li>Services for NRIs, OCIs, and resident individuals across India</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

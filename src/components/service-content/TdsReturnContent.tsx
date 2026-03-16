import Link from "next/link";

export default function TdsReturnContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness only. TDS rates, due dates, and applicable sections are subject to revision in each Union Budget. Please refer to the{" "}
        <a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">official Income Tax portal</a>{" "}
        for the most current requirements before making any compliance decisions.
      </div>

      <h2 className="text-2xl mt-10 mb-4">What is TDS (Tax Deducted at Source)?</h2>
      <p className="leading-relaxed">
        <strong className="text-primary">Tax Deducted at Source (TDS)</strong> is a mechanism under the Income Tax Act, 1961 through which tax is collected at the point of income generation. Businesses and individuals making specified payments (salary, rent, professional fees, property purchases, etc.) are required to deduct tax at prescribed rates and deposit it with the government. TDS return filing ensures this compliance is documented and reported accurately.
      </p>
      <p className="leading-relaxed">
        Failure to comply results in interest penalties (Section 201(1A)), late filing fees (Section 234E), potential disallowance of expenses (Section 40(a)(ia)), and in severe cases, prosecution under Section 276B.
      </p>

      <h2 className="text-2xl mt-10 mb-4">TDS Return Forms &amp; Applicability</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full border border-muted/30 rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-muted/10">
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Form</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Applicable For</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Key Details</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-muted/20 font-medium">Form 24Q</td><td className="p-3 border-b border-muted/20">TDS on Salary</td><td className="p-3 border-b border-muted/20">Filed quarterly by employers; includes salary and TDS details</td></tr>
            <tr><td className="p-3 border-b border-muted/20 font-medium">Form 26Q</td><td className="p-3 border-b border-muted/20">TDS on Non-Salary Payments</td><td className="p-3 border-b border-muted/20">Professional fees, rent, commission, interest, etc.; filed by companies and firms for payments to residents</td></tr>
            <tr><td className="p-3 border-b border-muted/20 font-medium">Form 27Q</td><td className="p-3 border-b border-muted/20">TDS on Payments to Non-Residents</td><td className="p-3 border-b border-muted/20">Payments to NRIs and foreign entities (interest, royalty, dividends, technical fees)</td></tr>
            <tr><td className="p-3 border-b border-muted/20 font-medium">Form 26QB</td><td className="p-3 border-b border-muted/20">TDS on Property Sale (Sec 194-IA)</td><td className="p-3 border-b border-muted/20">1% TDS on property purchases above ₹50 lakh</td></tr>
            <tr><td className="p-3 font-medium">Form 26QC</td><td className="p-3">TDS on Rent (Sec 194-IB)</td><td className="p-3">5% TDS on rent payments above ₹50,000/month by individuals/HUF</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl mt-10 mb-4">TDS Deposit Deadlines</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Non-Government Deductors</strong> – TDS deducted during any month must be deposited by the <strong>7th of the following month</strong>. For deductions in March, the deadline is <strong>30th April</strong>.</li>
        <li><strong className="text-primary">Government Deductors</strong> – If deposited without a challan: same day. If using a challan: by the 7th of the next month.</li>
        <li><strong className="text-primary">Sections 194-IA &amp; 194-IB</strong> – Must be deposited within <strong>30 days from the end of the month</strong> of deduction.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Consequences of Non-Compliance</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Interest on Delay</strong> – 1% per month if TDS not deducted on time; 1.5% per month if deducted but not deposited promptly (Section 201(1A)).</li>
        <li><strong className="text-primary">Late Filing Fee</strong> – ₹200 per day under Section 234E (total not to exceed TDS payable).</li>
        <li><strong className="text-primary">Penalty</strong> – Under Section 271C, a penalty equal to the TDS amount may be imposed by the Assessing Officer.</li>
        <li><strong className="text-primary">Prosecution</strong> – Under Section 276B, TDS unpaid for over 12 months can result in imprisonment of 3 months to 7 years, plus fine.</li>
        <li><strong className="text-primary">Disallowance of Expenses</strong> – 30% of expenses disallowed under Section 40(a)(ia) if TDS is neither deducted nor deposited.</li>
      </ul>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Need Help with TDS Return Filing?</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. provides comprehensive TDS compliance solutions across India — ensuring accurate and timely filing for businesses and individuals across all applicable TDS forms.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>TDS return filing for salaried, rental, and property transactions</li>
          <li>Filing of Form 26QB (TDS on property) and Form 26QC (TDS on rent)</li>
          <li>TDS reconciliation with Form 26AS and AIS</li>
          <li>Correction filings, notice responses, and TDS applicability advisory</li>
          <li>Deposit deadline management, challan generation, and Form 16/16B issuance</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

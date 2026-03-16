import Link from "next/link";

export default function RepatriationContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness only. TCS rates, LRS limits, FEMA regulations, and Form 15CA/15CB requirements are subject to change. Please refer to the{" "}
        <a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">Income Tax portal</a>,{" "}
        <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">RBI</a>, and{" "}
        <a href="https://www.fema.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">FEMA resources</a>{" "}
        for the most current requirements before initiating any foreign remittance.
      </div>

      <h2 className="text-2xl mt-10 mb-4">Repatriation of Funds from India</h2>
      <p className="leading-relaxed">
        Transferring money from India to a foreign country is governed by the <strong className="text-primary">Foreign Exchange Management Act (FEMA)</strong> and <strong className="text-primary">Reserve Bank of India (RBI)</strong> guidelines. Whether for education, medical expenses, investments, or personal purposes, non-compliance can result in penalties, delays, or rejection of the remittance. Form 15CA and 15CB are key tools in ensuring that outward remittances are tax-compliant.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Understanding Form 15CA &amp; Form 15CB</h2>

      <h3 className="text-lg mt-6 mb-2">Form 15CA — Declaration by the Remitter</h3>
      <p className="leading-relaxed">Form 15CA is a declaration filed online with the Income Tax Department before remitting funds abroad. It is a self-declaration by the remitter about the nature of the transfer and whether applicable taxes have been deducted.</p>

      <h3 className="text-lg mt-6 mb-2">Form 15CB — Certificate by a Chartered Accountant</h3>
      <p className="leading-relaxed">Form 15CB is a CA certificate confirming that applicable taxes have been paid or that the remittance is covered under an applicable DTAA provision. It is required for remittances exceeding ₹5 lakh where tax is required to be deducted at source.</p>

      <h2 className="text-2xl mt-10 mb-4">RBI&rsquo;s Liberalized Remittance Scheme (LRS)</h2>
      <p className="leading-relaxed">Under the <strong className="text-primary">LRS</strong>, resident individuals may remit up to <strong>USD 2,50,000 per financial year</strong> for permissible transactions, including:</p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Education and living expenses abroad</li>
        <li>Medical treatment</li>
        <li>Travel-related expenses (business or tourism)</li>
        <li>Investment in foreign stocks, bonds, and real estate</li>
        <li>Gifts and donations to foreign relatives or friends</li>
        <li>Payment for services or subscriptions (e.g., foreign courses, software)</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Tax Collected at Source (TCS) on Foreign Remittances</h2>
      <p className="leading-relaxed">As per the Finance Act 2025 (effective 1 April 2025), the following TCS rates apply:</p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border border-muted/30 rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-muted/10">
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Type of Remittance</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">TCS Rate (w.e.f. 1 April 2025)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-muted/20">Education (financed by loan from a financial institution)</td><td className="p-3 border-b border-muted/20">NIL</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Medical treatment / Education (not financed by loan)</td><td className="p-3 border-b border-muted/20">Nil up to ₹10 lakh; 5% above ₹10 lakh</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Purchase of overseas tour package</td><td className="p-3 border-b border-muted/20">5% up to ₹10 lakh; 20% above ₹10 lakh</td></tr>
            <tr><td className="p-3">Any other purpose</td><td className="p-3">Nil up to ₹10 lakh; 20% above ₹10 lakh</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl mt-10 mb-4">Repatriation from NRO Accounts</h2>
      <p className="leading-relaxed">For NRIs, money can be repatriated from an <strong className="text-primary">NRO (Non-Resident Ordinary)</strong> account subject to:</p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Limit of <strong>USD 1 million per financial year</strong></li>
        <li>Submission of Form 15CA &amp; 15CB</li>
        <li>Proof of source of funds (e.g., rental income, sale proceeds)</li>
      </ul>
      <p className="leading-relaxed">Funds held in <strong>NRE (Non-Resident External)</strong> accounts and <strong>FCNR (Foreign Currency Non-Resident)</strong> accounts can be freely repatriated without restrictions.</p>

      <h2 className="text-2xl mt-10 mb-4">Step-by-Step Process</h2>
      <ol className="list-decimal pl-6 space-y-2 my-4">
        <li><strong>Choose an authorised dealer bank</strong> or licensed money transfer operator regulated by the RBI.</li>
        <li><strong>Complete Form A2 &amp; LRS Declaration</strong> — declaring the purpose of remittance and confirming FEMA compliance.</li>
        <li><strong>Obtain Form 15CA &amp; 15CB</strong> from a Chartered Accountant where applicable.</li>
        <li><strong>Submit KYC documents</strong> — PAN, Aadhaar/Passport, bank statements, and purpose-specific supporting documents.</li>
        <li><strong>Bank verification and processing</strong> — the bank verifies documents and processes the transfer via SWIFT (typically 1–5 business days).</li>
      </ol>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Need Help with 15CA &amp; 15CB Certificate Filing?</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. provides expert assistance for all outward remittance procedures — ensuring full regulatory compliance with RBI, FEMA, and the Income Tax Department.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>Preparation and e-filing of Form 15CA in accordance with Income Tax Rules</li>
          <li>Issuance of Form 15CB by a Chartered Accountant for eligible remittances</li>
          <li>Advisory on FEMA and RBI compliance for outward remittances</li>
          <li>Guidance on repatriation from NRO, NRE, and FCNR accounts</li>
          <li>Tailored solutions for individuals, NRIs, and corporate transactions</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

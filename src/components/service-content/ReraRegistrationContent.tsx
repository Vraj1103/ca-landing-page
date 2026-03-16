import Link from "next/link";

export default function ReraRegistrationContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      {/* Disclaimer */}
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> RERA is administered at the state level, and registration requirements, fees, and processes vary across states. The information on this page is for general awareness only and may be updated as state RERA authorities revise their rules. Please refer to your respective{" "}
        <a href="https://rera.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">state&apos;s RERA authority website</a>{" "}
        for the most current and accurate information before making any compliance decisions.
      </div>

      <h2 className="text-2xl mt-10 mb-4">What is RERA?</h2>
      <p className="leading-relaxed">
        The Real Estate (Regulation and Development) Act, 2016 — commonly known as <strong className="text-primary">RERA</strong> — was introduced to create transparency, accountability, and consumer protection in the Indian real estate market. Under RERA, both real estate projects and real estate agents must register with their respective state&apos;s RERA authority to operate legally.
      </p>
      <p className="leading-relaxed">
        Real estate agents are not allowed to promote or assist in property sales for any project that is not RERA-registered — unless they themselves are registered with the authority.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Who Should Apply for RERA Registration?</h2>
      <p className="leading-relaxed">If you are involved in real estate dealings such as buying, selling, or advertising property, you are required to register. This includes:</p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Independent real estate agents</li>
        <li>Brokerage firms</li>
        <li>Real estate consultants</li>
        <li>Property dealers or freelancers</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Why RERA Registration is a Must for Real Estate Agents</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Legal Compliance</strong> – Operating without RERA registration is illegal and may attract penalties.</li>
        <li><strong className="text-primary">Builds Client Trust</strong> – Customers are more confident dealing with officially registered agents.</li>
        <li><strong className="text-primary">Access to RERA Projects</strong> – Only registered agents can deal in RERA-approved real estate projects.</li>
        <li><strong className="text-primary">Professional Recognition</strong> – A RERA registration number serves as a badge of credibility in a competitive market.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Documents Required for RERA Agent Registration</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>PAN Card of Individual / All Partners / All Directors</li>
        <li>Aadhaar Card of Individual / All Partners / All Directors</li>
        <li>Colour photograph of Individual / All Partners / All Directors</li>
        <li>Shop Act / Gumasta Licence (for proprietary firms)</li>
        <li>MOA/AOA, LLP Agreement, and Certificate of Incorporation (for companies/LLPs)</li>
        <li>Place of business proof (Rent Agreement + utility bill, or ownership documents)</li>
        <li>Income Tax Returns of the last 3 years, or a declaration of non-filing</li>
        <li>Signed and stamped invoice copy format</li>
        <li>Letterhead and rubber stamp (self-certified copy)</li>
        <li>Self-declaration for no pending criminal or civil cases</li>
        <li>RERA Competency Certificate</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Registration Fees for Real Estate Agents Under RERA</h2>
      <p className="leading-relaxed text-sm italic mb-4">
        Note: Registration fees vary by state. The following are indicative figures; please check with your respective state RERA authority for exact fees.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border border-muted/30 rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-muted/10">
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Type of Applicant</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Estimated Fees</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-muted/20">Individual Agent</td><td className="p-3 border-b border-muted/20">₹10,000 (approx.)</td></tr>
            <tr><td className="p-3">Firm or Company</td><td className="p-3">₹1,00,000 (approx.)</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl mt-10 mb-4">Validity and Renewal of RERA Registration</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li><strong className="text-primary">Duration:</strong> RERA agent registration is typically valid for 5 years.</li>
        <li><strong className="text-primary">Renewal:</strong> Agents must renew their registration at least 60 days before expiration by submitting updated documents and paying the renewal fee.</li>
      </ul>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Need Help with RERA Registration?</h2>
        <p className="leading-relaxed text-muted mb-4">
          Whether you&apos;re a builder, promoter, or property broker, HETAL J SHAH &amp; Co. offers comprehensive and professional services for RERA Registration across India — ensuring smooth and compliant filings under the Real Estate (Regulation and Development) Act.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>RERA Agent Registration for brokers, agents, and consultants</li>
          <li>Filing assistance with required documentation</li>
          <li>Advisory on eligibility, timelines, and renewals</li>
          <li>End-to-end documentation and application filing under RERA provisions</li>
          <li>Ongoing compliance advisory and assistance for renewals</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

import Link from "next/link";

export default function ShopActRegistrationContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      {/* Disclaimer */}
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> Shop Act (Shops and Establishments) registration is governed by state-specific legislation. Rules, fees, required documents, and renewal periods vary across states. The information on this page is for general awareness only and is subject to change. Please refer to your{" "}
        <a href="https://labour.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">respective state&apos;s labour department</a>{" "}
        for the most current and accurate requirements before making any compliance decisions.
      </div>

      <h2 className="text-2xl mt-10 mb-4">What is Shop Act Registration?</h2>
      <p className="leading-relaxed">
        Shop Act Registration — commonly known as a <strong className="text-primary">Shop and Establishment Licence</strong> — is a statutory requirement for every business operating from a commercial space in India. It is governed by state-specific Shops and Establishments Acts and requires registration within 30 days of commencing operations.
      </p>
      <p className="leading-relaxed">
        The licence is essential for sole proprietors, partnerships, LLPs, and private limited companies. It ensures your business is compliant with labour laws and working condition standards set by the respective state government. It also serves as a primary proof of the legal existence of your establishment — required by banks to open a current account and by government bodies for various scheme enrolments.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Why is Shop Act Registration Important?</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Legal Identity</strong> – Essential for proving your business&apos;s legitimacy.</li>
        <li><strong className="text-primary">Bank Requirements</strong> – Required to open a business current account.</li>
        <li><strong className="text-primary">Employee Protection</strong> – Ensures your workers are treated fairly under labour laws.</li>
        <li><strong className="text-primary">Government Schemes</strong> – Helps qualify for state and central government benefits and subsidies.</li>
        <li><strong className="text-primary">Professional Credibility</strong> – Builds trust with clients, vendors, and business partners.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Who Needs to Register?</h2>
      <p className="leading-relaxed">All commercial establishments operating in India need to register, including:</p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Retail shops</li>
        <li>Service providers</li>
        <li>Freelancers or consultants with offices</li>
        <li>Startups and small businesses</li>
        <li>Proprietors, partnerships, LLPs, and companies</li>
      </ul>
      <p className="leading-relaxed">
        <strong className="text-primary">Note:</strong> Even if you have zero employees, registration is still mandatory in most states.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Documents Required</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Aadhaar Card and PAN Card of the applicant</li>
        <li>Colour photograph of the applicant</li>
        <li>Address proof of the business (e.g., electricity bill)</li>
        <li>Rent Agreement or ownership proof of the premises</li>
        <li>Photograph of the shop/office showing the signboard</li>
        <li>Mobile number and email ID</li>
        <li>Certificate of Incorporation or Partnership Deed (if applicable)</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Government Fees</h2>
      <p className="leading-relaxed text-sm italic mb-4">
        Fees vary by state and number of employees. The following are indicative figures for reference:
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border border-muted/30 rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-muted/10">
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Employee Count</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Approx. Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-muted/20">0–9 Employees</td><td className="p-3 border-b border-muted/20">Nominal one-time fee (e.g., ₹25 in Maharashtra)</td></tr>
            <tr><td className="p-3">10 or More Employees</td><td className="p-3">Varies depending on employee count and licence duration (1–3 years)</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl mt-10 mb-4">Validity and Renewal</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Businesses with <strong className="text-primary">fewer than 10 employees</strong> typically receive a lifetime licence — no renewal required in states like Maharashtra.</li>
        <li>Establishments with <strong className="text-primary">10 or more employees</strong> must renew every 1–3 years, depending on the period selected at registration and state-specific rules.</li>
      </ul>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Get Your Shop Act Registration Done — Fast &amp; Hassle-Free</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. offers end-to-end solutions for obtaining your Shop Act Licence across India — whether you&apos;re launching a startup, running a small shop, or managing a large commercial establishment.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>Step-by-step guidance on how to apply for a Shop Act Licence</li>
          <li>Expert filing of online applications with document verification</li>
          <li>Transparent breakdown of applicable government fees</li>
          <li>Assistance with licence renewals and compliance</li>
          <li>Legal advice for maintaining your Shop Act Licence</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

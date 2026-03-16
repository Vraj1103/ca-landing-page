import Link from "next/link";

export default function PrivateLimitedContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness only and may be updated as the Government of India revises the Companies Act or MCA guidelines. Please refer to the{" "}
        <a href="https://www.mca.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">official MCA portal</a>{" "}
        for the most current and accurate requirements before making any decisions.
      </div>

      <h2 className="text-2xl mt-10 mb-4">What is a Private Limited Company?</h2>
      <p className="leading-relaxed">
        A <strong className="text-primary">Private Limited Company (Pvt Ltd)</strong> is one of the most favoured business structures in India for startups and growing enterprises. It is a privately held entity formed by a group of individuals where shareholders&apos; liability is limited to the amount they have invested in shares. Unlike public companies, its shares are not available for public trading.
      </p>
      <p className="leading-relaxed">
        A Private Limited Company can be registered with a minimum of <strong className="text-primary">two members and two directors</strong>, with the upper limit for members capped at 200. At least one director must be a resident of India.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Key Points Before Registration</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Minimum Directors:</strong> At least 2 directors (maximum 15). At least one must be an Indian resident (present in India for ≥182 days in the previous calendar year).</li>
        <li><strong className="text-primary">Unique Business Name:</strong> The proposed name must not be identical or too similar to any existing company or registered trademark. Check the MCA and trademark databases before finalising.</li>
        <li><strong className="text-primary">Capital Requirement:</strong> No prescribed minimum paid-up capital. An authorised share capital of as low as ₹2 is sufficient.</li>
        <li><strong className="text-primary">Registered Office:</strong> Must have a registered office in India — a residential or rented space is acceptable. A No Objection Certificate (NOC) from the landlord is required if the property is rented.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Benefits of Private Limited Company Registration</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">No Minimum Capital Requirement</strong> – Can be incorporated with a minimal authorised share capital, even as low as ₹2, as per the Companies Act, 2013.</li>
        <li><strong className="text-primary">Independent Legal Identity</strong> – Treated as a distinct legal entity, separate from shareholders and directors, allowing it to own property and initiate legal proceedings in its own name.</li>
        <li><strong className="text-primary">Limited Liability Protection</strong> – Shareholders&apos; liability is restricted to the value of their shareholding; personal assets remain protected.</li>
        <li><strong className="text-primary">Ease of Raising Capital</strong> – Preferred by institutional investors, venture capitalists, and angel investors due to better transparency and governance.</li>
        <li><strong className="text-primary">Continuity of Business</strong> – Perpetual succession ensures the company continues uninterrupted regardless of changes in ownership or demise of directors/shareholders.</li>
        <li><strong className="text-primary">Access to Foreign Investment</strong> – Eligible for 100% Foreign Direct Investment (FDI) without prior government approval in most sectors.</li>
        <li><strong className="text-primary">Improved Business Credibility</strong> – Incorporation documents and financial statements are publicly accessible through the MCA portal, building trust with investors, customers, and banks.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Registration Process — Step by Step</h2>
      <ol className="list-decimal pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Name Reservation</strong> – File an application with the Registrar of Companies (RoC) to reserve a unique company name.</li>
        <li><strong className="text-primary">Obtain Digital Signatures (DSC)</strong> – DSCs are required for the individuals signing the Memorandum of Association (MoA) and Articles of Association (AoA).</li>
        <li><strong className="text-primary">Prepare Incorporation Documents</strong> – Draft and compile MoA, AoA, declarations, and other required proofs.</li>
        <li><strong className="text-primary">File SPICe+ Form with MCA</strong> – Submit all documents through the MCA portal for processing by the Registrar of Companies.</li>
        <li><strong className="text-primary">Receive Certificate of Incorporation</strong> – Once verified, the RoC issues the Certificate of Incorporation, confirming the company&apos;s legal existence.</li>
      </ol>

      <h2 className="text-2xl mt-10 mb-4">Documents Required</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Company name options (up to 4 names)</li>
        <li>Nature of business (Object clause)</li>
        <li>Initial capital contribution by all shareholders (minimum ₹2)</li>
        <li>Proof of registered office: utility bill (within 60 days) + ownership proof (Index II / Property Tax bill / Sale Deed / Rent Agreement) + NOC from owner</li>
        <li>For each Director / Shareholder: self-attested ID proof (Passport / Voter ID / Driving Licence), address proof (within 60 days), PAN copy, passport-size photo, email, mobile, date &amp; place of birth, educational qualification, occupation, residential status, citizenship, period of stay at present address</li>
        <li>DIN / DPIN (if already a director in any company or LLP)</li>
        <li>DSC (if available; otherwise will be applied for)</li>
        <li>Capital contribution of each shareholder</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Documents You Receive After Incorporation</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Director Identification Numbers (DINs)</li>
        <li>Digital Signature Certificates (DSCs)</li>
        <li>Certificate of Incorporation</li>
        <li>Share Certificates</li>
        <li>Memorandum and Articles of Association (MoA &amp; AoA)</li>
        <li>PAN Card and TAN</li>
        <li>PF and ESI Registration Certificates</li>
        <li>Professional Tax Enrolment Certificate (PTEC) and Registration Certificate (PTRC) — where applicable</li>
        <li>Bank Account Opening Documents</li>
      </ul>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Start Your Private Limited Company — Expert Assistance Across India</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. offers complete guidance and support for Private Limited Company registration across India — from name approval and DIN to MoA drafting and post-incorporation compliance.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>End-to-end assistance for Pvt Ltd company registration</li>
          <li>Transparent cost breakdown and process timelines</li>
          <li>Guidance on requirements, documents, and MCA filings</li>
          <li>Post-incorporation compliance support (PAN, TAN, GST, PF, ESI)</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

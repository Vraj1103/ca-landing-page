import Link from "next/link";

export default function LlpContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness only and may be updated as the Government of India revises the LLP Act or MCA guidelines. Please refer to the{" "}
        <a href="https://www.mca.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">official MCA portal</a>{" "}
        for the most current and accurate requirements before making any decisions.
      </div>

      <h2 className="text-2xl mt-10 mb-4">What is a Limited Liability Partnership (LLP)?</h2>
      <p className="leading-relaxed">
        A <strong className="text-primary">Limited Liability Partnership (LLP)</strong> is a business structure that combines the advantages of a private limited company with the simplicity of a traditional partnership firm. Introduced in India through the <strong className="text-primary">Limited Liability Partnership Act, 2008</strong>, it is especially attractive for startups, service-oriented businesses, and small to mid-sized enterprises.
      </p>
      <p className="leading-relaxed">
        An LLP can be registered with a minimum of two partners, and there is no cap on the maximum number. The roles and rights of each partner are defined in the <strong className="text-primary">LLP Agreement</strong>, the governing document for all internal operations.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Key Characteristics of an LLP</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Separate Legal Entity</strong> – An LLP is distinct from its partners. It can own property, open bank accounts, and enter into agreements under its own name.</li>
        <li><strong className="text-primary">Perpetual Succession</strong> – The departure or demise of a partner has no effect on the LLP&apos;s legal standing or operations.</li>
        <li><strong className="text-primary">Limited Liability</strong> – Each partner&apos;s liability is confined to their agreed contribution. No partner is personally responsible for business liabilities incurred by the firm or by another partner.</li>
        <li><strong className="text-primary">Agency Relationship</strong> – Each partner acts as an agent of the LLP, not of other partners, protecting individuals from liability arising from a co-partner&apos;s unauthorised actions.</li>
        <li><strong className="text-primary">Minimum 2 Partners; No Maximum</strong> – At least two designated partners (individuals) are required; no upper limit on total partners.</li>
        <li><strong className="text-primary">Conversion Possible</strong> – Existing partnerships, private limited companies, or unlisted public companies can convert into LLPs under the LLP Act, 2008.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Benefits of Incorporating an LLP</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">No Minimum Capital Requirement</strong> – Contribution may include both tangible and intangible assets, making it accessible for small startups.</li>
        <li><strong className="text-primary">Unlimited Number of Partners</strong> – Scale without a cap, unlike private limited companies (max 200 members).</li>
        <li><strong className="text-primary">Lower Incorporation Costs</strong> – Registering an LLP is relatively cheaper than incorporating a private or public limited company.</li>
        <li><strong className="text-primary">No Mandatory Audit (Below Thresholds)</strong> – Audit is not required unless contribution exceeds ₹25 lakhs or annual turnover exceeds ₹40 lakhs.</li>
        <li><strong className="text-primary">Tax Benefits</strong> – LLPs are not subject to Dividend Distribution Tax. Partner salary, interest on capital, and commission are allowable deductions under Section 40(b) of the Income Tax Act.</li>
        <li><strong className="text-primary">Operational Flexibility</strong> – Profit-sharing and decision-making are governed by the LLP Agreement, offering customised management.</li>
        <li><strong className="text-primary">Name Protection</strong> – A registered LLP&apos;s name cannot be used by another LLP or company.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">LLP Registration Process — Step by Step</h2>
      <ol className="list-decimal pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Obtain DSC</strong> – Each proposed partner must get a Digital Signature Certificate for signing electronic documents.</li>
        <li><strong className="text-primary">Apply for DIN</strong> – Partners must apply for a Director Identification Number through the MCA portal.</li>
        <li><strong className="text-primary">Name Reservation (RUN-LLP)</strong> – Submit a Request for Reservation of Name (RUN-LLP) on the MCA website.</li>
        <li><strong className="text-primary">File FiLLiP Form</strong> – Submit the incorporation form with details of partners, registered office address, and required documents.</li>
        <li><strong className="text-primary">Draft &amp; File LLP Agreement</strong> – Must be filed with the Registrar of Companies (ROC) within 30 days of incorporation.</li>
        <li><strong className="text-primary">Certificate of Incorporation</strong> – Once approved, the Certificate of Incorporation is issued and the LLP can begin operations.</li>
      </ol>

      <h2 className="text-2xl mt-10 mb-4">Documents Required</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>LLP name options (up to 4 names), phone number, and email</li>
        <li>Nature of business (Object clause)</li>
        <li>Initial capital contribution by all partners (minimum ₹10,000)</li>
        <li>Profit sharing ratio of all partners</li>
        <li>Proof of registered office: utility bill (within 60 days) + ownership proof + NOC from owner</li>
        <li>For each Designated Partner / Partner: self-attested ID proof, address proof (within 60 days), PAN copy, passport-size photo, email, mobile, date &amp; place of birth, educational qualification, occupation, residential status, citizenship, period at present address</li>
        <li>DPIN (if already a partner in any LLP)</li>
        <li>DSC (if available; otherwise will be applied for)</li>
      </ul>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Register Your LLP — Expert Assistance Across India</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. provides comprehensive support for LLP registration and ongoing compliance across India — from document collection and name reservation to LLP Agreement drafting and post-registration filings.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>Step-by-step guidance through the LLP registration process</li>
          <li>Complete documentation and government filing assistance</li>
          <li>Transparent breakdown of registration fees and charges</li>
          <li>Compliance tracking and regular status updates</li>
          <li>Personalised guidance from experienced LLP consultants</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

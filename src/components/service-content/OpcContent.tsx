import Link from "next/link";

export default function OpcContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness only and may be updated as the Government of India revises the Companies Act or MCA guidelines. Please refer to the{" "}
        <a href="https://www.mca.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">official MCA portal</a>{" "}
        for the most current and accurate requirements before making any decisions.
      </div>

      <h2 className="text-2xl mt-10 mb-4">What is a One Person Company (OPC)?</h2>
      <p className="leading-relaxed">
        A <strong className="text-primary">One Person Company (OPC)</strong> is a unique type of business entity introduced under the Companies Act, 2013, specifically designed to encourage solo entrepreneurs to set up a registered company without needing partners or multiple directors. As the name implies, an OPC is owned and managed by a single individual — acting as both the sole shareholder and the director.
      </p>
      <p className="leading-relaxed">
        OPCs combine the simplicity of a sole proprietorship with the advantages of limited liability and a separate legal identity, making it a preferred choice for modern entrepreneurs who want full control without giving up legal protection.
      </p>

      <h2 className="text-2xl mt-10 mb-4">OPC vs. Sole Proprietorship</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full border border-muted/30 rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-muted/10">
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Aspect</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">One Person Company</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Sole Proprietorship</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-muted/20">Legal Status</td><td className="p-3 border-b border-muted/20">Separate legal entity</td><td className="p-3 border-b border-muted/20">Not a separate entity</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Liability</td><td className="p-3 border-b border-muted/20">Limited to share capital</td><td className="p-3 border-b border-muted/20">Unlimited personal liability</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Tax Benefits</td><td className="p-3 border-b border-muted/20">Eligible for Startup India benefits</td><td className="p-3 border-b border-muted/20">Taxed as individual income</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Succession</td><td className="p-3 border-b border-muted/20">Nominee takes over automatically</td><td className="p-3 border-b border-muted/20">Depends on a will; can be disputed</td></tr>
            <tr><td className="p-3">Compliance</td><td className="p-3">Annual filings and statutory audit</td><td className="p-3">Minimal compliance</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl mt-10 mb-4">Why Incorporate an OPC?</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Simplified Incorporation</strong> – Straightforward process with minimal paperwork compared to a private limited company.</li>
        <li><strong className="text-primary">Limited Liability</strong> – Personal assets remain protected even if the business faces legal claims or financial losses.</li>
        <li><strong className="text-primary">Full Ownership &amp; Quick Decisions</strong> – Complete control with no need to consult partners or co-directors.</li>
        <li><strong className="text-primary">Stronger Credibility</strong> – Greater recognition than unregistered entities; builds trust with customers, vendors, and financial institutions.</li>
        <li><strong className="text-primary">Access to Funding</strong> – Can raise funds through equity or debt, issue shares, and secure loans from banks.</li>
        <li><strong className="text-primary">Tax Benefits</strong> – Eligible for the same tax deductions, exemptions, and reliefs available to private limited companies.</li>
        <li><strong className="text-primary">Business Continuity via Nominee</strong> – The owner must nominate a successor at incorporation. In the event of death or incapacity, the nominee takes over, ensuring seamless continuity.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">OPC Registration Process — Step by Step</h2>
      <ol className="list-decimal pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Obtain Digital Signature Certificate (DSC)</strong> – Required for the director to sign digital documents during registration.</li>
        <li><strong className="text-primary">Apply for Director Identification Number (DIN)</strong> – Applied through the SPICe+ form on the MCA portal.</li>
        <li><strong className="text-primary">Name Reservation (RUN)</strong> – Choose a unique name and apply through the Reserve Unique Name (RUN) service on the MCA portal.</li>
        <li><strong className="text-primary">Draft Incorporation Documents</strong> – Prepare MoA, AoA, and the nominee&apos;s consent form.</li>
        <li><strong className="text-primary">File SPICe+ Form</strong> – Submit the SPICe+ (INC-32) form along with required attachments to the MCA.</li>
        <li><strong className="text-primary">Receive Certificate of Incorporation</strong> – The MCA issues the Certificate of Incorporation along with PAN and TAN details.</li>
      </ol>

      <h2 className="text-2xl mt-10 mb-4">Documents Required</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Company name options (up to 4 names), phone number, and email</li>
        <li>Nature of business (Object clause)</li>
        <li>Initial capital contribution by the shareholder (minimum ₹1)</li>
        <li>Proof of registered office: utility bill (within 60 days) + ownership proof + NOC from owner</li>
        <li>For Director / Shareholder and Nominee: self-attested ID proof, address proof (within 60 days), PAN copy, passport-size photo, email, mobile, date &amp; place of birth, educational qualification, occupation, residential status, citizenship, period at present address</li>
        <li>DPIN (if already a director in any company or LLP)</li>
        <li>DSC (if available; otherwise will be applied for)</li>
        <li>Capital contribution amount</li>
      </ul>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Register Your OPC — Expert Assistance Across India</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. offers end-to-end OPC registration services across India — from name approval and DSC to MoA drafting and post-incorporation compliance.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>End-to-end support for OPC registration</li>
          <li>Step-by-step assistance to register on the MCA portal</li>
          <li>Documentation and compliance for smooth incorporation</li>
          <li>Transparent consultation on legal requirements and government charges</li>
          <li>Post-incorporation compliance and ongoing advisory support</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

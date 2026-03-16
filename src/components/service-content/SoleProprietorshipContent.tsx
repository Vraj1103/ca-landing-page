import Link from "next/link";

export default function SoleProprietorshipContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness only. Licence requirements, tax thresholds, and applicable regulations may vary by state and are subject to revision. Please refer to the relevant government portals for the most current and accurate requirements before making any decisions.
      </div>

      <h2 className="text-2xl mt-10 mb-4">What is a Sole Proprietorship?</h2>
      <p className="leading-relaxed">
        A <strong className="text-primary">sole proprietorship</strong> is the simplest and most affordable business structure to establish in India. It is a type of business entity that is owned, managed, and controlled by a single individual. Legally, a sole proprietorship does not have a distinct identity from its owner — meaning the proprietor is personally liable for any debts or obligations incurred by the business.
      </p>
      <p className="leading-relaxed">
        Unlike entities such as Private Limited Companies or LLPs, a sole proprietorship does not require formal registration with the Ministry of Corporate Affairs (MCA). However, depending on the nature of the business, certain licences may be required to operate legally.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Key Features at a Glance</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full border border-muted/30 rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-muted/10">
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Feature</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-muted/20">Ownership</td><td className="p-3 border-b border-muted/20">Single individual</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Legal Status</td><td className="p-3 border-b border-muted/20">Not a separate legal entity</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Liability</td><td className="p-3 border-b border-muted/20">Unlimited personal liability</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Compliance Requirements</td><td className="p-3 border-b border-muted/20">Minimal</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Taxation</td><td className="p-3 border-b border-muted/20">Filed under the individual&apos;s PAN</td></tr>
            <tr><td className="p-3">Registration</td><td className="p-3">Not mandatory (but licences may be required)</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl mt-10 mb-4">Who Should Choose a Sole Proprietorship?</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Freelancers and consultants</li>
        <li>Independent service providers (e.g., designers, accountants, tutors)</li>
        <li>Retail shop owners</li>
        <li>Food vendors and small cafés</li>
        <li>Online sellers and drop shippers</li>
        <li>Local service businesses (salons, coaching centres, etc.)</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Advantages</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Easy to Start and Operate</strong> – No formal MCA incorporation required. Basic licences like GST, Udyam (MSME), or Shop &amp; Establishment are usually sufficient to get started quickly.</li>
        <li><strong className="text-primary">Full Control</strong> – The proprietor has complete autonomy over all decisions — no need to consult partners, shareholders, or directors.</li>
        <li><strong className="text-primary">Minimal Compliance</strong> – No obligation to file ROC returns, conduct mandatory audits (unless turnover thresholds are exceeded), or hold board meetings.</li>
        <li><strong className="text-primary">Tax Benefits</strong> – Business income is treated as the proprietor&apos;s personal income and taxed at individual slab rates, allowing access to all individual tax deductions and exemptions.</li>
        <li><strong className="text-primary">Cost-Effective</strong> – No incorporation fees or annual compliance costs typical of a company structure.</li>
        <li><strong className="text-primary">Minimal Capital Requirements</strong> – Can be started with very little or no capital, ideal for bootstrapped businesses and first-time entrepreneurs.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Disadvantages</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Unlimited Liability</strong> – Any debt or financial obligation of the business is also the personal liability of the owner. Personal assets (home, savings, car) may be used to settle business debts.</li>
        <li><strong className="text-primary">No Separate Legal Entity</strong> – The business cannot own property, enter contracts, or sue/be sued in its own name.</li>
        <li><strong className="text-primary">Limited Funding Options</strong> – Banks may be hesitant to extend large loans; equity funding from investors is not possible.</li>
        <li><strong className="text-primary">Limited Growth Potential</strong> – Difficult to expand significantly due to limited funding, lack of brand credibility, and inability to formally bring on partners.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">How to Set Up a Sole Proprietorship — Step by Step</h2>
      <ol className="list-decimal pl-6 space-y-3 my-4">
        <li>
          <strong className="text-primary">Choose a Business Name</strong><br />
          No formal process is required to register a business name under proprietorship. Choose something unique and relevant to your business.
        </li>
        <li>
          <strong className="text-primary">Apply for Required Registrations</strong><br />
          Depending on your business type, apply for one or more of:
          <ul className="list-disc pl-6 mt-2 space-y-1 text-muted">
            <li><strong className="text-primary">GST Registration</strong> – Mandatory if annual turnover crosses ₹40 lakh (goods) or ₹20 lakh (services), or if you sell online or deal in interstate sales.</li>
            <li><strong className="text-primary">Udyam Registration (MSME)</strong> – Helps avail MSME benefits, subsidies, and easier loans.</li>
            <li><strong className="text-primary">Shop &amp; Establishment Licence</strong> – Required for physical stores/offices in most states.</li>
            <li><strong className="text-primary">Professional Tax Registration</strong> – Required in applicable states (e.g., Maharashtra, Karnataka).</li>
            <li><strong className="text-primary">Trade Licence</strong> – If applicable to your business type.</li>
          </ul>
        </li>
        <li>
          <strong className="text-primary">Open a Current Account</strong><br />
          Visit a bank with: PAN, Aadhaar, any two proofs of business existence (GST certificate, Udyam certificate, Shop licence), and passport-size photo.
        </li>
      </ol>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Get Your Sole Proprietorship Set Up — Expert Assistance Across India</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. helps sole proprietors across India navigate the registration and compliance requirements — from GST and Udyam to Shop Act and Professional Tax — so you can focus on running your business.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>Guidance on which licences and registrations your business needs</li>
          <li>GST, Udyam (MSME), and Shop Act registration assistance</li>
          <li>PAN, bank account documentation support</li>
          <li>Tax filing and compliance advisory for proprietors</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

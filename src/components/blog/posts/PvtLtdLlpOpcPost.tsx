import BlogDisclaimer from "../BlogDisclaimer";
import Link from "next/link";

export default function PvtLtdLlpOpcPost() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <BlogDisclaimer />

      <p className="leading-relaxed">
        Choosing the right business structure affects compliance, liability, fundraising, and taxation. Private Limited (Pvt Ltd), Limited Liability Partnership (LLP), and One Person Company (OPC) are three popular options for startups and small businesses in India. Here is a simplified comparison.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Private Limited Company</h2>
      <p className="leading-relaxed">
        <strong className="text-primary">Best for:</strong> Businesses planning to raise external funding, hire employees, or scale. Minimum two directors and two shareholders. Separate legal entity; liability is limited to the amount unpaid on shares. Compliance includes annual filings (MGT-7, AOC-4), board meetings, and statutory audit above certain thresholds. Preferred by investors and banks.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Limited Liability Partnership (LLP)</h2>
      <p className="leading-relaxed">
        <strong className="text-primary">Best for:</strong> Professional services, consulting, or small partnerships wanting limited liability without the full company compliance. No minimum capital; partners’ liability is limited. Fewer compliance requirements than a private company in many cases. Profits are taxed in the hands of the LLP; no dividend distribution tax. Audit may be required based on turnover and contribution.
      </p>

      <h2 className="text-2xl mt-10 mb-4">One Person Company (OPC)</h2>
      <p className="leading-relaxed">
        <strong className="text-primary">Best for:</strong> Solo entrepreneurs who want a corporate structure with limited liability and a separate legal identity. Only one member; one director is mandatory, and a nominee is required. Compliance is relatively simpler than a full private company. OPCs have to convert into a private company once turnover or paid-up capital exceeds prescribed limits. Suitable for small-scale businesses with no immediate plan for multiple shareholders.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Quick Comparison</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Liability:</strong> All three offer limited liability.</li>
        <li><strong className="text-primary">Fundraising:</strong> Pvt Ltd is most investor-friendly; LLP and OPC are less so.</li>
        <li><strong className="text-primary">Compliance:</strong> Pvt Ltd has the most; LLP and OPC are relatively lighter.</li>
        <li><strong className="text-primary">Ownership:</strong> OPC for single owner; LLP for partners; Pvt Ltd for 2+ shareholders.</li>
      </ul>
      <p className="leading-relaxed mt-4">
        Your choice should depend on your business size, growth plans, need for funding, and willingness to meet compliance. A chartered accountant can help you decide and handle incorporation and ongoing compliances.
      </p>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <p className="text-muted mb-4">We assist with company and LLP incorporation, ROC compliance, and ongoing secretarial support.</p>
        <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors">Get in touch</Link>
      </div>
    </article>
  );
}

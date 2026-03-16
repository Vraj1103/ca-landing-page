import Link from "next/link";

export default function TrademarkRegistrationContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      {/* Disclaimer */}
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness purposes only. Trademark registration fees, timelines, and processes are subject to revision by the Trade Marks Registry and the Government of India. Please refer to the{" "}
        <a href="https://ipindia.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">official IP India website</a>{" "}
        for the most current and accurate information before making any compliance or filing decisions.
      </div>

      <h2 className="text-2xl mt-10 mb-4">What is Trademark Registration?</h2>
      <p className="leading-relaxed">
        In today&apos;s competitive marketplace, a strong brand identity is more important than ever. A <strong className="text-primary">trademark</strong> is a unique sign, symbol, logo, name, or combination thereof that identifies and distinguishes the goods or services of one business from those of others.
      </p>
      <p className="leading-relaxed">
        Once you register a trademark with the Government of India, it becomes your intellectual property — protecting the goodwill and trust you&apos;ve built with your customers. Trademark registration grants you the exclusive right to use the mark and the power to take legal action against anyone who copies or misuses it.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Types of Trademarks You Can Register</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Brand or Product Name</strong> – Protect the name of your product (e.g., a brand of consumer goods).</li>
        <li><strong className="text-primary">Company or Business Name</strong> – Register your business name to establish legally protected brand recognition.</li>
        <li><strong className="text-primary">Personal Name or Surname</strong> – If an individual&apos;s name holds commercial value, it can be trademarked.</li>
        <li><strong className="text-primary">Abbreviations or Initials</strong> – Shortened versions or acronyms of your business name can be protected.</li>
        <li><strong className="text-primary">Logo or Graphic Symbol</strong> – Protect your visual identity, which customers often recognise more quickly than a name.</li>
        <li><strong className="text-primary">Taglines or Slogans</strong> – Distinctive slogans that express your brand&apos;s core message can be trademarked.</li>
        <li><strong className="text-primary">Colour Combinations</strong> – Specific colours or combinations that uniquely identify your brand.</li>
        <li><strong className="text-primary">Sound Marks</strong> – Unique sounds or musical tunes that represent your brand and are distinct and recognisable.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Why is Trademark Registration Essential?</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Establishes a Distinct Brand Identity</strong> – Creates a recognisable and unique presence in the market.</li>
        <li><strong className="text-primary">Builds Customer Trust and Brand Loyalty</strong> – A registered trademark reinforces the authenticity and credibility of your business.</li>
        <li><strong className="text-primary">Provides Legal Protection</strong> – Grants exclusive rights to take action against infringement or misuse.</li>
        <li><strong className="text-primary">Creates a Valuable Business Asset</strong> – A trademark is an intangible asset that grows in value and can be licensed, franchised, or sold.</li>
        <li><strong className="text-primary">Prevents Unauthorised Use</strong> – Stops others from copying or imitating your brand name, logo, or tagline.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Documents Required for Trademark Registration</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Identity proof of the applicant (PAN, Aadhaar, etc.)</li>
        <li>Address proof</li>
        <li>Logo or image of the trademark (if applicable)</li>
        <li>Form TM-48 (Power of Attorney, if filed through a representative)</li>
        <li>Certificate of Incorporation (for companies)</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Trademark Registration Fees in India</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full border border-muted/30 rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-muted/10">
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Applicant Type</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Fee (per class)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-muted/20">Individual / Startup / Small Enterprise</td><td className="p-3 border-b border-muted/20">₹4,500</td></tr>
            <tr><td className="p-3">Others (Companies, Firms, etc.)</td><td className="p-3">₹9,000</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-muted italic">
        If the company / LLP / partnership qualifies as a Startup or Small Enterprise, the concessional fee of ₹4,500 per class applies. Fees are subject to revision by the government.
      </p>

      <h2 className="text-2xl mt-10 mb-4">How Long Does Trademark Registration Take?</h2>
      <p className="leading-relaxed">
        On average, the full trademark registration process takes <strong className="text-primary">6 months to 2+ years</strong>, depending on whether any objections or opposition are raised. However, you can legitimately start using the <strong className="text-primary">™ symbol</strong> as soon as you file your application.
      </p>
      <p className="leading-relaxed">
        To check the availability of a trademark before applying, use the official{" "}
        <a href="https://tmrsearch.ipindia.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">Trademark Public Search tool</a>{" "}
        provided by the Indian government at tmrsearch.ipindia.gov.in.
      </p>

      <h2 className="text-2xl mt-10 mb-4">™ vs ® — Trademark Symbols</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full border border-muted/30 rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-muted/10">
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Symbol</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Meaning</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">When to Use</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-muted/20 font-semibold">™</td><td className="p-3 border-b border-muted/20">Trademark claimed but not yet registered</td><td className="p-3 border-b border-muted/20">After filing the application</td></tr>
            <tr><td className="p-3 font-semibold">®</td><td className="p-3">Registered trademark</td><td className="p-3">After the registration certificate is issued</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl mt-10 mb-4">Validity and Renewal</h2>
      <p className="leading-relaxed">
        A registered trademark in India is valid for <strong className="text-primary">10 years</strong> from the date of filing the application. It can be renewed indefinitely for further periods of 10 years each by paying the prescribed government renewal fee before expiration.
      </p>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Need Help with Trademark Registration?</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. offers end-to-end trademark registration services across India — from availability searches to application filing and renewal management.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>Detailed trademark search to check name/logo availability</li>
          <li>TM registration and brand registration tailored to your business</li>
          <li>Hassle-free online filing with end-to-end support</li>
          <li>Assistance from experienced trademark consultants</li>
          <li>Guidance on trademark fees, timelines, and renewal</li>
          <li>Support for logo registration, copyright, and related IP matters</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

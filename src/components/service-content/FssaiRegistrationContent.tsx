import Link from "next/link";

export default function FssaiRegistrationContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      {/* Disclaimer */}
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness purposes only and may be updated or revised by FSSAI or the Government of India from time to time. Government fees and eligibility thresholds are subject to change. Please refer to the{" "}
        <a href="https://www.fssai.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">official FSSAI website</a>{" "}
        for the most current and accurate requirements before making any compliance decisions.
      </div>

      <h2 className="text-2xl mt-10 mb-4">What is FSSAI Registration?</h2>
      <p className="leading-relaxed">
        Starting a food business in India — whether it&apos;s a home-based kitchen, a restaurant, or a large food manufacturing unit — requires proper licensing. The <strong className="text-primary">Food Safety and Standards Authority of India (FSSAI)</strong> is the governing body that oversees food safety and hygiene standards across the country.
      </p>
      <p className="leading-relaxed">
        Anyone engaged in food manufacturing, processing, packaging, storage, distribution, or sale must obtain an FSSAI certificate or licence to operate lawfully. Upon successful registration, businesses are issued a <strong className="text-primary">14-digit FSSAI licence number</strong>, which must be displayed on all food packaging.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Who is Required to Apply for FSSAI Licence?</h2>
      <p className="leading-relaxed">
        Every Food Business Operator (FBO) must obtain one of the three types of FSSAI licences or registrations, depending on the scale of operations and geographical reach. A food licence is required if your business involves any of the following:
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Procuring raw food materials</li>
        <li>Manufacturing or processing food items</li>
        <li>Distributing or transporting food</li>
        <li>Packaging food products</li>
        <li>Storing consumables</li>
        <li>Selling food directly to consumers or through third parties</li>
        <li>Importing or exporting food products</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Types of FSSAI Food Licences</h2>

      <h3 className="text-xl mt-6 mb-3">1. FSSAI Basic Registration</h3>
      <p className="leading-relaxed">
        The most fundamental level of registration, suitable for small-scale food businesses.
      </p>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <li><strong className="text-primary">Who needs it:</strong> Startups or new FBOs; businesses with an annual turnover of up to ₹12 lakhs; small vendors, home kitchens, temporary stall owners, and local food sellers</li>
        <li><strong className="text-primary">Government fee:</strong> ₹100 per year</li>
        <li><strong className="text-primary">Validity:</strong> 1 to 5 years (renewable)</li>
      </ul>

      <h3 className="text-xl mt-6 mb-3">2. FSSAI State Licence</h3>
      <p className="leading-relaxed">
        Intended for medium-sized food businesses that have expanded beyond a local level.
      </p>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <li><strong className="text-primary">Who needs it:</strong> Businesses with annual turnover above ₹12 lakhs but not exceeding ₹20 crores; businesses with turnover less than ₹12 lakhs but operating in more than one state; medium-sized manufacturers, storage units, transporters, and distributors</li>
        <li><strong className="text-primary">Government fee:</strong> Varies by state (typically ₹2,000 to ₹5,000 per year)</li>
        <li><strong className="text-primary">Validity:</strong> 1 to 5 years (renewable)</li>
      </ul>

      <h3 className="text-xl mt-6 mb-3">3. FSSAI Central Licence</h3>
      <p className="leading-relaxed">
        The highest tier of FSSAI licensing, mandatory for large-scale, multi-state, or international food businesses.
      </p>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <li><strong className="text-primary">Who needs it:</strong> Businesses with annual turnover exceeding ₹20 crores; businesses operating in multiple states; importers and exporters of food products; large food manufacturers and corporate food chains</li>
        <li><strong className="text-primary">Government fee:</strong> As notified by FSSAI (refer to official portal for latest fees)</li>
        <li><strong className="text-primary">Validity:</strong> 1 to 5 years (renewable)</li>
      </ul>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Need Help with FSSAI Licence Registration?</h2>
        <p className="leading-relaxed text-muted mb-4">
          Whether you&apos;re a startup, home entrepreneur, or established food business, HETAL J SHAH &amp; Co. offers seamless and professional support for FSSAI registration, renewal, and compliance across India.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>Guidance on the right type of FSSAI licence for your business</li>
          <li>Preparation and verification of FSSAI licence documents</li>
          <li>End-to-end assistance with new applications and renewals</li>
          <li>Advisory on food safety standards and labelling requirements</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

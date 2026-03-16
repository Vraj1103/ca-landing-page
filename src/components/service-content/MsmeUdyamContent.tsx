import Link from "next/link";

export default function MsmeUdyamContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      {/* Disclaimer */}
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness purposes only and may be updated or revised by the government from time to time. We recommend referring to the{" "}
        <a href="https://udyamregistration.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">official Udyam Registration portal</a>{" "}
        for the most current and accurate information before making any compliance decisions.
      </div>

      <h2 className="text-2xl mt-10 mb-4">Introduction</h2>
      <p className="leading-relaxed">
        The Micro, Small, and Medium Enterprises (MSME) sector has become a crucial and thriving part of India&apos;s economic landscape. MSMEs not only play a crucial role in providing large employment opportunities but also help in the industrialization of rural and backward areas, thereby reducing regional imbalances and ensuring a more equitable distribution of national income and wealth. They act as ancillary units to large industries and contribute significantly to the socio-economic development of the country.
      </p>
      <p className="leading-relaxed">
        However, MSMEs often lack the technological and financial resources that large corporations enjoy. To support the growth and competitiveness of the sector, the Government of India offers a range of schemes, incentives, and subsidies.
      </p>

      <h2 className="text-2xl mt-10 mb-4">What is Udyam Registration?</h2>
      <p className="leading-relaxed">
        Udyam Registration, which replaced Udyog Aadhaar, is a streamlined process introduced by the Ministry of Micro, Small &amp; Medium Enterprises on July 1, 2020, for registering MSMEs, enabling them to access government benefits. Businesses registered under this system are referred to as <strong className="text-primary">Udyam</strong>, and they receive a permanent registration number and a recognition certificate upon successful registration.
      </p>
      <p className="leading-relaxed">
        The shift from Udyog Aadhaar to Udyam Registration has made the process simpler, faster, and completely online, removing paperwork and manual verification steps. Udyam Registration is essential for accessing government benefits under schemes such as:
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Credit Guarantee Scheme</li>
        <li>Public Procurement Policy</li>
        <li>Priority Lending</li>
        <li>Protection against delayed payments</li>
        <li>Exemptions and advantages in government tenders</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Benefits of Udyam Registration</h2>
      <p className="leading-relaxed">Registering your business under Udyam comes with several benefits:</p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Simplified access to government programs, including subsidies and incentives</li>
        <li>Eligibility for collateral-free loans through different credit guarantee schemes</li>
        <li>Concession in electricity bills and patent registration fees</li>
        <li>Protection against delayed payments from buyers</li>
        <li>Easier access to government tenders with special quotas for MSMEs</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Who Can Register for MSME / Udyam Registration?</h2>
      <p className="leading-relaxed">Any business that falls under the MSME category, including:</p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Sole proprietorships</li>
        <li>Partnerships</li>
        <li>Private limited companies</li>
        <li>Limited liability partnerships (LLPs)</li>
        <li>Self-help groups</li>
        <li>Co-operative societies</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">MSME Classification (Effective April 1, 2025)</h2>
      <p className="leading-relaxed">
        In line with the updated notification from the Ministry of MSME, the classification thresholds have been substantially raised to foster business expansion:
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border border-muted/30 rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-muted/10">
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Type of Enterprise</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Investment in Plant &amp; Machinery / Equipment</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Annual Turnover</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-muted/20">Micro</td><td className="p-3 border-b border-muted/20">Up to ₹2.5 crore</td><td className="p-3 border-b border-muted/20">Up to ₹10 crore</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Small</td><td className="p-3 border-b border-muted/20">Up to ₹25 crore</td><td className="p-3 border-b border-muted/20">Up to ₹100 crore</td></tr>
            <tr><td className="p-3">Medium</td><td className="p-3">Up to ₹125 crore</td><td className="p-3">Up to ₹500 crore</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl mt-10 mb-4">Documents Required for Udyam Registration</h2>
      <p className="leading-relaxed">To complete the registration, you&apos;ll need:</p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Aadhaar number of the business owner</li>
        <li>PAN of the enterprise</li>
        <li>GST number (if applicable)</li>
        <li>Business details: name, type, address, and bank account</li>
        <li>NIC code (National Industry Classification)</li>
        <li>Number of employees and investment details</li>
      </ul>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">
          Simplify Your Udyam Registration with Expert Guidance
        </h2>
        <p className="leading-relaxed text-muted mb-3">
          Thinking of registering your business under the MSME scheme? Or upgrading from your old Udyog Aadhaar to the new Udyam Registration? Whether you&apos;re a startup founder, local entrepreneur, or small business owner, HETAL J SHAH & Co. is here to help you navigate the process without errors or delays.
        </p>
        <p className="leading-relaxed text-muted mb-4">
          <strong className="text-primary">Our team helps you:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>Navigate the updated MSME registration guidelines</li>
          <li>Register online quickly with minimal documentation</li>
          <li>Avoid common mistakes that delay approval</li>
          <li>Stay compliant and access government benefits faster</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            Get in touch
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            View all services
          </Link>
        </div>
      </div>
    </article>
  );
}

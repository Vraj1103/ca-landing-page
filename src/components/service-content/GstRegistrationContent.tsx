import Link from "next/link";

export default function GstRegistrationContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      {/* Disclaimer */}
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness purposes only and may be updated or revised by the government from time to time. We recommend referring to the{" "}
        <a href="https://www.gst.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">official GST portal</a>{" "}
        for the most current and accurate information before making any compliance decisions.
      </div>

      <h2 className="text-2xl mt-10 mb-4">Introduction</h2>
      <p className="leading-relaxed">
        Goods and Services Tax (GST) is a comprehensive indirect tax system implemented to streamline taxation in India. Introduced in 2017, GST aims to replace multiple state and central taxes, ensuring a uniform and transparent tax structure across the country. It eliminates the cascading effect of taxation, reducing the overall tax burden on consumers and businesses. GST registration is a legal requirement for businesses meeting specific criteria, and it offers various benefits such as input tax credit, legal recognition, and seamless inter-state trade. Moreover, it enhances tax compliance through a digital framework, simplifying the process for taxpayers.
      </p>

      <h2 className="text-2xl mt-10 mb-4">What is GST Registration?</h2>
      <p className="leading-relaxed">
        GST Registration is the statutory process by which a business or a person carrying on a trade or profession is assigned a unique 15-digit Goods and Services Tax Identification Number (GSTIN) by the tax authorities. Under the Indian indirect tax regime, this registration is mandatory for entities whose aggregate turnover exceeds the prescribed threshold limits or who fall under specific categories defined by the law.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Who is required to take GST registration?</h2>
      <p className="leading-relaxed">
        The CGST Act, 2017 classifies mandatory registration into two primary categories: Turnover-based (Section 22) and Compulsory Registration (Section 24).
      </p>

      <h3 className="text-xl mt-6 mb-3">I. Threshold-Based Registration (Section 22)</h3>
      <p className="leading-relaxed">
        Registration is mandatory if the &ldquo;Aggregate Turnover&rdquo; in a financial year exceeds the specified limits. These limits depend on the nature of the supply (Goods vs. Services) and the state of operation.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border border-muted/30 rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-muted/10">
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Category of Supply</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Normal Category States (e.g., Maharashtra, Karnataka, Delhi)</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Special Category States (e.g., Manipur, Mizoram, Nagaland)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-muted/20">Exclusive Supply of Goods</td><td className="p-3 border-b border-muted/20">₹40 Lakhs</td><td className="p-3 border-b border-muted/20">₹20 Lakhs</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Supply of Services</td><td className="p-3 border-b border-muted/20">₹20 Lakhs</td><td className="p-3 border-b border-muted/20">₹10 Lakhs</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Mixed Supplies (Goods &amp; Services)</td><td className="p-3 border-b border-muted/20">₹20 Lakhs</td><td className="p-3 border-b border-muted/20">₹10 Lakhs</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-muted/90">
        Note: &ldquo;Aggregate Turnover&rdquo; is calculated on a PAN-India basis and includes taxable supplies, exempt supplies, exports, and interstate supplies, but excludes inward supplies taxable under RCM.
      </p>

      <h3 className="text-xl mt-6 mb-3">II. Compulsory Registration Irrespective of Turnover (Section 24)</h3>
      <p className="leading-relaxed">
        In certain specific scenarios, the turnover thresholds do not apply, and registration is mandatory from the very first transaction:
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Interstate Taxable Suppliers</li>
        <li>Casual Taxable Persons (CTP)</li>
        <li>Non-Resident Taxable Persons (NRTP)</li>
        <li>E-commerce Participants</li>
        <li>Reverse Charge Liability</li>
        <li>Input Service Distributors (ISD)</li>
        <li>Agents/Brokers</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Types of GST Registration</h2>
      <p className="leading-relaxed">
        Under the GST regime, registration is not a &ldquo;one-size-fits-all&rdquo; process. The law provides for various types of registrations based on the nature of the business, turnover, and residency status. As per Sections 22 to 27 of the CGST Act, 2017, the following are the primary categories:
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border border-muted/30 rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-muted/10">
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Registration Type</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Target Entity</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Key Feature</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-muted/20">Normal Taxpayer</td><td className="p-3 border-b border-muted/20">Businesses exceeding threshold limits.</td><td className="p-3 border-b border-muted/20">Full ITC benefits; monthly/quarterly returns.</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Composition Taxpayer</td><td className="p-3 border-b border-muted/20">Small taxpayers (Turnover &lt; ₹1.5 Cr).</td><td className="p-3 border-b border-muted/20">Lower tax rate; limited compliance; no ITC.</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Casual Taxable Person</td><td className="p-3 border-b border-muted/20">Temporary businesses in a new state.</td><td className="p-3 border-b border-muted/20">Valid for 90 days; advance tax deposit required.</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Non-Resident Taxable Person</td><td className="p-3 border-b border-muted/20">Foreign entities without fixed place in India.</td><td className="p-3 border-b border-muted/20">Temporary; mandatory for occasional supplies.</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Input Service Distributor (ISD)</td><td className="p-3 border-b border-muted/20">Head offices of businesses.</td><td className="p-3 border-b border-muted/20">For distributing ITC to various branches.</td></tr>
            <tr><td className="p-3 border-b border-muted/20">TDS/TCS Registration</td><td className="p-3 border-b border-muted/20">Govt. bodies / E-commerce operators.</td><td className="p-3 border-b border-muted/20">Specifically for deducting/collecting tax at source.</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl mt-10 mb-4">Documents Required for GST Registration</h2>
      <h3 className="text-xl mt-6 mb-2">For Proprietor / Individual</h3>
      <ul className="list-disc pl-6 space-y-1 my-2">
        <li>PAN and Aadhaar</li>
        <li>Business address proof</li>
        <li>Bank statement or cancelled cheque</li>
        <li>Passport size photograph</li>
      </ul>
      <h3 className="text-xl mt-6 mb-2">For LLP / Company</h3>
      <ul className="list-disc pl-6 space-y-1 my-2">
        <li>PAN of entity</li>
        <li>Certificate of incorporation</li>
        <li>MOA / AOA / LLP Agreement</li>
        <li>Authorised signatory details</li>
        <li>Registered office address proof</li>
      </ul>

      <h3 className="text-xl mt-6 mb-2">Post-Registration Requirement (Rule 10A)</h3>
      <p className="leading-relaxed">
        Under Rule 10A, taxpayers are no longer required to provide bank details during the initial application. However, you must update your bank account details on the GST portal within 30 days of the grant of registration or before filing the first GSTR-1, whichever is earlier.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Avoiding Common GST Registration Errors (2026 – Compliance Perspective)</h2>
      <p className="leading-relaxed">
        Securing a Goods and Services Tax Identification Number (GSTIN) is often the first major hurdle for a new business. While the process is digital, the high rejection rate of applications—often exceeding 30% in certain jurisdictions—highlights the strict scrutiny by the tax department. Identifying these &ldquo;red flags&rdquo; early can save you from the delays of a Form GST REG-03 (Notice for Seeking Clarification). Below are the most frequent errors that lead to application rejections or automatic suspensions in 2026.
      </p>
      <h3 className="text-xl mt-6 mb-2">PAN and Legal Name Mismatch</h3>
      <p className="leading-relaxed">
        The Legal Name of Business entered in the application must match the name on the Permanent Account Number (PAN) card exactly, including special characters and spacing. For proprietorships, the legal name must be the name of the individual, not the trade name. For companies/LLPs, discrepancies between the PAN and the Certificate of Incorporation (COI) will trigger an immediate system rejection.
      </p>
      <h3 className="text-xl mt-6 mb-2">Deficiencies in Address Proof</h3>
      <p className="leading-relaxed">
        The &ldquo;Principal Place of Business&rdquo; is the most scrutinised field. Common errors include: outdated utility bills (older than two months), vague address details, non-commercial zoning without proper permissions, and incomplete NOCs. For rented premises, the NOC must be signed by the owner whose name appears on the utility bill.
      </p>
      <h3 className="text-xl mt-6 mb-2">Rule 10A: The &ldquo;30-Day&rdquo; Bank Account Trap</h3>
      <p className="leading-relaxed">
        Under Rule 10A, you must update your bank details via a non-core amendment within 30 days of registration or before filing GSTR-1, whichever is earlier. Failure results in automatic system-based suspension.
      </p>
      <h3 className="text-xl mt-6 mb-2">Technical and Procedural Lapses</h3>
      <div className="overflow-x-auto my-4">
        <table className="w-full border border-muted/30 rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-muted/10">
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Error Type</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Impact</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Prevention</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-muted/20">Blurred Documents</td><td className="p-3 border-b border-muted/20">REG-03 Notice</td><td className="p-3 border-b border-muted/20">Ensure all scans are high-resolution and within size limit.</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Aadhaar Auth Failure</td><td className="p-3 border-b border-muted/20">Physical Verification</td><td className="p-3 border-b border-muted/20">Link primary signatory&apos;s mobile to Aadhaar for e-KYC.</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Wrong HSN/SAC</td><td className="p-3 border-b border-muted/20">Audit Risk</td><td className="p-3 border-b border-muted/20">Select top 5 HSN/SAC codes for core business activity.</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Ignoring REG-03</td><td className="p-3 border-b border-muted/20">Application Rejection</td><td className="p-3 border-b border-muted/20">Replies must be filed within 7 working days.</td></tr>
          </tbody>
        </table>
      </div>
      <h3 className="text-xl mt-6 mb-2">Shared and Virtual Office Risks (2026 Update)</h3>
      <p className="leading-relaxed">
        With the rise of virtual offices, GST officers have increased Physical Verifications under Rule 25. Lack of a physical name board at the entrance or no representative present during a surprise visit may lead to the premises being marked as &ldquo;non-existent,&rdquo; resulting in rejection and potential blacklisting of the address.
      </p>

      <h2 className="text-2xl mt-10 mb-4">GSTIN</h2>
      <p className="leading-relaxed">
        GSTIN is a 15-digit unique identification number allotted to a registered taxpayer for a specific State or Union Territory under GST. It must be quoted on tax invoices and returns to establish the authenticity of the supplier and ensure proper tax compliance.
      </p>

      <h2 className="text-2xl mt-10 mb-4">GST Registration Certificate</h2>
      <p className="leading-relaxed">
        The GST Registration Certificate is issued upon successful registration and contains key particulars such as legal name, trade name, GSTIN, business locations, authorised signatories, and jurisdiction details. It is mandatory to display the certificate prominently at the principal place of business.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Penalty for Failure to Obtain GST Registration</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full border border-muted/30 rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-muted/10">
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Particulars</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Penalty Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border-b border-muted/20">Failure to obtain GST registration</td>
              <td className="p-3 border-b border-muted/20">Higher of: ₹10,000 or 100% of the tax due. Where tax is payable but registration was not obtained, the penalty shall be equal to the tax amount evaded, subject to a minimum of ₹10,000.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl mt-10 mb-4">Advantages of GST Registration</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Legal Recognition and Enhanced Credibility</strong> – Official recognition and improved trust among customers, suppliers, and financial institutions.</li>
        <li><strong className="text-primary">Eligibility to Claim Input Tax Credit (ITC)</strong> – Deduct tax paid on purchases from tax payable on sales, reducing overall tax burden.</li>
        <li><strong className="text-primary">Facilitates Seamless Inter-State Trade</strong> – Unified tax structure for smooth inter-state trade without multiple tax barriers.</li>
        <li><strong className="text-primary">Simplified and Transparent Taxation System</strong> – Single tax replacing VAT, excise, service tax, and entry tax.</li>
        <li><strong className="text-primary">Increased Business Opportunities</strong> – GST compliance is often a prerequisite for government tenders and large corporate contracts.</li>
        <li><strong className="text-primary">Simplified Return Filing and Compliance</strong> – Online filing reduces paperwork and ensures timely compliance.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Frequently Asked Questions (FAQs) on GST Registration</h2>
      <p className="leading-relaxed">
        For detailed FAQs and updates, please refer to our blog or get in touch with our team for personalised guidance.
      </p>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Need Help with GST Registration?</h2>
        <p className="leading-relaxed text-muted mb-4">
          Whether you&apos;re a startup, entrepreneur, or established enterprise, HETAL J SHAH & Co. offers seamless and professional services for new GST registration and ongoing compliance support in Ahmedabad and across India. Our experienced team ensures your GST application is filed accurately and promptly, helping you stay legally compliant and ready for growth.
        </p>
        <p className="leading-relaxed text-muted mb-4">
          <strong className="text-primary">Our GST Registration Services Include:</strong> New GST registration for businesses of all sizes and sectors; online GST registration with document support and filing assistance; step-by-step guidance to apply for GST number; transparent consultation on fees and processing timelines; help with gathering and submitting required documents; and full support for GST certificate access and post-registration updates.
        </p>
        <p className="leading-relaxed text-muted">
          As a trusted chartered accountancy firm in Ahmedabad, we offer accurate filing, legal clarity, and responsive service. Let us help you complete your GST registration and secure the tax credentials your business needs to operate efficiently and grow confidently.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
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

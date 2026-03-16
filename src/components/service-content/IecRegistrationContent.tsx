import Link from "next/link";

export default function IecRegistrationContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      {/* Disclaimer */}
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness purposes only. IEC regulations, annual update requirements, and Foreign Trade Policy schemes are subject to revision by DGFT. Please refer to the{" "}
        <a href="https://www.dgft.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">official DGFT portal</a>{" "}
        for the most current and accurate requirements before making any compliance decisions.
      </div>

      <h2 className="text-2xl mt-10 mb-4">What is IEC (Import Export Code)?</h2>
      <p className="leading-relaxed">
        The <strong className="text-primary">Importer Exporter Code (IEC)</strong> is a 10-digit unique identification number assigned by the Directorate General of Foreign Trade (DGFT), under the Ministry of Commerce, Government of India. It acts as a crucial business identification number and is mandatory for any export from India or import into India, unless specifically exempted.
      </p>
      <p className="leading-relaxed">
        No individual or business is allowed to carry out import or export activities without an IEC, except:
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Service exporters who are not availing benefits under the Foreign Trade Policy</li>
        <li>Individuals importing or exporting goods for personal use, not related to trade, manufacture, or agriculture</li>
      </ul>
      <p className="leading-relaxed">
        Since the rollout of the GST regime, the IEC is aligned with the <strong className="text-primary">Permanent Account Number (PAN)</strong> of the applicant. However, a separate IEC is still issued by DGFT upon successful application.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Benefits of IEC Registration</h2>
      <ul className="list-disc pl-6 space-y-3 my-4">
        <li>
          <strong className="text-primary">Permanent Validity – No Annual Renewal Required</strong><br />
          Once granted, the IEC remains valid for the lifetime of the entity. There is no recurring renewal process, making it a one-time registration. (Note: Annual update of IEC details is required — see below.)
        </li>
        <li>
          <strong className="text-primary">Eligibility for Government Schemes &amp; Incentives</strong><br />
          Registered IEC holders can avail subsidies, exemptions, and benefits under India&apos;s Foreign Trade Policy (FTP), including duty drawback schemes, EPCG scheme, and export promotion incentives.
        </li>
        <li>
          <strong className="text-primary">Minimal Compliance Requirements</strong><br />
          Unlike other business registrations, there are no monthly or annual returns to file with DGFT — making IEC extremely simple to maintain, especially for small businesses and individual exporters.
        </li>
        <li>
          <strong className="text-primary">Quick Online Application</strong><br />
          DGFT has simplified the IEC registration process through a fully digital platform. Applicants can register using their PAN and Aadhaar, upload necessary documents, and typically receive the IEC within 1–2 business days.
        </li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Validity &amp; Annual Update of IEC</h2>
      <p className="leading-relaxed">
        The IEC is granted with permanent validity and does not require renewal. However, as per current DGFT guidelines, it is compulsory to <strong className="text-primary">update IEC details once every year</strong> (between April and June) to ensure the code remains active.
      </p>
      <p className="leading-relaxed">
        Failure to update the IEC annually may lead to its deactivation by DGFT, which could delay or disrupt import and export activities. There is <strong className="text-primary">no government fee</strong> for the annual update when done within the prescribed window.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Key Points to Remember</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li><strong className="text-primary">One IEC per PAN:</strong> An individual or entity can obtain only one IEC against a single PAN. Multiple IECs are not permitted for the same PAN.</li>
        <li><strong className="text-primary">Amendment is possible:</strong> You can modify details if needed via the DGFT portal.</li>
        <li><strong className="text-primary">No return filing:</strong> IEC holders do not need to submit monthly or annual returns with DGFT.</li>
      </ul>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Need Help with IEC Registration?</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. provides complete support for IEC registration and annual updates across India — ensuring your application is submitted accurately and in compliance with DGFT guidelines.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>Complete support for IEC registration online</li>
          <li>Expert guidance on the Import Export Code registration process</li>
          <li>Fast, error-free application and approval from DGFT</li>
          <li>Assistance with annual IEC updates to prevent deactivation</li>
          <li>Advisory on Foreign Trade Policy benefits and export incentives</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

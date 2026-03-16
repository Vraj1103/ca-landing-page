import BlogDisclaimer from "../BlogDisclaimer";
import Link from "next/link";

export default function FssaiLicenceWhenNeededPost() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <BlogDisclaimer />

      <p className="leading-relaxed">
        If you manufacture, sell, or distribute food in India, you generally need a licence or registration under the Food Safety and Standards Authority of India (FSSAI). The type—Basic Registration, State Licence, or Central Licence—depends on your turnover and scale. Business registration consultants in Gujarat and across India often help with FSSAI applications and compliance.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Basic Registration (FSSAI Registration)</h2>
      <p className="leading-relaxed">
        For <strong className="text-primary">small food businesses</strong> with annual turnover up to ₹12 lakh, Basic Registration is required. It applies to small manufacturers, petty retailers, and small-scale operators. The registration is done online on the FSSAI portal and is valid for 1 to 5 years. No licence fee for Basic Registration in many cases.
      </p>

      <h2 className="text-2xl mt-10 mb-4">State Licence</h2>
      <p className="leading-relaxed">
        When turnover is <strong className="text-primary">above ₹12 lakh and up to ₹20 crore</strong> (and the unit operates within one state), a State FSSAI Licence is required. The application is made to the state food safety department. Fees and documents vary by state; in Gujarat, the process is online through the FSSAI portal. Validity is 1 to 5 years.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Central Licence</h2>
      <p className="leading-relaxed">
        For <strong className="text-primary">large operators</strong>—turnover above ₹20 crore, or import/export, or operations in more than one state—a Central FSSAI Licence is required. The application is submitted to the central FSSAI office. Central licence is mandatory for e-commerce food operators, importers, and certain manufacturers.
      </p>

      <h2 className="text-2xl mt-10 mb-4">How to Apply</h2>
      <p className="leading-relaxed">
        Visit the FSSAI FoSCoS portal, register, and apply under the appropriate category. You will need identity proof, address proof, photos of the premises, and details of food products. Renew before expiry to avoid penalties. For business registration in Ahmedabad, Gujarat or anywhere in India, a CA or compliance consultant can help with the application and renewal.
      </p>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <p className="text-muted mb-4">FSSAI registration and licence support in Ahmedabad, Gujarat and pan-India. We assist with application, renewal and compliance.</p>
        <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors">Get in touch</Link>
      </div>
    </article>
  );
}

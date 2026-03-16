import BlogDisclaimer from "../BlogDisclaimer";
import Link from "next/link";

export default function WhenIsGstRegistrationMandatoryPost() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <BlogDisclaimer />

      <p className="leading-relaxed">
        GST registration is mandatory for businesses that cross the prescribed turnover limit or fall under specific categories. Registering on time avoids penalties and allows you to collect GST from customers and claim input tax credit (ITC) on purchases.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Turnover-Based Registration</h2>
      <p className="leading-relaxed">
        For <strong className="text-primary">supply of goods</strong>, registration is required if aggregate turnover in a financial year exceeds <strong className="text-primary">₹40 lakh</strong> (₹20 lakh in special category states). For <strong className="text-primary">supply of services</strong>, the limit is <strong className="text-primary">₹20 lakh</strong> (₹10 lakh in special category states). Turnover includes taxable, exempt, and export supplies on a pan-India basis.
      </p>

      <h2 className="text-2xl mt-10 mb-4">When Registration Is Mandatory Regardless of Turnover</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Any business making <strong className="text-primary">inter-state taxable supplies</strong> (except a few exceptions).</li>
        <li>Persons required to pay tax under <strong className="text-primary">reverse charge</strong>.</li>
        <li><strong className="text-primary">E-commerce operators</strong> and certain sellers selling through e-commerce.</li>
        <li>Agents supplying on behalf of taxable persons; <strong className="text-primary">input service distributors</strong>.</li>
        <li>Persons supplying <strong className="text-primary">online information and database access</strong> or retrieval services to non-taxable persons in India.</li>
        <li>Casual taxable persons and non-resident taxable persons.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Voluntary Registration</h2>
      <p className="leading-relaxed">
        Even if your turnover is below the limit, you can register voluntarily to claim ITC on purchases and to do business with other registered persons who prefer GST-compliant vendors. Once registered, you must comply with return filing and other GST provisions.
      </p>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <p className="text-muted mb-4">Need help with GST registration or understanding your GST obligations? We offer end-to-end GST registration and compliance support.</p>
        <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors">Get in touch</Link>
      </div>
    </article>
  );
}

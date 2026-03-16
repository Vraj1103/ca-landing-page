import BlogDisclaimer from "../BlogDisclaimer";
import Link from "next/link";

export default function Form15Ca15CbWhenPost() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <BlogDisclaimer />

      <p className="leading-relaxed">
        Sending money abroad from India—whether for education, medical expenses, investments, or business—often requires tax compliance. Form 15CA is a declaration to the Income Tax Department, and Form 15CB is a certificate from a chartered accountant. Here is when you need them.
      </p>

      <h2 className="text-2xl mt-10 mb-4">When Is Form 15CA Required?</h2>
      <p className="leading-relaxed">
        Form 15CA is a <strong className="text-primary">self-declaration</strong> filed online by the person making the remittance. It is required when the payment is chargeable to tax in India and the remitter has to declare the nature of payment and whether tax has been deducted. In many cases, the bank will not process the remittance until Form 15CA (and 15CB where applicable) is submitted.
      </p>

      <h2 className="text-2xl mt-10 mb-4">When Is Form 15CB (CA Certificate) Required?</h2>
      <p className="leading-relaxed">
        Form 15CB is a certificate from a <strong className="text-primary">chartered accountant</strong> certifying the nature of the payment, the applicable tax rate, whether tax has been deducted, and whether any double tax treaty applies. It is typically required when the single remittance or aggregate remittances to the same payee in a financial year exceed <strong className="text-primary">₹5 lakh</strong> and the payment is taxable in India. The CA verifies the remittance against the Income Tax Act and the relevant DTAA, if any.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Common Remittance Types</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Payment for imports, professional services, royalty, interest, dividends—often need 15CA and 15CB.</li>
        <li>LRS (e.g. education, medical, travel)—banks may ask for 15CA; 15CB may be needed above the threshold.</li>
        <li>Gifts, maintenance of close relatives—depending on amount and purpose, 15CA/15CB may apply.</li>
      </ul>
      <p className="leading-relaxed mt-4">
        Filing 15CA and obtaining 15CB in time avoids delays at the bank and ensures compliance with tax laws.
      </p>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <p className="text-muted mb-4">We issue Form 15CB for foreign remittances and assist with 15CA filing and RBI/FEMA compliance.</p>
        <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors">Get in touch</Link>
      </div>
    </article>
  );
}

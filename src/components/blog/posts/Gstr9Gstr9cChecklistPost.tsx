import BlogDisclaimer from "../BlogDisclaimer";
import Link from "next/link";

export default function Gstr9Gstr9cChecklistPost() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <BlogDisclaimer />

      <p className="leading-relaxed">
        Every GST-registered person in India must file an annual return in Form GSTR-9. Those crossing the turnover threshold must also file a reconciliation statement in GSTR-9C, certified by a CA. Missing the due date or filing incorrect data can lead to notices and interest. A quick checklist helps you prepare on time. GST audit and annual return services in Gujarat and across India are commonly offered by CA firms.
      </p>

      <h2 className="text-2xl mt-10 mb-4">GSTR-9: Annual Return</h2>
      <p className="leading-relaxed">
        <strong className="text-primary">GSTR-9</strong> is a summary of all outward supplies, inward supplies, tax paid, and input tax credit for the full financial year. It must be filed by <strong className="text-primary">31 December</strong> of the year following the financial year. Even if you had no business, a nil return may be required. The form is lengthy and pulls data from GSTR-1 and GSTR-3B; reconciliation before filing reduces errors. Businesses in Gujarat and all states file on the common GST portal.
      </p>

      <h2 className="text-2xl mt-10 mb-4">GSTR-9C: Reconciliation Statement</h2>
      <p className="leading-relaxed">
        Taxpayers with <strong className="text-primary">aggregate turnover above ₹5 crore</strong> in a financial year must file <strong className="text-primary">GSTR-9C</strong>, a reconciliation between the annual return (GSTR-9) and the audited financial statements, along with a certification by a chartered accountant or cost accountant. GSTR-9C is due by 31 December. It highlights mismatches and ensures that the GST returns align with the books. GST audit and GSTR-9C preparation in Ahmedabad, Gujarat and India are standard services for CAs.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Common Errors to Avoid</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Mismatch between GSTR-1 turnover and GSTR-9 outward supplies.</li>
        <li>ITC claimed in GSTR-9 not matching GSTR-2B or books.</li>
        <li>Wrong classification of supplies (taxable vs exempt vs non-GST).</li>
        <li>Missing or incorrect GSTR-9C when turnover exceeds ₹5 crore.</li>
      </ul>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <p className="text-muted mb-4">GSTR-9 and GSTR-9C filing and GST audit in Ahmedabad, Gujarat and India. We reconcile and file on time.</p>
        <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors">Get in touch</Link>
      </div>
    </article>
  );
}

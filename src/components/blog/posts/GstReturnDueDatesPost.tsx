import BlogDisclaimer from "../BlogDisclaimer";
import Link from "next/link";

export default function GstReturnDueDatesPost() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <BlogDisclaimer />

      <p className="leading-relaxed">
        Filing GST returns on time is mandatory for registered businesses. Missing due dates can lead to late fees, interest, and in some cases cancellation of registration. Here is a quick reference to key due dates and the most common mistakes taxpayers make.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Key GST Return Due Dates (FY 2025-26)</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">GSTR-1</strong> (outward supplies): 11th of the following month (monthly) or quarterly if under QRMP scheme.</li>
        <li><strong className="text-primary">GSTR-3B</strong> (summary return): 20th of the following month (monthly), or 22nd/24th for QRMP taxpayers.</li>
        <li><strong className="text-primary">GSTR-9</strong> (annual return): 31 December of the year following the financial year.</li>
        <li><strong className="text-primary">GSTR-9C</strong> (reconciliation statement): 31 December, for taxpayers with turnover above the prescribed limit.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Common Mistakes to Avoid</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Mismatch between GSTR-1 and GSTR-3B:</strong> Ensure outward supplies in GSTR-1 match the turnover and tax declared in GSTR-3B.</li>
        <li><strong className="text-primary">ITC claimed without supplier compliance:</strong> Only claim ITC when the supplier has filed their returns and the invoice appears in GSTR-2B.</li>
        <li><strong className="text-primary">Wrong tax rate or HSN:</strong> Incorrect HSN codes or tax rates can lead to notices and reversal of ITC for recipients.</li>
        <li><strong className="text-primary">Missing or late GSTR-1:</strong> Delayed GSTR-1 affects your buyers’ ITC and can attract late fees.</li>
      </ul>

      <p className="leading-relaxed mt-6">
        Setting calendar reminders and reconciling books before the due date can help avoid last-minute errors. For complex turnovers or multiple registrations, consider engaging a qualified professional for GST compliance.
      </p>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <p className="text-muted mb-4">Need help with GST return filing or reconciliation? We can assist with monthly, quarterly, and annual returns.</p>
        <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors">Get in touch</Link>
      </div>
    </article>
  );
}

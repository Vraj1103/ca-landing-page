import BlogDisclaimer from "../BlogDisclaimer";
import Link from "next/link";

export default function RocAnnualFilingPost() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <BlogDisclaimer />

      <p className="leading-relaxed">
        Every private limited company and one person company in India must file an annual return and financial statements with the Registrar of Companies (ROC). Missing the due dates can lead to additional fees and disqualification of directors. Here is a concise overview of the key forms and deadlines.
      </p>

      <h2 className="text-2xl mt-10 mb-4">MGT-7 / MGT-7A (Annual Return)</h2>
      <p className="leading-relaxed">
        The <strong className="text-primary">annual return</strong> contains details of the company’s management, shareholding, and compliance. It must be filed within <strong className="text-primary">60 days</strong> from the date of the annual general meeting (AGM). Small companies file MGT-7A; others file MGT-7. The form is certified by a company secretary, or by a director in case of OPC or small companies.
      </p>

      <h2 className="text-2xl mt-10 mb-4">AOC-4 / AOC-4 XBRL (Financial Statements)</h2>
      <p className="leading-relaxed">
        The <strong className="text-primary">financial statements</strong> (balance sheet, profit and loss, cash flow, etc.) and the board and auditor reports are filed in AOC-4 (or AOC-4 XBRL for companies required to file in XBRL format). The due date is <strong className="text-primary">30 days</strong> from the AGM.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Other Compliances</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">ADT-1:</strong> Appointment of auditor—within 15 days of AGM.</li>
        <li><strong className="text-primary">DIR-3 KYC:</strong> Annual KYC for every director—by 30 September each year.</li>
        <li>AGM must be held within 6 months of the end of the financial year (for companies that need to hold AGM).</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Late Fees</h2>
      <p className="leading-relaxed">
        Filing after the due date attracts additional fees that increase with the delay. Keeping a compliance calendar and engaging a professional for secretarial work helps avoid last-minute rush and penalties.
      </p>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <p className="text-muted mb-4">We handle ROC annual filings, MGT-7, AOC-4, ADT-1, and director KYC for companies and LLPs.</p>
        <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors">Get in touch</Link>
      </div>
    </article>
  );
}

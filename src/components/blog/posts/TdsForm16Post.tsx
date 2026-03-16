import BlogDisclaimer from "../BlogDisclaimer";
import Link from "next/link";

export default function TdsForm16Post() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <BlogDisclaimer />

      <p className="leading-relaxed">
        If you are a salaried employee, your employer deducts tax at source (TDS) from your salary and deposits it with the government. Form 16 is the certificate that summarises this deduction and helps you file your income tax return correctly.
      </p>

      <h2 className="text-2xl mt-10 mb-4">What is Form 16?</h2>
      <p className="leading-relaxed">
        Form 16 is a certificate issued by the employer under Section 203 of the Income Tax Act. It has two parts: <strong className="text-primary">Part A</strong> (details of the employer, employee, TAN, PAN, and quarterly TDS summary) and <strong className="text-primary">Part B</strong> (salary break-up, deductions under Chapter VI-A, taxable income, and tax payable or refund). You need both parts to file your ITR accurately.
      </p>

      <h2 className="text-2xl mt-10 mb-4">When Do You Get Form 16?</h2>
      <p className="leading-relaxed">
        Employers must issue Form 16 by <strong className="text-primary">15 June</strong> of the following financial year. If you have changed jobs during the year, you may receive Form 16 from each employer. You must aggregate the salary and TDS from all employers while filing your return.
      </p>

      <h2 className="text-2xl mt-10 mb-4">How to Use Form 16 for ITR Filing</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Use the gross salary, allowances, and deductions from Part B to fill your ITR form.</li>
        <li>Match the TDS amount in Form 26AS with the TDS shown in Form 16; any mismatch can lead to refund delays or notices.</li>
        <li>If you have income from other sources (e.g. interest, rent), add them and compute total tax; the TDS on salary will be set off against your total tax liability.</li>
      </ul>

      <p className="leading-relaxed mt-6">
        Keeping Form 16 safe and reconciling it with Form 26AS before filing helps avoid errors and ensures you claim the correct refund or pay the correct balance tax.
      </p>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <p className="text-muted mb-4">Need help with ITR filing or TDS reconciliation? We assist salaried individuals and businesses with tax returns and planning.</p>
        <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors">Get in touch</Link>
      </div>
    </article>
  );
}

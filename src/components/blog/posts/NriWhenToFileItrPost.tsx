import BlogDisclaimer from "../BlogDisclaimer";
import Link from "next/link";

export default function NriWhenToFileItrPost() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <BlogDisclaimer />

      <p className="leading-relaxed">
        Non-Resident Indians (NRIs) are often unsure whether they need to file an income tax return in India. The answer depends on your residential status and the type and amount of income you earn or receive in India.
      </p>

      <h2 className="text-2xl mt-10 mb-4">When Must an NRI File an ITR in India?</h2>
      <p className="leading-relaxed">An NRI is generally required to file an ITR in India if:</p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Indian income exceeds the basic exemption limit</strong> in the relevant financial year.</li>
        <li>They have <strong className="text-primary">capital gains</strong> from sale of property, shares, or mutual funds in India, even if TDS has been deducted.</li>
        <li>They earn <strong className="text-primary">rental income</strong> from property in India.</li>
        <li>They have <strong className="text-primary">interest income</strong> from NRO accounts, FDs, or other Indian sources above the threshold.</li>
        <li>They want to <strong className="text-primary">claim a refund</strong> of TDS deducted in India.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">What to Report</h2>
      <p className="leading-relaxed">
        NRIs must report all income that is received, accrues, or arises in India. Income that accrues or arises outside India is generally not taxable in India for an NRI. Double Taxation Avoidance Agreements (DTAA) with other countries may also affect how foreign income is treated. It is important to determine your residential status correctly (resident, RNOR, or NRI) before filing.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Due Date and Forms</h2>
      <p className="leading-relaxed">
        The due date for NRI individuals (without audit) is typically 31 July of the assessment year. NRIs usually file ITR-2 or ITR-3 depending on their sources of income. Filing on time helps avoid penalties and ensures quicker refunds.
      </p>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <p className="text-muted mb-4">We specialise in NRI taxation, ITR filing, and 15CA/15CB certifications. Get in touch for personalised advice.</p>
        <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors">Get in touch</Link>
      </div>
    </article>
  );
}

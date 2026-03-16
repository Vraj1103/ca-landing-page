import BlogDisclaimer from "../BlogDisclaimer";
import Link from "next/link";

export default function HowToRespondIncomeTaxNoticePost() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <BlogDisclaimer />

      <p className="leading-relaxed">
        Receiving an income tax notice can be stressful, but most notices are routine—for mismatch in TDS, incomplete return, or scrutiny. Understanding the type of notice and responding within the given time is key to avoiding penalties and further action.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Common Types of Notices</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Section 143(1):</strong> Intimation after processing of return (e.g. tax demand or refund). No response needed unless you disagree; then you can file a response or revised return within the time allowed.</li>
        <li><strong className="text-primary">Section 143(2):</strong> Scrutiny notice—the department wants to verify your return. You must produce books, documents, and explanations as asked.</li>
        <li><strong className="text-primary">Section 139(9):</strong> Defective return—your return has defects (e.g. wrong form, incomplete info). You need to rectify and resubmit within the specified period.</li>
        <li><strong className="text-primary">Section 148:</strong> Notice for reopening of assessment—the department believes income has escaped assessment. You must file the return if not filed, or respond with objections within the deadline.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Steps to Take When You Receive a Notice</h2>
      <ol className="list-decimal pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Check the section and deadline</strong>—note the date by which you must respond.</li>
        <li><strong className="text-primary">Log in to the e-filing portal</strong>—notices are often available in your account; download and read the full text.</li>
        <li><strong className="text-primary">Gather documents</strong>—returns, Form 16, bank statements, and any proof relevant to the query.</li>
        <li><strong className="text-primary">Draft a clear response</strong>—address each point raised; attach supporting documents. If the demand is wrong, explain with computations.</li>
        <li><strong className="text-primary">Submit before the due date</strong>—use the portal or your tax advisor to file the response. Keep a copy for your records.</li>
      </ol>

      <p className="leading-relaxed mt-6">
        Ignoring a notice can lead to an ex parte order, interest, and penalties. Taking it seriously and responding on time—or through a qualified professional—usually resolves the matter.
      </p>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <p className="text-muted mb-4">We help individuals and businesses respond to income tax notices, file revised returns, and represent before the department.</p>
        <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors">Get in touch</Link>
      </div>
    </article>
  );
}

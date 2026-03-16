import BlogDisclaimer from "../BlogDisclaimer";
import Link from "next/link";

export default function NriPropertySaleTdsPost() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <BlogDisclaimer />

      <p className="leading-relaxed">
        Selling property in India as a Non-Resident Indian (NRI) involves tax deducted at source (TDS) by the buyer and capital gains tax. Understanding the rates and how to obtain a lower or nil TDS certificate can help you avoid excess withholding and get the correct refund. NRI tax consultants in Gujarat and across India often assist with property sale compliance and Form 13.
      </p>

      <h2 className="text-2xl mt-10 mb-4">TDS on NRI Property Sale in India</h2>
      <p className="leading-relaxed">
        For <strong className="text-primary">long-term capital gains</strong> (property held for more than 2 years), the buyer must deduct TDS at <strong className="text-primary">12.5%</strong> (plus surcharge and cess) on the full sale consideration under Section 195. For short-term gains, TDS is at the applicable income tax slab rates. The deduction can be a significant portion of the sale proceeds, so many NRIs apply for a lower or nil TDS certificate under Section 197.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Lower TDS Certificate (Form 13)</h2>
      <p className="leading-relaxed">
        If your actual tax liability is lower than the default TDS (e.g. because you are reinvesting under Section 54 or 54F, or have capital loss), you can apply to the Income Tax Department for a certificate authorising the buyer to deduct a lower rate or nil. The application is filed online on the TRACES portal (Form 13). A chartered accountant can help prepare the computation and represent you before the Assessing Officer. NRI CA services in Ahmedabad, Gujarat and pan-India often include Form 13 filing and follow-up.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Capital Gains and ITR</h2>
      <p className="leading-relaxed">
        Even after obtaining a lower TDS certificate, you must report the capital gains in your income tax return and pay any balance tax or claim a refund. NRIs filing ITR in India should keep sale deed, purchase documents, and proof of reinvestment (if claiming Section 54/54F) for assessment.
      </p>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <p className="text-muted mb-4">We help NRIs with property sale tax, Form 13 (lower TDS certificate), and ITR filing from Ahmedabad, Gujarat—serving NRI clients across India and abroad.</p>
        <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors">Get in touch</Link>
      </div>
    </article>
  );
}

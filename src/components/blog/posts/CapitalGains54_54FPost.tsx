import BlogDisclaimer from "../BlogDisclaimer";
import Link from "next/link";

export default function CapitalGains54_54FPost() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <BlogDisclaimer />

      <p className="leading-relaxed">
        Selling a property can lead to a large capital gains tax liability. Sections 54 and 54F offer exemptions if you reinvest the sale proceeds in another residential property within the specified time. Understanding the conditions and deadlines helps you plan the sale and purchase and avoid losing the benefit.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Section 54 (Sale of Residential House)</h2>
      <p className="leading-relaxed">
        If you sell a <strong className="text-primary">residential house</strong> (held for more than 2 years) and buy or construct another residential house, the capital gains can be exempt to the extent of the amount invested. The new property must be purchased within 2 years of the sale or constructed within 3 years. You can also invest in a capital gains account scheme (CGAS) before the due date of filing the return if the purchase or construction is not yet complete.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Section 54F (Sale of Any Long-Term Asset Other Than Residential House)</h2>
      <p className="leading-relaxed">
        If you sell any long-term capital asset <strong className="text-primary">other than a residential house</strong> (e.g. land, commercial property, jewellery) and invest the full net consideration in one residential house in India, the capital gains can be exempt. The same time limits (purchase within 2 years, construction within 3 years) and CGAS option apply. If only part of the consideration is invested, the exemption is proportionately reduced.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Important Conditions</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Only one residential house can be purchased or constructed for full exemption under Section 54F (subject to certain limits).</li>
        <li>If you sell the new house within 3 years, the exemption is withdrawn and the capital gains are taxable in the year of sale.</li>
        <li>Keep proof of investment—sale deed, construction receipts, and bank statements—for assessment.</li>
      </ul>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <p className="text-muted mb-4">We help with capital gains planning, Section 54/54F compliance, and ITR filing for property transactions.</p>
        <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors">Get in touch</Link>
      </div>
    </article>
  );
}

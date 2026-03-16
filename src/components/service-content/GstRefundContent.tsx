import Link from "next/link";

export default function GstRefundContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness only. GST refund rules, timelines, and documentation requirements are subject to revision by CBIC. Please refer to the{" "}
        <a href="https://www.gst.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">official GST portal</a>{" "}
        for the most current information before initiating any refund application.
      </div>

      <h2 className="text-2xl mt-10 mb-4">What is a GST Refund?</h2>
      <p className="leading-relaxed">
        A <strong className="text-primary">GST refund application</strong> is filed when a taxpayer seeks reimbursement of excess tax paid under the Goods and Services Tax (GST) system. Refunds may arise due to excess input tax credit (ITC), tax paid on exports, inverted duty structures, or transaction cancellations. Applications must be submitted online through the GST portal, following prescribed rules and timelines.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Types of GST Refund</h2>

      <h3 className="text-lg mt-6 mb-2">1. Refund of Excess Balance in Electronic Cash Ledger</h3>
      <p className="leading-relaxed">Where a taxpayer has paid more tax than required, they may apply for a refund of the excess balance using Form GST RFD-01 on the GST portal.</p>

      <h3 className="text-lg mt-6 mb-2">2. Refund of ITC on Export of Goods or Services (Without Payment of Tax)</h3>
      <p className="leading-relaxed">Businesses that export under a Letter of Undertaking (LUT) without paying IGST can claim a refund of unutilised Input Tax Credit, ensuring exports remain tax-free.</p>

      <h3 className="text-lg mt-6 mb-2">3. Refund of IGST on Export of Goods or Services (With Payment of Tax)</h3>
      <p className="leading-relaxed">If a taxpayer exports after paying IGST, the refund is typically processed automatically through the GST portal and ICEGATE customs system.</p>

      <h3 className="text-lg mt-6 mb-2">4. Refund on Inverted Duty Structure</h3>
      <p className="leading-relaxed">An inverted duty structure arises when the GST rate on inputs is higher than the rate on outward supplies, leading to accumulation of ITC. Businesses may apply for a refund of the unutilised ITC.</p>

      <h3 className="text-lg mt-6 mb-2">5. Refund of Tax Paid on Supplies to SEZ Units/Developers</h3>
      <p className="leading-relaxed">Supplies made to Special Economic Zones (SEZs) are eligible for GST refunds — whether supplied under LUT or with payment of tax.</p>

      <h3 className="text-lg mt-6 mb-2">6. Refund of Tax on Deemed Exports</h3>
      <p className="leading-relaxed">Supplies to Export Oriented Units (EOUs) or other deemed export categories qualify for refund of GST paid.</p>

      <h3 className="text-lg mt-6 mb-2">7. Refund of Excess Tax Paid Due to Mistake</h3>
      <p className="leading-relaxed">Accidental overpayment due to incorrect calculations, clerical errors, or system issues can be claimed as a refund.</p>

      <h3 className="text-lg mt-6 mb-2">8. Refund in Case of Cancellation of Registration</h3>
      <p className="leading-relaxed">If a registered taxpayer has an excess balance in their electronic cash ledger at the time of cancellation of GST registration, they can claim a refund of the remaining amount.</p>

      <h3 className="text-lg mt-6 mb-2">9. GST Refund on Flat Cancellation</h3>
      <p className="leading-relaxed">
        If a buyer cancels a booked flat after paying GST, they may be eligible for a refund depending on whether the builder has already deposited the GST with the government. The builder can issue a credit note and adjust GST liability, typically by September of the following financial year or before filing the annual return, whichever is earlier.
      </p>

      <h2 className="text-2xl mt-10 mb-4">How to Apply for a GST Refund</h2>
      <ol className="list-decimal pl-6 space-y-1 my-4">
        <li>Log in to the GST portal (<a href="https://www.gst.gov.in" className="text-accent hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">www.gst.gov.in</a>).</li>
        <li>Navigate to <strong>Services &rarr; Refunds &rarr; Application for Refund</strong>.</li>
        <li>Select the relevant type of refund.</li>
        <li>Fill out Form GST RFD-01 and upload supporting documents.</li>
        <li>Submit the form and track the refund status on the GST portal.</li>
      </ol>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Need Help with GST Refund Filing?</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. provides end-to-end GST refund assistance — minimising delays, ensuring accurate documentation, and representing clients in case of refund rejections or departmental notices.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>Input tax credit refunds under inverted duty structure</li>
          <li>Export GST refund under LUT or with payment of tax</li>
          <li>Advisory on all eligible GST refund categories</li>
          <li>Expert representation in case of refund rejection or notices</li>
          <li>Monitoring timelines and ensuring accurate documentation</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

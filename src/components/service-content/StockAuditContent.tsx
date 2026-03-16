import Link from "next/link";

export default function StockAuditContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness only. Stock audit requirements may vary based on industry, lender mandates, and applicable regulations. Please consult a qualified professional for guidance specific to your situation.
      </div>

      <h2 className="text-2xl mt-10 mb-4">What is a Stock Audit?</h2>
      <p className="leading-relaxed">
        A <strong className="text-primary">stock audit</strong> is a systematic examination of a company&apos;s inventory to ensure that the actual physical stock matches the records maintained in books. This process helps businesses track discrepancies, reduce shrinkage due to theft or damage, and optimise inventory management systems.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Purpose of a Stock Audit</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Physical Stock Verification</strong> – Cross-checking actual inventory in warehouses, factories, or retail outlets against recorded stock levels in the books of accounts.</li>
        <li><strong className="text-primary">Identification of Discrepancies</strong> – Uncovering pilferage, misplacement of goods, or clerical/system errors in inventory entries before they lead to significant financial losses.</li>
        <li><strong className="text-primary">Improvement of Inventory Control</strong> – Highlighting inefficiencies in internal inventory management to reduce wastage, avoid overstocking or understocking, and optimise storage costs.</li>
        <li><strong className="text-primary">Enhanced Financial Reporting Accuracy</strong> – Ensuring inventory is correctly valued and presented in financial statements — critical for investors, auditors, and regulators.</li>
        <li><strong className="text-primary">Support in Business Decision-Making</strong> – Real-time visibility into stock levels for better demand forecasting, procurement planning, and pricing strategies.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Why Stock Audit is Crucial for Your Business</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Fraud &amp; Theft Prevention</strong> – Regular physical stock verification detects and prevents unauthorised movement or misreporting of goods, acting as a strong internal control measure.</li>
        <li><strong className="text-primary">Accuracy in Financial Statements</strong> – Ensures the inventory on your balance sheet reflects true and fair stock valuations, supporting better tax planning and loan applications.</li>
        <li><strong className="text-primary">Enhanced Inventory Management</strong> – Reveals supply chain issues and process inefficiencies, helping create a leaner, more responsive inventory model.</li>
        <li><strong className="text-primary">Detection of Damaged, Expired, or Obsolete Stock</strong> – Identifies unsellable items for timely disposal, markdown, or write-off, preventing long-term financial drains.</li>
        <li><strong className="text-primary">Regulatory Compliance</strong> – Ensures accurate records and documented inventory valuations, minimising risk of penalties, tax scrutiny, and legal liabilities.</li>
      </ul>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Need Help with Stock Audit?</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. delivers professional and unbiased stock audit services across India — bringing transparency, accuracy, and efficiency to your inventory operations.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>Comprehensive stock audit and reconciliation of physical inventory</li>
          <li>Detailed inventory management audit for process efficiency</li>
          <li>Evaluation of inventory control systems and movement tracking</li>
          <li>Periodic and surprise audits as part of internal audit mandates</li>
          <li>Professional reporting by certified Chartered Accountants</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

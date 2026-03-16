import BlogDisclaimer from "../BlogDisclaimer";
import Link from "next/link";

export default function StatutoryAuditPrivateCompaniesPost() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <BlogDisclaimer />

      <p className="leading-relaxed">
        Private companies in India are required to get their financial statements audited by a practising chartered accountant when they meet the criteria under the Companies Act, 2013. The statutory audit gives assurance to shareholders and regulators and is mandatory for most private companies beyond a certain size. Audit and assurance firms in Ahmedabad, Gujarat and across India conduct such audits and file the report with the ROC.
      </p>

      <h2 className="text-2xl mt-10 mb-4">When Is Statutory Audit Mandatory?</h2>
      <p className="leading-relaxed">
        <strong className="text-primary">Every company</strong> (including private limited companies) must have its accounts audited each financial year under the Companies Act, 2013. There is no turnover or size exemption for companies—only certain specified entities (e.g. one person companies with turnover and capital below a limit in some cases) may have relaxed requirements. In practice, almost all private companies need a statutory audit and must appoint an auditor in the first AGM and thereafter.
      </p>

      <h2 className="text-2xl mt-10 mb-4">What the Auditor Does</h2>
      <p className="leading-relaxed">
        The auditor examines the books of account, financial statements, and supporting evidence and expresses an opinion on whether the financial statements give a true and fair view. The audit report is filed with the Registrar of Companies (ROC) along with the annual return (MGT-7) and financial statements (AOC-4). The auditor must be independent and hold a valid certificate of practice from the ICAI. Statutory audit services in Gujarat and India are provided by CA firms and audit firms.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Rotation and Appointment</h2>
      <p className="leading-relaxed">
        Listed companies and certain unlisted companies must rotate auditors after a specified period. Private companies that are not required to rotate can reappoint the same auditor. The appointment is made by the shareholders in the AGM; the first auditor may be appointed by the board. Form ADT-1 is filed with the ROC after appointment.
      </p>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <p className="text-muted mb-4">Statutory audit for private companies in Ahmedabad, Gujarat and India. We conduct the audit and assist with ROC filing and compliance.</p>
        <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors">Get in touch</Link>
      </div>
    </article>
  );
}

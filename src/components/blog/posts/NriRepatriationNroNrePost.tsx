import BlogDisclaimer from "../BlogDisclaimer";
import Link from "next/link";

export default function NriRepatriationNroNrePost() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <BlogDisclaimer />

      <p className="leading-relaxed">
        Non-Resident Indians (NRIs) often hold savings in NRO, NRE, or FCNR accounts in India. Repatriation rules differ by account type—NRE and FCNR are fully repatriable, while NRO has an annual limit and tax compliance. Understanding these rules helps you plan remittances and stay compliant. NRI tax consultants in India, including Gujarat and Ahmedabad, regularly assist with repatriation and 15CA/15CB.
      </p>

      <h2 className="text-2xl mt-10 mb-4">NRE and FCNR: Freely Repatriable</h2>
      <p className="leading-relaxed">
        <strong className="text-primary">NRE (Non-Resident External)</strong> and <strong className="text-primary">FCNR (Foreign Currency Non-Resident)</strong> accounts are funded from overseas or from NRE transfers. There is no restriction on repatriating the balance—you can transfer the full amount abroad anytime. No Form 15CA/15CB is required for the repatriation of NRE/FCNR balances. Interest earned is tax-free in India for NRIs.
      </p>

      <h2 className="text-2xl mt-10 mb-4">NRO: Limits and Tax</h2>
      <p className="leading-relaxed">
        <strong className="text-primary">NRO (Non-Resident Ordinary)</strong> accounts hold Indian-source income (rent, dividends, sale proceeds, etc.). You can repatriate up to <strong className="text-primary">USD 1 million per financial year</strong> from NRO, subject to tax compliance. You must file Form 15CA and often need a CA certificate (Form 15CB) for the remittance. Tax on NRO interest and other Indian income must be paid or TDS must be cleared before repatriation. NRI CAs in Gujarat and across India help with 15CA/15CB and NRO repatriation planning.
      </p>

      <h2 className="text-2xl mt-10 mb-4">LRS for Residents</h2>
      <p className="leading-relaxed">
        Resident individuals can remit up to USD 2,50,000 per financial year under the Liberalised Remittance Scheme (LRS) for permitted purposes. TCS may apply. NRIs are not subject to LRS for their own remittances from India; they use NRO/NRE/FCNR rules.
      </p>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <p className="text-muted mb-4">NRI tax and repatriation support from Ahmedabad, Gujarat—Form 15CA/15CB, NRO remittance, and ITR for NRIs across India and overseas.</p>
        <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors">Get in touch</Link>
      </div>
    </article>
  );
}

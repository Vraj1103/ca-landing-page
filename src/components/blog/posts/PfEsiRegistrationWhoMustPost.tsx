import BlogDisclaimer from "../BlogDisclaimer";
import Link from "next/link";

export default function PfEsiRegistrationWhoMustPost() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <BlogDisclaimer />

      <p className="leading-relaxed">
        Employers in India must comply with labour laws including Provident Fund (PF) and Employees’ State Insurance (ESIC) where applicable. Registration, contribution rates, and return due dates vary by scheme. Getting it right from the start avoids penalties and disputes. Business registration and labour compliance services in Gujarat and across India often include PF and ESIC registration and filing.
      </p>

      <h2 className="text-2xl mt-10 mb-4">EPF (PF) Registration in India</h2>
      <p className="leading-relaxed">
        <strong className="text-primary">Applicability:</strong> Establishments with <strong className="text-primary">20 or more employees</strong> (in certain industries, 10 or more) must register under the Employees’ Provident Funds Act. Once registered, both employer and employee contribute a percentage of basic wages (currently 12% each). The employer must also contribute to EPS in specified cases. Registration is done on the EPFO portal; you get an establishment code and must file monthly ECR (Electronic Challan cum Return). Late payment or non-filing attracts interest and penalties. PF registration and compliance are required across all states including Gujarat.
      </p>

      <h2 className="text-2xl mt-10 mb-4">ESIC Registration in India</h2>
      <p className="leading-relaxed">
        <strong className="text-primary">Applicability:</strong> Factories and establishments with <strong className="text-primary">10 or more employees</strong> (in some states, 20 or more) and drawing wages up to the prescribed limit must register under the Employees’ State Insurance Act. Employer and employee contribute at specified rates. Registration is on the ESIC portal; monthly returns and contribution payment are mandatory. ESIC provides medical and cash benefits to employees. Compliance is pan-India; in Gujarat, the process is online.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Key Compliances</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Register within 21 days (PF) or as soon as the threshold is reached (ESIC).</li>
        <li>File monthly ECR (PF) and pay contributions by the due date.</li>
        <li>Issue contribution slips to employees and maintain registers.</li>
        <li>Update membership when employees join or leave.</li>
      </ul>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <p className="text-muted mb-4">PF and ESIC registration and monthly compliance in Ahmedabad, Gujarat and India. We handle registration, ECR and advisory.</p>
        <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors">Get in touch</Link>
      </div>
    </article>
  );
}

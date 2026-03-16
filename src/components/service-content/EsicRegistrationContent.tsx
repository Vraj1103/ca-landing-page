import Link from "next/link";

export default function EsicRegistrationContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      {/* Disclaimer */}
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness purposes only and may be updated or revised by the government from time to time. We recommend referring to the{" "}
        <a href="https://www.esic.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">official ESIC website</a>{" "}
        for the most current and accurate information before making any compliance decisions.
      </div>

      <h2 className="text-2xl mt-10 mb-4">What is ESIC?</h2>
      <p className="leading-relaxed">
        Employee State Insurance (ESI) is a comprehensive social security scheme introduced by the Government of India to provide protection to employees in the organised sector. It is managed by an autonomous body called the <strong className="text-primary">Employees&apos; State Insurance Corporation (ESIC)</strong>, functioning under the Ministry of Labour and Employment.
      </p>
      <p className="leading-relaxed">
        The scheme is specifically designed to support employees and their families in case of illness, injury, disability, or maternity by offering immediate medical treatment and financial assistance—reducing the financial burden of unexpected medical costs.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Why is ESIC Registration Important?</h2>
      <p className="leading-relaxed">
        ESIC registration is one of the best schemes for securing the health and future of employees and their dependents. Whether it&apos;s an accident, illness, or any medical emergency, the ESI scheme ensures that the employee or their family receives immediate treatment and financial relief—without any cap on the frequency of availing benefits.
      </p>
      <p className="leading-relaxed">
        In the case of a workplace injury, the employee is entitled to receive their full salary every month upon submitting the required documents. Additionally, any establishment with more than 10 employees must register with ESIC and file regular returns, ensuring transparency and accountability in employee welfare.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Who Must Register for ESIC?</h2>
      <p className="leading-relaxed">ESIC registration is mandatory for:</p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Establishments or organisations employing <strong className="text-primary">10 or more workers</strong></li>
        <li>Employees earning a gross monthly wage of <strong className="text-primary">₹21,000 or less</strong></li>
        <li>Factories, shops, hotels, restaurants, cinemas, newspapers, schools, colleges, and other establishments specified under the Act</li>
      </ul>
      <p className="leading-relaxed">
        Employees earning above ₹21,000 per month are not compulsorily covered under ESIC but may voluntarily opt in. Even smaller businesses employing fewer than 10 people can choose to register voluntarily to extend social security benefits to their staff.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Key Benefits of ESIC Registration</h2>
      <ul className="list-disc pl-6 space-y-3 my-4">
        <li><strong className="text-primary">Comprehensive Medical Coverage</strong> – Complete medical care for insured employees and dependent family members, including access to hospitals, specialists, and super-specialty treatment. Coverage starts from day one.</li>
        <li><strong className="text-primary">Maternity Benefits</strong> – Paid maternity leave for up to 26 weeks, along with medical care before and after childbirth. Extended benefits may be granted based on medical advice.</li>
        <li><strong className="text-primary">Sickness Benefits</strong> – Cash compensation equal to 70% of wages for up to 91 days per year during periods of illness, subject to minimum contribution requirements.</li>
        <li><strong className="text-primary">Employment Injury Benefits</strong> – Full wage compensation (100%) during recovery from workplace injuries.</li>
        <li><strong className="text-primary">Disability Benefits</strong> – Temporary disablement: full wage compensation until recovery. Permanent disablement: monthly pension for life, depending on the extent of disability.</li>
        <li><strong className="text-primary">Dependents&apos; Benefits</strong> – Monthly pension for the spouse, children, or parents of an employee who dies due to an employment-related injury or illness.</li>
        <li><strong className="text-primary">Funeral Expenses</strong> – A fixed amount (currently up to ₹15,000) is paid as funeral expense reimbursement to the family of the deceased insured person.</li>
        <li><strong className="text-primary">Confinement Expenses</strong> – A fixed amount for delivery expenses if ESIC medical facilities are not available at the place of delivery.</li>
        <li><strong className="text-primary">Rehabilitation Services</strong> – Vocational training and rehabilitation support for those suffering from long-term illness, permanent injuries, or disabilities.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Documents Required for ESIC Registration</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Registration certificate under Shops &amp; Establishments Act or Factories Act</li>
        <li>PAN Card of the business and employer</li>
        <li>Address proof of the company premises</li>
        <li>Bank account details of the business</li>
        <li>Employee details: name, date of joining, salary, designation</li>
        <li>Aadhaar and PAN card copies of employees</li>
        <li>Digital signature of the employer</li>
        <li>Recent wage registers and attendance register</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">ESIC Contribution Rates</h2>
      <p className="leading-relaxed">
        The ESI scheme is contributory in nature — both the employer and employee contribute to the Employees&apos; State Insurance Fund monthly. The current applicable rates (as of FY 2024–25) are:
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border border-muted/30 rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-muted/10">
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Contributor</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Contribution Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-muted/20">Employee</td><td className="p-3 border-b border-muted/20">0.75% of gross monthly wages</td></tr>
            <tr><td className="p-3">Employer</td><td className="p-3">3.25% of gross wages paid to each employee</td></tr>
          </tbody>
        </table>
      </div>
      <p className="leading-relaxed text-sm italic">
        Note: Contributions are mandatory only for employees earning a gross monthly wage of ₹21,000 or less. Rates may be revised by the government from time to time.
      </p>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Get Expert Assistance for ESIC Registration &amp; Compliance</h2>
        <p className="leading-relaxed text-muted mb-4">
          Managing your team&apos;s social security benefits shouldn&apos;t be overwhelming. HETAL J SHAH &amp; Co. helps businesses across India register with ESIC, file regular returns, and stay compliant — so you can focus on building a better workplace.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>Understand your responsibilities under the ESIC Act</li>
          <li>Register your organisation without delays</li>
          <li>Stay current on ESIC return filing and compliance timelines</li>
          <li>Support your team with the benefits they deserve</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

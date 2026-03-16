import Link from "next/link";

export default function PfRegistrationContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      {/* Disclaimer */}
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness purposes only and may be updated or revised by the government from time to time. We recommend referring to the{" "}
        <a href="https://www.epfindia.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">official EPFO website</a>{" "}
        for the most current and accurate information before making any compliance decisions.
      </div>

      <h2 className="text-2xl mt-10 mb-4">What is EPF Registration?</h2>
      <p className="leading-relaxed">
        EPF (Employee Provident Fund) registration is a mandatory compliance for organizations with 20 or more employees, governed by the Employees&apos; Provident Fund Organization (EPFO) under the Employees&apos; Provident Funds &amp; Miscellaneous Provisions Act, 1952. This social security initiative is designed to provide financial stability and support to employees post-retirement or during emergencies.
      </p>
      <p className="leading-relaxed">
        By registering for EPF, employers and employees contribute a portion of the salary into a fund that can be accessed during retirement, illness, or other critical situations, ensuring long-term financial well-being.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Who Qualifies as an Employee Under EPF?</h2>
      <p className="leading-relaxed">
        As per Section 2(f) of the EPF Act, an &ldquo;employee&rdquo; is anyone employed for wages in any kind of work, either directly or indirectly, under an employer.
      </p>
      <h3 className="text-xl mt-6 mb-3">Types of Employees Covered</h3>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li><strong className="text-primary">Full-Time Employees</strong> – Permanently employed staff with consistent working hours and benefits.</li>
        <li><strong className="text-primary">Part-Time Employees</strong> – Individuals working limited hours or on specific tasks.</li>
        <li><strong className="text-primary">Remote / Work-from-Home Employees</strong> – Employees working remotely can also be registered.</li>
        <li><strong className="text-primary">Contractual Workers</strong> – Hired for specific projects; employers must ensure EPF compliance.</li>
        <li><strong className="text-primary">Consultants</strong> – Hired for their expertise for a limited period; may fall under EPF depending on terms of employment.</li>
        <li><strong className="text-primary">Freelancers</strong> – As per the Social Security Code (2020), freelancers can now be included under EPF benefits.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">EPF Registration Applicability</h2>
      <p className="leading-relaxed">EPF registration is mandatory for:</p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Any establishment employing 20 or more employees.</li>
        <li>Any factory engaged in industry with 20+ workers.</li>
        <li>Establishments notified by the Central Government, regardless of the number of employees.</li>
      </ul>
      <h3 className="text-xl mt-6 mb-3">Types of Registration</h3>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li><strong className="text-primary">Mandatory Registration</strong> – For establishments with 20 or more employees.</li>
        <li><strong className="text-primary">Voluntary Registration</strong> – For establishments with fewer than 20 employees but willing to offer EPF benefits.</li>
        <li><strong className="text-primary">All Recognized Establishments</strong> – Entities falling under the Act&apos;s purview must register with EPFO.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Key Benefits of EPF Registration</h2>
      <ul className="list-disc pl-6 space-y-3 my-4">
        <li><strong className="text-primary">Employer&apos;s Contribution</strong> – The employer shares the responsibility of contribution, including amounts toward the Employee Pension Scheme (EPS), enhancing the overall retirement fund.</li>
        <li><strong className="text-primary">Financial Safety Net</strong> – Provides financial security during retirement, medical emergencies, permanent disability, or in case of the employee&apos;s demise.</li>
        <li><strong className="text-primary">Portability of PF Account</strong> – The EPF account can be transferred to a new employer when switching jobs, allowing continuity without interruption.</li>
        <li><strong className="text-primary">Support for Long-Term Goals</strong> – Funds can be utilized for purchasing a home, children&apos;s education, or marriage.</li>
        <li><strong className="text-primary">Minimized Financial Risk</strong> – Reduces financial uncertainties for employees and their dependents during emergencies.</li>
        <li><strong className="text-primary">Universal Account Number (UAN)</strong> – A UAN is issued that remains unchanged throughout an employee&apos;s career across all employers in India.</li>
        <li><strong className="text-primary">Insurance Coverage (EDLI)</strong> – Employees enrolled in EPF are eligible for the Employee Deposit Linked Insurance (EDLI) scheme at a nominal rate of 0.5% of salary.</li>
        <li><strong className="text-primary">Retirement Savings</strong> – Contributions accumulate into a significant corpus accessible post-retirement.</li>
        <li><strong className="text-primary">Pension Benefits</strong> – More than 8.33% of the EPF contribution is allocated to the Employee Pension Scheme (EPS), enabling monthly pension payouts after retirement.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">EPF Contribution Structure</h2>
      <h3 className="text-xl mt-6 mb-3">Eligibility for EPF Membership</h3>
      <p className="leading-relaxed">
        Every salaried individual who resides in India is eligible to become a member of the EPF scheme from the very first day of employment. For employees earning ₹15,000 or more per month, enrollment under EPF is compulsory. Those earning below this threshold can also opt to join voluntarily.
      </p>
      <p className="leading-relaxed mt-3">
        As per EPFO guidelines, the employee is required to contribute a minimum of 12% of their basic salary plus dearness allowance (DA). They also have the option to make additional voluntary contributions under the Voluntary Provident Fund (VPF) scheme.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border border-muted/30 rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-muted/10">
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Category</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Contribution Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-muted/20">Employee</td><td className="p-3 border-b border-muted/20">12% of Basic Pay + DA</td></tr>
            <tr><td className="p-3 border-b border-muted/20">Employer</td><td className="p-3 border-b border-muted/20">12% of Basic Pay + DA (incl. EPS)</td></tr>
            <tr><td className="p-3">Voluntary PF (VPF)</td><td className="p-3">Up to 100% of salary (employee only)</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl mt-10 mb-4">Timely Compliance &amp; Due Dates for EPF Contributions</h2>
      <p className="leading-relaxed">
        Ensuring timely EPF contributions is crucial for both employers and employees to remain compliant and avoid penalties. Both the employee&apos;s and employer&apos;s shares must be deposited on or before the <strong className="text-primary">15th of the following month</strong>. For example, the contribution for April must be deposited on or before May 15th.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border border-muted/30 rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-muted/10">
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Compliance Activity</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-muted/20">Monthly PF Contribution</td><td className="p-3 border-b border-muted/20">On or before the 15th of each month</td></tr>
            <tr><td className="p-3 border-b border-muted/20">ECR (Electronic Challan cum Return) Filing</td><td className="p-3 border-b border-muted/20">On or before the 15th of each month</td></tr>
            <tr><td className="p-3">Annual PF Return Filing</td><td className="p-3">25th April every year</td></tr>
          </tbody>
        </table>
      </div>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">
          Get Expert Assistance for EPF Registration &amp; Compliance
        </h2>
        <p className="leading-relaxed text-muted mb-4">
          Looking to streamline your PF Registration, manage EPF Returns, or need reliable PF consultation in Ahmedabad? HETAL J SHAH & Co. is your trusted partner for comprehensive EPFO Registration and ongoing compliance support.
        </p>
        <p className="font-medium text-primary mb-2">Our Services Include:</p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>PF Registration for Employers</li>
          <li>Monthly &amp; Annual PF Return Filing</li>
          <li>EPF Compliance Management</li>
          <li>Expert PF Consultation</li>
          <li>Voluntary PF &amp; VPF Advisory</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            Get in touch
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            View all services
          </Link>
        </div>
      </div>
    </article>
  );
}

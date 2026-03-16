import Link from "next/link";

export default function ProfessionalTaxContent() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      {/* Disclaimer */}
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> Professional Tax is a state-level tax and its rules, slabs, and deadlines vary by state. The information on this page covers general concepts and uses Maharashtra as a reference. It may change as state governments revise their notifications. Please refer to your respective{" "}
        <a href="https://mahagst.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">state&apos;s official portal</a>{" "}
        for the most current and accurate requirements before making any compliance decisions.
      </div>

      <h2 className="text-2xl mt-10 mb-4">What is Professional Tax?</h2>
      <p className="leading-relaxed">
        Professional Tax is a state-level direct tax levied on individuals earning income through employment, trade, profession, or calling. It is one of the few taxes that state governments in India are empowered to levy under Article 276 of the Constitution, with a maximum ceiling of <strong className="text-primary">₹2,500 per year</strong> per individual.
      </p>
      <p className="leading-relaxed">
        States such as Maharashtra, Karnataka, West Bengal, Gujarat, Andhra Pradesh, Telangana, Tamil Nadu, and others levy Professional Tax. The rules, slabs, due dates, and registration requirements differ from state to state. Employers are responsible for deducting Professional Tax from employees&apos; salaries and depositing it with the respective state authority.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Two Types of Registration (Maharashtra Reference)</h2>
      <p className="leading-relaxed">
        In Maharashtra, compliance requires two distinct certificates depending on whether you employ staff:
      </p>

      <h3 className="text-xl mt-6 mb-3">PTEC – Professional Tax Enrolment Certificate</h3>
      <p className="leading-relaxed">
        PTEC is required by any individual or entity — including professionals, sole proprietors (with no employees), directors of companies, and partners in LLPs or firms — to pay their own professional tax to the government. Even if you operate a trade or profession without employing staff, you must register under PTEC.
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Maximum Professional Tax payable under PTEC: <strong className="text-primary">₹2,500 per year</strong> by 30th June each year</li>
        <li>A director or partner pays this fee only once, regardless of how many companies or firms they are associated with</li>
      </ul>

      <h3 className="text-xl mt-6 mb-3">PTRC – Professional Tax Registration Certificate</h3>
      <p className="leading-relaxed">
        PTRC is mandatory for businesses that employ staff. It authorises employers to deduct Professional Tax from employees&apos; salaries and deposit it with the state government.
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Companies with employees must hold <strong className="text-primary">both PTEC and PTRC</strong></li>
        <li>If a company or LLP does not employ anyone, only PTEC is required</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Who Must Pay Professional Tax?</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Employers — responsible for calculating, deducting, and paying Professional Tax on behalf of their employees</li>
        <li>Individuals involved in any profession, trade, or business — including companies, partnerships, LLPs, and proprietorships — based on their income bracket</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Who is Exempt from Professional Tax? (Maharashtra)</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Foreign nationals employed in India</li>
        <li>Individuals aged 65 years or older</li>
        <li>Temporary workers in the textile industry</li>
        <li>Parents or guardians of children with permanent mental or physical disabilities</li>
        <li>Women agents working exclusively under the Mahila Pradhan Kshetriya Bachat Yojana</li>
        <li>Persons with permanent physical disabilities (including blindness)</li>
        <li>Members of the armed forces under the Army, Navy, or Air Force Acts</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Professional Tax Slabs (Maharashtra Reference)</h2>
      <p className="leading-relaxed text-sm italic mb-4">
        Note: Slabs vary by state. The following are applicable for Maharashtra and are subject to revision.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border border-muted/30 rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-muted/10">
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Monthly Gross Salary</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Professional Tax Payable</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-muted/20" colSpan={2}><strong className="text-primary">For Male Employees</strong></td></tr>
            <tr><td className="p-3 border-b border-muted/20">Up to ₹7,500</td><td className="p-3 border-b border-muted/20">Nil</td></tr>
            <tr><td className="p-3 border-b border-muted/20">₹7,501 to ₹10,000</td><td className="p-3 border-b border-muted/20">₹175 per month</td></tr>
            <tr><td className="p-3 border-b border-muted/20">₹10,001 and above</td><td className="p-3 border-b border-muted/20">₹200/month (₹300 in February)</td></tr>
            <tr><td className="p-3 border-b border-muted/20" colSpan={2}><strong className="text-primary">For Female Employees</strong></td></tr>
            <tr><td className="p-3 border-b border-muted/20">Up to ₹25,000</td><td className="p-3 border-b border-muted/20">Nil</td></tr>
            <tr><td className="p-3">Above ₹25,000</td><td className="p-3">₹200/month (₹300 in February)</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl mt-10 mb-4">PTRC Return Filing &amp; Payment Deadlines (Maharashtra)</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full border border-muted/30 rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-muted/10">
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Annual Tax Liability</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Filing Frequency</th>
              <th className="border-b border-muted/30 p-3 text-left font-semibold text-primary">Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-muted/20">Less than ₹1,00,000</td><td className="p-3 border-b border-muted/20">Annually*</td><td className="p-3 border-b border-muted/20">31st March of the financial year</td></tr>
            <tr><td className="p-3">₹1,00,000 and above</td><td className="p-3">Monthly</td><td className="p-3">Last date of the respective month</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-muted italic">*In the first year of registration, returns must be filed monthly regardless of tax liability.</p>

      <h2 className="text-2xl mt-10 mb-4">Late Fees for PTRC Return Filing</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>₹200 if the return is filed within 30 days of the due date</li>
        <li>₹1,000 if the delay exceeds 30 days</li>
      </ul>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Need Help with Professional Tax Registration?</h2>
        <p className="leading-relaxed text-muted mb-4">
          Whether you&apos;re a startup, entrepreneur, or established business, HETAL J SHAH &amp; Co. offers end-to-end assistance for Professional Tax registration (PTEC &amp; PTRC), return filing, and compliance — across applicable states in India.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>End-to-end assistance for PTEC and PTRC registration</li>
          <li>Guidance on Professional Tax slabs and applicability</li>
          <li>Timely Professional Tax return filing with document verification</li>
          <li>Expert help with PTRC return filing for employers with salaried staff</li>
          <li>Assistance with Professional Tax payment and challan generation</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

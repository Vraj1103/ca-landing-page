import Link from "next/link";

export default function Section8Content() {
  return (
    <article className="prose prose-lg text-muted max-w-none prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold">
      <div className="not-prose mb-8 p-4 rounded-xl bg-muted/10 border border-muted/25 text-sm text-muted leading-relaxed">
        <strong className="text-primary">Disclaimer:</strong> The information provided on this page is for general awareness only and may be updated as the Government of India revises the Companies Act, 2013 or related MCA guidelines. Please refer to the{" "}
        <a href="https://www.mca.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-primary transition-colors">official MCA portal</a>{" "}
        for the most current and accurate requirements before making any decisions.
      </div>

      <h2 className="text-2xl mt-10 mb-4">What is a Section 8 Company?</h2>
      <p className="leading-relaxed">
        A <strong className="text-primary">Section 8 Company</strong> (previously known as a Section 25 Company under the Companies Act, 1956) is an organisation incorporated under the Companies Act, 2013 with the objective of promoting arts, science, commerce, literature, religion, charity, education, social welfare, sports, research, or environmental protection.
      </p>
      <p className="leading-relaxed">
        The Central Government grants a license to such a company under Section 8 of the Companies Act, subject to three main conditions:
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>The company must be registered for charitable purposes.</li>
        <li>All income and profits must be applied towards the stated objectives.</li>
        <li>The company must not pay any dividend to its members.</li>
      </ul>
      <p className="leading-relaxed">
        In India, the term &ldquo;NGO&rdquo; is used broadly for all non-profit organisations — including Trusts, Societies, and Section 8 Companies. A Section 8 Company offers a more structured, transparent, and credible framework compared to the other two forms.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Benefits of Section 8 Company Registration</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong className="text-primary">Tax Benefits</strong> – Eligible for multiple exemptions under the Income Tax Act, including deductions under Section 80G available to donors.</li>
        <li><strong className="text-primary">Zero Stamp Duty</strong> – Not liable to pay stamp duty on MoA and AoA, unlike other entities under the Companies Act, 2013.</li>
        <li><strong className="text-primary">Minimal Share Capital</strong> – Can be set up without any minimum paid-up share capital and can alter its capital structure as required.</li>
        <li><strong className="text-primary">No &ldquo;Limited&rdquo; Suffix Required</strong> – Section 8 companies are not required to affix &ldquo;Limited&rdquo; or &ldquo;Private Limited&rdquo; to their names.</li>
        <li><strong className="text-primary">Separate Legal Entity</strong> – Has a distinct legal status independent of its members, with perpetual succession.</li>
        <li><strong className="text-primary">Improved Credibility</strong> – The transparent constitutional framework of a Section 8 company gives it greater credibility than Trusts or Societies.</li>
        <li><strong className="text-primary">Eligible for Foreign Contributions</strong> – Can receive overseas donations after registering under the Foreign Contribution Regulation Act (FCRA), 2010.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Eligible Objectives for Section 8 Companies</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Commerce, Art, Science, Sports, Education, Research</li>
        <li>Social welfare and charity</li>
        <li>Religion and promotion of culture</li>
        <li>Protection of the environment</li>
        <li>Any object allied to the above</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Ways to Raise Funds</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li><strong className="text-primary">Domestic Donations</strong> – No restrictions; a proper anti-money-laundering mechanism must be in place.</li>
        <li><strong className="text-primary">Foreign Donations</strong> – Permitted only after registering under FCRA. FCRA licence applications are accepted three years after the registration date, or with prior clearance from the Ministry of Home Affairs for urgent cases.</li>
        <li><strong className="text-primary">Equity Funding</strong> – May potentially raise funds by issuing new equity shares at a premium, subject to applicable rules.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Eligibility Criteria</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>An individual or HUF is eligible to start a Section 8 company in India.</li>
        <li>At least two directors are required for a private Section 8 company; at least three for a public Section 8 company.</li>
        <li>At least one director must be a resident of India.</li>
        <li>Founders, directors, and members cannot draw any remuneration in cash or kind.</li>
        <li>No profits shall be distributed among members and directors, directly or indirectly.</li>
      </ul>

      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
        <h2 className="text-xl font-heading font-semibold text-primary mb-3">Register Your Section 8 Company — Expert Assistance Across India</h2>
        <p className="leading-relaxed text-muted mb-4">
          HETAL J SHAH &amp; Co. provides comprehensive support for Section 8 company registration across India — ensuring accuracy, transparency, and alignment with the Companies Act, 2013.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-6">
          <li>Complete support for Section 8 company incorporation with MCA</li>
          <li>Guidance on eligibility, objectives, and company structure</li>
          <li>Drafting of MoA, AoA, declarations, and required legal documentation</li>
          <li>PAN, TAN, and post-registration compliance assistance</li>
          <li>Advisory on tax benefits, exemptions, and FCRA registration</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Get in touch</Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-muted/30 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">View all services</Link>
        </div>
      </div>
    </article>
  );
}

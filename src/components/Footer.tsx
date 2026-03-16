import Link from "next/link";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <Link
              href="/"
              className="font-heading text-2xl font-semibold text-white hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded"
            >
              HETAL J SHAH & Co.
            </Link>
            <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-xs">
              Chartered accountants in Ahmedabad. Audit, tax, and advisory for businesses across Gujarat and beyond.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-4">
              Quick links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-4">
              Contact
            </h3>
            <address className="not-italic text-white/80 text-sm space-y-1">
              <p>309, Radhe Kishan Arista</p>
              <p>Opp. Hirabhai Tower, Uttam Nagar Cross Rd</p>
              <p>Maninagar, Ahmedabad 380008, Gujarat</p>
              <p>
                <a
                  href="mailto:info@hetaljshahco.com"
                  className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded"
                >
                  info@hetaljshahco.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+919898320491"
                  className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded"
                >
                  +91 98983 20491
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-1 text-sm">
            <p className="text-white/70">
              © {new Date().getFullYear()} HETAL J SHAH & Co. All rights reserved.
            </p>
            <Link href="/privacy" className="text-white/70 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="text-white/70 hover:text-accent transition-colors">
              Disclaimer
            </Link>
          </div>
          <p className="text-white/60 text-xs">
            ICAI regulated • Member firm
          </p>
        </div>
      </div>
    </footer>
  );
}

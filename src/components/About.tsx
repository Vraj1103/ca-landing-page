export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white scroll-mt-20"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2
              id="about-heading"
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-primary"
            >
              About us
            </h2>
            <p className="mt-6 text-muted leading-relaxed">
              HETAL J SHAH & Co. is a chartered accountancy firm based in Maninagar, Ahmedabad. We believe in clarity, integrity, and long-term relationships. We help businesses—from startups to established firms—navigate audit, tax, and compliance with confidence.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Our approach is straightforward: we explain the numbers in plain language, meet deadlines, and stay available when you need us. No jargon, no surprises—just reliable expertise you can count on.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-muted/10 flex items-center justify-center overflow-hidden">
              <div className="text-muted text-sm font-medium">Team photo placeholder</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

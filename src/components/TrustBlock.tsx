const stats = [
  { value: "15+", label: "Years of experience" },
  { value: "500+", label: "Clients served" },
  { value: "ICAI", label: "Regulated member firm" },
];

const whyUs = [
  "Transparent pricing and clear deliverables",
  "Dedicated point of contact for every client",
  "Proactive compliance and deadline management",
];

export default function TrustBlock() {
  return (
    <section
      className="py-20 md:py-28 bg-primary text-white flex justify-center items-center"
      aria-labelledby="trust-heading"
    >
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2
          id="trust-heading"
          className="font-heading text-3xl sm:text-4xl font-semibold text-center mb-14"
        >
          Why work with us
        </h2>

        {/* Single grid so top and bottom stay in exact column alignment */}
        <div className="rounded-2xl border border-white/10 bg-white/5 w-full max-w-3xl overflow-hidden">
          {/* Top row: stats — same 3-column grid */}
          <div className="grid grid-cols-3 gap-x-4 sm:gap-x-8 px-6 sm:px-10 md:px-12 py-10 sm:py-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center min-w-0">
                <p className="font-heading text-3xl sm:text-4xl font-semibold text-accent tabular-nums">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm sm:text-base text-white/85 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 w-full" aria-hidden />

          {/* Bottom row: bullets — same 3-column grid, no drift */}
          <ul
            className="grid grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-6 px-6 sm:px-10 md:px-12 py-10 sm:py-12"
            role="list"
          >
            {whyUs.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-white/90 text-sm sm:text-base min-w-0"
              >
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 sm:mt-2.5"
                  aria-hidden
                />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden bg-surface"
      aria-labelledby="hero-heading"
    >
      {/* Subtle grid / shape background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(to right, #0f1729 1px, transparent 1px),
            linear-gradient(to bottom, #0f1729 1px, transparent 1px)`,
          backgroundSize: "4rem 4rem",
        }}
      />
      <div className="absolute top-1/4 right-0 w-[60%] max-w-2xl h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-1/2 h-64 bg-muted/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <h1
            id="hero-heading"
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary leading-[1.1] animate-slide-up opacity-0"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            Chartered accountants you can trust
          </h1>
          <p
            className="mt-6 text-lg md:text-xl text-muted max-w-xl animate-slide-up opacity-0"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            Audit, tax, and advisory. We help businesses across India and overseas stay compliant and grow with clarity.
          </p>
          <div
            className="mt-10 flex flex-wrap gap-4 animate-slide-up opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <Link
              href="/#contact"
              className="inline-flex items-center px-6 py-3.5 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Book a consultation
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center px-6 py-3.5 border-2 border-muted/40 text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Our services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

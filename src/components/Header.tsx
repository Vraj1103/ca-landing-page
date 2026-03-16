"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import servicesData from "@/data/services.json";

type ServiceItem = { slug: string; name: string };
type ServiceCategory = { id: string; title: string; services: ServiceItem[] };

const categories = servicesData as ServiceCategory[];

const navLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/#about", label: "About" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [hoveredCatId, setHoveredCatId] = useState<string>(categories[0]?.id ?? "");
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCatOpen, setMobileCatOpen] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const isNavActive = (href: string) => {
    if (href === "/blog") return pathname.startsWith("/blog");
    if (href.startsWith("/#")) return pathname === "/" && activeHash === href.slice(1);
    return pathname === href;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, []);

  // Close dropdown on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setServicesOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const activeCategory = categories.find((c) => c.id === hoveredCatId) ?? categories[0];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-muted/20">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-primary focus:rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Skip to main content
      </a>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-xl md:text-2xl font-semibold text-primary hover:text-accent transition-colors focus:outline-none shrink-0"
          >
            HETAL J SHAH & Co.
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {/* Services mega-dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesOpen((o) => !o)}
                className={`font-medium transition-colors focus:outline-none px-1 flex items-center gap-1 ${
                  pathname.startsWith("/services") || servicesOpen
                    ? "text-accent"
                    : "text-muted hover:text-accent"
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-controls="services-megamenu"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Two-panel mega menu */}
              <div
                id="services-megamenu"
                role="region"
                aria-label="Services menu"
                className={`absolute top-[calc(100%+8px)] left-0 flex shadow-2xl rounded-xl overflow-hidden border border-muted/20 bg-white transition-all duration-200 ${
                  servicesOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-1"
                }`}
                style={{ minWidth: "560px" }}
              >
                {/* Left panel – categories */}
                <div className="w-52 bg-primary flex-shrink-0">
                  {categories.map((cat) => {
                    const isActive = cat.id === hoveredCatId;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onMouseEnter={() => setHoveredCatId(cat.id)}
                        onClick={() => {
                          setServicesOpen(false);
                          window.location.href = `/services/${cat.id}`;
                        }}
                        className={`w-full flex items-center justify-between gap-2 px-4 py-3 text-left text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset ${
                          isActive
                            ? "bg-accent text-primary"
                            : "text-white/90 hover:bg-white/10"
                        }`}
                      >
                        <span>{cat.title}</span>
                        {cat.services.length > 0 && (
                          <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Right panel – sub-services */}
                <div className="flex-1 bg-white p-4 min-h-[260px]">
                  {activeCategory && (
                    <>
                      <Link
                        href={`/services/${activeCategory.id}`}
                        onClick={() => setServicesOpen(false)}
                        className="block font-heading font-semibold text-primary hover:text-accent mb-3 pb-2 border-b border-muted/15 transition-colors"
                      >
                        {activeCategory.title}
                      </Link>
                      {activeCategory.services.length > 0 ? (
                        <ul className="space-y-0.5">
                          {activeCategory.services.map((s) => (
                            <li key={s.slug}>
                              <Link
                                href={`/services/${activeCategory.id}/${s.slug}`}
                                onClick={() => setServicesOpen(false)}
                                className="block px-3 py-2 rounded-lg text-sm text-muted hover:bg-muted/10 hover:text-primary transition-colors"
                              >
                                {s.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-muted px-3 py-2">
                          Contact us for details on {activeCategory.title}.
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  if (link.href.startsWith("/#")) {
                    setActiveHash(link.href.slice(1));
                  }
                }}
                className={`font-medium transition-colors focus:outline-none px-1 ${
                  isNavActive(link.href) ? "text-accent" : "text-muted hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/#contact"
              className="inline-flex items-center px-5 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Get in touch
            </Link>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-muted hover:bg-muted/10 focus:outline-none focus:ring-2 focus:ring-accent"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Toggle menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-[85vh] pb-4" : "max-h-0"
          }`}
          aria-hidden={!mobileOpen}
        >
          <nav className="flex flex-col gap-1 pt-2 border-t border-muted/20" aria-label="Mobile navigation">
            {/* Mobile Services */}
            <div className="border-b border-muted/10 pb-2">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`w-full flex items-center justify-between py-2 font-medium focus:outline-none px-2 ${
                  pathname.startsWith("/services") || mobileServicesOpen
                    ? "text-accent"
                    : "text-muted hover:text-accent"
                }`}
                aria-expanded={mobileServicesOpen}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`overflow-hidden transition-all duration-200 ${mobileServicesOpen ? "max-h-[60vh]" : "max-h-0"}`}>
                <div className="pl-2 pt-1 space-y-1 max-h-[55vh] overflow-y-auto">
                  {categories.map((cat) => (
                    <div key={cat.id} className="rounded-lg overflow-hidden border border-muted/15">
                      <button
                        type="button"
                        onClick={() => setMobileCatOpen(mobileCatOpen === cat.id ? null : cat.id)}
                        className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-primary bg-muted/5 hover:bg-muted/10 transition-colors"
                      >
                        {cat.title}
                        {cat.services.length > 0 && (
                          <svg
                            className={`w-4 h-4 text-muted transition-transform ${mobileCatOpen === cat.id ? "rotate-90" : ""}`}
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </button>
                      {cat.services.length > 0 && (
                        <div className={`overflow-hidden transition-all duration-200 ${mobileCatOpen === cat.id ? "max-h-96" : "max-h-0"}`}>
                          <ul className="bg-white px-2 pb-2 pt-1 space-y-0.5">
                            {cat.services.map((s) => (
                              <li key={s.slug}>
                                <Link
                                  href={`/services/${cat.id}/${s.slug}`}
                                  onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); setMobileCatOpen(null); }}
                                  className="block text-sm text-muted hover:text-accent py-1.5 px-2 rounded hover:bg-muted/5"
                                >
                                  {s.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  if (link.href.startsWith("/#")) {
                    setActiveHash(link.href.slice(1));
                  }
                  setMobileOpen(false);
                }}
                className={`py-2 font-medium focus:outline-none px-2 ${
                  isNavActive(link.href) ? "text-accent" : "text-muted hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors w-full"
            >
              Get in touch
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

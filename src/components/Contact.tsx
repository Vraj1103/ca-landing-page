"use client";

import { useState } from "react";

const ADDRESS = {
  line1: "309, Radhe Kishan Arista",
  line2: "Opposite Hirabhai Tower, Uttam Nagar Cross Road",
  line3: "Maninagar, Ahmedabad 380008, Gujarat",
};
const PHONE = "+91 98983 20491";
const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.920037776759!2d72.59955317530012!3d22.98996771754417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85e5f5d1c5d1%3A0x40a2a97129249292!2sHETAL%20J%20SHAH%20%26%20CO!5e0!3m2!1sen!2sin!4v1773422013291!5m2!1sen!2sin";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("server error");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-surface scroll-mt-20"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            id="contact-heading"
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-primary"
          >
            Get in touch
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            Visit us in Maninagar, Ahmedabad, or send a message. We respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-stretch">
          {/* Form – single box aligned with right column height */}
          <div className="order-2 lg:order-1 h-full min-h-0 flex flex-col">
            <div className="flex-1 flex flex-col p-6 rounded-2xl bg-white border border-muted/20 shadow-sm">
              {status === "success" ? (
                <div className="flex flex-col flex-1 items-center justify-center gap-4 py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-primary">Message sent!</h3>
                  <p className="text-muted text-sm max-w-xs">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-sm font-medium text-accent hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
              <form
                className="flex flex-col flex-1 gap-6"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-primary mb-2">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      className="w-full px-4 py-3 rounded-lg border border-muted/30 bg-white text-primary placeholder-muted/70 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-primary mb-2">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="w-full px-4 py-3 rounded-lg border border-muted/30 bg-white text-primary placeholder-muted/70 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-primary mb-2">
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    className="w-full px-4 py-3 rounded-lg border border-muted/30 bg-white text-primary placeholder-muted/70 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow"
                    placeholder="Your phone number"
                  />
                </div>
                <div className="flex-1 min-h-[120px] flex flex-col">
                  <label htmlFor="contact-message" className="block text-sm font-medium text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-muted/30 bg-white text-primary placeholder-muted/70 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow resize-y min-h-[120px] flex-1"
                    placeholder="How can we help?"
                  />
                </div>
                {status === "error" && (
                  <p role="alert" className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                    Something went wrong. Please try again or email us directly at{" "}
                    <a href="mailto:info@hetaljshahco.com" className="underline">info@hetaljshahco.com</a>.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" && (
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden>
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                  )}
                  {status === "submitting" ? "Sending…" : "Send message"}
                </button>
              </form>
              )}
            </div>
          </div>

          {/* Two equal-height boxes: office details + map – aligned with left column */}
          <div className="order-1 lg:order-2 flex flex-col gap-5 h-full min-h-0">
            <div className="flex-1 min-h-0 p-6 rounded-2xl bg-white border border-muted/20 shadow-sm flex flex-col">
              <h3 className="font-heading text-lg font-semibold text-primary mb-3">
                Visit our office
              </h3>
              <address className="not-italic text-muted text-sm leading-relaxed space-y-1">
                <p>{ADDRESS.line1}</p>
                <p>{ADDRESS.line2}</p>
                <p>{ADDRESS.line3}</p>
              </address>
              <div className="mt-4 pt-4 border-t border-muted/15 space-y-2">
                <p className="flex flex-wrap items-center gap-x-2 gap-y-0">
                  <span className="text-muted text-xs uppercase tracking-wider shrink-0">Phone</span>
                  <a
                    href={`tel:${PHONE.replace(/\s/g, "")}`}
                    className="text-primary font-medium hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded"
                  >
                    {PHONE}
                  </a>
                </p>
                <p className="flex flex-wrap items-center gap-x-2 gap-y-0">
                  <span className="text-muted text-xs uppercase tracking-wider shrink-0">Email</span>
                  <a
                    href="mailto:info@hetaljshahco.com"
                    className="text-primary font-medium hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded"
                  >
                    info@hetaljshahco.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex-1 min-h-0 rounded-2xl overflow-hidden border border-muted/20 shadow-sm bg-muted/10 flex flex-col">
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HETAL J SHAH & Co. office location on Google Maps"
                className="w-full flex-1 min-h-[200px] block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

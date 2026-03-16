"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer audit and assurance, tax planning and compliance, advisory and consulting, and regulatory and company secretarial support. We can tailor a package for your business size and needs.",
  },
  {
    question: "How do I get started?",
    answer:
      "Get in touch via the contact form or call us. We’ll arrange a short call to understand your requirements, then share a proposal and next steps. There’s no obligation.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes. We work with businesses of all sizes—from startups and SMEs to larger companies. We scale our support to what you need and what fits your budget.",
  },
  {
    question: "Are you regulated by ICAI?",
    answer:
      "Yes. We are a member firm of the Institute of Chartered Accountants of India (ICAI) and follow its standards and code of ethics for all our work.",
  },
  {
    question: "What are your typical response times?",
    answer:
      "We aim to respond to enquiries within 24 hours. For ongoing clients, we agree on response times and deliverables at the start of each engagement.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-white scroll-mt-20"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="faq-heading"
          className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-primary text-center mb-12"
        >
          Frequently asked questions
        </h2>
        <ul className="space-y-3" role="list">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className="border border-muted/20 rounded-lg overflow-hidden bg-surface/50"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-medium text-primary hover:bg-muted/5 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                {faq.question}
                <span
                  className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-muted/10 text-muted transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  aria-hidden
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 pb-4 text-muted text-sm leading-relaxed border-t border-muted/10 pt-2">
                  {faq.answer}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

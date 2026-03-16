"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import testimonialsData from "@/data/testimonials.json";

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

const testimonials = testimonialsData as Testimonial[];
const CARD_WIDTH = 380;
const GAP = 24;
const TRUNCATE_LENGTH = 180;
const AUTO_SCROLL_MS = 5000;

function TestimonialCard({
  t,
  isExpanded,
  onToggle,
}: {
  t: Testimonial;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const isLong = t.quote.length > TRUNCATE_LENGTH;
  const showReadMore = isLong && !isExpanded;
  const displayQuote = showReadMore ? `${t.quote.slice(0, TRUNCATE_LENGTH).trim()}…` : t.quote;

  return (
    <blockquote
      className="flex flex-col flex-shrink-0 w-[340px] sm:w-[380px] h-[320px] p-6 rounded-2xl bg-white border border-muted/20 shadow-sm hover:shadow-md hover:border-accent/30 transition-shadow"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="flex-1 min-h-0 overflow-hidden flex flex-col">
        <p className="text-muted leading-relaxed text-sm flex-1 overflow-y-auto">
          &ldquo;{displayQuote}&rdquo;
        </p>
        {isLong && (
          <button
            type="button"
            onClick={onToggle}
            className="mt-2 text-left text-sm font-medium text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-accent rounded"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>
      <footer className="mt-4 pt-4 border-t border-muted/10 flex-shrink-0">
        <p className="font-semibold text-primary text-sm">{t.name}</p>
        {t.role ? <p className="text-xs text-muted mt-0.5">{t.role}</p> : null}
      </footer>
    </blockquote>
  );
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpanded = useCallback((id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  // Infinite scroll: duplicate list and reset when we've scrolled one full set
  const infiniteList = [...testimonials, ...testimonials];
  const oneSetWidth = testimonials.length * (CARD_WIDTH + GAP) - GAP;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let rafId: number;
    let lastScroll = 0;

    const checkReset = () => {
      const left = el.scrollLeft;
      if (left >= oneSetWidth - 10) {
        el.scrollLeft = 0;
      }
      lastScroll = el.scrollLeft;
      rafId = requestAnimationFrame(checkReset);
    };
    rafId = requestAnimationFrame(checkReset);
    return () => cancelAnimationFrame(rafId);
  }, [oneSetWidth]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      const next = el.scrollLeft + (CARD_WIDTH + GAP);
      if (next >= oneSetWidth) {
        el.scrollLeft = 0;
      } else {
        el.scrollTo({ left: next, behavior: "smooth" });
      }
    }, AUTO_SCROLL_MS);
    return () => clearInterval(interval);
  }, [oneSetWidth]);

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-surface scroll-mt-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            id="testimonials-heading"
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-primary"
          >
            What our clients say
          </h2>
          <p className="mt-4 text-lg text-muted">
            Trusted by businesses across sectors for audit, tax, and advisory.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scroll-smooth h-[360px]"
          style={{ scrollbarGutter: "stable" }}
          aria-label="Testimonials carousel"
        >
          {infiniteList.map((t, i) => (
            <TestimonialCard
              key={`${t.id}-${i}`}
              t={t}
              isExpanded={expandedIds.has(t.id)}
              onToggle={() => toggleExpanded(t.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

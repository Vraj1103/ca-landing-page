"use client";

import Script from "next/script";
import { useRef, useEffect, useState } from "react";
import Testimonials from "./Testimonials";

const ELFSIGHT_SCRIPT = "https://elfsightcdn.com/platform.js";
const WIDGET_CHECK_DELAY_MS = 6000;

function isWidgetLoaded(container: HTMLDivElement | null): boolean {
  if (!container) return false;
  const iframe = container.querySelector("iframe");
  if (iframe) return true;
  const rect = container.getBoundingClientRect();
  return rect.height > 50;
}

export default function TestimonialsWithWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [widgetReady, setWidgetReady] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    if (!scriptLoaded || showFallback) return;
    const container = widgetRef.current;
    if (!container) return;

    const verifyWidget = () => {
      if (isWidgetLoaded(container)) {
        setWidgetReady(true);
      }
    };

    verifyWidget();
    const observer = new MutationObserver(() => verifyWidget());
    observer.observe(container, { childList: true, subtree: true });

    const timer = setTimeout(() => {
      if (!isWidgetLoaded(container)) {
        setShowFallback(true);
        return;
      }
      setWidgetReady(true);
    }, WIDGET_CHECK_DELAY_MS);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [scriptLoaded, showFallback]);

  return (
    <>
      <Script
        src={ELFSIGHT_SCRIPT}
        strategy="lazyOnload"
        onLoad={() => setScriptLoaded(true)}
        onError={() => setShowFallback(true)}
      />
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

          {!showFallback && (
            <div
              ref={widgetRef}
              className="min-h-[200px] [&_.elfsight-app-iframe]:!w-full"
              aria-busy={!widgetReady}
            >
              <div
                className="elfsight-app-e62031fc-bcdf-4caa-95b2-f367de8c1308"
                data-elfsight-app-lazy
              />
            </div>
          )}

          {showFallback && (
            <div aria-live="polite">
              <Testimonials asFallback />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

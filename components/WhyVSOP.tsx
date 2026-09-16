"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { whyVSOPContent } from "../data/content";
import { Button } from "@/components/Button";

export function WhyVSOP() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((current) => (current + 1) % whyVSOPContent.reasons.length);
  };

  const previous = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + whyVSOPContent.reasons.length) %
        whyVSOPContent.reasons.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(next, whyVSOPContent.interval);

    return () => clearInterval(interval);
  }, []);

  const activeReason = whyVSOPContent.reasons[activeIndex];

  return (
    <section className="section bg-[var(--school-surface)]">
      <div className="container">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <p className="text-[28px] font-extrabold leading-[1.1] text-[var(--school-primary)] md:text-[40px]">
            {whyVSOPContent.label}
          </p>
        </div>

        {/* SLIDER */}
        <div className="mx-auto flex max-w-5xl items-center justify-center gap-6 md:gap-10">
          {/* LEFT ARROW */}
          <button
            type="button"
            onClick={previous}
            aria-label="Previous"
            className="
              flex
              h-[42px]
              w-[42px]
              shrink-0
              items-center
              justify-center
              border-[1px]
              border-[var(--school-primary)]
              bg-transparent
              text-[var(--school-primary)]
              transition-colors
              hover:bg-[var(--school-primary)]
              hover:text-[var(--school-surface)]
            "
          >
            <ArrowLeft size={17} strokeWidth={1.5} />
          </button>

          {/* CONTENT */}
          <div
            key={activeIndex}
            className="min-w-0 max-w-2xl flex-1 text-center"
          >
            <h3 className="text-[20px] font-semibold leading-[1.2] text-[var(--school-secondary)] sm:text-[24px]">
              {activeReason.title}
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-[16px] leading-7 text-[var(--school-text)]/65 md:text-[18px] md:leading-8">
              {activeReason.text}
            </p>

            {/* READ MORE */}
            <div className="mt-6 flex justify-center">
              <Button
                href="/about#why-join-vsop"
                variant="outline"
                className="
                  !h-[42px]
                  !min-h-[42px]
                  !w-[120px]
                  !min-w-[120px]
                  !border-[1px]
                  !border-[var(--school-primary)]
                  !px-5
                  !text-[12px]
                "
              >
                READ MORE
              </Button>
            </div>

            {/* PAGINATION DOTS */}
            <div className="mt-6 flex items-center justify-center gap-2">
              {whyVSOPContent.reasons.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={activeIndex === index}
                  className="flex h-5 w-5 items-center justify-center"
                >
                  <span
                    className={`
                      block rounded-full transition-all duration-300
                      ${
                        activeIndex === index
                          ? "h-2 w-2 bg-[var(--school-secondary)]"
                          : "h-1.5 w-1.5 bg-[var(--school-text-muted)]/40 hover:bg-[var(--school-text-muted)]/60"
                      }
                    `}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT ARROW */}
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="
              flex
              h-[42px]
              w-[42px]
              shrink-0
              items-center
              justify-center
              border-[1px]
              border-[var(--school-primary)]
              bg-transparent
              text-[var(--school-primary)]
              transition-colors
              hover:bg-[var(--school-primary)]
              hover:text-[var(--school-surface)]
            "
          >
            <ArrowRight size={17} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}

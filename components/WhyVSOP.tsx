"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { whyVSOPContent } from "../data/content";

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
    <section className="relative bg-[var(--school-surface)] py-8 sm:py-10 lg:py-12">
      {/* LEFT ARROW */}
      <button
        type="button"
        onClick={previous}
        aria-label="Previous"
        className="
          absolute
          left-4
          top-1/2
          z-10
          flex
          h-[42px]
          w-[42px]
          -translate-y-1/2
          items-center
          justify-center
          border
          border-[var(--school-primary)]
          bg-transparent
          text-[var(--school-primary)]
          transition-colors
          hover:bg-[var(--school-primary)]
          hover:text-[var(--school-surface)]
          sm:left-6
          lg:left-8
        "
      >
        <ArrowLeft size={17} strokeWidth={1.5} />
      </button>

      {/* RIGHT ARROW */}
      <button
        type="button"
        onClick={next}
        aria-label="Next"
        className="
          absolute
          right-4
          top-1/2
          z-10
          flex
          h-[42px]
          w-[42px]
          -translate-y-1/2
          items-center
          justify-center
          border
          border-[var(--school-primary)]
          bg-transparent
          text-[var(--school-primary)]
          transition-colors
          hover:bg-[var(--school-primary)]
          hover:text-[var(--school-surface)]
          sm:right-6
          lg:right-8
        "
      >
        <ArrowRight size={17} strokeWidth={1.5} />
      </button>

      <div className="container">
        {/* HEADER */}
        <div className="mb-8 text-center">
          <p className="text-[28px] font-extrabold leading-[1.1] text-[var(--school-primary)] md:text-[40px]">
            {whyVSOPContent.label}
          </p>
        </div>

        {/* CONTENT */}
        <div
          key={activeIndex}
          className="mx-auto max-w-2xl px-10 text-center sm:px-14"
        >
          <h3 className="text-[20px] font-semibold leading-[1.2] text-[var(--school-secondary)] sm:text-[24px]">
            {activeReason.title}
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-[16px] leading-7 text-[var(--school-text)]/65 md:text-[18px] md:leading-8">
            {activeReason.text}
          </p>

          {/* READ MORE */}
          <div className="mt-5 flex justify-center">
            <Link
              href="/about#why-join-vsop"
              className="
                h-auto
                w-auto
                border-0
                bg-transparent
                p-0
                text-[12px]
                font-semibold
                text-[var(--school-text)]
                !underline
                decoration-1
                underline-offset-4
                transition-opacity
                hover:opacity-50
              "
            >
              READ MORE
            </Link>
          </div>

          {/* PAGINATION */}
          <div className="mt-5 flex items-center justify-center gap-2">
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
      </div>
    </section>
  );
}

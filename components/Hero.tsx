"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroContent } from "../data/content";

type PageHeroProps = {
  label?: string;
  title: string;
  desc?: string;
  carousel?: boolean;
};

/* =========================================================
   HERO
========================================================= */

export function Hero({ label, title, desc, carousel = false }: PageHeroProps) {
  const [current, setCurrent] = useState(0);

  const images = heroContent.images;
  const interval = heroContent.carousel.interval;

  useEffect(() => {
    if (!carousel || !images || images.length === 0) {
      return;
    }

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [carousel, images, interval]);

  /* =========================================================
     SIMPLE PAGE HERO
  ========================================================= */

  if (!carousel) {
    return (
      <section className="bg-[var(--school-surface-muted)]">
        <div className="container flex min-h-[520px] items-end py-20 md:min-h-[620px] md:py-24">
          <div className="max-w-5xl">
            {label && <div className="eyebrow">{label}</div>}

            <h1 className="serif mt-5 max-w-4xl text-[42px] leading-[0.98] md:text-[64px] lg:text-[72px]">
              {title}
            </h1>

            {desc && (
              <p className="mt-7 max-w-2xl text-[16px] leading-7 text-[var(--school-text)]/60 md:text-lg md:leading-8">
                {desc}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  /* =========================================================
     FULL SCREEN HOMEPAGE HERO
  ========================================================= */

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[var(--school-primary)] text-[var(--school-surface)]">
      {/* =====================================================
          BACKGROUND IMAGES
      ===================================================== */}

      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`absolute inset-0 transition-transform duration-[9000ms] ease-out ${
                current === index ? "scale-[1.04]" : "scale-100"
              }`}
            >
              <Image
                src={image}
                alt={`${heroContent.imageAlt} — image ${index + 1}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}

        {/* Overall overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Left readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />

        {/* Bottom readability overlay */}
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="container relative z-10 flex min-h-[100svh] items-end pb-24 pt-32 md:pb-28 lg:pb-32">
        <div className="w-full">
          <div className="max-w-[1050px]">
            {/* LABEL */}

            {label && (
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[var(--school-surface)]/70" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--school-surface)]/85">
                  {label}
                </span>
              </div>
            )}

            {/* TITLE */}

            <h1 className="sans-serif max-w-6xl text-[35px] font-extrabold leading-[0.98] tracking-[-0.035em] text-[var(--school-surface)] md:text-[55px]">
              {title}
            </h1>

            {/* DESCRIPTION */}

            {desc && (
              <p className="mt-7 max-w-[650px] text-[16px] leading-7 text-[var(--school-surface)]/80 md:mt-8 md:text-[18px] md:leading-8">
                {desc}
              </p>
            )}

            {/* APPLY NOW */}

            <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-9">
              <Link
                href={heroContent.buttons.admissions.href}
                className="
                  inline-flex
                  h-[50px]
                  min-h-[50px]
                  w-[145px]
                  min-w-[145px]
                  items-center
                  justify-center
                  bg-[var(--school-primary)]
                  px-5
                  text-center
                  text-[12px]
                  font-medium
                  leading-none
                  text-[var(--school-surface)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[var(--school-primary-strong)]
                  hover:text-[var(--school-surface)]
                  hover:shadow-[0_4px_14px_rgba(0,0,0,0.16)]
                "
              >
                APPLY NOW
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          SLIDE INDICATORS
      ===================================================== */}

      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="container">
          <div className="flex items-center justify-center py-6 md:py-8">
            <div className="flex items-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={current === index}
                  onClick={() => setCurrent(index)}
                  className="group flex h-8 items-center"
                >
                  <span
                    className={`block h-[2px] transition-all duration-500 ${
                      current === index
                        ? "w-12 bg-[var(--school-surface)]"
                        : "w-6 bg-[var(--school-surface)]/30 group-hover:bg-[var(--school-surface)]/60"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PAGE HERO
========================================================= */

export function PageHero({
  label,
  title,
  desc,
  description,
  carousel = false,
}: PageHeroProps & {
  description?: string;
}) {
  return (
    <Hero
      label={label}
      title={title}
      desc={desc ?? description}
      carousel={carousel}
    />
  );
}

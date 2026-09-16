"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroContent } from "../data/content";
import { Button } from "@/components/Button";

type PageHeroProps = {
  label?: string;
  title: string;
  desc?: string;
  carousel?: boolean;
};

export function Hero({ label, title, desc, carousel = false }: PageHeroProps) {
  const [current, setCurrent] = useState(0);

  const { images, carousel: carouselSettings } = heroContent;

  useEffect(() => {
    if (!carousel || !images?.length) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, carouselSettings.interval);

    return () => clearInterval(interval);
  }, [carousel, images?.length, carouselSettings.interval]);

  /* =========================================================
     SIMPLE PAGE HERO
  ========================================================= */

  if (!carousel) {
    return (
      <section className="bg-[var(--school-surface-muted)] py-24 md:py-32">
        <div className="container max-w-5xl">
          {label && <div className="eyebrow">{label}</div>}

          <h1 className="serif mt-5 max-w-4xl text-[35px] leading-[1.02] md:text-[55px]">
            {title}
          </h1>

          {desc && (
            <p className="mt-7 max-w-2xl text-[16px] leading-7 text-[var(--school-text)]/60 md:text-lg md:leading-8">
              {desc}
            </p>
          )}
        </div>
      </section>
    );
  }

  /* =========================================================
     HOMEPAGE HERO CAROUSEL
  ========================================================= */

  return (
    <section className="relative min-h-[720px] overflow-hidden bg-[var(--school-primary)] text-[var(--school-surface)] md:min-h-[820px]">
      {/* BACKGROUND */}
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
                current === index ? "scale-[1.06]" : "scale-100"
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

        <div className="absolute inset-0 bg-[var(--school-primary)]/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07140d]/80 via-[#07140d]/40 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/30 to-transparent" />

        <div className="absolute inset-0 bg-[var(--school-primary)]/10 mix-blend-multiply" />
      </div>

      {/* CONTENT */}
      <div className="container relative z-10 flex min-h-[720px] items-center pb-32 pt-32 md:min-h-[820px] md:pb-36 md:pt-36">
        <div className="w-full max-w-5xl">
          <h1 className="sans-serif max-w-5xl text-[clamp(35px,5vw,55px)] font-extrabold leading-[1.02] tracking-[-0.02em] text-[var(--school-surface)]">
            {title}
          </h1>

          {desc && (
            <p className="mt-9 max-w-[680px] text-[16px] leading-7 text-[var(--school-surface)]/75 md:text-[18px] md:leading-8">
              {desc}
            </p>
          )}

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {/* INQUIRE */}
            <Button
              href={heroContent.buttons.about.href}
              variant="outline"
              className="
                !h-[48px]
                !min-h-[48px]
                !w-[150px]
                !min-w-[150px]
                !border-[var(--school-surface)]/40
                !bg-transparent
                !text-[var(--school-surface)]
                hover:-translate-y-0.5
                hover:!border-[var(--school-surface)]
                hover:!bg-[var(--school-surface)]
                hover:!text-[var(--school-primary)]
              "
            >
              INQUIRE
            </Button>

            {/* APPLY NOW */}
            <Button
              href={heroContent.buttons.admissions.href}
              variant="secondary"
              className="
                !h-[48px]
                !min-h-[48px]
                !w-[150px]
                !min-w-[150px]
                !bg-[var(--school-secondary)]
                !text-[var(--school-surface)]
                hover:-translate-y-0.5
                hover:!bg-[var(--school-surface)]
                hover:!text-[var(--school-secondary)]
              "
            >
              APPLY NOW
            </Button>
          </div>
        </div>
      </div>

      {/* SLIDE INDICATORS */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="container pb-7 md:pb-9">
          <div className="flex items-end justify-center pt-5">
            <div className="flex items-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={current === index}
                  onClick={() => setCurrent(index)}
                  className="group flex h-7 items-center"
                >
                  <span
                    className={`block h-[2px] rounded-full transition-all duration-500 ${
                      current === index
                        ? "w-14 bg-[var(--school-surface)]"
                        : "w-7 bg-[var(--school-surface)]/30 group-hover:bg-[var(--school-surface)]/60"
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

export function PageHero({
  label,
  title,
  desc,
  description,
  carousel = false,
}: PageHeroProps & { description?: string }) {
  return (
    <Hero
      label={label}
      title={title}
      desc={desc ?? description}
      carousel={carousel}
    />
  );
}

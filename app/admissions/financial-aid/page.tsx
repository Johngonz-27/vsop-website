"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { financialAidContent } from "@/data/content";

export default function FinancialAidPage() {
  const {
    navigation,
    hero,
    financialSupport,
    seniorHigh,
    inquiry,
    important,
    cta,
  } = financialAidContent;

  return (
    <main className="bg-white text-[#0d0d0d]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="scroll-mt-28 border-b border-black/10">
        <div className="mx-auto flex min-h-[58vh] w-full max-w-7xl flex-col justify-between px-8 py-28 sm:px-10 sm:py-32 lg:px-12 lg:py-36">
          <div>
            <Link
              href={hero.backHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-black/50 transition-colors hover:text-black"
            >
              <ArrowLeft size={16} strokeWidth={1.5} />
              {hero.backLabel}
            </Link>

            <div className="mt-16 max-w-5xl md:mt-24">
              <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/45">
                {hero.eyebrow}
              </p>

              <h1 className="font-display text-[35px] font-medium leading-[0.88] tracking-[-0.055em] md:text-[55px]">
                {hero.title}
              </h1>

              <p className="mt-10 max-w-2xl text-[16px] leading-7 text-black/55 md:text-[18px] md:leading-8">
                {hero.description}
              </p>
            </div>
          </div>

          {/* HERO METADATA */}

          <div className="mt-20 grid pt-6 sm:grid-cols-2 md:grid-cols-4">
            {hero.metadata.map((item) => (
              <div key={item.label} className="mt-6 md:mt-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/35">
                  {item.label}
                </p>

                <p className="mt-2 text-sm font-medium leading-6">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="mx-auto w-full max-w-7xl px-8 py-20 sm:px-10 md:px-12 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[220px_1fr] lg:gap-24">
          {/* =================================================
              STICKY NAVIGATION
          ================================================= */}

          <aside className="lg:sticky lg:top-32 lg:h-fit">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/45">
              Admissions
            </p>

            <nav className="flex gap-1 overflow-x-auto pb-2 lg:block lg:overflow-visible">
              {navigation.map((item) => {
                const active = item.id === "financial-aid";

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group flex shrink-0 items-center gap-2 border-l px-3 py-2 text-left text-[12px] transition-all lg:w-full ${
                      active
                        ? "border-black font-semibold text-black"
                        : "border-black/10 text-black/40 hover:border-black/30 hover:text-black"
                    }`}
                  >
                    <span>{item.label}</span>

                    {active && (
                      <ArrowRight
                        size={12}
                        strokeWidth={1.8}
                        className="shrink-0"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          </aside>

          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <div className="min-w-0 max-w-4xl">
            {/* =================================================
                FINANCIAL SUPPORT
            ================================================= */}

            <AdmissionsSection
              eyebrow={financialSupport.eyebrow}
              title={financialSupport.title}
              description={financialSupport.description}
            >
              <div className="border-t border-black/10">
                {financialSupport.items.map((item) => (
                  <div
                    key={item.number}
                    className="grid gap-5 border-b border-black/10 py-8 sm:grid-cols-[70px_1fr] sm:gap-8"
                  >
                    <p className="text-[11px] font-semibold tracking-[0.12em] text-black/35">
                      {item.number}
                    </p>

                    <div>
                      <h3 className="text-xl font-medium tracking-[-0.025em] sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-2xl text-[15px] leading-7 text-black/55">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AdmissionsSection>

            {/* =================================================
                SENIOR HIGH
            ================================================= */}

            <AdmissionsSection
              eyebrow={seniorHigh.eyebrow}
              title={seniorHigh.title}
              description={seniorHigh.description}
            >
              <div className="grid border-t border-black/10 sm:grid-cols-2">
                {seniorHigh.strands.map((strand) => (
                  <Link
                    key={strand.href}
                    href={strand.href}
                    className="group border-b border-black/10 py-8 first:sm:border-r sm:pr-8 sm:pl-0 sm:even:pl-8 sm:even:pr-0"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/35">
                      {strand.label}
                    </p>

                    <h3 className="mt-3 text-xl font-medium">{strand.title}</h3>

                    <p className="mt-3 text-[14px] leading-6 text-black/55">
                      {strand.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em]">
                      {strand.buttonLabel}

                      <ArrowRight
                        size={14}
                        strokeWidth={1.5}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </AdmissionsSection>

            {/* =================================================
                HOW TO ASK
            ================================================= */}

            <AdmissionsSection
              eyebrow={inquiry.eyebrow}
              title={inquiry.title}
              description={inquiry.description}
            >
              <div className="border-t border-black/10">
                {inquiry.steps.map((item) => (
                  <div
                    key={item.number}
                    className="grid gap-4 border-b border-black/10 py-7 sm:grid-cols-[70px_1fr]"
                  >
                    <p className="text-[11px] font-semibold tracking-[0.12em] text-black/35">
                      {item.number}
                    </p>

                    <div>
                      <h3 className="font-medium">{item.title}</h3>

                      <p className="mt-2 text-[14px] leading-6 text-black/55">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AdmissionsSection>

            {/* =================================================
                IMPORTANT
            ================================================= */}

            <AdmissionsSection
              eyebrow={important.eyebrow}
              title={important.title}
              description={important.description}
            >
              <div className="border-l border-black px-6 py-2">
                <p className="text-[14px] leading-7 text-black/60">
                  {important.note}
                </p>
              </div>
            </AdmissionsSection>

            {/* =================================================
                CTA
            ================================================= */}

            <div className="mt-14 border border-black/10 bg-[var(--school-surface-muted)] p-8 sm:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40">
                {cta.eyebrow}
              </p>

              <h3 className="mt-3 max-w-xl font-display text-3xl font-medium leading-[1] tracking-[-0.04em] sm:text-4xl">
                {cta.title}
              </h3>

              <p className="mt-5 max-w-xl text-[15px] leading-7 text-black/55">
                {cta.description}
              </p>

              <Link
                href={cta.buttonHref}
                className="mt-8 inline-flex items-center gap-3 border border-black px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors hover:bg-black hover:text-white"
              >
                {cta.buttonLabel}

                <ArrowRight size={15} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

/* ===============================================================
   ADMISSIONS SECTION
=============================================================== */

function AdmissionsSection({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-black/10 py-14 first:pt-0 sm:py-16 md:py-20">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40">
          {eyebrow}
        </p>

        <h2 className="mt-3 max-w-4xl font-display text-4xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-5xl md:text-6xl">
          {title}
        </h2>

        <p className="mt-6 max-w-2xl text-[15px] leading-7 text-black/55">
          {description}
        </p>
      </div>

      <div className="mt-12">{children}</div>
    </section>
  );
}

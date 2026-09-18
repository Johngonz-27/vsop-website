"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { admissionsContent } from "@/data/content";

export default function AdmissionsPage() {
  const [active, setActive] = useState("enrollment");

  const { navigation, hero, enrollment, requirements, tuition, financialAid } =
    admissionsContent;

  /* =======================================================
     HASH + INTERSECTION OBSERVER
  ======================================================= */

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");

      if (!hash || !navigation.some((section) => section.id === hash)) {
        return;
      }

      setActive(hash);

      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    };

    scrollToHash();

    const observers = navigation.map((section) => {
      const element = document.getElementById(section.id);

      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(section.id);
          }
        },
        {
          rootMargin: "-25% 0px -65% 0px",
          threshold: 0,
        },
      );

      observer.observe(element);

      return observer;
    });

    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);

      observers.forEach((observer) => {
        observer?.disconnect();
      });
    };
  }, [navigation]);

  /* =======================================================
     SCROLL TO SECTION
  ======================================================= */

  const goToSection = (id: string) => {
    setActive(id);

    window.history.replaceState(
      null,
      "",
      id === "enrollment" ? "/admissions" : `/admissions#${id}`,
    );

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-w-0 bg-white text-[#0d0d0d]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section id="overview" className="border-b border-black/10">
        <div className="mx-auto flex min-h-[58vh] w-full max-w-7xl flex-col justify-between px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28 lg:px-12 lg:py-36">
          <div>
            <Link
              href={hero.backHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-black/50 transition-colors hover:text-black"
            >
              <ArrowLeft size={16} strokeWidth={1.5} />
              {hero.backLabel}
            </Link>

            <div className="mt-12 max-w-5xl sm:mt-16 md:mt-24">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/45 sm:mb-6 sm:text-[11px]">
                {hero.eyebrow}
              </p>

              <h1 className="font-display text-[34px] font-medium leading-[0.9] tracking-[-0.055em] sm:text-[42px] md:text-[55px]">
                {hero.title}
              </h1>

              <p className="mt-7 max-w-2xl text-[15px] leading-7 text-black/55 sm:mt-8 sm:text-[16px] md:mt-10 md:text-[18px] md:leading-8">
                {hero.description}
              </p>
            </div>
          </div>

          {/* =================================================
              HERO METADATA
          ================================================= */}

          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-7 pt-6 sm:mt-16 sm:grid-cols-2 md:mt-20 md:grid-cols-4 md:gap-y-0">
            {hero.metadata.map((item, index) => (
              <div
                key={item.label}
                className={`mt-0 ${index >= 2 ? "mt-6 sm:mt-6 md:mt-0" : ""}`}
              >
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/35 sm:text-[10px]">
                  {item.label}
                </p>

                <p className="mt-1.5 text-[13px] font-medium leading-5 sm:mt-2 sm:text-sm sm:leading-6">
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

      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-12 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-24">
          {/* =================================================
              SIDEBAR

              Hidden on mobile/tablet.
              Visible and sticky on desktop.
          ================================================= */}

          <aside className="hidden lg:sticky lg:top-32 lg:block lg:h-fit">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/45">
              On this page
            </p>

            <nav className="flex gap-1 lg:block">
              {navigation.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => goToSection(section.id)}
                  className={`group flex w-full items-center gap-2 border-l px-3 py-2 text-left text-[12px] transition-all ${
                    active === section.id
                      ? "border-black font-semibold text-black"
                      : "border-black/10 text-black/40 hover:border-black/30 hover:text-black"
                  }`}
                >
                  <span>{section.label}</span>

                  {active === section.id && (
                    <ArrowRight
                      size={12}
                      strokeWidth={1.8}
                      className="shrink-0"
                    />
                  )}
                </button>
              ))}
            </nav>
          </aside>

          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <div className="min-w-0 max-w-4xl space-y-6 sm:space-y-8">
            {/* =================================================
                01 — ENROLLMENT
            ================================================= */}

            <AdmissionsSection
              id="enrollment"
              eyebrow={enrollment.eyebrow}
              title={enrollment.title}
              description={enrollment.description}
            >
              <div className="space-y-8 sm:space-y-10">
                {enrollment.steps.map((step) => (
                  <div
                    key={step.number}
                    className="grid gap-3 py-2 sm:grid-cols-[80px_220px_1fr] sm:gap-8"
                  >
                    <span className="text-[10px] font-semibold text-black/35 sm:text-[11px]">
                      {step.number}
                    </span>

                    <h3 className="font-display text-xl font-medium leading-tight tracking-tight sm:text-2xl">
                      {step.title}
                    </h3>

                    <p className="max-w-2xl text-[14px] leading-6 text-black/60 sm:text-[15px] sm:leading-7">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </AdmissionsSection>

            {/* =================================================
                02 — REQUIREMENTS
            ================================================= */}

            <AdmissionsSection
              id="requirements"
              eyebrow={requirements.eyebrow}
              title={requirements.title}
              description={requirements.description}
            >
              <NumberedItems items={requirements.items} />

              <InfoBlock
                label={requirements.important.label}
                text={requirements.important.text}
              />
            </AdmissionsSection>

            {/* =================================================
                03 — TUITION
            ================================================= */}

            <AdmissionsSection
              id="tuition"
              eyebrow={tuition.eyebrow}
              title={tuition.title}
              description={tuition.description}
            >
              <NumberedItems items={tuition.levels} />

              <InfoBlock
                label={tuition.information.label}
                text={tuition.information.text}
              />
            </AdmissionsSection>

            {/* =================================================
                04 — FINANCIAL AID
            ================================================= */}

            <AdmissionsSection
              id="financial-aid"
              eyebrow={financialAid.eyebrow}
              title={financialAid.title}
              description={financialAid.description}
            >
              <NumberedItems items={financialAid.items} />
            </AdmissionsSection>
          </div>
        </div>
      </div>
    </main>
  );
}

/* ===============================================================
   ITEMS
=============================================================== */

function NumberedItems({
  items,
}: {
  items: {
    title: string;
    text: string;
  }[];
}) {
  return (
    <div className="space-y-8 sm:space-y-10">
      {items.map((item) => (
        <div
          key={item.title}
          className="grid gap-3 py-2 sm:grid-cols-[220px_1fr] sm:gap-8"
        >
          <h3 className="font-display text-xl font-medium leading-tight tracking-tight sm:text-2xl">
            {item.title}
          </h3>

          <p className="max-w-2xl text-[14px] leading-6 text-black/60 sm:text-[15px] sm:leading-7">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ===============================================================
   INFO BLOCK
=============================================================== */

function InfoBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="mt-10 pt-2 sm:mt-12">
      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black/40 sm:text-[10px]">
        {label}
      </p>

      <p className="mt-3 max-w-2xl text-[14px] leading-6 text-black/60 sm:mt-4 sm:text-[15px] sm:leading-7">
        {text}
      </p>
    </div>
  );
}

/* ===============================================================
   ADMISSIONS SECTION
=============================================================== */

function AdmissionsSection({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="
        scroll-mt-24
        border
        border-black/10
        bg-white
        px-5
        py-8
        shadow-[0_8px_30px_rgba(0,0,0,0.06)]
        sm:scroll-mt-28
        sm:px-7
        sm:py-10
        md:px-9
        md:py-12
        lg:px-12
        lg:py-14
      "
    >
      <div>
        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black/40 sm:text-[10px]">
          {eyebrow}
        </p>

        <h2 className="mt-2 max-w-4xl font-display text-[30px] font-medium leading-[0.98] tracking-[-0.045em] sm:mt-3 sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h2>

        <p className="mt-4 max-w-2xl text-[14px] leading-6 text-black/55 sm:mt-6 sm:text-[15px] sm:leading-7">
          {description}
        </p>
      </div>

      <div className="mt-8 sm:mt-10 md:mt-12">{children}</div>
    </section>
  );
}

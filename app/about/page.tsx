"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { aboutContent } from "../../data/content";

export default function AboutPage() {
  const [active, setActive] = useState("overview");

  const { navigation, hero, sections } = aboutContent;

  /* =========================================================
     ACTIVE SECTION
  ========================================================= */

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (hash && navigation.some((section) => section.id === hash)) {
      setActive(hash);

      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }

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

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [navigation]);

  /* =========================================================
     SECTION NAVIGATION
  ========================================================= */

  const goToSection = (id: string) => {
    setActive(id);

    window.history.replaceState(
      null,
      "",
      id === "overview" ? "/about" : `/about#${id}`,
    );

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-w-0 bg-white text-[#0d0d0d]">
      {/* =========================================================
          OVERVIEW / HERO
      ========================================================= */}

      <section
        id="overview"
        className="scroll-mt-24 border-b border-black/10 lg:scroll-mt-28"
      >
        <div className="mx-auto flex min-h-[58vh] w-full max-w-7xl flex-col justify-between px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28 lg:px-12 lg:py-36">
          <div>
            <Link
              href={hero.backHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-black/50 transition-colors hover:text-black"
            >
              <ArrowLeft size={16} strokeWidth={1.5} />
              {hero.backLabel}
            </Link>

            <div className="mt-12 max-w-5xl sm:mt-16 md:mt-20 lg:mt-24">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/45 sm:mb-6 sm:text-[11px]">
                {hero.eyebrow}
              </p>

              <h1 className="max-w-4xl font-display text-[34px] font-medium leading-[0.92] tracking-[-0.055em] sm:text-[42px] md:text-[55px]">
                {hero.title}
              </h1>

              <p className="mt-7 max-w-2xl text-[15px] leading-7 text-black/55 sm:mt-8 sm:text-[16px] md:mt-10 md:text-[18px] md:leading-8">
                {hero.description}
              </p>
            </div>
          </div>

          {/* =====================================================
              HERO METADATA
          ===================================================== */}

          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-7 pt-6 sm:mt-16 sm:grid-cols-2 md:mt-20 md:grid-cols-4 md:gap-y-0">
            {hero.metadata.map((item) => (
              <div key={item.label}>
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

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-12 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-24">
          {/* =====================================================
              ON THIS PAGE
              
              Hidden on mobile/tablet.
              Visible + sticky on desktop.
          ===================================================== */}

          <aside className="hidden lg:sticky lg:top-32 lg:block lg:h-fit">
            <p className="mb-4 px-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/45">
              On this page
            </p>

            <nav>
              {navigation.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => goToSection(section.id)}
                  className={`
                    group
                    flex
                    w-full
                    items-center
                    gap-2
                    border-l
                    px-3
                    py-2
                    text-left
                    text-[12px]
                    transition-all
                    ${
                      active === section.id
                        ? "border-black font-semibold text-black"
                        : "border-black/10 text-black/40 hover:border-black/30 hover:text-black"
                    }
                  `}
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

          {/* =====================================================
              MAIN CONTENT
          ===================================================== */}

          <div className="min-w-0 max-w-4xl space-y-6 sm:space-y-8">
            {/* ===================================================
                HISTORY
            =================================================== */}

            <AboutSection
              id={sections.history.id}
              eyebrow={sections.history.eyebrow}
              title={sections.history.title}
              description={sections.history.description}
            >
              <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden bg-[var(--school-surface-muted)] sm:mb-12 sm:aspect-[16/7]">
                <Image
                  src="/Images/image2.jpg"
                  alt="Village School of Parkwoods"
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover"
                />
              </div>

              <div>
                {sections.history.items.map((item) => (
                  <div
                    key={item.title}
                    className="grid gap-3 border-b border-black/5 py-6 last:border-b-0 sm:grid-cols-[220px_1fr] sm:gap-5 sm:gap-x-10 sm:py-8"
                  >
                    <h3 className="font-display text-xl font-medium leading-tight tracking-[-0.025em] sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="max-w-2xl text-[14px] leading-6 text-black/60 sm:text-[15px] sm:leading-7">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </AboutSection>

            {/* ===================================================
                MISSION / VISION / CORE VALUES
            =================================================== */}

            <AboutSection
              id={sections.missionVision.id}
              eyebrow={sections.missionVision.eyebrow}
              title={sections.missionVision.title}
              description={sections.missionVision.description}
            >
              <div>
                {/* VISION */}

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40">
                    {sections.missionVision.vision.eyebrow}
                  </p>

                  <p className="mt-4 max-w-3xl text-[15px] leading-7 text-black/65 sm:mt-5 sm:text-[17px] sm:leading-8">
                    {sections.missionVision.vision.title}
                  </p>
                </div>

                {/* MISSION */}

                <div className="mt-10 border-t border-black/10 pt-8 sm:mt-14 sm:pt-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40">
                    {sections.missionVision.mission.eyebrow}
                  </p>

                  <p className="mt-4 max-w-3xl text-[15px] leading-7 text-black/65 sm:mt-5 sm:text-[17px] sm:leading-8">
                    {sections.missionVision.mission.description}
                  </p>
                </div>

                {/* CORE VALUES */}

                <div className="mt-10 border-t border-black/10 pt-8 sm:mt-14 sm:pt-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40">
                    {sections.missionVision.values.eyebrow}
                  </p>

                  <p className="mt-4 max-w-3xl text-[15px] leading-7 text-black/65 sm:mt-5 sm:text-[17px] sm:leading-8">
                    {sections.missionVision.values.description}
                  </p>
                </div>
              </div>
            </AboutSection>

            {/* ===================================================
                ADMINISTRATION
            =================================================== */}

            <AboutSection
              id={sections.administration.id}
              eyebrow={sections.administration.eyebrow}
              title={sections.administration.title}
              description={sections.administration.description}
            >
              <div className="grid gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {sections.administration.people.map((person) => (
                  <div key={person.name}>
                    <div className="relative aspect-[4/3] overflow-hidden bg-[var(--school-surface-muted)]">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>

                    <div className="mt-3 sm:mt-4">
                      <h3 className="font-display text-lg font-medium leading-tight tracking-[-0.025em] sm:text-xl">
                        {person.name}
                      </h3>

                      <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-black/40 sm:text-[10px]">
                        {person.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AboutSection>

            {/* ===================================================
                SCHOOL SEAL
            =================================================== */}

            <AboutSection
              id={sections.schoolSeal.id}
              eyebrow={sections.schoolSeal.eyebrow}
              title={sections.schoolSeal.title}
              description={sections.schoolSeal.description}
            >
              <div className="grid gap-6 sm:grid-cols-[220px_1fr] sm:items-center sm:gap-10">
                <div className="flex aspect-square items-center justify-center p-4 sm:p-7">
                  <Image
                    src="/Images/vsop-seal.png"
                    alt="Village School of Parkwoods School Seal"
                    width={180}
                    height={180}
                    className="h-auto w-full max-w-[140px] object-contain sm:max-w-[160px]"
                  />
                </div>

                <div className="max-w-2xl">
                  <h3 className="text-xl font-semibold leading-tight tracking-[-0.025em] sm:text-3xl">
                    {sections.schoolSeal.heading}
                  </h3>

                  <p className="mt-3 text-[14px] leading-6 text-black/60 sm:mt-4 sm:text-[15px] sm:leading-7">
                    {sections.schoolSeal.text}
                  </p>
                </div>
              </div>
            </AboutSection>

            {/* ===================================================
                SCHOOL HYMN
            =================================================== */}

            <AboutSection
              id={sections.hymn.id}
              eyebrow={sections.hymn.eyebrow}
              title={sections.hymn.title}
              description={sections.hymn.description}
            >
              <div className="mx-auto max-w-2xl text-center">
                <div className="py-8 sm:py-12">
                  <p className="font-display text-2xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl">
                    {sections.hymn.schoolName}
                  </p>

                  <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-black/40 sm:text-[10px]">
                    {sections.hymn.label}
                  </p>
                </div>

                <div className="mt-8 whitespace-pre-line text-[14px] leading-7 text-black/65 sm:mt-10 sm:text-[15px] sm:leading-8">
                  {sections.hymn.lyrics}
                </div>
              </div>
            </AboutSection>

            {/* ===================================================
                FACILITIES
            =================================================== */}

            <AboutSection
              id={sections.facilities.id}
              eyebrow={sections.facilities.eyebrow}
              title={sections.facilities.title}
              description={sections.facilities.description}
            >
              <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
                {sections.facilities.items.map((item) => (
                  <div key={item.title}>
                    <div className="relative aspect-[4/3] overflow-hidden bg-black/[0.03]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>

                    <h3 className="mt-4 font-display text-xl font-medium tracking-[-0.025em] sm:mt-5 sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
            </AboutSection>

            {/* ===================================================
                RECOGNITIONS
            =================================================== */}

            <AboutSection
              id={sections.recognitions.id}
              eyebrow={sections.recognitions.eyebrow}
              title={sections.recognitions.title}
              description={sections.recognitions.description}
            >
              <div className="grid gap-0 sm:grid-cols-2">
                {sections.recognitions.items.map((item, index) => (
                  <div key={item} className="py-4 sm:py-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="shrink-0 text-[9px] font-semibold tracking-[0.12em] text-black/30 sm:text-[10px]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-[14px] font-medium leading-6 text-black/75 sm:text-[15px]">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AboutSection>

            {/* ===================================================
                WHY JOIN VSOP
            =================================================== */}

            <AboutSection
              id={sections.whyJoin.id}
              eyebrow={sections.whyJoin.eyebrow}
              title={sections.whyJoin.title}
              description={sections.whyJoin.description}
            >
              <div>
                {sections.whyJoin.items.map((item, index) => (
                  <div
                    key={item.title}
                    className="grid gap-4 border-b border-black/5 py-6 last:border-b-0 sm:grid-cols-[180px_1fr] sm:items-center sm:gap-8 sm:py-6"
                  >
                    {/* IMAGE */}

                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--school-surface-muted)]">
                      <Image
                        src={`/Images/image${index + 1}.jpg`}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 180px"
                        className="object-cover"
                      />
                    </div>

                    {/* CONTENT */}

                    <div>
                      <h3 className="font-display text-lg font-medium leading-tight tracking-[-0.025em] sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-xl text-[13px] leading-6 text-black/60 sm:text-[14px]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AboutSection>
          </div>
        </div>
      </div>
    </main>
  );
}

/* ===============================================================
   ABOUT SECTION
=============================================================== */

function AboutSection({
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

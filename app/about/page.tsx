"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { aboutContent } from "../../data/content";

export default function AboutPage() {
  const [active, setActive] = useState("overview");

  const { navigation, hero, sections } = aboutContent;

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
    <main className="bg-white text-[#0d0d0d]">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section id="overview" className="scroll-mt-28 border-b border-black/10">
        <div className="mx-auto flex min-h-[58vh] w-full max-w-[1200px] flex-col justify-between px-8 py-28 sm:px-10 sm:py-32 lg:px-12 lg:py-36">
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

              <h1 className="font-display text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.88] tracking-[-0.055em]">
                {hero.title}
                <br />
                <span className="text-black/45">{hero.titleAccent}</span>
              </h1>

              <p className="mt-10 max-w-2xl text-lg leading-8 text-black/55 md:text-xl">
                {hero.description}
              </p>
            </div>
          </div>

          {/* Hero metadata */}
          <div className="mt-20 grid border-t border-black/10 pt-6 sm:grid-cols-2 md:grid-cols-4">
            {hero.metadata.map((item, index) => (
              <div
                key={item.label}
                className={`mt-6 sm:mt-6 md:mt-0 ${
                  index === 0 ? "sm:first:mt-0" : ""
                }`}
              >
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

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="mx-auto w-full max-w-[1200px] px-8 py-20 sm:px-10 md:px-12 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[220px_1fr] lg:gap-24">
          {/* =====================================================
              SIDEBAR
          ===================================================== */}

          <aside className="lg:sticky lg:top-32 lg:h-fit">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/45">
              On this page
            </p>

            <nav className="flex gap-1 overflow-x-auto pb-2 lg:block lg:overflow-visible">
              {navigation.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => goToSection(section.id)}
                  className={`group flex shrink-0 items-center gap-2 border-l px-3 py-2 text-left text-[12px] transition-all lg:w-full ${
                    active === section.id
                      ? "border-black font-semibold text-black"
                      : "border-black/10 text-black/40 hover:border-black/30 hover:text-black"
                  }`}
                >
                  <span>{section.label}</span>

                  {active === section.id && (
                    <ArrowUpRight
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

          <div className="min-w-0 max-w-4xl">
            {/* ===================================================
                01 — HISTORY
            =================================================== */}

            <AboutSection
              id={sections.history.id}
              number={sections.history.number}
              eyebrow={sections.history.eyebrow}
              title={sections.history.title}
              description={sections.history.description}
            >
              <div className="border-t border-black/10">
                {sections.history.items.map((item) => (
                  <div
                    key={item.title}
                    className="grid gap-5 border-b border-black/10 py-10 sm:grid-cols-[220px_1fr] sm:gap-10"
                  >
                    <h3 className="font-display text-2xl font-medium leading-tight tracking-[-0.025em]">
                      {item.title}
                    </h3>

                    <p className="max-w-2xl text-[15px] leading-7 text-black/60">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </AboutSection>

            {/* ===================================================
                02 — MISSION / VISION
            =================================================== */}

            <AboutSection
              id={sections.missionVision.id}
              number={sections.missionVision.number}
              eyebrow={sections.missionVision.eyebrow}
              title={sections.missionVision.title}
              description={sections.missionVision.description}
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40">
                  {sections.missionVision.vision.eyebrow}
                </p>

                <h3 className="mt-4 max-w-3xl font-display text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl">
                  {sections.missionVision.vision.title}
                </h3>

                <div className="mt-14 border-t border-black/10 pt-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40">
                    {sections.missionVision.mission.eyebrow}
                  </p>

                  <p className="mt-5 max-w-3xl text-[17px] leading-8 text-black/65">
                    {sections.missionVision.mission.description}
                  </p>
                </div>

                <div className="mt-14 border-t border-black/10 pt-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40">
                    {sections.missionVision.values.eyebrow}
                  </p>

                  <div className="mt-8 grid gap-px border border-black/10 bg-black/10 sm:grid-cols-3">
                    {sections.missionVision.values.items.map((value) => (
                      <div
                        key={value}
                        className="bg-white p-7 transition-colors hover:bg-black/[0.025]"
                      >
                        <h3 className="font-display text-2xl font-medium tracking-[-0.025em]">
                          {value}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AboutSection>

            {/* ===================================================
                03 — ADMINISTRATION
            =================================================== */}

            <AboutSection
              id={sections.administration.id}
              number={sections.administration.number}
              eyebrow={sections.administration.eyebrow}
              title={sections.administration.title}
              description={sections.administration.description}
            >
              <div className="border-t border-black/10">
                {sections.administration.people.map((person, index) => (
                  <div
                    key={person.name}
                    className="grid gap-4 border-b border-black/10 py-8 sm:grid-cols-[70px_1fr_180px] sm:items-center"
                  >
                    <span className="text-xs text-black/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="font-display text-2xl font-medium tracking-[-0.025em]">
                      {person.name}
                    </h3>

                    <p className="text-sm text-black/50">{person.role}</p>
                  </div>
                ))}
              </div>
            </AboutSection>

            {/* ===================================================
                04 — SCHOOL SEAL
            =================================================== */}

            <AboutSection
              id={sections.schoolSeal.id}
              number={sections.schoolSeal.number}
              eyebrow={sections.schoolSeal.eyebrow}
              title={sections.schoolSeal.title}
              description={sections.schoolSeal.description}
            >
              <div className="grid gap-12 md:grid-cols-[280px_1fr] md:items-start">
                <div className="flex aspect-square items-center justify-center border border-black/10 bg-black/[0.02] p-10">
                  <Image
                    src={sections.schoolSeal.image}
                    alt={sections.schoolSeal.imageAlt}
                    width={220}
                    height={220}
                    className="h-auto w-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="font-display text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl">
                    {sections.schoolSeal.heading}
                  </h3>

                  <p className="mt-6 text-[15px] leading-7 text-black/60">
                    {sections.schoolSeal.text}
                  </p>
                </div>
              </div>
            </AboutSection>

            {/* ===================================================
                05 — RECOGNITIONS
            =================================================== */}

            <AboutSection
              id={sections.recognitions.id}
              number={sections.recognitions.number}
              eyebrow={sections.recognitions.eyebrow}
              title={sections.recognitions.title}
              description={sections.recognitions.description}
            >
              <div>
                <h3 className="font-display text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                  {sections.recognitions.heading}
                </h3>

                <p className="mt-6 max-w-2xl text-[15px] leading-7 text-black/60">
                  {sections.recognitions.text}
                </p>

                <div className="mt-12 grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2">
                  {sections.recognitions.items.map((item) => (
                    <div
                      key={item}
                      className="bg-white p-7 transition-colors hover:bg-black/[0.025]"
                    >
                      <h3 className="font-display text-2xl font-medium tracking-[-0.025em]">
                        {item}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </AboutSection>

            {/* ===================================================
                06 — ACCREDITATIONS
            =================================================== */}

            <AboutSection
              id={sections.accreditations.id}
              number={sections.accreditations.number}
              eyebrow={sections.accreditations.eyebrow}
              title={sections.accreditations.title}
              description={sections.accreditations.description}
            >
              <div>
                <p className="max-w-2xl text-[17px] leading-8 text-black/60">
                  {sections.accreditations.text}
                </p>

                <div className="mt-12 border-t border-black/10">
                  {sections.accreditations.organizations.map(
                    (organization, index) => (
                      <div
                        key={organization}
                        className="flex items-center gap-5 border-b border-black/10 py-7"
                      >
                        <span className="text-xs text-black/35">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="font-display text-xl font-medium tracking-[-0.02em]">
                          {organization}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </AboutSection>

            {/* ===================================================
                07 — FACILITIES
            =================================================== */}

            <AboutSection
              id={sections.facilities.id}
              number={sections.facilities.number}
              eyebrow={sections.facilities.eyebrow}
              title={sections.facilities.title}
              description={sections.facilities.description}
            >
              <div className="grid gap-10 sm:grid-cols-2">
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

                    <h3 className="mt-5 font-display text-2xl font-medium tracking-[-0.025em]">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
            </AboutSection>

            {/* ===================================================
                08 — LINKAGES
            =================================================== */}

            <AboutSection
              id={sections.linkages.id}
              number={sections.linkages.number}
              eyebrow={sections.linkages.eyebrow}
              title={sections.linkages.title}
              description={sections.linkages.description}
            >
              <div className="border-t border-black/10">
                {sections.linkages.organizations.map((organization, index) => (
                  <div
                    key={organization}
                    className="grid gap-4 border-b border-black/10 py-8 sm:grid-cols-[70px_1fr]"
                  >
                    <span className="text-xs font-semibold tracking-[0.14em] text-black/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="font-display text-2xl font-medium tracking-[-0.025em] sm:text-3xl">
                      {organization}
                    </h3>
                  </div>
                ))}
              </div>
            </AboutSection>

            {/* ===================================================
                09 — HYMN
            =================================================== */}

            <AboutSection
              id={sections.hymn.id}
              number={sections.hymn.number}
              eyebrow={sections.hymn.eyebrow}
              title={sections.hymn.title}
              description={sections.hymn.description}
            >
              <div className="max-w-2xl">
                <div className="border-y border-black/10 py-12 text-center">
                  <p className="font-display text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl">
                    {sections.hymn.schoolName}
                  </p>

                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40">
                    {sections.hymn.label}
                  </p>
                </div>

                <div className="mt-10 whitespace-pre-line text-center text-[15px] leading-8 text-black/65">
                  {sections.hymn.lyrics}
                </div>
              </div>
            </AboutSection>

            {/* ===================================================
                10 — WHY JOIN VSOP
            =================================================== */}

            <AboutSection
              id={sections.whyJoin.id}
              number={sections.whyJoin.number}
              eyebrow={sections.whyJoin.eyebrow}
              title={sections.whyJoin.title}
              description={sections.whyJoin.description}
            >
              <div className="border-t border-black/10">
                {sections.whyJoin.items.map((item, index) => (
                  <div
                    key={item.title}
                    className="grid gap-5 border-b border-black/10 py-8 sm:grid-cols-[70px_1fr_1fr] sm:items-start sm:gap-8"
                  >
                    <span className="text-xs font-semibold tracking-[0.14em] text-black/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="font-display text-2xl font-medium tracking-[-0.025em] sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-7 text-black/55">
                      {item.text}
                    </p>
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
================================================================ */

function AboutSection({
  id,
  number,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-black/10 py-14 sm:py-16 md:py-20"
    >
      <div className="grid gap-5 md:grid-cols-[70px_1fr] md:gap-8">
        <span className="text-xs font-semibold tracking-[0.14em] text-black/30">
          {number}
        </span>

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
      </div>

      <div className="mt-12 md:pl-[102px]">{children}</div>
    </section>
  );
}

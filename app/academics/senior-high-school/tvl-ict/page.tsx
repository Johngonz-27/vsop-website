import Layout from "../../../../components/Layout";
import { PageHero } from "../../../../components/Site";
import {
  Monitor,
  Code2,
  Globe,
  Lightbulb,
  Users,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { tvlIctContent } from "../../../../data/content";

const learningIcons = {
  monitor: Monitor,
  "code-2": Code2,
  globe: Globe,
  lightbulb: Lightbulb,
  users: Users,
  briefcase: Briefcase,
};

export default function TVLICTPage() {
  const content = tvlIctContent;

  return (
    <Layout>
      {/* =========================================================
          HERO
      ========================================================= */}
      <PageHero
        label={content.hero.label}
        title={content.hero.title}
        desc={content.hero.desc}
      />

      {/* =========================================================
          01 — OVERVIEW
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1120px] px-5 py-20 md:px-6 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <span className="text-sm font-medium tracking-wide text-[#035921]">
                {content.overview.number} — {content.overview.eyebrow}
              </span>

              <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight text-[#0d0d0d] md:text-4xl">
                {content.overview.title}
              </h2>
            </div>

            <div className="max-w-2xl">
              {content.overview.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-lg leading-8 text-[#0d0d0d]/70 ${
                    index > 0 ? "mt-6" : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          02 — LEARNING AREAS
      ========================================================= */}
      <section className="border-y border-[#bfbd9b]/60 bg-[#f7f8f3]">
        <div className="mx-auto w-full max-w-[1120px] px-5 py-20 md:px-6 md:py-24">
          <div className="mb-12 max-w-2xl">
            <span className="text-sm font-medium tracking-wide text-[#035921]">
              {content.learningAreas.number} — {content.learningAreas.eyebrow}
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0d0d0d] md:text-4xl">
              {content.learningAreas.title}
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#0d0d0d]/65">
              {content.learningAreas.description}
            </p>
          </div>

          <div className="grid border-t border-[#bfbd9b]/60 md:grid-cols-2 lg:grid-cols-3">
            {content.learningAreas.items.map((item, index) => {
              const Icon = learningIcons[item.icon];

              return (
                <div
                  key={item.title}
                  className={`p-8 ${
                    index % 3 !== 0 ? "lg:border-l lg:border-[#bfbd9b]/60" : ""
                  } ${
                    index % 2 !== 0 ? "md:border-l md:border-[#bfbd9b]/60" : ""
                  } ${index >= 3 ? "border-t border-[#bfbd9b]/60" : ""}`}
                >
                  <div className="flex h-11 w-11 items-center justify-center border border-[#035921]/20 text-[#035921]">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-[#0d0d0d]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#0d0d0d]/65">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          03 — PRACTICAL LEARNING
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1120px] px-5 py-20 md:px-6 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={content.practicalLearning.image.src}
                alt={content.practicalLearning.image.alt}
                fill
                className="object-cover"
              />
            </div>

            <div className="max-w-xl">
              <span className="text-sm font-medium tracking-wide text-[#035921]">
                {content.practicalLearning.number} —{" "}
                {content.practicalLearning.eyebrow}
              </span>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0d0d0d] md:text-4xl">
                {content.practicalLearning.title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#0d0d0d]/70">
                {content.practicalLearning.description}
              </p>

              <div className="mt-8 space-y-5">
                {content.practicalLearning.items.map((item) => (
                  <div
                    key={item}
                    className="flex gap-4 border-b border-[#bfbd9b]/50 pb-5"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#08a63f]" />

                    <p className="text-sm leading-7 text-[#0d0d0d]/70">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          04 — SKILLS DEVELOPMENT
      ========================================================= */}
      <section className="border-y border-[#bfbd9b]/60 bg-[#f7f8f3]">
        <div className="mx-auto w-full max-w-[1120px] px-5 py-20 md:px-6 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <span className="text-sm font-medium tracking-wide text-[#035921]">
                {content.skillsDevelopment.number} —{" "}
                {content.skillsDevelopment.eyebrow}
              </span>

              <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight text-[#0d0d0d] md:text-4xl">
                {content.skillsDevelopment.title}
              </h2>
            </div>

            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {content.skillsDevelopment.items.map((item) => (
                <div
                  key={item.title}
                  className="border-t border-[#bfbd9b]/60 pt-5"
                >
                  <h3 className="text-base font-semibold text-[#0d0d0d]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#0d0d0d]/65">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          05 — FUTURE PATHWAYS
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1120px] px-5 py-20 md:px-6 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-medium tracking-wide text-[#035921]">
              {content.futurePathways.number} — {content.futurePathways.eyebrow}
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0d0d0d] md:text-4xl">
              {content.futurePathways.title}
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#0d0d0d]/65">
              {content.futurePathways.description}
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl border border-[#bfbd9b]/60 sm:grid-cols-3">
            {content.futurePathways.items.map((item, index) => (
              <div
                key={item.title}
                className={`p-7 ${
                  index > 0
                    ? "border-t border-[#bfbd9b]/60 sm:border-l sm:border-t-0"
                    : ""
                }`}
              >
                <h3 className="text-base font-semibold text-[#0d0d0d]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#0d0d0d]/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          06 — FOR STUDENTS & FAMILIES
      ========================================================= */}
      <section className="border-y border-[#bfbd9b]/60 bg-[#f7f8f3]">
        <div className="mx-auto w-full max-w-[1120px] px-5 py-20 md:px-6 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center bg-[#edf4e9] text-[#035921]">
              <Users size={21} strokeWidth={1.7} />
            </div>

            <span className="mt-6 block text-sm font-medium tracking-wide text-[#035921]">
              {content.families.number} — {content.families.eyebrow}
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0d0d0d] md:text-4xl">
              {content.families.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#0d0d0d]/65">
              {content.families.description}
            </p>
          </div>

          {/* =====================================================
              ADMISSIONS LINKS
          ===================================================== */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.families.admissionsLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group border border-[#dfe4da] bg-white p-6 transition hover:border-[#035921] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#08a63f]">
                  {item.number}
                </span>

                <h3 className="mt-4 text-base font-semibold text-[#0d0d0d]">
                  {item.title}
                </h3>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#035921]">
                  {item.label}

                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          RELATED PROGRAMS
      ========================================================= */}
      <section className="bg-[#f7f8f3]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24 lg:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#035921]">
                {content.relatedPrograms.eyebrow}
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0d0d0d] sm:text-3xl">
                {content.relatedPrograms.title}
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {content.relatedPrograms.items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group border border-[#dce2d8] bg-white p-7 transition hover:border-[#035921]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#08a63f]">
                  {item.eyebrow}
                </p>

                <h3 className="mt-3 text-xl font-semibold text-[#0d0d0d]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687068]">
                  {item.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#035921]">
                  {item.label}

                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

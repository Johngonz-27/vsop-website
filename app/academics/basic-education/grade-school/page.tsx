import Layout from "../../../../components/Layout";
import { PageHero } from "../../../../components/Site";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Heart,
  Lightbulb,
  Users,
  PenLine,
  Target,
} from "lucide-react";
import { gradeSchoolContent } from "../../../../data/content";

const academicIcons = {
  "book-open": BookOpen,
  target: Target,
  lightbulb: Lightbulb,
  users: Users,
  "pen-line": PenLine,
  heart: Heart,
};

export default function GradeSchool() {
  const content = gradeSchoolContent;

  return (
    <Layout>
      {/* =========================================================
          PAGE HERO
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
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#035921]">
                {content.overview.number} — {content.overview.eyebrow}
              </p>

              <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-tight text-[#0d0d0d] sm:text-4xl">
                {content.overview.title}
              </h2>
            </div>

            <div className="max-w-2xl">
              {content.overview.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`text-base leading-8 text-[#5f665f] ${
                    index > 0 ? "mt-5" : ""
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
          02 — ACADEMIC FOUNDATION
      ========================================================= */}
      <section className="bg-[#f7f8f3]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#035921]">
              {content.academicFoundation.number} —{" "}
              {content.academicFoundation.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0d0d0d] sm:text-4xl">
              {content.academicFoundation.title}
            </h2>

            <p className="mt-5 text-base leading-7 text-[#626862]">
              {content.academicFoundation.description}
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.academicFoundation.items.map((item) => {
              const Icon =
                academicIcons[item.icon as keyof typeof academicIcons];

              return (
                <div
                  key={item.title}
                  className="border border-[#dfe4da] bg-white p-7 sm:p-8"
                >
                  <div className="flex h-10 w-10 items-center justify-center bg-[#edf4e9] text-[#035921]">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-[#0d0d0d]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#687068]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          03 — LEARNING EXPERIENCE
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 md:py-24 lg:grid-cols-2 lg:items-center lg:px-10">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#e5e9df]">
            <Image
              src={content.learningExperience.image.src}
              alt={content.learningExperience.image.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div className="lg:pl-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#035921]">
              {content.learningExperience.number} —{" "}
              {content.learningExperience.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0d0d0d] sm:text-4xl">
              {content.learningExperience.title}
            </h2>

            <p className="mt-5 text-base leading-8 text-[#626862]">
              {content.learningExperience.description}
            </p>

            <div className="mt-8 space-y-5">
              {content.learningExperience.items.map((item, index) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#edf4e9] text-xs font-semibold text-[#035921]">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-[#0d0d0d]">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-[#697069]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          04 — STUDENT DEVELOPMENT
      ========================================================= */}
      <section className="bg-[#f7f8f3]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#035921]">
                {content.studentDevelopment.number} —{" "}
                {content.studentDevelopment.eyebrow}
              </p>

              <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight text-[#0d0d0d] sm:text-4xl">
                {content.studentDevelopment.title}
              </h2>

              <p className="mt-5 max-w-md text-base leading-8 text-[#626862]">
                {content.studentDevelopment.description}
              </p>
            </div>

            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {content.studentDevelopment.items.map((item) => (
                <div
                  key={item.title}
                  className="border-t border-[#d9dfd5] pt-5"
                >
                  <h3 className="font-semibold text-[#0d0d0d]">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#687068]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          05 — CLASSROOM ENVIRONMENT
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="lg:pr-8">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#035921]">
                {content.classroomEnvironment.number} —{" "}
                {content.classroomEnvironment.eyebrow}
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0d0d0d] sm:text-4xl">
                {content.classroomEnvironment.title}
              </h2>

              {content.classroomEnvironment.paragraphs.map(
                (paragraph, index) => (
                  <p
                    key={paragraph}
                    className={`text-base leading-8 text-[#626862] ${
                      index > 0 ? "mt-5" : "mt-5"
                    }`}
                  >
                    {paragraph}
                  </p>
                ),
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {content.classroomEnvironment.items.map((item, index) => (
                <div
                  key={item}
                  className="border border-[#dfe4da] bg-[#f7f8f3] p-6"
                >
                  <span className="text-sm font-semibold text-[#08a63f]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-4 text-sm font-medium leading-6 text-[#303630]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          06 — STUDENT JOURNEY
      ========================================================= */}
      <section className="bg-[#035921]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#b8d7b7]">
                {content.studentJourney.number} —{" "}
                {content.studentJourney.eyebrow}
              </p>

              <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {content.studentJourney.title}
              </h2>

              <p className="mt-5 max-w-md text-base leading-8 text-white/70">
                {content.studentJourney.description}
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {content.studentJourney.items.map((item) => (
                <div
                  key={item.number}
                  className="border-t border-white/20 pt-5"
                >
                  <span className="text-sm font-semibold text-[#b8d7b7]">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          07 — FOR FAMILIES
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center bg-[#edf4e9] text-[#035921]">
              <Users size={21} strokeWidth={1.7} />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-[#035921]">
              {content.families.number} — {content.families.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0d0d0d] sm:text-4xl">
              {content.families.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#626862]">
              {content.families.description}
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.families.admissionsLinks.map((item) => (
              <Link
                key={item.number}
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
                  Learn more
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
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#035921]">
              {content.relatedPrograms.eyebrow}
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0d0d0d] sm:text-3xl">
              {content.relatedPrograms.title}
            </h2>
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

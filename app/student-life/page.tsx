import Layout from "../../components/Layout";
import { PageHero } from "../../components/Hero";
import { CTA } from "../../components/CTA";
import { FeatureCard } from "../../components/FeatureCard";
import { studentLifeContent } from "../../data/content";

export default function StudentLife() {
  const { hero, experience, community, development } = studentLifeContent;

  return (
    <Layout>
      {/* =========================================================
          HERO
      ========================================================= */}
      <PageHero
        label={hero.label}
        title={hero.title}
        description={hero.description}
      />

      {/* =========================================================
          STUDENT LIFE AREAS
      ========================================================= */}
      <section className="section">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow">{experience.eyebrow}</div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0d0d0d] sm:text-4xl">
              {experience.title}
            </h2>

            <p className="mt-5 text-base leading-7 text-black/60">
              {experience.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {experience.areas.map((area) => (
              <FeatureCard
                key={area.title}
                title={area.title}
                text={area.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          COMMUNITY
      ========================================================= */}
      <section className="section bg-[#f7f3ea]">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="eyebrow">{community.eyebrow}</div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0d0d0d] sm:text-4xl">
                {community.title}
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-black/65">
              {community.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LEADERSHIP & DEVELOPMENT
      ========================================================= */}
      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <div className="eyebrow">{development.eyebrow}</div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0d0d0d] sm:text-4xl">
                {development.title}
              </h2>
            </div>

            <div className="space-y-8">
              {development.areas.map((area) => (
                <div
                  key={area.title}
                  className="border-t border-[#bfbd9b] pt-5"
                >
                  <h3 className="text-lg font-semibold text-[#0d0d0d]">
                    {area.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-black/60">
                    {area.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <CTA />
    </Layout>
  );
}

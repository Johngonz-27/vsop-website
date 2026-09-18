import Layout from "../../components/Layout";
import { PageHero, CTA, FeatureCard } from "../../components/Site";
import { CalendarDays } from "lucide-react";
import { newsContent } from "../../data/content";

export default function News() {
  const { hero, latestNews, schoolInformation, events, moreStories } =
    newsContent;

  return (
    <Layout>
      {/* =========================================================
          HERO
      ========================================================= */}
      <PageHero label={hero.label} title={hero.title} desc={hero.description} />

      {/* =========================================================
          LATEST NEWS
      ========================================================= */}
      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <div className="eyebrow">{latestNews.eyebrow}</div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0d0d0d] sm:text-4xl">
                {latestNews.title}
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-black/60">
                {latestNews.description}
              </p>
            </div>

            <div className="divide-y divide-[#bfbd9b]/70 border-t border-[#bfbd9b]/70">
              {latestNews.posts.map((post) => (
                <article key={post.title} className="group py-7 first:pt-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#035921]">
                        {post.category}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#0d0d0d]">
                        {post.title}
                      </h3>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-black/55">
                        {post.text}
                      </p>
                    </div>

                    <a
                      href={post.href}
                      className="shrink-0 text-sm font-medium text-[#035921] transition-opacity hover:opacity-60"
                    >
                      Read more
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SCHOOL INFORMATION
      ========================================================= */}
      <section className="section bg-[#f7f3ea]">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow">{schoolInformation.eyebrow}</div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0d0d0d] sm:text-4xl">
              {schoolInformation.title}
            </h2>

            <p className="mt-5 text-base leading-7 text-black/60">
              {schoolInformation.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {schoolInformation.items.map((item) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          UPCOMING EVENTS
      ========================================================= */}
      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <div className="eyebrow">{events.eyebrow}</div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0d0d0d] sm:text-4xl">
                {events.title}
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-black/60">
                {events.description}
              </p>
            </div>

            <div className="divide-y divide-[#bfbd9b]/70 border-t border-[#bfbd9b]/70">
              {events.items.map((event) => (
                <div key={event.title} className="flex gap-5 py-6 sm:gap-7">
                  <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center border border-[#bfbd9b] bg-[#f7f3ea] text-[#035921]">
                    <span className="text-xl font-semibold leading-none">
                      {event.date}
                    </span>

                    <span className="mt-1 text-[9px] font-semibold tracking-[0.16em]">
                      {event.month}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold tracking-tight text-[#0d0d0d]">
                        {event.title}
                      </h3>

                      <CalendarDays
                        size={18}
                        strokeWidth={1.6}
                        className="mt-0.5 shrink-0 text-[#035921]"
                      />
                    </div>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-black/55">
                      {event.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MORE STORIES
      ========================================================= */}
      <section className="section bg-[#f7f3ea]">
        <div className="container">
          <div className="mb-12">
            <div className="eyebrow">{moreStories.eyebrow}</div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0d0d0d] sm:text-4xl">
              {moreStories.title}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {moreStories.posts.map((post) => (
              <FeatureCard
                key={post.title}
                title={post.title}
                text={post.text}
              />
            ))}
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

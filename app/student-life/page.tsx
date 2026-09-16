import Layout from "../../components/Layout";
import { PageHero } from "../../components/Hero";
import { CTA } from "../../components/CTA";
import { FeatureCard } from "../../components/FeatureCard";

export default function StudentLife() {
  return (
    <Layout>
      <PageHero
        label="Student Life"
        title="School is more than the school day."
        description="A vibrant student experience gives learners opportunities to discover interests, build friendships, lead, create, compete, serve, and belong."
      />

      <section className="section">
        <div className="container grid gap-6 md:grid-cols-3">
          <FeatureCard
            title="Clubs & Activities"
            text="Sample offerings across arts, technology, reading, science, entrepreneurship, and student leadership."
          />

          <FeatureCard
            title="Arts & Creativity"
            text="Spaces for music, visual arts, performance, design, making, and creative expression."
          />

          <FeatureCard
            title="Sports & Wellness"
            text="Movement, teamwork, healthy routines, and opportunities to discover new sports."
          />
        </div>
      </section>

      <section className="section bg-[#f7f3ea]">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <div className="eyebrow">Community</div>

            <h2 className="serif mt-4 text-5xl">Find your people.</h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-black/65">
            <p>
              From morning greetings to school events, the student experience is
              shaped by small moments of connection.
            </p>

            <p>
              Families, teachers, and students work together to create a
              respectful, welcoming environment where everyone can participate.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </Layout>
  );
}

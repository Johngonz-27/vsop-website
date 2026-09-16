import { Layout, CTA } from "../../components";
import { PageHero } from "../../components/Hero";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";

export default function Admissions() {
  return (
    <Layout>
      <PageHero
        label="Admissions"
        title="A simple first step."
        desc="This demo admissions page is structured to guide families from initial inquiry to application. Replace the sample requirements and dates with official information."
      />

      {/* Admissions Steps */}
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-4">
          {[
            [
              "01",
              "Inquire",
              "Tell us about your child and what you are looking for.",
            ],
            [
              "02",
              "Visit",
              "Explore the campus and meet the school community.",
            ],
            [
              "03",
              "Apply",
              "Complete the application and submit required documents.",
            ],
            ["04", "Join", "Receive your enrollment guidance and next steps."],
          ].map(([number, title, text]) => (
            <div className="card p-7" key={number}>
              <div className="text-sm font-bold text-[#d9b504]">{number}</div>

              <h3 className="sans-serif mt-10 text-[20px] font-semibold leading-[1.2] tracking-[-0.02em] md:text-[24px]">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/60">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className="section bg-[#f7f8f6]">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <div className="eyebrow">Sample Requirements</div>

            <h2 className="sans-serif mt-4 text-[28px] font-medium leading-tight tracking-[-0.03em] md:text-[40px]">
              What families may need.
            </h2>
          </div>

          <ul className="space-y-4 text-base md:text-lg">
            {[
              "Completed application form",
              "Previous school records, when applicable",
              "Birth certificate or equivalent school record",
              "Student and parent/guardian interview",
              "Assessment or placement activity, if required",
            ].map((item) => (
              <li className="border-b border-black/10 pb-4" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section">
        <div className="container">
          <div className="bg-[#035921] p-8 text-white sm:p-10 md:p-16">
            <div className="eyebrow">Ready to Begin?</div>

            <h2 className="sans-serif mt-4 max-w-2xl text-[32px] font-medium leading-[1.15] tracking-[-0.03em] sm:text-[40px] md:text-[46px]">
              Start with a conversation.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 md:text-base">
              Our admissions team is ready to answer questions and help families
              understand the next step.
            </p>

            <Button href="/contact" variant="light" size="md" className="mt-8">
              Send an Inquiry
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      <CTA />
    </Layout>
  );
}

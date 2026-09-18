import Layout from "../../components/Layout";
import { PageHero } from "../../components/Site";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { contactContent } from "../../data/content";

export default function Contact() {
  const { hero, contactInformation, form } = contactContent;

  const contactIcons = {
    location: MapPin,
    phone: Phone,
    email: Mail,
  };

  return (
    <Layout>
      {/* =====================================================
          HERO
      ===================================================== */}

      <PageHero label={hero.label} title={hero.title} desc={hero.description} />

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section className="section">
        <div className="container grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          {/* =================================================
              CONTACT INFORMATION
          ================================================= */}

          <div className="space-y-10">
            {contactInformation.map((item) => {
              const Icon = contactIcons[item.type as keyof typeof contactIcons];

              return (
                <div key={item.type}>
                  <div className="eyebrow">{item.label}</div>

                  <p className="mt-3 flex items-center gap-3 text-lg">
                    <Icon
                      size={20}
                      strokeWidth={1.7}
                      className="shrink-0 text-[var(--darkgreen)]"
                    />
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>

          {/* =================================================
              CONTACT FORM
          ================================================= */}

          <form className="border border-black/10 bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.06)] md:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              {/* NAME */}

              <label className="text-sm font-semibold">
                {form.fields.name.label}

                <input
                  type={form.fields.name.type}
                  name={form.fields.name.name}
                  placeholder={form.fields.name.placeholder}
                  className="mt-2 w-full border border-black/10 bg-white p-3 font-normal outline-none transition-colors focus:border-[var(--darkgreen)]"
                />
              </label>

              {/* EMAIL */}

              <label className="text-sm font-semibold">
                {form.fields.email.label}

                <input
                  type={form.fields.email.type}
                  name={form.fields.email.name}
                  placeholder={form.fields.email.placeholder}
                  className="mt-2 w-full border border-black/10 bg-white p-3 font-normal outline-none transition-colors focus:border-[var(--darkgreen)]"
                />
              </label>
            </div>

            {/* SUBJECT */}

            <label className="mt-5 block text-sm font-semibold">
              {form.fields.subject.label}

              <input
                type={form.fields.subject.type}
                name={form.fields.subject.name}
                placeholder={form.fields.subject.placeholder}
                className="mt-2 w-full border border-black/10 bg-white p-3 font-normal outline-none transition-colors focus:border-[var(--darkgreen)]"
              />
            </label>

            {/* MESSAGE */}

            <label className="mt-5 block text-sm font-semibold">
              {form.fields.message.label}

              <textarea
                name={form.fields.message.name}
                placeholder={form.fields.message.placeholder}
                className="mt-2 min-h-40 w-full resize-y border border-black/10 bg-white p-3 font-normal outline-none transition-colors focus:border-[var(--darkgreen)]"
              />
            </label>

            {/* SUBMIT */}

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-3 bg-[var(--darkgreen)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--green)]"
            >
              {form.submitLabel}

              <ArrowRight size={16} strokeWidth={1.7} />
            </button>

            <p className="mt-4 text-xs leading-5 text-black/45">{form.note}</p>
          </form>
        </div>
      </section>
    </Layout>
  );
}

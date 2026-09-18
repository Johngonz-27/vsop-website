import Layout from "../../../components/Layout";
import { PageHero } from "../../../components/Site";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  GraduationCap,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { applyNowContent } from "../../../data/content";

const inputClass =
  "w-full border border-black/10 bg-white px-4 py-3 text-sm text-[#0d0d0d] outline-none transition-colors placeholder:text-black/35 focus:border-[var(--darkgreen)]";

const labelClass = "mb-2 block text-sm font-medium text-[#0d0d0d]";

const sectionTitleClass =
  "border-b border-black/10 pb-4 text-lg font-semibold text-[#0d0d0d]";

const icons = {
  graduation: GraduationCap,
  file: FileText,
  wallet: Wallet,
  check: CheckCircle2,
};

export default function ApplyNowPage() {
  const { hero, form, sidebar } = applyNowContent;

  return (
    <Layout>
      {/* =========================================================
          HERO
      ========================================================= */}

      <PageHero label={hero.label} title={hero.title} desc={hero.description} />

      {/* =========================================================
          APPLICATION
      ========================================================= */}

      <section className="bg-white">
        <div className="container py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.45fr_0.55fr] lg:gap-14">
            {/* =================================================
                FORM CARD
            ================================================= */}

            <div className="border border-black/10 bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.06)] md:p-10">
              {/* FORM INTRO */}

              <div className="mb-10">
                <div className="eyebrow">{form.eyebrow}</div>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0d0d0d]">
                  {form.intro.title}
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-[#0d0d0d]/60">
                  {form.intro.description}
                </p>
              </div>

              <form className="space-y-12">
                {/* =================================================
                    STUDENT INFORMATION
                ================================================= */}

                <div>
                  <h3 className={sectionTitleClass}>
                    {form.sections.student.title}
                  </h3>

                  <div className="mt-7 grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor={form.sections.student.fields.firstName.id}
                        className={labelClass}
                      >
                        {form.sections.student.fields.firstName.label}
                      </label>

                      <input
                        id={form.sections.student.fields.firstName.id}
                        name={form.sections.student.fields.firstName.name}
                        type={form.sections.student.fields.firstName.type}
                        required={
                          form.sections.student.fields.firstName.required
                        }
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor={form.sections.student.fields.middleName.id}
                        className={labelClass}
                      >
                        {form.sections.student.fields.middleName.label}
                      </label>

                      <input
                        id={form.sections.student.fields.middleName.id}
                        name={form.sections.student.fields.middleName.name}
                        type={form.sections.student.fields.middleName.type}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor={form.sections.student.fields.lastName.id}
                        className={labelClass}
                      >
                        {form.sections.student.fields.lastName.label}
                      </label>

                      <input
                        id={form.sections.student.fields.lastName.id}
                        name={form.sections.student.fields.lastName.name}
                        type={form.sections.student.fields.lastName.type}
                        required={
                          form.sections.student.fields.lastName.required
                        }
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor={form.sections.student.fields.birthDate.id}
                        className={labelClass}
                      >
                        {form.sections.student.fields.birthDate.label}
                      </label>

                      <input
                        id={form.sections.student.fields.birthDate.id}
                        name={form.sections.student.fields.birthDate.name}
                        type={form.sections.student.fields.birthDate.type}
                        required={
                          form.sections.student.fields.birthDate.required
                        }
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor={form.sections.student.fields.gender.id}
                        className={labelClass}
                      >
                        {form.sections.student.fields.gender.label}
                      </label>

                      <select
                        id={form.sections.student.fields.gender.id}
                        name={form.sections.student.fields.gender.name}
                        required={form.sections.student.fields.gender.required}
                        defaultValue=""
                        className={inputClass}
                      >
                        <option value="" disabled>
                          {form.sections.student.fields.gender.placeholder}
                        </option>

                        {form.sections.student.fields.gender.options.map(
                          (option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ),
                        )}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor={form.sections.student.fields.gradeLevel.id}
                        className={labelClass}
                      >
                        {form.sections.student.fields.gradeLevel.label}
                      </label>

                      <select
                        id={form.sections.student.fields.gradeLevel.id}
                        name={form.sections.student.fields.gradeLevel.name}
                        required={
                          form.sections.student.fields.gradeLevel.required
                        }
                        defaultValue=""
                        className={inputClass}
                      >
                        <option value="" disabled>
                          {form.sections.student.fields.gradeLevel.placeholder}
                        </option>

                        {form.sections.student.fields.gradeLevel.options.map(
                          (option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ),
                        )}
                      </select>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    PROGRAM PREFERENCE
                ================================================= */}

                <div>
                  <h3 className={sectionTitleClass}>
                    {form.sections.program.title}
                  </h3>

                  <div className="mt-7">
                    <label
                      htmlFor={form.sections.program.field.id}
                      className={labelClass}
                    >
                      {form.sections.program.field.label}
                    </label>

                    <select
                      id={form.sections.program.field.id}
                      name={form.sections.program.field.name}
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="" disabled>
                        {form.sections.program.field.placeholder}
                      </option>

                      {form.sections.program.field.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>

                    <p className="mt-2 text-xs leading-5 text-[#0d0d0d]/45">
                      {form.sections.program.field.note}
                    </p>
                  </div>
                </div>

                {/* =================================================
                    PARENT / GUARDIAN
                ================================================= */}

                <div>
                  <h3 className={sectionTitleClass}>
                    {form.sections.guardian.title}
                  </h3>

                  <div className="mt-7 grid gap-6 md:grid-cols-2">
                    {Object.values(form.sections.guardian.fields).map(
                      (field) => (
                        <div key={field.id}>
                          <label htmlFor={field.id} className={labelClass}>
                            {field.label}
                          </label>

                          <input
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            required={field.required}
                            className={inputClass}
                          />
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* =================================================
                    ADDRESS
                ================================================= */}

                <div>
                  <h3 className={sectionTitleClass}>
                    {form.sections.address.title}
                  </h3>

                  <div className="mt-7 space-y-6">
                    <div>
                      <label
                        htmlFor={form.sections.address.fields.address.id}
                        className={labelClass}
                      >
                        {form.sections.address.fields.address.label}
                      </label>

                      <textarea
                        id={form.sections.address.fields.address.id}
                        name={form.sections.address.fields.address.name}
                        rows={form.sections.address.fields.address.rows}
                        required={form.sections.address.fields.address.required}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                      {[
                        form.sections.address.fields.city,
                        form.sections.address.fields.province,
                        form.sections.address.fields.zip,
                      ].map((field) => (
                        <div key={field.id}>
                          <label htmlFor={field.id} className={labelClass}>
                            {field.label}
                          </label>

                          <input
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            required={field.required}
                            className={inputClass}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* =================================================
                    PREVIOUS SCHOOL
                ================================================= */}

                <div>
                  <h3 className={sectionTitleClass}>
                    {form.sections.previousSchool.title}
                  </h3>

                  <div className="mt-7 grid gap-6 md:grid-cols-2">
                    {Object.values(form.sections.previousSchool.fields).map(
                      (field) => (
                        <div key={field.id}>
                          <label htmlFor={field.id} className={labelClass}>
                            {field.label}
                          </label>

                          <input
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            className={inputClass}
                          />
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* =================================================
                    ADDITIONAL INFORMATION
                ================================================= */}

                <div>
                  <h3 className={sectionTitleClass}>
                    {form.sections.additional.title}
                  </h3>

                  <div className="mt-7">
                    <label
                      htmlFor={form.sections.additional.field.id}
                      className={labelClass}
                    >
                      {form.sections.additional.field.label}
                    </label>

                    <textarea
                      id={form.sections.additional.field.id}
                      name={form.sections.additional.field.name}
                      rows={form.sections.additional.field.rows}
                      placeholder={form.sections.additional.field.placeholder}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>

                {/* =================================================
                    CONSENT
                ================================================= */}

                <div className="border border-black/10 bg-[#f7f8f3] p-5">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      className="mt-1 h-4 w-4 accent-[#035921]"
                    />

                    <span className="text-sm leading-6 text-[#0d0d0d]/60">
                      {form.consent}
                    </span>
                  </label>
                </div>

                {/* =================================================
                    SUBMIT
                ================================================= */}

                <div className="flex flex-col gap-4 border-t border-black/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-xs leading-5 text-[#0d0d0d]/45">
                    {form.reviewNote}
                  </p>

                  <button
                    type="submit"
                    className="inline-flex shrink-0 items-center justify-center gap-3 bg-[#035921] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#08a63f]"
                  >
                    {form.submitLabel}

                    <ArrowRight size={17} strokeWidth={1.8} />
                  </button>
                </div>
              </form>
            </div>

            {/* =================================================
                ADMISSIONS SIDEBAR
            ================================================= */}

            <aside>
              <div className="border border-black/10 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                <div className="p-6 md:p-7">
                  <div className="eyebrow">{sidebar.eyebrow}</div>

                  <h2 className="mt-3 text-xl font-semibold text-[#0d0d0d]">
                    {sidebar.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-[#0d0d0d]/55">
                    {sidebar.description}
                  </p>
                </div>

                <div className="border-t border-black/10">
                  {sidebar.links.map((item, index) => {
                    const Icon = icons[item.icon as keyof typeof icons];

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`group flex items-center gap-4 p-6 transition-colors hover:bg-[#f7f8f3] ${
                          index !== sidebar.links.length - 1
                            ? "border-b border-black/10"
                            : ""
                        }`}
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#035921]/15 text-[#035921]">
                          <Icon size={19} strokeWidth={1.7} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm font-semibold text-[#0d0d0d]">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-xs leading-5 text-[#0d0d0d]/50">
                            {item.description}
                          </p>
                        </div>

                        <ArrowRight
                          size={17}
                          className="shrink-0 text-[#035921] transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 border-t border-black/10 pt-6">
                <p className="text-sm leading-6 text-[#0d0d0d]/55">
                  {sidebar.contact.question}
                </p>

                <Link
                  href={sidebar.contact.href}
                  className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-[#035921] transition-colors hover:text-[#08a63f]"
                >
                  {sidebar.contact.label}
                  <ArrowRight size={15} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}

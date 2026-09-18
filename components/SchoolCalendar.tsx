"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { calendarContent, monthlyContent } from "@/data/content";

export function SchoolCalendar() {
  const [activeMonth, setActiveMonth] = useState<number | null>(null);
  const [currentMonth, setCurrentMonth] = useState<number | null>(null);

  useEffect(() => {
    const now = new Date();

    const index = calendarContent.months.findIndex((month) => {
      const date = new Date(`${month.month} 1, ${month.year}`);

      return (
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear()
      );
    });

    const defaultMonth = index >= 0 ? index : 0;

    setActiveMonth(defaultMonth);
    setCurrentMonth(now.getMonth() + 1);
  }, []);

  if (activeMonth === null || currentMonth === null) {
    return null;
  }

  const calendarMonth = calendarContent.months[activeMonth];

  const monthly = monthlyContent[currentMonth as keyof typeof monthlyContent];

  const hasPrevious = activeMonth > 0;
  const hasNext = activeMonth < calendarContent.months.length - 1;

  return (
    <section className="bg-[var(--school-surface-muted)] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1160px]">
        {/* SECTION HEADER */}
        <div className="mb-6 max-w-2xl">
          <div className="mb-3 text-[var(--school-text)]">
            <p className="text-[12px] font-bold uppercase tracking-[0.05em]">
              {calendarContent.eyebrow}
            </p>
          </div>

          <h2 className="text-[28px] font-extrabold leading-[0.95] tracking-[-0.05em] text-[var(--school-primary)] sm:text-[40px]">
            {calendarContent.title}
          </h2>

          <p className="mt-4 max-w-lg text-[16px] leading-6 text-[var(--school-text-muted)] sm:text-[18px] sm:leading-7">
            {calendarContent.description}
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
          {/* LEFT — CALENDAR */}
          <div className="min-w-0">
            {/* MONTH SELECTOR */}
            <div className="mb-6 flex items-center justify-between border border-[var(--school-border)] bg-[var(--school-surface)] px-4 py-3 sm:px-5">
              <button
                type="button"
                onClick={() =>
                  hasPrevious && setActiveMonth((prev) => (prev ?? 0) - 1)
                }
                disabled={!hasPrevious}
                aria-label={calendarContent.previousLabel}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  border
                  border-[var(--school-border)]
                  text-[var(--school-primary)]
                  transition-colors
                  hover:bg-[var(--school-primary)]
                  hover:text-[var(--school-surface)]
                  disabled:pointer-events-none
                  disabled:opacity-20
                "
              >
                <ArrowLeft size={16} />
              </button>

              <div className="text-center">
                <p className="text-[12px] font-bold uppercase tracking-[0.05em] text-[var(--school-text-muted)]">
                  {calendarMonth.year}
                </p>

                <h3 className="mt-1 text-[20px] font-extrabold tracking-[-0.04em] text-[var(--school-text)] sm:text-[24px]">
                  {calendarMonth.month}
                </h3>
              </div>

              <button
                type="button"
                onClick={() =>
                  hasNext && setActiveMonth((prev) => (prev ?? 0) + 1)
                }
                disabled={!hasNext}
                aria-label={calendarContent.nextLabel}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  border
                  border-[var(--school-border)]
                  text-[var(--school-primary)]
                  transition-colors
                  hover:bg-[var(--school-primary)]
                  hover:text-[var(--school-surface)]
                  disabled:pointer-events-none
                  disabled:opacity-20
                "
              >
                <ArrowRight size={16} />
              </button>
            </div>

            {/* EVENT LIST */}
            <div className="overflow-hidden border border-[var(--school-border)] bg-[var(--school-surface)]">
              {calendarMonth.events.map((event, index) => (
                <div
                  key={`${event.date}-${event.title}`}
                  className={`
                    group
                    grid
                    grid-cols-[52px_1fr]
                    gap-4
                    px-5
                    py-5
                    transition-colors
                    hover:bg-[var(--school-surface-muted)]
                    sm:grid-cols-[60px_1fr_auto]
                    sm:items-center
                    sm:px-6
                    ${
                      index !== calendarMonth.events.length - 1
                        ? "border-b border-[var(--school-border)]"
                        : ""
                    }
                  `}
                >
                  {/* DATE */}
                  <div className="flex flex-col items-center text-center">
                    <span className="text-[20px] font-extrabold leading-none tracking-[-0.05em] text-[var(--school-secondary)] sm:text-[24px]">
                      {event.date}
                    </span>

                    <span className="mt-1 text-[12px] font-bold uppercase tracking-[0.05em] text-[var(--school-text-muted)]">
                      {event.day.slice(0, 3)}
                    </span>
                  </div>

                  {/* TITLE */}
                  <div className="min-w-0">
                    <h4 className="text-[14px] font-bold leading-5 text-[var(--school-text)]">
                      {event.title}
                    </h4>

                    <span className="mt-2 inline-flex bg-[var(--school-secondary-soft)]/30 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.08em] text-[var(--school-text-muted)] sm:hidden">
                      {event.category}
                    </span>
                  </div>

                  {/* DESKTOP CATEGORY */}
                  <span className="hidden px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.05em] text-[var(--school-text-muted)] sm:inline-flex">
                    {event.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — CURRENT MONTH FEATURE */}
          <div className="min-w-0">
            {monthly && (
              <div className="overflow-hidden border border-[var(--school-border)] bg-[var(--school-surface)]">
                {/* IMAGE BLOCK */}
                <div className="group relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={monthly.image}
                    alt={monthly.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="
                      object-cover
                      transition-transform
                      duration-[1200ms]
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:scale-105
                    "
                  />

                  {/* BLACK IMAGE GRADIENT */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[var(--school-text)]/75
                      via-[var(--school-text)]/20
                      to-[var(--school-text)]/5
                      transition-opacity
                      duration-[700ms]
                      ease-out
                      group-hover:opacity-90
                    "
                  />

                  {/* FEATURED LABEL */}
                  <div className="absolute left-4 top-4 bg-[var(--school-surface)]/95 px-3 py-1.5 backdrop-blur-sm">
                    <p className="text-[12px] font-bold uppercase tracking-[0.05em] text-[var(--school-text)]">
                      {calendarContent.featuredLabel}
                    </p>
                  </div>
                </div>

                {/* TEXT BLOCK */}
                <div className="p-6 sm:p-7 lg:p-8">
                  <p className="text-[12px] font-bold uppercase tracking-[0.05em] text-[var(--school-text)]">
                    {monthly.month}
                  </p>

                  <h3 className="mt-4 max-w-xl text-[20px] font-extrabold leading-[1.05] tracking-[-0.045em] text-[var(--school-primary)] sm:text-[24px]">
                    {monthly.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-[14px] leading-6 text-[var(--school-text-muted)]">
                    {monthly.description}
                  </p>

                  {/* CONTENT-DRIVEN LINK */}
                  <div className="mt-5 flex">
                    <Link
                      href={monthly.button.href}
                      className="
                        text-[12px]
                        font-semibold
                        text-[var(--school-text)]
                        !underline
                        decoration-1
                        underline-offset-4
                        transition-opacity
                        hover:opacity-50
                      "
                    >
                      {monthly.button.label}
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

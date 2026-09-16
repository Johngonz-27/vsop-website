"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

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

  /*
    The featured section uses the actual current calendar month.

    June = 6
    July = 7
    ...
    December = 12
    January = 1
    ...
    May = 5
  */
  const monthly = monthlyContent[currentMonth as keyof typeof monthlyContent];

  const hasPrevious = activeMonth > 0;
  const hasNext = activeMonth < calendarContent.months.length - 1;

  return (
    <section className="bg-[#f5f6f2] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-[1160px]">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="mb-12 max-w-2xl lg:mb-16">
          <div className="mb-4 flex items-center gap-2 text-[#035921]">
            <CalendarDays size={15} strokeWidth={2} />

            <p className="text-[10px] font-bold uppercase tracking-[0.16em]">
              {calendarContent.eyebrow}
            </p>
          </div>

          <h2 className="text-[34px] font-extrabold leading-[0.95] tracking-[-0.05em] text-[#0d0d0d] sm:text-[44px] lg:text-[52px]">
            {calendarContent.title}
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-6 text-[#666] sm:text-[15px]">
            {calendarContent.description}
          </p>
        </div>

        {/* =====================================================
            MAIN GRID
        ===================================================== */}

        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* ===================================================
              LEFT — CALENDAR
          =================================================== */}

          <div className="min-w-0">
            {/* MONTH SELECTOR */}

            <div className="mb-6 flex items-center justify-between border border-[#d9dacd] bg-white px-4 py-3 sm:px-5">
              <button
                type="button"
                onClick={() =>
                  hasPrevious && setActiveMonth((prev) => (prev ?? 0) - 1)
                }
                disabled={!hasPrevious}
                aria-label={calendarContent.previousLabel}
                className="
                  flex h-10 w-10
                  items-center justify-center
                  border border-[#e1e2d9]
                  text-[#035921]
                  transition-all
                  hover:bg-[#035921]
                  hover:text-white
                  disabled:pointer-events-none
                  disabled:opacity-20
                "
              >
                <ArrowLeft size={16} />
              </button>

              <div className="text-center">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#999]">
                  {calendarMonth.year}
                </p>

                <h3 className="mt-1 text-xl font-extrabold tracking-[-0.04em] text-[#0d0d0d]">
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
                  flex h-10 w-10
                  items-center justify-center
                  border border-[#e1e2d9]
                  text-[#035921]
                  transition-all
                  hover:bg-[#035921]
                  hover:text-white
                  disabled:pointer-events-none
                  disabled:opacity-20
                "
              >
                <ArrowRight size={16} />
              </button>
            </div>

            {/* EVENT LIST */}

            <div className="overflow-hidden border border-[#d9dacd] bg-white">
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
                    hover:bg-[#fafbf8]
                    sm:grid-cols-[60px_1fr_auto]
                    sm:items-center
                    sm:gap-5
                    sm:px-6
                    ${
                      index !== calendarMonth.events.length - 1
                        ? "border-b border-[#e6e7df]"
                        : ""
                    }
                  `}
                >
                  {/* DATE */}

                  <div className="flex flex-col">
                    <span className="text-[25px] font-extrabold leading-none tracking-[-0.05em] text-[#035921]">
                      {event.date}
                    </span>

                    <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.08em] text-[#999]">
                      {event.day.slice(0, 3)}
                    </span>
                  </div>

                  {/* TITLE */}

                  <div className="min-w-0">
                    <h4 className="text-sm font-bold leading-5 text-[#0d0d0d] sm:text-[15px]">
                      {event.title}
                    </h4>

                    <span className="mt-2 inline-flex bg-[#f0f2eb] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.08em] text-[#55705c] sm:hidden">
                      {event.category}
                    </span>
                  </div>

                  {/* DESKTOP CATEGORY */}

                  <span className="hidden bg-[#f0f2eb] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.08em] text-[#55705c] sm:inline-flex">
                    {event.category}
                  </span>
                </div>
              ))}
            </div>

            {/* FULL CALENDAR */}

            <Link
              href={calendarContent.fullCalendarHref}
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                bg-[#035921]
                px-4
                py-2.5
                text-[9px]
                font-bold
                uppercase
                tracking-[0.1em]
                text-white
                transition-all
                hover:bg-[#024719]
              "
            >
              {calendarContent.fullCalendarLabel}
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* ===================================================
              RIGHT — CURRENT MONTH FEATURE
          =================================================== */}

          <div className="lg:pt-0">
            {monthly && (
              <div className="overflow-hidden border border-[#d9dacd] bg-white">
                {/* IMAGE */}

                <div className="relative aspect-[4/3] overflow-hidden bg-[#e9e7db]">
                  <Image
                    src={monthly.image}
                    alt={monthly.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />

                  <div className="absolute left-4 top-4 bg-white/95 px-3 py-1.5 backdrop-blur-sm">
                    <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#035921]">
                      {calendarContent.featuredLabel}
                    </p>
                  </div>
                </div>

                {/* CONTENT */}

                <div className="p-6 sm:p-7 lg:p-8">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-[#035921]" />

                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#035921]">
                      {monthly.month}
                    </p>
                  </div>

                  <h3 className="mt-4 max-w-xl text-[27px] font-extrabold leading-[1.05] tracking-[-0.045em] text-[#0d0d0d] sm:text-[32px]">
                    {monthly.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-[#666]">
                    {monthly.description}
                  </p>

                  <Link
                    href={monthly.button.href}
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      border-b
                      border-[#035921]
                      pb-1
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.1em]
                      text-[#035921]
                      transition-opacity
                      hover:opacity-60
                    "
                  >
                    {monthly.button.label}
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

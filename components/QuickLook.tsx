import Image from "next/image";
import Link from "next/link";
import { quickLookContent } from "@/data/content";

export function QuickLook() {
  return (
    <section className="bg-[var(--school-surface)] py-14 sm:py-16 lg:py-20">
      <div className="container">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end lg:mb-10">
          <div className="w-full text-center">
            <h2 className="sans-serif mt-2 text-[28px] font-extrabold leading-tight tracking-[-0.03em] text-[var(--school-primary)] md:text-[40px]">
              {quickLookContent.heading}
            </h2>
          </div>
        </div>

        {/* =====================================================
            BALANCED COLLAGE
        ===================================================== */}
        <div
          className="
            grid
            gap-2
            sm:grid-cols-2
            lg:grid-cols-4
            lg:grid-rows-2
            lg:auto-rows-[220px]
          "
        >
          {quickLookContent.links.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`
                ${item.size}
                group
                relative
                min-h-[220px]
                overflow-hidden
              `}
            >
              {/* =================================================
                  IMAGE
              ================================================= */}
              <Image
                src={item.image}
                alt={item.alt}
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

              {/* =================================================
                  DEFAULT DARK OVERLAY
              ================================================= */}
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
                  group-hover:opacity-0
                "
              />

              {/* =================================================
                  HOVER YELLOW / GOLD OVERLAY
              ================================================= */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[var(--school-secondary)]/95
                  via-[var(--school-secondary)]/90
                  to-[var(--school-secondary-soft)]/95
                  opacity-0
                  transition-opacity
                  duration-[700ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:opacity-100
                "
              />

              {/* =================================================
                  DEFAULT CONTENT
              ================================================= */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  p-5
                  text-[var(--school-surface)]
                  transition-all
                  duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:opacity-0
                  sm:p-6
                "
              >
                <h3 className="text-[20px] font-semibold leading-[1.2] tracking-[-0.02em] sm:text-[24px]">
                  {item.title}
                </h3>
              </div>

              {/* =================================================
                  HOVER CONTENT
                  TITLE + DESCRIPTION + READ MORE
              ================================================= */}
              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  p-6
                  text-center
                  opacity-0
                  transition-opacity
                  duration-[700ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:opacity-100
                "
              >
                <div
                  className="
                    flex
                    max-w-sm
                    translate-y-4
                    flex-col
                    items-center
                    transition-transform
                    duration-[800ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:translate-y-0
                  "
                >
                  {/* TITLE */}
                  <h3
                    className="
                      text-[20px]
                      font-semibold
                      leading-[1.2]
                      tracking-[-0.03em]
                      text-[var(--school-surface)]
                      sm:text-[24px]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-3
                      max-w-xs
                      text-[12px]
                      leading-5
                      text-[var(--school-surface)]/85
                    "
                  >
                    {item.text}
                  </p>

                  {/* READ MORE */}
                  <div
                    className="
                      mt-6
                      inline-flex
                      items-center
                      justify-center
                      border
                      border-[var(--school-surface)]/50
                      px-5
                      py-2.5
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-[var(--school-surface)]
                      transition-all
                      duration-300
                      group-hover:border-[var(--school-surface)]
                      group-hover:bg-[var(--school-surface)]
                      group-hover:text-[var(--school-primary)]
                    "
                  >
                    <span>Read More</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

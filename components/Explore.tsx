import Image from "next/image";
import Link from "next/link";
import { exploreContent } from "@/data/content";

export function Explore() {
  return (
    <section className="bg-[var(--school-surface-muted)] py-8 sm:py-10 lg:py-12">
      {/* SECTION INTRO */}
      <div className="w-full px-4 sm:px-6">
        <h2 className="sans-serif mx-auto text-center text-[28px] font-extrabold leading-tight tracking-[-0.03em] text-[var(--school-primary)] md:text-[40px]">
          {exploreContent.heading}
        </h2>
      </div>

      {/* ACADEMIC LEVELS */}
      <div className="mt-8 w-full overflow-hidden border-y border-[var(--school-border)] lg:mt-10">
        <div className="flex flex-col lg:flex-row">
          {exploreContent.academicLevels.map((level) => (
            <Link
              key={level.title}
              href={level.href}
              className="
                group
                relative
                min-h-[300px]
                flex-1
                overflow-hidden
                border-b
                border-[var(--school-border)]
                last:border-b-0
                transition-[flex-grow,flex-shrink,flex-basis]
                duration-[1200ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                lg:min-h-[480px]
                lg:border-b-0
                lg:border-r
                lg:last:border-r-0
                lg:hover:flex-[1.18]
              "
            >
              {/* IMAGE */}
              <Image
                src={level.image}
                alt={level.title}
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="
                  transform-gpu
                  scale-100
                  object-cover
                  transition-transform
                  duration-[1800ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:scale-[1.035]
                "
              />

              {/* PREMIUM BLACK OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/20
                  to-transparent
                  transition-opacity
                  duration-[1000ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:from-black/90
                  group-hover:via-black/30
                "
              />

              {/* CONTENT */}
              <div className="absolute inset-x-0 bottom-0 flex justify-center px-5 py-6 text-center text-[var(--school-surface)] sm:px-8 sm:py-8 lg:pb-9">
                <div className="w-full max-w-sm">
                  {/* DESCRIPTION */}
                  <p
                    className="
                      mx-auto
                      max-w-sm
                      translate-y-2
                      text-[12px]
                      leading-5
                      text-white/75
                      opacity-0
                      transition-[opacity,transform]
                      duration-[900ms]
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    {level.text}
                  </p>

                  {/* TITLE */}
                  <h3
                    className="
                      mt-1
                      text-[20px]
                      font-semibold
                      leading-[1.2]
                      tracking-[-0.02em]
                      text-white
                      transition-[margin,transform]
                      duration-[1000ms]
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:mt-3
                      group-hover:-translate-y-1
                      md:text-[24px]
                    "
                  >
                    {level.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

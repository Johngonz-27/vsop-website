import { Button } from "./Button";
import { ctaContent } from "@/data/content";

export function CTA() {
  return (
    <section className="bg-[#062b20] px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-[1160px]">
        <div
          className="
            bg-[#062b20]
            px-6
            py-12
            text-white
            sm:px-10
            sm:py-14
            lg:px-16
            lg:py-16
          "
        >
          <div
            className="
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:gap-16
            "
          >
            {/* TEXT */}
            <div className="max-w-2xl">
              {/* EYEBROW */}
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#d9b504]">
                  {ctaContent.eyebrow}
                </span>
              </div>

              {/* TITLE */}
              <h2
                className="sans-serif mt-4 font-extrabold leading-[1.15] tracking-[-0.03em]"
                style={{ fontSize: "clamp(35px, 5vw, 55px)" }}
              >
                {ctaContent.title}
              </h2>

              {/* DESCRIPTION */}
              {ctaContent.description && (
                <p
                  className="
                    mt-5
                    max-w-xl
                    text-[16px]
                    leading-7
                    text-white/70
                    md:text-[18px]
                    md:leading-8
                  "
                >
                  {ctaContent.description}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <div className="shrink-0 lg:flex lg:items-center">
              <Button
                href={ctaContent.button.href}
                variant="secondary"
                size="md"
              >
                {ctaContent.button.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

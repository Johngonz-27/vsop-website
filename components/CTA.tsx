import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ctaContent } from "../data/content";

export function CTA() {
  return (
    <section className="px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1160px]  bg-[var(--school-primary-strong)]">
        <div className="flex flex-col gap-6 px-6 py-8 sm:px-8 sm:py-9 md:flex-row md:items-center md:justify-between lg:px-10">
          {/* Content */}
          <div className="max-w-[680px]">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--school-secondary)]">
              {ctaContent.eyebrow}
            </p>

            <h2 className="text-[26px] font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--school-surface)] sm:text-[30px]">
              {ctaContent.title}
            </h2>

            {ctaContent.description && (
              <p className="mt-3 max-w-[600px] text-[13px] leading-6 text-[var(--school-surface-muted)] sm:text-[14px]">
                {ctaContent.description}
              </p>
            )}
          </div>

          {/* Button */}
          <Link
            href={ctaContent.button.href}
            className="group inline-flex h-11 shrink-0 items-center justify-center gap-3 border border-[var(--school-surface)] bg-[var(--school-surface)] px-5 text-[12px] font-semibold text-white transition-colors duration-200 hover:bg-[var(--school-surface)]"
          >
            {ctaContent.button.label}
            <ArrowRight
              size={15}
              strokeWidth={1.8}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

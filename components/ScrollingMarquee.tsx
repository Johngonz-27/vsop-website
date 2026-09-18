import Image from "next/image";
import { scrollingMarqueeContent } from "@/data/content";

export function ScrollingMarquee() {
  const { organizations, heading, animationDuration } = scrollingMarqueeContent;

  return (
    <section className="overflow-hidden bg-[var(--school-surface)] py-10 sm:py-12">
      <div className="container mb-7">
        <h2 className="sans-serif text-center text-[20px] font-extrabold leading-tight tracking-[-0.03em] text-[var(--school-primary)] md:text-[24px]">
          {heading}
        </h2>
      </div>

      <div className="overflow-hidden">
        <div className="group">
          <div
            className="flex w-max animate-[marquee_24s_linear_infinite] group-hover:[animation-play-state:paused]"
            style={{ animationDuration: `${animationDuration}s` }}
          >
            {[1, 2, 3].map((set) => (
              <div key={set} className="flex shrink-0">
                {organizations.map((organization) => (
                  <LogoItem
                    key={`${set}-${organization.name}`}
                    organization={organization}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoItem({
  organization,
}: {
  organization: {
    name: string;
    logo: string;
  };
}) {
  return (
    <div className="group/logo flex h-24 w-[220px] shrink-0 items-center justify-center sm:h-28 sm:w-[260px]">
      <Image
        src={organization.logo}
        alt={organization.name}
        width={200}
        height={90}
        className="
    h-auto
    max-h-16
    w-auto
    max-w-[160px]
    object-contain
    opacity-100
    grayscale-0
    transition-all
    duration-500
    ease-out
    sm:grayscale
    sm:opacity-55
    group-hover/logo:grayscale-0
    group-hover/logo:opacity-100
  "
      />
    </div>
  );
}

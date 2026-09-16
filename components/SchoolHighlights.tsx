import {
  ArrowUpRight,
  Bell,
  CalendarDays,
  ClipboardList,
  Download,
  Users,
} from "lucide-react";
import Link from "next/link";

export function SchoolHighlights() {
  const highlights = [
    {
      icon: CalendarDays,
      label: "School Calendar",
      title: "Important dates & events",
      text: "View the academic calendar, holidays, examinations, and school activities.",
      href: "/school-calendar",
    },
    {
      icon: Bell,
      label: "Announcements",
      title: "What's happening",
      text: "Stay updated with the latest school announcements and notices.",
      href: "/announcements",
    },
    {
      icon: ClipboardList,
      label: "Admissions",
      title: "Start your journey",
      text: "Learn about enrollment, requirements, and the admissions process.",
      href: "/admissions",
    },
    {
      icon: Users,
      label: "Student Life",
      title: "Life beyond the classroom",
      text: "Discover activities, organizations, events, and opportunities for students.",
      href: "/student-life",
    },
    {
      icon: Download,
      label: "Resources",
      title: "Forms & downloads",
      text: "Access important forms, documents, handbooks, and other resources.",
      href: "/resources",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="container">
        {/* HEADER */}
        <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#035921]">
              School Highlights
            </p>

            <h2 className="serif mt-2 text-3xl leading-tight tracking-[-0.03em] text-[#171717] sm:text-4xl">
              Everything you need to know.
            </h2>
          </div>

          <p className="max-w-sm text-[13px] leading-5 text-black/50 sm:text-right">
            Quick access to important information for students, parents, and the
            school community.
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="grid border-y border-black/10 sm:grid-cols-2 lg:grid-cols-5">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`
                  group
                  relative
                  border-b border-black/10
                  p-5
                  transition-colors
                  duration-300
                  hover:bg-[#F5F3ED]
                  sm:nth-[3]:border-b-0
                  lg:border-b-0
                  lg:border-r
                  lg:last:border-r-0
                  ${index === highlights.length - 1 ? "border-b-0" : ""}
                `}
              >
                {/* ICON + ARROW */}
                <div className="flex items-center justify-between">
                  <div className="flex h-8 w-8 items-center justify-center bg-[#035921]/8 text-[#035921]">
                    <Icon size={15} strokeWidth={1.7} />
                  </div>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="
                      text-black/25
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-[#035921]
                    "
                  />
                </div>

                {/* CONTENT */}
                <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#035921]">
                  {item.label}
                </p>

                <h3 className="mt-1.5 text-[15px] font-semibold leading-5 text-[#171717]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[12px] leading-5 text-black/50">
                  {item.text}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

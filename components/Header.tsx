"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { headerContent } from "../data/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  const [aboutOpen, setAboutOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);

  const [basicEducationOpen, setBasicEducationOpen] = useState(false);
  const [seniorHighOpen, setSeniorHighOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeDropdowns = () => {
    setAboutOpen(false);
    setAcademicsOpen(false);
    setAdmissionsOpen(false);
    setBasicEducationOpen(false);
    setSeniorHighOpen(false);
  };

  const openAbout = () => {
    setAboutOpen(true);
    setAcademicsOpen(false);
    setAdmissionsOpen(false);
    setBasicEducationOpen(false);
    setSeniorHighOpen(false);
  };

  const openAcademics = () => {
    setAcademicsOpen(true);
    setAboutOpen(false);
    setAdmissionsOpen(false);
    setBasicEducationOpen(false);
    setSeniorHighOpen(false);
  };

  const openAdmissions = () => {
    setAdmissionsOpen(true);
    setAboutOpen(false);
    setAcademicsOpen(false);
    setBasicEducationOpen(false);
    setSeniorHighOpen(false);
  };

  const navItemClass = `
    !flex
    !h-[68px]
    !items-center
    !px-3.5
    !text-[12px]
    !font-semibold
    !tracking-[0.01em]
    !transition-colors
    !duration-300
    ${
      scrolled
        ? "!text-[var(--school-primary-strong)] hover:!text-[var(--school-primary)]"
        : "!text-white/90 hover:!text-white"
    }
  `;

  const dropdownItemClass = `
    flex
    items-center
    px-3.5
    py-2.5
    text-[12px]
    font-medium
    text-[var(--school-primary-strong)]
    transition-all
    duration-200
    hover:bg-[var(--school-surface-muted)]
    hover:pl-4
    hover:text-[var(--school-primary)]
  `;

  return (
    <header
      className={`
        fixed
        left-0
        top-0
        z-50
        w-full
        border-b
        transition-all
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          scrolled
            ? "border-black/10 bg-[var(--school-secondary)]/95 backdrop-blur-xl"
            : "border-white/15 bg-black/5 backdrop-blur-[2px]"
        }
      `}
    >
      <div className="container flex h-[68px] items-center justify-between">
        {/* =========================================================
            LOGO
        ========================================================= */}

        <Link
          href="/"
          onClick={closeDropdowns}
          className="group flex items-center"
        >
          <Image
            src={headerContent.logo.src}
            alt={headerContent.logo.alt}
            width={180}
            height={60}
            priority
            className="
              h-auto
              w-[180px]
              object-contain
              transition-transform
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:scale-[1.015]
            "
          />
        </Link>

        {/* =========================================================
            DESKTOP NAVIGATION
        ========================================================= */}

        <nav className="hidden items-center lg:flex">
          {/* =======================================================
              ABOUT
          ======================================================= */}

          <div
            className="relative"
            onMouseEnter={openAbout}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              type="button"
              aria-expanded={aboutOpen}
              className={`${navItemClass} gap-1.5`}
            >
              <span>{headerContent.about.label}</span>

              <ChevronDown
                size={13}
                strokeWidth={2}
                className={`
                  transition-transform
                  duration-300
                  ease-out
                  ${aboutOpen ? "rotate-180" : "rotate-0"}
                `}
              />
            </button>

            <div
              className={`
                absolute
                left-1/2
                top-full
                w-[300px]
                -translate-x-1/2
                pt-3
                transition-all
                duration-300
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  aboutOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }
              `}
            >
              <div className="overflow-hidden rounded-xl border border-black/10 bg-white p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                <div className="px-4 pb-2 pt-3">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--school-secondary)]">
                    {headerContent.about.heading}
                  </p>
                </div>

                {headerContent.about.links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeDropdowns}
                    className={dropdownItemClass}
                  >
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* =======================================================
              ACADEMICS
          ======================================================= */}

          <div
            className="relative"
            onMouseEnter={openAcademics}
            onMouseLeave={() => {
              setAcademicsOpen(false);
              setBasicEducationOpen(false);
              setSeniorHighOpen(false);
            }}
          >
            <button
              type="button"
              aria-expanded={academicsOpen}
              className={`${navItemClass} gap-1.5`}
            >
              <span>{headerContent.academics.label}</span>

              <ChevronDown
                size={13}
                strokeWidth={2}
                className={`
                  transition-transform
                  duration-300
                  ease-out
                  ${academicsOpen ? "rotate-180" : "rotate-0"}
                `}
              />
            </button>

            <div
              className={`
                absolute
                left-1/2
                top-full
                w-[265px]
                -translate-x-1/2
                pt-3
                transition-all
                duration-300
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  academicsOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }
              `}
            >
              <div className="rounded-xl border border-black/10 bg-white p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                <div className="px-4 pb-2 pt-3">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--school-secondary)]">
                    {headerContent.academics.heading}
                  </p>
                </div>

                {/* BASIC EDUCATION */}

                <div
                  className="relative"
                  onMouseEnter={() => setBasicEducationOpen(true)}
                  onMouseLeave={() => setBasicEducationOpen(false)}
                >
                  <button
                    type="button"
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-between
                      px-3.5
                      py-3
                      text-left
                      text-[12px]
                      font-medium
                      text-[var(--school-primary-strong)]
                      transition-all
                      duration-300
                      hover:bg-[var(--school-surface-muted)]
                      hover:pl-4
                      hover:text-[var(--school-primary)]
                    "
                  >
                    <span>{headerContent.academics.basicEducation.label}</span>

                    <ChevronRight
                      size={14}
                      strokeWidth={1.8}
                      className="
                        text-[var(--school-secondary)]
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                      "
                    />
                  </button>

                  {/* BASIC EDUCATION SUBMENU */}

                  <div
                    className={`
                      absolute
                      left-full
                      top-0
                      ml-2
                      w-[235px]
                      transition-all
                      duration-300
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${
                        basicEducationOpen
                          ? "visible translate-x-0 opacity-100"
                          : "invisible translate-x-2 opacity-0"
                      }
                    `}
                  >
                    <div className="rounded-xl border border-black/10 bg-white p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                      <div className="px-4 pb-2 pt-3">
                        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--school-secondary)]">
                          {headerContent.academics.basicEducation.label}
                        </p>
                      </div>

                      {headerContent.academics.basicEducation.links.map(
                        (item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeDropdowns}
                            className={dropdownItemClass}
                          >
                            <span>{item.label}</span>
                          </Link>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                {/* SENIOR HIGH SCHOOL */}

                <div
                  className="relative"
                  onMouseEnter={() => setSeniorHighOpen(true)}
                  onMouseLeave={() => setSeniorHighOpen(false)}
                >
                  <button
                    type="button"
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-between
                      px-3.5
                      py-3
                      text-left
                      text-[12px]
                      font-medium
                      text-[var(--school-primary-strong)]
                      transition-all
                      duration-300
                      hover:bg-[var(--school-surface-muted)]
                      hover:pl-4
                      hover:text-[var(--school-primary)]
                    "
                  >
                    <span>{headerContent.academics.seniorHigh.label}</span>

                    <ChevronRight
                      size={14}
                      strokeWidth={1.8}
                      className="
                        text-[var(--school-secondary)]
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                      "
                    />
                  </button>

                  {/* SENIOR HIGH SUBMENU */}

                  <div
                    className={`
                      absolute
                      left-full
                      top-0
                      ml-2
                      w-[245px]
                      transition-all
                      duration-300
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${
                        seniorHighOpen
                          ? "visible translate-x-0 opacity-100"
                          : "invisible translate-x-2 opacity-0"
                      }
                    `}
                  >
                    <div className="rounded-xl border border-black/10 bg-white p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                      <div className="px-4 pb-2 pt-3">
                        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--school-secondary)]">
                          {headerContent.academics.seniorHigh.label}
                        </p>
                      </div>

                      {headerContent.academics.seniorHigh.links.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeDropdowns}
                          className={dropdownItemClass}
                        >
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =======================================================
              ADMISSIONS
          ======================================================= */}

          <div
            className="relative"
            onMouseEnter={openAdmissions}
            onMouseLeave={() => setAdmissionsOpen(false)}
          >
            <button
              type="button"
              aria-expanded={admissionsOpen}
              className={`${navItemClass} gap-1.5`}
            >
              <span>{headerContent.admissions.label}</span>

              <ChevronDown
                size={13}
                strokeWidth={2}
                className={`
                  transition-transform
                  duration-300
                  ease-out
                  ${admissionsOpen ? "rotate-180" : "rotate-0"}
                `}
              />
            </button>

            <div
              className={`
                absolute
                left-1/2
                top-full
                w-[250px]
                -translate-x-1/2
                pt-3
                transition-all
                duration-300
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  admissionsOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }
              `}
            >
              <div className="rounded-xl border border-black/10 bg-white p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                <div className="px-4 pb-2 pt-3">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--school-secondary)]">
                    {headerContent.admissions.heading}
                  </p>
                </div>

                {headerContent.admissions.links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeDropdowns}
                    className={dropdownItemClass}
                  >
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* =======================================================
              NORMAL NAVIGATION
          ======================================================= */}

          {headerContent.links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeDropdowns}
              className={navItemClass}
            >
              {item.label}
            </Link>
          ))}

          {/* =======================================================
              APPLY NOW
          ======================================================= */}

          <Button
            href={headerContent.applyButton.href}
            variant="secondary"
            className={`
              ml-4
              min-h-[42px]
              min-w-[125px]
              px-5
              text-[11px]
              uppercase
              tracking-[0.08em]
              transition-colors
              duration-300

              ${
                scrolled
                  ? `
                    !bg-[var(--school-primary)]
                    !text-[var(--school-surface)]
                    hover:!bg-[var(--school-surface)]
                    hover:!text-[var(--school-primary)]
                  `
                  : `
                    !bg-[var(--school-secondary)]
                    !text-[var(--school-surface)]
                    hover:!bg-[var(--school-surface)]
                    hover:!text-[var(--school-secondary)]
                  `
              }
            `}
          >
            {headerContent.applyButton.label}
          </Button>
        </nav>

        {/* =========================================================
            MOBILE MENU
        ========================================================= */}

        <button
          type="button"
          aria-label="Open menu"
          className={`
            flex
            h-10
            w-10
            items-center
            justify-center
            border
            transition-all
            duration-300
            lg:hidden
            ${
              scrolled
                ? `
                  border-black/10
                  text-[var(--school-primary-strong)]
                  hover:bg-black/5
                `
                : `
                  border-white/20
                  text-white
                  hover:bg-white/10
                `
            }
          `}
        >
          <Menu size={20} strokeWidth={1.8} />
        </button>
      </div>
    </header>
  );
}

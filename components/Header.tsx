"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { headerContent } from "../data/content";

export function Header() {
  const pathname = usePathname();

  const isHome = pathname === "/";

  /* =========================================================
     STATE
  ========================================================= */

  const [scrolled, setScrolled] = useState(false);

  const [aboutOpen, setAboutOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);

  const [basicEducationOpen, setBasicEducationOpen] = useState(false);
  const [seniorHighOpen, setSeniorHighOpen] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  /*
   * Homepage:
   * - Desktop top: transparent + light navigation
   * - Desktop scrolled: solid green + primary navigation
   *
   * Internal pages:
   * - Desktop top: transparent + primary navigation
   * - Desktop scrolled: solid green + primary navigation
   *
   * Mobile:
   * - Always yellow
   */
  const usePrimaryNav = scrolled || !isHome;

  /* =========================================================
     SCROLL
  ========================================================= */

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

  /* =========================================================
     CLOSE MENUS ON ROUTE CHANGE
  ========================================================= */

  useEffect(() => {
    setMobileOpen(false);
    setAboutOpen(false);
    setAcademicsOpen(false);
    setAdmissionsOpen(false);
    setBasicEducationOpen(false);
    setSeniorHighOpen(false);
  }, [pathname]);

  /* =========================================================
     CLOSE ALL MENUS
  ========================================================= */

  const closeDropdowns = () => {
    setAboutOpen(false);
    setAcademicsOpen(false);
    setAdmissionsOpen(false);
    setBasicEducationOpen(false);
    setSeniorHighOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    closeDropdowns();
  };

  /* =========================================================
     DESKTOP DROPDOWN CONTROLS
  ========================================================= */

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
  };

  const openAdmissions = () => {
    setAdmissionsOpen(true);
    setAboutOpen(false);
    setAcademicsOpen(false);
    setBasicEducationOpen(false);
    setSeniorHighOpen(false);
  };

  const closeAcademics = () => {
    setAcademicsOpen(false);
    setBasicEducationOpen(false);
    setSeniorHighOpen(false);
  };

  /* =========================================================
     MOBILE CONTROLS
  ========================================================= */

  const toggleMobile = () => {
    setMobileOpen((prev) => !prev);
  };

  const toggleMobileAbout = () => {
    setAboutOpen((prev) => !prev);

    setAcademicsOpen(false);
    setAdmissionsOpen(false);
    setBasicEducationOpen(false);
    setSeniorHighOpen(false);
  };

  const toggleMobileAcademics = () => {
    setAcademicsOpen((prev) => !prev);

    setAboutOpen(false);
    setAdmissionsOpen(false);
    setBasicEducationOpen(false);
    setSeniorHighOpen(false);
  };

  const toggleMobileAdmissions = () => {
    setAdmissionsOpen((prev) => !prev);

    setAboutOpen(false);
    setAcademicsOpen(false);
    setBasicEducationOpen(false);
    setSeniorHighOpen(false);
  };

  const toggleBasicEducation = () => {
    setBasicEducationOpen((prev) => !prev);
    setSeniorHighOpen(false);
  };

  const toggleSeniorHigh = () => {
    setSeniorHighOpen((prev) => !prev);
    setBasicEducationOpen(false);
  };

  /* =========================================================
     DESKTOP NAVIGATION STYLES
  ========================================================= */

  const navItemClass = `
    !flex
    !h-[68px]
    !items-center
    !px-3.5
    !text-[12px]
    !font-semibold
    !tracking-[0.01em]
    !transition-all
    !duration-300
    ${
      usePrimaryNav
        ? `
          !text-[var(--school-primary-strong)]
          hover:drop-shadow-[0_2px_6px_rgba(0,0,0,0.18)]
        `
        : `
          !text-[var(--school-surface)]/90
          hover:!text-[var(--school-surface)]
        `
    }
  `;

  const dropdownItemClass = `
    flex
    items-center
    px-3.5
    py-2.5
    !text-[12px]
    !font-semibold
    leading-none
    tracking-[0.01em]
    text-[var(--school-primary-strong)]
    transition-all
    duration-200
    hover:bg-[var(--school-surface-muted)]
    hover:pl-4
    hover:text-[var(--school-text-muted)]
  `;

  const dropdownTriggerClass = `
    group
    flex
    w-full
    items-center
    justify-between
    px-3.5
    py-3
    text-left
    !text-[12px]
    !font-semibold
    leading-none
    tracking-[0.01em]
    text-[var(--school-primary-strong)]
    transition-all
    duration-200
    hover:bg-[var(--school-surface-muted)]
    hover:pl-4
    hover:text-[var(--school-text-muted)]
  `;

  const dropdownPanelClass = `
    rounded-xl
    border
    border-[var(--school-text)]/10
    bg-[var(--school-surface)]
    p-1.5
    shadow-[0_20px_50px_rgba(0,0,0,0.12)]
  `;

  const dropdownHeadingClass = `
    px-4
    pb-2
    pt-3
    !text-[12px]
    !font-semibold
    leading-none
    tracking-[0.01em]
    text-[var(--school-secondary)]
  `;

  /* =========================================================
     DROPDOWN ANIMATION
  ========================================================= */

  const dropdownAnimation = (open: boolean) => `
    pointer-events-${open ? "auto" : "none"}
    transition-all
    duration-250
    ease-[cubic-bezier(0.22,1,0.36,1)]
    ${
      open
        ? "visible translate-y-0 opacity-100"
        : "invisible -translate-y-2 opacity-0"
    }
  `;

  const submenuAnimation = (open: boolean) => `
    pointer-events-${open ? "auto" : "none"}
    transition-all
    duration-250
    ease-[cubic-bezier(0.22,1,0.36,1)]
    ${
      open
        ? "visible translate-x-0 opacity-100"
        : "invisible translate-x-2 opacity-0"
    }
  `;

  /* =========================================================
     MOBILE STYLES
  ========================================================= */

  /*
   * Main mobile navigation items:
   * About
   * Academics
   * Admissions
   * News
   * Events
   * Contact
   */

  const mobileItemClass = `
    flex
    w-full
    items-center
    justify-between
    border-b
    border-[var(--school-text)]/10
    px-5
    py-4
    text-left
    !text-[13px]
    !font-semibold
    !tracking-[0.01em]
    text-[var(--school-primary-strong)]
    transition-colors
    duration-200
    hover:bg-[var(--school-surface-muted)]
  `;

  /*
   * Secondary mobile navigation items:
   * Overview
   * History
   * Mission & Vision
   * School Seal
   * Administration
   * Basic Education
   * Senior High School
   * etc.
   *
   * Basic Education and Senior High School intentionally use
   * this exact same class so their typography matches the
   * other submenu items.
   */

  const mobileSubItemClass = `
  flex
  w-full
  items-center
  px-8
  py-3
    text-left
    !text-[12px]
    !font-medium
    !leading-normal
    !tracking-normal
    text-[var(--school-primary-strong)]
    transition-colors
    duration-200
    hover:bg-[var(--school-surface)]
  `;

  /* =========================================================
     HEADER
  ========================================================= */

  return (
    <header
      className={`
        fixed
        left-0
        top-0
        z-50
        w-full
        border-b
        border-transparent

        /* MOBILE — ALWAYS YELLOW */
        !bg-[#d9b504]
        !shadow-[0_1px_0_rgba(0,0,0,0.08)]
        !backdrop-blur-none

        transition-all
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]

        /* DESKTOP */
        ${
          scrolled
            ? "lg:!bg-[var(--school-secondary)]/95 lg:!shadow-[0_1px_0_rgba(0,0,0,0.08)] lg:!backdrop-blur-xl"
            : "lg:!bg-[var(--school-text)]/5 lg:!shadow-none lg:!backdrop-blur-[2px]"
        }
      `}
    >
      {/* =====================================================
          HEADER BAR
      ===================================================== */}

      <div className="container flex h-[68px] items-center justify-between">
        {/* ===================================================
            LOGO
        =================================================== */}

        <Link
          href="/"
          onClick={closeMobileMenu}
          className="group flex items-center"
          aria-label="Village School of Parkwoods home"
        >
          <Image
            src={
              usePrimaryNav
                ? "/Images/vsop-horizontal-black.png"
                : headerContent.logo.src
            }
            alt="Village School of Parkwoods"
            width={180}
            height={60}
            priority
            className="
              h-auto
              w-[180px]
              object-contain
              transition-all
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:scale-[1.015]
            "
          />
        </Link>

        {/* ===================================================
            DESKTOP NAVIGATION
        =================================================== */}

        <nav
          className="hidden items-center lg:flex"
          aria-label="Main navigation"
        >
          {/* =================================================
              ABOUT
          ================================================= */}

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
                ${dropdownAnimation(aboutOpen)}
              `}
            >
              <div className={dropdownPanelClass}>
                <div className={dropdownHeadingClass}>
                  {headerContent.about.heading}
                </div>

                {headerContent.about.links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeDropdowns}
                    className={dropdownItemClass}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
              ACADEMICS
          ================================================= */}

          <div
            className="relative"
            onMouseEnter={openAcademics}
            onMouseLeave={closeAcademics}
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
                ${dropdownAnimation(academicsOpen)}
              `}
            >
              <div className={dropdownPanelClass}>
                <div className={dropdownHeadingClass}>
                  {headerContent.academics.heading}
                </div>

                {/* BASIC EDUCATION */}

                <div
                  className="relative"
                  onMouseEnter={() => setBasicEducationOpen(true)}
                  onMouseLeave={() => setBasicEducationOpen(false)}
                >
                  <button
                    type="button"
                    onClick={toggleBasicEducation}
                    className={`${mobileSubItemClass} justify-between lg:!text-[12px] lg:!font-semibold lg:!leading-none lg:!tracking-[0.01em] lg:!px-3.5 lg:!py-3`}
                    aria-expanded={basicEducationOpen}
                  >
                    <span>{headerContent.academics.basicEducation.label}</span>

                    <ChevronRight
                      size={14}
                      strokeWidth={1.8}
                      className="shrink-0 text-[var(--school-secondary)]"
                    />
                  </button>

                  <div
                    className={`
                      absolute
                      left-full
                      top-0
                      ml-2
                      w-[235px]
                      ${submenuAnimation(basicEducationOpen)}
                    `}
                  >
                    <div className={dropdownPanelClass}>
                      <div className={dropdownHeadingClass}>
                        {headerContent.academics.basicEducation.label}
                      </div>

                      {headerContent.academics.basicEducation.links.map(
                        (item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeDropdowns}
                            className={dropdownItemClass}
                          >
                            {item.label}
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
                    onClick={toggleSeniorHigh}
                    className={`${mobileSubItemClass} justify-between lg:!text-[12px] lg:!font-semibold lg:!leading-none lg:!tracking-[0.01em] lg:!px-3.5 lg:!py-3`}
                    aria-expanded={seniorHighOpen}
                  >
                    <span>{headerContent.academics.seniorHigh.label}</span>

                    <ChevronRight
                      size={14}
                      strokeWidth={1.8}
                      className="shrink-0 text-[var(--school-secondary)]"
                    />
                  </button>

                  <div
                    className={`
                      absolute
                      left-full
                      top-0
                      ml-2
                      w-[245px]
                      ${submenuAnimation(seniorHighOpen)}
                    `}
                  >
                    <div className={dropdownPanelClass}>
                      <div className={dropdownHeadingClass}>
                        {headerContent.academics.seniorHigh.label}
                      </div>

                      {headerContent.academics.seniorHigh.links.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeDropdowns}
                          className={dropdownItemClass}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              ADMISSIONS
          ================================================= */}

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
                ${dropdownAnimation(admissionsOpen)}
              `}
            >
              <div className={dropdownPanelClass}>
                <div className={dropdownHeadingClass}>
                  {headerContent.admissions.heading}
                </div>

                {headerContent.admissions.links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeDropdowns}
                    className={dropdownItemClass}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
              NORMAL LINKS
          ================================================= */}

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

          {/* =================================================
              APPLY NOW
          ================================================= */}

          {!scrolled ? (
            <Link
              href={headerContent.applyButton.href}
              onClick={closeDropdowns}
              className={`${navItemClass} ml-0`}
            >
              {headerContent.applyButton.label}
            </Link>
          ) : (
            <Link
              href={headerContent.applyButton.href}
              onClick={closeDropdowns}
              className="
                ml-4
                inline-flex
                h-[42px]
                min-w-[125px]
                items-center
                justify-center
                bg-[var(--school-primary)]
                px-5
                !text-[var(--school-surface)]
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.08em]
                transition-all
                duration-500
                hover:bg-[var(--school-primary-strong)]
              "
            >
              {headerContent.applyButton.label}
            </Link>
          )}
        </nav>

        {/* ===================================================
            MOBILE BUTTON
        =================================================== */}

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={toggleMobile}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            border
            border-[var(--school-primary)]/20
            !text-[var(--school-primary-strong)]
            transition-all
            duration-300
            hover:bg-[var(--school-primary)]/5
            lg:hidden
          "
        >
          {mobileOpen ? (
            <X size={20} strokeWidth={1.8} />
          ) : (
            <Menu size={20} strokeWidth={1.8} />
          )}
        </button>
      </div>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`
          overflow-hidden
          border-t
          border-[var(--school-text)]/10
          bg-[var(--school-surface)]
          transition-all
          duration-300
          lg:hidden
          ${
            mobileOpen
              ? "max-h-[calc(100vh-68px)] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }
        `}
      >
        <div className="max-h-[calc(100vh-68px)] overflow-y-auto">
          {/* =================================================
              ABOUT
          ================================================= */}

          <div>
            <button
              type="button"
              onClick={toggleMobileAbout}
              className={mobileItemClass}
              aria-expanded={aboutOpen}
            >
              <span>{headerContent.about.label}</span>

              <ChevronDown
                size={16}
                strokeWidth={1.8}
                className={`
                  transition-transform
                  duration-300
                  ${aboutOpen ? "rotate-180" : ""}
                `}
              />
            </button>

            <div
              className={`
                overflow-hidden
                bg-[var(--school-surface-muted)]
                transition-all
                duration-300
                ${aboutOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"}
              `}
            >
              {headerContent.about.links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={mobileSubItemClass}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* =================================================
              ACADEMICS
          ================================================= */}

          <div>
            <button
              type="button"
              onClick={toggleMobileAcademics}
              className={mobileItemClass}
              aria-expanded={academicsOpen}
            >
              <span>{headerContent.academics.label}</span>

              <ChevronDown
                size={16}
                strokeWidth={1.8}
                className={`
                  transition-transform
                  duration-300
                  ${academicsOpen ? "rotate-180" : ""}
                `}
              />
            </button>

            <div
              className={`
                overflow-hidden
                bg-[var(--school-surface-muted)]
                transition-all
                duration-300
                ${
                  academicsOpen
                    ? "max-h-[1200px] opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              {/* BASIC EDUCATION */}

              <button
                type="button"
                onClick={toggleBasicEducation}
                className={`${mobileSubItemClass} justify-between`}
                aria-expanded={basicEducationOpen}
              >
                <span>{headerContent.academics.basicEducation.label}</span>

                <ChevronRight
                  size={15}
                  strokeWidth={1.8}
                  className={`
                    shrink-0
                    transition-transform
                    duration-300
                    ${basicEducationOpen ? "rotate-90" : ""}
                  `}
                />
              </button>

              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-300
                  ${
                    basicEducationOpen
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                {headerContent.academics.basicEducation.links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="
                      flex
                      w-full
                      border-b
                      border-[var(--school-text)]/5
                      px-12
                      py-3
                      text-[12px]
                      font-medium
                      text-[var(--school-primary-strong)]
                      transition-colors
                      duration-200
                      hover:bg-[var(--school-surface)]
                    "
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* SENIOR HIGH SCHOOL */}

              <button
                type="button"
                onClick={toggleSeniorHigh}
                className={`${mobileSubItemClass} justify-between`}
                aria-expanded={seniorHighOpen}
              >
                <span>{headerContent.academics.seniorHigh.label}</span>

                <ChevronRight
                  size={15}
                  strokeWidth={1.8}
                  className={`
                    shrink-0
                    transition-transform
                    duration-300
                    ${seniorHighOpen ? "rotate-90" : ""}
                  `}
                />
              </button>

              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-300
                  ${
                    seniorHighOpen
                      ? "max-h-[600px] opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                {headerContent.academics.seniorHigh.links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="
                      flex
                      w-full
                      border-b
                      border-[var(--school-text)]/5
                      px-12
                      py-3
                      text-[12px]
                      font-medium
                      text-[var(--school-primary-strong)]
                      transition-colors
                      duration-200
                      hover:bg-[var(--school-surface)]
                    "
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
              ADMISSIONS
          ================================================= */}

          <div>
            <button
              type="button"
              onClick={toggleMobileAdmissions}
              className={mobileItemClass}
              aria-expanded={admissionsOpen}
            >
              <span>{headerContent.admissions.label}</span>

              <ChevronDown
                size={16}
                strokeWidth={1.8}
                className={`
                  transition-transform
                  duration-300
                  ${admissionsOpen ? "rotate-180" : ""}
                `}
              />
            </button>

            <div
              className={`
                overflow-hidden
                bg-[var(--school-surface-muted)]
                transition-all
                duration-300
                ${
                  admissionsOpen
                    ? "max-h-[700px] opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              {headerContent.admissions.links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={mobileSubItemClass}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* =================================================
              NORMAL LINKS
          ================================================= */}

          {headerContent.links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              className={mobileItemClass}
            >
              <span>{item.label}</span>
            </Link>
          ))}

          {/* =================================================
              APPLY NOW
          ================================================= */}

          <div className="p-5">
            <Link
              href={headerContent.applyButton.href}
              onClick={closeMobileMenu}
              className="
                flex
                h-[46px]
                w-full
                items-center
                justify-center
                bg-[var(--school-primary)]
                px-5
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.08em]
                text-[var(--school-surface)]
                transition-all
                duration-300
                hover:bg-[var(--school-primary-strong)]
              "
            >
              {headerContent.applyButton.label}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

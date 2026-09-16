import { heroContent } from "@/data/content";

import { Hero } from "@/components/Hero";
import { WhyVSOP } from "@/components/WhyVSOP";
import { ScrollingMarquee } from "@/components/ScrollingMarquee";
import { Explore } from "@/components/Explore";
import { QuickLook } from "@/components/QuickLook";
import { SchoolCalendar } from "@/components/SchoolCalendar";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <main>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero title={heroContent.title} desc={heroContent.description} carousel />

      {/* =====================================================
          WHY VSOP
      ===================================================== */}

      <WhyVSOP />

      {/* =====================================================
          EXPLORE
      ===================================================== */}

      <Explore />

      {/* =====================================================
          VSOP AT A GLANCE
      ===================================================== */}

      <QuickLook />

      {/* =====================================================
          SCHOOL CALENDAR
      ===================================================== */}

      <SchoolCalendar />

      {/* =====================================================
          RECOGNIZED & SUPPORTED BY
      ===================================================== */}

      <ScrollingMarquee />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CTA />
    </main>
  );
}

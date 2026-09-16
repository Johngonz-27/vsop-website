/* =========================================================
   HEADER / NAVIGATION
========================================================= */

export const headerContent = {
  logo: {
    src: "/Images/vsop-horizontal-seal.png",
    alt: "Village School of Parkwoods",
  },

  about: {
    label: "About",
    heading: "About the School",

    links: [
      {
        label: "Overview",
        href: "/about",
      },
      {
        label: "History",
        href: "/about#history",
      },
      {
        label: "Mission, Vision & Core Values",
        href: "/about#mission-vision",
      },
      {
        label: "School Seal",
        href: "/about#school-seal",
      },
      {
        label: "Administration",
        href: "/about#administration",
      },
      {
        label: "Why Join VSOP",
        href: "/about#why-join-vsop",
      },
      {
        label: "Recognitions",
        href: "/about#recognitions",
      },
      {
        label: "Accreditations",
        href: "/about#accreditations",
      },
      {
        label: "Facilities",
        href: "/about#facilities",
      },
      {
        label: "Linkages",
        href: "/about#linkages",
      },
      {
        label: "Hymn",
        href: "/about#hymn",
      },
    ],
  },

  academics: {
    label: "Academics",
    heading: "Academic Programs",

    basicEducation: {
      label: "Basic Education",

      links: [
        {
          label: "Preschool",
          href: "/academics/basic-education/preschool",
        },
        {
          label: "Grade School",
          href: "/academics/basic-education/grade-school",
        },
        {
          label: "Junior High School",
          href: "/academics/basic-education/junior-high-school",
        },
      ],
    },

    seniorHigh: {
      label: "Senior High School",

      links: [
        {
          label: "GAS",
          href: "/academics/senior-high-school/gas",
        },
        {
          label: "TVL – ICT",
          href: "/academics/senior-high-school/tvl-ict",
        },
      ],
    },
  },

  admissions: {
    label: "Admissions",
    heading: "Start Your Journey",

    links: [
      {
        label: "Enrolment Procedures",
        href: "/admissions",
      },
      {
        label: "Requirements",
        href: "/admissions/requirements",
      },
      {
        label: "Tuition Fees",
        href: "/admissions/tuition-fees",
      },
      {
        label: "Financial Aid",
        href: "/admissions/financial-aid",
      },
    ],
  },

  links: [
    {
      label: "Student Life",
      href: "/student-life",
    },
    {
      label: "News & Events",
      href: "/news",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  applyButton: {
    label: "Apply Now",
    href: "/admissions",
  },
};

/* =========================================================
   HOMEPAGE — HERO
========================================================= */

export const heroContent = {
  title: "Your School Headline Goes Here",

  description:
    "Your school introduction or positioning statement goes here. Replace this placeholder text with the official content for the Village School of Parkwoods website.",

  buttons: {
    admissions: {
      label: "Inquire",
      href: "/contact",
    },

    about: {
      label: "Apply Now",
      href: "/contact",
    },
  },

  images: [
    "/Images/hero-image1.jpg",
    "/Images/hero-image2.jpg",
    "/Images/hero-image3.jpg",
    "/Images/hero-image4.jpg",
  ],

  imageAlt: "Village School of Parkwoods",

  carousel: {
    interval: 5000,
  },
};

/* =========================================================
   HOMEPAGE — BE A VSOPIAN
========================================================= */

export const whyVSOPContent = {
  label: "Be a VSOPian",

  interval: 5000,

  reasons: [
    {
      title: "Continuous Learning",
      text: "Students can progress from Kindergarten to Senior High School within one familiar school community, building their knowledge, skills, and confidence along the way.",
    },
    {
      title: "Accessible Education",
      text: "VSOP participates in government-supported programs such as ESC and the Senior High School Voucher Program, helping eligible learners access private education.",
    },
    {
      title: "College Ready",
      text: "Students develop the academic foundation, skills, and confidence needed to pursue higher education and prepare for their future plans.",
    },
    {
      title: "A School Community",
      text: "VSOP provides a supportive environment where students can learn, build relationships, develop their abilities, and grow as part of a school community.",
    },
  ],
};

/* =========================================================
   HOMEPAGE — EXPLORE OUR SCHOOL
========================================================= */

export const exploreContent = {
  heading: "Explore Our School",

  academicLevels: [
    {
      title: "Preschool",
      text: "Placeholder content for the Preschool program. Replace this text with the official description of the program, learning approach, and key information.",
      href: "/academics/basic-education/preschool",
      image: "/Images/image1.jpg",
      imageAlt: "Preschool",
    },
    {
      title: "Grade School",
      text: "Placeholder content for the Grade School program. Replace this text with the official description of the program, learning approach, and key information.",
      href: "/academics/basic-education/grade-school",
      image: "/Images/image2.jpg",
      imageAlt: "Grade School",
    },
    {
      title: "Junior High School",
      text: "Placeholder content for the Junior High School program. Replace this text with the official description of the program, learning approach, and key information.",
      href: "/academics/basic-education/junior-high-school",
      image: "/Images/image3.jpg",
      imageAlt: "Junior High School",
    },
    {
      title: "Senior High School",
      text: "Placeholder content for the Senior High School program. Replace this text with the official description of the program, learning approach, and key information.",
      href: "/academics/senior-high-school",
      image: "/Images/image4.jpg",
      imageAlt: "Senior High School",
    },
  ],
};

/* =========================================================
   HOMEPAGE — QUICK LOOK
========================================================= */

export const quickLookContent = {
  heading: "VSOP At A Glance",

  links: [
    {
      title: "About the School",
      text: "Placeholder content for information about the school.",
      href: "/about",
      image: "/Images/image1.jpg",
      alt: "About the School",
      size: "lg:col-span-2 lg:row-span-2",
    },

    {
      title: "Academics",
      text: "Placeholder content for academic programs and learning pathways.",
      href: "/academics",
      image: "/Images/image2.jpg",
      alt: "Academics",
      size: "lg:col-span-2 lg:row-span-1",
    },

    {
      title: "Admissions",
      text: "Placeholder content for enrollment and admission requirements.",
      href: "/admissions",
      image: "/Images/image3.jpg",
      alt: "Admissions",
      size: "lg:col-span-1 lg:row-span-1",
    },

    {
      title: "School Life",
      text: "Placeholder content for student life and school activities.",
      href: "/student-life",
      image: "/Images/image4.jpg",
      alt: "School Life",
      size: "lg:col-span-1 lg:row-span-1",
    },

    {
      title: "Campus & Facilities",
      text: "Placeholder content for the school's campus and facilities.",
      href: "/about#facilities",
      image: "/Images/image1.jpg",
      alt: "Campus & Facilities",
      size: "lg:col-span-1 lg:row-span-1",
    },

    {
      title: "News & Events",
      text: "Placeholder content for school news, announcements, and events.",
      href: "/news",
      image: "/Images/image2.jpg",
      alt: "News & Events",
      size: "lg:col-span-1 lg:row-span-1",
    },
  ],
};
/* =========================================================
   HOMEPAGE — CTA
========================================================= */

export const ctaContent = {
  description:
    "Placeholder content for the CTA section. Replace this text with the official call-to-action message for the school.",
  eyebrow: "Become Part of VSOP",

  title: "Your CTA Headline Goes Here.",

  button: {
    label: "Inquire",
    href: "/contact",
  },
};

/* =========================================================
   ABOUT — HISTORY
========================================================= */

export const historyContent = {
  hero: {
    eyebrow: "Our History",

    title: "A story built on learning, community, and purpose.",

    description:
      "Discover the journey of Village School of Parkwoods and the people, values, and milestones that have shaped our school community.",

    image: "/images/school-history.jpg",
  },

  introduction: {
    eyebrow: "Where It Began",

    title: "More than a school. A growing community.",

    paragraphs: [
      "Village School of Parkwoods was built with a vision to provide meaningful educational opportunities for children and young people within a caring and supportive community.",

      "From its beginnings to the school it is today, our journey has been shaped by the dedication of educators, families, students, and the wider community.",
    ],
  },

  foundation: {
    eyebrow: "The Foundation",

    title: "Built on a vision for better learning.",

    description:
      "Every school has a beginning. Ours started with a vision for creating an environment where students could learn, grow, and discover their potential.",

    image: "/images/school-history-old.jpg",

    imageAlt: "Village School of Parkwoods",

    year: "FOUNDING YEAR",
  },

  journey: {
    eyebrow: "Our Journey",

    title: "Milestones along the way.",

    description:
      "Each chapter of our history represents another step in the continuing journey of Village School of Parkwoods.",

    milestones: [
      {
        year: "YEAR",
        title: "The Beginning",
        text: "Add the official story of how Village School of Parkwoods was established and the vision behind its founding.",
      },
      {
        year: "YEAR",
        title: "Growing Our Community",
        text: "Add an important milestone describing the school's early growth, students, teachers, or developing community.",
      },
      {
        year: "YEAR",
        title: "Expanding Opportunities",
        text: "Add information about the introduction or expansion of academic programs, grade levels, activities, or facilities.",
      },
      {
        year: "YEAR",
        title: "A New Chapter",
        text: "Add a significant milestone that represents an important development in the school's continuing story.",
      },
      {
        year: "PRESENT",
        title: "Continuing the Journey",
        text: "Today, Village School of Parkwoods continues to build on its foundation while preparing students for the opportunities ahead.",
      },
    ],
  },

  values: {
    eyebrow: "What Remains",

    title: "The values that carry us forward.",

    items: [
      {
        title: "Learning",
        text: "Encouraging curiosity, knowledge, confidence, and a lifelong love of learning.",
      },
      {
        title: "Character",
        text: "Developing responsible, respectful, kind, and confident individuals.",
      },
      {
        title: "Community",
        text: "Building meaningful relationships among students, families, teachers, and the wider community.",
      },
      {
        title: "Purpose",
        text: "Creating educational experiences that help every learner move forward with confidence.",
      },
    ],
  },

  closing: {
    eyebrow: "Looking Ahead",

    title: "The story continues with every student.",

    description:
      "Explore our school, discover what we offer, and learn how Village School of Parkwoods can be part of your child's educational journey.",

    buttons: {
      about: {
        label: "About Our School",
        href: "/about",
      },

      admissions: {
        label: "Explore Admissions",
        href: "/admissions",
      },
    },
  },
};

/* =========================================================
   ABOUT — MISSION, VISION & CORE VALUES
========================================================= */

export const missionVisionContent = {
  hero: {
    eyebrow: "Our Purpose",

    title: "Guided by purpose. Inspired by possibility.",

    description:
      "Our mission, vision, and core values shape the way we teach, learn, grow, and build our school community.",

    image: "/Images/mission-vision.jpg",
  },

  introduction: {
    eyebrow: "What Guides Us",

    title: "Education with purpose and heart.",

    description:
      "At Village School of Parkwoods, we believe education is about more than academic achievement. It is about helping young people develop the knowledge, character, confidence, and sense of responsibility they need to thrive.",
  },

  vision: {
    eyebrow: "Our Vision",

    title: "Preparing learners for a meaningful future.",

    description:
      "To nurture confident, capable, and compassionate learners who are prepared to make a positive difference in their families, communities, and the wider world.",
  },

  mission: {
    eyebrow: "Our Mission",

    title: "Creating opportunities to learn, grow, and belong.",

    description:
      "We are committed to providing a supportive and engaging learning environment where students are encouraged to discover their potential, develop strong character, pursue excellence, and become responsible members of their community.",
  },

  values: {
    eyebrow: "Our Core Values",

    title: "The principles we live by.",

    description:
      "Our values influence how we teach, how we learn, and how we treat one another every day.",

    items: [
      {
        number: "01",
        title: "Excellence",
        description:
          "We strive for excellence in learning, teaching, creativity, and personal growth while encouraging every student to do their best.",
      },
      {
        number: "02",
        title: "Integrity",
        description:
          "We act with honesty, responsibility, respect, and accountability, even when no one is watching.",
      },
      {
        number: "03",
        title: "Respect",
        description:
          "We value every individual and create an environment where differences are respected, voices are heard, and everyone belongs.",
      },
      {
        number: "04",
        title: "Compassion",
        description:
          "We encourage kindness, empathy, generosity, and genuine care for others within and beyond our school community.",
      },
      {
        number: "05",
        title: "Responsibility",
        description:
          "We help students understand that their choices matter and encourage them to become responsible learners and members of society.",
      },
      {
        number: "06",
        title: "Curiosity",
        description:
          "We encourage students to ask questions, explore ideas, think critically, and remain curious about the world around them.",
      },
    ],
  },

  commitment: {
    eyebrow: "Our Commitment",

    title: "Every learner matters.",

    description:
      "Our mission and values come to life through the everyday experiences of our students, teachers, families, and community. Together, we create an environment where learners can feel supported, challenged, and inspired to move forward.",

    button: {
      label: "Learn About Our School",
      href: "/about",
    },
  },
};

/* =========================================================
   FOOTER
========================================================= */

export const footerContent = {
  brand: {
    name: "Village School of Parkwoods",

    title: "Your School Tagline Goes Here.",

    description:
      "Placeholder content for the school footer. Replace this text with the official school introduction, description, or brand statement.",
  },

  navigation: {
    heading: "Explore",

    links: [
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Academics",
        href: "/academics",
      },
      {
        label: "Student Life",
        href: "/student-life",
      },
      {
        label: "Admissions",
        href: "/admissions",
      },
      {
        label: "News & Events",
        href: "/news",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
  },

  contact: {
    heading: "Connect",

    address:
      "Block 6, Lot 6, Violago Homes, Parkwood Hills, Barangay Bagong Silangan, Quezon City, Metro Manila, Philippines",

    phone: "+63 918 911 6424",

    email: "vsparkwoods@gmail.com",
  },

  bottom: {
    copyright: "© 2026 Village School of Parkwoods. Demo website.",

    legal: [
      {
        label: "Privacy Policy",
        href: "/privacy",
      },
      {
        label: "Terms and Conditions",
        href: "/terms",
      },
    ],
  },
};

/* =========================================================
   ABOUT PAGE
========================================================= */

export const aboutContent = {
  navigation: [
    {
      id: "overview",
      label: "Overview",
      href: "/about",
    },
    {
      id: "history",
      label: "History",
      href: "/about#history",
    },
    {
      id: "mission-vision",
      label: "Mission, Vision & Core Values",
      href: "/about#mission-vision",
    },
    {
      id: "administration",
      label: "Administration",
      href: "/about#administration",
    },
    {
      id: "school-seal",
      label: "School Seal",
      href: "/about#school-seal",
    },
    {
      id: "recognitions",
      label: "Recognitions",
      href: "/about#recognitions",
    },
    {
      id: "accreditations",
      label: "Accreditations",
      href: "/about#accreditations",
    },
    {
      id: "facilities",
      label: "Facilities",
      href: "/about#facilities",
    },
    {
      id: "linkages",
      label: "Linkages",
      href: "/about#linkages",
    },
    {
      id: "hymn",
      label: "Hymn",
      href: "/about#hymn",
    },
    {
      id: "why-join-vsop",
      label: "Why Join VSOP",
      href: "/about#why-join-vsop",
    },
  ],

  hero: {
    eyebrow: "About the School",

    title: "Our Story",

    titleAccent: "& Community.",

    description:
      "Discover the story, people, values, and community behind Village School of Parkwoods — a place where students are encouraged to learn, grow, and belong.",

    backLabel: "Back to Home",
    backHref: "/",

    metadata: [
      {
        label: "School",
        value: "Village School of Parkwoods",
      },
      {
        label: "Education",
        value: "Preschool to Grade 12",
      },
      {
        label: "Community",
        value: "Learn · Grow · Belong",
      },
      {
        label: "Recognition",
        value: "DepEd-Recognized School",
      },
    ],
  },

  sections: {
    history: {
      id: "history",
      number: "01",
      eyebrow: "About the School",
      title: "History",
      description:
        "Discover the story of Village School of Parkwoods and the journey that shaped the school community we know today.",

      items: [
        {
          title: "Where It Started",
          text: "Village School of Parkwoods was established with a vision of creating an accessible and nurturing learning environment for young learners.",
        },
        {
          title: "Growing Together",
          text: "As the school community grew, VSOP continued to expand its educational programs and strengthen its commitment to quality basic education.",
        },
        {
          title: "VSOP Today",
          text: "Today, Village School of Parkwoods continues to provide education from Preschool through Senior High School, helping students learn, grow, and prepare for their next chapter.",
        },
      ],
    },

    missionVision: {
      id: "mission-vision",
      number: "02",
      eyebrow: "About the School",
      title: "Mission, Vision & Core Values",
      description:
        "The principles and aspirations that guide the VSOP community.",

      vision: {
        eyebrow: "Our Vision",
        title: "Developing learners prepared for a meaningful future.",
      },

      mission: {
        eyebrow: "Our Mission",
        description:
          "VSOP is committed to providing accessible, meaningful, and learner-centered education that develops knowledge, character, confidence, and a sense of responsibility.",
      },

      values: {
        eyebrow: "Core Values",

        items: ["Excellence", "Integrity", "Belonging"],
      },
    },

    administration: {
      id: "administration",
      number: "03",
      eyebrow: "About the School",
      title: "Administration",
      description:
        "Meet the leaders and administrators who help guide the VSOP community.",

      people: [
        {
          name: "School Administrator",
          role: "Administration",
        },
        {
          name: "Academic Coordinator",
          role: "Academic Affairs",
        },
        {
          name: "School Registrar",
          role: "Registrar",
        },
      ],
    },

    schoolSeal: {
      id: "school-seal",
      number: "04",
      eyebrow: "About the School",
      title: "School Seal",
      description:
        "Explore the meaning and symbolism behind the official seal of Village School of Parkwoods.",

      image: "/Images/VSOP-Logo.png",
      imageAlt: "Village School of Parkwoods seal",

      heading: "The symbolism of our identity.",

      text: "Every element of the school seal represents an important part of the identity, aspirations, and values of the VSOP community.",
    },

    recognitions: {
      id: "recognitions",
      number: "05",
      eyebrow: "About the School",
      title: "Recognitions",
      description:
        "Explore achievements, distinctions, and moments of excellence celebrated by VSOP.",

      heading: "Celebrating excellence.",

      text: "This section highlights the achievements and recognitions earned by the school community.",

      items: [
        "Academic Excellence",
        "Outstanding Students",
        "Leadership & Service",
        "School Achievements",
      ],
    },

    accreditations: {
      id: "accreditations",
      number: "06",
      eyebrow: "About the School",
      title: "Accreditations",
      description:
        "Learn about the accreditations, certifications, and educational standards upheld by VSOP.",

      text: "VSOP works within established educational standards and maintains relationships with institutions and organizations that support quality education.",

      organizations: [
        "Department of Education",
        "Private Education Assistance Committee",
        "Partner Educational Institutions",
      ],
    },

    facilities: {
      id: "facilities",
      number: "07",
      eyebrow: "About the School",
      title: "Facilities",
      description:
        "Take a closer look at the spaces designed to support student life and learning.",

      items: [
        {
          title: "Learning Spaces",
          image: "/Images/image1.jpg",
        },
        {
          title: "Student Areas",
          image: "/Images/image2.jpg",
        },
        {
          title: "School Facilities",
          image: "/Images/image3.jpg",
        },
        {
          title: "Community Spaces",
          image: "/Images/image4.jpg",
        },
      ],
    },

    linkages: {
      id: "linkages",
      number: "08",
      eyebrow: "About the School",
      title: "Linkages",
      description:
        "Discover the institutions and organizations connected to the VSOP community.",

      organizations: [
        "Department of Education",
        "Private Education Assistance Committee",
        "University of the Philippines",
      ],
    },

    hymn: {
      id: "hymn",
      number: "09",
      eyebrow: "About the School",
      title: "School Hymn",
      description:
        "The hymn that reflects the spirit, identity, and values of the VSOP community.",

      schoolName: "Village School of Parkwoods",
      label: "School Hymn",

      lyrics:
        "[School Hymn]\n\nReplace this text with the official\nVillage School of Parkwoods hymn.\n\nAdd the complete approved lyrics\nprovided by the school here.",
    },

    whyJoin: {
      id: "why-join-vsop",
      number: "10",
      eyebrow: "About the School",
      title: "Why Join VSOP",
      description:
        "See what makes VSOP a place where students can learn, grow, and belong.",

      items: [
        {
          title: "Continuous Learning",
          text: "Students can progress through their education within one familiar school community.",
        },
        {
          title: "Accessible Education",
          text: "Quality education designed to provide opportunities for learners and families.",
        },
        {
          title: "College Ready",
          text: "Students are guided toward the knowledge, skills, and confidence needed for higher education.",
        },
        {
          title: "A School Community",
          text: "A supportive environment where students can learn, grow, and belong.",
        },
      ],
    },
  },
};

/* =========================================================
   HOMEPAGE — MONTHLY CONTENT
========================================================= */

export const monthlyContent = {
  1: {
    month: "January",
    title: "A New Year of Learning",
    description:
      "Welcome to a new year at Village School of Parkwoods. We look forward to another year of learning, growth, and meaningful experiences.",
    image: "/Images/month-january.jpg",
    button: {
      label: "Learn More",
      href: "/news",
    },
  },

  2: {
    month: "February",
    title: "Growing Together",
    description:
      "February is a time to celebrate friendship, kindness, and the strong relationships that make our school community special.",
    image: "/Images/month-february.jpg",
    button: {
      label: "Explore School Life",
      href: "/student-life",
    },
  },

  3: {
    month: "March",
    title: "Celebrating Achievement",
    description:
      "As another school year reaches an important milestone, we celebrate the dedication, growth, and achievements of our learners.",
    image: "/Images/month-march.jpg",
    button: {
      label: "See What's Happening",
      href: "/news",
    },
  },

  4: {
    month: "April",
    title: "Learning Beyond the Classroom",
    description:
      "April is an opportunity to explore, reflect, and continue learning beyond the traditional classroom environment.",
    image: "/Images/month-april.jpg",
    button: {
      label: "Discover More",
      href: "/student-life",
    },
  },

  5: {
    month: "May",
    title: "Looking Ahead",
    description:
      "As the school year comes to a close, we celebrate the journey our students have taken and look ahead to new opportunities.",
    image: "/Images/month-may.jpg",
    button: {
      label: "Admissions",
      href: "/admissions",
    },
  },

  6: {
    month: "June",
    title: "Welcome Back to School",
    description:
      "A new school year begins. Welcome students and families to another year of learning, discovery, and community.",
    image: "/Images/month-june.jpg",
    button: {
      label: "Explore Academics",
      href: "/academics",
    },
  },

  7: {
    month: "July",
    title: "A New Chapter Begins",
    description:
      "The school year is underway. Together, we begin another chapter filled with learning, friendship, and new possibilities.",
    image: "/Images/month-july.jpg",
    button: {
      label: "Explore VSOP",
      href: "/about",
    },
  },

  8: {
    month: "August",
    title: "Celebrating Our Culture",
    description:
      "This month, we celebrate language, culture, identity, and the diverse experiences that enrich our school community.",
    image: "/Images/month-august.jpg",
    button: {
      label: "School Life",
      href: "/student-life",
    },
  },

  9: {
    month: "September",
    title: "Learning in Motion",
    description:
      "The school year continues with new lessons, new experiences, and opportunities for every learner to grow.",
    image: "/Images/month-september.jpg",
    button: {
      label: "What's New",
      href: "/news",
    },
  },

  10: {
    month: "October",
    title: "A Month of Discovery",
    description:
      "October brings opportunities for students to explore new ideas, develop their skills, and take part in school activities.",
    image: "/Images/month-october.jpg",
    button: {
      label: "Explore Student Life",
      href: "/student-life",
    },
  },

  11: {
    month: "November",
    title: "Growing With Gratitude",
    description:
      "November is a time to appreciate the people, experiences, and opportunities that shape our learning community.",
    image: "/Images/month-november.jpg",
    button: {
      label: "Discover VSOP",
      href: "/about",
    },
  },

  12: {
    month: "December",
    title: "Celebrating Together",
    description:
      "As the year comes to a close, we celebrate our community and the memories, achievements, and experiences we have shared.",
    image: "/Images/month-december.jpg",
    button: {
      label: "School News",
      href: "/news",
    },
  },
};
/* =========================================================
   HOMEPAGE — RECOGNIZED & SUPPORTED BY
========================================================= */

export const scrollingMarqueeContent = {
  heading: "Recognized & Supported By",

  animationDuration: 24,

  organizations: [
    {
      name: "Private Education Assistance Committee",
      logo: "/Images/peac-logo.png",
    },
    {
      name: "University of the Philippines",
      logo: "/Images/up-seal.png",
    },
    {
      name: "Department of Education",
      logo: "/Images/deped-logo.png",
    },
  ],
};

export const calendarContent = {
  academicYear: "Academic Year 2026–2027",

  eyebrow: "Academic Year 2026–2027",

  title: "School Calendar",

  description:
    "Stay up to date with important academic dates, school activities, holidays, and community events.",

  previousLabel: "Previous month",
  nextLabel: "Next month",
  fullCalendarLabel: "View Full Calendar",
  fullCalendarHref: "/calendar",

  featuredLabel: "Featured This Month",

  months: [
    {
      month: "June",
      year: "2026",
      events: [
        {
          date: "01",
          day: "Monday",
          title: "Opening of the Academic Year",
          category: "Academic",
        },
        {
          date: "05",
          day: "Friday",
          title: "Welcome and Orientation Program",
          category: "Event",
        },
        {
          date: "08",
          day: "Monday",
          title: "First Day of Classes",
          category: "Academic",
        },
        {
          date: "12",
          day: "Friday",
          title: "Independence Day",
          category: "Holiday",
        },
        {
          date: "15",
          day: "Monday",
          title: "Parent Orientation",
          category: "Event",
        },
        {
          date: "19",
          day: "Friday",
          title: "Student Leadership Orientation",
          category: "Event",
        },
        {
          date: "26",
          day: "Friday",
          title: "School Community Day",
          category: "Event",
        },
      ],
    },

    {
      month: "July",
      year: "2026",
      events: [
        {
          date: "03",
          day: "Friday",
          title: "School Spirit Activity",
          category: "Event",
        },
        {
          date: "10",
          day: "Friday",
          title: "Reading and Literacy Activities",
          category: "Academic",
        },
        {
          date: "17",
          day: "Friday",
          title: "Student Development Activities",
          category: "Event",
        },
        {
          date: "20",
          day: "Monday",
          title: "First Periodical Assessment",
          category: "Academic",
        },
        {
          date: "24",
          day: "Friday",
          title: "Parent-Teacher Consultation",
          category: "Event",
        },
        {
          date: "31",
          day: "Friday",
          title: "Faculty Development Activity",
          category: "Academic",
        },
      ],
    },

    {
      month: "August",
      year: "2026",
      events: [
        {
          date: "03",
          day: "Monday",
          title: "Nutrition Month Activities",
          category: "Event",
        },
        {
          date: "07",
          day: "Friday",
          title: "Nutrition Month Celebration",
          category: "Event",
        },
        {
          date: "17",
          day: "Monday",
          title: "Academic Enrichment Activities",
          category: "Academic",
        },
        {
          date: "21",
          day: "Friday",
          title: "Ninoy Aquino Day",
          category: "Holiday",
        },
        {
          date: "24",
          day: "Monday",
          title: "National Heroes Day",
          category: "Holiday",
        },
        {
          date: "28",
          day: "Friday",
          title: "School Community Activity",
          category: "Event",
        },
      ],
    },

    {
      month: "September",
      year: "2026",
      events: [
        {
          date: "01",
          day: "Tuesday",
          title: "School Month Activities",
          category: "Event",
        },
        {
          date: "07",
          day: "Monday",
          title: "First Quarter Academic Activities",
          category: "Academic",
        },
        {
          date: "14",
          day: "Monday",
          title: "First Periodical Assessment",
          category: "Academic",
        },
        {
          date: "18",
          day: "Friday",
          title: "Student Leadership Activities",
          category: "Event",
        },
        {
          date: "21",
          day: "Monday",
          title: "Faculty Development Day",
          category: "Academic",
        },
        {
          date: "25",
          day: "Friday",
          title: "School Spirit Day",
          category: "Event",
        },
        {
          date: "28",
          day: "Monday",
          title: "School Community Day",
          category: "Event",
        },
      ],
    },

    {
      month: "October",
      year: "2026",
      events: [
        {
          date: "01",
          day: "Thursday",
          title: "United Nations Month Opening",
          category: "Event",
        },
        {
          date: "05",
          day: "Monday",
          title: "World Teachers’ Day Celebration",
          category: "Event",
        },
        {
          date: "09",
          day: "Friday",
          title: "Teachers’ Appreciation Activity",
          category: "Event",
        },
        {
          date: "12",
          day: "Monday",
          title: "Midterm Academic Activities",
          category: "Academic",
        },
        {
          date: "16",
          day: "Friday",
          title: "Reading and Literacy Activities",
          category: "Academic",
        },
        {
          date: "23",
          day: "Friday",
          title: "United Nations Cultural Activities",
          category: "Event",
        },
        {
          date: "26",
          day: "Monday",
          title: "United Nations Month Activities",
          category: "Event",
        },
        {
          date: "31",
          day: "Saturday",
          title: "School Holiday",
          category: "Holiday",
        },
      ],
    },

    {
      month: "November",
      year: "2026",
      events: [
        {
          date: "02",
          day: "Monday",
          title: "All Souls’ Day",
          category: "Holiday",
        },
        {
          date: "06",
          day: "Friday",
          title: "Second Quarter Activities",
          category: "Academic",
        },
        {
          date: "09",
          day: "Monday",
          title: "Second Periodical Assessment",
          category: "Academic",
        },
        {
          date: "13",
          day: "Friday",
          title: "Student Wellness Activities",
          category: "Event",
        },
        {
          date: "20",
          day: "Friday",
          title: "Student Leadership Activities",
          category: "Event",
        },
        {
          date: "23",
          day: "Monday",
          title: "Parent-Teacher Consultation",
          category: "Event",
        },
        {
          date: "27",
          day: "Friday",
          title: "School Foundation Activity",
          category: "Event",
        },
      ],
    },

    {
      month: "December",
      year: "2026",
      events: [
        {
          date: "01",
          day: "Tuesday",
          title: "Christmas Activities Begin",
          category: "Event",
        },
        {
          date: "04",
          day: "Friday",
          title: "Christmas Classroom Activities",
          category: "Event",
        },
        {
          date: "07",
          day: "Monday",
          title: "Final Academic Activities",
          category: "Academic",
        },
        {
          date: "11",
          day: "Friday",
          title: "Community Giving Activity",
          category: "Event",
        },
        {
          date: "15",
          day: "Tuesday",
          title: "Christmas Classroom Celebrations",
          category: "Event",
        },
        {
          date: "18",
          day: "Friday",
          title: "Christmas Program",
          category: "Event",
        },
        {
          date: "19",
          day: "Saturday",
          title: "Christmas Break Begins",
          category: "Holiday",
        },
      ],
    },

    {
      month: "January",
      year: "2027",
      events: [
        {
          date: "04",
          day: "Monday",
          title: "Classes Resume",
          category: "Academic",
        },
        {
          date: "08",
          day: "Friday",
          title: "New Year School Assembly",
          category: "Event",
        },
        {
          date: "11",
          day: "Monday",
          title: "Academic Enrichment Week",
          category: "Academic",
        },
        {
          date: "15",
          day: "Friday",
          title: "Reading and Learning Activities",
          category: "Academic",
        },
        {
          date: "22",
          day: "Friday",
          title: "Student Development Activities",
          category: "Event",
        },
        {
          date: "25",
          day: "Monday",
          title: "Second Semester Orientation",
          category: "Event",
        },
        {
          date: "29",
          day: "Friday",
          title: "Parent-Teacher Consultation",
          category: "Event",
        },
      ],
    },

    {
      month: "February",
      year: "2027",
      events: [
        {
          date: "01",
          day: "Monday",
          title: "National Arts Month Opening",
          category: "Event",
        },
        {
          date: "05",
          day: "Friday",
          title: "Arts and Creativity Activities",
          category: "Event",
        },
        {
          date: "12",
          day: "Friday",
          title: "School Community Event",
          category: "Event",
        },
        {
          date: "15",
          day: "Monday",
          title: "Career Awareness Activities",
          category: "Academic",
        },
        {
          date: "19",
          day: "Friday",
          title: "Student Talent Activities",
          category: "Event",
        },
        {
          date: "22",
          day: "Monday",
          title: "Third Periodical Assessment",
          category: "Academic",
        },
        {
          date: "26",
          day: "Friday",
          title: "National Arts Month Culmination",
          category: "Event",
        },
      ],
    },

    {
      month: "March",
      year: "2027",
      events: [
        {
          date: "01",
          day: "Monday",
          title: "Career and Guidance Activities",
          category: "Event",
        },
        {
          date: "05",
          day: "Friday",
          title: "Career Exploration Activities",
          category: "Academic",
        },
        {
          date: "12",
          day: "Friday",
          title: "Final Academic Activities",
          category: "Academic",
        },
        {
          date: "15",
          day: "Monday",
          title: "Final Academic Assessment",
          category: "Academic",
        },
        {
          date: "19",
          day: "Friday",
          title: "Moving-Up Preparation",
          category: "Event",
        },
        {
          date: "22",
          day: "Monday",
          title: "Recognition & Completion Activities",
          category: "Event",
        },
        {
          date: "26",
          day: "Friday",
          title: "End-of-Year Celebration",
          category: "Event",
        },
        {
          date: "27",
          day: "Saturday",
          title: "End of Academic Year",
          category: "Academic",
        },
      ],
    },

    {
      month: "April",
      year: "2027",
      events: [
        {
          date: "01",
          day: "Thursday",
          title: "Summer Activity Planning",
          category: "Event",
        },
        {
          date: "05",
          day: "Monday",
          title: "Year-End Academic Review",
          category: "Academic",
        },
        {
          date: "09",
          day: "Friday",
          title: "Araw ng Kagitingan",
          category: "Holiday",
        },
        {
          date: "16",
          day: "Friday",
          title: "Student Portfolio Completion",
          category: "Academic",
        },
        {
          date: "23",
          day: "Friday",
          title: "School Year Closing Activities",
          category: "Event",
        },
        {
          date: "30",
          day: "Friday",
          title: "Faculty Year-End Conference",
          category: "Academic",
        },
      ],
    },

    {
      month: "May",
      year: "2027",
      events: [
        {
          date: "03",
          day: "Monday",
          title: "Enrollment Preparation",
          category: "Academic",
        },
        {
          date: "07",
          day: "Friday",
          title: "Summer Learning Activities",
          category: "Academic",
        },
        {
          date: "14",
          day: "Friday",
          title: "School Records and Clearance",
          category: "Academic",
        },
        {
          date: "21",
          day: "Friday",
          title: "Enrollment and Admissions Activities",
          category: "Event",
        },
        {
          date: "28",
          day: "Friday",
          title: "School Year Planning",
          category: "Academic",
        },
      ],
    },
  ],
};

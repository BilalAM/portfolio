/*
 * ============================================
 *  PORTFOLIO CONFIGURATION
 * ============================================
 *  Edit this file to customize your portfolio.
 *  All content is driven from this single file.
 *  No need to touch HTML or CSS.
 * ============================================
 */

window.PORTFOLIO_CONFIG = {

  // ── Meta / SEO ──────────────────────────────────
  meta: {
    title: "Bilal Asif Mirza | Software Backend Engineer",
    description: "Software engineer experienced with developing highly scalable and distributed systems. Expert in RESTful microservices, event-driven architecture and cloud native platforms.",
    ogImage: "assets/images/og-image.png",
  },

  // ── Navigation ──────────────────────────────────
  nav: {
    logo: "BAM",
    logoIsImage: false,
    links: [
      { label: "Qualification", href: "#qualification" },
      { label: "Experience", href: "#achievements" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    resumeLink: "assets/resume.pdf",
    resumeLabel: "Resume",
  },

  // ── Hero Section ────────────────────────────────
  hero: {
    avatar: "assets/images/profile.png",
    greeting: "Hi, I'm",
    name: "Bilal Asif Mirza",
    roles: [
      "Software Backend Engineer",
      "Distributed Systems Engineer",
      "Cloud Native Developer",
    ],
    tagline: "I am a backend engineer based in Munich, Germany. I am building, testing, breaking and engineering solutions for organizations for 7+ years. I am always up for new and exciting opportunities. Sometimes I code cool stuff as well. This is my website that showcases who I am :) ",
    cta: {
      primary: { label: "View Experience", href: "#achievements" },
      secondary: { label: "Get In Touch", href: "#contact" },
    },
    socialLinks: [
      { platform: "github",   url: "https://github.com/bilalam",            icon: "github" },
      { platform: "linkedin", url: "https://linkedin.com/in/bilalasifmirza", icon: "linkedin" },
      { platform: "email",    url: "mailto:bilal.asif.97@gmail.com",         icon: "email" },
    ],
  },

  // ── About Section ───────────────────────────────
  about: {
    heading: "About Me",
    image: null,  // Set to "assets/images/profile.jpg" when you have a photo
    bio: [
      "Software engineer experienced with developing and engineering highly scalable and distributed systems for the vacation rental industry and fintech organizations.",
      "Expert in RESTful microservices, event-driven architecture and cloud native platforms. Able to lead scalable and reliable deliverables. Based in Munich, Germany.",
    ],
    stats: [
      { value: "6+",   label: "Years Experience" },
      { value: "80K+", label: "Bookings/Month" },
      { value: "50K+", label: "Hosts Supported" },
      { value: "$5M+", label: "Revenue Impact" },
    ],
  },

  // ── Qualification (Tabbed: Education | Work) ────
  qualification: {
    heading: "Qualification",
    subtitle: "Where I've worked and what I've studied",
    defaultTab: "work",   // "work" or "education"
    education: [
      {
        title: "Bachelors in Software Engineering",
        place: "Bahria University — Karachi, Pakistan",
        period: "2014 - 2018",
      },
    ],
    work: [
      {
        title: "Software Engineer - Property Distribution",
        place: "Holidu GmbH — Munich, Germany",
        period: "April 2021 - Present",
        oneliner: "Distributed systems, 80K+ bookings/month, $5M+ eGMV impact",
      },
      {
        title: "Software Engineer Level 3",
        place: "SSNC Primatics Financial — Karachi, Pakistan",
        period: "October 2018 - March 2021",
        oneliner: "System modernization, 750K events/day, first microservice",
      },
    ],
  },

  // ── Achievements Section ────────────────────────
  achievements: {
    heading: "Experience & Impact",
    items: [
      {
        company: "Holidu",
        bullets: [
          "Architected event-driven microservices on AWS SQS, scaling property distribution to 50K+ hosts and 80K+ bookings/month",
          "Unified listing data across Airbnb, Booking.com, HomeAway & Check24 into one standardized model — 70K+ properties",
          "Shipped pricing & discount engines (Genius, NRR) driving $5M+ in incremental eGMV",
          "Built AI-powered error classification with Spring AI & LiteLLM, fully automating multi-channel response handling",
          "Led migration of legacy booking systems to high-performance microservices with improved reliability",
        ],
        tags: ["Java", "Kotlin", "Spring Boot", "AWS SQS", "Kubernetes", "Spring AI"],
        url: "https://www.holidu.com",
      },
      {
        company: "SSNC Primatics Financial",
        bullets: [
          "Modernized enterprise fintech platform from Java 5 to Java 8, unlocking performance gains & long-term maintainability",
          "Re-architected Maven build pipeline — cut build time by 90% (3 hours → 25 minutes)",
          "Deployed ActiveMQ on custom Docker images handling 750K events/day in production",
          "Delivered the company's first-ever microservice, establishing the pattern the team adopted going forward",
        ],
        tags: ["Java", "Maven", "ActiveMQ", "Docker", "Microservices"],
        url: "https://www.ssnc.com",
      },
      {
        company: "OSHI (Open Source)",
        bullets: [
          "Core contributor to OSHI — a widely-used Java library (5.2K+ GitHub stars) for cross-platform hardware info",
          "Designed & implemented SoundCard detection from scratch across Windows, FreeBSD & Solaris",
          "Multiple merged PRs spanning new platform features, sensor improvements & bug fixes (2018–2019)",
        ],
        tags: ["Java", "Open Source", "JNA", "Cross-Platform", "Hardware APIs"],
        url: "https://github.com/oshi/oshi",
      },
    ],
  },

  // ── Projects Section (hidden for now) ───────────
  projects: {
    heading: "Featured Projects",
    items: [],
  },

  // ── Skills Section ──────────────────────────────
  skills: {
    heading: "Technical Skills",
    categories: [
      {
        name: "Languages & Backend",
        icon: "code",
        items: ["Java", "Kotlin", "Spring Boot 3.5", "Spring AI", "REST APIs", "Liquibase", "Caffeine"],
      },
      {
        name: "Architecture & Patterns",
        icon: "server",
        items: ["Microservices", "Distributed Systems", "Event-Driven Architecture", "Domain-Driven Design", "CI/CD Pipelines"],
      },
      {
        name: "Cloud & DevOps",
        icon: "cloud",
        items: ["AWS SQS", "AWS Athena", "AWS S3", "Docker", "Kubernetes", "Jenkins", "Grafana", "Sentry"],
      },
    ],
  },

  // ── Contact Section ─────────────────────────────
  contact: {
    heading: "Get In Touch",
    description: "I'm actively exploring new opportunities and open to exciting roles. Whether you have a position in mind, a collaboration idea, or just want to connect — I'd love to hear from you. Always open for a chat.",
    email: "bilal.asif.97@gmail.com",
    location: "Munich, Germany",
    // Contact form uses mailto: — no backend needed for static sites
    socialLinks: [
      { platform: "github",   url: "https://github.com/bilalam",            icon: "github" },
      { platform: "linkedin", url: "https://linkedin.com/in/bilalasifmirza", icon: "linkedin" },
      { platform: "email",    url: "mailto:bilal.asif.97@gmail.com",         icon: "email" },
    ],
  },

  // ── Footer ──────────────────────────────────────
  footer: {
    text: "Designed & Built by Bilal Asif Mirza",
    showYear: true,
    showBackToTop: true,
    socialLinks: null,  // null = reuses hero.socialLinks
  },
};

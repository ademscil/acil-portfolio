export const personalInfo = {
  name: "Adam Juliansyah",
  role: "Senior Fullstack & Backend Systems Engineer",
  location: "Pangkalpinang, Indonesia",
  summary:
    "Senior Fullstack & Backend Systems Engineer with 5+ years of experience architecting high-availability enterprise web platforms, secure microservices, and automation systems at PT Astra Otoparts Tbk. Specialist in Next.js 16, React 19, Node.js Express 5 / Fastify, TypeScript, SQL Server, and enterprise test automation.",
  website: "https://adamjuliansyah.netlify.app",
  email: "adamjuliansyahcv@gmail.com",
  phone: "+62 818-0670-1775",
  linkedin: "https://www.linkedin.com/in/adam-juliansyah-43513517b/",
  github: "https://github.com/ademscil",
  cvFile: "/CV_adam-juliansyah.pdf",
};

export const highlights = [
  "Architecting enterprise monorepos (Next.js 16, React 19, Express 5, SQL Server) with 218 API endpoints & 2,780+ tests",
  "Dual corporate LDAP & JWT auth with httpOnly session token rotation & deny-by-default RBAC",
  "B2B digital commerce ecosystem integration (Desktop, Mobile, Admin, SAP ERP sync & Payment Gateway)",
  "Full-stack test automation frameworks: Appium (Mobile/Java) & Puppeteer (Web Automation)",
  "Defense-in-depth security: AES-256-GCM envelope encryption, HMAC blind indexing, and BeyondTrust PAM",
];

export const skills = {
  technical: [
    { name: "Node.js / Express 5 / Fastify", level: 92 },
    { name: "TypeScript / JavaScript (ES6+)", level: 90 },
    { name: "Next.js 16 / React 19", level: 88 },
    { name: "SQL Server (T-SQL, Migrations)", level: 88 },
    { name: "REST API Design / JWT Token Rotation", level: 94 },
    { name: "Appium / Mobile QA Automation", level: 82 },
    { name: "Puppeteer / Web Automation", level: 88 },
    { name: "Android / Kotlin", level: 75 },
    { name: "PostgreSQL / Prisma ORM", level: 82 },
    { name: "ASP.NET Core / C#", level: 78 },
    { name: "IIS (ARR Reverse Proxy) & Windows Server", level: 85 },
    { name: "Git & Monorepo Architecture", level: 90 },
  ],
  soft: [
    "Enterprise Systems Architecture",
    "Cross-functional Team Leadership",
    "Root Cause Analysis & Incident Resolution",
    "Technical Documentation & Architecture Guidelines",
    "Independent Remote & Hybrid Execution",
  ],
};

export const experience = [
  {
    title: "Software & Automation Developer",
    company: "PT Astra Otoparts Tbk",
    period: "2021 — Present",
    bullets: [
      "Architected CSI Eventurer (Enterprise Survey & Event Platform) monorepo: Next.js 16, React 19, TypeScript, Express 5, and SQL Server with 218 REST endpoints and 99 idempotent migrations.",
      "Engineered a rigorous automated testing suite consisting of 2,780+ automated unit and integration tests across 237 test suites with 0 regression escapes.",
      "Implemented dual corporate LDAP Active Directory and salted bcrypt authentication with httpOnly rotating JWT cookies and deny-by-default RBAC across 5 enterprise roles.",
      "Engineered dynamic Form Builder, multi-tier approval workflow, real-time Doorprize system (Roulette/Slot animations with audio sync), and privacy-first zero-PII QR attendance tokens.",
      "Developed Aspira SATSET Admin Portal (mechanic loyalty ecosystem) utilizing Next.js 16, ASP.NET Core REST APIs, RSA client payload encryption, and video content scoring workflows.",
      "Maintained 5 Astraotoshop B2B portals (Desktop, Mobile, Admin, SAP ERP sync API, Payment Gateway); authored the 'Zero-Mistake' Staging Migration Architecture preventing production data contamination.",
      "Built automated mobile testing framework with Appium, Java, Maven, and TestNG, alongside Puppeteer headless automation scripts reducing manual operational QA workload by >70%.",
    ],
  },
  {
    title: "IT Support (2nd-Level) & Systems Administrator",
    company: "PT Astra Otoparts Tbk",
    period: "2020 — 2021",
    bullets: [
      "Provided 2nd-level technical support for internal business units; resolved hardware, OS (Windows/Linux), network connectivity, and ERP application incidents adhering to strict Ivanti ITSM SLAs.",
      "Enforced BeyondTrust PAM superuser approval workflows, performed remote asset audits, and authored operational Standard Operating Procedures (WI).",
      "Monitored server clusters and production service health utilizing Dynatrace APM and OS log analysis to preempt system downtime.",
    ],
  },
  {
    title: "DevOps Intern",
    company: "Pasaryoo App",
    period: "2019 — 2020",
    bullets: [
      "Monitored SaaS backend services and microservice uptimes to guarantee production stability.",
      "Investigated production incidents through server log analysis and escalated actionable findings to senior engineering teams.",
      "Assisted engineering teams with CI/CD staging environments and deployment runbook documentation.",
    ],
  },
];

export const education = [
  {
    program: "Bachelor of Informatics (S1 Informatika)",
    institution: "Telkom University",
    period: "2014 — 2020",
    details:
      "Final Project: Data Collection System for Rainfall, Humidity, and Temperature as a Basis for Revalidating the Weather Research and Forecasting (WRF) Simulation Device.",
    subjects: ["Software Engineering", "Web Programming", "Distributed Systems", "IoT & Sensor Integration"],
  },
];

export const projects = [
  {
    name: "CSI Eventurer (Enterprise Survey & Event Governance)",
    description:
      "Mission-critical enterprise platform for PT Astra Otoparts Tbk. Monorepo architecture with 218 REST endpoints, 99 SQL Server migrations, 2,780+ automated tests, LDAP auth, rotating JWT cookies, dynamic form builder, multi-tier approval workflow, and automated analytics reports.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Node.js", "Express 5", "SQL Server", "IIS ARR", "LDAP"],
    highlights: ["Enterprise Monorepo", "218 REST Endpoints", "2,780+ Tests", "Multi-Tier Approval"],
    github: null,
    isEnterprise: true,
  },
  {
    name: "Aspira SATSET Admin Portal",
    description:
      "Centralized administrative portal for Astra OtoReward mechanic community. Features client-side RSA encrypted login, ASP.NET Core REST API reverse proxying, SQL Server connection pool fallback, mechanic content scoring, and reward merchandise logistics tracking.",
    stack: ["Next.js 16", "React 19", "TypeScript", "ASP.NET Core", "SQL Server", "Tailwind CSS v4"],
    highlights: ["Enterprise Admin", "RSA Encryption", "Content Scoring", "Rewards Logistics"],
    github: null,
    isEnterprise: true,
  },
  {
    name: "Astraotoshop B2B Commercial Ecosystem & POC Migration",
    description:
      "Engineered and maintained 5 interconnected wholesale portals: Desktop, Mobile Web, Admin Panel, SAP ERP Sync API, and Payment Gateway. Authored the Zero-Mistake POC Migration Architecture and automated verification pre-scanners.",
    stack: ["Node.js", "JavaScript", "SQL Server", "SAP API", "IIS", "Windows Task Scheduler"],
    highlights: ["B2B E-Commerce", "SAP ERP Sync", "Zero-Mistake Migration", "High Throughput"],
    github: null,
    isEnterprise: true,
  },
  {
    name: "B2B Mobile & Web Test Automation Suites",
    description:
      "Comprehensive end-to-end test automation frameworks. Built mobile app testing with Appium, Java, Maven, and TestNG, and automated browser operations using Puppeteer and Node.js.",
    stack: ["Appium", "Java", "TestNG", "Maven", "Puppeteer", "Node.js"],
    highlights: ["Mobile Automation", "Regression Testing", "Headless QA", "Quality Gates"],
    github: null,
    isEnterprise: true,
  },
  {
    name: "SIM-RT Enterprise Monorepo v3.0",
    description:
      "Clean architecture monorepo for neighborhood community governance. Fastify 5 REST & SSE backend, React 19 admin panel, CapacitorJS Android super-app, PostgreSQL RLS, AES-256-GCM envelope encryption, blind indexing, and anti-tamper ledger hash chaining.",
    stack: ["Fastify 5", "React 19", "CapacitorJS", "PostgreSQL RLS", "AES-256-GCM", "Turborepo"],
    highlights: ["Clean Monorepo", "Cryptographic Vault", "PostgreSQL RLS", "Offline-Ready"],
    github: null,
    isEnterprise: true,
  },
  {
    name: "Dishub Trayek GIS Transit App",
    description:
      "Native Android GIS public transit route tracking application for Department of Transportation (Dishub). Features GeoJSON spatial mapping, route visualization, transit stop heuristic mapping, and offline-capable search.",
    stack: ["Android", "Kotlin", "GeoJSON", "GIS Mapping", "Spatial Heuristics"],
    highlights: ["Android Native", "GIS GeoJSON", "Heuristic Search", "Government"],
    github: null,
    isEnterprise: true,
  },
  {
    name: "SaaS Wedding Multi-Tenant Platform",
    description:
      "Production-grade multi-tenant digital invitation SaaS platform. Features dynamic guest management, RSVP workflows, digital gifting, Prisma ORM schema migrations, Playwright E2E tests, and Docker orchestration.",
    stack: ["Next.js", "Prisma ORM", "PostgreSQL", "Docker", "Playwright", "Vitest"],
    highlights: ["Multi-Tenant SaaS", "Prisma ORM", "Playwright E2E", "Docker"],
    github: null,
    isEnterprise: true,
  },
  {
    name: "PortalMasjid Governance Platform",
    description:
      "Community mosque administration and financial transparency platform. Features real-time donation tracking, financial report generation, prayer scheduling, and committee access management.",
    stack: ["Next.js", "TypeScript", "Prisma ORM", "Tailwind CSS"],
    highlights: ["Financial Transparency", "Fullstack", "Prisma", "Community"],
    github: null,
    isEnterprise: true,
  },
  {
    name: "Event Doorprize Interactive Draw System",
    description:
      "Real-time interactive lucky draw platform for Astra corporate events. Features fair randomization logic, multi-display support, high-framerate visual animations (Roulette, Swiper, Slot), and synchronized audio effects.",
    stack: ["JavaScript", "Node.js", "Canvas", "Audio API", "Real-Time"],
    highlights: ["Fair Randomization", "Event Tool", "High Engagement", "Interactive UI"],
    github: "https://github.com/ademscil/doorprize-app",
    isEnterprise: false,
  },
  {
    name: "Kejaksaan Babar Agenda",
    description:
      "Official agenda and schedule management system for Kejaksaan Negeri Bangka Barat, built with Astro framework for static-first high performance and zero JavaScript runtime overhead.",
    stack: ["Astro", "TypeScript", "Tailwind CSS", "Static Site"],
    highlights: ["Government", "Ultra Fast", "Astro", "SEO Optimized"],
    github: "https://github.com/ademscil/kejaksaan-babar-agenda",
    isEnterprise: false,
  },
];

export const certifications = [
  {
    name: "Fullstack Node.js Bootcamp",
    issuer: "Certificate Code ID",
  },
  {
    name: "BeyondTrust Privileged Access Management (PAM) Operational Compliance",
    issuer: "PT Astra Otoparts Tbk",
  },
];

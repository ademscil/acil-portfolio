export const personalInfo = {
  name: "Adam Juliansyah",
  role: "Backend / Fullstack Developer",
  location: "Pangkalpinang, Indonesia",
  summary:
    "Backend / Fullstack-focused developer with hands-on experience building internal tools, enterprise web applications, and automation systems. Experienced in REST API integration, JWT authentication, SAP API integration, and system troubleshooting.",
  website: "https://adamjuliansyah.netlify.app",
  email: "adamjuliansyahcv@gmail.com",
  phone: "+62 818-0670-1775",
  linkedin: "https://www.linkedin.com/in/adam-juliansyah-43513517b/",
  github: "https://github.com/ademscil",
  cvFile: "/CV_adam-juliansyah.pdf",
};

export const highlights = [
  "Building enterprise web apps with Node.js, Laravel, React & Next.js",
  "REST API integration, JWT auth, and SAP API integration",
  "Web automation (Puppeteer) & mobile testing (Appium)",
  "System monitoring with Dynatrace & log analysis",
  "Cross-functional collaboration in remote environments",
];

export const skills = {
  technical: [
    { name: "Node.js", level: 90 },
    { name: "JavaScript (ES6+)", level: 88 },
    { name: "TypeScript", level: 80 },
    { name: "Laravel (PHP)", level: 80 },
    { name: "React / Next.js", level: 78 },
    { name: "SQL Server", level: 85 },
    { name: "REST API / JWT", level: 90 },
    { name: "Puppeteer", level: 85 },
    { name: "Appium", level: 70 },
    { name: "Astro", level: 72 },
    { name: "Git", level: 85 },
    { name: "Linux / Windows / macOS", level: 80 },
  ],
  soft: [
    "Problem Solving",
    "Cross-functional Communication",
    "Independent Remote Work",
    "Technical Documentation",
    "System Troubleshooting",
  ],
};

export const experience = [
  {
    title: "Software & Automation Developer",
    company: "PT Astra Otoparts Tbk",
    period: "2024 — Present",
    bullets: [
      "Develop internal tools and enterprise web applications using Node.js, Laravel, and Next.js integrated with SQL Server and SAP APIs.",
      "Implement JWT authentication and role-based access control for secure system access.",
      "Build interactive business modules, including event management and doorprize systems with fair randomization logic.",
      "Develop web automation (Puppeteer) and mobile automation testing solutions (Appium) to reduce manual operational workload.",
      "Integrate internal/external services via REST APIs and handle JSON-based data processing.",
      "Troubleshoot and resolve application issues using logs and monitoring tools.",
    ],
  },
  {
    title: "IT Support (2nd-Level)",
    company: "PT Astra Otoparts Tbk",
    period: "2023 — 2024",
    bullets: [
      "Provided 2nd-level IT support for internal users across multiple departments.",
      "Resolved hardware and software incidents, including OS, network connectivity, and application-related issues.",
      "Analyzed system and application logs (Windows and Linux) to identify root causes and prevent recurring incidents.",
      "Tracked incidents and service requests in Ivanti according to SLA and documented resolutions.",
    ],
  },
  {
    title: "DevOps Intern",
    company: "Pasaryoo App",
    period: "2020 — 2021",
    bullets: [
      "Monitored backend services and application performance to support a stable SaaS environment.",
      "Investigated production issues using logs and monitoring tools, escalating findings to engineering teams.",
      "Assisted frontend and backend teams with environment setup, deployment support, and basic troubleshooting.",
      "Contributed to documentation of deployment steps and system behavior for operational clarity.",
    ],
  },
];

export const education = [
  {
    program: "Bachelor of Informatics (S1 Informatika)",
    institution: "Telkom University",
    period: "2014 — 2020",
    details:
      "Final Project: Data Collection System for Rainfall, Humidity, and Temperature as a Basis for Revalidating the WRF Simulation Device.",
    subjects: ["Web Programming", "Software Engineering", "Sensor Integration", "IoT Systems"],
  },
];

export const projects = [
  {
    name: "Event Management System",
    description:
      "Full-stack event management platform with separate backend (Node.js REST API) and frontend (TypeScript/React). Features event CRUD, participant management, and real-time updates.",
    stack: ["Node.js", "TypeScript", "React", "REST API"],
    highlights: ["Full-stack", "REST API", "Real-time"],
    github: "https://github.com/ademscil/Event-Management-BE",
  },
  {
    name: "Doorprize App",
    description:
      "Interactive doorprize/lucky draw application with fair randomization logic for corporate events. Built with JavaScript for seamless real-time participant selection.",
    stack: ["JavaScript", "Node.js", "Randomization Logic"],
    highlights: ["Interactive", "Fair Algorithm", "Real-time"],
    github: "https://github.com/ademscil/doorprize-app",
  },
  {
    name: "Nurul Jannah Mosque Website",
    description:
      "Community mosque website built with TypeScript for managing information, schedules, and community activities for Masjid Nurul Jannah.",
    stack: ["TypeScript", "Web App"],
    highlights: ["Community", "TypeScript", "Responsive"],
    github: "https://github.com/ademscil/nuruljannah-mosque",
  },
  {
    name: "Photobooth App",
    description:
      "Digital photobooth application built with TypeScript, enabling users to capture, filter, and share photos during events.",
    stack: ["TypeScript", "Camera API", "Canvas"],
    highlights: ["Interactive", "Media API", "Event Tool"],
    github: "https://github.com/ademscil/photobooth",
  },
  {
    name: "Kejaksaan Babar Agenda",
    description:
      "Agenda management system for Kejaksaan (prosecutor's office) built with Astro framework for fast, static-first performance.",
    stack: ["Astro", "TypeScript", "Static Site"],
    highlights: ["Government", "Fast", "Astro"],
    github: "https://github.com/ademscil/kejaksaan-babar-agenda",
  },
  {
    name: "PII PKP Organization Website",
    description:
      "Professional organization website for PII (Persatuan Insinyur Indonesia) Pangkalpinang chapter, built with TypeScript.",
    stack: ["TypeScript", "Web App"],
    highlights: ["Organization", "Professional", "Responsive"],
    github: "https://github.com/ademscil/pii-pkp",
  },
  {
    name: "Arycons Company Profile",
    description:
      "Corporate company profile website built with Laravel (Blade templating) for Arycons, showcasing services and portfolio.",
    stack: ["Laravel", "Blade", "PHP"],
    highlights: ["Corporate", "Laravel", "CMS"],
    github: "https://github.com/ademscil/arycons-profile",
  },
  {
    name: "Eko Car Rental PKP",
    description:
      "Car rental platform for a local business in Pangkalpinang, featuring vehicle listings and booking information.",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: ["Local Business", "Booking", "Responsive"],
    github: "https://github.com/ademscil/eko-car-rentpkp",
  },
];

export const certifications = [
  {
    name: "Fullstack Node.js Bootcamp",
    issuer: "Certificate Code ID",
  },
];
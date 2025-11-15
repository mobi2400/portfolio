// Copyright Md Mobasshir Shakil Khan 2021,2025. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/md-mobasshir-shakil-khan-8ba835326/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Md Mobasshir Shakil Khan | Portfolio",
  description:
    "Full-stack engineer crafting resilient MERN experiences, hackathon tools, and community-first products.",
  siteUrl: "https://mobi2400.github.io/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Tech Stack",
    ref: "tech-stack",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const getMenuRef = (name: string): string => {
  const match = MENULINKS.find((link) => link.name === name);
  return match?.ref ?? name.toLowerCase().replace(/\s+/g, "-");
};

export const TYPED_STRINGS = [
  "I build MERN applications",
  "I explore AI/ML every day",
  "I contribute to open source",
  "I design seamless user journeys",
];

export const EMAIL = "mobasshirkhan9931@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/md-mobasshir-shakil-khan-8ba835326/",
  github: "https://github.com/mobi2400",
  instagram: "https://www.instagram.com/mobi__2400/",
  twitter: "https://twitter.com/mobi2400",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

const PROJECT_PLACEHOLDER = "/project-bg.svg";
const PROJECT_BLUR_PLACEHOLDER =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

export const PROJECTS: IProject[] = [
  {
    name: "NaiUdaan - Library Management System",
    image: "/projects/naiUdaan.png",
    blurImage: PROJECT_BLUR_PLACEHOLDER,
    description:
      "Digitized library operations for community learning centers with inventory tracking, lending workflows, and student analytics.",
    gradient: ["#0f172a", "#1e293b"],
    url: "https://github.com/mobi2400/Project-Beta-Backend-Library-Management-System-",
    tech: ["react", "typescript", "tailwind"],
  },
  {
    name: "DebSoc",
    image: "/projects/debsoc.png",
    blurImage: PROJECT_BLUR_PLACEHOLDER,
    description:
      "A modern debate society hub featuring speaker lineups, asynchronous motions, and RSVP tooling for campus events.",
    gradient: ["#111827", "#1f2937"],
    url: "https://github.com/mobi2400/Debsoc2.0",
    tech: ["next", "tailwind", "javascript"],
  },
  {
    name: "CurriculaFlex",
    image: "/projects/solAttendance.png",
    blurImage: PROJECT_BLUR_PLACEHOLDER,
    description:
      "Adaptive course planning platform that maps skills to modules, helping students personalize learning tracks.",
    gradient: ["#0f766e", "#0d9488"],
    url: "https://github.com/mobi2400/sol-attendance",
    tech: ["react", "typescript", "express"],
  },
];

export const SKILLS = {
  core: ["MongoDB", "Express.js", "React", "Next.js", "Node.js"],
  data: ["PostgreSQL", "Prisma ORM"],
  tooling: ["Docker", "TypeScript", "Tailwind CSS"],
};

export const GTAG = "UA-163844688-1";

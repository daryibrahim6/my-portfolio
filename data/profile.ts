export const profile = {
  name: "Dary Ibrahim Akram",
  role: "Frontend Developer",
  location: "Bekasi, Indonesia",
  email: "daryibrahimakram@gmail.com",

  tagline:
    "I build interfaces that feel right and systems that hold up — frontend-first, with enough backend knowledge to ship end-to-end.",

  about: {
    short:
      "I'm an Informatics student with a focus on frontend engineering and system design. I care about the details — how data flows, how states are managed, and how a UI decision affects the whole system.\n\nCurrently leading the development of DonorDermayu, a real-world workflow system for PMI Indramayu. Looking for opportunities to work on products where technical quality actually matters.",

    focus: "Frontend Engineering",
    interest: "Computer Vision",
    stack: "Next.js · Laravel · MySQL",
    availability: "Open for opportunities",
  },

  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    backend: ["Laravel", "Node.js", "Express", "MySQL", "REST APIs"],
    tools: ["Git", "Figma", "VS Code", "Postman", "Docker"],
    soft: ["System Thinking", "Team Leadership", "Problem Solving", "Agile"],
  },

  resume: {
    summary: [
      "Build frontend-first web apps with React and Next.js, connected to REST APIs.",
      "Lead small teams — define tasks, review code, keep scope realistic.",
      "Comfortable designing data flows, auth systems, and admin workflows.",
    ],
    education: [
      {
        school: "Politeknik Negeri Indramayu (PNI)",
        degree: "D4 — Sistem Informasi Kota Cerdas",
        period: "2023 — Present",
        note: "Focus: web systems, GIS, applied data, and ML experiments.",
      },
    ],
    highlights: [
      "Leading development of DonorDermayu — a fullstack workflow system for PMI Indramayu.",
      "Shipped a YOLOv8 helmet detection model trained on a custom 2,000-image dataset.",
      "Built SIPEDA, a public WebGIS portal for blood donation locations.",
    ],
  },

  links: {
    github:    "https://github.com/daryibrahim6",
    linkedin:  "https://linkedin.com/in/dary-ibrahim-akram",
    instagram: "https://www.instagram.com/daryibrahim.a?igsh=ejlpaHljZ2c5bjRh",
    whatsapp:  "08119198611",
  },
} as const;
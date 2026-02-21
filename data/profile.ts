export const profile = {
  name: "Dary Ibrahim Akram",
  role: "Frontend Developer",
  location: "Bekasi, Indonesia",
  email: "daryibrahimakram@gmail.com",

  tagline: {
    // Rewrite: konkret, ada bukti nyata di kalimat pertama
    en: "Currently leading DonorDermayu — a fullstack workflow system for PMI Indramayu. Frontend-first, but I own the full stack when needed.",
    id: "Saat ini memimpin DonorDermayu — sistem workflow fullstack untuk PMI Indramayu. Fokus frontend, tapi saya tangani full stack saat dibutuhkan.",
  },

  about: {
    focus: "Frontend Engineering",
    interest: "AI / Computer Vision",
    stack: "Next.js · TypeScript · Tailwind CSS",
    availability: { en: "Open for opportunities", id: "Terbuka untuk peluang" },
  },

  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    backend: ["Laravel", "Node.js", "Express", "MySQL", "Supabase", "PostgreSQL", "REST APIs"],
    tools: ["Git", "Figma", "VS Code", "Postman", "Docker", "Vercel"],
    soft: ["System Thinking", "Team Leadership", "Problem Solving", "Agile"],
  },

  // Grouped tech — lebih jujur dari persentase, lebih mudah di-scan recruiter
  techGroups: {
    primary: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    secondary: ["Laravel", "MySQL", "Supabase", "PostgreSQL", "REST APIs", "Node.js"],
    learning: ["Python", "YOLOv8", "Computer Vision"],
  },

  resume: {
    summary: {
      en: [
        "Build frontend-first web apps with React and Next.js, connected to REST APIs.",
        "Lead small teams — define tasks, review code, keep scope realistic.",
        "Comfortable designing data flows, auth systems, and admin workflows.",
      ],
      id: [
        "Membangun web app frontend-first dengan React dan Next.js, terhubung ke REST API.",
        "Memimpin tim kecil — membagi tugas, review kode, menjaga scope tetap realistis.",
        "Nyaman merancang alur data, sistem auth, dan workflow admin.",
      ],
    },
    education: {
      school: "Politeknik Negeri Indramayu (Polindra)",
      degree: { en: "D4 — Smart City Information Systems", id: "D4 — Sistem Informasi Kota Cerdas" },
      period: "2023 — Present",
      note: {
        en: "Focus: web systems, GIS, applied data, and ML experiments.",
        id: "Fokus: sistem web, GIS, data terapan, dan eksperimen ML.",
      },
    },
    highlights: {
      en: [
        "Leading development of DonorDermayu — a fullstack workflow system for PMI Indramayu.",
        "Shipped a YOLOv8 helmet detection model trained on a custom 2,000-image dataset.",
        "Built SIPEDA — a live full-stack Next.js + Supabase blood donation platform with public portal and admin panel.",
      ],
      id: [
        "Memimpin pengembangan DonorDermayu — sistem workflow fullstack untuk PMI Indramayu.",
        "Membuat model deteksi helm YOLOv8 yang dilatih pada dataset custom 2.000 gambar.",
        "Membangun SIPEDA — platform donor darah full-stack Next.js + Supabase dengan portal publik dan panel admin, live di Vercel.",
      ],
    },
  },

  links: {
    github: "https://github.com/daryibrahim6",
    linkedin: "https://www.linkedin.com/in/dary-ibrahim-akram-b3253734a/",
    instagram: "https://www.instagram.com/daryibrahim.a",
    whatsapp: "",
  },
} as const;
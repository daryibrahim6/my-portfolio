export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  role: string;
  highlights: string[];
  stack: string[];
  status?: string;
  statusTone: "neutral" | "success" | "info" | "warning" | "danger";
  period: string;
  links?: { demo?: string; repo?: string };
};

export const projects: Project[] = [
  {
    slug: "donordermayu",
    title: "DonorDermayu",
    subtitle: "Blood donation event management system",
    description:
      "A workflow-driven system for managing blood donation events at PMI Indramayu. I lead a small team building the full pipeline — from event submission and survey, through multi-role approval, to scheduling, QR check-in, and WebGIS mapping.",
    longDescription:
      "PMI Indramayu manages dozens of blood donation events per year, previously handled manually through WhatsApp and spreadsheets. DonorDermayu replaces that with a structured digital workflow.\n\nAs team lead, I defined the system architecture, broke down tasks across team members, and handled the frontend implementation in Next.js. The system supports three distinct roles — admin, operator, and donor — each with their own dashboard and permission scope.\n\nThe core flow starts when an organization submits a donation event request. It goes through a health survey stage, gets reviewed by an operator, and either gets approved with a schedule or returned for revision. On event day, operators use QR check-in to validate donors. All event locations are plotted on a WebGIS map accessible to the public.",
    role: "Team Lead & Frontend Developer",
    highlights: [
      "Led a team from architecture planning to implementation",
      "Role-based access: admin, operator, and donor with separate dashboards",
      "Request → survey → approval pipeline with full status tracking",
      "QR code check-in for faster on-site donor validation",
      "WebGIS map for visualizing all event locations across Indramayu",
      "REST API integration between Next.js frontend and Laravel backend",
    ],
    stack: ["Next.js", "Laravel", "MySQL", "REST API", "JWT Auth", "Leaflet.js", "WebGIS"],
    status: "In Development",
    statusTone: "info",
    period: "2024 — Present",
    links: { demo: "", repo: "" },
  },
  {
    slug: "sipeda",
    title: "SIPEDA",
    subtitle: "Public blood donation map portal",
    description:
      "A public-facing portal for citizens to find nearby blood donation locations and browse event schedules. Built intentionally with Vanilla JS to sharpen my fundamentals before moving to frameworks.",
    longDescription:
      "SIPEDA (Sistem Informasi Pendonor Darah) is a lightweight public portal designed for one purpose: help people in Indramayu find where and when they can donate blood.\n\nI built this project deliberately without any framework — no React, no Vue, just HTML, CSS, and plain JavaScript. The goal was to understand exactly how DOM manipulation, event handling, and fetch requests work before abstracting them away with a library.\n\nThe result is a fast, dependency-free map portal where visitors can see all registered donation locations pinned on an interactive map, filter by area, and view upcoming schedule details — all without needing to create an account.",
    role: "Sole Developer",
    highlights: [
      "Interactive map built with Leaflet.js for location discovery",
      "Zero-framework approach — intentional choice to learn DOM fundamentals",
      "Schedule browsing without requiring user registration",
      "Lightweight and fast — no build step, no bundle",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Leaflet.js"],
    status: "Completed",
    statusTone: "success",
    period: "2024",
    links: { demo: "", repo: "" },
  },
  {
    slug: "helmet-detection",
    title: "Helmet Detection",
    subtitle: "Computer vision experiment — YOLOv8 + Streamlit",
    description:
      "An object detection experiment for identifying motorcyclists without helmets. I handled the full ML pipeline: dataset collection and annotation via Roboflow, YOLOv8 training on ~2,000 images, and deploying an interactive demo on Streamlit.",
    longDescription:
      "This project started as a curiosity — I wanted to understand how object detection models actually work end-to-end, not just call a pre-trained API.\n\nI built the entire pipeline from scratch: sourced raw images, annotated them manually using Roboflow (labeling 'helmet' and 'no helmet' classes across ~2,000 images), trained a YOLOv8 model using PyTorch, and deployed the result as an interactive Streamlit app.\n\nThe demo lets you upload an image or use a webcam, and the model draws bounding boxes with confidence scores around detected heads. You can adjust the confidence threshold in real time to see how it affects detection sensitivity.\n\nThis was a deliberate side project to explore computer vision as a complement to my web development work — I was curious whether ML skills could eventually integrate into web apps (e.g., browser-side inference with ONNX).",
    role: "Sole Developer",
    highlights: [
      "Full ML pipeline from scratch: collect → annotate → train → deploy",
      "~2,000 image custom dataset annotated via Roboflow",
      "YOLOv8 model trained with PyTorch on custom classes",
      "Live Streamlit demo with real-time confidence threshold control",
      "Explored ONNX export for potential browser-side inference",
    ],
    stack: ["Python", "YOLOv8", "OpenCV", "PyTorch", "Streamlit", "Roboflow"],
    status: "Live",
    statusTone: "success",
    period: "2024",
    links: {
      demo: "https://helmet-detection-fix-2ebqzyn4vabge45zbgg2yj.streamlit.app/",
      repo: "https://github.com/daryibrahim6/Helmet-Detection-fix",
    },
  },
];
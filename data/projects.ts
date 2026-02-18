export type Project = {
  slug: string;
  title: string;
  subtitle: { en: string; id: string };
  description: { en: string; id: string };
  longDescription: { en: string; id: string };
  role: { en: string; id: string };
  highlights: { en: string; id: string }[];
  stack: string[];
  status: { en: string; id: string };
  statusTone: "neutral" | "success" | "info" | "warning" | "danger";
  period: string;
  image?: string; // path ke /public/images/projects/xxx.png
  links?: { demo?: string; repo?: string };
};

export const projects: Project[] = [
  {
    slug: "donordermayu",
    title: "DonorDermayu",
    subtitle: {
      en: "Blood donation event management system",
      id: "Sistem manajemen donor darah",
    },
    description: {
      en: "A workflow-driven system for managing blood donation events at PMI Indramayu — submissions, surveys, approval flow, scheduling, QR check-in, and WebGIS mapping.",
      id: "Sistem berbasis workflow untuk manajemen kegiatan donor darah PMI Indramayu — pengajuan, survei, alur persetujuan, penjadwalan, QR check-in, dan peta WebGIS.",
    },
    longDescription: {
      en: "PMI Indramayu manages dozens of blood donation events per year, previously handled manually through WhatsApp and spreadsheets. DonorDermayu replaces that with a structured digital workflow.\n\nAs team lead, I defined the system architecture, broke down tasks across team members, and handled the frontend implementation in Next.js. The system supports three distinct roles — admin, operator, and donor — each with their own dashboard and permission scope.\n\nThe core flow starts when an organization submits a donation event request. It goes through a health survey stage, gets reviewed by an operator, and either gets approved with a schedule or returned for revision. On event day, operators use QR check-in to validate donors. All event locations are plotted on a WebGIS map accessible to the public.",
      id: "PMI Indramayu mengelola puluhan kegiatan donor darah per tahun yang sebelumnya ditangani manual melalui WhatsApp dan spreadsheet. DonorDermayu menggantinya dengan alur kerja digital yang terstruktur.\n\nSebagai team lead, saya mendefinisikan arsitektur sistem, membagi tugas antar anggota tim, dan menangani implementasi frontend di Next.js. Sistem mendukung tiga peran berbeda — admin, operator, dan donor — masing-masing dengan dashboard dan scope izin tersendiri.\n\nAlur utama dimulai ketika organisasi mengajukan permohonan kegiatan donor. Permohonan melewati tahap survei kesehatan, ditinjau oleh operator, lalu disetujui dengan jadwal atau dikembalikan untuk revisi. Pada hari kegiatan, operator menggunakan QR check-in untuk memvalidasi donor.",
    },
    role: { en: "Team Lead & Frontend Developer", id: "Team Lead & Frontend Developer" },
    highlights: [
      { en: "Led a team from architecture planning to implementation", id: "Memimpin tim dari perencanaan arsitektur hingga implementasi" },
      { en: "Role-based access: admin, operator, and donor with separate dashboards", id: "Akses berbasis peran: admin, operator, dan donor dengan dashboard terpisah" },
      { en: "Request → survey → approval pipeline with full status tracking", id: "Pipeline pengajuan → survei → persetujuan dengan tracking status lengkap" },
      { en: "QR code check-in for faster on-site donor validation", id: "QR check-in untuk validasi donor di lapangan yang lebih cepat" },
      { en: "WebGIS map for all event locations across Indramayu", id: "Peta WebGIS untuk semua lokasi kegiatan di Indramayu" },
    ],
    stack: ["Next.js", "Laravel", "MySQL", "REST API", "JWT Auth", "Leaflet.js", "WebGIS"],
    status: { en: "In Development", id: "Dalam Pengembangan" },
    statusTone: "info",
    period: "2024 — Present",
    image: "/images/projects/donordermayu.png",
    links: { demo: "", repo: "" },
  },
  {
    slug: "sipeda",
    title: "SIPEDA",
    subtitle: {
      en: "Public blood donation map portal",
      id: "Portal peta donor darah publik",
    },
    description: {
      en: "A public-facing portal for citizens to find nearby blood donation locations and browse event schedules — built with Vanilla JS to reinforce frontend fundamentals.",
      id: "Portal publik bagi warga untuk menemukan lokasi donor darah terdekat dan melihat jadwal kegiatan — dibangun dengan Vanilla JS untuk memperkuat dasar frontend.",
    },
    longDescription: {
      en: "SIPEDA (Sistem Informasi Pendonor Darah) is a lightweight public portal designed for one purpose: help people in Indramayu find where and when they can donate blood.\n\nI built this project deliberately without any framework — no React, no Vue, just HTML, CSS, and plain JavaScript. The goal was to understand exactly how DOM manipulation, event handling, and fetch requests work before abstracting them away with a library.\n\nThe result is a fast, dependency-free map portal where visitors can see all registered donation locations pinned on an interactive map, filter by area, and view upcoming schedule details — all without needing to create an account.",
      id: "SIPEDA adalah portal publik ringan yang dirancang untuk satu tujuan: membantu warga Indramayu menemukan di mana dan kapan mereka bisa mendonorkan darah.\n\nSaya membangun proyek ini sengaja tanpa framework apapun — tanpa React, tanpa Vue, hanya HTML, CSS, dan JavaScript biasa. Tujuannya adalah memahami persis bagaimana manipulasi DOM, event handling, dan fetch request bekerja sebelum diabstraksikan oleh library.\n\nHasilnya adalah portal peta yang cepat dan bebas dependensi di mana pengunjung bisa melihat semua lokasi donor terdaftar pada peta interaktif, filter berdasarkan area, dan melihat detail jadwal mendatang.",
    },
    role: { en: "Sole Developer", id: "Developer Tunggal" },
    highlights: [
      { en: "Interactive map built with Leaflet.js for location discovery", id: "Peta interaktif dengan Leaflet.js untuk pencarian lokasi" },
      { en: "Zero-framework approach — intentional choice to learn DOM fundamentals", id: "Tanpa framework — pilihan sengaja untuk belajar dasar DOM" },
      { en: "Schedule browsing without requiring user registration", id: "Melihat jadwal tanpa perlu registrasi" },
      { en: "Lightweight and fast — no build step, no bundle", id: "Ringan dan cepat — tanpa build step, tanpa bundle" },
    ],
    stack: ["HTML", "CSS", "JavaScript", "Leaflet.js"],
    status: { en: "Completed", id: "Selesai" },
    statusTone: "success",
    period: "2024",
    image: "/images/projects/sipeda.png",
    links: { demo: "", repo: "" },
  },
  {
    slug: "helmet-detection",
    title: "Helmet Detection",
    subtitle: {
      en: "Computer vision experiment — YOLOv8 + Streamlit",
      id: "Eksperimen computer vision — YOLOv8 + Streamlit",
    },
    description: {
      en: "Helmet usage detection for motorcyclists using a YOLOv8 model trained on ~2,000 images, deployed as an interactive Streamlit demo.",
      id: "Deteksi penggunaan helm pada pengendara motor menggunakan model YOLOv8 yang dilatih pada ~2.000 gambar, dideploy sebagai demo Streamlit interaktif.",
    },
    longDescription: {
      en: "This project started as a curiosity — I wanted to understand how object detection models actually work end-to-end, not just call a pre-trained API.\n\nI built the entire pipeline from scratch: sourced raw images, annotated them manually using Roboflow (labeling 'helmet' and 'no helmet' classes across ~2,000 images), trained a YOLOv8 model using PyTorch, and deployed the result as an interactive Streamlit app.\n\nThe demo lets you upload an image or use a webcam, and the model draws bounding boxes with confidence scores around detected heads. You can adjust the confidence threshold in real time to see how it affects detection sensitivity.",
      id: "Proyek ini dimulai dari rasa ingin tahu — saya ingin memahami bagaimana model deteksi objek bekerja dari ujung ke ujung, bukan hanya memanggil API pre-trained.\n\nSaya membangun seluruh pipeline dari awal: mengumpulkan gambar, menganotas secara manual menggunakan Roboflow (melabeli kelas 'helm' dan 'tanpa helm' pada ~2.000 gambar), melatih model YOLOv8 menggunakan PyTorch, dan mendeploy hasilnya sebagai aplikasi Streamlit interaktif.\n\nDemo memungkinkan Anda mengunggah gambar atau menggunakan webcam, dan model menggambar bounding box dengan skor kepercayaan di sekitar kepala yang terdeteksi.",
    },
    role: { en: "Sole Developer", id: "Developer Tunggal" },
    highlights: [
      { en: "Full ML pipeline: collect → annotate → train → deploy", id: "Pipeline ML lengkap: kumpulkan → anotasi → latih → deploy" },
      { en: "~2,000 image custom dataset annotated via Roboflow", id: "~2.000 gambar dataset custom yang dianotasi via Roboflow" },
      { en: "Live demo with real-time confidence threshold control", id: "Demo langsung dengan kontrol threshold kepercayaan real-time" },
      { en: "Explored ONNX export for potential browser-side inference", id: "Eksplorasi ekspor ONNX untuk inferensi di sisi browser" },
    ],
    stack: ["Python", "YOLOv8", "OpenCV", "PyTorch", "Streamlit", "Roboflow"],
    status: { en: "Live", id: "Aktif" },
    statusTone: "success",
    period: "2024",
    image: "/images/projects/helmet-detection.png",
    links: {
      demo: "https://helmet-detection-fix-2ebqzyn4vabge45zbgg2yj.streamlit.app/",
      repo: "",
    },
  },
];
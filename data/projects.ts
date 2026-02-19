export type Project = {
  slug: string;
  title: string;
  subtitle: { en: string; id: string };
  // Problem statement — 1 kalimat, muncul di FeaturedProjectCard
  problemStatement: { en: string; id: string };
  description: { en: string; id: string };
  longDescription: { en: string; id: string };
  role: { en: string; id: string };
  highlights: { en: string; id: string }[];
  stack: string[];
  status: { en: string; id: string };
  statusTone: "neutral" | "success" | "info" | "warning" | "danger";
  period: string;
  image?: string;
  links?: { demo?: string; repo?: string };
};

export const projects: Project[] = [
  {
    slug: "donordermayu",
    title: "DonorDermayu",
    subtitle: {
      en: "Blood donation workflow system — PMI Indramayu",
      id: "Sistem workflow donor darah — PMI Indramayu",
    },
    problemStatement: {
      en: "PMI Indramayu coordinated blood donation events through WhatsApp and spreadsheets — no tracking, no structure, no accountability. We replaced that.",
      id: "PMI Indramayu mengkoordinasikan kegiatan donor darah melalui WhatsApp dan spreadsheet — tanpa tracking, tanpa struktur, tanpa akuntabilitas. Kami menggantinya.",
    },
    description: {
      en: "A workflow-driven system for managing blood donation events at PMI Indramayu — submissions, surveys, approval flow, scheduling, QR check-in, and WebGIS mapping.",
      id: "Sistem berbasis workflow untuk manajemen kegiatan donor darah PMI Indramayu — pengajuan, survei, alur persetujuan, penjadwalan, QR check-in, dan peta WebGIS.",
    },
    longDescription: {
      en: "PMI Indramayu manages dozens of blood donation events per year across multiple kecamatan, previously handled manually through WhatsApp groups and shared spreadsheets. There was no audit trail, no status visibility, and operators had no way to know what stage each request was in.\n\nAs team lead, I defined the full system architecture, broke down tasks across 3 team members, and handled all frontend implementation in Next.js. We built a role-based system supporting 3 distinct user types — admin, operator, and donor organization — each with their own dashboard and permission scope.\n\nThe core workflow: an organization submits a donation event request → passes through a health survey stage → reviewed and approved by an operator with a set schedule → on event day, operators use QR check-in to validate donors on-site. All event locations are plotted on an interactive WebGIS map accessible to the public.\n\nBuilt over 6+ months with a team of 4, actively in development and use by PMI Indramayu.",
      id: "PMI Indramayu mengelola puluhan kegiatan donor darah per tahun di berbagai kecamatan, sebelumnya ditangani manual melalui grup WhatsApp dan spreadsheet bersama. Tidak ada audit trail, tidak ada visibilitas status, dan operator tidak tahu di tahap mana setiap permohonan berada.\n\nSebagai team lead, saya mendefinisikan arsitektur sistem lengkap, membagi tugas kepada 3 anggota tim, dan menangani semua implementasi frontend di Next.js. Kami membangun sistem berbasis peran yang mendukung 3 tipe pengguna — admin, operator, dan organisasi donor — masing-masing dengan dashboard dan scope izin tersendiri.\n\nAlur utama: organisasi mengajukan permohonan kegiatan donor → melewati tahap survei kesehatan → ditinjau dan disetujui operator dengan jadwal → pada hari kegiatan, operator menggunakan QR check-in untuk memvalidasi donor di lapangan. Semua lokasi kegiatan dipetakan di WebGIS interaktif yang bisa diakses publik.\n\nDibangun selama 6+ bulan bersama tim 4 orang, aktif dalam pengembangan dan digunakan oleh PMI Indramayu.",
    },
    role: { en: "Team Lead & Frontend Developer", id: "Team Lead & Frontend Developer" },
    highlights: [
      { en: "Led a team of 4 from architecture planning through to implementation", id: "Memimpin tim 4 orang dari perencanaan arsitektur hingga implementasi" },
      { en: "Role-based access: admin, operator, and donor org — 3 separate dashboards", id: "Akses berbasis peran: admin, operator, dan organisasi donor — 3 dashboard terpisah" },
      { en: "Full request pipeline: submit → health survey → approval → schedule → QR check-in", id: "Pipeline permohonan lengkap: pengajuan → survei kesehatan → persetujuan → jadwal → QR check-in" },
      { en: "WebGIS map for all event locations across Indramayu regency", id: "Peta WebGIS untuk semua lokasi kegiatan di Kabupaten Indramayu" },
      { en: "6+ months in development, actively used by PMI Indramayu", id: "6+ bulan dalam pengembangan, aktif digunakan oleh PMI Indramayu" },
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
    problemStatement: {
      en: "Citizens in Indramayu had no easy way to find nearby blood donation locations or browse upcoming event schedules without calling PMI directly.",
      id: "Warga Indramayu tidak punya cara mudah untuk menemukan lokasi donor darah terdekat atau melihat jadwal kegiatan tanpa menghubungi PMI langsung.",
    },
    description: {
      en: "A public-facing portal for citizens to find nearby blood donation locations and browse event schedules — built with Vanilla JS to reinforce frontend fundamentals.",
      id: "Portal publik bagi warga untuk menemukan lokasi donor darah terdekat dan melihat jadwal kegiatan — dibangun dengan Vanilla JS untuk memperkuat dasar frontend.",
    },
    longDescription: {
      en: "SIPEDA (Sistem Informasi Pendonor Darah) is a lightweight public portal designed for one purpose: help people in Indramayu find where and when they can donate blood.\n\nI built this project deliberately without any framework — no React, no Vue, just HTML, CSS, and plain JavaScript. The goal was to understand exactly how DOM manipulation, event handling, and fetch requests work before abstracting them away with a library. This turned out to be one of the most useful decisions I made early on — it forced a deeper understanding of what frameworks actually solve.\n\nThe result is a fast, dependency-free portal where visitors can see all registered donation locations on an interactive Leaflet.js map, filter by area, and view upcoming schedule details — all without creating an account.",
      id: "SIPEDA adalah portal publik ringan yang dirancang untuk satu tujuan: membantu warga Indramayu menemukan di mana dan kapan mereka bisa mendonorkan darah.\n\nSaya membangun proyek ini sengaja tanpa framework apapun — tanpa React, tanpa Vue, hanya HTML, CSS, dan JavaScript biasa. Tujuannya untuk memahami persis bagaimana manipulasi DOM, event handling, dan fetch request bekerja sebelum diabstraksikan oleh library. Ini ternyata menjadi salah satu keputusan paling berguna yang saya buat — memaksa pemahaman lebih dalam tentang apa yang sebenarnya diselesaikan oleh framework.\n\nHasilnya adalah portal cepat dan bebas dependensi di mana pengunjung dapat melihat semua lokasi donor terdaftar di peta Leaflet.js interaktif, filter berdasarkan area, dan lihat detail jadwal mendatang.",
    },
    role: { en: "Sole Developer", id: "Developer Tunggal" },
    highlights: [
      { en: "Zero-framework: HTML, CSS, Vanilla JS only — intentional learning decision", id: "Tanpa framework: HTML, CSS, Vanilla JS saja — keputusan belajar yang disengaja" },
      { en: "Interactive map with Leaflet.js for location discovery", id: "Peta interaktif dengan Leaflet.js untuk pencarian lokasi" },
      { en: "No login required — fully public, fast, lightweight", id: "Tanpa login — sepenuhnya publik, cepat, ringan" },
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
    problemStatement: {
      en: "I wanted to understand how object detection actually works end-to-end — not call a pre-trained API, but build the entire pipeline from raw images to deployed model.",
      id: "Saya ingin memahami bagaimana deteksi objek benar-benar bekerja dari ujung ke ujung — bukan memanggil API pre-trained, tapi membangun seluruh pipeline dari gambar mentah hingga model yang di-deploy.",
    },
    description: {
      en: "Helmet usage detection for motorcyclists using a YOLOv8 model trained on ~2,000 custom-annotated images, deployed as an interactive Streamlit demo.",
      id: "Deteksi penggunaan helm pada pengendara motor menggunakan model YOLOv8 yang dilatih pada ~2.000 gambar yang dianotasi sendiri, dideploy sebagai demo Streamlit interaktif.",
    },
    longDescription: {
      en: "This project started as a question: how do object detection models actually work if you build everything yourself instead of calling an API?\n\nI built the entire pipeline from scratch: sourced raw images, annotated ~2,000 of them manually in Roboflow (labeling 'helmet' and 'no helmet' bounding boxes), trained a YOLOv8 model using PyTorch, and deployed the result as a Streamlit app.\n\nThe demo lets you upload an image or use a webcam feed — the model draws bounding boxes with confidence scores around detected heads. You can adjust the confidence threshold in real time to see how detection sensitivity changes. Tried ONNX export to explore browser-side inference, but kept the Streamlit version as the primary demo.\n\nKey insight from this project: most of the work was in data, not code — annotation quality determined model accuracy far more than training parameters.",
      id: "Proyek ini dimulai dari pertanyaan: bagaimana model deteksi objek benar-benar bekerja jika kamu membangun semuanya sendiri alih-alih memanggil API?\n\nSaya membangun seluruh pipeline dari awal: mengumpulkan gambar mentah, menganotasi ~2.000 di antaranya secara manual di Roboflow (melabeli bounding box 'helm' dan 'tanpa helm'), melatih model YOLOv8 menggunakan PyTorch, dan mendeploy hasilnya sebagai aplikasi Streamlit.\n\nDemo memungkinkan Anda mengunggah gambar atau menggunakan feed webcam — model menggambar bounding box dengan skor kepercayaan di sekitar kepala yang terdeteksi. Anda dapat menyesuaikan threshold kepercayaan secara real-time untuk melihat bagaimana sensitivitas deteksi berubah.\n\nInsight utama dari proyek ini: sebagian besar pekerjaan ada di data, bukan kode — kualitas anotasi menentukan akurasi model jauh lebih banyak daripada parameter training.",
    },
    role: { en: "Sole Developer", id: "Developer Tunggal" },
    highlights: [
      { en: "Full ML pipeline: collect → annotate (~2,000 images) → train → deploy", id: "Pipeline ML lengkap: kumpulkan → anotasi (~2.000 gambar) → latih → deploy" },
      { en: "Custom dataset annotated manually via Roboflow", id: "Dataset custom yang dianotasi manual via Roboflow" },
      { en: "Live Streamlit demo with real-time confidence threshold control", id: "Demo Streamlit langsung dengan kontrol threshold kepercayaan real-time" },
      { en: "Key learning: annotation quality matters more than model architecture", id: "Pembelajaran utama: kualitas anotasi lebih penting dari arsitektur model" },
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
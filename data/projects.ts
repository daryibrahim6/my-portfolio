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
      en: "Blood donation information system — PMI Indramayu",
      id: "Sistem informasi pendonoran darah — PMI Indramayu",
    },
    problemStatement: {
      en: "Citizens in Indramayu had no single place to check blood stock levels, find donation schedules, or register for upcoming events — all of that had to go through PMI directly.",
      id: "Warga Indramayu tidak punya satu tempat untuk cek stok darah, jadwal donor, atau mendaftar kegiatan — semuanya harus melalui PMI langsung.",
    },
    description: {
      en: "A full-stack blood donation information platform — public portal for citizens + admin panel for PMI operators. Live data from Supabase, interactive maps, and full CRUD management.",
      id: "Platform informasi donor darah full-stack — portal publik untuk warga + panel admin untuk operator PMI. Data live dari Supabase, peta interaktif, dan manajemen CRUD lengkap.",
    },
    longDescription: {
      en: "SIPEDA (Sistem Informasi Pendonoran Darah) is a full-stack web application built for PMI Kabupaten Indramayu to modernize how blood donation information is distributed to the public.\n\nThe public-facing side lets anyone — without registering — browse active donation schedules by month and location, check real-time blood stock levels across all PMI sites, view donation locations on an interactive Leaflet.js map with directions, read articles, and register for upcoming donation events. Registration generates a unique code that donors can use to track their own status.\n\nThe admin panel (protected, role-based) gives PMI operators full CRUD control over donation schedules, blood stock, registrations, and articles — all connected to a live Supabase (PostgreSQL) backend with Row Level Security.\n\nBuilt with Next.js 14 App Router, Tailwind CSS v4, and Supabase. Deployed on Vercel.",
      id: "SIPEDA adalah aplikasi web full-stack yang dibangun untuk PMI Kabupaten Indramayu guna memodernisasi cara informasi donor darah disebarkan ke publik.\n\nSisi publik memungkinkan siapa saja — tanpa mendaftar — melihat jadwal donor aktif per bulan dan lokasi, cek stok darah real-time di semua PMI, lihat lokasi donor di peta Leaflet.js interaktif dengan petunjuk arah, baca artikel, dan mendaftar kegiatan donor. Registrasi menghasilkan kode unik yang digunakan donor untuk melacak status mereka.\n\nPanel admin (terproteksi, berbasis peran) memberi operator PMI kontrol CRUD penuh atas jadwal donor, stok darah, registrasi, dan artikel — semua terhubung ke backend Supabase (PostgreSQL) live dengan Row Level Security.\n\nDibangun dengan Next.js 14 App Router, Tailwind CSS v4, dan Supabase. Di-deploy di Vercel.",
    },
    role: { en: "Sole Developer", id: "Developer Tunggal" },
    highlights: [
      { en: "Full-stack: public portal + protected admin panel in a single Next.js 14 codebase", id: "Full-stack: portal publik + admin panel terproteksi dalam satu codebase Next.js 14" },
      { en: "Live blood stock & schedule data from Supabase PostgreSQL with Row Level Security", id: "Data stok darah & jadwal live dari Supabase PostgreSQL dengan Row Level Security" },
      { en: "Interactive Leaflet.js map with location cards and Google Maps directions", id: "Peta Leaflet.js interaktif dengan kartu lokasi dan petunjuk arah Google Maps" },
      { en: "Donor registration with unique code + WhatsApp share for status tracking", id: "Registrasi donor dengan kode unik + share WhatsApp untuk tracking status" },
      { en: "Admin CRUD for schedules, blood stock, registrations, and articles — with search, filter, pagination", id: "Admin CRUD untuk jadwal, stok darah, registrasi, dan artikel — dengan search, filter, pagination" },
    ],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Leaflet.js", "Vercel"],
    status: { en: "Live", id: "Aktif" },
    statusTone: "success",
    period: "2025",
    image: "/images/projects/sipeda.png",
    links: { demo: "https://sipeda.vercel.app", repo: "https://github.com/daryibrahim6/sipeda-frontend" },
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
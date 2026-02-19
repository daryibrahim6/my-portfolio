export type Lang = "en" | "id";

export const t = {
  nav: {
    home:     { en: "Home",     id: "Beranda" },
    projects: { en: "Projects", id: "Proyek" },
    resume:   { en: "Resume",   id: "Resume" },
    contact:  { en: "Contact",  id: "Kontak" },
  },

  hero: {
    availability: { en: "Open for opportunities", id: "Terbuka untuk peluang" },
    cta_projects: { en: "View Projects →", id: "Lihat Proyek →" },
    cta_talk:     { en: "Let's Talk",      id: "Hubungi Saya" },
    cta_resume:   { en: "Resume",          id: "Resume" },
  },

  about: {
    section_label: { en: "About Me", id: "Tentang Saya" },
    section_title: { en: "The Dev Behind the Work", id: "Developer di Balik Karya" },
    title:         { en: "About",    id: "Tentang" },
    short: {
      // Rewrite: problem belajar sambil kerja nyata → konkret, bukan template generik
      en: "I'm a Frontend Developer from Bekasi, currently studying Informatics at Polindra while leading the development of a real production system. My focus is building web interfaces that are structurally sound — not just visually, but in terms of how data flows, how state is managed, and how the system holds up under real usage.\n\nRight now I'm leading DonorDermayu — a workflow system that replaced WhatsApp-based coordination for blood donation events at PMI Indramayu. I defined the architecture, managed the team, and handled the frontend implementation.\n\nI'm looking for opportunities where technical quality genuinely matters — not just shipping fast, but building something that lasts.",
      id: "Saya Frontend Developer dari Bekasi, saat ini masih kuliah Informatika di Polindra sambil memimpin pengembangan sistem produksi nyata. Fokus saya membangun antarmuka web yang solid secara struktur — bukan hanya visualnya, tapi bagaimana data mengalir, bagaimana state dikelola, dan bagaimana sistem bertahan di bawah penggunaan nyata.\n\nSaat ini saya memimpin DonorDermayu — sistem workflow yang menggantikan koordinasi berbasis WhatsApp untuk kegiatan donor darah di PMI Indramayu. Saya mendefinisikan arsitektur, mengelola tim, dan menangani implementasi frontend.\n\nSaya mencari peluang di mana kualitas teknis benar-benar penting — bukan hanya ship cepat, tapi membangun sesuatu yang bertahan.",
    },
    focus:        { en: "Focus",    id: "Fokus" },
    interest:     { en: "Interest", id: "Minat" },
    stack:        { en: "Stack",    id: "Stack" },
    projects_lbl: { en: "Projects", id: "Proyek" },
    total:        { en: "total",    id: "total" },
  },

  projects: {
    section_label:   { en: "Selected Work",        id: "Karya Pilihan" },
    section_title:   { en: "Projects",             id: "Proyek" },
    view_all:        { en: "View all →",           id: "Lihat semua →" },
    view_case:       { en: "View case study →",    id: "Lihat studi kasus →" },
    page_label:      { en: "All Work",             id: "Semua Karya" },
    page_title:      { en: "Projects",             id: "Proyek" },
    page_desc:       { en: "Shipped demos and workflow apps. Click any card for the full case study.", id: "Demo dan aplikasi workflow yang sudah dikerjakan. Klik kartu untuk studi kasus lengkap." },
    detail_role:     { en: "Role",                 id: "Peran" },
    detail_period:   { en: "Period",               id: "Periode" },
    detail_status:   { en: "Status",               id: "Status" },
    detail_overview: { en: "Overview",             id: "Ringkasan" },
    detail_stack:    { en: "Tech Stack",           id: "Teknologi" },
    detail_hl:       { en: "Highlights",           id: "Poin Penting" },
    detail_demo:     { en: "Live Demo ↗",          id: "Demo Langsung ↗" },
    detail_code:     { en: "Source Code ↗",        id: "Kode Sumber ↗" },
    detail_no_link:  { en: "Links not available yet", id: "Tautan belum tersedia" },
    detail_back:     { en: "← Back to Projects",  id: "← Kembali ke Proyek" },
    detail_all:      { en: "← All Projects",      id: "← Semua Proyek" },
    detail_work:     { en: "Work with me →",      id: "Kerja sama →" },
    problem_label:   { en: "The Problem",         id: "Masalahnya" },
  },

  skills: {
    label:    { en: "Capabilities",  id: "Kemampuan" },
    title:    { en: "Skills",        id: "Keahlian" },
    frontend: { en: "Frontend",      id: "Frontend" },
    backend:  { en: "Backend",       id: "Backend" },
    tools:    { en: "Tools",         id: "Alat" },
    soft:     { en: "Soft Skills",   id: "Soft Skills" },
    primary:  { en: "Primary Stack", id: "Stack Utama" },
    secondary:{ en: "Also Use",      id: "Juga Pakai" },
    learning: { en: "Learning",      id: "Sedang Dipelajari" },
  },

  cta: {
    label: { en: "Let's Build",                       id: "Ayo Bangun" },
    // Rewrite: lebih spesifik, komunikasikan kamu bisa ship beneran
    title: { en: "Let's build something that actually ships.", id: "Mari bangun sesuatu yang benar-benar selesai." },
    desc:  { en: "Available for freelance work, collaborations, and internships. I take work seriously — scope, quality, and timeline.", id: "Tersedia untuk freelance, kolaborasi, dan magang. Saya serius soal scope, kualitas, dan timeline." },
    btn1:  { en: "Let's Talk →",   id: "Hubungi Saya →" },
    btn2:  { en: "Email Directly", id: "Email Langsung" },
  },

  resume: {
    label:       { en: "Resume",                  id: "Resume" },
    title:       { en: "Experience & Education",  id: "Pengalaman & Pendidikan" },
    desc:        { en: "A quick look at my background. Download the full PDF below.", id: "Ringkasan latar belakang saya. Unduh PDF lengkapnya di bawah." },
    summary:     { en: "Summary",                 id: "Ringkasan" },
    education:   { en: "Education",               id: "Pendidikan" },
    highlights:  { en: "Highlights",              id: "Pencapaian" },
    tech_stack:  { en: "Tech Stack",              id: "Teknologi" },
    download:    { en: "Download CV",             id: "Unduh CV" },
    dl_note:     { en: "Get my full resume as a PDF — includes projects, skills, and contact info.", id: "Unduh resume lengkap saya dalam format PDF — mencakup proyek, keahlian, dan info kontak." },
    dl_btn:      { en: "Download PDF ↗",          id: "Unduh PDF ↗" },
    view_proj:   { en: "View Projects",           id: "Lihat Proyek" },
    email_me:    { en: "Email Me",                id: "Email Saya" },
    links:       { en: "Links",                   id: "Tautan" },
  },

  contact: {
    label:              { en: "Contact",              id: "Kontak" },
    title:              { en: "Let's Work Together",  id: "Ayo Bekerja Sama" },
    desc:               { en: "Open for freelance projects, collaborations, and new opportunities. Fill out the form or reach out directly.", id: "Terbuka untuk proyek freelance, kolaborasi, dan peluang baru. Isi formulir atau hubungi langsung." },
    form_name:          { en: "Name",                 id: "Nama" },
    form_email:         { en: "Email",                id: "Email" },
    form_message:       { en: "Message",              id: "Pesan" },
    form_ph_name:       { en: "Your name",            id: "Nama kamu" },
    form_ph_msg:        { en: "Tell me what you want to build...", id: "Ceritakan apa yang ingin kamu bangun..." },
    form_submit:        { en: "Send Message →",       id: "Kirim Pesan →" },
    form_sending:       { en: "Sending...",           id: "Mengirim..." },
    form_note:          { en: "Powered by Formspree. Your message goes straight to my inbox.", id: "Ditenagai Formspree. Pesanmu langsung masuk ke inbox saya." },
    form_success_title: { en: "Message sent",         id: "Pesan terkirim" },
    form_success_desc:  { en: "I'll get back to you as soon as I can.", id: "Saya akan membalas sesegera mungkin." },
    form_send_another:  { en: "Send another",         id: "Kirim lagi" },
    form_error:         { en: "Something went wrong. Please try again.", id: "Terjadi kesalahan. Silakan coba lagi." },
    direct_links:       { en: "Direct Links",         id: "Tautan Langsung" },
    browse_first:       { en: "Prefer to browse first?", id: "Mau lihat proyek dulu?" },
    view_projects:      { en: "View Projects",        id: "Lihat Proyek" },
  },

  footer: {
    pages:   { en: "Pages",   id: "Halaman" },
    connect: { en: "Connect", id: "Terhubung" },
    built:   { en: "Built with Next.js + Tailwind CSS", id: "Dibuat dengan Next.js + Tailwind CSS" },
  },

  notfound: {
    title: { en: "Page not found",  id: "Halaman tidak ditemukan" },
    desc:  { en: "This page doesn't exist or has been moved.", id: "Halaman ini tidak ada atau sudah dipindahkan." },
    home:  { en: "← Home",          id: "← Beranda" },
  },
};

export function tr(key: { en: string; id: string }, lang: Lang): string {
  return key[lang];
}
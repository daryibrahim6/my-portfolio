export type Lang = "en" | "id";

export const t = {
  // ── Navbar ──
  nav: {
    home:     { en: "Home",     id: "Beranda" },
    projects: { en: "Projects", id: "Proyek" },
    resume:   { en: "Resume",   id: "Resume" },
    contact:  { en: "Contact",  id: "Kontak" },
  },

  // ── Hero ──
  hero: {
    availability: { en: "Open for opportunities", id: "Terbuka untuk peluang" },
    role:         { en: "Frontend Developer", id: "Frontend Developer" },
    tagline: {
      en: "I build interfaces that feel right and systems that hold up — frontend-first, with enough backend knowledge to ship end-to-end.",
      id: "Saya membangun antarmuka yang terasa tepat dan sistem yang kuat — fokus di frontend, dengan cukup pengetahuan backend untuk ship dari ujung ke ujung.",
    },
    cta_projects: { en: "View Projects →", id: "Lihat Proyek →" },
    cta_talk:     { en: "Let's Talk",      id: "Hubungi Saya" },
    cta_resume:   { en: "Resume",          id: "Resume" },
  },

  // ── About card ──
  about: {
    title: { en: "About", id: "Tentang" },
    short: {
      en: "I'm an Informatics student with a focus on frontend engineering and system design. I care about the details — how data flows, how states are managed, and how a UI decision affects the whole system.\n\nCurrently leading the development of DonorDermayu, a real-world workflow system for PMI Indramayu. Looking for opportunities to work on products where technical quality actually matters.",
      id: "Saya mahasiswa Informatika dengan fokus pada rekayasa frontend dan desain sistem. Saya peduli pada detail — bagaimana data mengalir, bagaimana state dikelola, dan bagaimana keputusan UI berdampak pada keseluruhan sistem.\n\nSaat ini memimpin pengembangan DonorDermayu, sistem workflow nyata untuk PMI Indramayu. Mencari peluang untuk bekerja pada produk di mana kualitas teknis benar-benar penting.",
    },
    focus:        { en: "Focus",       id: "Fokus" },
    interest:     { en: "Interest",    id: "Minat" },
    stack:        { en: "Stack",       id: "Stack" },
    projects_lbl: { en: "Projects",    id: "Proyek" },
    total:        { en: "total",       id: "total" },
  },

  // ── Projects section ──
  projects: {
    section_label:  { en: "Selected Work",        id: "Karya Pilihan" },
    section_title:  { en: "Projects",             id: "Proyek" },
    view_all:       { en: "View all →",           id: "Lihat semua →" },
    highlights_lbl: { en: "highlights",           id: "poin penting" },
    view_case:      { en: "View case study →",    id: "Lihat studi kasus →" },
    // projects page
    page_label:     { en: "All Work",             id: "Semua Karya" },
    page_title:     { en: "Projects",             id: "Proyek" },
    page_desc:      { en: "Shipped demos and workflow apps. Click any card for the full case study.", id: "Demo dan aplikasi workflow yang sudah dikerjakan. Klik kartu untuk studi kasus lengkap." },
    // detail page
    detail_role:    { en: "Role",                 id: "Peran" },
    detail_period:  { en: "Period",               id: "Periode" },
    detail_status:  { en: "Status",               id: "Status" },
    detail_overview:{ en: "Overview",             id: "Ringkasan" },
    detail_stack:   { en: "Tech Stack",           id: "Teknologi" },
    detail_hl:      { en: "Highlights",           id: "Poin Penting" },
    detail_demo:    { en: "Live Demo ↗",          id: "Demo Langsung ↗" },
    detail_code:    { en: "Source Code ↗",        id: "Kode Sumber ↗" },
    detail_no_link: { en: "Links not available yet", id: "Tautan belum tersedia" },
    detail_back:    { en: "← Back to Projects",   id: "← Kembali ke Proyek" },
    detail_all:     { en: "← All Projects",       id: "← Semua Proyek" },
    detail_work:    { en: "Work with me →",       id: "Kerja sama →" },
  },

  // ── Skills ──
  skills: {
    label:     { en: "Capabilities",  id: "Kemampuan" },
    title:     { en: "Skills",        id: "Keahlian" },
    frontend:  { en: "Frontend",      id: "Frontend" },
    backend:   { en: "Backend",       id: "Backend" },
    tools:     { en: "Tools",         id: "Alat" },
    soft:      { en: "Soft Skills",   id: "Soft Skills" },
  },

  // ── CTA section ──
  cta: {
    label:    { en: "Let's Build",          id: "Ayo Bangun" },
    title:    { en: "Open for New Projects", id: "Terbuka untuk Proyek Baru" },
    desc:     { en: "Available for freelance work, collaborations, and internships. Drop me a line and let's talk.", id: "Tersedia untuk freelance, kolaborasi, dan magang. Kirim pesan dan kita bicara." },
    btn1:     { en: "Let's Talk →",         id: "Hubungi Saya →" },
    btn2:     { en: "Email Directly",       id: "Email Langsung" },
  },

  // ── Resume ──
  resume: {
    label:      { en: "Resume",           id: "Resume" },
    title:      { en: "Experience & Education", id: "Pengalaman & Pendidikan" },
    desc:       { en: "Scan the essentials below, then download the PDF.", id: "Lihat ringkasan di bawah, lalu unduh PDF-nya." },
    summary:    { en: "Summary",          id: "Ringkasan" },
    education:  { en: "Education",        id: "Pendidikan" },
    highlights: { en: "Highlights",       id: "Pencapaian" },
    download:   { en: "Download",         id: "Unduh" },
    dl_note:    { en: "Place your PDF at", id: "Simpan PDF kamu di" },
    dl_btn:     { en: "Download PDF ↗",   id: "Unduh PDF ↗" },
    view_proj:  { en: "View Projects",    id: "Lihat Proyek" },
    email_me:   { en: "Email Me",         id: "Email Saya" },
    links:      { en: "Links",            id: "Tautan" },
  },

  // ── Contact ──
  contact: {
    label:   { en: "Contact",             id: "Kontak" },
    title:   { en: "Let's Work Together", id: "Ayo Bekerja Sama" },
    desc:    { en: "Open for freelance projects, collaborations, and new opportunities. Fill out the form or reach out directly.", id: "Terbuka untuk proyek freelance, kolaborasi, dan peluang baru. Isi formulir atau hubungi langsung." },
    form_name:    { en: "Name",           id: "Nama" },
    form_email:   { en: "Email",          id: "Email" },
    form_message: { en: "Message",        id: "Pesan" },
    form_ph_name: { en: "Your name",      id: "Nama kamu" },
    form_ph_msg:  { en: "Tell me what you want to build...", id: "Ceritakan apa yang ingin kamu bangun..." },
    form_submit:  { en: "Send Message →", id: "Kirim Pesan →" },
    form_sending: { en: "Sending...",     id: "Mengirim..." },
    form_note:    { en: "Powered by Formspree. Your message goes straight to my inbox.", id: "Ditenagai Formspree. Pesanmu langsung masuk ke inbox saya." },
    form_success_title: { en: "Message sent",  id: "Pesan terkirim" },
    form_success_desc:  { en: "I'll get back to you as soon as I can.", id: "Saya akan membalas sesegera mungkin." },
    form_send_another:  { en: "Send another",  id: "Kirim lagi" },
    form_error:         { en: "Something went wrong. Please try again.", id: "Terjadi kesalahan. Silakan coba lagi." },
    direct_links: { en: "Direct Links",   id: "Tautan Langsung" },
    browse_first: { en: "Prefer to browse first?", id: "Mau lihat proyek dulu?" },
    view_projects:{ en: "View Projects",  id: "Lihat Proyek" },
  },

  // ── Footer ──
  footer: {
    pages:   { en: "Pages",   id: "Halaman" },
    connect: { en: "Connect", id: "Terhubung" },
    built:   { en: "Built with Next.js + Tailwind CSS", id: "Dibuat dengan Next.js + Tailwind CSS" },
  },

  // ── 404 ──
  notfound: {
    title: { en: "Page not found",  id: "Halaman tidak ditemukan" },
    desc:  { en: "This page doesn't exist or has been moved.", id: "Halaman ini tidak ada atau sudah dipindahkan." },
    home:  { en: "← Home",          id: "← Beranda" },
  },
};

export function tr(key: { en: string; id: string }, lang: Lang): string {
  return key[lang];
}
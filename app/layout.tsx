import type { Metadata } from "next";
import { Outfit, DM_Mono } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import type { Lang } from "@/data/translations";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// Ganti YOUR_DOMAIN dengan domain Vercel kamu, contoh: daryibrahim.vercel.app
const SITE_URL = "my-portfolio-ga9q3snt9-darys-projects-4f9ae805.vercel.app";

export const metadata: Metadata = {
  title: "Dary Ibrahim — Frontend Developer",
  // Fix P1: meta description tidak menyebut backend di kalimat pertama
  description:
    "Frontend Developer from Indonesia — building production web apps with Next.js and TypeScript. Currently leading DonorDermayu, a workflow system for PMI Indramayu.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Dary Ibrahim — Frontend Developer",
    description:
      "Frontend Developer from Indonesia — Next.js, TypeScript, Tailwind CSS. Currently leading DonorDermayu for PMI Indramayu.",
    type: "website",
    url: SITE_URL,
    // Fix P1: og:image — buat file ini dulu di /public/images/og-cover.png (1200x630px)
    images: [
      {
        url: `${SITE_URL}/images/og-cover.png`,
        width: 1200,
        height: 630,
        alt: "Dary Ibrahim — Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dary Ibrahim — Frontend Developer",
    description: "Building production web apps with Next.js and TypeScript.",
    images: [`${SITE_URL}/images/og-cover.png`],
  },
};

// Server component: baca cookie lang untuk SSR yang benar
// Dengan ini Google dan browser pertama kali dapat HTML yang sudah di-render,
// bukan halaman kosong yang diisi JavaScript belakangan
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const rawLang = cookieStore.get("lang")?.value;
  const initialLang: Lang =
    rawLang === "en" || rawLang === "id" ? rawLang : "en";

  return (
    <html lang={initialLang}>
      <body className={`${outfit.variable} ${dmMono.variable}`}>
        <LanguageProvider initialLang={initialLang}>
          <a className="skip-link" href="#content">
            Skip to content
          </a>
          <Navbar />
          <div id="content">{children}</div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
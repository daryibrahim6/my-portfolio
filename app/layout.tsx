import type { Metadata } from "next";
import { Outfit, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "Dary Ibrahim — Fullstack Developer",
  description:
    "Fullstack Developer building workflow-driven web apps with Next.js, Laravel, and MySQL.",
  openGraph: {
    title: "Dary Ibrahim — Fullstack Developer",
    description:
      "Portfolio of Dary Ibrahim Akram — web apps, REST APIs, and computer vision experiments.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${outfit.variable} ${dmMono.variable}`}>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <Navbar />
        <div id="content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
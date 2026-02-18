import type { Metadata } from "next";
import { Outfit, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

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
  title: "Dary Ibrahim — Frontend Developer",
  description: "Frontend Developer building workflow-driven web apps with Next.js, Laravel, and MySQL.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Dary Ibrahim — Frontend Developer",
    description: "Portfolio of Dary Ibrahim Akram — web apps, REST APIs, and computer vision experiments.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${dmMono.variable}`}>
        <LanguageProvider>
          <a className="skip-link" href="#content">Skip to content</a>
          <Navbar />
          <div id="content">{children}</div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
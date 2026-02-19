"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { Lang } from "@/data/translations";

type LanguageContextType = {
  lang: Lang;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggle: () => {},
});

// initialLang dikirim dari server (layout.tsx baca cookie)
// Ini yang fix masalah SSR — server render sudah pakai bahasa yang benar
export function LanguageProvider({
  children,
  initialLang = "en",
}: {
  children: ReactNode;
  initialLang?: Lang;
}) {
  const [lang, setLang] = useState<Lang>(initialLang);

  function toggle() {
    setLang((prev) => {
      const next = prev === "en" ? "id" : "en";
      // Simpan ke cookie (dibaca server saat refresh/navigasi berikutnya)
      document.cookie = `lang=${next};path=/;max-age=31536000;SameSite=Lax`;
      // Fix P0: html lang attribute ikut berubah — penting untuk screen reader
      document.documentElement.lang = next;
      return next;
    });
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
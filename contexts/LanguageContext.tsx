"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Lang } from "@/data/translations";

type LanguageContextType = {
  lang: Lang;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "id") setLang(saved);
  }, []);

  function toggle() {
    setLang((prev) => {
      const next = prev === "en" ? "id" : "en";
      localStorage.setItem("lang", next);
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
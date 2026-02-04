"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./i18n";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) setLang(saved);
  }, []);

  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  // ✨ NUEVA FUNCIÓN: Alterna entre idiomas automáticamente
  const toggleLanguage = () => {
    const newLang = lang === "es" ? "en" : "es";
    changeLang(newLang);
  };

  const t = translations[lang];

  return (
    // 🎁 Agregamos 'toggleLanguage' y renombramos 'lang' a 'language' 
    // para que coincida con lo que tu Navbar espera
    <LanguageContext.Provider value={{ language: lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
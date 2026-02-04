"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./i18n"; // 📜 Importamos tus traducciones

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

  // 🔄 Obtenemos los textos según el idioma activo
  const t = translations[lang];

  return (
    // 🎁 Entregamos todo el paquete a la web
    <LanguageContext.Provider value={{ lang, changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
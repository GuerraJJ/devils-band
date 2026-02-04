"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "../lib/LanguageContext"; // 👈 Tu "llave" al contexto

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  // 🌍 Extraemos 't' (traducciones) y 'lang' (idioma actual)
  const { lang, changeLang, t } = useLanguage();

  const handleClick = () => setOpen(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* LOGO */}
        <Link href="/" onClick={handleClick}>
          <Image
            src="/logo.png"
            alt="Devils Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* BURGER */}
        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        {/* LINKS DINÁMICOS 🔄 */}
        <nav className={`nav-links ${open ? "active" : ""}`}>
          <Link
            href="/#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={handleClick}
          >
            {t.navbar.home}
          </Link>

          <Link
            href="/#music"
            className={activeSection === "music" ? "active" : ""}
            onClick={handleClick}
          >
            {t.navbar.music}
          </Link>

          <Link
            href="/#shows"
            className={activeSection === "shows" ? "active" : ""}
            onClick={handleClick}
          >
            {t.navbar.shows}
          </Link>

          <Link
            href="/gallery"
            className={pathname === "/gallery" ? "active" : ""}
            onClick={handleClick}
          >
            {t.navbar.gallery}
          </Link>

          <Link
            href="/#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={handleClick}
          >
            {t.navbar.contact}
          </Link>
        </nav>

        {/* 🌍 SELECTOR DE IDIOMA */}
        <div className="lang-switch">
          <button
            onClick={() => changeLang("es")}
            className={lang === "es" ? "active" : ""}
          >
            ES
          </button>
          <button
            onClick={() => changeLang("en")}
            className={lang === "en" ? "active" : ""}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}

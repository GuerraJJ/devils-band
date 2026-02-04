"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "../lib/LanguageContext"; 
import { Languages } from 'lucide-react'; 

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();


  const { language, toggleLanguage, t } = useLanguage();
  console.log("Idioma actual:", language);
  console.log("Función disponible:", typeof toggleLanguage);

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
        {/* LOGO 🎸 */}
        <Link href="/" onClick={handleClick}>
          <Image
            src="/logo1.png"
            alt="Devils Logo"
            width={120}
            height={25}
            priority
          />
        </Link>

        {/* BURGER (Menú móvil) 🍔 */}
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

{/* 🌍 SELECTOR DE IDIOMA ÚNICO */}
<div className="lang-switch">
  <button 
    onClick={toggleLanguage} 
    className="lang-button-toggle"
    aria-label="Change Language"
    title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
  >
    <Languages size={20} className="world-icon" />
    {/* Mostramos el idioma al que el usuario cambiará al hacer clic */}
    <span className="lang-text">
      {language === 'es' ? 'EN' : 'ES'}
    </span>
  </button>
</div>
      </div>
    </header>
  );
}
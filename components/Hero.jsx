"use client";

import Image from "next/image";
import { useLanguage } from "../lib/LanguageContext"; 

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div className="hero-content">
      <Image
        src="/logo.png" 
        alt="DEVILS logo"
        width={220}
        height={220}
        className="hero-logo"
        priority
      />

      <h1>DEVILS</h1>

      <p className="hero-tagline">
        {t.hero.tagline}
      </p>

      <div className="hero-cta">
        <a
          href="https://open.spotify.com/embed/artist/5ujV11VnTu8tjSuM0Gtnar" // Pon tu link real aquí
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          {t.hero.cta}
        </a>
      </div>
    </div>
  );
}

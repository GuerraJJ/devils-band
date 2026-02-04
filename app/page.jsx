"use client";

import Hero from "../components/Hero";
import useReveal from "../components/useReveal";
import { useLanguage } from "../lib/LanguageContext";

// 📝 Sacamos los datos fuera para optimizar el componente
const showsData = [
  {
    date: "15 FEB 2026",
    venue: "Nodriza Estudio",
    city: "Monterrey, N.L."
  },
  {
    date: "28 MAR 2026",
    venue: "Café Iguana",
    city: "Monterrey, N.L."
  }
];

export default function Home() {
  useReveal();
  const { t } = useLanguage();

  return (
    <>
      {/* ================= HERO ================= */}
      <section id="home" className="hero reveal">
        <Hero />
      </section>

      {/* ================= MUSIC ================= */}
      <section id="music" className="music reveal">
        <h2>{t.music.title}</h2> 
        <p>{t.music.description}</p>
        <div className="spotify-embed">
          <iframe
            src="https://open.spotify.com/embed/artist/5ujV11VnTu8tjSuM0Gtnar"
            width="100%"
            height="380"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </section>

      {/* ================= SHOWS ================= */}
      <section id="shows" className="shows reveal">
        <h2>{t.shows.title}</h2>
        <div className="shows-list">
          {showsData.map((show, index) => (
            <div className="show-item" key={index}>
              <span className="show-date">{show.date}</span>
              <span className="show-venue">{show.venue}</span>
              <span className="show-city">{show.city}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="section contact reveal">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>{t.contact.title} 📩</h2>
            <p>{t.contact.description}</p>

            <a
              href="https://wa.me/521XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                width="24" 
                height="24" 
              />
              <span>{t.contact.whatsapp}</span>
            </a>
          </div>

          <form className="contact-form">
            <input type="text" placeholder={t.contact.form.name} required />
            <input type="email" placeholder={t.contact.form.email} required />
            <input type="text" placeholder={t.contact.form.subject} required />
            <textarea placeholder={t.contact.form.message} required></textarea>
            <button type="submit" className="btn-submit">
              {t.contact.form.submit}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

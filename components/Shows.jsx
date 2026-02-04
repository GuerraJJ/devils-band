"use client";

import { showsData } from "../data/showsData"; 
import { useLanguage } from "../lib/LanguageContext";

export default function Shows() {
  const { t } = useLanguage();

  // Verificación de seguridad por si las traducciones aún no cargan
  if (!t || !t.shows) return null;

  return (
    <section className="shows-section" id="shows">
      <h2>{t.shows.title}</h2>
      
      <div className="shows-container">
        {showsData.map((show) => (
          <div key={show.id} className="show-card">
            
          
            <div className="show-date-horizontal">
              {show.date}
            </div>

          
            <div className="show-details">
              <h3 className="venue-name">{show.venue}</h3>
              <p className="city-name">{show.city}</p>
            </div>

           
            <div className="show-action">
              {show.status === "soldOut" ? (
                <span className="sold-out-badge">
                  {t.shows.status.soldOut}
                </span>
              ) : (
                <a 
                  href={show.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="tickets-button"
                >
                  {t.shows.status[show.status] || "Tickets"}
                </a>
              )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import { useLanguage } from "../lib/LanguageContext";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
];

export default function Gallery() {
  const { t } = useLanguage();
  // 🔢 Usamos el índice para saber qué foto mostrar
  const [currentIndex, setCurrentIndex] = useState(0);

  // ➡️ Avanzar a la siguiente foto
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // ⬅️ Volver a la foto anterior
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="gallery" id="gallery" style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{t.gallery.title}</h2>
      {t.gallery.subtitle && <p style={{ marginBottom: '30px', opacity: 0.8 }}>{t.gallery.subtitle}</p>}

      <div className="slider-container" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '20px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        
        {/* Botón Izquierdo */}
        <button 
          onClick={prevSlide} 
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
        >
          <ChevronLeft size={48} />
        </button>

        {/* Contenedor de Imagen */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '800px' }}>
          <Image
            src={images[currentIndex]}
            alt={t.gallery.imageAlts[currentIndex]}
            width={800}
            height={500}
            priority
            style={{ 
              width: '100%', 
              height: 'auto', 
              borderRadius: '12px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              objectFit: 'cover'
            }}
          />
          {/* Contador de fotos */}
          <div style={{ marginTop: '15px', fontWeight: 'bold', letterSpacing: '2px' }}>
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Botón Derecho */}
        <button 
          onClick={nextSlide} 
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
        >
          <ChevronRight size={48} />
        </button>
      </div>
    </section>
  );
}
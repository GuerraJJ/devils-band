"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "./Lightbox";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="gallery" id="gallery">
      <h2>Galería</h2>

      <div className="gallery-grid">
        {images.map((src, i) => (
          <div
            className="gallery-item"
            key={i}
            onClick={() => setActiveImage(src)}
          >
            <Image
              src={src}
              alt={`Gallery ${i + 1}`}
              width={600}
              height={400}
            />
          </div>
        ))}
      </div>

      {activeImage && (
        <Lightbox
          src={activeImage}
          onClose={() => setActiveImage(null)}
        />
      )}
    </section>
  );
}

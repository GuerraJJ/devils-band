"use client";

import Image from "next/image";

export default function Lightbox({ src, onClose }) {
  return (
    <div className="lightbox" onClick={onClose}>
      <span className="lightbox-close">✕</span>

      <div
        onClick={e => e.stopPropagation()} // evita cerrar al tocar la imagen
        style={{
          maxWidth: "90%",
          maxHeight: "90%",
        }}
      >
        <Image
          src={src}
          alt="Gallery preview"
          width={1200}
          height={800}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
          priority
        />
      </div>
    </div>
  );
}

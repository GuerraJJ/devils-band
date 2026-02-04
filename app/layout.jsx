"use client";

import "./globals.css";
import Navbar from "../components/Navbar";
import { LanguageProvider } from "../lib/LanguageContext";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          <Navbar />

          <main>{children}</main>

          {/* WhatsApp flotante */}
          <a
            href="https://wa.me/521XXXXXXXXXX"
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            💬
          </a>
        </LanguageProvider>
      </body>
    </html>
  );
}

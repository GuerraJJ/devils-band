"use client";

import { useLanguage } from "../lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/devilsmty/",
      icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
    },
    {
      name: "Facebook",
      url: "https://facebook.com/thedevils27",
      icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@gonzalodrums",
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/artist/5ujV11VnTu8tjSuM0Gtnar",
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-grid">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={social.name}
            >
              <img src={social.icon} alt={social.name} width="30" height="30" />
            </a>
          ))}
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Devil's Band. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
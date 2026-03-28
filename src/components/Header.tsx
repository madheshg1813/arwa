"use client";

import { useState } from "react";
import Link from "next/link";

const cityLinks = [
  { name: "Prosthetic Clinic — Chennai", href: "/prosthetic-clinic-chennai" },
  { name: "Prosthetic Clinic — Tambaram", href: "/prosthetic-clinic-tambaram" },
  { name: "Prosthetic Clinic — Chrompet", href: "/prosthetic-clinic-chrompet" },
  { name: "Prosthetic Clinic — Pallavaram", href: "/prosthetic-clinic-pallavaram" },
  { name: "Prosthetic Clinic — Medavakkam", href: "/prosthetic-clinic-medavakkam" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-flex">
          <div className="contact-info">
            <span>
              <ion-icon name="call"></ion-icon> +91 7200559344
            </span>
            <span>
              <ion-icon name="mail"></ion-icon> arwainternationalindia@gmail.com
            </span>
          </div>
          <div className="social-links">
            <a href="https://wa.me/917200559344" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61576506330321" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="https://www.instagram.com/arwainternationalindia/" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div>
        </div>
      </div>

      <div className={`mobile-overlay ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}></div>

      {/* Header */}
      <header id="header">
        <div className="container">
          <nav className="navbar">
            <div className="logo">
              <Link href="/" className="logo-link" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <img src="/logo.png" alt="ARWA Logo" className="logo-img" />
                <div className="logo-text">
                  <span className="brand-name">ARWA</span>
                  <span className="brand-sub">Prosthetic Center</span>
                </div>
              </Link>
            </div>
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li className="nav-dropdown">
                <span className="nav-dropdown-trigger">
                  Services <ion-icon name="chevron-down-outline"></ion-icon>
                </span>
                <ul className="dropdown-menu">
                  <li className="nav-dropdown-nested">
                    <Link href="/prosthetic-clinic-chennai" className="dropdown-nested-trigger">
                      Prosthetic Clinic in Chennai <ion-icon name="chevron-forward-outline"></ion-icon>
                    </Link>
                    <ul className="dropdown-submenu">
                      {cityLinks.slice(1).map((c) => (
                        <li key={c.href}>
                          <Link href={c.href}>
                            <ion-icon name="location-outline"></ion-icon>
                            {c.name.replace("Prosthetic Clinic — ", "")}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </li>
              <li><Link href="/#expertise">Technology</Link></li>
              <li><Link href="/#care">Care Guide</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/contact" className="btn-cta">Consult Now</Link></li>
            </ul>
            <div className="mobile-menu-btn" onClick={toggleMenu}>
              <ion-icon name="menu-outline"></ion-icon>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
          <div className="mobile-menu-header">
            <div className="logo">
              <img src="/logo.png" alt="ARWA Logo" className="logo-img" />
              <span className="brand-name">ARWA CENTER</span>
            </div>
            <ion-icon name="close-outline" id="mobile-close" onClick={toggleMenu}></ion-icon>
          </div>
          <div className="mobile-menu-body">
            <p className="m-mission">Restoring confidence and vision through precision ocular prosthetics.</p>
            <ul className="mobile-nav-links">
              <li>
                <button className="m-dropdown-btn" onClick={() => setCityOpen(!cityOpen)}>
                  <span><ion-icon name="medical-outline"></ion-icon> Services</span>
                  <ion-icon name={cityOpen ? "chevron-up-outline" : "chevron-down-outline"}></ion-icon>
                </button>
                {cityOpen && (
                  <ul className="m-dropdown-list">
                    <li className="m-dropdown-label">Prosthetic Clinic in Chennai</li>
                    {cityLinks.slice(1).map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} onClick={toggleMenu}>
                          <ion-icon name="location-outline"></ion-icon>
                          {c.name.replace("Prosthetic Clinic — ", "")}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li><Link href="/#expertise" onClick={toggleMenu}><ion-icon name="flask-outline"></ion-icon> Clinical Technology</Link></li>
              <li><Link href="/#care" onClick={toggleMenu}><ion-icon name="heart-outline"></ion-icon> Maintenance Guide</Link></li>
              <li><Link href="/contact" onClick={toggleMenu}><ion-icon name="mail-outline"></ion-icon> Official Consultation</Link></li>
            </ul>
            
            <div className="m-social-box">
              <span>Follow Us</span>
              <div className="m-social-links">
                <a href="https://www.facebook.com/profile.php?id=61576506330321" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="https://www.instagram.com/arwainternationalindia/" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-instagram"></ion-icon></a>
                <a href="https://wa.me/917200559344" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-whatsapp"></ion-icon></a>
              </div>
            </div>
          </div>
          <div className="mobile-menu-footer">
            <a href="tel:+917200559344" className="m-call-btn">
              <ion-icon name="call"></ion-icon>
              <span>Free Consultation</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

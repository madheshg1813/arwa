"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <a href="#">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#">
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
                <img src="/logo.jpeg" alt="ARWA Logo" className="logo-img" />
                <div className="logo-text">
                  <span className="brand-name">ARWA</span>
                  <span className="brand-sub">Optics & Prosthetic Center</span>
                </div>
              </Link>
            </div>
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#services">Services</Link></li>
              <li><Link href="/#about">About</Link></li>
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
              <img src="/logo.jpeg" alt="ARWA Logo" className="logo-img" />
              <span className="brand-name">ARWA CENTER</span>
            </div>
            <ion-icon name="close-outline" id="mobile-close" onClick={toggleMenu}></ion-icon>
          </div>
          <div className="mobile-menu-body">
            <p className="m-mission">Restoring confidence and vision through precision ocular prosthetics.</p>
            <ul className="mobile-nav-links">
              <li><Link href="/#services" onClick={toggleMenu}><ion-icon name="medical-outline"></ion-icon> Specialized Services</Link></li>
              <li><Link href="/#expertise" onClick={toggleMenu}><ion-icon name="flask-outline"></ion-icon> Clinical Technology</Link></li>
              <li><Link href="/#care" onClick={toggleMenu}><ion-icon name="heart-outline"></ion-icon> Maintenance Guide</Link></li>
              <li><Link href="/contact" onClick={toggleMenu}><ion-icon name="mail-outline"></ion-icon> Official Consultation</Link></li>
            </ul>
            
            <div className="m-social-box">
              <span>Follow Us</span>
              <div className="m-social-links">
                <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                <a href="https://wa.me/917200559344"><ion-icon name="logo-whatsapp"></ion-icon></a>
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

// Add types for Ionicons to avoid TS errors
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": any;
    }
  }
}


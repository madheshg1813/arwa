"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container hero-container">
          <div className="hero-text">
            <h1>Expert Ocular <span className="text-gradient">Restoration</span> for a Life Reclaimed.</h1>
            <p>Chennai’s premier center for bespoke ocular prosthetics. We combine world-class clinical artistry with advanced digital matching to restore your confidence and natural appearance.</p>
            <div className="hero-btns">
              <Link href="#services" className="btn-primary">Explore Services</Link>
              <Link href="/contact" className="btn-secondary">Contact Us</Link>
            </div>
            <div className="trust-icons">
              <div className="trust-item"><ion-icon name="star"></ion-icon> <span>Trusted Experts</span></div>
              <div className="trust-item"><ion-icon name="medal"></ion-icon> <span>Premium Quality</span></div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-img-box">
              <img src="/ocularist_work_1773675138301.png" alt="Ocularist at work" className="hero-display-img" />
              <div className="floating-card top">
                <div className="icon-box"><ion-icon name="checkmark-circle"></ion-icon></div>
                <div>
                  <h4>Authorized Center</h4>
                  <p>Certified Ocularist</p>
                </div>
              </div>
              <div className="floating-card bottom">
                <div className="icon-box yellow"><ion-icon name="eye"></ion-icon></div>
                <div>
                  <h4>100% Custom</h4>
                  <p>Hand-Painted Detail</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="container grid-3">
          <div className="feature-card">
            <ion-icon name="shield-check-outline"></ion-icon>
            <h3>Medical Grade P.M.M.A</h3>
            <p>We use high-quality Polymethyl Methacrylate (P.M.M.A), ensuring unbreakable, durable, and biocompatible restorations that are non-reactive to body tissue.</p>
          </div>
          <div className="feature-card">
            <ion-icon name="color-filter-outline"></ion-icon>
            <h3>Bio-Matched Realism</h3>
            <p>Proprietary Digital Iris technology to capture natural patterns and achieve perfect color depth for the patient with one eye.</p>
          </div>
          <div className="feature-card">
            <ion-icon name="sparkles-outline"></ion-icon>
            <h3>Official Vision</h3>
            <p>"To provide quality services and highest standard of workmanship for every patient with one eye."</p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="expertise">
        <div className="container flex-center">
          <div className="expertise-image">
            <img src="/advanced_diagnostic_eye.png" alt="Advanced Eye Technology" />
          </div>
          <div className="expertise-content">
            <span className="tag">Leading Technology</span>
            <h2>The Art & Science <br />of True Realism</h2>
            <p>We don't just create a prosthesis; we meticulously recreate a part of you. By integrating high-definition digital scanning with traditional hand-painted techniques, we achieve a depth of color and anatomical accuracy that is indistinguishable from your natural eye.</p>
            <ul className="check-list">
              <li><ion-icon name="checkmark-done"></ion-icon> Precision Fit Measurement Techniques</li>
              <li><ion-icon name="checkmark-done"></ion-icon> Digital Iris Fabrication & Matching</li>
              <li><ion-icon name="checkmark-done"></ion-icon> Anatomically Correct Contouring for Socket Health</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <span className="tag">Specialized Care</span>
            <h2>Clinical Ocular Solutions</h2>
            <p>Precision-engineered restorations tailored to each patient's unique anatomical requirements.</p>
          </div>
          <div className="services-grid">
            <div className="service-card-premium">
              <ion-icon name="eye"></ion-icon>
              <h3>Custom Ocular Prosthesis</h3>
              <p>Bespoke artificial eyes featuring hand-painted iris mapping. Prevents socket shrinkage, eliminates watering/discharge, and maximizes motility.</p>
              <Link href="/contact" className="link">Consult Specialist <ion-icon name="arrow-forward"></ion-icon></Link>
            </div>
            <div className="service-card-premium">
              <ion-icon name="glasses"></ion-icon>
              <h3>Ptosis Crutch Solutions</h3>
              <p>Specialized ocular prosthesis designed to support drooping eyelids and restore natural symmetry.</p>
              <Link href="/contact" className="link">View Catalog <ion-icon name="arrow-forward"></ion-icon></Link>
            </div>
            <div className="service-card-premium">
              <ion-icon name="layers"></ion-icon>
              <h3>Scleral Shells</h3>
              <p>Ultra-thin aesthetic covers for phthisical or sensitive remaining eyes, tailored for zero irritation.</p>
              <Link href="/contact" className="link">Learn More <ion-icon name="arrow-forward"></ion-icon></Link>
            </div>
            <div className="service-card-premium">
              <ion-icon name="cube"></ion-icon>
              <h3>Pressure Conformers</h3>
              <p>Intermediate restorations including socket expanders and motility pegs for post-surgical socket health.</p>
              <Link href="/contact" className="link">Get Assessment <ion-icon name="arrow-forward"></ion-icon></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Care Guide Section */}
      <section id="care" className="care-section">
        <div className="container">
          <div className="care-container">
            <div className="care-text">
              <h2>Patient Care & Maintenance</h2>
              <p>Maintain the longevity and comfort of your prosthesis with our medically-recommended care protocol.</p>
              <div className="care-steps">
                <div className="step">
                  <span className="num">01</span>
                  <div>
                    <h4>Sterile Handling</h4>
                    <p>Always sanitize hands thoroughly before handling the prosthesis to prevent infection.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="num">02</span>
                  <div>
                    <h4>Periodic Sanitization</h4>
                    <p>Clean with 0% irritant mild solutions monthly to remove surface protein deposits.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="num">03</span>
                  <div>
                    <h4>Professional Maintenance</h4>
                    <p>Schedule a professional resurfacing and polishing every 6 to 12 months for optimal hygiene.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="care-image">
              <img src="/arwa_hero_background_1773666447781.png" alt="Care Facility" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Preview */}
      <section id="contact" className="contact-v2">
        <div className="container">
          <div className="contact-box">
            <div className="contact-info-new">
              <h3>Direct Consultation</h3>
              <p>Speak with our lead ocularist today for a confidential assessment and personalized care plan.</p>
              <div className="contact-links">
                <div className="c-link">
                  <ion-icon name="location"></ion-icon>
                  <span>No 2, Usman Street, Mosque Colony, Kamarajapuram, Chennai</span>
                </div>
                <div className="c-link">
                  <ion-icon name="call"></ion-icon>
                  <span>+91 7200559344</span>
                </div>
              </div>
              <a href="https://wa.me/917200559344" className="btn-whatsapp-v2">
                <ion-icon name="logo-whatsapp"></ion-icon> Message on WhatsApp
              </a>
            </div>
            <div className="contact-form-new">
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <select>
                  <option>Custom Prosthesis</option>
                  <option>Optical Services</option>
                  <option>Consultation</option>
                </select>
                <textarea placeholder="Tell us about your requirements..." rows={4}></textarea>
                <button type="submit" className="btn-submit">Submit Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
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

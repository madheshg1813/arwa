"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

declare namespace JSX {
  interface IntrinsicElements {
    "ion-icon": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { name: string }, HTMLElement>;
  }
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-flex">
          <div className="contact-info">
            <span><ion-icon name="call" /> +91 7200559344</span>
            <span><ion-icon name="mail" /> arwainternationalindia@gmail.com</span>
          </div>
          <div className="social-links">
            <a href="https://wa.me/917200559344"><ion-icon name="logo-whatsapp" /></a>
            <a href="#"><ion-icon name="logo-facebook" /></a>
            <a href="#"><ion-icon name="logo-instagram" /></a>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div className={`mobile-overlay${menuOpen ? " active" : ""}`} onClick={closeMenu} />

      {/* Header */}
      <header className={scrolled ? "scrolled" : ""}>
        <div className="container">
          <nav className="navbar">
            <a href="#home" className="logo-link">
              <Image src="/logo.jpeg" alt="ARWA Logo" width={50} height={50} className="logo-img" />
              <div className="logo-text">
                <span className="brand-name">ARWA</span>
                <span className="brand-sub">Optics &amp; Prosthetic Center</span>
              </div>
            </a>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#expertise">Technology</a></li>
              <li><a href="#care">Care Guide</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#contact" className="btn-cta">Consult Now</a></li>
            </ul>
            <div className="mobile-menu-btn" onClick={() => setMenuOpen(true)}>
              <ion-icon name="menu-outline" />
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu${menuOpen ? " active" : ""}`}>
          <div className="mobile-menu-header">
            <div className="logo">
              <Image src="/logo.jpeg" alt="ARWA Logo" width={40} height={40} className="logo-img" />
              <span className="brand-name">ARWA CENTER</span>
            </div>
            <ion-icon name="close-outline" onClick={closeMenu} />
          </div>
          <div className="mobile-menu-body">
            <p className="m-mission">Restoring confidence and vision through precision ocular prosthetics.</p>
            <ul className="mobile-nav-links">
              <li><a href="#services" onClick={closeMenu}><ion-icon name="medical-outline" /> Specialized Services</a></li>
              <li><a href="#expertise" onClick={closeMenu}><ion-icon name="flask-outline" /> Clinical Technology</a></li>
              <li><a href="#care" onClick={closeMenu}><ion-icon name="heart-outline" /> Maintenance Guide</a></li>
              <li><a href="#contact" onClick={closeMenu}><ion-icon name="mail-outline" /> Official Consultation</a></li>
            </ul>
            <div className="m-social-box">
              <span>Follow Us</span>
              <div className="m-social-links">
                <a href="#"><ion-icon name="logo-facebook" /></a>
                <a href="#"><ion-icon name="logo-instagram" /></a>
                <a href="https://wa.me/917200559344"><ion-icon name="logo-whatsapp" /></a>
              </div>
            </div>
          </div>
          <div className="mobile-menu-footer">
            <a href="tel:+917200559344" className="m-call-btn">
              <ion-icon name="call" />
              <span>Free Consultation</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="container hero-container">
          <div className="hero-text">
            <h1>Expert Ocular <span className="text-gradient">Restoration</span> for a Life Reclaimed.</h1>
            <p>Chennai&apos;s premier center for bespoke ocular prosthetics. We combine world-class clinical artistry with advanced digital matching to restore your confidence and natural appearance.</p>
            <div className="hero-btns">
              <a href="#services" className="btn-primary">Explore Services</a>
              <a href="#contact" className="btn-secondary">Contact Us</a>
            </div>
            <div className="trust-icons">
              <div className="trust-item"><ion-icon name="star" /> <span>Trusted Experts</span></div>
              <div className="trust-item"><ion-icon name="medal" /> <span>Premium Quality</span></div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-img-box">
              <Image src="/ocularist_work.png" alt="Ocularist at work" width={500} height={500} className="hero-display-img" />
              <div className="floating-card top">
                <div className="icon-box"><ion-icon name="checkmark-circle" /></div>
                <div>
                  <h4>Authorized Center</h4>
                  <p>Certified Ocularist</p>
                </div>
              </div>
              <div className="floating-card bottom">
                <div className="icon-box yellow"><ion-icon name="eye" /></div>
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
            <ion-icon name="shield-checkmark-outline" />
            <h3>Medical Grade P.M.M.A</h3>
            <p>We use high-quality Polymethyl Methacrylate (P.M.M.A), ensuring unbreakable, durable, and biocompatible restorations that are non-reactive to body tissue.</p>
          </div>
          <div className="feature-card">
            <ion-icon name="color-filter-outline" />
            <h3>Bio-Matched Realism</h3>
            <p>Proprietary Digital Iris technology to capture natural patterns and achieve perfect color depth for the patient with one eye.</p>
          </div>
          <div className="feature-card">
            <ion-icon name="sparkles-outline" />
            <h3>Official Vision</h3>
            <p>&ldquo;To provide quality services and highest standard of workmanship for every patient with one eye.&rdquo;</p>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="expertise">
        <div className="container flex-center">
          <div className="expertise-image">
            <Image src="/advanced_diagnostic_eye.png" alt="Advanced Eye Technology" width={550} height={450} />
          </div>
          <div className="expertise-content">
            <span className="tag">Leading Technology</span>
            <h2>The Art &amp; Science <br />of True Realism</h2>
            <p>We don&apos;t just create a prosthesis; we meticulously recreate a part of you. By integrating high-definition digital scanning with traditional hand-painted techniques, we achieve a depth of color and anatomical accuracy that is indistinguishable from your natural eye.</p>
            <ul className="check-list">
              <li><ion-icon name="checkmark-done" /> Precision Fit Measurement Techniques</li>
              <li><ion-icon name="checkmark-done" /> Digital Iris Fabrication &amp; Matching</li>
              <li><ion-icon name="checkmark-done" /> Anatomically Correct Contouring for Socket Health</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <span className="tag">Specialized Care</span>
            <h2>Our Complete Range of Services</h2>
            <p>Precision-engineered solutions tailored to each patient&apos;s unique clinical and anatomical requirements.</p>
          </div>

          {/* Category 1: Opticals */}
          <div className="service-category">
            <div className="category-label">
              <div className="category-icon-wrap" style={{ background: "var(--primary-light)", color: "var(--primary)" }}>
                <ion-icon name="glasses-outline" />
              </div>
              <div>
                <h3>Opticals &amp; Special Medical Lens Manufacturing</h3>
                <p>Advanced optical solutions for complex vision conditions</p>
              </div>
            </div>
            <div className="services-grid services-grid-3">
              <div className="service-card-premium">
                <ion-icon name="glasses" />
                <h3>Crutch Glasses (Ptosis Support)</h3>
                <p>Specially fabricated glasses with crutch attachments to lift and support drooping eyelids, restoring normal field of vision.</p>
                <a href="#contact" className="link">Consult Now <ion-icon name="arrow-forward" /></a>
              </div>
              <div className="service-card-premium">
                <ion-icon name="aperture-outline" />
                <h3>Keratoconus Lenses</h3>
                <p>Custom-designed contact lenses to correct the irregular corneal shape caused by keratoconus, improving visual clarity.</p>
                <a href="#contact" className="link">Learn More <ion-icon name="arrow-forward" /></a>
              </div>
              <div className="service-card-premium">
                <ion-icon name="moon-outline" />
                <h3>Orthokeratology / Ortho-K Lens</h3>
                <p>Overnight specially designed rigid lenses that gently reshape the cornea to correct myopia and reduce dependence on glasses.</p>
                <a href="#contact" className="link">Learn More <ion-icon name="arrow-forward" /></a>
              </div>
              <div className="service-card-premium">
                <ion-icon name="radio-button-on-outline" />
                <h3>Scleral Contact Lens</h3>
                <p>Large-diameter gas-permeable lenses that vault the cornea and rest on the sclera, ideal for irregular corneas and dry eye conditions.</p>
                <a href="#contact" className="link">Get Assessment <ion-icon name="arrow-forward" /></a>
              </div>
              <div className="service-card-premium">
                <ion-icon name="flower-outline" />
                <h3>Rose K Lens</h3>
                <p>The globally recognised gold standard rigid gas-permeable lens system specifically designed for keratoconus patients.</p>
                <a href="#contact" className="link">Get Assessment <ion-icon name="arrow-forward" /></a>
              </div>
              <div className="service-card-premium">
                <ion-icon name="eye-outline" />
                <h3>Prosthetic Soft &amp; Hard Contact Lens</h3>
                <p>Custom-tinted prosthetic lenses in both soft and rigid materials to cosmetically mask disfigured or blind eyes.</p>
                <a href="#contact" className="link">View Options <ion-icon name="arrow-forward" /></a>
              </div>
            </div>
          </div>

          {/* Category 2: Oculoplasty */}
          <div className="service-category">
            <div className="category-label">
              <div className="category-icon-wrap" style={{ background: "#FFF4E8", color: "var(--accent-orange)" }}>
                <ion-icon name="medkit-outline" />
              </div>
              <div>
                <h3>Oculoplasty &amp; Eye Specialist</h3>
                <p>Specialized management of complex eye conditions and socket rehabilitation</p>
              </div>
            </div>
            <div className="services-grid services-grid-3">
              <div className="service-card-premium">
                <ion-icon name="medical-outline" />
                <h3>Oculoplasty Eye Specialist</h3>
                <p>Expert oculoplastic consultation and prosthetic fitting for patients requiring eyelid, orbit, and lacrimal system restoration.</p>
                <a href="#contact" className="link">Book Consultation <ion-icon name="arrow-forward" /></a>
              </div>
              <div className="service-card-premium">
                <ion-icon name="resize-outline" />
                <h3>Microphthalmia Management</h3>
                <p>Comprehensive management for underdeveloped small eyes, including custom conformers and prostheses to promote socket growth.</p>
                <a href="#contact" className="link">Learn More <ion-icon name="arrow-forward" /></a>
              </div>
              <div className="service-card-premium">
                <ion-icon name="contract-outline" />
                <h3>Contracted Eye Management</h3>
                <p>Specialised treatment for contracted or shrunken eye sockets using progressive conformers to restore volume and prepare for prosthesis fitting.</p>
                <a href="#contact" className="link">Get Assessment <ion-icon name="arrow-forward" /></a>
              </div>
            </div>
          </div>

          {/* Category 3: Ocular & Orbital Prosthesis */}
          <div className="service-category">
            <div className="category-label">
              <div className="category-icon-wrap" style={{ background: "#EAF7EC", color: "var(--accent-green)" }}>
                <ion-icon name="eye-outline" />
              </div>
              <div>
                <h3>Ocular &amp; Orbital Prosthesis</h3>
                <p>Hyper-realistic custom prosthetic eyes and shells with bio-matched detail</p>
              </div>
            </div>
            <div className="services-grid services-grid-3">
              <div className="service-card-premium">
                <ion-icon name="eye" />
                <h3>Ocular Prosthesis</h3>
                <p>Bespoke custom artificial eyes with hand-painted iris mapping. Prevents socket shrinkage, eliminates discharge, and maximises natural motility.</p>
                <a href="#contact" className="link">Consult Specialist <ion-icon name="arrow-forward" /></a>
              </div>
              <div className="service-card-premium">
                <ion-icon name="cube-outline" />
                <h3>Orbital Prosthesis</h3>
                <p>Custom orbital prostheses for patients who have undergone exenteration, restoring facial symmetry and supporting quality of life.</p>
                <a href="#contact" className="link">Learn More <ion-icon name="arrow-forward" /></a>
              </div>
              <div className="service-card-premium">
                <ion-icon name="layers" />
                <h3>Scleral Shell</h3>
                <p>Ultra-thin scleral prosthetic shells placed over a shrunken or disfigured eye, providing a natural aesthetic with zero irritation.</p>
                <a href="#contact" className="link">View Options <ion-icon name="arrow-forward" /></a>
              </div>
            </div>
          </div>

          {/* Category 4: Low Vision */}
          <div className="service-category">
            <div className="category-label">
              <div className="category-icon-wrap" style={{ background: "#F0EAFF", color: "#7C3AED" }}>
                <ion-icon name="accessibility-outline" />
              </div>
              <div>
                <h3>Low Vision &amp; Blind Eye Devices</h3>
                <p>Assistive devices to maximise remaining vision and independence</p>
              </div>
            </div>
            <div className="services-grid services-grid-2">
              <div className="service-card-premium">
                <ion-icon name="telescope-outline" />
                <h3>Low Vision Devices</h3>
                <p>Optical and electronic magnification aids — including magnifiers, telescopic systems, and electronic devices — tailored for patients with partial sight.</p>
                <a href="#contact" className="link">Explore Devices <ion-icon name="arrow-forward" /></a>
              </div>
              <div className="service-card-premium">
                <ion-icon name="eye-off-outline" />
                <h3>Blind Eye Devices</h3>
                <p>Specialist aids and prosthetic solutions for patients with complete vision loss, focused on comfort, cosmesis, and quality of life.</p>
                <a href="#contact" className="link">Learn More <ion-icon name="arrow-forward" /></a>
              </div>
            </div>
          </div>

          {/* Category 5: Facial & Maxillofacial */}
          <div className="service-category">
            <div className="category-label">
              <div className="category-icon-wrap" style={{ background: "#FFF0F0", color: "var(--accent-red)" }}>
                <ion-icon name="person-outline" />
              </div>
              <div>
                <h3>Facial &amp; Maxillofacial Prosthesis</h3>
                <p>Lifelike prosthetic restorations for facial features and structures</p>
              </div>
            </div>
            <div className="services-grid services-grid-3">
              <div className="service-card-premium">
                <ion-icon name="ear-outline" />
                <h3>Auricular Prosthesis</h3>
                <p>Custom silicone ear prostheses for patients with congenital absence or surgical loss of the ear, matched precisely to the contralateral ear.</p>
                <a href="#contact" className="link">Consult Now <ion-icon name="arrow-forward" /></a>
              </div>
              <div className="service-card-premium">
                <ion-icon name="happy-outline" />
                <h3>Nasal Prosthesis</h3>
                <p>Realistic silicone nasal restorations fabricated for patients following rhinectomy or trauma, restoring facial harmony and confidence.</p>
                <a href="#contact" className="link">Learn More <ion-icon name="arrow-forward" /></a>
              </div>
              <div className="service-card-premium">
                <ion-icon name="person" />
                <h3>Facial Prosthesis</h3>
                <p>Comprehensive custom facial prosthetics for complex facial defects, blending seamlessly with natural skin tone and texture.</p>
                <a href="#contact" className="link">Get Assessment <ion-icon name="arrow-forward" /></a>
              </div>
              <div className="service-card-premium service-card-wide">
                <ion-icon name="construct-outline" />
                <h3>Maxillofacial Prosthesis</h3>
                <p>Specialised prosthetics for oral and maxillofacial defects including obturators, palatal lifts, and intraoral restorations following cancer surgery or trauma.</p>
                <a href="#contact" className="link">Consult Specialist <ion-icon name="arrow-forward" /></a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Care Section */}
      <section id="care" className="care-section">
        <div className="container">
          <div className="care-container">
            <div className="care-text">
              <h2>Patient Care &amp; Maintenance</h2>
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
              <Image src="/arwa_hero_background.png" alt="Care Facility" width={500} height={600} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-v2">
        <div className="container">
          <div className="contact-box">
            <div className="contact-info-new">
              <h3>Direct Consultation</h3>
              <p>Speak with our lead ocularist today for a confidential assessment and personalized care plan.</p>
              <div className="contact-links">
                <div className="c-link">
                  <ion-icon name="location" />
                  <span>No 2, Usman Street, Mosque Colony, Kamarajapuram, Chennai</span>
                </div>
                <div className="c-link">
                  <ion-icon name="call" />
                  <span>+91 7200559344</span>
                </div>
              </div>
              <a href="https://wa.me/917200559344" className="btn-whatsapp-v2">
                <ion-icon name="logo-whatsapp" /> Message on WhatsApp
              </a>
            </div>
            <div className="contact-form-new">
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <select defaultValue="">
                  <option value="" disabled>Select a Service</option>
                  <optgroup label="Opticals &amp; Special Medical Lenses">
                    <option>Crutch Glasses (Ptosis Support)</option>
                    <option>Keratoconus Lenses</option>
                    <option>Orthokeratology / Ortho-K Lens</option>
                    <option>Scleral Contact Lens</option>
                    <option>Rose K Lens</option>
                    <option>Prosthetic Soft &amp; Hard Contact Lens</option>
                  </optgroup>
                  <optgroup label="Oculoplasty &amp; Eye Management">
                    <option>Oculoplasty Eye Specialist</option>
                    <option>Microphthalmia Management</option>
                    <option>Contracted Eye Management</option>
                  </optgroup>
                  <optgroup label="Ocular &amp; Orbital Prosthesis">
                    <option>Ocular Prosthesis</option>
                    <option>Orbital Prosthesis</option>
                    <option>Scleral Shell</option>
                  </optgroup>
                  <optgroup label="Low Vision &amp; Blind Eye Devices">
                    <option>Low Vision Devices</option>
                    <option>Blind Eye Devices</option>
                  </optgroup>
                  <optgroup label="Facial &amp; Maxillofacial Prosthesis">
                    <option>Auricular Prosthesis</option>
                    <option>Nasal Prosthesis</option>
                    <option>Facial Prosthesis</option>
                    <option>Maxillofacial Prosthesis</option>
                  </optgroup>
                  <option>General Consultation</option>
                </select>
                <textarea placeholder="Tell us about your requirements..." rows={4} />
                <button type="submit" className="btn-submit">Submit Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-premium">
        <div className="container footer-grid">
          <div className="footer-logo-box">
            <span className="f-logo">ARWA</span>
            <p>India&apos;s leading clinical center specializing in hyper-realistic ocular prosthetics and specialized optical solutions. Restoring vision, confidence, and quality of life.</p>
            <div className="f-socials">
              <a href="#"><ion-icon name="logo-facebook" /></a>
              <a href="#"><ion-icon name="logo-instagram" /></a>
              <a href="https://wa.me/917200559344"><ion-icon name="logo-whatsapp" /></a>
            </div>
          </div>
          <div className="footer-nav">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#expertise">Technology</a>
            <a href="#care">Care Guide</a>
            <a href="#contact">Contact Us</a>
          </div>
          <div className="footer-contact-new">
            <h4>Connect With Us</h4>
            <div className="footer-info-item">
              <ion-icon name="location-outline" />
              <span>No 2, Usman Street, Mosque Colony, Chennai</span>
            </div>
            <div className="footer-info-item">
              <ion-icon name="call-outline" />
              <span>+91 7200559344</span>
            </div>
            <div className="footer-info-item">
              <ion-icon name="mail-outline" />
              <span>arwainternationalindia@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; 2026 ARWA Optics &amp; Prosthetic Center. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/917200559344" className="floating-whatsapp" target="_blank" rel="noopener noreferrer">
        <ion-icon name="logo-whatsapp" />
        <span className="wa-tooltip">Chat with us</span>
      </a>
    </>
  );
}

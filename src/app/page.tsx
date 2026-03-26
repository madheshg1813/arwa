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
            <h1>Restore Your <span className="text-gradient">Confidence</span> with Custom Artificial Eyes.</h1>
            <p>Chennai’s leading center for high-quality, natural-looking artificial eyes. We help you look and feel your best with personalized care and advanced matching technology.</p>
            <div className="hero-btns">
              <Link href="#services" className="btn-primary">Book Appointment Now</Link>
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
            <div className="feature-icon-box">
              <ion-icon name="shield-checkmark-outline"></ion-icon>
            </div>
            <h3>Medical Grade P.M.M.A</h3>
            <p>We use high-quality Polymethyl Methacrylate (P.M.M.A), ensuring unbreakable, durable, and biocompatible restorations that are non-reactive to body tissue.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-box">
              <ion-icon name="scan-outline"></ion-icon>
            </div>
            <h3>Bio-Matched Realism</h3>
            <p>Proprietary Digital Iris technology to capture natural patterns and achieve perfect color depth for the patient with one eye.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-box">
              <ion-icon name="eye-outline"></ion-icon>
            </div>
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
            <h2>The Art & Science of True Realism</h2>
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
            <h2>Our Complete Range of Services</h2>
            <p>Precision-engineered solutions tailored to each patient&apos;s unique clinical and anatomical requirements.</p>
          </div>

          {/* Category 1: Opticals */}
          <div className="service-category">
            <div className="category-label">
              <div className="category-icon-wrap" style={{ background: "var(--primary-light)", color: "var(--primary)" }}>
                <ion-icon name="glasses-outline"></ion-icon>
              </div>
              <div>
                <h3>Opticals &amp; Special Medical Lens Manufacturing</h3>
                <p>Advanced optical solutions for complex vision conditions</p>
              </div>
            </div>
            <div className="services-grid services-grid-3">
              <div className="service-card-premium">
                <div className="service-icon-box"><ion-icon name="glasses"></ion-icon></div>
                <h3>Crutch Glasses (Ptosis Support)</h3>
                <p>Specially fabricated glasses with crutch attachments to lift and support drooping eyelids, restoring normal field of vision.</p>
                <Link href="/contact" className="link">Consult Now <ion-icon name="arrow-forward"></ion-icon></Link>
              </div>
              <div className="service-card-premium">
                <div className="service-icon-box"><ion-icon name="aperture-outline"></ion-icon></div>
                <h3>Keratoconus Lenses</h3>
                <p>Custom-designed contact lenses to correct the irregular corneal shape caused by keratoconus, improving visual clarity.</p>
                <Link href="/contact" className="link">Learn More <ion-icon name="arrow-forward"></ion-icon></Link>
              </div>
              <div className="service-card-premium">
                <div className="service-icon-box"><ion-icon name="moon-outline"></ion-icon></div>
                <h3>Orthokeratology / Ortho-K Lens</h3>
                <p>Overnight specially designed rigid lenses that gently reshape the cornea to correct myopia and reduce dependence on glasses.</p>
                <Link href="/contact" className="link">Learn More <ion-icon name="arrow-forward"></ion-icon></Link>
              </div>
              <div className="service-card-premium">
                <div className="service-icon-box"><ion-icon name="radio-button-on-outline"></ion-icon></div>
                <h3>Scleral Contact Lens</h3>
                <p>Large-diameter gas-permeable lenses that vault the cornea and rest on the sclera, ideal for irregular corneas and dry eye conditions.</p>
                <Link href="/contact" className="link">Get Assessment <ion-icon name="arrow-forward"></ion-icon></Link>
              </div>
              <div className="service-card-premium">
                <div className="service-icon-box"><ion-icon name="flower-outline"></ion-icon></div>
                <h3>Rose K Lens</h3>
                <p>The globally recognised gold standard rigid gas-permeable lens system specifically designed for keratoconus patients.</p>
                <Link href="/contact" className="link">Get Assessment <ion-icon name="arrow-forward"></ion-icon></Link>
              </div>
              <div className="service-card-premium">
                <div className="service-icon-box"><ion-icon name="eye-outline"></ion-icon></div>
                <h3>Prosthetic Soft &amp; Hard Contact Lens</h3>
                <p>Custom-tinted prosthetic lenses in both soft and rigid materials to cosmetically mask disfigured or blind eyes.</p>
                <Link href="/contact" className="link">View Options <ion-icon name="arrow-forward"></ion-icon></Link>
              </div>
            </div>
          </div>

          {/* Category 2: Oculoplasty */}
          <div className="service-category">
            <div className="category-label">
              <div className="category-icon-wrap" style={{ background: "#FFF4E8", color: "var(--accent-orange)" }}>
                <ion-icon name="medkit-outline"></ion-icon>
              </div>
              <div>
                <h3>Oculoplasty &amp; Eye Specialist</h3>
                <p>Specialized management of complex eye conditions and socket rehabilitation</p>
              </div>
            </div>
            <div className="services-grid services-grid-3">
              <div className="service-card-premium">
                <div className="service-icon-box"><ion-icon name="medical-outline"></ion-icon></div>
                <h3>Oculoplasty Eye Specialist</h3>
                <p>Expert oculoplastic consultation and prosthetic fitting for patients requiring eyelid, orbit, and lacrimal system restoration.</p>
                <Link href="/contact" className="link">Book Consultation <ion-icon name="arrow-forward"></ion-icon></Link>
              </div>
              <div className="service-card-premium">
                <div className="service-icon-box"><ion-icon name="resize-outline"></ion-icon></div>
                <h3>Microphthalmia Management</h3>
                <p>Comprehensive management for underdeveloped small eyes, including custom conformers and prostheses to promote socket growth.</p>
                <Link href="/contact" className="link">Learn More <ion-icon name="arrow-forward"></ion-icon></Link>
              </div>
              <div className="service-card-premium">
                <div className="service-icon-box"><ion-icon name="contract-outline"></ion-icon></div>
                <h3>Contracted Eye Management</h3>
                <p>Specialised treatment for contracted or shrunken eye sockets using progressive conformers to restore volume and prepare for prosthesis fitting.</p>
                <Link href="/contact" className="link">Get Assessment <ion-icon name="arrow-forward"></ion-icon></Link>
              </div>
            </div>
          </div>

          {/* Category 3: Ocular & Orbital Prosthesis */}
          <div className="service-category">
            <div className="category-label">
              <div className="category-icon-wrap" style={{ background: "#EAF7EC", color: "var(--accent-green)" }}>
                <ion-icon name="eye-outline"></ion-icon>
              </div>
              <div>
                <h3>Ocular &amp; Orbital Prosthesis</h3>
                <p>Hyper-realistic custom prosthetic eyes and shells with bio-matched detail</p>
              </div>
            </div>
            <div className="services-grid services-grid-3">
              <div className="service-card-premium">
                <div className="service-icon-box"><ion-icon name="eye"></ion-icon></div>
                <h3>Ocular Prosthesis</h3>
                <p>Bespoke custom artificial eyes with hand-painted iris mapping. Prevents socket shrinkage, eliminates discharge, and maximises natural motility.</p>
                <Link href="/contact" className="link">Consult Specialist <ion-icon name="arrow-forward"></ion-icon></Link>
              </div>
              <div className="service-card-premium">
                <div className="service-icon-box"><ion-icon name="cube-outline"></ion-icon></div>
                <h3>Orbital Prosthesis</h3>
                <p>Custom orbital prostheses for patients who have undergone exenteration, restoring facial symmetry and supporting quality of life.</p>
                <Link href="/contact" className="link">Learn More <ion-icon name="arrow-forward"></ion-icon></Link>
              </div>
              <div className="service-card-premium">
                <div className="service-icon-box"><ion-icon name="layers"></ion-icon></div>
                <h3>Scleral Shell</h3>
                <p>Ultra-thin scleral prosthetic shells placed over a shrunken or disfigured eye, providing a natural aesthetic with zero irritation.</p>
                <Link href="/contact" className="link">View Options <ion-icon name="arrow-forward"></ion-icon></Link>
              </div>
            </div>
          </div>

          {/* Category 4: Low Vision */}
          <div className="service-category">
            <div className="category-label">
              <div className="category-icon-wrap" style={{ background: "#F0EAFF", color: "#7C3AED" }}>
                <ion-icon name="accessibility-outline"></ion-icon>
              </div>
              <div>
                <h3>Low Vision &amp; Blind Eye Devices</h3>
                <p>Assistive devices to maximise remaining vision and independence</p>
              </div>
            </div>
            <div className="services-grid services-grid-2">
              <div className="service-card-premium">
                <div className="service-icon-box"><ion-icon name="telescope-outline"></ion-icon></div>
                <h3>Low Vision Devices</h3>
                <p>Optical and electronic magnification aids — including magnifiers, telescopic systems, and electronic devices — tailored for patients with partial sight.</p>
                <Link href="/contact" className="link">Explore Devices <ion-icon name="arrow-forward"></ion-icon></Link>
              </div>
              <div className="service-card-premium">
                <div className="service-icon-box"><ion-icon name="eye-off-outline"></ion-icon></div>
                <h3>Blind Eye Devices</h3>
                <p>Specialist aids and prosthetic solutions for patients with complete vision loss, focused on comfort, cosmesis, and quality of life.</p>
                <Link href="/contact" className="link">Learn More <ion-icon name="arrow-forward"></ion-icon></Link>
              </div>
            </div>
          </div>

          {/* Category 5: Facial & Maxillofacial */}
          <div className="service-category">
            <div className="category-label">
              <div className="category-icon-wrap" style={{ background: "#FFF0F0", color: "var(--accent-red)" }}>
                <ion-icon name="person-outline"></ion-icon>
              </div>
              <div>
                <h3>Facial &amp; Maxillofacial Prosthesis</h3>
                <p>Lifelike prosthetic restorations for facial features and structures</p>
              </div>
            </div>
            <div className="services-grid services-grid-3">
              <div className="service-card-premium">
                <div className="service-icon-box"><ion-icon name="ear-outline"></ion-icon></div>
                <h3>Auricular Prosthesis</h3>
                <p>Custom silicone ear prostheses for patients with congenital absence or surgical loss of the ear, matched precisely to the contralateral ear.</p>
                <Link href="/contact" className="link">Consult Now <ion-icon name="arrow-forward"></ion-icon></Link>
              </div>
              <div className="service-card-premium">
                <div className="service-icon-box"><ion-icon name="happy-outline"></ion-icon></div>
                <h3>Nasal Prosthesis</h3>
                <p>Realistic silicone nasal restorations fabricated for patients following rhinectomy or trauma, restoring facial harmony and confidence.</p>
                <Link href="/contact" className="link">Learn More <ion-icon name="arrow-forward"></ion-icon></Link>
              </div>
              <div className="service-card-premium">
                <div className="service-icon-box"><ion-icon name="person"></ion-icon></div>
                <h3>Facial Prosthesis</h3>
                <p>Comprehensive custom facial prosthetics for complex facial defects, blending seamlessly with natural skin tone and texture.</p>
                <Link href="/contact" className="link">Get Assessment <ion-icon name="arrow-forward"></ion-icon></Link>
              </div>
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

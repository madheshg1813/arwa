import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Contact Us | ARWA Optics & Prosthetic Center Chennai",
  description: "Book a consultation with ARWA Optics & Prosthetic Center in Chennai. Call +91 7200559344 or WhatsApp us. Located at No 2, Usman Street, Kamarajapuram, Chennai — 600072.",
  keywords: "contact ARWA Chennai, ocular prosthesis appointment chennai, prosthetic clinic consultation chennai, artificial eye appointment",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contact ARWA Optics & Prosthetic Center | Chennai",
    description: "Book a confidential consultation with our certified ocularist in Chennai. Call or WhatsApp +91 7200559344.",
    images: [{ url: "/ocularist_work_1773675138301.png", width: 1200, height: 630, alt: "ARWA Prosthetic Center Chennai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact ARWA Optics & Prosthetic Center",
    description: "Book a consultation with our certified ocularist in Chennai.",
    images: ["/ocularist_work_1773675138301.png"],
  },
};

export default function Contact() {
  return (
    <main>
      <Header />
      
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="tag">Clinical Consultation</span>
          <h1>Connect with Our Specialists</h1>
          <p>Speak with our authorized ocularists and optical experts to begin your journey toward life-like restoration and enhanced vision.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-page-content">
        <div className="container">
          <div className="contact-grid-v3">
            <div className="contact-info-card">
              <div className="info-block">
                <div className="info-icon"><ion-icon name="location"></ion-icon></div>
                <div className="info-detail">
                  <h4>Official Address</h4>
                  <p>No 2, Usman Street, Mosque Colony, Kamarajapuram, Chennai - 600072</p>
                </div>
              </div>
              <div className="info-block">
                <div className="info-icon"><ion-icon name="call"></ion-icon></div>
                <div className="info-detail">
                  <h4>Call Us</h4>
                  <p>+91 7200559344</p>
                </div>
              </div>
              <div className="info-block">
                <div className="info-icon"><ion-icon name="mail"></ion-icon></div>
                <div className="info-detail">
                  <h4>Email Us</h4>
                  <p>arwainternationalindia@gmail.com</p>
                </div>
              </div>
              <div className="info-block">
                <div className="info-icon"><ion-icon name="time"></ion-icon></div>
                <div className="info-detail">
                  <h4>Working Hours</h4>
                  <p>Mon - Sat: 10:00 AM - 7:00 PM</p>
                </div>
              </div>
              
              <div className="whatsapp-card">
                <div className="div-inner">
                  <ion-icon name="logo-whatsapp"></ion-icon>
                  <span>Clinical Support Line</span>
                </div>
                <a href="https://wa.me/917200559344" target="_blank" rel="noopener noreferrer" className="btn-wa-full">Request Assessment</a>
              </div>
            </div>

            <div className="contact-form-container">
              <div className="form-header">
                <h2>Clinical Inquiry Form</h2>
                <p>Provide your details below for a confidential review of your requirements by our specialists.</p>
              </div>
              <form className="main-contact-form">
                <div className="input-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="input-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="example@mail.com" required />
                </div>
                <div className="input-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" required />
                </div>
                <div className="input-group">
                  <label>Interested In</label>
                  <select>
                    <option>Custom Ocular Prosthesis</option>
                    <option>Digital Iris Matching</option>
                    <option>Scleral Shells</option>
                    <option>Ptosis Crutch Ocular Prosthesis</option>
                    <option>Socket Therapy / Expansion</option>
                  </select>
                </div>
                <div className="input-group full">
                  <label>Your Message</label>
                  <textarea rows={5} placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="btn-primary-v2">Submit Clinical Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-placeholder">
            <img src="/arwa_hero_background_1773666447781.png" alt="ARWA Center Location" className="map-bg" />
            <div className="map-overlay">
              <ion-icon name="location-sharp"></ion-icon>
              <p>Visit us at our Kamarajapuram Center</p>
              <a href="https://www.google.com/maps/search/No+2,+Usman+Street,+Mosque+Colony,+Kamarajapuram,+Chennai:+600072" target="_blank" rel="noopener noreferrer" className="btn-directions">Get Directions</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

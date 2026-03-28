import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prosthetic Clinic Near Tambaram | ARWA Optics & Prosthetic Center",
  description: "Searching for a prosthetic clinic near Tambaram, Chennai? ARWA Optics & Prosthetic Center is just minutes away — offering custom ocular prosthesis, scleral lenses & facial prosthetics.",
  keywords: "prosthetic clinic tambaram, artificial eye tambaram, ocular prosthesis near tambaram chennai",
};

export default function ProstheticClinicTambaram() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="hero lp-hero">
        <div className="container hero-container">
          <div className="hero-text">
            <span className="tag">Serving Tambaram, Chennai</span>
            <h1>Prosthetic Clinic <span className="text-gradient">Near Tambaram</span> — ARWA Center</h1>
            <p>Residents of Tambaram and nearby areas can easily reach our specialist prosthetic clinic in Kamarajapuram, Chennai — just a short drive away. Get expert ocular prosthesis, scleral lenses, and facial prosthetics from certified specialists.</p>
            <div className="hero-btns">
              <Link href="/contact" className="btn-primary">Book Consultation</Link>
              <a href="https://wa.me/917200559344" className="btn-secondary">WhatsApp Us</a>
            </div>
            <div className="trust-icons">
              <div className="trust-item"><ion-icon name="location"></ion-icon> <span>Near Tambaram, Chennai</span></div>
              <div className="trust-item"><ion-icon name="car-outline"></ion-icon> <span>Easy to Reach</span></div>
              <div className="trust-item"><ion-icon name="shield-checkmark-outline"></ion-icon> <span>Certified Specialist</span></div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-img-box">
              <img src="/ocularist_work_1773675138301.png" alt="Prosthetic clinic near Tambaram" className="hero-display-img" />
              <div className="floating-card top">
                <div className="icon-box"><ion-icon name="checkmark-circle"></ion-icon></div>
                <div><h4>Authorized Center</h4><p>Certified Ocularist</p></div>
              </div>
              <div className="floating-card bottom">
                <div className="icon-box yellow"><ion-icon name="navigate-outline"></ion-icon></div>
                <div><h4>Tambaram Nearby</h4><p>Quick Access</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Visit from Tambaram */}
      <section className="why-choose">
        <div className="container grid-3">
          <div className="feature-card">
            <div className="feature-icon-box"><ion-icon name="location-outline"></ion-icon></div>
            <h3>Conveniently Located</h3>
            <p>Our clinic at No 2, Usman Street, Kamarajapuram, Chennai is easily accessible from Tambaram via GST Road and local transport routes.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-box"><ion-icon name="eye-outline"></ion-icon></div>
            <h3>Full Prosthetic Services</h3>
            <p>Tambaram patients get access to our complete range — ocular prosthesis, scleral shells, facial prosthetics, low vision devices, and oculoplasty services.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-box"><ion-icon name="call-outline"></ion-icon></div>
            <h3>Book in Minutes</h3>
            <p>Call or WhatsApp +91 7200559344 to book your appointment. No long waiting periods — we schedule consultations at your convenience.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services lp-services">
        <div className="container">
          <div className="section-header">
            <span className="tag">Available Services</span>
            <h2>Prosthetic Services for Tambaram Patients</h2>
            <p>All specialist prosthetic and optical services available at our Chennai clinic, close to Tambaram.</p>
          </div>
          <div className="services-grid services-grid-3" style={{ gap: "16px" }}>
            {[
              { icon: "eye", title: "Ocular Prosthesis", desc: "Hand-crafted artificial eyes with digital iris matching for natural, comfortable wear." },
              { icon: "layers", title: "Scleral Shell", desc: "Thin prosthetic shells over existing eyes for aesthetic restoration without discomfort." },
              { icon: "glasses", title: "Speciality Contact Lenses", desc: "Keratoconus, Ortho-K, Rose K, Scleral and prosthetic contact lenses fitted by experts." },
              { icon: "person", title: "Facial Prosthetics", desc: "Custom silicone ear, nose and facial prostheses blended with your natural skin tone." },
              { icon: "telescope-outline", title: "Low Vision Devices", desc: "Magnifiers and electronic aids for patients with reduced or partial vision." },
              { icon: "medical-outline", title: "Oculoplasty Care", desc: "Management of microphthalmia, contracted sockets, and orbital rehabilitation." },
            ].map((s) => (
              <div className="service-card-premium" key={s.title}>
                <div className="service-icon-box"><ion-icon name={s.icon}></ion-icon></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link href="/contact" className="link">Enquire Now <ion-icon name="arrow-forward"></ion-icon></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Pillar + CTA */}
      <section className="lp-cta">
        <div className="container">
          <div className="cta-box">
            <div>
              <h2>Visit Our Prosthetic Clinic from Tambaram</h2>
              <p>Located in Chennai, easily reachable from Tambaram. Call to book your consultation today.</p>
              <Link href="/prosthetic-clinic-chennai" className="pillar-link">
                <ion-icon name="arrow-back"></ion-icon> View All Chennai Prosthetic Services
              </Link>
            </div>
            <div className="cta-btns">
              <a href="tel:+917200559344" className="btn-primary"><ion-icon name="call"></ion-icon> Call Us</a>
              <a href="https://wa.me/917200559344" className="btn-whatsapp-v2"><ion-icon name="logo-whatsapp"></ion-icon> WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prosthetic Clinic Near Pallavaram | ARWA Optics & Prosthetic Center",
  description: "Need a prosthetic clinic near Pallavaram, Chennai? ARWA Optics & Prosthetic Center is easily accessible from Pallavaram — offering custom ocular prosthesis, facial prosthetics & more.",
  keywords: "prosthetic clinic pallavaram, artificial eye pallavaram, ocular prosthesis near pallavaram chennai",
};

export default function ProstheticClinicPallavaram() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="hero lp-hero">
        <div className="container hero-container">
          <div className="hero-text">
            <span className="tag">Serving Pallavaram, Chennai</span>
            <h1>Prosthetic Clinic <span className="text-gradient">Near Pallavaram</span> — ARWA Center</h1>
            <p>Patients from Pallavaram can access ARWA Optics &amp; Prosthetic Center in Kamarajapuram, Chennai — a trusted specialist clinic for ocular prosthesis, scleral contact lenses, and complete facial prosthetic restoration.</p>
            <div className="hero-btns">
              <Link href="/contact" className="btn-primary">Book Consultation</Link>
              <a href="https://wa.me/917200559344" className="btn-secondary">WhatsApp Us</a>
            </div>
            <div className="trust-icons">
              <div className="trust-item"><ion-icon name="location"></ion-icon> <span>Near Pallavaram, Chennai</span></div>
              <div className="trust-item"><ion-icon name="car-outline"></ion-icon> <span>Easy to Reach</span></div>
              <div className="trust-item"><ion-icon name="shield-checkmark-outline"></ion-icon> <span>Certified Specialist</span></div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-img-box">
              <img src="/ocularist_work_1773675138301.png" alt="Prosthetic clinic near Pallavaram" className="hero-display-img" />
              <div className="floating-card top">
                <div className="icon-box"><ion-icon name="checkmark-circle"></ion-icon></div>
                <div><h4>Authorized Center</h4><p>Certified Ocularist</p></div>
              </div>
              <div className="floating-card bottom">
                <div className="icon-box yellow"><ion-icon name="navigate-outline"></ion-icon></div>
                <div><h4>Pallavaram Nearby</h4><p>Quick Access</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="why-choose">
        <div className="container grid-3">
          <div className="feature-card">
            <div className="feature-icon-box"><ion-icon name="location-outline"></ion-icon></div>
            <h3>Accessible from Pallavaram</h3>
            <p>Our clinic in Kamarajapuram, Chennai is conveniently reachable from Pallavaram — well-connected via GST Road and local bus routes.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-box"><ion-icon name="color-filter-outline"></ion-icon></div>
            <h3>Bio-Matched Prosthetics</h3>
            <p>We use digital iris matching technology to ensure your prosthetic eye matches your natural eye perfectly — indistinguishable to observers.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-box"><ion-icon name="shield-checkmark-outline"></ion-icon></div>
            <h3>Medically Certified</h3>
            <p>All prosthetics are fabricated using medical-grade PMMA material — safe, biocompatible, and durable for long-term wear.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services lp-services">
        <div className="container">
          <div className="section-header">
            <span className="tag">Available Services</span>
            <h2>Prosthetic Services for Pallavaram Patients</h2>
            <p>World-class prosthetic and optical care — now accessible to Pallavaram residents at our Chennai clinic.</p>
          </div>
          <div className="services-grid services-grid-3" style={{ gap: "16px" }}>
            {[
              { icon: "eye", title: "Ocular Prosthesis", desc: "Bespoke hand-painted artificial eyes with precision socket fit and natural motility for daily comfort." },
              { icon: "layers", title: "Scleral Shell", desc: "Ultra-thin shells for aesthetically covering disfigured eyes — comfortable and realistic." },
              { icon: "glasses", title: "Speciality Lenses", desc: "Scleral, Rose K, Ortho-K, Keratoconus and prosthetic contact lenses for complex conditions." },
              { icon: "person", title: "Facial Prosthetics", desc: "Custom silicone prosthetics for ear, nose, and facial restoration — blended to match your skin." },
              { icon: "telescope-outline", title: "Low Vision Aids", desc: "Optical magnifiers, telescopic systems, and electronic aids for low vision patients." },
              { icon: "medical-outline", title: "Oculoplasty", desc: "Specialist care for microphthalmia, contracted sockets, and post-surgical orbital rehabilitation." },
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

      {/* CTA */}
      <section className="lp-cta">
        <div className="container">
          <div className="cta-box">
            <div>
              <h2>Visit Our Prosthetic Clinic from Pallavaram</h2>
              <p>Conveniently located in Chennai, close to Pallavaram. Book your specialist consultation today.</p>
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

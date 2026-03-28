import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prosthetic Clinic Near Medavakkam | ARWA Optics & Prosthetic Center",
  description: "Looking for a prosthetic clinic near Medavakkam, Chennai? ARWA Optics & Prosthetic Center offers ocular prosthesis, scleral lenses & facial prosthetics. Easily reachable from Medavakkam.",
  keywords: "prosthetic clinic medavakkam, artificial eye medavakkam, ocular prosthesis near medavakkam chennai",
};

export default function ProstheticClinicMedavakkam() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="hero lp-hero">
        <div className="container hero-container">
          <div className="hero-text">
            <span className="tag">Serving Medavakkam, Chennai</span>
            <h1>Prosthetic Clinic <span className="text-gradient">Near Medavakkam</span> — ARWA Center</h1>
            <p>Patients from Medavakkam can visit ARWA Optics &amp; Prosthetic Center in Kamarajapuram, Chennai — your nearest specialist clinic for custom ocular prosthesis, scleral lenses, facial prosthetics, and low vision care.</p>
            <div className="hero-btns">
              <Link href="/contact" className="btn-primary">Book Consultation</Link>
              <a href="https://wa.me/917200559344" className="btn-secondary">WhatsApp Us</a>
            </div>
            <div className="trust-icons">
              <div className="trust-item"><ion-icon name="location"></ion-icon> <span>Near Medavakkam, Chennai</span></div>
              <div className="trust-item"><ion-icon name="car-outline"></ion-icon> <span>Easy to Reach</span></div>
              <div className="trust-item"><ion-icon name="shield-checkmark-outline"></ion-icon> <span>Certified Specialist</span></div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-img-box">
              <img src="/ocularist_work_1773675138301.png" alt="Prosthetic clinic near Medavakkam" className="hero-display-img" />
              <div className="floating-card top">
                <div className="icon-box"><ion-icon name="checkmark-circle"></ion-icon></div>
                <div><h4>Authorized Center</h4><p>Certified Ocularist</p></div>
              </div>
              <div className="floating-card bottom">
                <div className="icon-box yellow"><ion-icon name="navigate-outline"></ion-icon></div>
                <div><h4>Medavakkam Nearby</h4><p>Quick Access</p></div>
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
            <h3>Reachable from Medavakkam</h3>
            <p>ARWA&apos;s Kamarajapuram clinic is comfortably accessible from Medavakkam via Pallavaram–Thoraipakkam Road and key connecting routes.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-box"><ion-icon name="eye-outline"></ion-icon></div>
            <h3>Full Range of Services</h3>
            <p>Medavakkam patients have access to our complete prosthetic services — custom eyes, facial prosthetics, low vision devices, and specialist optical lenses.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-box"><ion-icon name="time-outline"></ion-icon></div>
            <h3>Flexible Appointments</h3>
            <p>Mon – Sat, 10 AM – 7 PM. Call or WhatsApp +91 7200559344 to book at a time that fits your schedule.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services lp-services">
        <div className="container">
          <div className="section-header">
            <span className="tag">Available Services</span>
            <h2>Prosthetic Services for Medavakkam Patients</h2>
            <p>Complete specialist prosthetic and optical services available near Medavakkam at our Chennai clinic.</p>
          </div>
          <div className="services-grid services-grid-3" style={{ gap: "16px" }}>
            {[
              { icon: "eye", title: "Ocular Prosthesis", desc: "Custom-made artificial eyes with hand-painted iris for a natural look and comfortable daily wear." },
              { icon: "layers", title: "Scleral Shell", desc: "Thin cosmetic shells to cover disfigured or shrunken eyes — realistic appearance, zero irritation." },
              { icon: "glasses", title: "Speciality Lenses", desc: "Keratoconus, Ortho-K, Rose K, Scleral and prosthetic lenses fitted by certified specialists." },
              { icon: "person", title: "Facial Prosthetics", desc: "Silicone prosthetic ears, noses, and facial features matching natural skin tone and texture." },
              { icon: "telescope-outline", title: "Low Vision Devices", desc: "Optical and electronic magnification aids for patients with partial or reduced sight." },
              { icon: "medical-outline", title: "Oculoplasty Services", desc: "Specialist rehabilitation for microphthalmia, contracted sockets, and orbital prosthetics." },
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
              <h2>Visit Our Prosthetic Clinic from Medavakkam</h2>
              <p>Located in Chennai, easily reachable from Medavakkam. Book a specialist consultation now.</p>
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

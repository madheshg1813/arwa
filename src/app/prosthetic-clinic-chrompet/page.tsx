import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Faq from "@/components/Faq";
import AreasServed from "@/components/AreasServed";
import Link from "next/link";

const faqs = [
  { q: "Is ARWA Prosthetic Clinic accessible from Chrompet?", a: "Yes. Our clinic is located at Kamarajapuram, Chennai, which is just minutes from Chrompet via well-connected roads and local transport routes." },
  { q: "What prosthetic services are available near Chrompet?", a: "Chrompet patients can access our full range of services including custom ocular prosthesis, scleral shells, scleral contact lenses, Rose K lenses, Ortho-K, keratoconus management, facial prosthetics, and low vision devices." },
  { q: "How do I book an appointment from Chrompet?", a: "Simply call or WhatsApp us at +91 7200559344 to schedule a convenient appointment. We are open Monday to Saturday, 10:00 AM – 7:00 PM." },
  { q: "How long does a prosthetic eye consultation take?", a: "The initial consultation typically lasts 30–60 minutes. Our specialist will assess your condition, discuss options, and guide you through the next steps for your prosthetic or optical solution." },
  { q: "Do you offer scleral and Rose K lenses for keratoconus near Chrompet?", a: "Yes. We fit Rose K, Scleral, and Ortho-K lenses for keratoconus patients — available to patients travelling from Chrompet and surrounding areas." },
  { q: "Is parking available at the clinic?", a: "Yes, parking is available near our Kamarajapuram clinic. The location is also well-served by public transport for patients from Chrompet travelling by bus or auto." },
];

export const metadata: Metadata = {
  title: "Prosthetic Clinic Near Chrompet | ARWA Optics & Prosthetic Center",
  description: "Looking for a prosthetic clinic near Chrompet? ARWA Optics & Prosthetic Center in Chennai is minutes from Chrompet — offering ocular prosthesis, facial prosthetics & scleral lenses.",
  keywords: "prosthetic clinic chrompet, artificial eye chrompet, ocular prosthesis near chrompet, prosthetic clinic near chrompet chennai",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Prosthetic Clinic Near Chrompet | ARWA Optics & Prosthetic Center",
    description: "Minutes from Chrompet — ARWA offers custom ocular prosthesis, scleral lenses & facial prosthetics in Chennai.",
    images: [{ url: "/ocularist_work_1773675138301.png", width: 1200, height: 630, alt: "Prosthetic Clinic Near Chrompet" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prosthetic Clinic Near Chrompet | ARWA Center",
    description: "Custom prosthetic clinic near Chrompet, Chennai. Expert ocular prosthesis & scleral lenses.",
    images: ["/ocularist_work_1773675138301.png"],
  },
};

export default function ProstheticClinicChrompet() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="hero lp-hero">
        <div className="container hero-container">
          <div className="hero-text">
            <span className="tag">Serving Chrompet, Chennai</span>
            <h1>Prosthetic Clinic <span className="text-gradient">Near Chrompet</span> — ARWA Center</h1>
            <p>Chrompet residents seeking a specialist prosthetic clinic in Chennai can reach ARWA Optics &amp; Prosthetic Center in Kamarajapuram with ease. We provide expert ocular prosthesis, scleral lenses, and facial prosthetics.</p>
            <div className="hero-btns">
              <Link href="/contact" className="btn-primary">Book Consultation</Link>
              <a href="https://wa.me/917200559344" className="btn-secondary">WhatsApp Us</a>
            </div>
            <div className="trust-icons">
              <div className="trust-item"><ion-icon name="location"></ion-icon> <span>Near Chrompet, Chennai</span></div>
              <div className="trust-item"><ion-icon name="car-outline"></ion-icon> <span>Easy to Reach</span></div>
              <div className="trust-item"><ion-icon name="shield-checkmark-outline"></ion-icon> <span>Certified Specialist</span></div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-img-box">
              <img src="/ocularist_work_1773675138301.png" alt="Prosthetic clinic near Chrompet" className="hero-display-img" />
              <div className="floating-card top">
                <div className="icon-box"><ion-icon name="checkmark-circle"></ion-icon></div>
                <div><h4>Authorized Center</h4><p>Certified Ocularist</p></div>
              </div>
              <div className="floating-card bottom">
                <div className="icon-box yellow"><ion-icon name="navigate-outline"></ion-icon></div>
                <div><h4>Chrompet Nearby</h4><p>Quick Access</p></div>
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
            <h3>Close to Chrompet</h3>
            <p>Our Kamarajapuram clinic is just minutes from Chrompet via well-connected roads — accessible by car, auto, or public transport.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-box"><ion-icon name="eye-outline"></ion-icon></div>
            <h3>Expert Prosthetic Care</h3>
            <p>Chrompet patients benefit from our full range of prosthetic services including custom ocular prosthesis, scleral contact lenses, and oculoplasty rehabilitation.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-box"><ion-icon name="call-outline"></ion-icon></div>
            <h3>Easy Appointment Booking</h3>
            <p>Call or WhatsApp +91 7200559344 to schedule a confidential consultation at a time that suits you.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services lp-services">
        <div className="container">
          <div className="section-header">
            <span className="tag">Available Services</span>
            <h2>Prosthetic Services for Chrompet Patients</h2>
            <p>Complete prosthetic and optical care available at our Chennai clinic — close to Chrompet.</p>
          </div>
          <div className="services-grid services-grid-3" style={{ gap: "16px" }}>
            {[
              { icon: "eye", title: "Ocular Prosthesis", desc: "Hand-crafted custom artificial eyes with digital iris matching for a completely natural look." },
              { icon: "layers", title: "Scleral Shell", desc: "Ultra-thin prosthetic shells for disfigured or shrunken eyes — maximum comfort, natural appearance." },
              { icon: "glasses", title: "Speciality Contact Lenses", desc: "Keratoconus, Scleral, Rose K, Ortho-K, and prosthetic contact lenses by expert fitters." },
              { icon: "person", title: "Facial Prosthetics", desc: "Realistic silicone prosthetics for ear, nose, and facial restoration post-surgery or trauma." },
              { icon: "telescope-outline", title: "Low Vision Devices", desc: "Specialist optical and electronic devices to maximise remaining vision for partially sighted patients." },
              { icon: "medical-outline", title: "Oculoplasty Services", desc: "Microphthalmia, contracted eye socket rehabilitation, and orbital prosthetics." },
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

      <Faq items={faqs} city="Chrompet" mapQuery="Chrompet, Chennai, Tamil Nadu" mapLink="https://maps.google.com/?q=Chrompet,Chennai,Tamil+Nadu" />

      {/* CTA */}
      <section className="lp-cta">
        <div className="container">
          <div className="cta-box">
            <div>
              <h2>Visit Our Prosthetic Clinic from Chrompet</h2>
              <p>Located in Chennai, easily accessible from Chrompet. Call us to book your specialist consultation.</p>
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

      <AreasServed />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

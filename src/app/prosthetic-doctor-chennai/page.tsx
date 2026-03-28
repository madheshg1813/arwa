import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Faq from "@/components/Faq";
import Link from "next/link";

const faqs = [
  { q: "What qualifications does ARWA's prosthetic doctor have?", a: "Our lead specialist is a certified ocularist with over 6 years of clinical experience in ocular prosthesis, facial prosthetics, and specialised optical solutions. The center is an authorised prosthetic clinic in Chennai." },
  { q: "What conditions does the prosthetic doctor treat?", a: "Our specialist treats a wide range of conditions including anophthalmia, microphthalmia, phthisis bulbi, keratoconus, contracted eye sockets, and post-surgical facial defects requiring prosthetic rehabilitation." },
  { q: "Is a referral needed to see the prosthetic doctor in Chennai?", a: "No referral is required. You can book a direct consultation by calling or WhatsApping +91 7200559344. Walk-in appointments are also welcome during working hours (Mon–Sat, 10 AM–7 PM)." },
  { q: "What is the difference between an ocularist and an ophthalmologist?", a: "An ophthalmologist is a medical doctor who treats eye diseases and performs surgery. An ocularist is a specialist who designs, fabricates, and fits ocular prostheses (artificial eyes). Our doctor specialises in prosthetics and optical rehabilitation." },
  { q: "Can the prosthetic doctor help with keratoconus lenses?", a: "Yes. Our specialist fits Rose K, Scleral, and Ortho-K lenses specifically designed for keratoconus patients — providing clearer vision and better comfort than standard contact lenses." },
  { q: "How many appointments are needed for a prosthetic eye?", a: "Typically 2–3 appointments are required: an initial assessment, a fitting session, and a follow-up for adjustments. The full process usually takes around one week from start to completion." },
];

export const metadata: Metadata = {
  title: "Prosthetic Doctor in Chennai | ARWA Optics & Prosthetic Center",
  description: "Consult a certified prosthetic doctor in Chennai at ARWA Optics & Prosthetic Center. Expert in ocular prosthesis, facial prosthetics, scleral lenses & oculoplasty. Book a consultation today.",
  keywords: "prosthetic doctor chennai, ocularist chennai, prosthetic eye doctor chennai, oculoplasty specialist chennai, artificial eye doctor chennai",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Prosthetic Doctor in Chennai | ARWA Optics & Prosthetic Center",
    description: "Meet Chennai's certified prosthetic doctor — expert in ocular prosthesis, oculoplasty, scleral lenses & facial prosthetics. Book your confidential consultation.",
    images: [{ url: "/advanced_diagnostic_eye.png", width: 1200, height: 630, alt: "Prosthetic Doctor Chennai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prosthetic Doctor in Chennai | ARWA Center",
    description: "Certified ocularist & prosthetic specialist in Chennai. Expert in ocular prosthesis & facial prosthetics.",
    images: ["/advanced_diagnostic_eye.png"],
  },
};

export default function ProstheticDoctorChennai() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="hero lp-hero">
        <div className="container hero-container">
          <div className="hero-text">
            <span className="tag">Prosthetic Doctor — Chennai</span>
            <h1>Meet Chennai&apos;s Expert <span className="text-gradient">Prosthetic Doctor</span> &amp; Certified Ocularist</h1>
            <p>ARWA Optics &amp; Prosthetic Center is led by a certified ocularist and prosthetic specialist with over 6 years of clinical expertise in ocular prosthesis, facial prosthetics, and specialised optical solutions in Chennai.</p>
            <div className="hero-btns">
              <Link href="/contact" className="btn-primary">Consult the Specialist</Link>
              <a href="https://wa.me/917200559344" className="btn-secondary">WhatsApp Us</a>
            </div>
            <div className="trust-icons">
              <div className="trust-item"><ion-icon name="medal"></ion-icon> <span>Board Certified</span></div>
              <div className="trust-item"><ion-icon name="shield-checkmark-outline"></ion-icon> <span>Authorised Ocularist</span></div>
              <div className="trust-item"><ion-icon name="people-outline"></ion-icon> <span>1000+ Patients</span></div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-img-box">
              <img src="/advanced_diagnostic_eye.png" alt="Prosthetic doctor Chennai" className="hero-display-img" />
              <div className="floating-card top">
                <div className="icon-box"><ion-icon name="checkmark-circle"></ion-icon></div>
                <div><h4>6+ Years Experience</h4><p>Clinical Specialist</p></div>
              </div>
              <div className="floating-card bottom">
                <div className="icon-box yellow"><ion-icon name="eye"></ion-icon></div>
                <div><h4>100% Custom</h4><p>Patient-Centric Care</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Credentials */}
      <section className="why-choose">
        <div className="container grid-3">
          <div className="feature-card">
            <div className="feature-icon-box"><ion-icon name="ribbon-outline"></ion-icon></div>
            <h3>Certified Ocularist</h3>
            <p>Our lead specialist is a board-certified ocularist trained in the fabrication and fitting of custom ocular prostheses, scleral shells, and specialised contact lenses.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-box"><ion-icon name="eye-outline"></ion-icon></div>
            <h3>Oculoplasty Expertise</h3>
            <p>Specialised in oculoplastic rehabilitation including microphthalmia management, contracted socket treatment, and orbital prosthetics for post-surgical patients.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-box"><ion-icon name="heart-outline"></ion-icon></div>
            <h3>Compassionate Patient Care</h3>
            <p>Every patient receives a personalised, confidential consultation. Our doctor takes time to understand your unique needs and craft the ideal solution for you.</p>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="expertise">
        <div className="container flex-center">
          <div className="expertise-image">
            <img src="/ocularist_work_1773675138301.png" alt="Prosthetic doctor at work Chennai" />
          </div>
          <div className="expertise-content">
            <span className="tag">Clinical Expertise</span>
            <h2>What Our Prosthetic Doctor Treats</h2>
            <p>Our Chennai-based prosthetic specialist handles a wide range of conditions requiring prosthetic and optical intervention — from congenital anomalies to post-surgical rehabilitation.</p>
            <ul className="check-list">
              <li><ion-icon name="checkmark-done"></ion-icon> Custom Ocular &amp; Orbital Prosthesis</li>
              <li><ion-icon name="checkmark-done"></ion-icon> Keratoconus, Scleral &amp; Rose K Lenses</li>
              <li><ion-icon name="checkmark-done"></ion-icon> Microphthalmia &amp; Contracted Socket Management</li>
              <li><ion-icon name="checkmark-done"></ion-icon> Auricular, Nasal &amp; Facial Prosthetics</li>
              <li><ion-icon name="checkmark-done"></ion-icon> Low Vision &amp; Blind Eye Devices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services lp-services">
        <div className="container">
          <div className="section-header">
            <span className="tag">Specialist Services</span>
            <h2>Treatments by Our Prosthetic Doctor in Chennai</h2>
            <p>Comprehensive prosthetic and optical solutions delivered with clinical precision.</p>
          </div>
          <div className="services-grid services-grid-3" style={{ gap: "16px" }}>
            {[
              { icon: "eye", title: "Ocular Prosthesis", desc: "Bespoke artificial eyes with hand-painted iris matching — natural appearance, maximum comfort." },
              { icon: "cube-outline", title: "Orbital Prosthesis", desc: "Full orbital restorations for patients post-exenteration, restoring symmetry and confidence." },
              { icon: "aperture-outline", title: "Keratoconus Management", desc: "Rose K, Scleral, and Ortho-K lens solutions prescribed and fitted by our specialist doctor." },
              { icon: "glasses", title: "Ptosis Crutch Glasses", desc: "Custom glasses with crutch support to correct drooping eyelids and restore visual field." },
              { icon: "ear-outline", title: "Facial & Auricular Prosthetics", desc: "Silicone ear, nose, and facial restorations crafted with lifelike pigmentation and texture." },
              { icon: "telescope-outline", title: "Low Vision Rehabilitation", desc: "Optical and electronic devices recommended by our doctor for patients with partial sight." },
            ].map((s) => (
              <div className="service-card-premium" key={s.title}>
                <div className="service-icon-box"><ion-icon name={s.icon}></ion-icon></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link href="/contact" className="link">Book Appointment <ion-icon name="arrow-forward"></ion-icon></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq items={faqs} city="Chennai" mapQuery="Kamarajapuram, Chennai, Tamil Nadu" mapLink="https://maps.google.com/?q=Kamarajapuram,Chennai,Tamil+Nadu" />

      {/* CTA */}
      <section className="lp-cta">
        <div className="container">
          <div className="cta-box">
            <div>
              <h2>Consult Our Prosthetic Doctor in Chennai Today</h2>
              <p>Get a confidential assessment from our certified specialist. Call or WhatsApp to book your appointment.</p>
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

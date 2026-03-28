import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Faq from "@/components/Faq";
import AreasServed from "@/components/AreasServed";
import Link from "next/link";

const faqs = [
  { q: "What services does ARWA Prosthetic Clinic in Chennai offer?", a: "ARWA offers a full range of prosthetic and optical services including custom ocular prosthesis, orbital prosthesis, scleral shells, scleral contact lenses, Rose K lenses, Ortho-K lenses, keratoconus management, facial prosthetics (ear, nose, face), low vision devices, and oculoplasty rehabilitation." },
  { q: "Where is ARWA Prosthetic Clinic located in Chennai?", a: "We are located at No 2, Usman Street, Mosque Colony, Kamarajapuram, Chennai — 600072. Easily accessible from all major areas of South Chennai including Tambaram, Chrompet, Pallavaram, and Medavakkam." },
  { q: "How do I book an appointment at the prosthetic clinic?", a: "You can book an appointment by calling us at +91 7200559344, WhatsApping us, or filling out the contact form on our website. We are open Monday to Saturday, 10:00 AM – 7:00 PM." },
  { q: "How long does it take to make a custom ocular prosthesis?", a: "A custom ocular prosthesis typically takes 3–5 working days to fabricate after the initial fitting and impression. Follow-up adjustments are also provided to ensure the perfect fit and comfort." },
  { q: "Is the prosthetic eye made of safe materials?", a: "Yes. All our prosthetic eyes are fabricated using medical-grade Polymethyl Methacrylate (PMMA) — a biocompatible material that is non-reactive to body tissue, durable, and safe for long-term wear." },
  { q: "Do you offer facial prosthetics like ear and nose prosthetics?", a: "Yes. We specialise in auricular (ear), nasal (nose), and full facial prosthetics fabricated from medical-grade silicone, carefully pigmented to match your natural skin tone and texture." },
  { q: "What is the cost of an ocular prosthesis in Chennai?", a: "The cost varies based on the type and complexity of the prosthesis. Please contact us directly for a personalised quote after a clinical assessment. We strive to make our services accessible to all patients." },
];

export const metadata: Metadata = {
  title: "Prosthetic Clinic in Chennai | ARWA Optics & Prosthetic Center",
  description: "Looking for a trusted prosthetic clinic in Chennai? ARWA Optics & Prosthetic Center offers custom ocular prosthesis, scleral lenses, facial prosthetics & more at Kamarajapuram, Chennai.",
  keywords: "prosthetic clinic chennai, ocular prosthesis chennai, artificial eye clinic chennai, prosthetic eye chennai, scleral lens chennai, facial prosthetics chennai",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Prosthetic Clinic in Chennai | ARWA Optics & Prosthetic Center",
    description: "Chennai's most trusted prosthetic clinic — custom ocular prosthesis, scleral lenses, facial prosthetics & low vision devices. Certified specialists.",
    images: [{ url: "/ocularist_work_1773675138301.png", width: 1200, height: 630, alt: "Prosthetic Clinic Chennai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prosthetic Clinic in Chennai | ARWA Center",
    description: "Custom ocular prosthesis, scleral lenses, facial prosthetics in Chennai.",
    images: ["/ocularist_work_1773675138301.png"],
  },
};

const clusters = [
  { name: "Tambaram", href: "/prosthetic-clinic-tambaram" },
  { name: "Chrompet", href: "/prosthetic-clinic-chrompet" },
  { name: "Pallavaram", href: "/prosthetic-clinic-pallavaram" },
  { name: "Medavakkam", href: "/prosthetic-clinic-medavakkam" },
];

export default function ProstheticClinicChennai() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="hero lp-hero">
        <div className="container hero-container">
          <div className="hero-text">
            <span className="tag">Prosthetic Clinic — Chennai</span>
            <h1>Chennai&apos;s Most Trusted <span className="text-gradient">Prosthetic Clinic</span> for Eyes &amp; Face</h1>
            <p>ARWA Optics &amp; Prosthetic Center is Chennai&apos;s premier destination for custom ocular prosthesis, scleral lenses, facial prosthetics, and low vision devices — all under one roof with certified specialists.</p>
            <div className="hero-btns">
              <Link href="/contact" className="btn-primary">Book Free Consultation</Link>
              <a href="https://wa.me/917200559344" className="btn-secondary">WhatsApp Us</a>
            </div>
            <div className="trust-icons">
              <div className="trust-item"><ion-icon name="location"></ion-icon> <span>Kamarajapuram, Chennai</span></div>
              <div className="trust-item"><ion-icon name="shield-checkmark-outline"></ion-icon> <span>Certified Ocularist</span></div>
              <div className="trust-item"><ion-icon name="star"></ion-icon> <span>6+ Years Experience</span></div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-img-box">
              <img src="/ocularist_work_1773675138301.png" alt="Prosthetic clinic Chennai" className="hero-display-img" />
              <div className="floating-card top">
                <div className="icon-box"><ion-icon name="checkmark-circle"></ion-icon></div>
                <div><h4>Authorized Center</h4><p>Certified Ocularist</p></div>
              </div>
              <div className="floating-card bottom">
                <div className="icon-box yellow"><ion-icon name="eye"></ion-icon></div>
                <div><h4>100% Custom</h4><p>Hand-Painted Detail</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="why-choose">
        <div className="container grid-3">
          <div className="feature-card">
            <div className="feature-icon-box"><ion-icon name="shield-checkmark-outline"></ion-icon></div>
            <h3>Certified Prosthetic Specialists</h3>
            <p>Our ocularists are certified professionals with over 6 years of hands-on experience in crafting realistic, comfortable prosthetic eyes and facial prosthetics in Chennai.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-box"><ion-icon name="color-filter-outline"></ion-icon></div>
            <h3>Advanced Digital Matching</h3>
            <p>Using digital iris technology, we match the exact colour, pattern, and depth of your natural eye for a prosthetic that is virtually indistinguishable.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-box"><ion-icon name="people-outline"></ion-icon></div>
            <h3>Serving All of Chennai</h3>
            <p>Patients travel from Tambaram, Chrompet, Pallavaram, Medavakkam, and across Tamil Nadu to visit our clinic. We serve everyone with equal care and precision.</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services lp-services">
        <div className="container">
          <div className="section-header">
            <span className="tag">What We Offer</span>
            <h2>Complete Prosthetic Services in Chennai</h2>
            <p>From ocular prosthetics to facial restoration — our Chennai clinic covers every specialist need.</p>
          </div>
          <div className="services-grid services-grid-3" style={{ gap: "16px" }}>
            {[
              { icon: "eye", title: "Ocular Prosthesis", desc: "Custom-made artificial eyes with hand-painted iris, perfect socket fit, and natural motility." },
              { icon: "layers", title: "Scleral Shell", desc: "Ultra-thin shells for shrunken or disfigured eyes — natural appearance with zero discomfort." },
              { icon: "glasses", title: "Crutch Glasses & Special Lenses", desc: "Ptosis crutch glasses, Keratoconus lenses, Ortho-K, Rose K, and Scleral contact lenses." },
              { icon: "person", title: "Facial Prosthesis", desc: "Lifelike silicone restorations for ear, nose, and facial defects following surgery or trauma." },
              { icon: "telescope-outline", title: "Low Vision Devices", desc: "Optical and electronic aids for patients with partial sight to regain independence." },
              { icon: "medical-outline", title: "Oculoplasty Services", desc: "Specialist care for microphthalmia, contracted eye sockets, and oculoplastic rehabilitation." },
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

      {/* Area Clusters */}
      <section className="lp-clusters">
        <div className="container">
          <div className="section-header">
            <span className="tag">Nearby Areas We Serve</span>
            <h2>Prosthetic Clinic Near You in Chennai</h2>
            <p>Easily accessible from all major areas of South Chennai.</p>
          </div>
          <div className="cluster-grid">
            {clusters.map((c) => (
              <Link href={c.href} key={c.name} className="cluster-card">
                <div className="cluster-icon"><ion-icon name="location-outline"></ion-icon></div>
                <h4>Prosthetic Clinic — {c.name}</h4>
                <p>Serving patients from {c.name} at our Chennai center</p>
                <span className="cluster-link">View Page <ion-icon name="arrow-forward"></ion-icon></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Faq items={faqs} city="Kamarajapuram, Chennai" mapQuery="Kamarajapuram, Chennai, Tamil Nadu" mapLink="https://maps.google.com/?q=Kamarajapuram,Chennai,Tamil+Nadu" />

      {/* CTA */}
      <section className="lp-cta">
        <div className="container">
          <div className="cta-box">
            <div>
              <h2>Ready to Visit Our Prosthetic Clinic in Chennai?</h2>
              <p>Call us or WhatsApp to schedule a confidential consultation with our certified specialist.</p>
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

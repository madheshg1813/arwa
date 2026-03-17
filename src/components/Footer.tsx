import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-premium">
      <div className="container footer-grid">
        <div className="footer-logo-box">
          <span className="f-logo">ARWA</span>
          <p>
            India’s leading clinical center specializing in hyper-realistic
            ocular prosthetics and specialized optical solutions. Restoring
            vision, confidence, and quality of life.
          </p>
          <div className="f-socials">
            <a href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="https://wa.me/917200559344">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
          </div>
        </div>
        <div className="footer-nav">
          <h4>Quick Links</h4>
          <Link href="/">Home</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#about">About</Link>
          <Link href="/#care">Care Guide</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div className="footer-contact-new">
          <h4>Connect With Us</h4>
          <div className="footer-info-item">
            <ion-icon name="location-outline"></ion-icon>
            <span>No 2, Usman Street, Mosque Colony, Chennai</span>
          </div>
          <div className="footer-info-item">
            <ion-icon name="call-outline"></ion-icon>
            <span>+91 7200559344</span>
          </div>
          <div className="footer-info-item">
            <ion-icon name="mail-outline"></ion-icon>
            <span>arwainternationalindia@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 ARWA Optics & Prosthetic Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

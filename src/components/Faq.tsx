type FaqItem = { q: string; a: string };

interface FaqProps {
  items: FaqItem[];
  city?: string;
  mapQuery?: string;
  mapLink?: string;
}

export default function Faq({ items, city, mapQuery, mapLink }: FaqProps) {
  return (
    <section className="faq-section">
      <div className="container">
        <div className={city ? "faq-map-layout" : ""}>

          {/* FAQ list — always first column on desktop, below map on mobile */}
          <div className="faq-main">
            <div className="section-header" style={{ textAlign: "left", marginBottom: "32px" }}>
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="faq-list">
              {items.map((item, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-question">
                    <span>{item.q}</span>
                    <span className="faq-icon">+</span>
                  </summary>
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Map — second column on desktop, above FAQ on mobile via order */}
          {city && mapQuery && (
            <div className="faq-map-box">
              <div className="faq-map-header">
                <h3>Service Area: {city}</h3>
                {mapLink && (
                  <a href={mapLink} target="_blank" rel="noopener noreferrer" className="faq-map-open">
                    Open in Maps <ion-icon name="open-outline"></ion-icon>
                  </a>
                )}
              </div>
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed&z=14`}
                width="100%"
                height="320"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

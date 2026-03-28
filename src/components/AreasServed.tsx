const areas = [
  "Tambaram",
  "Chrompet",
  "Pallavaram",
  "Medavakkam",
];

export default function AreasServed() {
  return (
    <section className="areas-served">
      <div className="container">
        <h2 className="areas-title">Serving All Areas in Chennai</h2>
        <div className="areas-grid">
          {areas.map((area) => (
            <div className="area-card" key={area}>{area}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

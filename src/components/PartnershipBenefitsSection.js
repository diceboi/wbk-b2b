export default function PartnershipBenefitsSection({ dict }) {
  return (
    <>
      <section className="section">
        <div className="section-header">
          <div className="section-tag">{dict.benefits.tag}</div>
          <div className="section-title">{dict.benefits.title}</div>
          <p className="section-desc">{dict.benefits.sub}</p>
        </div>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div style={{ marginBottom: "20px" }}><img src="/factory.webp" alt="Factory" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} /></div>
            <div className="benefit-title">{dict.benefits.items[0].title}</div>
            <p className="benefit-desc">{dict.benefits.items[0].desc}</p>
          </div>
          <div className="benefit-card">
            <div style={{ marginBottom: "20px" }}><img src="/cabinets.webp" alt="Cabinet" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} /></div>
            <div className="benefit-title">{dict.benefits.items[1].title}</div>
            <p className="benefit-desc">{dict.benefits.items[1].desc}</p>
          </div>
          <div className="benefit-card">
            <div style={{ marginBottom: "20px" }}><img src="/customers.webp" alt="Customers" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} /></div>
            <div className="benefit-title">{dict.benefits.items[2].title}</div>
            <p className="benefit-desc">{dict.benefits.items[2].desc}</p>
          </div>
          <div className="benefit-card">
            <div style={{ marginBottom: "20px" }}><img src="/map.webp" alt="Map" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} /></div>
            <div className="benefit-title">{dict.benefits.items[3].title}</div>
            <p className="benefit-desc">{dict.benefits.items[3].desc}</p>
          </div>
          <div className="benefit-card">
            <div style={{ marginBottom: "20px" }}><img src="/marketing.webp" alt="Marketing" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} /></div>
            <div className="benefit-title">{dict.benefits.items[4].title}</div>
            <p className="benefit-desc">{dict.benefits.items[4].desc}</p>
          </div>
          <div className="benefit-card">
            <div style={{ marginBottom: "20px" }}><img src="/technical-support.webp" alt="Technical Support" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} /></div>
            <div className="benefit-title">{dict.benefits.items[5].title}</div>
            <p className="benefit-desc">{dict.benefits.items[5].desc}</p>
          </div>
        </div>
      </section>

    </>
  );
}

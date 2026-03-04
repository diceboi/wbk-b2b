export default function MarketOpportunitySection({ dict }) {
  return (
    <>
      <section className="section">
        <div className="section-header">
          <div className="section-tag">{dict.market.tag}</div>
          <div className="section-title">{dict.market.title}</div>
          <p className="section-desc">{dict.market.sub}</p>
        </div>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div style={{marginBottom: "20px"}}><img src="/home-owners.jpg" alt="Homeowners" style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px"}} /></div>
            <div className="benefit-title">{dict.market.cards[0].title}</div>
            <p className="benefit-desc">{dict.market.cards[0].desc}</p>
          </div>
          <div className="benefit-card">
            <div style={{marginBottom: "20px"}}><img src="/airbnb.webp" alt="Property and Airbnb" style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px"}} /></div>
            <div className="benefit-title">{dict.market.cards[1].title}</div>
            <p className="benefit-desc">{dict.market.cards[1].desc}</p>
          </div>
          <div className="benefit-card">
            <div style={{marginBottom: "20px"}}><img src="/design-architect.jpg" alt="Designers and Architects" style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px"}} /></div>
            <div className="benefit-title">{dict.market.cards[2].title}</div>
            <p className="benefit-desc">{dict.market.cards[2].desc}</p>
          </div>
          <div className="benefit-card">
            <div style={{marginBottom: "20px"}}><img src="/conversions.jpg" alt="Conversions" style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px"}} /></div>
            <div className="benefit-title">{dict.market.cards[3].title}</div>
            <p className="benefit-desc">{dict.market.cards[3].desc}</p>
          </div>
          <div className="benefit-card">
            <div style={{marginBottom: "20px"}}><img src="/camper.webp" alt="Campervans and Boats" style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px"}} /></div>
            <div className="benefit-title">{dict.market.cards[4].title}</div>
            <p className="benefit-desc">{dict.market.cards[4].desc}</p>
          </div>
          <div className="benefit-card">
            <div style={{marginBottom: "20px"}}><img src="/tiny-home-builders.jpg" alt="Tiny Homes" style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px"}} /></div>
            <div className="benefit-title">{dict.market.cards[5].title}</div>
            <p className="benefit-desc">{dict.market.cards[5].desc}</p>
          </div>
        </div>
      </section>

    </>
  );
}

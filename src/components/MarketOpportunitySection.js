export default function MarketOpportunitySection() {
  return (
    <>
      <section className="section">
        <div className="section-header">
          <div className="section-tag">The market</div>
          <div className="section-title">Who's buying wall beds?</div>
          <p className="section-desc">Your potential customers are already out there — and most of them can't find a qualified
            local installer. That's where you come in.</p>
        </div>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div style={{marginBottom: "20px"}}><img src="/home-owners.jpg" alt="Homeowners" style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px"}} /></div>
            <div className="benefit-title">Homeowners</div>
            <p className="benefit-desc">Small apartments, spare rooms, multi-functional spaces. Anyone who wants their room back
              without sacrificing a proper bed.</p>
          </div>
          <div className="benefit-card">
            <div style={{marginBottom: "20px"}}><img src="/airbnb.webp" alt="Property and Airbnb" style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px"}} /></div>
            <div className="benefit-title">Property & Airbnb</div>
            <p className="benefit-desc">Holiday lets, serviced apartments, Airbnb conversions, student accommodation. Volume
              buyers who need space-saving solutions across multiple units.</p>
          </div>
          <div className="benefit-card">
            <div style={{marginBottom: "20px"}}><img src="/design-architect.jpg" alt="Designers and Architects" style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px"}} /></div>
            <div className="benefit-title">Designers & Architects</div>
            <p className="benefit-desc">Interior designers and architects specifying wall beds for residential and commercial
              projects. They need reliable installers to recommend.</p>
          </div>
          <div className="benefit-card">
            <div style={{marginBottom: "20px"}}><img src="/conversions.jpg" alt="Conversions" style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px"}} /></div>
            <div className="benefit-title">Conversions</div>
            <p className="benefit-desc">Loft conversions, garage conversions, outbuildings, garden rooms. Spaces where every
              square metre counts.</p>
          </div>
          <div className="benefit-card">
            <div style={{marginBottom: "20px"}}><img src="/camper.webp" alt="Campervans and Boats" style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px"}} /></div>
            <div className="benefit-title">Campervans & Boats</div>
            <p className="benefit-desc">Campervan conversions, narrowboats, canal boats, marine fit-outs. A fast-growing niche
              market with premium pricing.</p>
          </div>
          <div className="benefit-card">
            <div style={{marginBottom: "20px"}}><img src="/tiny-home-builders.jpg" alt="Tiny Homes" style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px"}} /></div>
            <div className="benefit-title">Tiny Homes</div>
            <p className="benefit-desc">The tiny home movement is growing across Europe. Wall beds are an essential component in
              virtually every build.</p>
          </div>
        </div>
      </section>

    </>
  );
}

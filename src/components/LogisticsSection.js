export default function LogisticsSection() {
  return (
    <>
  <section className="section-bg">
    <div className="section-header">
      <div className="section-tag">Stock & delivery</div>
      <div className="section-title">Fast, flexible, no minimum orders</div>
    </div>
    <div className="benefits-grid" style={{maxWidth: `1100px`,margin: `0 auto`,}}>
      <div className="benefit-card">
        <div className="benefit-icon">📦</div>
        <div className="benefit-title">No Minimum Order</div>
        <p className="benefit-desc">Start with a single mechanism. Many of our busiest partners started with exactly one
          unit. No pressure to commit to volume upfront.</p>
      </div>
      <div className="benefit-card">
        <div className="benefit-icon">🚚</div>
        <div className="benefit-title">Fast European Delivery</div>
        <p className="benefit-desc">Available for collection or delivery from Passau (Germany), London (UK), and Alicante
          (Spain, coming soon). Delivery within days in most cases.</p>
      </div>
      <div className="benefit-card">
        <div className="benefit-icon">📋</div>
        <div className="benefit-title">Well Packaged & Protected</div>
        <p className="benefit-desc">Multiple layers of cardboard packaging. Low damage risk in transit. Spare parts
          available, and most issues covered under warranty.</p>
      </div>
    </div>
  </section>

    </>
  );
}

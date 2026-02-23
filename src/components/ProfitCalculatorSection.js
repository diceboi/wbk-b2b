export default function ProfitCalculatorSection() {
  return (
    <>
  <section className="profit-section" id="profit">
    <div className="profit-inner">
      <div className="section-header">
        <div className="section-tag">Your profit</div>
        <div className="section-title">A typical wall bed project</div>
        <p className="section-desc-light">Real numbers. No guesswork.</p>
      </div>
      <div className="profit-flow">
        <div className="profit-card">
          <div className="profit-card-label">Mechanism cost</div>
          <div className="profit-card-value" style={{color: `#e94560`,}}>from €448</div>
          <div className="profit-card-sub">Ex-works, net price<br />Direct from our factory</div>
        </div>
        <div className="profit-arrow">→</div>
        <div className="profit-card">
          <div className="profit-card-label">Your materials & labour</div>
          <div className="profit-card-value" style={{color: `#e94560`,}}>~€200–400</div>
          <div className="profit-card-sub">Cabinet material + installation<br />Half day to one day</div>
        </div>
        <div className="profit-arrow">→</div>
        <div className="profit-card">
          <div className="profit-card-label">Client pays</div>
          <div className="profit-card-value" style={{color: `#4ecca3`,}}>up to €2,200</div>
          <div className="profit-card-sub">Market standard for a<br />custom wall bed</div>
        </div>
      </div>
      <div className="profit-result">
        <div className="profit-result-label">Your gross profit per project</div>
        <div className="profit-result-value">over €1,700</div>
        <div className="profit-result-sub">With just 2 projects per month, that's over €40,000 in additional revenue per
          year — from a product you probably don't offer yet.</div>
      </div>
      <p className="profit-note">Plus: <strong>every customer who orders a wall bed is a customer that would otherwise go to
          a competitor.</strong><br />Want to see calculations for a specific project? <a href="#apply"
          style={{color: `#e94560`,fontWeight: `600`,}}>Get in touch</a></p>
    </div>
  </section>

    </>
  );
}

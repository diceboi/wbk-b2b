export default function HeroSection() {
  return (
    <>
      <section className="hero"
        style={{ background: `linear-gradient(135deg, rgba(26, 26, 46, 0.96) 0%, rgba(22, 33, 62, 0.64) 50%, rgba(15, 51, 96, 0.54) 100%), url('/wbk-b2b-hero.webp') center/cover no-repeat`, }}>
        <div className="hero-glow"></div>
        <div className="hero-inner">
          <div className="hero-badge">Now recruiting trade partners across Europe</div>
          <h1>We supply the mechanism,<br />the design, and the customers.<br /><span>You keep the margin.</span></h1>
          <p className="hero-sub">Wall Bed King is Europe's specialist wall bed mechanism manufacturer. We partner with joiners,
            cabinet makers, furniture retailers, and interior designers — supplying the hardware, the cabinet designs, and
            even the customer referrals. You build, install, and profit.</p>
          <p className="hero-proof">Over <strong>40,000 mechanisms sold</strong> across <strong>15 countries</strong>.
            Manufacturing since <strong>1994</strong>. <strong>Lifetime warranty</strong> on every mechanism.</p>
          <div className="hero-btns">
            <a href="#apply" className="btn-primary">Apply for a Trade Account</a>
            <a href="#profit" className="btn-secondary">See Your Profit Potential</a>
          </div>
        </div>
      </section>

    </>
  );
}

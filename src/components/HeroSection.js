export default function HeroSection({ dict }) {
  return (
    <>
      <section className="hero"
        style={{ background: `linear-gradient(135deg, rgba(26, 26, 46, 0.96) 0%, rgba(22, 33, 62, 0.64) 50%, rgba(15, 51, 96, 0.54) 100%), url('/wbk-b2b-hero.webp') center/cover no-repeat`, }}>
        <div className="hero-glow"></div>
        <div className="hero-inner">
          <div className="hero-badge">{dict.hero.badge}</div>
          <h1 dangerouslySetInnerHTML={{ __html: dict.hero.h1 }}></h1>
          <p className="hero-sub" dangerouslySetInnerHTML={{ __html: dict.hero.sub }}></p>
          <p className="hero-proof" dangerouslySetInnerHTML={{ __html: dict.hero.proof }}></p>
          <div className="hero-btns">
            <a href="#apply" className="btn-primary">{dict.hero.btnApply}</a>
            <a href="#profit" className="btn-secondary">{dict.hero.btnProfit}</a>
          </div>
        </div>
      </section>

    </>
  );
}

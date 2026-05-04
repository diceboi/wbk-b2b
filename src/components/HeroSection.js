export default function HeroSection({ dict }) {
  return (
    <>
      <section className="hero"
        style={{ background: `linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(22, 33, 62, 0.4) 25%, transparent 50%), url('/13.webp') center/cover no-repeat`, }}>
        <div className="hero-glow"></div>
        <div className="hero-inner">

          <h1 dangerouslySetInnerHTML={{ __html: dict.hero.h1 }}></h1>
          <p className="hero-sub" dangerouslySetInnerHTML={{ __html: dict.hero.sub }}></p>
          <p className="hero-proof" dangerouslySetInnerHTML={{ __html: dict.hero.proof }}></p>
          <div className="hero-btns">
            <a href="#apply" className="btn-primary">{dict.hero.btnApply}</a>
            {dict.hero.btnProfit && <a href="#profit" className="btn-secondary">{dict.hero.btnProfit}</a>}
          </div>
        </div>
      </section>

    </>
  );
}

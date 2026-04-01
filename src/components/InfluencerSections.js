export function InfluencerOpportunity({ dict }) {
  return (
    <section className="section" id="why">
      <div className="why-grid">
        <div className="why-text">
          <div className="section-tag">{dict.why?.tag || 'The opportunity'}</div>
          <h2>{dict.opportunity.title}</h2>
          <p>{dict.opportunity.p1}</p>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc', lineHeight: '1.8' }}>
            {dict.opportunity.list?.map((item, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="why-visual"
          style={{ background: `url('/influencer.webp') center/cover no-repeat` }}>
        </div>
      </div>
    </section>
  );
}

export function InfluencerDarkWrapper({ children }) {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '60px auto',
      borderRadius: '32px',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
      boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
    }}>
      {children}
    </div>
  );
}

export function InfluencerBenefits({ dict }) {
  return (
    <div style={{ padding: '80px 40px 60px' }}>
      <div className="section-header" style={{ marginBottom: '50px' }}>
        <div className="section-tag" style={{ color: '#38bdf8' }}>
          {dict.benefits.tag}
        </div>
        <div className="section-title" style={{ color: '#fff' }}>
          {dict.benefits.title}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
        {dict.benefits.items.map((item, index) => (
          <div key={index} style={{
            backgroundColor: 'rgba(255,255,255,0.05)',
            borderRadius: '20px',
            padding: '36px 28px',
            border: '1px solid rgba(255,255,255,0.08)',
            transition: 'transform 0.2s'
          }}>
            <div style={{ color: '#f8fafc', fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>{item.title}</div>
            <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: '1.7', margin: 0 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function InfluencerMarket({ dict }) {
  return (
    <div style={{ padding: '40px 40px 80px' }}>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '60px' }}>
        <div className="section-header" style={{ marginBottom: '50px' }}>
          <div className="section-title" style={{ color: '#fff', fontSize: '36px' }}>
            {dict.market.title}
          </div>
          <p className="section-desc" style={{ color: '#94a3b8', fontSize: '18px' }}>
            {dict.market.sub}
          </p>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px 60px' }}>
          {dict.market.cards.map((card, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{
                backgroundColor: 'rgba(56, 189, 248, 0.12)',
                color: '#38bdf8',
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                flexShrink: 0,
                border: '1px solid rgba(56, 189, 248, 0.2)'
              }}>
                {index + 1}
              </div>
              <div>
                <div style={{ color: '#f1f5f9', fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>{card.title}</div>
                <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', fontSize: '20px', color: '#e2e8f0', fontWeight: '600', fontStyle: 'italic', maxWidth: '700px', margin: '60px auto 0 auto' }}>
          "{dict.market.tag}"
        </p>
      </div>
    </div>
  );
}

export function InfluencerRequirements({ dict }) {
  return (
    <section className="section" id="requirements">
      <div className="why-grid" style={{ direction: 'rtl' }}>
        <div className="why-text" style={{ direction: 'ltr' }}>
          <div className="section-tag">{dict.who?.tag || 'Important details'}</div>
          <h2>{dict.who.title}</h2>
          <p>{dict.who.joiners.p1}</p>
          <p>{dict.who.joiners.p2}</p>
          <div style={{ marginTop: '32px' }}>
            <a href="#apply" className="btn-primary">
              {dict.who.btn}
            </a>
          </div>
        </div>
        <div className="why-visual" style={{ direction: 'ltr', background: `url('/influencer2.webp') center/cover no-repeat` }}>
        </div>
      </div>
    </section>
  );
}

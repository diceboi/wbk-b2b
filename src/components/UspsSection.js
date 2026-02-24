export default function UspsSection({ dict }) {
  return (
    <>
      <section className="section-bg">
        <div className="section-header">
          <div className="section-tag">{dict.usps.tag}</div>
          <div className="section-title">{dict.usps.title}</div>
          <p className="section-desc">{dict.usps.desc}</p>
        </div>
        <div className="usp-strip">
          <div className="usp-card" style={{ position: 'relative', overflow: 'hidden', padding: '0', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '420px', borderRadius: '16px', backgroundImage: `url('/shield.webp')`, backgroundSize: '100% auto', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat', backgroundColor: '#ffffff', textAlign: 'left', border: 'none' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 52, 96, 1) 0%, rgba(15, 52, 96, 1) 25%, rgba(15, 52, 96, 0.4) 70%, rgba(255, 255, 255, 0) 100%)', zIndex: 1 }}></div>
            <div style={{ position: 'relative', zIndex: 2, padding: '32px 24px' }}>
              <div className="usp-title" style={{ color: '#fff', fontSize: '20px', marginBottom: '12px' }}>{dict.usps.features[0].title}</div>
              <p className="usp-desc" style={{ color: 'rgba(255,255,255,0.85)', margin: 0 }}>{dict.usps.features[0].desc}</p>
            </div>
          </div>
          <div className="usp-card" style={{ position: 'relative', overflow: 'hidden', padding: '0', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '420px', borderRadius: '16px', backgroundImage: `url('/piston.webp')`, backgroundSize: '100% auto', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat', backgroundColor: '#ffffff', textAlign: 'left', border: 'none' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 52, 96, 1) 0%, rgba(15, 52, 96, 1) 25%, rgba(15, 52, 96, 0.4) 70%, rgba(255, 255, 255, 0) 100%)', zIndex: 1 }}></div>
            <div style={{ position: 'relative', zIndex: 2, padding: '32px 24px' }}>
              <div className="usp-title" style={{ color: '#fff', fontSize: '20px', marginBottom: '12px' }}>{dict.usps.features[1].title}</div>
              <p className="usp-desc" style={{ color: 'rgba(255,255,255,0.85)', margin: 0 }}>{dict.usps.features[1].desc}</p>
            </div>
          </div>
          <div className="usp-card" style={{ position: 'relative', overflow: 'hidden', padding: '0', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '420px', borderRadius: '16px', backgroundImage: `url('/typeflex.webp')`, backgroundSize: '100% auto', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat', backgroundColor: '#ffffff', textAlign: 'left', border: 'none' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 52, 96, 1) 0%, rgba(15, 52, 96, 1) 25%, rgba(15, 52, 96, 0.4) 70%, rgba(255, 255, 255, 0) 100%)', zIndex: 1 }}></div>
            <div style={{ position: 'relative', zIndex: 2, padding: '32px 24px' }}>
              <div className="usp-title" style={{ color: '#fff', fontSize: '20px', marginBottom: '12px' }}>{dict.usps.features[2].title}</div>
              <p className="usp-desc" style={{ color: 'rgba(255,255,255,0.85)', margin: 0 }}>{dict.usps.features[2].desc}</p>
            </div>
          </div>
          <div className="usp-card" style={{ position: 'relative', overflow: 'hidden', padding: '0', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '420px', borderRadius: '16px', backgroundImage: `url('/sizeflex.webp')`, backgroundSize: '100% auto', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat', backgroundColor: '#ffffff', textAlign: 'left', border: 'none' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 52, 96, 1) 0%, rgba(15, 52, 96, 1) 25%, rgba(15, 52, 96, 0.4) 70%, rgba(255, 255, 255, 0) 100%)', zIndex: 1 }}></div>
            <div style={{ position: 'relative', zIndex: 2, padding: '32px 24px' }}>
              <div className="usp-title" style={{ color: '#fff', fontSize: '20px', marginBottom: '12px' }}>{dict.usps.features[3].title}</div>
              <p className="usp-desc" style={{ color: 'rgba(255,255,255,0.85)', margin: 0 }}>{dict.usps.features[3].desc}</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

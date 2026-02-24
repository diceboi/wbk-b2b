export default function LogisticsSection({ dict }) {
  return (
    <>
      <section className="section-bg">
        <div className="section-header">
          <div className="section-tag">{dict.logistics.tag}</div>
          <div className="section-title">{dict.logistics.title}</div>
        </div>
        <div className="benefits-grid" style={{ maxWidth: `1100px`, margin: `0 auto`, }}>
          <div className="benefit-card" style={{ position: 'relative', overflow: 'hidden', padding: '0', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '420px', borderRadius: '16px', backgroundImage: `url('/order.webp')`, backgroundSize: '100% auto', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat', backgroundColor: '#ffffff', textAlign: 'left', border: 'none' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 52, 96, 1) 0%, rgba(15, 52, 96, 1) 25%, rgba(15, 52, 96, 0.4) 70%, rgba(255, 255, 255, 0) 100%)', zIndex: 1 }}></div>
            <div style={{ position: 'relative', zIndex: 2, padding: '32px 24px' }}>
              <div className="benefit-title" style={{ color: '#fff', fontSize: '20px', marginBottom: '12px' }}>{dict.logistics.items[0].title}</div>
              <p className="benefit-desc" style={{ color: 'rgba(255,255,255,0.85)', margin: 0 }}>{dict.logistics.items[0].desc}</p>
            </div>
          </div>
          <div className="benefit-card" style={{ position: 'relative', overflow: 'hidden', padding: '0', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '420px', borderRadius: '16px', backgroundImage: `url('/shipping.webp')`, backgroundSize: '100% auto', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat', backgroundColor: '#ffffff', textAlign: 'left', border: 'none' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 52, 96, 1) 0%, rgba(15, 52, 96, 1) 25%, rgba(15, 52, 96, 0.4) 70%, rgba(255, 255, 255, 0) 100%)', zIndex: 1 }}></div>
            <div style={{ position: 'relative', zIndex: 2, padding: '32px 24px' }}>
              <div className="benefit-title" style={{ color: '#fff', fontSize: '20px', marginBottom: '12px' }}>{dict.logistics.items[1].title}</div>
              <p className="benefit-desc" style={{ color: 'rgba(255,255,255,0.85)', margin: 0 }}>{dict.logistics.items[1].desc}</p>
            </div>
          </div>
          <div className="benefit-card" style={{ position: 'relative', overflow: 'hidden', padding: '0', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '420px', borderRadius: '16px', backgroundImage: `url('/package.webp')`, backgroundSize: '100% auto', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat', backgroundColor: '#ffffff', textAlign: 'left', border: 'none' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 52, 96, 1) 0%, rgba(15, 52, 96, 1) 25%, rgba(15, 52, 96, 0.4) 70%, rgba(255, 255, 255, 0) 100%)', zIndex: 1 }}></div>
            <div style={{ position: 'relative', zIndex: 2, padding: '32px 24px' }}>
              <div className="benefit-title" style={{ color: '#fff', fontSize: '20px', marginBottom: '12px' }}>{dict.logistics.items[2].title}</div>
              <p className="benefit-desc" style={{ color: 'rgba(255,255,255,0.85)', margin: 0 }}>{dict.logistics.items[2].desc}</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

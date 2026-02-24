export default function LogisticsSection() {
  return (
    <>
      <section className="section-bg">
        <div className="section-header">
          <div className="section-tag">Stock & delivery</div>
          <div className="section-title">Fast, flexible, no minimum orders</div>
        </div>
        <div className="benefits-grid" style={{ maxWidth: `1100px`, margin: `0 auto`, }}>
          <div className="benefit-card" style={{ position: 'relative', overflow: 'hidden', padding: '0', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '420px', borderRadius: '16px', backgroundImage: `url('/order.webp')`, backgroundSize: '100% auto', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat', backgroundColor: '#ffffff', textAlign: 'left', border: 'none' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 52, 96, 1) 0%, rgba(15, 52, 96, 1) 25%, rgba(15, 52, 96, 0.4) 70%, rgba(255, 255, 255, 0) 100%)', zIndex: 1 }}></div>
            <div style={{ position: 'relative', zIndex: 2, padding: '32px 24px' }}>
              <div className="benefit-title" style={{ color: '#fff', fontSize: '20px', marginBottom: '12px' }}>No Minimum Order</div>
              <p className="benefit-desc" style={{ color: 'rgba(255,255,255,0.85)', margin: 0 }}>Start with a single mechanism. Many of our busiest partners started with exactly one
                unit. No pressure to commit to volume upfront.</p>
            </div>
          </div>
          <div className="benefit-card" style={{ position: 'relative', overflow: 'hidden', padding: '0', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '420px', borderRadius: '16px', backgroundImage: `url('/shipping.webp')`, backgroundSize: '100% auto', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat', backgroundColor: '#ffffff', textAlign: 'left', border: 'none' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 52, 96, 1) 0%, rgba(15, 52, 96, 1) 25%, rgba(15, 52, 96, 0.4) 70%, rgba(255, 255, 255, 0) 100%)', zIndex: 1 }}></div>
            <div style={{ position: 'relative', zIndex: 2, padding: '32px 24px' }}>
              <div className="benefit-title" style={{ color: '#fff', fontSize: '20px', marginBottom: '12px' }}>Fast European Delivery</div>
              <p className="benefit-desc" style={{ color: 'rgba(255,255,255,0.85)', margin: 0 }}>Available for collection or delivery from Passau (Germany), London (UK), and Alicante
                (Spain, coming soon). Delivery within days in most cases.</p>
            </div>
          </div>
          <div className="benefit-card" style={{ position: 'relative', overflow: 'hidden', padding: '0', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '420px', borderRadius: '16px', backgroundImage: `url('/package.webp')`, backgroundSize: '100% auto', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat', backgroundColor: '#ffffff', textAlign: 'left', border: 'none' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 52, 96, 1) 0%, rgba(15, 52, 96, 1) 25%, rgba(15, 52, 96, 0.4) 70%, rgba(255, 255, 255, 0) 100%)', zIndex: 1 }}></div>
            <div style={{ position: 'relative', zIndex: 2, padding: '32px 24px' }}>
              <div className="benefit-title" style={{ color: '#fff', fontSize: '20px', marginBottom: '12px' }}>Well Packaged & Protected</div>
              <p className="benefit-desc" style={{ color: 'rgba(255,255,255,0.85)', margin: 0 }}>Multiple layers of cardboard packaging. Low damage risk in transit. Spare parts
                available, and most issues covered under warranty.</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

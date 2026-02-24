export default function UspsSection() {
  return (
    <>
      <section className="section-bg">
        <div className="section-header">
          <div className="section-tag">Why Wall Bed King</div>
          <div className="section-title">A better product. The same price point.</div>
          <p className="section-desc">Our mechanisms are competitively priced against the market — but with a feature set, build
            quality, and warranty that no competitor currently matches. You sell on value, not price.</p>
        </div>
        <div className="usp-strip">
          <div className="usp-card" style={{ position: 'relative', overflow: 'hidden', padding: '0', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '420px', borderRadius: '16px', backgroundImage: `url('/shield.webp')`, backgroundSize: '100% auto', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat', backgroundColor: '#ffffff', textAlign: 'left', border: 'none' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 52, 96, 1) 0%, rgba(15, 52, 96, 1) 25%, rgba(15, 52, 96, 0.4) 70%, rgba(255, 255, 255, 0) 100%)', zIndex: 1 }}></div>
            <div style={{ position: 'relative', zIndex: 2, padding: '32px 24px' }}>
              <div className="usp-title" style={{ color: '#fff', fontSize: '20px', marginBottom: '12px' }}>Lifetime Warranty</div>
              <p className="usp-desc" style={{ color: 'rgba(255,255,255,0.85)', margin: 0 }}>No other wall bed manufacturer offers this. For your customers, it removes all hesitation.
                For you, it's the most powerful closing argument in the room.</p>
            </div>
          </div>
          <div className="usp-card" style={{ position: 'relative', overflow: 'hidden', padding: '0', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '420px', borderRadius: '16px', backgroundImage: `url('/piston.webp')`, backgroundSize: '100% auto', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat', backgroundColor: '#ffffff', textAlign: 'left', border: 'none' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 52, 96, 1) 0%, rgba(15, 52, 96, 1) 25%, rgba(15, 52, 96, 0.4) 70%, rgba(255, 255, 255, 0) 100%)', zIndex: 1 }}></div>
            <div style={{ position: 'relative', zIndex: 2, padding: '32px 24px' }}>
              <div className="usp-title" style={{ color: '#fff', fontSize: '20px', marginBottom: '12px' }}>Stabilus Gas Pistons</div>
              <p className="usp-desc" style={{ color: 'rgba(255,255,255,0.85)', margin: 0 }}>The same premium German pistons used in automotive engineering. Smooth, controlled, one-hand
                operation. Dual-piston safety — the bed will never drop unexpectedly.</p>
            </div>
          </div>
          <div className="usp-card" style={{ position: 'relative', overflow: 'hidden', padding: '0', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '420px', borderRadius: '16px', backgroundImage: `url('/typeflex.webp')`, backgroundSize: '100% auto', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat', backgroundColor: '#ffffff', textAlign: 'left', border: 'none' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 52, 96, 1) 0%, rgba(15, 52, 96, 1) 25%, rgba(15, 52, 96, 0.4) 70%, rgba(255, 255, 255, 0) 100%)', zIndex: 1 }}></div>
            <div style={{ position: 'relative', zIndex: 2, padding: '32px 24px' }}>
              <div className="usp-title" style={{ color: '#fff', fontSize: '20px', marginBottom: '12px' }}>TypeFlex (Patent Pending)</div>
              <p className="usp-desc" style={{ color: 'rgba(255,255,255,0.85)', margin: 0 }}>Same mechanism installs vertically or horizontally. A Wall Bed King exclusive. Less stock to
                hold, more configurations to offer. No competitor has this.</p>
            </div>
          </div>
          <div className="usp-card" style={{ position: 'relative', overflow: 'hidden', padding: '0', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '420px', borderRadius: '16px', backgroundImage: `url('/sizeflex.webp')`, backgroundSize: '100% auto', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat', backgroundColor: '#ffffff', textAlign: 'left', border: 'none' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 52, 96, 1) 0%, rgba(15, 52, 96, 1) 25%, rgba(15, 52, 96, 0.4) 70%, rgba(255, 255, 255, 0) 100%)', zIndex: 1 }}></div>
            <div style={{ position: 'relative', zIndex: 2, padding: '32px 24px' }}>
              <div className="usp-title" style={{ color: '#fff', fontSize: '20px', marginBottom: '12px' }}>18 Sizes + Custom</div>
              <p className="usp-desc" style={{ color: 'rgba(255,255,255,0.85)', margin: 0 }}>The widest size range on the market. Plus custom sizing from the factory, or on-site
                adjustment with basic tools. No other manufacturer offers this flexibility.</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

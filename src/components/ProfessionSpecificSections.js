"use client";
import React from 'react';

export function FitterOpportunity({ dict }) {
  const content = dict.fitter_installer;
  if (!content) return null;

  return (
    <section className="section" id="opportunity">
      <div className="section-header">
        <div className="section-tag">{dict.nav.why || 'The Opportunity'}</div>
        <h2 className="section-title">{content.opportunity.title}</h2>
      </div>
      <div className="why-grid">
        <div className="why-text">
          <p style={{ fontSize: "1.25rem", fontWeight: "600", color: "#1a1a2e", marginBottom: "1.5rem", lineHeight: "1.5" }}>{content.opportunity.p1}</p>
          <p style={{ fontSize: "1.05rem", color: "#555", lineHeight: "1.7", marginBottom: "1rem" }}>{content.opportunity.p2}</p>
          <p style={{ fontSize: "1.05rem", color: "#555", lineHeight: "1.7", marginBottom: "1.5rem" }}>{content.opportunity.p3}</p>
          
          <div className="why-highlight" style={{ padding: "30px", borderRadius: "16px" }}>
            <h4 style={{ color: "#e94560", marginBottom: "15px", fontSize: "1.1rem", fontWeight: "700" }}>{content.opportunity.list_title}</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {content.opportunity.list.map((item, idx) => (
                <li key={idx} style={{ marginBottom: "10px", display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "1rem" }}>
                  <span style={{ color: "#e94560", fontWeight: "900" }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div style={{ marginTop: "2.5rem" }}>
            <p style={{ fontSize: "1.2rem", fontWeight: "700", color: "#1a1a2e", marginBottom: "8px" }}>{content.opportunity.p4}</p>
            <p style={{ color: "#e94560", fontWeight: "600", fontSize: "1.1rem" }}>{content.opportunity.p5}</p>
          </div>
        </div>
        <div className="why-visual" style={{ background: "url('/fitter.webp') center/cover no-repeat", borderRadius: "24px", boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}>
        </div>
      </div>
    </section>
  );
}

export function BusinessSense({ dict, profession }) {
  const content = dict[profession];
  if (!content || !content.business_sense) return null;

  return (
    <section className="section-bg">
      <div className="section" style={{ padding: "40px 0" }}>
        <div className="section-header" style={{ marginBottom: "50px" }}>
          <div className="section-tag">Business Model</div>
          <h2 className="section-title">{content.business_sense.title}</h2>
        </div>
        <div className="benefits-grid">
          {content.business_sense.items.map((item, idx) => (
            <div key={idx} className="benefit-card" style={{ padding: "40px 30px" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
                {idx === 0 && "💰"}
                {idx === 1 && "🛠️"}
                {idx === 2 && "⚡"}
                {idx === 3 && "🤝"}
                {idx === 4 && "🎓"}
                {idx === 5 && "📈"}
              </div>
              <h3 className="benefit-title" style={{ color: "#1a1a2e", marginBottom: "12px" }}>{item.title}</h3>
              <p className="benefit-desc" style={{ color: "#666" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MakerOpportunity({ dict }) {
  const content = dict.furniture_maker;
  if (!content) return null;

  return (
    <section className="section" id="opportunity">
      <div className="section-header">
        <div className="section-tag">{dict.nav.why || 'The Opportunity'}</div>
        <h2 className="section-title">{content.opportunity.title}</h2>
      </div>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div className="why-grid">
          <div className="why-text">
            <p style={{ fontSize: "1.3rem", fontWeight: "600", color: "#1a1a2e", marginBottom: "1.5rem", lineHeight: "1.5" }}>{content.opportunity.p1}</p>
            <p style={{ fontSize: "1.05rem", color: "#555", lineHeight: "1.7", marginBottom: "1.5rem" }}>{content.opportunity.p3}</p>
            <div className="why-highlight" style={{ padding: "30px", borderRadius: "16px" }}>
              <h3 style={{ marginBottom: "15px", color: "#1a1a2e", fontSize: "1.2rem", fontWeight: "700" }}>{content.opportunity.p2}</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {content.opportunity.list.map((item, idx) => (
                  <li key={idx} style={{ fontSize: "1rem", marginBottom: "10px", display: "flex", alignItems: "flex-start", gap: "12px" }}>
                     <span style={{ color: "#e94560", fontWeight: "900" }}>→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <p style={{ fontSize: "1.15rem", fontWeight: "700", color: "#1a1a2e", marginTop: "2.5rem" }}>
              {content.opportunity.p4}
            </p>
          </div>
          <div className="why-visual" style={{ background: "url('/cabinets.webp') center/cover no-repeat", borderRadius: "24px", boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MakerFraming({ dict }) {
  const content = dict.furniture_maker.framing;
  if (!content) return null;

  return (
    <section className="section-bg" style={{ background: "#f1f5f9" }}>
      <div className="section" style={{ padding: "40px 0" }}>
        <div className="section-header">
          <div className="section-tag">Partnership Structure</div>
          <h2 className="section-title">{content.title}</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "30px", alignItems: "center", margin: "50px 0" }}>
          <div className="benefit-card" style={{ padding: "45px", textAlign: "center", border: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <div style={{ background: "rgba(233, 69, 96, 0.1)", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 25px", color: "#e94560", fontSize: "24px" }}>🔧</div>
            <h4 style={{ color: "#1a1a2e", fontSize: "1.4rem", marginBottom: "20px", fontWeight: "800" }}>{content.supply_title}</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {content.supply_items.map((item, idx) => (
                <li key={idx} style={{ marginBottom: "12px", fontSize: "1.1rem", color: "#555" }}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div style={{ fontSize: "3rem", color: "#e94560", fontWeight: "300" }}>+</div>
          
          <div className="benefit-card" style={{ padding: "45px", textAlign: "center", border: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <div style={{ background: "rgba(233, 69, 96, 0.1)", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 25px", color: "#e94560", fontSize: "24px" }}>🚛</div>
            <h4 style={{ color: "#1a1a2e", fontSize: "1.4rem", marginBottom: "20px", fontWeight: "800" }}>{content.deliver_title}</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {content.deliver_items.map((item, idx) => (
                <li key={idx} style={{ marginBottom: "12px", fontSize: "1.1rem", color: "#555" }}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ textAlign: "center", background: "#1a1a2e", padding: "25px", borderRadius: "16px", boxShadow: "0 15px 35px rgba(26,26,46,0.2)" }}>
          <p style={{ fontSize: "1.3rem", fontWeight: "600", color: "#fff", margin: 0 }}>{content.footer}</p>
        </div>
      </div>
    </section>
  );
}

export function RetailerOpportunity({ dict }) {
  const content = dict.retailer;
  if (!content) return null;

  return (
    <section className="section" id="opportunity">
      <div className="section-header">
        <div className="section-tag">{dict.nav.why || 'The Opportunity'}</div>
        <h2 className="section-title">{content.opportunity.title}</h2>
      </div>
      <div className="why-grid">
        <div className="why-text">
          <p style={{ fontSize: "1.25rem", fontWeight: "600", color: "#1a1a2e", marginBottom: "1.5rem", lineHeight: "1.5" }}>{content.opportunity.p1}</p>
          <p style={{ fontSize: "1.1rem", color: "#e94560", fontWeight: "700", marginBottom: "1.5rem" }}>{content.opportunity.p2}</p>
          <p style={{ fontSize: "1.05rem", color: "#555", lineHeight: "1.7", marginBottom: "2rem" }}>{content.opportunity.p3}</p>
          
          <div className="why-highlight" style={{ padding: "30px", borderRadius: "16px" }}>
            <h4 style={{ color: "#e94560", marginBottom: "20px", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "2px", fontWeight: "800" }}>{content.opportunity.list_title}</h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {content.opportunity.list.map((item, idx) => (
                <div key={idx} style={{ background: "#fff", border: "1px solid #eee", padding: "8px 20px", borderRadius: "50px", fontSize: "0.95rem", fontWeight: "700", color: "#1a1a2e" }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ marginTop: "2.5rem" }}>
            <p style={{ fontSize: "1.15rem", marginBottom: "15px", color: "#1a1a2e", fontWeight: "500" }}>{content.opportunity.p4}</p>
            <p style={{ fontSize: "1.3rem", fontWeight: "800", color: "#1a1a2e" }}>{content.opportunity.p5}</p>
          </div>
        </div>
        <div className="why-visual" style={{ background: "url('/retailer.webp') center/cover no-repeat", borderRadius: "24px", boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}>
        </div>
      </div>
    </section>
  );
}

export function RetailerValue({ dict }) {
  const content = dict.retailer.business_value;
  if (!content) return null;

  return (
    <section className="section-bg">
      <div className="section" style={{ padding: "40px 0" }}>
        <div className="section-header">
          <div className="section-tag">Value Proposition</div>
          <h2 className="section-title">{content.title}</h2>
          <p className="section-desc">{content.sub}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "24px", margin: "50px 0" }}>
          {content.items.map((item, idx) => (
            <div key={idx} style={{ background: "#fff", padding: "28px 32px", borderRadius: "16px", borderLeft: "6px solid #e94560", fontSize: "1.15rem", fontWeight: "600", color: "#1a1a2e", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", display: "flex", alignItems: "center" }}>
              {item}
            </div>
          ))}
        </div>
        <div style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", padding: "40px", borderRadius: "24px", color: "#fff", textAlign: "center", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}>
          <p style={{ fontSize: "1.2rem", fontStyle: "italic", margin: 0, opacity: 0.9, lineHeight: "1.6" }}>{content.modular}</p>
        </div>
      </div>
    </section>
  );
}

export function RetailerOptions({ dict }) {
  const content = dict.retailer.retail_options;
  if (!content) return null;

  return (
    <section className="section">
      <div className="section-header" style={{ marginBottom: "70px" }}>
        <div className="section-tag">Partnership Models</div>
        <h2 className="section-title">{content.title}</h2>
        <p className="section-desc">{content.sub}</p>
      </div>
      <div className="retailer-options-grid">
        {content.options.map((opt, idx) => (
          <div key={idx} className="benefit-card" style={{ display: "flex", flexDirection: "column", height: "100%", padding: "45px", borderRadius: "24px", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
            <div style={{ background: "rgba(233, 69, 96, 0.12)", width: "55px", height: "55px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "#e94560", fontWeight: "900", fontSize: "22px", marginBottom: "30px" }}>
              {idx + 1}
            </div>
            <h4 style={{ color: "#1a1a2e", fontSize: "1.5rem", marginBottom: "20px", fontWeight: "800" }}>{opt.title}</h4>
            <p style={{ fontSize: "1.1rem", color: "#555", flexGrow: 1, lineHeight: "1.7" }}>{opt.desc}</p>
            {opt.support && (
              <div style={{ marginTop: "35px", paddingTop: "25px", borderTop: "2px solid #f8f9fa", fontSize: "1rem", color: "#e94560", fontWeight: "700", fontStyle: "italic" }}>
                {opt.support}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export function RetailerExtra({ dict }) {
  const content = dict.retailer.extra;
  if (!content) return null;

  return (
    <section className="section-dark" style={{ background: "#1a1a2e", padding: "100px 40px" }}>
       <div className="section" style={{ padding: 0, textAlign: "center" }}>
          <h2 className="section-title" style={{ color: "#fff", fontSize: "2.8rem", marginBottom: "30px" }}>{content.title}</h2>
          <p className="section-desc-light" style={{ fontSize: "1.3rem", marginBottom: "60px", maxWidth: "800px" }}>{content.p1}</p>
          
          <div style={{ background: "rgba(255,255,255,0.03)", padding: "60px 40px", borderRadius: "40px", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(10px)" }}>
            <h4 style={{ color: "#e94560", marginBottom: "40px", fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "3px", fontWeight: "900" }}>{content.list_title}</h4>
            <div style={{ display: "flex", justifyContent: "center", gap: "50px", flexWrap: "wrap" }}>
              {content.list.map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.3rem", fontWeight: "700", color: "#fff" }}>
                   <span style={{ color: "#e94560", fontSize: "1.8rem" }}>★</span> {item}
                </div>
              ))}
            </div>
          </div>
       </div>
    </section>
  );
}

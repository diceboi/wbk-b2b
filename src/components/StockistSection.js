"use client";
import React from 'react';

export default function StockistSection({ dict }) {
  if (!dict.stockist) return null;

  return (
    <section className="section-dark" id="stockist">
      <div className="section-header" style={{ marginBottom: "30px" }}>
        <div className="section-tag">{dict.stockist.tag}</div>
        <div className="section-title">{dict.stockist.title}</div>
      </div>

      
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", paddingBottom: "20px" }}>
        <p style={{ fontSize: "1.1rem", marginBottom: "20px", color: "rgba(255,255,255,0.8)" }}>{dict.stockist.p1}</p>
        <p style={{ fontSize: "1.1rem", marginBottom: "20px", color: "rgba(255,255,255,0.8)" }}>{dict.stockist.p2}</p>
        <p style={{ fontSize: "1.1rem", marginBottom: "40px", color: "rgba(255,255,255,0.8)" }}>{dict.stockist.p3}</p>
        
        <div style={{ background: "linear-gradient(135deg, rgba(233,69,96,0.1) 0%, rgba(233,69,96,0.02) 100%)", border: "1px solid rgba(233,69,96,0.2)", borderRadius: "16px", padding: "40px 20px" }}>
          <h3 style={{ fontSize: "2rem", color: "#e94560", marginBottom: "16px", fontWeight: "700" }}>{dict.stockist.highlight}</h3>
          <p style={{ fontSize: "1.15rem", color: "#fff", marginBottom: "32px", fontWeight: "500" }}>{dict.stockist.secondary}</p>
          <a href="#apply" className="btn-primary" style={{ display: "inline-block" }}>{dict.stockist.btn}</a>
        </div>
      </div>
    </section>
  );
}

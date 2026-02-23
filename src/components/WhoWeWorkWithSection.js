"use client";
import { useState } from 'react';

export default function WhoWeWorkWithSection() {
  const [activeTab, setActiveTab] = useState('joiners');
  return (
    <>
      <section className="section">
        <div className="section-header">
          <div className="section-tag">Who we work with</div>
          <div className="section-title">Built for your business</div>
        </div>
        <div className="tabs">
          <button className={`tab-btn ${activeTab === 'joiners' ? 'active' : ''}`} onClick={() => setActiveTab('joiners')}>Joiners & Cabinet Makers</button>
          <button className={`tab-btn ${activeTab === 'retailers' ? 'active' : ''}`} onClick={() => setActiveTab('retailers')}>Furniture Retailers</button>
          <button className={`tab-btn ${activeTab === 'designers' ? 'active' : ''}`} onClick={() => setActiveTab('designers')}>Designers & Architects</button>
        </div>
        <div id="tab-joiners" className={`tab-content ${activeTab === 'joiners' ? 'active' : ''}`}>
          <div className="tab-title">Joiners & Cabinet Makers</div>
          <div className="tab-subtitle">High-margin work from your existing workshop, with the same tools you already have</div>
          <div className="check-list">
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">If you build fitted wardrobes or kitchens, you already have the skills to build a wall
                bed — no retraining needed</p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">We supply mechanism, cabinet designs, and technical drawings — you focus on the build
                and installation</p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">Typical job value: €1,500–€4,000+ depending on finish and cabinetry complexity</p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">We refer customer enquiries in your area directly to you — a growing source of qualified
                leads</p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">Offer your clients something most local joiners can't — and charge a premium for it</p>
            </div>
          </div>
          <a href="#apply" className="tab-cta">Apply as an Installer Partner</a>
        </div>
        <div id="tab-retailers" className={`tab-content ${activeTab === 'retailers' ? 'active' : ''}`}>
          <div className="tab-title">Furniture Retailers & Showrooms</div>
          <div className="tab-subtitle">A high-demand, high-margin product that sells itself on demonstration</div>
          <div className="check-list">
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">The Studio Range is ready to display in your showroom straight out of the box —
                customers try it and sell themselves</p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">TypeFlex means less stock to hold — the same unit covers vertical and horizontal
                configurations</p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">No minimum order quantities and fast delivery from our distribution centres in Germany,
                UK, and Spain (coming soon)</p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">Professional photography and marketing materials provided for your website and in-store
                displays</p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">Limited partners per region — we protect your territory from oversaturation</p>
            </div>
          </div>
          <a href="#apply" className="tab-cta">Apply as a Retail Partner</a>
        </div>
        <div id="tab-designers" className={`tab-content ${activeTab === 'designers' ? 'active' : ''}`}>
          <div className="tab-title">Interior Designers & Architects</div>
          <div className="tab-subtitle">Specify wall beds with confidence on every space-saving project</div>
          <div className="check-list">
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">Solve your clients' space problems with a solution that's engineered to last and backed
                by a lifetime warranty</p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">We provide CAD files, technical specifications, and furniture designs for your projects
              </p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">Connect your preferred joiner with our trade team, or recommend our approved local
                installers</p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">18 standard sizes, custom sizing available, and TypeFlex orientation flexibility for
                complex layouts</p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">Bespoke configurations for high-end residential and commercial projects — we work with
                you on the details</p>
            </div>
          </div>
          <a href="#apply" className="tab-cta">Apply as a Design Partner</a>
        </div>
      </section>

    </>
  );
}

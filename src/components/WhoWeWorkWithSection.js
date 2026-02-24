"use client";
import { useState } from 'react';

export default function WhoWeWorkWithSection({ dict }) {
  const [activeTab, setActiveTab] = useState('joiners');
  return (
    <>
      <section className="section">
        <div className="section-header">
          <div className="section-tag">{dict.who.tag}</div>
          <div className="section-title">{dict.who.title}</div>
        </div>
        <div className="tabs">
          <button className={`tab-btn ${activeTab === 'joiners' ? 'active' : ''}`} onClick={() => setActiveTab('joiners')}>{dict.who.tabs[0]}</button>
          <button className={`tab-btn ${activeTab === 'retailers' ? 'active' : ''}`} onClick={() => setActiveTab('retailers')}>{dict.who.tabs[1]}</button>
          <button className={`tab-btn ${activeTab === 'designers' ? 'active' : ''}`} onClick={() => setActiveTab('designers')}>{dict.who.tabs[2]}</button>
        </div>
        <div id="tab-joiners" className={`tab-content ${activeTab === 'joiners' ? 'active' : ''}`}>
          <div className="tab-title">{dict.who.tabs[0]}</div>
          <div className="tab-subtitle">{dict.who.joiners.subtitle}</div>
          <div className="check-list">
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">{dict.who.joiners.items[0]}</p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">{dict.who.joiners.items[1]}</p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">{dict.who.joiners.items[2]}</p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">{dict.who.joiners.items[3]}</p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">{dict.who.joiners.items[4]}</p>
            </div>
          </div>
          <a href="#apply" className="tab-cta">{dict.who.cta1}</a>
        </div>
        <div id="tab-retailers" className={`tab-content ${activeTab === 'retailers' ? 'active' : ''}`}>
          <div className="tab-title">{dict.who.tabs[1]}</div>
          <div className="tab-subtitle">{dict.who.retailers.subtitle}</div>
          <div className="check-list">
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">{dict.who.retailers.items[0]}</p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">{dict.who.retailers.items[1]}</p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">{dict.who.retailers.items[2]}</p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">{dict.who.retailers.items[3]}</p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">{dict.who.retailers.items[4]}</p>
            </div>
          </div>
          <a href="#apply" className="tab-cta">{dict.who.cta2}</a>
        </div>
        <div id="tab-designers" className={`tab-content ${activeTab === 'designers' ? 'active' : ''}`}>
          <div className="tab-title">{dict.who.tabs[2]}</div>
          <div className="tab-subtitle">{dict.who.designers.subtitle}</div>
          <div className="check-list">
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">{dict.who.designers.items[0]}</p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">{dict.who.designers.items[1]}</p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">{dict.who.designers.items[2]}</p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">{dict.who.designers.items[3]}</p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p className="check-text">{dict.who.designers.items[4]}</p>
            </div>
          </div>
          <a href="#apply" className="tab-cta">{dict.who.cta3}</a>
        </div>
      </section>

    </>
  );
}

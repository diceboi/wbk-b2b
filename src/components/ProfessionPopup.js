"use client";
import React from 'react';
import { useProfession } from './ProfessionContext';

export default function ProfessionPopup({ dict }) {
  const { showPopup, changeProfession, mounted } = useProfession();

  if (!mounted || !showPopup) return null;

  return (
    <div className="profession-popup-overlay" style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(15, 52, 96, 0.8)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000,
      padding: '20px'
    }}>
      <div className="profession-popup-card" style={{
        background: '#1a1a2e',
        borderRadius: '16px',
        padding: '40px',
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <h2 style={{ color: '#fff', fontSize: '24px', marginBottom: '24px', fontWeight: '700' }}>
          {dict.profession_popup?.title || "What is your profession?"}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <button 
            className="profession-popup-btn"
            onClick={() => changeProfession('default')}
            style={{
              background: 'transparent',
              border: '2px solid rgba(255,255,255,0.2)',
              color: '#fff',
              padding: '16px',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = '#e94560'; e.currentTarget.style.background = 'rgba(233,69,96,0.1)'; }}
            onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'transparent'; }}
          >
            {dict.profession_popup?.btn_default || "Trade Partner"}
          </button>
          <button 
            className="profession-popup-btn"
            onClick={() => changeProfession('interior_designer')}
            style={{
              background: 'transparent',
              border: '2px solid rgba(255,255,255,0.2)',
              color: '#fff',
              padding: '16px',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = '#e94560'; e.currentTarget.style.background = 'rgba(233,69,96,0.1)'; }}
            onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'transparent'; }}
          >
            {dict.profession_popup?.btn_interior_designer || "Interior Designer"}
          </button>
        </div>
      </div>
    </div>
  );
}

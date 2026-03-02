"use client";

import { useState, useEffect } from 'react';

export default function CookieBanner({ dict }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if consent has already been given or declined
        const consent = localStorage.getItem('wbk_cookie_consent');
        if (!consent) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('wbk_cookie_consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('wbk_cookie_consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-banner" style={{
            position: 'fixed',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#1a1a2e',
            color: '#fff',
            padding: '20px 24px',
            borderRadius: '12px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            zIndex: 9999,
            maxWidth: '90%',
            width: '700px',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
        }}>
            <div style={{ flex: '1 1 300px', fontSize: '14px', lineHeight: '1.6', color: 'rgba(255,255,255,0.9)' }}>
                {dict.cookie_banner.message}
            </div>
            <div style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
                <button
                    onClick={handleDecline}
                    style={{
                        background: 'transparent',
                        color: '#fff',
                        border: '1px solid rgba(255,255,255,0.3)',
                        padding: '10px 20px',
                        borderRadius: '6px',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'background 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                    onMouseOut={(e) => e.target.style.background = 'transparent'}
                >
                    {dict.cookie_banner.decline}
                </button>
                <button
                    onClick={handleAccept}
                    style={{
                        background: '#e94560',
                        color: '#fff',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '6px',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'background 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.background = '#d63851'}
                    onMouseOut={(e) => e.target.style.background = '#e94560'}
                >
                    {dict.cookie_banner.accept}
                </button>
            </div>
        </div>
    );
}

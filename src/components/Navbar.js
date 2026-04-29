"use client";
import Link from 'next/link';
import { useProfession } from './ProfessionContext';

export default function Navbar({ dict, lang }) {
    const { profession, changeProfession } = useProfession();
    const profLabel = dict.profession_labels?.[profession] || "Trade Partner";

    return (
        <nav className="nav">
            <div className="nav-logo">
                <div className="nav-icon">WBK</div>
                <div>
                    <div className="nav-brand">{dict.nav.brand}</div>
                    <div className="nav-sub">{profLabel}</div>
                </div>
            </div>
            <div className="nav-links">
                {profession === 'influencer' ? (
                    <>
                        <a href="#why">{dict.why?.tag || 'The Opportunity'}</a>
                        <a href="#products">{dict.nav.products}</a>
                        <a href="#requirements">{dict.who?.tag || 'Requirements'}</a>
                    </>
                ) : (
                    <>
                        <a href="#why">{dict.nav.why}</a>
                        <a href="#profit">{dict.nav.profit}</a>
                        <a href="#products">{dict.nav.products}</a>
                        <a href="#how-it-works">{dict.nav.how}</a>
                    </>
                )}
                
                <div className="nav-dropdowns">
                    <div className="nav-lang-dropdown profession-dropdown" tabIndex="0">
                        <button className="nav-lang-btn">
                            {profLabel}
                            <svg className="nav-lang-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        <div className="nav-lang-menu">
                            <button className={`nav-lang-item ${profession === 'fitter_installer' ? 'active' : ''}`} onClick={() => changeProfession('fitter_installer')} style={{width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer'}}>
                                {dict.profession_labels?.fitter_installer || "Fitter / Installer"}
                            </button>
                            <button className={`nav-lang-item ${profession === 'furniture_maker' ? 'active' : ''}`} onClick={() => changeProfession('furniture_maker')} style={{width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer'}}>
                                {dict.profession_labels?.furniture_maker || "Furniture Maker / Joiner"}
                            </button>
                            <button className={`nav-lang-item ${profession === 'retailer' ? 'active' : ''}`} onClick={() => changeProfession('retailer')} style={{width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer'}}>
                                {dict.profession_labels?.retailer || "Retailer"}
                            </button>
                            <button className={`nav-lang-item ${profession === 'interior_designer' ? 'active' : ''}`} onClick={() => changeProfession('interior_designer')} style={{width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer'}}>
                                {dict.profession_labels?.interior_designer || "Interior Designer"}
                            </button>
                            <button className={`nav-lang-item ${profession === 'influencer' ? 'active' : ''}`} onClick={() => changeProfession('influencer')} style={{width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer'}}>
                                {dict.profession_labels?.influencer || "Influencer"}
                            </button>
                        </div>
                    </div>

                    <div className="nav-lang-dropdown" tabIndex="0">
                        <button className="nav-lang-btn">
                            {(lang || 'en').toUpperCase()}
                            <svg className="nav-lang-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        <div className="nav-lang-menu">
                            <Link href="/en" className={`nav-lang-item ${(!lang || lang === 'en') ? 'active' : ''}`}>English (EN)</Link>
                            <Link href="/de" className={`nav-lang-item ${lang === 'de' ? 'active' : ''}`}>Deutsch (DE)</Link>
                            <Link href="/fr" className={`nav-lang-item ${lang === 'fr' ? 'active' : ''}`}>Français (FR)</Link>
                            <Link href="/es" className={`nav-lang-item ${lang === 'es' ? 'active' : ''}`}>Español (ES)</Link>
                            <Link href="/pt" className={`nav-lang-item ${lang === 'pt' ? 'active' : ''}`}>Português (PT)</Link>
                            <Link href="/it" className={`nav-lang-item ${lang === 'it' ? 'active' : ''}`}>Italiano (IT)</Link>
                        </div>
                    </div>
                </div>
                <a href="#apply" className="nav-cta">{dict.nav.apply}</a>
            </div>
        </nav>
    );
}

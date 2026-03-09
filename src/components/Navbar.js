import Link from 'next/link';

export default function Navbar({ dict, lang }) {
    return (
        <nav className="nav">
            <div className="nav-logo">
                <div className="nav-icon">WBK</div>
                <div>
                    <div className="nav-brand">{dict.nav.brand}</div>
                    <div className="nav-sub">{dict.nav.sub}</div>
                </div>
            </div>
            <div className="nav-links">
                <a href="#why">{dict.nav.why}</a>
                <a href="#profit">{dict.nav.profit}</a>
                <a href="#products">{dict.nav.products}</a>
                <a href="#how-it-works">{dict.nav.how}</a>
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
                <a href="#apply" className="nav-cta">{dict.nav.apply}</a>
            </div>
        </nav>
    );
}

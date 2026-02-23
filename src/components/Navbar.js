export default function Navbar() {
    return (
        <nav className="nav">
            <div className="nav-logo">
                <div className="nav-icon">WBK</div>
                <div>
                    <div className="nav-brand">Wall Bed King</div>
                    <div className="nav-sub">Trade Partners</div>
                </div>
            </div>
            <div className="nav-links">
                <a href="#why">Why Wall Beds</a>
                <a href="#profit">Your Profit</a>
                <a href="#products">Products</a>
                <a href="#how-it-works">How It Works</a>
                <a href="#apply" className="nav-cta">Apply for Trade Account</a>
            </div>
        </nav>
    );
}

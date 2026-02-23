"use client";
import { useState } from "react";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
  <section className="faq-section">
    <div className="section-header">
      <div className="section-tag">Common questions</div>
      <div className="section-title">Everything you need to know</div>
    </div>
    <div className="faq-list">
      <div className={`faq-item ${openFaq === 0 ? 'active' : ''}`}><button className="faq-q" onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}>Do I need specialist tools or skills to
          install the mechanism?<span className="faq-toggle">+</span></button>
        <div className="faq-a">No. If you can build fitted furniture, you can install our mechanisms. Standard workshop
          tools — a drill, spirit level, tape measure, and basic hand tools. The gas-piston mechanism comes
          pre-assembled. Most joiners complete their first install in 2–4 hours, and it gets faster from there.</div>
      </div>
      <div className={`faq-item ${openFaq === 1 ? 'active' : ''}`}><button className="faq-q" onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}>What's the minimum order to open a trade
          account?<span className="faq-toggle">+</span></button>
        <div className="faq-a">There's no minimum. You can start with a single mechanism — try it with our 60-day money-back
          guarantee. Many of our busiest trade partners started with exactly one unit.</div>
      </div>
      <div className={`faq-item ${openFaq === 2 ? 'active' : ''}`}><button className="faq-q" onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}>How much can I realistically charge for a
          finished wall bed?<span className="faq-toggle">+</span></button>
        <div className="faq-a">Our trade partners typically charge between €1,500 and €4,000+ for a completed wall bed
          installation, depending on the finish and cabinetry complexity. With a mechanism starting at €448 ex-works,
          the margin on labour, materials, and design is substantial.</div>
      </div>
      <div className={`faq-item ${openFaq === 3 ? 'active' : ''}`}><button className="faq-q" onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}>What does the lifetime warranty cover?<span
            className="faq-toggle">+</span></button>
        <div className="faq-a">The lifetime warranty covers the mechanism itself — the steel frame, gas pistons, and all
          moving components. Our mechanisms are engineered for every-night, every-day use, indefinitely. In over 30
          years of manufacturing, our warranty claim rate is under 1%.</div>
      </div>
      <div className={`faq-item ${openFaq === 4 ? 'active' : ''}`}><button className="faq-q" onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}>Do you offer exclusivity in my area?<span
            className="faq-toggle">+</span></button>
        <div className="faq-a">We deliberately limit the number of approved partners in each region to protect your business
          and avoid oversaturation. Depending on your location and the existing partner coverage, there may be an
          opportunity for primary or exclusive partnership in your area. Early applicants in underserved areas are at a
          significant advantage.</div>
      </div>
      <div className={`faq-item ${openFaq === 5 ? 'active' : ''}`}><button className="faq-q" onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}>What is TypeFlex?<span
            className="faq-toggle">+</span></button>
        <div className="faq-a">TypeFlex is our patent-pending exclusive feature that allows the same mechanism to be
          installed either vertically (portrait) or horizontally (landscape). No other manufacturer offers this. For
          retailers, it means dramatically simpler stock management. For installers, it means one product covers twice
          the range of room layouts.</div>
      </div>
      <div className={`faq-item ${openFaq === 6 ? 'active' : ''}`}><button className="faq-q" onClick={() => setOpenFaq(openFaq === 6 ? null : 6)}>Can I see a mechanism before
          committing?<span className="faq-toggle">+</span></button>
        <div className="faq-a">Absolutely. Order a single mechanism with our 60-day money-back guarantee and try it in your
          workshop. We also offer live video demonstrations if you'd prefer a remote overview first.</div>
      </div>
      <div className={`faq-item ${openFaq === 7 ? 'active' : ''}`}><button className="faq-q" onClick={() => setOpenFaq(openFaq === 7 ? null : 7)}>Where are your distribution centres?<span
            className="faq-toggle">+</span></button>
        <div className="faq-a">We currently have distribution centres in Passau (Germany) and London (UK), with Alicante
          (Spain) coming soon. Collection and delivery available. Most orders are delivered within days.</div>
      </div>
      <div className={`faq-item ${openFaq === 8 ? 'active' : ''}`}><button className="faq-q" onClick={() => setOpenFaq(openFaq === 8 ? null : 8)}>Do you provide cabinet designs?<span
            className="faq-toggle">+</span></button>
        <div className="faq-a">Yes. We supply furniture designs and technical drawings for every mechanism size. Use them
          as-is for a proven result, or as a starting point for bespoke projects. This is particularly valuable for
          joiners doing their first wall bed build.</div>
      </div>
    </div>
  </section>

    </>
  );
}

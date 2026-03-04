/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section className="section-bg" id="testimonials">
        <div className="testimonial-section">
          <div className="section-header">
            <div className="section-tag">Partner stories</div>
            <div className="section-title">Hear from our trade partners</div>
          </div>
          <div className={`testimonial-card ${activeTestimonial === 0 ? 'active' : ''}`}>
            <div className="testimonial-quote-mark">"</div>
            <p className="testimonial-text">We fitted our first Wall Bed King mechanism about 18 months ago as a favour for a
              client. It's now one of our most requested services. The margins are excellent and the mechanism quality is
              genuinely impressive — smooth, solid, and our clients love them. We're now doing 3–4 wall bed jobs a month.
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">JH</div>
              <div>
                <div className="testimonial-name">James Hartley</div>
                <div className="testimonial-role">Owner, Hartley Bespoke Joinery — Surrey</div>
              </div>
            </div>
          </div>
          <div className={`testimonial-card ${activeTestimonial === 1 ? 'active' : ''}`}>
            <div className="testimonial-quote-mark">"</div>
            <p className="testimonial-text">We specify Wall Bed King mechanisms for almost all our small-space residential
              projects now. The technical support is outstanding — they provided full CAD details for a tricky alcove
              installation and it worked perfectly. The lifetime warranty makes it an easy recommendation to clients.</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">SM</div>
              <div>
                <div className="testimonial-name">Sarah Mitchell</div>
                <div className="testimonial-role">Director, Mitchell Sherwood Interiors — London</div>
              </div>
            </div>
          </div>
          <div className={`testimonial-card ${activeTestimonial === 2 ? 'active' : ''}`}>
            <div className="testimonial-quote-mark">"</div>
            <p className="testimonial-text">I was sceptical at first — we'd never done wall beds. But the install guides were
              dead clear, the Stabilus pistons are incredibly smooth, and the client was over the moon. We charged €3,200
              for the job. The mechanism cost us a fraction of that. It's a no-brainer for any decent carpenter.</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">DO</div>
              <div>
                <div className="testimonial-name">David Owen</div>
                <div className="testimonial-role">Founder, Owen & Sons Carpentry — Bristol</div>
              </div>
            </div>
          </div>
          <div className="testimonial-dots">
            <button className={`dot ${activeTestimonial === 0 ? 'active' : ''}`} onClick={() => setActiveTestimonial(0)}></button>
            <button className={`dot ${activeTestimonial === 1 ? 'active' : ''}`} onClick={() => setActiveTestimonial(1)}></button>
            <button className={`dot ${activeTestimonial === 2 ? 'active' : ''}`} onClick={() => setActiveTestimonial(2)}></button>
          </div>
        </div>
      </section>

    </>
  );
}

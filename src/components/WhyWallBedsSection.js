export default function WhyWallBedsSection({ dict }) {
  return (
    <>
      <section className="section" id="why">
        <div className="why-grid">
          <div className="why-text">
            <div className="section-tag">{dict.why.tag}</div>
            <h2 dangerouslySetInnerHTML={{ __html: dict.opportunity.title }}></h2>
            <p>{dict.opportunity.p1}</p>
            <p>{dict.opportunity.p2}</p>
            <div className="why-highlight">
              <p>{dict.opportunity.p3}</p>
            </div>
          </div>
          <div className="why-visual"
            style={{ background: `url('/wbk-b2b-opportunity.webp') center/cover no-repeat`, }}>
          </div>
        </div>
      </section>

    </>
  );
}

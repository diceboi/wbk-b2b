export default function ProfitCalculatorSection({ dict }) {
  return (
    <>
      <section className="profit-section" id="profit">
        <div className="profit-inner">
          <div className="section-header">
            <div className="section-tag">{dict.profit.tag}</div>
            <div className="section-title">{dict.profit.title}</div>
            <p className="section-desc-light">{dict.profit.sub}</p>
          </div>
          <div className="profit-flow">
            <div className="profit-card">
              <div className="profit-card-label">{dict.profit.calcs[0].label}</div>
              <div className="profit-card-value" style={{ color: `#e94560`, }}>{dict.profit.calcs[0].value}</div>
              <div className="profit-card-sub" dangerouslySetInnerHTML={{ __html: dict.profit.calcs[0].desc }}></div>
            </div>
            <div className="profit-arrow">→</div>
            <div className="profit-card">
              <div className="profit-card-label">{dict.profit.calcs[1].label}</div>
              <div className="profit-card-value" style={{ color: `#e94560`, }}>{dict.profit.calcs[1].value}</div>
              <div className="profit-card-sub" dangerouslySetInnerHTML={{ __html: dict.profit.calcs[1].desc }}></div>
            </div>
            <div className="profit-arrow">→</div>
            <div className="profit-card">
              <div className="profit-card-label">{dict.profit.calcs[2].label}</div>
              <div className="profit-card-value" style={{ color: `#4ecca3`, }}>{dict.profit.calcs[2].value}</div>
              <div className="profit-card-sub" dangerouslySetInnerHTML={{ __html: dict.profit.calcs[2].desc }}></div>
            </div>
          </div>
          <div className="profit-result">
            <div className="profit-result-label">{dict.profit.gross_label}</div>
            <div className="profit-result-value">{dict.profit.gross_value}</div>
            <div className="profit-result-sub">{dict.profit.gross_sub}</div>
          </div>
          <p className="profit-note"><span dangerouslySetInnerHTML={{ __html: dict.profit.note }}></span> <a href="#apply"
            style={{ color: `#e94560`, fontWeight: `600`, }}>{dict.profit.note_cta}</a></p>
        </div>
      </section>

    </>
  );
}

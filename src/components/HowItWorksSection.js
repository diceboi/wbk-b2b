export default function HowItWorksSection({ dict }) {
  return (
    <>
      <section className="section" id="how-it-works">
        <div className="section-header">
          <div className="section-tag">{dict.how.tag}</div>
          <div className="section-title">{dict.how.title}</div>
        </div>
        <div className="steps-grid">
          <div className="step">
            <div className="step-num">{dict.how.steps[0].num}</div>
            <div className="step-title">{dict.how.steps[0].title}</div>
            <p className="step-desc">{dict.how.steps[0].desc}</p>
          </div>
          <div className="step">
            <div className="step-num">{dict.how.steps[1].num}</div>
            <div className="step-title">{dict.how.steps[1].title}</div>
            <p className="step-desc">{dict.how.steps[1].desc}</p>
          </div>
          <div className="step">
            <div className="step-num">{dict.how.steps[2].num}</div>
            <div className="step-title">{dict.how.steps[2].title}</div>
            <p className="step-desc">{dict.how.steps[2].desc}</p>
          </div>
          <div className="step">
            <div className="step-num">{dict.how.steps[3].num}</div>
            <div className="step-title">{dict.how.steps[3].title}</div>
            <p className="step-desc">{dict.how.steps[3].desc}</p>
          </div>
        </div>
      </section>

    </>
  );
}

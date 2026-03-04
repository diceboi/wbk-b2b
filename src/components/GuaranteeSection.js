export default function GuaranteeSection({ dict }) {
  return (
    <>
      <section className="guarantee">
        <div className="guarantee-inner">
          <div className="guarantee-badge">
            <div className="guarantee-badge-icon">🛡️</div>
            <div className="guarantee-badge-text">{dict.guarantee.title}</div>
          </div>
          <h3>{dict.guarantee.sub}</h3>
          <p>{dict.guarantee.p1} {dict.guarantee.p2}</p>
        </div>
      </section>

    </>
  );
}

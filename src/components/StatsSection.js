export default function StatsSection({ dict }) {
  return (
    <>
  <section className="stats">
    <div className="stats-inner">
      <div className="stat">
        <div className="stat-num">{dict.stats.years.num}</div>
        <div className="stat-label">{dict.stats.years.label}</div>
      </div>
      <div className="stat">
        <div className="stat-num">{dict.stats.sold.num}</div>
        <div className="stat-label">{dict.stats.sold.label}</div>
      </div>
      <div className="stat">
        <div className="stat-num">{dict.stats.sizes.num}</div>
        <div className="stat-label">{dict.stats.sizes.label}</div>
      </div>
      <div className="stat">
        <div className="stat-num">{dict.stats.countries.num}</div>
        <div className="stat-label">{dict.stats.countries.label}</div>
      </div>
    </div>
  </section>

    </>
  );
}

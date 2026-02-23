export default function CompetitiveComparisonSection() {
  return (
    <>
  <section className="section-bg">
    <div className="section-header">
      <div className="section-tag">How we compare</div>
      <div className="section-title">Feature by feature</div>
    </div>
    <div className="comp-table-wrap">
      <table className="comp-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Wall Bed King</th>
            <th>Häfele</th>
            <th>Budget brands</th>
          </tr>
        </thead>
        <tbody>
          <tr className="highlight">
            <td>Warranty</td>
            <td>Lifetime</td>
            <td>Limited</td>
            <td>Limited / none</td>
          </tr>
          <tr>
            <td>Piston quality</td>
            <td>Stabilus (premium)</td>
            <td>Varies</td>
            <td>Budget / spring</td>
          </tr>
          <tr className="highlight">
            <td>Daily use rated</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Often no</td>
          </tr>
          <tr>
            <td>Size options</td>
            <td>18 standard + custom</td>
            <td>Limited</td>
            <td>Very limited</td>
          </tr>
          <tr className="highlight">
            <td>On-site size adjustment</td>
            <td>Yes</td>
            <td>No</td>
            <td>No</td>
          </tr>
          <tr>
            <td>TypeFlex (V + H from same unit)</td>
            <td>Yes (patent pending)</td>
            <td>No</td>
            <td>No</td>
          </tr>
          <tr className="highlight">
            <td>Floor or wall fixing</td>
            <td>Either</td>
            <td>Wall typically</td>
            <td>Wall only</td>
          </tr>
          <tr>
            <td>No cabinetry required</td>
            <td>Yes (Classic & Studio)</td>
            <td>No</td>
            <td>No</td>
          </tr>
          <tr className="highlight">
            <td>Price point</td>
            <td>Competitive</td>
            <td>Competitive</td>
            <td>Lower</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

    </>
  );
}

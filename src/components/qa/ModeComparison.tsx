export function ModeComparison() {
  return (
    <>
      <h2 id="mode-comparison">Mode comparison</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>URL drop mode</th>
              <th>Connect a repo mode</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>One-time check</td>
              <td>Continuous</td>
            </tr>
            <tr>
              <td>Results in dashboard</td>
              <td>Results on PRs + dashboard</td>
            </tr>
            <tr>
              <td>No authentication</td>
              <td>GitHub authentication required</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

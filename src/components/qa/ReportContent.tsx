export function ReportContent() {
  return (
    <>
      <h2 id="report">Report</h2>
      <p>Every bug report includes:</p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Root cause</strong>
              </td>
              <td>Why the bug happened, grounded in recorded execution data</td>
            </tr>
            <tr>
              <td>
                <strong>Suggested fix</strong>
              </td>
              <td>Code-level recommendation for fixing the bug</td>
            </tr>
            <tr>
              <td>
                <strong>Full recording</strong>
              </td>
              <td>
                Link to Replay DevTools session with network, console, and DOM
                state
              </td>
            </tr>
            <tr>
              <td>
                <strong>Confidence score</strong>
              </td>
              <td>How reliably the bug was reproduced (high / medium / low)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Each bug report also includes an agent-ready description of the problem
        and fix: a structured report with title, description, steps to
        reproduce, expected behavior, root cause, causal chain, and recording
        links that can be fed directly into an AI coding agent.
      </p>
    </>
  )
}

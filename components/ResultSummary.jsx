export default function ResultSummary({ total, share, transactions }) {
  return (
    <div>
      <h2>Trip Summary</h2>

      <p>
        Total Spent: <strong>${total.toFixed(2)}</strong>
      </p>
      <p>
        Each Person Owes: <strong>${share.toFixed(2)}</strong>
      </p>

      <h3>Transactions:</h3>
      <ul>
        {transactions.length ? (
          transactions.map((t, i) => <li key={i}>{t}</li>)
        ) : (
          <li>Nothing to show.</li>
        )}
      </ul>
    </div>
  );
}

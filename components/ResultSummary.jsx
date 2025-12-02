export default function ResultSummary({ total, share, transactions }) {
  return (
    <div className="mt-5 p-2.5 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold text-[#333]">Trip Summary</h2>

      <p className="text-[#333]">
        Total Spent: <strong>${total.toFixed(2)}</strong>
      </p>
      <p className="text-[#333]">
        Each Person Owes: <strong>${share.toFixed(2)}</strong>
      </p>

      <h3 className="mt-4 mb-2 text-lg font-semibold text-[#15b65e]">Transactions</h3>
      <ul className="text-[#333]">
        {transactions.length ? (
          transactions.map((t, i) => <li key={i}>{t}</li>)
        ) : (
          <li>Nothing to show.</li>
        )}
      </ul>
    </div>
  );
}

"use client";

export default function ExpenseTable({ participants, expenses, onChange }) {
  if (!participants.length) return <p>No participants yet.</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Amount Paid</th>
        </tr>
      </thead>

      <tbody>
        {participants.map((name) => (
          <tr key={name}>
            <td>{name}</td>
            <td>
              <input
                type="number"
                value={expenses[name] === 0 ? "" : expenses[name]}
                step="0.01"
                onChange={(e) => onChange(name, e.target.value)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
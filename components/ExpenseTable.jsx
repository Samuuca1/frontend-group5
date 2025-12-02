"use client";

export default function ExpenseTable({ participants, expenses, onChange }) {
  if (!participants.length) return <p>Add participants as needed to calculate results.</p>;

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse mt-4 shadow-lg">
        <thead>
          <tr className="shadow-sm">
            <th className="text-left p-2.5">Name</th>
            <th className="text-left p-2.5">Amount Paid</th>
          </tr>
        </thead>

        <tbody>
          {participants.map((name) => (
            <tr key={name} className="shadow-xs" >
              <td className="text-left px-2.5 py-1">{name}</td>
              <td className="text-left px-2.5 py-1">
                <input
                  type="number"
                  value={expenses[name] === 0 ? "" : expenses[name]}
                  step="0.01"
                  onChange={(e) => onChange(name, e.target.value)}
                  className="w-full p-2.5 border rounded-lg border-gray-300 focus:outline-none focus:ring-3 focus:ring-[#15b65e]"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
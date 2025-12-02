"use client";

import { useState } from "react";
import ParticipantForm from "../components/ParticipantForm";
import ExpenseTable from "../components/ExpenseTable";
import Link from "next/link";

export default function HomePage() {
  const [participants, setParticipants] = useState([]);
  const [expenses, setExpenses] = useState({});

  const handleAddParticipant = (name) => {
    if (!name || participants.includes(name)) return;
    setParticipants([...participants, name]);
    setExpenses({ ...expenses, [name]: 0 });
  };

  const handleExpenseChange = (name, amount) => {
    setExpenses({ ...expenses, [name]: parseFloat(amount) || 0 });
  };

  return (
    <div className="container space-y-4">
      <h1 className="text-3xl font-bold text-[#333]">Trip Expense Splitter</h1>

      <ParticipantForm onAdd={handleAddParticipant} />

      <ExpenseTable
        participants={participants}
        expenses={expenses}
        onChange={handleExpenseChange}
      />

      <Link
        href={{
          pathname: "/results",
          query: { data: JSON.stringify(expenses) },
        }}
      >
        <button 
          className={`px-3.75 py-2.5 rounded-lg text-white 
            ${participants.length === 0 ? "bg-[#ccc]" : " bg-[#15b65e] hover:bg-[#0c703b] active:scale-98"}`}
          disabled={participants.length === 0}
        >
          Calculate Results
        </button>
      </Link>
    </div>
  );
}
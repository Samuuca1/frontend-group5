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
    <div className="container">
      <h1>Trip Expense Splitter</h1>

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
        <button>Calculate Results</button>
      </Link>
    </div>
  );
}

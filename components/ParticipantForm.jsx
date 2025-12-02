"use client";

import { useState } from "react";

export default function ParticipantForm({ onAdd }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(name.trim());
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-6 mt-5 mb-2.5">
      <input
        type="text"
        placeholder="Participant name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-1 p-2.5 border rounded-lg border-gray-300 focus:outline-none focus:ring-3 focus:ring-[#15b65e]"
      />
      <button type="submit" className="px-3.75 py-2.5 rounded-lg bg-[#15b65e] text-white hover:bg-[#0c703b] active:scale-98">Add</button>
    </form>
  );
}
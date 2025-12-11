"use client";

import { useState } from "react";

export default function ContactPage() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted");
    setMessage("");
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-[#333]">Contact</h1>
      <p className="text-[#333]">
        If you have any questions about the app, feel free to send a message.
      </p>

      <form onSubmit={handleSubmit} className="space-y-2.5 mt-5">
        <textarea
          placeholder="Your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full p-2.5 border rounded-lg shadow-sm border-gray-300 focus:outline-none focus:ring-3 focus:ring-[#15b65e]"
        />

        <button type="submit" className="px-3.75 py-2.5 rounded-lg bg-[#15b65e] text-white hover:bg-[#0c703b] active:scale-98">
          Send Message
        </button>
      </form>
    </div>
  );
}

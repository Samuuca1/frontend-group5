"use client";

import { useState } from "react";

export default function ContactPage() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted (placeholder only).");
    setMessage("");
  };

  return (
    <div>
      <h1>Contact</h1>
      <p>
        If you have any questions about the app, feel free to send a message.
      </p>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <textarea
          placeholder="Your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          style={{ width: "100%", padding: "10px" }}
        />

        <button type="submit" style={{ marginTop: "10px" }}>
          Send Message
        </button>
      </form>
    </div>
  );
}

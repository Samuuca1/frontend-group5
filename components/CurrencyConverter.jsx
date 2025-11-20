"use client";

import { useState, useEffect } from "react";

const API_KEY = "152d3490f5fa79aad76a2f45";
const API_BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair`;

export default function CurrencyConverter() {
  const [from, setFrom] = useState("CAD");
  const [to, setTo] = useState("USD");
  const [amount, setAmount] = useState("");
  const [converted, setConverted] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleConvert = async () => {
    const numAmount = parseFloat(amount);
    if (!numAmount || numAmount <= 0) {
      setError("Please enter a valid amount greater than 0.");
      setConverted(null);
      return;
    }

    setError(null);
    setIsLoading(true);
    setConverted(null);

    const url = `${API_BASE_URL}/${from}/${to}/${numAmount}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.result === "error") {
        throw new Error(
          data["error-type"] ||
            "Conversion failed. Check your API key or limits."
        );
      }

      const result = data.conversion_result.toFixed(2);
      setConverted(`${result} ${to}`);
    } catch (err) {
      console.error("API Fetch Error:", err);
      setError(`Error: ${err.message}`);
      setConverted(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (parseFloat(amount) > 0) {
      handleConvert();
    }
  }, [amount, from, to]);

  const isDisabled = !amount || parseFloat(amount) <= 0 || isLoading;

  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Currency Converter</h3>
      {error && <p style={{ color: "red" }}>⚠️ {error}</p>}
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          <option value="CAD">CAD</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="JPY">JPY</option>
        </select>

        <span>→</span>

        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="USD">USD</option>
          <option value="CAD">CAD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>

      {/* Display result or loading state */}
      {isLoading && <p style={{ marginTop: "10px" }}>**Loading...**</p>}
      {converted && !isLoading && (
        <p style={{ marginTop: "10px" }}>Result: **{converted}**</p>
      )}
    </div>
  );
}
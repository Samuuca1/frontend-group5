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
    <div className="mt-5 p-2.5 shadow-lg">
      <h3 className="mt-4 mb-2 text-lg font-semibold text-[#333]">Currency Converter</h3>
      {error && <p className="text-red-600">⚠️ {error}</p>}

      <div className="overflow-x-auto flex gap-2.5 mt-2.5 items-center border rounded-lg border-gray-300">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="m-1 p-1.5 border rounded-lg border-transparent focus:outline-none focus:ring-3 focus:ring-[#15b65e]"
        />

        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="p-1.5 border rounded-lg border-transparent focus:outline-none focus:ring-3 focus:ring-[#15b65e]"
        >
          <option value="CAD">CAD</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
        </select>

        <span className="text-2xl text-[#15b65e]">→</span>

        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="p-1.5 border rounded-lg border-transparent focus:outline-none focus:ring-3 focus:ring-[#15b65e]"
        >
          <option value="USD">USD</option>
          <option value="CAD">CAD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
        </select>
      </div>

      {/* Display result or loading state */}
      {isLoading && <p className="mt-2.5">**Loading...**</p>}
      {converted && !isLoading && (
        <p className="mt-2.5">Result: **<span className="font-semibold">{converted}</span>**</p>
      )}
    </div>
  );
}
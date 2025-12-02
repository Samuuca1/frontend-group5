"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { calculateBalances } from "../../utils/calculateBalances";
import ResultSummary from "../../components/ResultSummary";
import CurrencyConverter from "../../components/CurrencyConverter";

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const data = searchParams.get("data");
  const expenses = data ? JSON.parse(data) : {};

  const { total, share, transactions } = calculateBalances(expenses);

  return (
    <div className="space-y-4">
      <ResultSummary total={total} share={share} transactions={transactions} />
      <CurrencyConverter />
      <button 
        onClick={() => router.push("/")}
        className="px-3.75 py-2.5 rounded-lg bg-[#15b65e] text-white hover:bg-[#0c703b] active:scale-98"
      >
        Back
      </button>
    </div>
  );
}
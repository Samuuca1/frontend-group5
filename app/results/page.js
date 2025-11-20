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
    <>
      <ResultSummary total={total} share={share} transactions={transactions} />
      <CurrencyConverter />
      <button onClick={() => router.push("/")}>Back</button>
    </>
  );
}

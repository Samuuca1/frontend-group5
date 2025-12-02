export default function AboutPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-[#333]">About This App</h1>
      <p className="text-[#333] leading-relaxed">
        Trip Expense Splitter helps groups fairly divide shared travel expenses.
        Enter participant names, record what each person paid, and the app will
        calculate how much each person owes or is owed.
      </p>

      <p className="text-[#333] leading-relaxed">
        This tool was built as a CPAN 144 project using React and Next.js App
        Router. It demonstrates state management, API integration, routing, and
        component-based design.
      </p>
    </div>
  );
}

export function calculateBalances(expenses) {
  const names = Object.keys(expenses);
  if (names.length === 0) {
    return { total: 0, share: 0, transactions: [] };
  }

  
  const total = names.reduce((sum, n) => sum + expenses[n], 0);
  const share = total / names.length;

  
  const balances = names.map((n) => ({
    name: n,
    
    balance: Math.round((expenses[n] - share) * 100) / 100, 
  }));

 
  let debtors = balances.filter((b) => b.balance < 0);
  let creditors = balances.filter((b) => b.balance > 0);

  const transactions = [];
  const EPSILON = 0.0001; 

  
  for (let i = 0; i < debtors.length; i++) {
    for (let j = 0; j < creditors.length; j++) {
      let d = debtors[i];
      let c = creditors[j];

      
      if (Math.abs(d.balance) < EPSILON) continue; 
      
      
      if (Math.abs(c.balance) < EPSILON) continue;

      
      const amountToPay = Math.min(-d.balance, c.balance);
      
      if (amountToPay > EPSILON) {
        
        transactions.push(
          `${d.name} pays ${c.name} $${amountToPay.toFixed(2)}`
        );

        
        d.balance += amountToPay; 
        
        c.balance -= amountToPay;
      }
    }
  }

  return { total, share, transactions };
}
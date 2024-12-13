import React from 'react';

const Summary = ({ transactions }) => {
  const totalIncome = transactions
    .filter((tx) => tx.type === 'income')
    .reduce((sum, tx) => sum + Number(tx.amount), 0);
  const totalExpenses = transactions
    .filter((tx) => tx.type === 'expense')
    .reduce((sum, tx) => sum + Number(tx.amount), 0);
  const balance = totalIncome - totalExpenses;

  return (
    <div className=" justify-between items-center bg-blue-100 p-4 rounded">
      <div>Total Income: ₱ {totalIncome.toFixed(2)}</div>
      <div>Total Expenses: ₱ {totalExpenses.toFixed(2)}</div>
      <div>Remaining Balance: ₱ {balance.toFixed(2)}</div>
    </div>
  );
};

export default Summary;

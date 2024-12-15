import React from 'react';

const Summary = ({ transactions }) => {
  const activeTransactions = transactions.filter(tx => !tx.removed); // Only include active transactions

  const totalIncome = activeTransactions
    .filter((tx) => tx.type === 'income')
    .reduce((sum, tx) => sum + Number(tx.amount), 0);
  const totalExpenses = activeTransactions
    .filter((tx) => tx.type === 'expense')
    .reduce((sum, tx) => sum + Number(tx.amount), 0);
  const balance = totalIncome - totalExpenses;

  return (
    <div className='flex ml-[480px]'>
      <div className="justify-between items-end p-4 text-xl bg-[#818fb4] rounded-2xl border border-black font-poppins text-[#f5f4e6] text-end">
        <div>Total Income</div>
        <div>Total Expenses</div>
        <div className='pl-4'>Remaining Balance</div>
      </div>

      <div className='justify-between items-end p-4 text-xl bg-[#435585] rounded-2xl border border-black font-poppins text-[#f5f4e6] ml-4'>
        <div className='pr-16'>₱ {totalIncome.toFixed(2)}</div>
        <div>₱ {totalExpenses.toFixed(2)}</div>
        <div>₱ {balance.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Summary;

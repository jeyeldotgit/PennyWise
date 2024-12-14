import React from 'react';
import { MdRemove } from "react-icons/md";

const TransactionList = ({ transactions, deleteTransaction }) => {
  // Group transactions by date, including deleted transactions
  const groupedTransactions = transactions.reduce((acc, tx) => {
    if (!acc[tx.date]) {
      acc[tx.date] = [];
    }
    acc[tx.date].push(tx);
    return acc;
  }, {});

  // Sort the dates in descending order
  const sortedDates = Object.keys(groupedTransactions).sort((a, b) => new Date(b) - new Date(a));

  return (
    <div>
      <h1 className="font-bold font-hagrid text-[23px] border rounded-2xl bg-[#818fb4] border-black p-4 mb-4 ml-[180px] text-[#f5f4e6]">Income and Expense Tracking</h1>
      <div className="w-[720px] h-[360px] ml-[180px] border border-[#1d1f25] rounded-2xl p-4 mt-6 font-poppins text-base bg-[#435585] text-[#f5f4e6]">
        {sortedDates.map((date) => (
          <div key={date}>
            {/* Display the Date */}
            <h3 className="font-semibold text-sm mb-2">{date}</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Loop through each transaction for the specific date */}
              {groupedTransactions[date].map((tx, index) => (
                <div key={index} className={`mb-2 flex justify-between items-center ${tx.type === 'expense' ? 'pl-4' : ''}`}>
                  <div>
                    {/* If the transaction is income, display it as Income, otherwise Expense */}
                    <p>
                      <strong className="mr-12">{tx.type === 'income' ? 'Income' : 'Expense'}:</strong> {tx.category} - {tx.currency} {tx.amount}
                    </p>
                  </div>
                  {/* If the transaction is deleted, show it differently */}
                  {tx.removed && <p className="text-red-500">This entry was removed</p>}
                  {/* Delete Button */}
                  {!tx.removed && (
                    <button
                      onClick={() => deleteTransaction(index)}
                      className="bg-[#818fb4] text-white p-1 rounded"
                    >
                      <MdRemove />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;

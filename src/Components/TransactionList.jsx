import React from 'react';

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div>
      <h2 className="font-bold mb-4">Transactions</h2>
      <div className="overflow-y-auto h-64 border rounded p-4 bg-gray-100">
        {transactions.map((tx, index) => (
          <div key={index} className="mb-2 flex justify-between items-center">
            <div>
              <p>
                <strong>{tx.type === 'income' ? 'Income' : 'Expense'}:</strong> {tx.category} - {tx.currency} {tx.amount}
              </p>
              <p>{tx.date}</p>
            </div>
            <button
              onClick={() => deleteTransaction(index)}
              className="bg-red-500 text-white p-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;

import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import DbHeader from '../Components/DbHeader';
import IncomeForm from '../Components/IncomeForm';
import ExpenseForm from '../Components/ExpenseForm';
import TransactionList from '../Components/TransactionList';
import Summary from '../Components/Summary';

function Budgeting() {
  const [transactions, setTransactions] = useState([]);

  // Function to add a new transaction
  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  // Function to delete a transaction by index
  const deleteTransaction = (index) => {
    setTransactions((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex w-full h-screen bg-[#f5e8c7]">
      <div>
        <Sidebar />
      </div>

      <div className="flex flex-col flex-grow">
        {/* Header */}
        <div>
          <DbHeader />
        </div>

        <h1 className="text-center font-bold text-2xl">Income and Expense Tracking</h1>
        <div className="flex flex-col space-y-4 p-4">
          <div className="flex space-x-8">
            {/* Pass addTransaction to forms */}
            <IncomeForm addTransaction={addTransaction} />
            <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
          </div>

          <div className="flex space-x-8">
            <ExpenseForm addTransaction={addTransaction} />
            <div className="p-12 flex flex-col space-y-4 space-x-8">
              <Summary transactions={transactions} />
            </div>
          </div>

          <div className="mt-6 flex flex-col space-y-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Budgeting;

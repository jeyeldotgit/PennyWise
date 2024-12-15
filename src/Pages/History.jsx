import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import DbHeader from '../Components/DbHeader';
import useUser from '../utils/useUser'; // Assuming the hook is located here
import DownloadHistory from '../Components/DownloadHistory';

function History() {
  // Get user data from the useUser hook
  const { user, isLoading, error } = useUser();

  const [transactions, setTransactions] = useState([]); // Active transactions
  const [removedTransactions, setRemovedTransactions] = useState([]); // Removed transactions

  useEffect(() => {
    // Check for any error in fetching user data
    if (error) {
      console.error("Error fetching user:", error);
    }
  }, [error]);

  // Load transactions from sessionStorage
  useEffect(() => {
    const storedTransactions = sessionStorage.getItem("transactions");
    if (storedTransactions) {
      const data = JSON.parse(storedTransactions);
      const activeTxs = data.filter(tx => !tx.removed);  // Filter active transactions
      const removedTxs = data.filter(tx => tx.removed);  // Filter removed transactions
      setTransactions(activeTxs);
      setRemovedTransactions(removedTxs);
    }
  }, []);

  // Display loading state if user data is still being fetched
  if (isLoading) {
    return <div>Loading user data...</div>;
  }

  // Display an error message if there was an issue fetching user data
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='flex w-100vh h-screen bg-[#f5e8c7]'>
      <div>
        <Sidebar />
      </div>

      <div className="flex flex-col flex-grow pt-6">
        {/* Header */}
        <div>
          <DbHeader />
        </div>

        {/* Transaction History */}
        <div className="p-6 mt-12 bg-white border border-gray-300 rounded-lg ml-[200px] mr-[1000px]">
          <h2 className="font-semibold text-xl mb-4">Transaction History</h2>

          {/* Added Transactions */}
          <div className="mb-4">
            <h3 className="font-semibold text-lg">Added Transactions</h3>
            <div>
              {transactions.map((tx, index) => (
                <div key={index} className="mb-2">
                  <p>
                    <strong>{tx.type === 'income' ? 'Income' : 'Expense'}:</strong>
                    {tx.category} - {tx.currency} {tx.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Deleted Transactions */}
          <div>
            <h3 className="font-semibold text-lg text-red-500">Deleted Transactions</h3>
            <div>
              {removedTransactions.map((tx, index) => (
                <div key={index} className="mb-2 text-red-500">
                  <p>
                    <strong>{tx.type === 'income' ? 'Income' : 'Expense'}:</strong>
                    {tx.category} - {tx.currency} {tx.amount} (This entry was removed)
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <DownloadHistory />
        </div>
      </div>
    </div>
  );
}

export default History;

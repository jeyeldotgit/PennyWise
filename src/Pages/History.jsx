import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import DbHeader from '../Components/DbHeader';
import useUser from '../utils/useUser'; // Assuming the hook is located here
import HttpClient from '../utils/HttpClient'; // Import HttpClient

function History() {
  const { user, isLoading, error } = useUser();

  const [transactions, setTransactions] = useState([]); // Active transactions
  const [removedTransactions, setRemovedTransactions] = useState([]); // Removed transactions

  useEffect(() => {
    if (error) {
      console.error("Error fetching user:", error);
    }
  }, [error]);

  useEffect(() => {
    const storedTransactions = sessionStorage.getItem("transactions");
    if (storedTransactions) {
      const data = JSON.parse(storedTransactions);
      const activeTxs = data.filter(tx => !tx.removed);  
      const removedTxs = data.filter(tx => tx.removed);  
      setTransactions(activeTxs);
      setRemovedTransactions(removedTxs);
    }
  }, []);

  if (isLoading) {
    return <div>Loading user data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleSendDataToServer = async () => {
    // Combine active and removed transactions
    const allTransactions = [...transactions, ...removedTransactions];
  
    const dataToSend = {
      transactions: allTransactions,
    };
  
    try {
      // Send the transaction data to the backend
      const response = await HttpClient.post('/generate-cobol-file', dataToSend, {
        responseType: 'blob', 
      });
  
      // Trigger download
      const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', 'transaction_report.txt'); 
      document.body.appendChild(link);
      link.click();  
    } catch (error) {
      console.error('Error sending data to server:', error);
    }
  };

  return (
    <div className="flex w-100vh h-screen bg-[#f5e8c7]">
      <div>
        <Sidebar />
      </div>

      <div className="flex flex-col flex-grow pt-6">
        <div>
          <DbHeader />
        </div>

        <div className="p-6 mt-12 bg-white border border-gray-300 rounded-lg ml-[200px] mr-[1000px]">
          <h2 className="font-semibold text-xl mb-4">Transaction History</h2>

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

        <div className="p-6 mt-4">
          <button 
            onClick={handleSendDataToServer} 
            className="bg-blue-500 text-white py-2 px-4 rounded">
            Send Data to Server
          </button>
        </div>
      </div>
    </div>
  );
}

export default History;

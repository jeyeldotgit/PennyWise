import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import DbHeader from "../Components/DbHeader";
import IncomeForm from "../Components/IncomeForm";
import ExpenseForm from "../Components/ExpenseForm";
import TransactionList from "../Components/TransactionList";
import Summary from "../Components/Summary";
import useUser from "../utils/useUser";  // Import the custom hook for user data
import { useNavigate } from "react-router-dom";

function Budgeting() {
  const [transactions, setTransactions] = useState([]);
  const [removedTransactions, setRemovedTransactions] = useState([]); // Added a state for removed transactions
  const { user, loading, error } = useUser();  // Use the custom hook to fetch user data
  const navigate = useNavigate();
  

  useEffect(() => {
    // If there's an error or no user, redirect to login page
    if (error) {
      navigate("/login");
    }
  }, [error, navigate]);

  // Load transactions from sessionStorage on component mount
  useEffect(() => {
    const storedTransactions = sessionStorage.getItem("transactions");
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  useEffect(() => {
    // Save transactions to sessionStorage whenever they change
    sessionStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // Function to add a new transaction
  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  // Function to delete a transaction by index
  const deleteTransaction = (index) => {
    setTransactions((prev) => {
      // Update the transactions list to mark the transaction as removed
      const updatedTransactions = prev.map((tx, i) => {
        if (i === index) {
          return { ...tx, removed: true }; // Mark as removed
        }
        return tx;
      });
  
      // Save the updated list (with removed transactions) to sessionStorage
      sessionStorage.setItem("transactions", JSON.stringify(updatedTransactions));
  
      // Return the updated list to update the state
      return updatedTransactions;
    });
  };
  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#f5e8c7]">
        <h2 className="text-xl font-semibold">Loading user data...</h2>
      </div>
    );
  }

  return (
    <div className="flex w-full h-screen bg-[#f5e8c7]">
      <div>
        <Sidebar />
      </div>

      <div className="flex flex-col flex-grow pt-6">
        {/* Header */}
        <div>
          <DbHeader />
        </div>

        <div className="flex flex-col space-y-4 p-4 mt-8">
          <div className="flex space-x-8">
            {/* Pass addTransaction to forms */}
            <IncomeForm addTransaction={addTransaction} />
            <TransactionList 
              transactions={transactions} 
              deleteTransaction={deleteTransaction} 
            />
          </div>

          <div className="flex space-x-8">
            <ExpenseForm addTransaction={addTransaction} />
            
            <div className="ml-20">
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

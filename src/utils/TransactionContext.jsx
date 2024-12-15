import React, { createContext, useState, useContext, useEffect } from "react";

// Create context
const TransactionContext = createContext();

// Create a provider component
export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  // Load transactions from sessionStorage if available
  useEffect(() => {
    const storedTransactions = sessionStorage.getItem("transactions");
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  // Add a transaction
  const addTransaction = (transaction) => {
    setTransactions((prevTransactions) => {
      const newTransactions = [...prevTransactions, transaction];
      sessionStorage.setItem("transactions", JSON.stringify(newTransactions));
      return newTransactions;
    });
  };

  // Mark a transaction as removed instead of deleting
  const deleteTransaction = (id) => {
    setTransactions((prevTransactions) => {
      const updatedTransactions = prevTransactions.map((tx) =>
        tx.id === id ? { ...tx, removed: true } : tx
      );
      sessionStorage.setItem("transactions", JSON.stringify(updatedTransactions));
      return updatedTransactions;
    });
  };

  return (
    <TransactionContext.Provider
      value={{ transactions, addTransaction, deleteTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

// Custom hook to use the context
export const useTransactions = () => useContext(TransactionContext);

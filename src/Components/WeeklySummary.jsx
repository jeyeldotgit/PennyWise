import React from "react";

// Helper function to filter transactions within a given date range and exclude removed ones
const filterTransactionsByDateRange = (transactions, startDate, endDate) => {
  return transactions.filter((transaction) => {
    // Check if the transaction is not marked as removed
    if (transaction.removed) return false;

    const transactionDate = new Date(transaction.date);
    return transactionDate >= new Date(startDate) && transactionDate <= new Date(endDate);
  });
};

const WeeklySummary = ({ transactions, startDate, endDate, setStartDate, setEndDate }) => {
  // Filter transactions within the given date range
  const weeklyTransactions = filterTransactionsByDateRange(transactions, startDate, endDate);

  // Calculate total income for the week
  const weeklyIncome = weeklyTransactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  // Calculate total expenses for the week
  const weeklyExpenses = weeklyTransactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  // Calculate the weekly balance (income - expenses)
  const weeklyBalance = weeklyIncome - weeklyExpenses; // Since expenses are negative, this is correct.

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", width: "350px" }}>
      <h3>Weekly Summary</h3>

      {/* Date Picker Inputs for Adjustable Date Range */}
      <div style={{ marginBottom: "10px" }}>
        <label>Start Date: </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)} // Update startDate
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>End Date: </label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)} // Update endDate
        />
      </div>

      {/* Display Summary */}
      <div style={{ marginBottom: "10px" }}>
        <h4>Total Income: ₱{weeklyIncome.toFixed(2)}</h4>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <h4>Total Expenses: ₱{Math.abs(weeklyExpenses).toFixed(2)}</h4>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h4>Weekly Balance: ₱{weeklyBalance.toFixed(2)}</h4>
      </div>
      <div>
        <p>Date Range: {new Date(startDate).toLocaleDateString()} - {new Date(endDate).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default WeeklySummary;

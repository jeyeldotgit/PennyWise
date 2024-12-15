import React from "react";

// Helper function to filter transactions within a given day
const filterTransactionsByDay = (transactions, selectedDay) => {
  return transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    const selectedDate = new Date(selectedDay);
    return transactionDate.toDateString() === selectedDate.toDateString();
  });
};

const DailySummary = ({ transactions, selectedDay, setSelectedDay }) => {
  // Filter transactions for the selected day
  const dailyTransactions = filterTransactionsByDay(transactions, selectedDay);

  // Calculate total income and expenses for the selected day
  const dailyIncome = dailyTransactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const dailyExpenses = dailyTransactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  // Calculate the daily balance (income - expenses)
  const dailyBalance = dailyIncome - dailyExpenses;

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", width: "350px" }}>
      <h3>Daily Summary</h3>
      
      {/* Date Picker for selecting a day */}
      <div style={{ marginBottom: "10px" }}>
        <label>Select Day: </label>
        <input 
          type="date" 
          value={selectedDay} 
          onChange={(e) => setSelectedDay(e.target.value)}  // Update selectedDay
        />
      </div>

      {/* Display Summary */}
      <div style={{ marginBottom: "10px" }}>
        <h4>Total Income: ₱{dailyIncome.toFixed(2)}</h4>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <h4>Total Expenses: ₱{Math.abs(dailyExpenses).toFixed(2)}</h4>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h4>Daily Balance: ₱{dailyBalance.toFixed(2)}</h4>
      </div>
      <div>
        <p>Date: {new Date(selectedDay).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default DailySummary;

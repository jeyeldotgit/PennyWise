import React, { useState } from 'react';

const ExpenseForm = ({ addTransaction }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category || !date) return;

    // Add a new expense transaction
    addTransaction({
      type: 'expense',
      amount: parseFloat(amount),
      category,
      date,
      currency: '₱',
    });

    // Reset the form
    setAmount('');
    setCategory('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-transparent ml-12 flex flex-col">
      <p className="font-semibold text-sm mb-4 font-hagrid">Add Expense</p>
      <label htmlFor="amount" className='font-hagrid text-xs p-1 font-semibold'>Expense Amount</label>
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="bg-[#363062] rounded-xl pl-2 text-xs py-1 mb-2 text-[#f5f4e6] font-poppins"
      />
      <label htmlFor="category" className='font-hagrid text-xs p-1 font-semibold'>Category</label>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded-2xl bg-[#363062] text-[#f5f4e6] text-xs p-1 pr-12 font-poppins mb-2"
      />
      <label htmlFor="date" className='font-hagrid text-xs p-1 font-semibold'>Date</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border rounded-2xl bg-[#363062] text-[#f5f4e6] text-xs p-1 pr-12 font-poppins mb-2"
      />
      <button type="submit" className="bg-[#818fb4] shadow-xl text-white -p-12 -m-px-2 mt-2 py-2 rounded-2xl font-sans text-xs border border-black hover:bg-[#8799c8]">
        ADD EXPENSE
      </button>
    </form>
  );
};

export default ExpenseForm;

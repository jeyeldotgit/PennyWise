import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTransactions } from "../utils/TransactionContext";  
import DbHeader from "../Components/DbHeader";
import ReminderCard from "../Components/ReminderCard";
import GoalsCard from "../Components/GoalsCard";
import WeeklySummary from "../Components/WeeklySummary";
import DailySummary from "../Components/DailySummary";  
import Sidebar from "../Components/Sidebar"; 

function Dashboard() {
  const navigate = useNavigate();
  const { transactions } = useTransactions();  

  // Default start and end date for the week
  const [startDate, setStartDate] = useState("2024-12-08");
  const [endDate, setEndDate] = useState("2024-12-14");

  // State for selected day and month for summaries
  const [selectedDay, setSelectedDay] = useState("2024-12-10");  

  return (
    <div className="flex h-screen bg-[#f5e8c7]">
      <Sidebar /> 

      <div className="flex flex-col flex-grow pt-6">
        <DbHeader username="User" />

        <div className="flex mt-6 space-y-8">
          <ReminderCard />
          <div>
            {/* Weekly Summary with dynamic filtering */}
            <WeeklySummary 
              transactions={transactions.filter(tx => !tx.removed)} 
              startDate={startDate} 
              endDate={endDate} 
              setStartDate={setStartDate} 
              setEndDate={setEndDate} 
            />
          </div>
          <div>
            {/* Daily Summary with dynamic filtering */}
            <DailySummary 
              transactions={transactions.filter(tx => !tx.removed)} 
              selectedDay={selectedDay}  
              setSelectedDay={setSelectedDay}  
            />
          </div>
        </div>

        <div>
          <GoalsCard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

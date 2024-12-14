import React from "react";
import Sidebar from "../Components/Sidebar";
import DbHeader from "../Components/DbHeader";
import ReminderCard from "../Components/ReminderCard";
import GoalsCard from "../Components/GoalsCard";
import { useNavigate } from "react-router-dom";
import useUser from "../utils/useUser"; // Import your custom hook

function Dashboard() {
  const navigate = useNavigate();
  const { user, loading, error } = useUser();  // Use the custom useUser hook

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#f5e8c7]">
        <h2 className="text-xl font-semibold">Loading user data...</h2>
      </div>
    );
  }

  // If there is an error (e.g., user not authenticated), redirect to login
  if (error) {
    setTimeout(() => navigate("/login"), 3000);  // Redirect after 3 seconds
    return (
      <div className="flex justify-center items-center h-screen bg-[#f5e8c7]">
        <h2 className="text-xl font-semibold text-red-500">{error}</h2>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#f5e8c7]">
      <Sidebar />

      <div className="flex flex-col flex-grow pt-6">
        <DbHeader username={user.username} />

 

        <div className="mt-6 space-y-8">
          <ReminderCard />
          <GoalsCard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

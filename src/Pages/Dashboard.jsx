import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import DbHeader from '../Components/DbHeader';
import ReminderCard from '../Components/ReminderCard';
import GoalsCard from '../Components/GoalsCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve token from storage
        const response = await axios.get('http://127.0.0.1:5555/@me', {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in the request
          },
        });
        setUser(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching user:", err);
        setError('Failed to fetch user information. Please log in again.');
        setLoading(false);
        setTimeout(() => navigate('/login'), 3000);
      }
    };
    fetchUser();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#f5e8c7]">
        <h2 className="text-xl font-semibold">Loading user data...</h2>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#f5e8c7]">
      <Sidebar />

      <div className="flex flex-col flex-grow p-6">
        <DbHeader />

        {error && (
          <div className="bg-red-500 text-white p-4 rounded-md mb-4">
            <p>{error}</p>
          </div>
        )}

        {user && (
          <div className="bg-white p-6 rounded-md shadow-md mb-6">
            <h2 className="text-2xl font-semibold text-[#363062]">Welcome, {user.username}!</h2>
            <p className="text-lg text-[#818fb4]">Your personal dashboard.</p>
          </div>
        )}

        <div className="mt-6 space-y-8">
          <ReminderCard />
          <GoalsCard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

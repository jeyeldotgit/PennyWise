import React from 'react';
import Sidebar from '../Components/Sidebar';
import DbHeader from '../Components/DbHeader';
import RegisterCard from '../Components/RegisterCard';
import ReminderCard from '../Components/ReminderCard';

function Dashboard() {
  return (
    <div className="flex w-full h-screen bg-[#f5e8c7]">
      {/* Sidebar */}
      <div>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        {/* Header */}
        <div>
          <DbHeader />
        </div>

        <div className='p-12'>
          <ReminderCard></ReminderCard>
        </div>




      </div>
    </div>
  );
}

export default Dashboard;

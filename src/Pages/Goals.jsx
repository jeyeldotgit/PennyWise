import React, { useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import DbHeader from '../Components/DbHeader';
import useUser from '../utils/useUser'; // Import the useUser hook

function Goals() {
  // Using the useUser hook to get user data
  const { user, isLoading, error } = useUser();

  useEffect(() => {
    if (error) {
      console.error("Error fetching user data:", error);
    }
  }, [error]);

  if (isLoading) {
    return <div>Loading user data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='flex w-full h-screen bg-[#f5e8c7]'>
      <div>
        <Sidebar />
      </div>

      <div className="flex flex-col flex-grow">
        {/* Header */}
        <div className='pt-6'>
          <DbHeader />
        </div>

        {/* Main content */}
        <div className="p-6">
          
          {/* Add any components related to goals here */}
        </div>
      </div>
    </div>
  );
}

export default Goals;

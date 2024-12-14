import React, { useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import DbHeader from '../Components/DbHeader';
import EntryHistory from '../Components/EntryHistory';
import useUser from '../utils/useUser'; // Assuming the hook is located here

function History() {
  // Get user data from the useUser hook
  const { user, isLoading, error } = useUser();

  useEffect(() => {
    if (error) {
      console.error("Error fetching user:", error);
    }
  }, [error]);

  // Display loading state if user data is still being fetched
  if (isLoading) {
    return <div>Loading user data...</div>;
  }

  // Display an error message if there was an issue fetching user data
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Assuming `user.transactions` holds the transaction data for this user
  return (
    <div className='flex w-full h-screen bg-[#f5e8c7]'>
      <div>
        <Sidebar />
      </div>

      <div className="flex flex-col flex-grow pt-6">
        {/* Header */}
        <div>
          <DbHeader />
        </div>

        {/* EntryHistory */}
   
      </div>
    </div>
  );
}

export default History;

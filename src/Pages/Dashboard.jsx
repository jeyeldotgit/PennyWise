import React from 'react'
import Sidebar from '../Components/Sidebar'
import DbHeader from '../Components/DbHeader'
import RegisterCard from '../Components/RegisterCard'


function Dashboard() {
  return (
    <div className='flex w-full h-screen'>
        {/* Sidebar Component */}
        <div>
            <Sidebar></Sidebar>
        </div>
        
        
        {/* Header */}
        <div>
            <DbHeader></DbHeader>
        </div>
        
        {/* Register Card */}
        <div>
          <h1>kupal</h1>
        </div>


        


        


    </div>
  )
}

export default Dashboard

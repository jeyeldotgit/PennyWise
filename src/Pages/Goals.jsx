import React from 'react'
import Sidebar from '../Components/Sidebar'
import DbHeader from '../Components/DbHeader'

function Goals() {
  return (
    <div className='flex w-full h-screen bg-[#f5e8c7]'>
      <div>
        <Sidebar></Sidebar>
      </div>

      <div className="flex flex-col flex-grow">
        {/* Header */}
        <div>
          <DbHeader />
        </div>

    
      






      </div>

    </div>
  )
}

export default Goals
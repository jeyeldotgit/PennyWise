import React from 'react'
import Sidebar from '../Components/Sidebar'
import DbHeader from '../Components/DbHeader'

function History() {
  return (
    <div>
        <div className='flex w-screen'>
            {/* Get the sidebar */}
            <Sidebar></Sidebar>
            
            {/* Header */}
            <DbHeader></DbHeader>

            

        </div>
    </div>
  )
}

export default History

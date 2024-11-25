import React from 'react'
import ReminderCard from './ReminderCard'

function DbHeader() {
  return (
    <div className='h-screen w-screen bg-[#f5e8c7]'>
        <header className=' w-screen p-6 pl-14 border-b-2 border-black pb-4'>
            <h3 className='font-hagrid text-sm font-bold'>Welcome Back, $username  </h3> 
            <h1 className='font-hagrid text-3xl font-black pb-4'>Track your budget now!</h1>
        </header>

        <div className='p-14'>
            <ReminderCard></ReminderCard>

        </div>

    </div>

  )
}

export default DbHeader

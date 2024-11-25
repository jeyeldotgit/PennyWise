import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'


function ReminderCard() {

  const [Quote, setQuote] = useState('');

  useEffect(() => {
    axios.get('https://api.kanye.rest')
      .then((result) => setQuote(result.data.quote)) // Access `quote` correctly
      .catch((error) => console.error("Error fetching the quote:", error));
  }, []); // Empty dependency array ensures it runs only once after the initial render

  return (
    <div className="bg-[#435585] text-white max-w-lg max-h-full px-4 pt-2 rounded-2xl shadow-lg">
        <h2 className="text-2xl text-[#f5f4e6] font-hagrid font-semibold p-4">Reminder</h2>
        <p className='pb-20 p-4'>{Quote || "Loading..."}</p>
        
    </div>
  )
}

export default ReminderCard

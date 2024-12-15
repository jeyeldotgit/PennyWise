import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Reusable Card Component
const Card = ({ title, children, className }) => (
  <div className={`bg-[#435585] text-white w-[700px] h-[300px] px-4 pt-2 rounded-xl shadow-xl mt-10 ml-10 ${className}`}>
    {title && (
      <h2 className="text-2xl text-[#f5f4e6] font-hagrid font-semibold p-4">
        {title}
      </h2>
    )}
    <div className="p-4">{children}</div>
  </div>
);

// Main ReminderCard Component
const ReminderCard = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        // Fetch a Taylor Swift lyric using lyrics.ovh API (for demonstration purposes)
        const { data } = await axios.get('https://api.lyrics.ovh/v1/Taylor%20Swift/love%20story');
        if (data.lyrics) {
          const limitedQuote = data.lyrics.split(' ').slice(0, 40).join(' ') + '...'; // Limit to 40 words
          setQuote(limitedQuote);
        }
      } catch (error) {
        console.error("Error fetching the quote:", error);
        setQuote("Sorry, could not fetch a Taylor Swift song quote.");
      }
    };

    fetchQuote();
  }, []);

  return (
    <Card title="Reminder">
      <p className="pb-20 text-md font-semibold font-poppins text-[#f5f4e6]">
        {quote || "Loading..."}
      </p>
    </Card>
  );
};

export default ReminderCard;

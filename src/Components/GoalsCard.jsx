import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Reusable Card Component
const Card = ({ title, children, className }) => (
  <div className={`bg-[#435585] text-white max-w-lg max-h-full px-4 pt-2 rounded-xl shadow-xl ml-10 mt-10 w-[800px] ${className}`}>
    {title && (
      <h2 className="text-2xl text-[#f5f4e6] font-hagrid font-semibold p-4">
        {title}
      </h2>
    )}
    <div className="p-4">{children}</div>
  </div>
);

// Main GoalsCard Component
const GoalsCard = () => {
  const [goal, setGoal] = useState('');

  useEffect(() => {
    const fetchGoal = async () => {
      try {
        const { data } = await axios.get('https://type.fit/api/quotes');
        const randomGoal = data[Math.floor(Math.random() * data.length)].text;
        setGoal(randomGoal || "Keep striving towards your goals!");
      } catch (error) {
        console.error("Error fetching the goal:", error);
        setGoal("Set a new goal and work towards it!");
      }
    };

    fetchGoal();
  }, []);

  return (
    <Card title="Goals" >
      <p className="pb-20 text-md font-semibold font-poppins text-[#f5f4e6]">
        {goal || "Loading..."}
      </p>
    </Card>
  );
};

export default GoalsCard;
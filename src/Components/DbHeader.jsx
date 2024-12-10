import React from 'react';

// Reusable Header Section Component
const HeaderSection = ({ title, subtitle, className }) => (
  <header className={`w-full p-6 pl-14 border-b-2 border-black pb-4 ${className}`}>
    {subtitle && <h3 className="font-hagrid text-sm font-bold">{subtitle}</h3>}
    {title && <h1 className="font-hagrid text-3xl font-black pb-4">{title}</h1>}
  </header>
);

// Main Component
const DbHeader = () => {
  const username = "$username"; // Replace with dynamic user data when available

  return (
    <div className="h-20vh w-screen bg-[#f5e8c7]">
      <HeaderSection
        subtitle={`Welcome Back, ${username}`}
        title="Track your budget now!"
      />
    </div>
  );
};

export default DbHeader;

import React from 'react';
import logo2 from './../assets/images/logo2.png';

function Background() {
  return (
    <div className="fixed inset-0 w-full min-h-screen bg-[#435585]">
      <header className="flex items-center pl-10 pt-6">
        <img src={logo2} className="w-[90px]" alt="Logo" />
        <h1 className="font-poppins text-4xl font-extrabold text-[#f5e8c7] -ml-1">
          PennyWise
        </h1>
      </header>
    </div>
  );
}

export default Background;

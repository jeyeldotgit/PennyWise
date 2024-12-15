import { useState } from 'react';
import './App.css';

import Register from './Pages/Register';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Budgeting from './Pages/Budgeting';
import Goals from './Pages/Goals';
import History from './Pages/History';
import LandingPage from './Pages/LandingPage';
import Profile from './Pages/Profile';

import { TransactionProvider } from './utils/TransactionContext'; // Import the TransactionProvider

import "@fontsource/poppins";
import "@fontsource/inter";

import { Routes, Route } from 'react-router-dom'; // Update to react-router-dom for v6+

function App() {
  const [count, setCount] = useState(0);

  return (
    <TransactionProvider>  {/* Wrap your routing with TransactionProvider */}
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/budgeting' element={<Budgeting />} />
        <Route path='/goals' element={<Goals />} />
        <Route path='/history' element={<History />} />
        <Route path='/landing' element={<LandingPage />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </TransactionProvider>
  );
}

export default App;

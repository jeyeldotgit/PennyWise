import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

import Register from './Pages/Register'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Budgeting from './Pages/Budgeting'
import Goals from './Pages/Goals'
import History from './Pages/History'


import "@fontsource/poppins";
import "@fontsource/inter";


import { Routes, Route } from 'react-router'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>

        <Route path='/' element={<><Register></Register></>} ></Route>
        <Route path='/Login' element={<><Login></Login></>} ></Route>
        <Route path='/Dashboard' element={<><Dashboard></Dashboard></>} ></Route>
        <Route path='/budgeting' element={<><Budgeting></Budgeting></>} ></Route>
        <Route path='/goals' element={<><Goals></Goals></>} ></Route>
        <Route path='/history' element={<><History></History></>} ></Route>
        
      </Routes>
     
    </>
  );
};

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './Pages/Register'
import Login from './Pages/Login'
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
        
      </Routes>
     
    </>
  );
};

export default App

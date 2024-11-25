import React from 'react'
import logo_trans from './../assets/images/logo_trans.png'
import { useNavigate } from 'react-router'



const Menus = [

    { title: "Dashboard", path: "/Dashboard" },
    { title: "Budgeting", path: "/budgeting" },
    { title: "Goals", path: "/goals" },
    { title: "History", path: "/history" },

]

const Menus2 = [
    { title: "Profile" },
    { title: "Sign Out" },

]

function Sidebar() {

  const navigate = useNavigate();

  return (
    <>
<div className="flex">
  <aside className="h-screen w-72 bg-[#363062] flex flex-col items-center">
    <img src={logo_trans} className="w-[140px] flex underline-1 pt-5" />

    <div className="p-14 text-md text-[#f5f4e6] font-black font-hagrid rounded-2xl">
      <ul>
        {Menus.map((menu, index) => (
          <li
            className="p-6 hover:outline hover:outline-[#c5c4d3] hover:outline-2 hover:rounded-3xl"
            key={index}
            onClick={() => navigate(menu.path)} // Navigate on click
          >
            <a href="">{menu.title}</a>
          </li>
        ))}
      </ul>

      <ul className="pt-24">
        {Menus2.map((menu, index) => (
          <li className="p-6 hover:outline hover:outline-[#c5c4d3] hover:outline-2 hover:focus hover:rounded-3xl" key={index}>
            <a href="">{menu.title}</a>
          </li>
        ))}
      </ul>
    </div>
  </aside>

</div>  
    </>
  )
}

export default Sidebar

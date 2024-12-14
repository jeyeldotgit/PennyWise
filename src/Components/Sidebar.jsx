import React from 'react';
import logo_trans from './../assets/images/logo_trans.png';
import { useNavigate } from 'react-router-dom';
import { FiHome, FiTarget, FiClock, FiUser, FiLogOut } from 'react-icons/fi';
import { LuWalletMinimal } from "react-icons/lu";
import { LuLayoutDashboard } from "react-icons/lu";

// Data for menus with icons
const menus = [
  { title: "Dashboard", path: "/dashboard", icon: <LuLayoutDashboard /> },
  { title: "Budgeting", path: "/budgeting", icon: <LuWalletMinimal /> },
  { title: "Goals", path: "/goals", icon: <FiTarget /> },
  { title: "History", path: "/history", icon: <FiClock /> },
];

const secondaryMenus = [
  { title: "Profile", icon: <FiUser /> },
  { title: "Sign Out", icon: <FiLogOut /> },
];

// Reusable Sidebar Menu Item Component
const MenuItem = ({ title, path, icon, onClick }) => (
  <li
    className="flex items-center gap-4 p-6 rounded-3xl cursor-pointer 
      hover:bg-[#4e4b6b] hover:text-[#ffffff] hover:scale-105 transform transition duration-300"
    onClick={onClick}
  >
    {/* Icon */}
    <span className="text-xl">{icon}</span>
    {/* Title */}
    <span>{title}</span>
  </li>
);

// Sidebar Component
const Sidebar = () => {
  const navigate = useNavigate();

  // Menu rendering function
  const renderMenu = (menuList, isNavigable = true) =>
    menuList.map((menu, index) => (
      <MenuItem
        key={index}
        title={menu.title}
        icon={menu.icon}
        onClick={isNavigable ? () => navigate(menu.path) : undefined}
      />
    ));

  return (
    <div className="flex">
      <aside className="h-screen w-72 bg-[#363062] flex flex-col items-center">
        <img
          src={logo_trans}
          alt="Logo"
          className="w-[140px] flex underline-1 pt-5"
        />

        <div className="p-14 text-md text-[#f5f4e6] font-black font-hagrid rounded-2xl">
          {/* Main Menus */}
          <ul>{renderMenu(menus)}</ul>

          {/* Secondary Menus */}
          <ul className="pt-24">{renderMenu(secondaryMenus, false)}</ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

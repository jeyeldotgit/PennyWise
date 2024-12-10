import React from 'react';
import logo_trans from './../assets/images/logo_trans.png';
import { useNavigate } from 'react-router-dom';

// Data for menus
const menus = [
  { title: "Dashboard", path: "/dashboard" },
  { title: "Budgeting", path: "/budgeting" },
  { title: "Goals", path: "/goals" },
  { title: "History", path: "/history" },
];

const secondaryMenus = [
  { title: "Profile" },
  { title: "Sign Out" },
];

// Reusable Sidebar Menu Item Component
const MenuItem = ({ title, path, onClick }) => (
  <li
    className="p-6 hover:outline hover:outline-[#c5c4d3] hover:outline-2 hover:rounded-3xl cursor-pointer"
    onClick={onClick}
  >
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

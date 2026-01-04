import React from "react";
import { NavLink } from "react-router-dom";

const LeftBar = ({ image, name, email, menus = [] }) => {
  return (
    <aside className="w-[280px] min-h-screen bg-gray-100 border-r shadow-md p-6 flex flex-col">
      
      {/* Top Section */}
      <div>
        {/* Profile */}
        <div className="flex flex-col items-center text-center mb-10">
          <img
            src={image}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover ring-4 ring-indigo-500 mb-3"
          />

          <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500 mb-2">{email}</p>

          <NavLink
            to="/profile/edit"
            className="text-sm text-indigo-600 hover:underline font-medium"
          >
            Edit Profile
          </NavLink>
        </div>

        {/* Menu */}
        <nav className="space-y-2">
          {menus.map((menu, index) => (
            <NavLink
              key={index}
              to={menu.link}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg font-medium transition
                ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
                }`
              }
            >
              {menu.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Logout (Bottom) */}
      <div className="mt-auto">
        <NavLink
          to="/logout"
          className="block px-4 py-3 rounded-lg font-medium text-red-600 hover:bg-red-100 transition text-center"
        >
          Log Out
        </NavLink>
      </div>

    </aside>
  );
};

export default LeftBar;

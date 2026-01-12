import { NavLink } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import LogoImg from "../../../Pictures/LOGO.png";
import Cart from "./Cart";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { cart } = Cart();

  return (
    <>
      {/* ===== Top Offer Bar ===== */}
      <div className="bg-[#3059b8] text-white text-center py-2 text-sm font-medium">
        🎉 Flat 30% OFF on All eBooks — Limited Time Only!
      </div>

      {/* ===== Main Navbar ===== */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src={LogoImg}
              alt="Ebook Logo"
              className="h-10 w-auto object-contain"
            />
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 font-medium text-gray-600">
            {[
              ["Home", "/"],
              ["All Books", "/allBooks"],
              ["Blog", "/blog"],
              ["About", "/aboutUs"],
              ["Contact", "/contactUs"]
            ].map(([name, path]) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#3059b8] font-semibold"
                    : "hover:text-[#3059b8]"
                }
              >
                {name}
              </NavLink>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="hidden md:flex items-center gap-6 text-xl text-gray-700">

            <NavLink to="/wishlist">
              <FaHeart className="hover:text-[#3059b8] cursor-pointer" />
            </NavLink>

            {/* Cart */}
            <NavLink to="/cart" className="relative">
              <FaShoppingCart className="hover:text-[#3059b8] cursor-pointer" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-[#3059b8] text-white text-xs px-1.5 rounded-full">
                  {cart.length}
                </span>
              )}
            </NavLink>

            <NavLink to="/login">
              <FaUser className="hover:text-[#3059b8] cursor-pointer" />
            </NavLink>

          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white border-t px-6 py-4 space-y-4 text-gray-700 font-medium">
            {[
              ["Home", "/"],
              ["All Books", "/allBooks"],
              ["Blog", "/blog"],
              ["About", "/aboutUs"],
              ["Contact", "/contactUs"]
            ].map(([name, path]) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className="block hover:text-[#3059b8]"
              >
                {name}
              </NavLink>
            ))}

            <div className="flex gap-6 pt-4 text-xl">
              <NavLink to="/wishlist"><FaHeart /></NavLink>
              <NavLink to="/cart">
                <FaShoppingCart />
                {cart.length > 0 && (
                  <span className="ml-1 text-sm text-[#3059b8]">
                    ({cart.length})
                  </span>
                )}
              </NavLink>
              <NavLink to="/login"><FaUser /></NavLink>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default NavBar;

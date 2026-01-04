import { NavLink } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { useState } from "react";
import LogoImg from "../../../Pictures/LOGO.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ===== Top Offer Bar ===== */}
      <div className="bg-[#3059b8] text-white text-center py-2 text-sm font-medium">
        🎉 Flat 30% OFF on All eBooks — Limited Time Only!
      </div>

      {/* ===== Main Navbar ===== */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <NavLink to="/">
  <div className="flex w-[6vw] scale-180 cursor-pointer">
    <img src={LogoImg} alt="Ebook Logo" />
  </div>
</NavLink>


          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 font-medium text-gray-600">
            <NavLink to="/" className="hover:text-[#3059b8]">Home</NavLink>
            <NavLink to="/allBooks" className="hover:text-[#3059b8]">Shop</NavLink>
            <NavLink to="/blog" className="hover:text-[#3059b8]">Blog</NavLink>
            <NavLink to="/aboutUs" className="hover:text-[#3059b8]">About</NavLink>
            <NavLink to="/contactUs" className="hover:text-[#3059b8]">Contact</NavLink>
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-6 text-xl text-gray-700">

            <NavLink to="/wishlist">
              <FaHeart className="hover:text-[#3059b8] cursor-pointer" />
            </NavLink>

            <NavLink to="/cart" className="relative cursor-pointer">
              <FaShoppingCart className="hover:text-[#3059b8]" />
              <span className="absolute -top-2 -right-3 bg-[#3059b8] text-white text-xs px-1.5 rounded-full">
                3
              </span>
            </NavLink>

            <NavLink to="/login">
              <FaUser className="hover:text-[#3059b8] cursor-pointer" />
            </NavLink>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden px-6 pb-4 space-y-3 text-gray-700 font-medium">
            <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/allBooks" onClick={() => setOpen(false)}>Shop</NavLink>
            <NavLink to="/blog" onClick={() => setOpen(false)}>Blog</NavLink>
            <NavLink to="/aboutUs" onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/contactUs" onClick={() => setOpen(false)}>Contact</NavLink>

            <div className="flex gap-6 pt-3 text-xl">
              <NavLink to="/wishlist"><FaHeart /></NavLink>
              <NavLink to="/cart"><FaShoppingCart /></NavLink>
              <NavLink to="/logIn"><FaUser /></NavLink>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default NavBar;

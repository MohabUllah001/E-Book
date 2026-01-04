import React from "react";
import { NavLink } from "react-router-dom";
import logInImg from "../../../Pictures/LogIN.jpg";
import LogoImg from "../../../Pictures/LOGO.png";

const LogIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f2f7fb] px-4">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* ===== Left: Form Section ===== */}
        <div className="p-10 md:p-14 flex flex-col justify-center">
          <div className="flex w-[6vw] scale-170  ">
                       <img src={LogoImg} alt="Ebook Logo" />
                    </div>
          <p className="text-sm text-[#6D8196] mb-6">
            Welcome back !!!
          </p>

          <h1 className="text-3xl font-bold text-[#000080] mb-8">
            Log In
          </h1>

          <form className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm text-[#6D8196] mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="login@gmail.com"
                className="w-full px-4 py-3 rounded-lg 
                           bg-[#82C8E5]/30 text-[#000080]
                           focus:outline-none focus:ring-2
                           focus:ring-[#0047AB]"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm text-[#6D8196]">
                  Password
                </label>
                <span className="text-sm text-[#0047AB] cursor-pointer hover:underline">
                  Forgot Password?
                </span>
              </div>
              <input
                type="password"
                placeholder="************"
                className="w-full px-4 py-3 rounded-lg 
                           bg-[#82C8E5]/30 text-[#000080]
                           focus:outline-none focus:ring-2
                           focus:ring-[#0047AB]"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-36 bg-[#0047AB] text-white py-3 rounded-full
                         font-semibold hover:bg-[#000080] transition flex
                         items-center justify-center gap-2"
            >
              LOGIN →
            </button>
          </form>

          {/* Sign up */}
          <p className="text-sm text-[#6D8196] mt-8">
            Don’t have an account?{" "}
            <NavLink
              to="/signUp"
              className="text-[#0047AB] font-medium hover:underline transition"
            >
              Sign up for free
            </NavLink>
          </p>
        </div>

        {/* ===== Right: Illustration Section ===== */}
        <div className="hidden md:flex items-center justify-center bg-[#82C8E5]/40">
          <img
            src={logInImg}
            alt="Login Illustration"
            className="max-w-md"
          />
        </div>

      </div>
    </div>
  );
};

export default LogIn;

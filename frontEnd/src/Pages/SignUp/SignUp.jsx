import React from "react";
import { NavLink } from "react-router-dom";
import SignUpImg from "../../../Pictures/SignUp.png";
import LogoImg from "../../../Pictures/LOGO.png";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f2f7fb] px-4">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* ===== Left: Form Section ===== */}
        <div className="p-10 md:p-14 flex flex-col justify-center">
          <div className="flex w-[6vw] scale-160">
             <img src={LogoImg} alt="Ebook Logo" />
          </div>
          <p className="text-sm text-[#6D8196] mb-6">
            Create your account ✨
          </p>

          <h1 className="text-3xl font-bold text-[#000080] mb-8">
            Sign Up
          </h1>

          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm text-[#6D8196] mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg 
                           bg-[#82C8E5]/30 text-[#000080]
                           focus:outline-none focus:ring-2 
                           focus:ring-[#0047AB]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-[#6D8196] mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg 
                           bg-[#82C8E5]/30 text-[#000080]
                           focus:outline-none focus:ring-2 
                           focus:ring-[#0047AB]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-[#6D8196] mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full px-4 py-3 rounded-lg 
                           bg-[#82C8E5]/30 text-[#000080]
                           focus:outline-none focus:ring-2 
                           focus:ring-[#0047AB]"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm text-[#6D8196] mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full px-4 py-3 rounded-lg 
                           bg-[#82C8E5]/30 text-[#000080]
                           focus:outline-none focus:ring-2 
                           focus:ring-[#0047AB]"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-40 bg-[#0047AB] text-white py-3 rounded-full
                         font-semibold hover:bg-[#000080] transition
                         flex items-center justify-center gap-2"
            >
              SIGN UP →
            </button>
          </form>

          {/* Login Link */}
          <p className="text-sm text-[#6D8196] mt-8">
            Already have an account?{" "}
            <NavLink
              to="/logIn"
              className="text-[#0047AB] font-semibold hover:underline"
            >
              Log in
            </NavLink>
          </p>
        </div>

        {/* ===== Right: Illustration Section ===== */}
        <div className="hidden md:flex items-center justify-center bg-[#82C8E5]/40">
          <img
            src={SignUpImg}
            alt="Register Illustration"
            className="max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;

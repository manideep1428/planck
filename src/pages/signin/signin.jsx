import { KeyIcon, Mail, User } from "lucide-react";
import React from "react";

export default function SignIn() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row">
      {/* Logo and Program Name */}
      <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
        <img src="/placeholder.svg?height=40&width=40" alt="Planck" className="h-10 w-10" />
        <p className="font-bold text-lg">Ambassador Program</p>
      </div>

      {/* Left side - Sign Up Form */}
      <div className="w-full lg:w-1/2 p-6 lg:p-12 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <h1 className="text-2xl font-semibold text-center lg:text-left">
            Please enter your account details
          </h1>

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium">
                Username/Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  className="w-full px-4 py-3 pr-10 bg-black rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <User className="absolute right-3 top-1/2 -translate-y-1/2 text-white" size={20} />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 pr-10 bg-black rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <KeyIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-white" size={20} />
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-sign-gradient text-white py-4 px-4 rounded-full hover:from-teal-500 hover:to-teal-700 transition duration-300"
            >
              Register
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-black text-gray-400">or</span>
            </div>
          </div>

          <button className="w-full border border-teal-500 text-teal-500  py-3 px-4 rounded-full  hover:text-black hover:bg-white transition duration-300">
            Login 
          </button>
        </div>
      </div>

      {/* Right side - Welcome Image (hidden on smaller screens) */}
      <div className="hidden lg:flex w-1/2 bg-black items-center justify-center">
        <div className="relative w-4/5 h-4/5">
          <img 
            src="/assets/Images/Form.png"
            alt="Welcome" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
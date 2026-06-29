import React from "react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [reshowPassword, setShowrePassword] = useState(false);
  return (
    <>
      <div className="min-h-screen bg-white ">
        {/* Top Section */}
        <div className="bg-[#111111] h-96 flex flex-col justify-center items-center px-6 rounded-b-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Sign Up</h1>
          <p className="text-white/70 mt-3">Please Signup to get started</p>
        </div>{" "}
        {/* Bottom Card */}
        <div className="-mt-10 bg-white rounded-t-3xl px-6 py-8 relative z-10 flex flex-col justify-center items-center">
          {/* SPAN + INPUT */}
          <div className="flex flex-col w-full md:w-[400px] lg:w-[700px]   gap-2">
            <span className="text-black font-thin text-sm p-1">NAME</span>
            <input
              type="text"
              placeholder="example@gmail.com"
              className="w-full  border bg-[#f0f5fa]  border-gray-300 rounded-lg px-4 py-6 focus:outline-none focus:border-[#ff7622]"
            />
          </div>
          <div className="flex flex-col gap-2 w-full md:w-[400px] lg:w-[700px]">
            <span className="text-black font-thin text-sm p-1">EMAIL</span>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full border bg-[#f0f5fa]  border-gray-300 rounded-lg px-4 py-6 focus:outline-none focus:border-[#ff7622]"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative  w-full md:w-[400px] lg:w-[700px]">
            <span className="text-black font-thin text-sm p-1">PASSWORD</span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="w-full border bg-[#f0f5fa] border-gray-300 rounded-lg px-4 py-6 pr-12 focus:outline-none focus:border-[#ff7622]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* RE ENTER PASSWORD */}
          <div className="relative  gap-2 w-full md:w-[400px] lg:w-[700px]">
            <span className="text-black font-thin text-sm p-1">
              Re-Type Password
            </span>
            <input
              type={reshowPassword ? "text" : "password"}
              placeholder="example@gmail.com"
              className="w-full  border bg-[#f0f5fa]  border-gray-300 rounded-lg px-4 py-6 focus:outline-none focus:border-[#ff7622]"
            />
            <button
              className="absolute right-4 top-1/2 translate-y-1/2 cursor-pointer "
              onClick={() => setShowrePassword(!reshowPassword)}
            >
              {reshowPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button className="mt-8 w-full cursor-pointer md:w-[400px] lg:w-[700px] rounded-xl bg-[#ff7622] py-4 text-white font-bold hover:bg-[#ff8650] transition-colors">
            SEND CODE
          </button>

          {/* Button */}
        </div>
      </div>
    </>
  );
};

export default SignupPage;

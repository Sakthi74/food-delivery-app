import React from "react";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Section */}
      <div className="bg-[#111111] h-96 flex flex-col justify-center items-center px-6 rounded-b-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Forgot Password
        </h1>
        <p className="text-white/70 mt-3">
          Please Signin to your existing account
        </p>
      </div>{" "}
      {/* Bottom Card */}
      <div className="-mt-10 bg-white rounded-t-3xl px-6 py-8 relative z-10">
        {/* SPAN + INPUT */}
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="text-gray-500 font-bold text-sm">EMAIL</span>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="w-full md:w-[400px] lg:w-[700px] border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#ff7622]"
          />
          <button className="mt-8 w-full cursor-pointer md:w-[400px] lg:w-[700px] rounded-xl bg-[#ff7622] py-4 text-white font-bold hover:bg-[#ff8650] transition-colors">
            SEND CODE
          </button>
        </div>

        {/* Button */}
      </div>
    </div>
  );
};

export default ForgotPassword;

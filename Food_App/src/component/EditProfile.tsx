import { React, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { profileContext } from "../Context/ProfileContext";

export interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  bio: string;
}

const EditProfile = () => {
  const context = useContext(profileContext);
  if (!context) {
    throw new Error("ProfileContext must be used inside ProfileDataProvider");
  }
  const { user, setUser } = context;

  function saveUserProfile(profile: UserProfile) {
    localStorage.setItem("user", JSON.stringify(user));
    alert("Profile saved successfully!");
  }

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white ">
      {/* Top Section */}
      <div className="flex items-center gap-4  p-9 w-screen md:w-[500px] lg:w-[500px]">
        <div
          onClick={() => navigate(-1)}
          className="p-3 bg-[#ECF0F4] rounded-full cursor-pointer"
        >
          <MdKeyboardArrowLeft size={20} />
        </div>
        <h1 className="text-gray-900 p-2 flex justify-center font-semibold text-md md:text-lg lg:text-xl">
          Edit Profile
        </h1>
      </div>
      <div className="flex justify-center items-center relative">
        <input
          type="image"
          className="w-24 h-24 object-cover border border-gray-300 p-3 rounded-full"
        />
      </div>

      {/* Bottom Card */}
      <div className="-mt-10 bg-transparent rounded-t-3xl px-6 py-8 relative z-10 flex flex-col justify-center items-center">
        {/* SPAN + INPUT */}
        <div className="flex flex-col w-full md:w-[400px] lg:w-[700px]   gap-2">
          <span className="text-black font-thin text-sm p-1">
            FULL NAME<sup className="text-red-500">*</sup>
          </span>
          <input
            type="text"
            placeholder="example@gmail.com"
            required
            value={user.fullName}
            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
            className="w-full  border bg-[#f0f5fa]  border-gray-300 rounded-lg px-4 py-6 focus:outline-none focus:border-[#ff7622]"
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-[400px] lg:w-[700px]">
          <span className="text-black font-thin text-sm p-1">
            EMAIL<sup className="text-red-500">*</sup>
          </span>
          <input
            type="email"
            placeholder="example@gmail.com"
            required
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full border bg-[#f0f5fa]  border-gray-300 rounded-lg px-4 py-6 focus:outline-none focus:border-[#ff7622]"
          />
        </div>

        {/* PH NO */}
        <div className="relative  w-full md:w-[400px] lg:w-[700px]">
          <span className="text-black font-thin text-sm p-1">
            PHONE NUMBER <sup className="text-red-500">*</sup>
          </span>
          <input
            type="number"
            placeholder="Enter phone number"
            required
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            className="w-full border bg-[#f0f5fa] border-gray-300 rounded-lg px-4 py-6 pr-12 focus:outline-none focus:border-[#ff7622]"
          />
        </div>

        {/* bio*/}
        <div className="relative  gap-2 w-full md:w-[400px] lg:w-[700px]">
          <span className="text-black font-thin text-sm p-1">
            BIO <strong className="text-red-500">*</strong>
          </span>
          <textarea
            placeholder="Enter bio"
            className="w-full h-56  border bg-[#f0f5fa]  border-gray-300 rounded-lg px-4 py-6 focus:outline-none focus:border-[#ff7622]"
            required
            value={user.bio}
            onChange={(e) => setUser({ ...user, bio: e.target.value })}
          />
        </div>
        <button
          className="mt-8 w-full cursor-pointer md:w-[400px] lg:w-[700px] rounded-xl bg-[#ff7622] py-4 text-white font-bold hover:bg-[#ff8650] transition-colors"
          onClick={() => saveUserProfile()}
        >
          SAVE
        </button>

        {/* Button */}
      </div>
    </div>
  );
};

export default EditProfile;

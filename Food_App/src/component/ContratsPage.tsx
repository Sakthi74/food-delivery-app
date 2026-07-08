import React from "react";
import congrats from "../assets/Images/congtrats.png";
import { useNavigate } from "react-router-dom";

function ContratsPage() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center px-4 py-6">
      <div className="w-full max-w-xl text-center">
        {/* Image */}
        <img
          src={congrats}
          alt="Congratulations"
          className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] mx-auto h-auto"
        />

        {/* Heading */}
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold">
          Congratulations!
        </h1>

        {/* Text */}
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          You have successfully made a payment.
        </p>

        <p className="text-gray-600 text-sm sm:text-base">
          Enjoy your service.
        </p>

        {/* Button */}
        <button
          className="mt-8 w-full sm:w-auto px-10 sm:px-16 py-3 bg-[#FF7622] text-white rounded-xl font-semibold hover:bg-orange-600 transition cursor-pointer"
          onClick={() => navigate("/track-order")}
        >
          TRACK ORDER
        </button>
      </div>
    </div>
  );
}

export default ContratsPage;

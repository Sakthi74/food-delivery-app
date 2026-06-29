import React from "react";
import { useState } from "react";
import pizza from "../assets/Images/pizza-removebg-preview.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { HeartPlus } from "lucide-react";
import { ChefHat } from "lucide-react";
import { Star } from "lucide-react";
import { Truck } from "lucide-react";
import { Clock } from "lucide-react";
import { Ham } from "lucide-react";

import { Carrot } from "lucide-react";
import { Broccoli } from "lucide-react";
import { EggOff } from "lucide-react";
import { HeartMinus } from "lucide-react";
import "../css/PizzaAnimation.css";

const Details = () => {
  const [count, setcount] = useState<number | undefined>(0);
  const [Selected, setSelected] = useState<string | undefined>("14");
  const [Fav, setFav] = useState<boolean | undefined>(false);
  return (
    <>
      <div className="relative flex  flex-col justify-start items-start">
        {/* backa arrow and detail div */}
        <div className="flex p-10 md:p-12 lg:p-16 items-start justify-start gap-4 md:gap-6 lg:gap-8 ">
          <div className="p-3 md:p-4 bg-[#ECF0F4] rounded-full cursor-pointer">
            <MdKeyboardArrowLeft size={20} />
          </div>

          <h1 className="text-gray-900 font-semibold text-md md:text-lg lg:text-xl p-1">
            Details
          </h1>
        </div>
        {/* Top div orange pizza image */}
        <div className="p-5 md:p-8 lg:p-10 w-full">
          <div className="bg-[#FFBF6D] rounded-3xl h-64 md:h-80 lg:h-96 relative">
            <img
              src={pizza}
              alt="Pizza"
              className="relative bottom-8 h-56 md:h-72 lg:h-72 rotate-[20deg] animate-slidePizza"
            />
            <h1 className="relative font-bold text-base md:text-lg text-white  shadow-2xl  text-center lg:text-xl left-1 top-1">
              Pizza Calzone European
            </h1>
            <div
              className={
                Fav
                  ? "bg-[#FFC684] p-2 md:p-3 cursor-pointer w-fit text-white  bg-red-500  rounded-2xl  relative ml-72 md:ml-[600px] lg:ml-[700px] bottom-9 "
                  : "bg-[#FFC684] p-2 md:p-3 cursor-pointer w-fit text-white   rounded-2xl ml-72 md:ml-[600px] lg:ml-[700px]  relative  bottom-9"
              }
              onClick={() => setFav(!Fav)}
            >
              {Fav ? (
                <HeartMinus className="" />
              ) : (
                <HeartPlus className="text-white" />
              )}
            </div>{" "}
          </div>
        </div>

        {/* chefhat div */}
        <div className="w-full">
          <div className="flex gap-2 border-1 border-gray-300 p-3 md:p-4 rounded-2xl w-fit ml-8 md:ml-10 ">
            <ChefHat className="text-[#DC6769] border-2 rounded-full border-red-400 border-double" />
            <h1 className="text-sm md:text-base lg:text-lg">
              Uttora Coffe House
            </h1>
          </div>
        </div>

        {/* description div */}
        <div className="w-full">
          <div className="ml-7 md:ml-10 p-3 md:p-4 ">
            <h1 className="text-black font-bold text-base md:text-lg lg:text-xl">
              Pizza Calzone European
            </h1>
            <p className="text-[#A0A5BA] md:text-base lg:text-lg">
              This is a pizza varitey that is topped with Tomato Sauce
            </p>
          </div>
        </div>

        {/* icons and size div */}
        <div className="w-full  ">
          <div className="ml-7 md:ml-10 p-3 md:p-4 gap-4 md:gap-6 text-[#FF7622] flex ">
            <div className="flex gap-3 ">
              <Star />
              <h1 className="font-bold text-black md:text-lg">4.7</h1>
            </div>

            <div className="flex gap-3 ">
              <Truck />
              <h1 className="text-black md:text-lg">Free</h1>
            </div>

            <div className="flex gap-3  ">
              <Clock />
              <h1 className="text-black md:text-lg">20 Mins</h1>
            </div>
          </div>
          {/* size */}
          <div className="flex w-full gap-2 md:gap-3">
            <p className="p-3 md:p-4 ml-8 md:ml-10 text-[#84868C] md:text-base lg:text-lg">
              SIZE :
            </p>

            <div
              className={
                Selected === "10"
                  ? "bg-[#F58D1D] text-white rounded-full p-3 md:p-4 w-fit cursor-pointer font-semibold flex items-center justify-center md:text-base"
                  : "bg-[#F0F5FA] rounded-full cursor-pointer p-3 md:p-4 w-fit font-semibold flex items-center justify-center md:text-base"
              }
              onClick={() => setSelected("10")}
            >
              10''
            </div>
            <div
              className={
                Selected === "14"
                  ? "bg-[#F58D1D] text-white rounded-full p-3 md:p-4 w-fit cursor-pointer font-semibold flex items-center justify-center md:text-base"
                  : "bg-[#F0F5FA] rounded-full cursor-pointer p-3 md:p-4 w-fit font-semibold flex items-center justify-center md:text-base"
              }
              onClick={() => setSelected("14")}
            >
              14''
            </div>
            <div
              className={
                Selected === "16"
                  ? "bg-[#F58D1D] text-white rounded-full p-3 md:p-4 w-fit cursor-pointer font-semibold flex items-center justify-center md:text-base"
                  : "bg-[#F0F5FA] rounded-full cursor-pointer p-3 md:p-4 w-fit font-semibold flex items-center justify-center md:text-base"
              }
              onClick={() => setSelected("16")}
            >
              16''
            </div>
          </div>
          <p className="p-3 md:p-4 ml-8 md:ml-10 text-[#84868C] md:text-base lg:text-lg">
            INGREDENTS:
          </p>

          {/* icons div */}
          <div className="flex text-[#FFA56E] p-4  w-full">
            <div className="bg-[#FFEBE4] rounded-full ml-8 md:ml-10 p-3 md:p-4">
              <Ham className="  font-bold text-[#FFA56E]" />
            </div>

            <div className="bg-[#FFEBE4] rounded-full ml-8 md:ml-10  p-3 md:p-4">
              <Carrot className="  font-bold text-[#FFA56E]" />
            </div>

            <div className="bg-[#FFEBE4] rounded-full ml-8 md:ml-10 p-3 md:p-4">
              <Broccoli className="  font-bold text-[#FFA56E]" />
            </div>

            <div className="bg-[#FFEBE4] rounded-full ml-8 md:ml-10 p-3 md:p-4">
              <EggOff className="  font-bold text-[#FFA56E]" />
            </div>
          </div>
        </div>

        {/* counter div */}
        <div className="flex bg-[#F0F5FA] w-full justify-between items-center px-6 md:px-10 lg:px-12 py-4 md:py-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            ${count * 16}
          </h1>
          <div className="flex bg-black rounded-3xl overflow-hidden">
            <button
              className="text-white bg-[#41414F] px-4 md:px-6 py-2 md:py-3"
              onClick={() => setcount(Math.max(0, count - 1))}
              disabled={count === 0}
            >
              -
            </button>
            <h1 className="text-white px-6 md:px-8 py-2 md:py-3 font-semibold">
              {count}
            </h1>
            <button
              className="text-white bg-[#41414F] px-4 md:px-6 py-2 md:py-3"
              onClick={() => setcount(count + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;

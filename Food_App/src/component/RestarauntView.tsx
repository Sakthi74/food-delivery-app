import React from "react";
import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Ellipsis } from "lucide-react";
import { Star } from "lucide-react";
import { Truck } from "lucide-react";
import { Clock } from "lucide-react";
import BurgerComponent from "./BurgerComponent";
import RestaurantData from "./RestrauntData";

import Itemfilter from "./Itemfilter";

const RestarauntView = () => {
  const [selected, setSelected] = useState<string | undefined>("14");
  return (
    <>
      <div>
        {/* backa arrow and detail div */}
        <div className="flex p-10 md:p-12 lg:p-16 items-start justify-between gap-4 md:gap-6 lg:gap-8 ">
          <div className="p-3 md:p-4 lg:p-3 bg-[#ECF0F4] rounded-full cursor-pointer">
            <MdKeyboardArrowLeft size={20} />
          </div>
          <h1 className="text-gray-900 font-semibold text-md md:text-lg lg:text-xl p-1">
            Restarunt View
          </h1>
          <div className="p-3 md:p-4 lg:p-3 bg-[#ECF0F4] rounded-full cursor-pointer">
            <Ellipsis />
          </div>
        </div>
      </div>
      <RestaurantData />
      <Itemfilter
        categories={[
          "Burger",
          "Sandwich",
          "Pizza",
          "Hotdogs",
          "French Fries    ",
        ]}
        selected={selected}
        onSelect={setSelected}
      />
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
        <h1 className="text-black font-bold  p-6">Burgers(10)</h1>
        <BurgerComponent />
      </div>
    </>
  );
};

export default RestarauntView;

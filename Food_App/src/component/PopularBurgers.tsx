import React, { useEffect, useState } from "react";
import { FiSearch, FiFilter, FiTruck, FiClock } from "react-icons/fi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import BurgerComponent from "./BurgerComponent";
import { FaPlus, FaRegStar } from "react-icons/fa";
import { SlidersVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PopularBurgers() {
  const [filter, setfilter] = useState<String>("Burgers");
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="px-4 py-6">
        <div className="flex items-center justify-between">
          <div
            className="p-3 bg-[#ECF0F4] rounded-full cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <MdKeyboardArrowLeft size={20} />
          </div>

          <select className="px-4 py-4 border rounded-full cursor-pointer hover:bg-orange-400 hover:text-white outline-none  font-bold ">
            <option className="font-bold rounded-xl cursor-pointer">
              Burger
            </option>
            <option className="font-bold cursor-pointer">Pizza</option>
            <option className="font-bold ">Sandwich</option>
          </select>

          <div className="flex gap-3">
            <div className="p-4 text-white rounded-full bg-[#121223] cursor-pointer">
              <FiSearch size={18} />
            </div>

            <div className="p-3 bg-[#ECF0F4] rounded-full cursor-pointer">
              <SlidersVertical />
            </div>
          </div>
        </div>
      </div>

      <BurgerComponent />

      {/* Open Restaurants */}
    </div>
  );
}

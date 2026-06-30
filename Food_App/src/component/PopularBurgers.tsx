import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { SlidersVertical } from "lucide-react";
import BurgerComponent from "./BurgerComponent";
import FilterSearch from "./FilterSearch";

export default function PopularBurgers() {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Navbar */}
      <div className="px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Back Button */}
          <div className="p-3 bg-[#ECF0F4] rounded-full cursor-pointer">
            <MdKeyboardArrowLeft size={20} />
          </div>

          {/* Category */}
          <select className="px-4 py-3 border rounded-full font-bold outline-none hover:bg-[#FF7622] hover:text-white transition">
            <option>Burger</option>
            <option>Pizza</option>
            <option>Sandwich</option>
          </select>

          {/* Search & Filter */}
          <div className="flex gap-3">
            <div className="p-3 bg-[#121223] text-white rounded-full cursor-pointer">
              <FiSearch size={18} />
            </div>

            <div
              onClick={() => setShowFilter(true)}
              className="p-3 bg-[#ECF0F4] rounded-full cursor-pointer"
            >
              <SlidersVertical size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Burger Section */}
      <BurgerComponent />

      {/* Filter Popup */}
      {showFilter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md">
            <FilterSearch onClose={() => setShowFilter(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

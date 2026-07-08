import { useState } from "react";

import BurgerComponent from "./BurgerComponent";

import { ChevronLeft, SlidersVertical, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FilterSearch from "./FilterSearch";

export default function PopularBurgers() {
  const [filter, setfilter] = useState<string>("All");
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative bg-white">
      {/* Navbar */}
      <div style={{ display: showFilter ? "none" : "block" }}>
        <div className="px-4 py-6">
          <div className="flex items-center justify-between">
            <div
              className="p-3 bg-[#ECF0F4] rounded-full cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <ChevronLeft size={20} />
            </div>

            <select
              className="px-4 py-4 border rounded-full cursor-pointer hover:bg-orange-400  hover:text-white outline-none font-bold"
              value={filter}
              onChange={(e) => setfilter(e.target.value)}
            >
              <option>All</option>
              <option>Burger</option>
              <option>Pizza</option>
              <option>Sandwich</option>
            </select>

            <div className="flex gap-3">
              <div
                className="p-4 text-white rounded-full bg-[#121223] cursor-pointer"
                onClick={() => navigate("/search-bar")}
              >
                <Search size={18} />
              </div>

              <div
                className="p-3 bg-[#ECF0F4] rounded-full cursor-pointer"
                onClick={() => setShowFilter(true)}
              >
                <SlidersVertical />
              </div>
            </div>
          </div>
        </div>

        <BurgerComponent filter={filter} />
      </div>
      <div className="absolute top-[0px]">
        {showFilter && (
          <div
            className="inset-0 z-[999px] flex items-end justify-center bg-black/40"
            onClick={() => setShowFilter(false)}
          >
            <div
              className="w-full max-w-md bg-white rounded-t-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <FilterSearch onClose={() => setShowFilter(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

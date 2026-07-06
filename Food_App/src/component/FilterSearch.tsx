import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Itemfilter from "./Itemfilter";

interface FilterSearchProps {
  onClose: () => void;
}

function FilterSearch({ onClose }: FilterSearchProps): React.JSX.Element {
  const [selected, setSelected] = useState<string | undefined>("Delivery");
  const [selectedDollar, setSelectDollar] = useState<string | undefined>("$");
  const [rating, setRating] = useState(0);

  return (
    <div className="bg-white rounded-2xl shadow-2xl w-full max-h-[90vh] overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b">
        <h2 className="text-lg font-semibold">Filter your search</h2>

        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
        >
          <IoClose size={22} />
        </button>
      </div>

      {/* Offers */}
      <div className="px-5 py-4">
        <p className="text-xs font-semibold text-gray-500 mb-3">OFFERS</p>

        <Itemfilter
          className="border-[#EFEFEF]"
          categories={[
            "Delivery",
            "Pickup",
            "Offer",
            "Online payment available",
          ]}
          selected={selected}
          onSelect={setSelected}
        />
      </div>

      {/* Delivery Time */}
      <div className="px-5 py-4">
        <p className="text-xs font-semibold text-gray-500 mb-3">
          DELIVERY TIME
        </p>

        <Itemfilter
          className="border-[#EFEFEF]"
          categories={["10-20 mins", "20 mins", "30 mins"]}
          selected={selected}
          onSelect={setSelected}
        />
      </div>

      {/* Pricing */}
      <div className="px-5 py-4">
        <p className="text-xs font-semibold text-gray-500 mb-4">PRICING</p>

        <div className="flex flex-wrap gap-3">
          <button
            className={`${selectedDollar === "$" ? "border-2 bg-[#FF7622] w-11 h-11 rounded-full  text-white " : "border-2 bg-[#ffff] w-11 h-11 rounded-full  text-gray-500"}`}
            onClick={() => setSelectDollar("$")}
          >
            $
          </button>

          <button
            className={`${selectedDollar === "$$" ? "border-2 bg-[#FF7622] w-11 h-11 rounded-full  text-white " : "border-2 bg-[#ffff] w-11 h-11 rounded-full  text-gray-500"}`}
            onClick={() => setSelectDollar("$$")}
          >
            $$
          </button>

          <button
            className={`${selectedDollar === "$$$" ? "border-2 bg-[#FF7622] w-11 h-11 rounded-full  text-white " : "border-2 bg-[#ffff] w-11 h-11 rounded-full  text-gray-500"}`}
            onClick={() => setSelectDollar("$$$")}
          >
            $$$
          </button>
        </div>
      </div>

      {/* Rating */}
      <div className="px-5 py-4">
        <p className="text-xs font-semibold text-gray-500 mb-4">RATING</p>

        <div className="flex flex-wrap gap-3">
          {[1, 1.5, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className="w-11 h-11 rounded-full border border-[#EFEFEF] flex items-center justify-center"
            >
              <FaStar
                className={`text-lg ${
                  star <= rating ? "text-[#FF7622]" : "text-gray-300"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="p-5">
        <button className="w-full py-4 rounded-2xl bg-[#FF7622] text-white font-semibold hover:bg-orange-600 transition">
          FILTER
        </button>
      </div>
    </div>
  );
}

export default FilterSearch;

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Itemfilter from "./Itemfilter";

function FilterSearch() {
  const [selected, setSelected] = useState<string | undefined>("Delivery");
  const [rating, setRating] = useState(0);

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl">
      {/* Header */}
      <div className="flex items-center justify-between p-5">
        <p className="text-base font-semibold">Filter your search</p>

        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
          <IoClose size={22} />
        </button>
      </div>

      {/* Offers */}
      <div className="px-5">
        <p className="text-xs font-medium text-gray-500 mb-3">OFFERS</p>

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
      <div className="px-5 mt-6">
        <p className="text-xs font-medium text-gray-500 mb-3">DELIVERY TIME</p>

        <Itemfilter
          className="border-[#EFEFEF]"
          categories={["10-20 mins", "20 mins", "30 mins"]}
          selected={selected}
          onSelect={setSelected}
        />
      </div>

      {/* Pricing */}
      <div className="px-5 mt-6">
        <p className="text-xs font-medium text-gray-500 mb-4">PRICING</p>

        <div className="flex gap-4 flex-wrap">
          <button className="w-11 h-11 rounded-full border border-[#EFEFEF] flex items-center justify-center">
            $
          </button>

          <button className="w-11 h-11 rounded-full bg-[#FF7622] text-white flex items-center justify-center">
            $$
          </button>

          <button className="w-11 h-11 rounded-full border border-[#EFEFEF] flex items-center justify-center">
            $$$
          </button>
        </div>
      </div>

      {/* Rating */}
      <div className="px-5 mt-6">
        <p className="text-xs font-medium text-gray-500 mb-4">RATING</p>

        <div className="flex gap-3 flex-wrap">
          {[1, 2, 3, 4, 5].map((star) => (
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

      {/* Filter Button */}
      <div className="p-5">
        <button className="w-full py-4 rounded-2xl bg-[#FF7622] text-white font-semibold hover:bg-orange-600 transition">
          FILTER
        </button>
      </div>
    </div>
  );
}

export default FilterSearch;

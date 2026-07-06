import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface orderItem {
  id: number;
  name: string;
  restaurant: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
}

function MyOrdersOpening() {
  const [orders, setOrdersOngoing] = useState<orderItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart") || "[]");
    setOrdersOngoing(data);
  }, []);

  return (
    <div className="max-w-screen flex flex-col justify-center mx-auto bg-white">
      {/* Header */}
      <div className="flex justify-between items-center p-4 w-full sm:p-6">
        <div className="flex items-center gap-3">
          <button
            className="p-2 bg-gray-100 rounded-full"
            onClick={() => navigate("/cart")}
          >
            <MdKeyboardArrowLeft size={24} />
          </button>

          <h2 className="text-lg font-semibold">My Orders</h2>
        </div>

        <button className="p-2 bg-gray-100 rounded-full">
          <BsThreeDots size={24} className="text-gray-700" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex">
        <button className="w-1/2 py-3 text-orange-500 border-b-2 border-orange-500 font-medium">
          Ongoing
        </button>

        <button
          className="w-1/2 py-3 text-gray-500 border-b border-gray-300 font-medium"
          onClick={(e) => {
            e.stopPropagation();
            navigate("/history");
          }}
        >
          History
        </button>
      </div>

      {/* Orders */}
      <div className="p-4 space-y-5">
        {orders.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl p-4 border border-gray-100 shadow-sm md:max-w-lg lg:max-w-xl md:mx-auto lg:mx-auto"
          >
            {/* Top Section */}
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="text-sm text-gray-500">{item.category}</p>

                <div className="flex gap-3 mt-3">
                  <img
                    src={item.image}
                    alt={item.restaurant}
                    className="w-16 h-16 rounded-xl object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">
                      {item.restaurant}
                    </h3>

                    <p className="text-sm mt-1">
                      <span className="font-bold">
                        ${item.price * item.quantity}
                      </span>

                      <span className="text-gray-400">
                        {" "}
                        | {item.quantity} items
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <span className="text-gray-400 text-xs sm:text-sm border-b border-gray-300">
                {item.id}
              </span>
            </div>

            {/* Buttons */}
            <div className="mt-5 flex flex-col sm:flex-row md:flex-row lg:flex-row gap-3">
              <button className="cursor-pointer w-full sm:flex-1 md:flex-1 lg:flex-1 py-2 rounded-xl bg-[#FF7622] text-white font-medium">
                Track Order
              </button>

              <button className="cursor-pointer w-full sm:flex-1 md:flex-1 lg:flex-1 py-2 rounded-xl border-2 border-[#FF7622] text-[#FF7622] font-medium">
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyOrdersOpening;

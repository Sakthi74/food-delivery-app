import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function MyOrdersHistory() {
  const [ongoing, setOngoing] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOngoingOrders = async () => {
      try {
        const res = await fetch("http://localhost:3002/MyOrderOngoing");

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setOngoing(data);
      } catch (err) {
        console.log((err as Error).message);
      }
    };

    fetchOngoingOrders();
  }, []);

  return (
    <div className="max-w-screen flex flex-col  mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-4 sm:p-6">
        <div className="flex items-center gap-3">
          <button
            className="p-2 bg-gray-100 cursor-pointer rounded-full"
            onClick={() => navigate("/track-order")}
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
        <button
          className="w-1/2 py-3 text-gray-500 border-b border-gray-300 font-medium"
          onClick={() => navigate("/trackorder")}
        >
          Ongoing
        </button>

        <button className="w-1/2 py-3 text-orange-500 border-b-2 border-orange-500 font-medium">
          History
        </button>
      </div>

      {/* Orders */}
      <div className="p-4 space-y-5">
        {ongoing.map((item) => (
          <div key={item.id} className="rounded-2xl p-4">
            {/* Category & Status */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm font-medium text-gray-600">
                {item.category}
              </p>

              <span
                className={`text-sm font-semibold capitalize ${
                  item.buttons.status === "completed"
                    ? "text-green-500"
                    : item.buttons.status === "cancelled"
                      ? "text-red-500"
                      : "text-orange-500"
                }`}
              >
                {item.buttons.status}
              </span>
            </div>

            {/* Order Details */}
            <div className="flex justify-between items-start gap-3">
              <div className="flex gap-3 flex-1">
                <img
                  src={item.restaurantImage}
                  alt={item.restaurantName}
                  className="w-16 h-16 rounded-xl object-cover"
                />

                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    {item.restaurantName}
                  </h3>

                  <p className="text-sm mt-1">
                    <span className="font-bold">${item.price}</span>

                    <span className="text-gray-400"> | {item.items} items</span>
                  </p>
                </div>
              </div>

              <span className="text-xs sm:text-sm text-gray-400 border-b border-gray-300 whitespace-nowrap">
                {item.orderId}
              </span>
            </div>

            {/* Buttons */}
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <button className="w-full sm:flex-1 py-2 rounded-xl bg-[#FF7622] text-white font-medium">
                Rate
              </button>

              <button className="w-full sm:flex-1 py-2 rounded-xl border-2 border-[#FF7622] text-[#FF7622] font-medium">
                Re-Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyOrdersHistory;

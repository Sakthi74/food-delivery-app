import React, { useState, useEffect } from "react";
import { FaRegStar } from "react-icons/fa";
import { FiTruck, FiClock } from "react-icons/fi";

interface Restaurant {
  id: number;
  name: string;
  rating: number;
  deliveryFee: string;
  deliveryTime: string;
  description: string;
  image: string;
  category: string;
}

const RestaurantData = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/restaurants")
      .then((res) => res.json())
      .then((data: Restaurant[]) => setRestaurants(data))
      .catch((err: Error) => console.log(err));
  }, []);

  return (
    <div>
      <div className="px-4 py-10">
        <h1 className="mb-6 text-2xl font-bold">Open Restaurants</h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {restaurants.map((rest) => (
            <div
              key={rest.id}
              className="overflow-hidden transition-shadow duration-300 bg-white shadow-md rounded-3xl hover:shadow-lg"
            >
              <img
                className="object-cover w-full h-64"
                src={rest.image}
                alt={rest.name}
              />

              <div className="p-5">
                <h2 className="text-xl font-semibold">{rest.name}</h2>

                <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <FaRegStar />
                    <span>{rest.rating}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <FiTruck />
                    <span>{rest.deliveryFee}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <FiClock />
                    <span>{rest.deliveryTime}</span>
                  </div>
                </div>

                <p className="mt-4 text-gray-500">{rest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantData;

import { ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import { FaRegStar } from "react-icons/fa";
import { FiTruck, FiClock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSelectedrest = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Sakthi74/food-app-api/master/db.json"
        );

        const data: Restaurant[] = await response.json();

        setRestaurants(data.restaurants);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSelectedrest();
  }, []);

  return (
    <div className="md:p-8 lg:p-8 p-0">
      <div className="px-4 py-10 ">
        <div className="flex justify-between">
          <div>
            {" "}
            <h1 className="mb-6 text-2xl font-bold">Open Restaurants</h1>
          </div>
          <div className="flex">
            <div> See All</div>{" "}
            <div>
              {" "}
              <ChevronRight />{" "}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {restaurants.map((rest) => (
            <div
              key={rest.id}
              onClick={() => navigate(`/restaurant/${rest.id}`)}
              className="overflow-hidden bg-white transition duration-300 cursor-pointer hover:shadow-lg rounded-2xl"
            >
              <img
                className="object-cover w-full h-48 rounded-2xl"
                src={rest.image}
                alt={rest.name}
              />

              <div className="p-5">
                <h2 className="text-xl font-semibold">{rest.name}</h2>

                <p className="mt-4 text-gray-500">{rest.description}</p>
                <div className="flex flex-wrap gap-4 mt-4 text-sm text-orange-400 cursor-pointer">
                  <div className="flex font-bold  items-center gap-1">
                    <FaRegStar />
                    <span className="font-bold text-black">{rest.rating}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <FiTruck />
                    <span className="text-black">{rest.deliveryFee}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <FiClock />
                    <span className="text-black">{rest.deliveryTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantData;

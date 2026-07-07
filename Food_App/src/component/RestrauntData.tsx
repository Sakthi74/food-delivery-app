import { Clock, Star, Truck } from "lucide-react";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

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
  const location = useLocation();

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
        {location.pathname === "/restrauntdata-page" ? (
          <h1 className="text-2xl font-bold mt-8">Open Restaurants</h1>
        ) : null}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {restaurants.map((rest) => (
            <div
              key={rest.id}
              onClick={() => navigate(`/restaurant/${rest.id}`)}
              className="overflow-hidden bg-white transition duration-300 cursor-pointer rounded-2xl"
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
                    <Star />
                    <span className="font-bold text-black">{rest.rating}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Truck />
                    <span className="text-black">{rest.deliveryFee}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Clock />
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

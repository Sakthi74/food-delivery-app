import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, Ellipsis, Star, Truck, Clock } from "lucide-react";
import BurgerComponent from "./BurgerComponent";

import Itemfilter from "./Itemfilter";

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

const RestarauntView = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | undefined>("Burger");

  const [filter, setfilter] = useState<string>("Burger");
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchRestaurant = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://raw.githubusercontent.com/Sakthi74/food-app-api/master/db.json"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        const restaurant = data.restaurants.find(
          (item: Restaurant) => item.id === Number(id)
        );

        if (!restaurant) {
          throw new Error("Restaurant not found");
        }

        setRestaurant(restaurant);
      } catch (error) {
        console.error(error);
        setRestaurant(null);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [id]);
  if (loading) {
    return <div className="p-10 text-center">Loading restaurant...</div>;
  }

  if (!restaurant) {
    return (
      <div className="p-10 text-center">
        Restaurant not found.
        <button
          onClick={() => navigate(-1)}
          className="block mx-auto mt-4 text-orange-500 underline"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="px-4 md:px-8 lg:px-10 pt-6">
        {/* back arrow / title / ellipsis row */}
        <div className="flex items-center justify-between gap-4">
          <div
            onClick={() => navigate(-1)}
            className="p-3 bg-[#ECF0F4] rounded-full cursor-pointer"
          >
            <ChevronLeft size={20} />
          </div>
          <h1 className="text-gray-900 font-semibold text-md md:text-lg lg:text-xl">
            Restaurant View
          </h1>
          <div className="p-3 bg-[#ECF0F4] rounded-full cursor-pointer">
            <Ellipsis />
          </div>
        </div>

        {/* restaurant image */}
        <img
          className="object-cover w-full h-56 md:h-72 rounded-2xl mt-6"
          src={restaurant.image}
          alt={restaurant.name}
        />

        {/* name + description */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-5">
          {restaurant.name}
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          {restaurant.description}
        </p>

        {/* rating / delivery / time row */}
        <div className="flex items-center gap-5 p-3 md:gap-6 mt-4 text-[#FF7622]">
          <div className="flex items-center gap-2">
            <Star size={18} />
            <span className="font-semibold text-black md:text-lg">
              {restaurant.rating}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Truck size={18} />
            <span className="text-black md:text-lg">
              {restaurant.deliveryFee}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span className="text-black md:text-lg">
              {restaurant.deliveryTime}
            </span>
          </div>
        </div>
      </div>

      <Itemfilter
        categories={[
          "Burger",
          "Sandwich",
          "Pizza",
          "Hotdogs",
          "French Fries    ",
        ]}
        selected={selected}
        onSelect={setSelected}
      />

      <div className="w-full ">
        <BurgerComponent filter={selected} />
      </div>
    </>
  );
};

export default RestarauntView;

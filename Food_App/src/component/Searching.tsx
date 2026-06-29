import { React, useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiClock, FiSearch, FiTruck } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";

interface Category {
  id: number;
  name: string;
  startingPrice: number;
  image: string;
}

interface Restaurant {
  id: number;
  name: string;
  rating: number;
  deliveryFee: string;
  deliveryTime: string;
  description: string;
  image: string;
}
const Searching = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((res) => res.json())
      .then((data: Category[]) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/restaurants")
      .then((res) => res.json())
      .then((data: Restaurant[]) => setRestaurants(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-5 md:px-8">
            <div className="flex items-center gap-4">
              <RxHamburgerMenu className="text-3xl cursor-pointer" />

              <div className="flex flex-col">
                <span className="text-xs font-semibold text-orange-500">
                  DELIVER TO
                </span>
              </div>
            </div>
            <div className="text-3xl cursor-pointer rounded-full bg-black p-2 text-white">
              <FiShoppingBag />
            </div>
          </div>
        </div>
        <div className="px-4 md:px-8">
          <h1 className="text-2xl font-bold md:text-4xl">
            Hey Halal, Good Afternoon!
          </h1>
        </div>

        {/* Search */}
        <div className="relative px-4 mt-6 md:px-8">
          <FiSearch className="absolute text-xl text-gray-400 left-8 top-1/2 -translate-y-1/2" />

          <input
            type="text"
            placeholder="Search dishes, restaurants"
            className="w-800px h-12 pl-12 pr-4 bg-[#f6f6f6] border rounded-2xl shadow-sm outline-none focus:ring-2 focus:ring-orange-400 md:h-14"
          />
        </div>

        <div className="px-4 mt-10 md:px-8">
          <h2 className="mb-5 text-2xl font-bold">All Categories</h2>

          <div className="flex gap-5 pb-3 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <div
                key={category.id}
                className="min-w-[200px] sm:min-w-[220px] md:min-w-[240px] bg-white rounded-3xl shadow-lg p-4 flex-shrink-0 hover:shadow-xl transition"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-40 rounded-2xl sm:h-48 md:h-56"
                />

                <h3 className="mt-4 text-lg font-semibold">{category.name}</h3>

                <div className="flex justify-between mt-2 text-gray-600">
                  <span>Starting</span>
                  <span className="font-bold text-orange-500">
                    ${category.startingPrice}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Restaurants */}
        <div className="px-4 py-10 md:px-8">
          <h2 className="mb-6 text-2xl font-bold">Open Restaurants</h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="overflow-hidden transition duration-300 bg-white shadow-lg rounded-3xl hover:shadow-2xl"
              >
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="object-cover w-full h-52"
                />

                <div className="p-5">
                  <h3 className="text-xl font-semibold">{restaurant.name}</h3>

                  <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <FaRegStar className="text-yellow-500" />
                      <span>{restaurant.rating}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <FiTruck />
                      <span>{restaurant.deliveryFee}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <FiClock />
                      <span>{restaurant.deliveryTime}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-500">{restaurant.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Searching;

import React, { useEffect, useState } from "react";
import { FiClock, FiSearch, FiShoppingBag, FiTruck } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegStar } from "react-icons/fa";
import AccessLoaction from "./AccessLoaction";
import useNavigate from "react-router-dom"


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
  category: string;
}

function Allcategories1() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const navigate=useNavigate()

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
//navigating function
  function routing(path: string) {
    navigate(path);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-5 sm:px-6 lg:px-10">
        <div className="flex items-center gap-4">
          <RxHamburgerMenu className="text-2xl cursor-pointer sm:text-3xl" />

          <div>
            <p className="text-xs font-bold text-orange-500">DELIVER TO</p>

            <select className="bg-transparent text-sm font-medium outline-none cursor-pointer">
              <option>Halal Lab Office</option>
              <option>Home</option>
              <option>Office</option>
            </select>
          </div>
        </div>

        <FiShoppingBag className="text-2xl cursor-pointer sm:text-3xl" />
      </div>

      {/* Greeting */}
      <div className="px-4 sm:px-6 lg:px-10">
        <h1 className="text-2xl font-bold sm:text-3xl lg:text-5xl">
          Hey Halal, Good Afternoon!
        </h1>
      </div>

      {/* Search */}
      <div className="relative px-4 mt-8 sm:px-6 lg:px-10">
        <FiSearch className="absolute left-8 sm:left-10 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

        <input
          type="text"
          placeholder="Search dishes, restaurants"
          className="w-full h-12 rounded-2xl border bg-white pl-12 pr-4 shadow-md outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* Categories Heading */}
      <div className="flex items-center justify-between px-4 mt-10 sm:px-6 lg:px-10">
        <h2 className="text-2xl font-bold">All Categories</h2>

        <button className="font-semibold text-orange-500" onClick={()=>routing("/popularburgers")}>See All</button>
      </div>

      {/* Categories */}
      <div className="overflow-x-auto px-4 py-6 sm:px-6 lg:px-10">
        <div className="flex gap-5 w-max">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex-shrink-0 bg-white rounded-3xl shadow-lg p-5 hover:shadow-xl transition duration-300 w-52"
            >
              <div className="flex items-center gap-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold text-lg">{category.name}</h3>

                  <p className="text-gray-500 text-sm">
                    From ${category.startingPrice}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Restaurants */}
      <div className="px-4 py-8 sm:px-6 lg:px-10">
        <h2 className="mb-6 text-2xl font-bold">Open Restaurants</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="overflow-hidden transition duration-300 bg-white shadow-lg rounded-3xl hover:shadow-2xl"
            >
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="object-cover w-full h-52 sm:h-56"
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

                <p className="mt-4 text-gray-500 text-sm leading-6">
                  {restaurant.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Allcategories1;

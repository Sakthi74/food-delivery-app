import React, { useEffect, useState } from "react";
import { FiSearch, FiFilter, FiTruck, FiClock } from "react-icons/fi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaPlus, FaRegStar } from "react-icons/fa";

interface Burger {
  id: number;
  name: string;
  restaurant: string;
  price: number;
  image: string;
  category: string;
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

function PopularBurgers(): React.JSX.Element {
  const [burgers, setBurger] = useState<Burger[]>([]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/popularBurgers")
      .then((res) => res.json())
      .then((data: Burger[]) => setBurger(data))
      .catch((err: Error) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/restaurants")
      .then((res) => res.json())
      .then((data: Restaurant[]) => setRestaurants(data))
      .catch((err: Error) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="p-3 bg-[#ECF0F4] rounded-full cursor-pointer">
            <MdKeyboardArrowLeft size={20} />
          </div>

          <select className="px-4 py-2 border rounded-lg outline-none">
            <option>Burger</option>
            <option>Pizza</option>
            <option>Sandwich</option>
          </select>

          <div className="flex gap-3">
            <div className="p-3 text-white rounded-full bg-[#121223] cursor-pointer">
              <FiSearch size={18} />
            </div>

            <div className="p-3 bg-[#ECF0F4] rounded-full cursor-pointer">
              <FiFilter size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* Popular Burgers */}
      <div className="px-4">
        <h1 className="mb-6 text-2xl font-bold">Popular Burgers</h1>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {burgers.map((burger) => (
            <div
              key={burger.id}
              className="p-4 transition-shadow duration-300 bg-white shadow-md rounded-3xl hover:shadow-lg"
            >
              <img
                className="object-cover w-full h-56 rounded-2xl"
                src={burger.image}
                alt={burger.name}
              />

              <h2 className="mt-4 text-lg font-semibold">{burger.name}</h2>

              <p className="mt-1 text-gray-500">{burger.restaurant}</p>

              <div className="flex items-center justify-between mt-4">
                <p className="text-lg font-bold text-[#121223]">
                  ₹{burger.price}
                </p>

                <button className="p-3 text-white transition-colors bg-[#F58D1D] rounded-full hover:bg-orange-600">
                  <FaPlus />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Open Restaurants */}
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
}

export default PopularBurgers;

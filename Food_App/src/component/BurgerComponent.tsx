import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";

const BurgerComponent = () => {
  interface Burger {
    id: number;
    name: string;
    restaurant: string;
    price: number;
    image: string;
    category: string;
  }

  const [burgers, setBurger] = useState<Burger[]>([]);

  // FIX: Wrap the fetch logic inside useEffect
  useEffect(() => {
    fetch("http://localhost:3001/popularBurgers")
      .then((res) => res.json())
      .then((data: Burger[]) => setBurger(data))
      .catch((err: Error) => console.log(err));
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default BurgerComponent;

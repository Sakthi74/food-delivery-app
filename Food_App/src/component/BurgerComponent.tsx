import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Burger {
  id: number;
  name: string;
  restaurant: string;
  price: number;
  image: string;
  category: string;
}

interface Props {
  filter: string;
}

const BurgerComponent = ({ filter }: Props) => {
  const [burgers, setBurger] = useState<Burger[]>([]);
  const navigate = useNavigate();

  function routing(path: string) {
    navigate(path);
  }

  useEffect(() => {
    const fetchBurgers = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Sakthi74/food-app-api/master/db.json"
        );
        const data: Burger[] = await response.json();
        setBurger(data.popularBurgers);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBurgers();
  }, []);

  const filteredItems =
    filter === "All"
      ? burgers
      : burgers.filter((item) => item.category === filter);

  //localstorage
  function handleAddToCart(burger: Burger) {
    //geting item
    const getItem = JSON.parse(localStorage.getItem("cart") || "[]");

    // check it is existing

    const IsExisting = getItem.find((item) => burger.id === item.id);
    // if not existing then push
    if (!IsExisting) {
      getItem.push({ ...burger, quantity: 1 });
    } else {
      IsExisting.quantity++;
    }

    //set item
    localStorage.setItem("cart", JSON.stringify(getItem));
    //navigate
    navigate("/cart");
  }
  return (
    <div className="md:p-8 lg:p-8 p-0">
      <div className="px-4">
        <h1 className="text-2xl font-bold p-2">Popular {filter}</h1>
        <h1 className="text-black font-bold p-2">
          {filter} ({filteredItems.length})
        </h1>

        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4 md:grid-cols-3">
          {filteredItems.map((burger) => (
            <div
              key={burger.id}
              className="rounded-2xl bg-white p-3 shadow-md transition-shadow duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => {
                routing(`/details`);
              }}
            >
              <img
                src={burger.image}
                alt={burger.name}
                className="h-32 w-full rounded-xl object-cover sm:h-40 md:h-48 lg:h-56"
              />

              <h2 className="mt-3 text-sm font-semibold sm:text-base md:text-lg">
                {burger.name}
              </h2>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                {burger.restaurant}
              </p>

              <div className="mt-3 flex items-center justify-between">
                <p className="text-sm font-bold text-[#121223] sm:text-base md:text-lg">
                  ${burger.price.toFixed(2)}
                </p>

                <button
                  className="rounded-full bg-[#F58D1D] p-2 text-white transition-colors hover:bg-orange-600 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(burger);
                  }}
                >
                  <FaPlus size={14} />
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

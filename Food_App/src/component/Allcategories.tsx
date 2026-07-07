import React, { useEffect, useState } from "react";
// @ts-ignore: module may not be available in some environments
import { useNavigate } from "react-router-dom";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
<<<<<<< HEAD
import RestaurantData from "./RestrauntData";
import { useContext } from "react";
import { LocationContext } from "../Context/LocationContext";
import Sidebar from "./Sidebar";
import { TextAlignStart } from "lucide-react";

interface Category {
  id: number;
  name: string;
  startingPrice: number;
  image: string;
}

function Allcategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [popup, setpopup] = useState("none");
  const [search, setSearch] = useState("");
  const [sidebarpopup, setsidebar] = useState<boolean>(false);
  const { locationName } = useContext(LocationContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Sakthi74/food-app-api/master/db.json"
    )
      .then((res) => res.json())
      .then((data: { categories: Category[] }) =>
        setCategories(data.categories)
      )
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setpopup("block");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const filtered = categories.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen max-w-screen relative absolute bg-gray-50">
      {/* Main Container */}
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-5 md:px-8">
          <div className="flex items-center gap-4">
            <TextAlignStart
              className="text-3xl cursor-pointer"
              onClick={() => setsidebar(true)}
            />

            <div className="flex flex-col">
              <span className="text-xs font-semibold text-orange-500">
                DELIVER TO
              </span>

              <select className="text-sm font-medium bg-transparent outline-none ">
                <option className="">
                  {locationName.length > 30
                    ? locationName.slice(0, 30) + "..."
                    : locationName}
                </option>
                <option>Home</option>
                <option>Office</option>
              </select>
            </div>
          </div>

          <FiShoppingBag
            className="text-3xl cursor-pointer bg-black text-white rounded-full"
            onClick={() => navigate("/cart")}
          />
        </div>

        {/* Greeting */}
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search dishes, restaurants"
            className="w-full border-[#F6F6F6] h-16 pl-12 pr-4 bg-[#F6F6F6] border rounded-2xl outline-none focus:ring-2 focus:ring-orange-400 md:h-14"
          />
        </div>

        {/* Categories */}
        <div className="px-4 mt-10 md:px-8">
          <div className="flex justify-between">
            <h2 className="mb-5 text-2xl font-semibold">All Categories</h2>
            <h1
              className="cursor-pointer hover:text-green-400"
              onClick={() => navigate("/popularburgers")}
            >
              See All
            </h1>
          </div>

          <div className="flex gap-5 pb-3 overflow-x-auto scrollbar-hide">
            {filtered.map((category) => (
              <div
                key={category.id}
                className="min-w-[200px]  cursor-pointer sm:min-w-[220px] md:min-w-[240px] bg-white rounded-3xl shadow-lg p-4 flex-shrink-0 hover:shadow-xl transition"
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

        <RestaurantData />
      </div>
      {popup === "block" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="relative w-full max-w-2xl rounded-3xl bg-amber-500 p-6 md:p-10">
            {/* Close Button */}
            <button
              onClick={() => setpopup("none")}
              className="absolute top-4 right-4 rounded-full bg-amber-700 p-3 text-white cursor-pointer hover:bg-red-800 "
            >
              <IoClose size={24} />
            </button>

            <div className="text-center">
              <h1 className="text-3xl font-bold text-white md:text-5xl">
                Hurry Offers!
              </h1>

              <h2 className="mt-6 text-xl text-white md:text-3xl">#1243CD2</h2>

              <p className="mt-6 text-base text-white md:text-2xl">
                Use this coupon to get 25% discount
              </p>

              <button
                onClick={() => setpopup("none")}
                className="mt-8 w-full rounded-xl border-2 border-white py-4 text-lg font-semibold text-amber-500 hover:bg-amber-500 bg-white hover:text-white cursor-pointer"
              >
                GOT IT
              </button>
            </div>
          </div>
        </div>
      )}
      <div>
        <Sidebar sidebarpopup={sidebarpopup} setSidebar={setsidebar} />
      </div>
    </div>
  );
}

export default Allcategories;

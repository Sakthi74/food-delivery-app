import { useEffect, useState } from "react";
import { FiSearch, FiShoppingBag, FiX } from "react-icons/fi";
import { ChevronLeft } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Restaurant {
  id: number;
  name: string;
  rating: number;
  image: string;
}

interface PopularItem {
  id: number;
  name: string;
  image: string;
  category: string;
}

interface FilterSearchProps {
  onClose: () => void;
}

const RECENT_KEYWORDS = ["Burger", "Sandwich", "Pizza", "Sandwich"];

const Searching = ({ onClose }: FilterSearchProps) => {
  const [search, setSearch] = useState("Pizza");
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [popularItems, setPopularItems] = useState<PopularItem[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const cartSize = JSON.parse(localStorage.getItem("cartlen") || "0");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Sakthi74/food-app-api/master/db.json"
    )
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(
        (data: {
          restaurants: Restaurant[];
          popularBurgers: PopularItem[];
        }) => {
          setRestaurants(data.restaurants || []);
          setPopularItems(data.popularBurgers || []);
        }
      )
      .catch((err) => console.error("Failed to load search data:", err))
      .finally(() => setLoading(false));
  }, []);

  const filteredRestaurants = restaurants.filter(
    (r) => (search ? true : true) // suggested restaurants always show top results
  );

  const filteredPizza = popularItems.filter(
    (item) => item.category.toLowerCase() === "pizza"
  );

  return (
    <div className="max-h-screen overflow-y-auto px-6 pt-6 pb-8">
      {/* Header */}
      <div
        className="flex items-center justify-between"
        onClick={() => navigate(-1)}
      >
        <button
          onClick={onClose}
          className="p-3 bg-[#ECF0F4] rounded-full cursor-pointer"
        >
          <ChevronLeft size={20} />
        </button>

        <h1 className="text-lg font-medium text-gray-700">Search</h1>

        <div className="relative p-3 bg-black text-white rounded-full cursor-pointer">
          <FiShoppingBag size={18} />
          {cartSize > 0 && (
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {cartSize}
            </span>
          )}
        </div>
      </div>

      {/* Search input */}
      <div className="relative mt-6">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search dishes, restaurants"
          className="w-full h-14 pl-11 pr-11 bg-[#F5F6F8] rounded-2xl outline-none text-gray-800 placeholder:text-gray-400"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            <FiX size={18} />
          </button>
        )}
      </div>

      {/* Recent Keywords */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900">Recent Keywords</h2>
        <div className="flex gap-3 mt-4 overflow-x-auto scrollbar-hide">
          {RECENT_KEYWORDS.map((keyword, index) => (
            <button
              key={index}
              onClick={() => setSearch(keyword)}
              className="whitespace-nowrap px-5 py-2 border border-gray-200 rounded-full text-gray-600 font-medium hover:bg-gray-50 cursor-pointer"
            >
              {keyword}
            </button>
          ))}
        </div>
      </div>

      {/* Suggested Restaurants */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900">
          Suggested Restaurants
        </h2>

        {loading ? (
          <p className="text-gray-400 mt-4">Loading...</p>
        ) : (
          <div className="mt-2">
            {filteredRestaurants.slice(0, 3).map((restaurant, index) => (
              <div
                key={restaurant.id}
                className={`flex items-center gap-4 py-4 cursor-pointer ${
                  index !== filteredRestaurants.slice(0, 3).length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-14 h-14 rounded-xl object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-800">
                    {restaurant.name}
                  </h3>
                  <div className="flex items-center gap-1 mt-1">
                    <FaStar className="text-orange-400 text-sm" />
                    <span className="text-sm text-gray-600">
                      {restaurant.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Popular Fast Food */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900">
          Popular Fast Food
        </h2>

        <div className="flex gap-4 mt-4 grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 lg:grid-cols-4 lg:grid-rows-1 lg:overflow-x-scroll">
          {filteredPizza.slice(0, 8).map((item) => (
            <div
              key={item.id}
              className="flex flex-col cursor-pointer justify-center items-center  "
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
              />
              <h1 className="font-bold text-center ">{item.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Searching;

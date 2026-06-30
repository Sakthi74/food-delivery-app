import { useEffect, useState } from "react";
import { FiClock, FiTruck } from "react-icons/fi";
import { FaPlus, FaRegStar } from "react-icons/fa";
import Carousels from "@/components/ui/Carousels";

interface Category {
  id: number;
  name: string;
  startingPrice: number;
  image: string;
}

interface Burger {
  id: number;
  name: string;
  restaurant: string;
  price: number;
  image: string;
  category: string;
}

const RestaurantCarousel = () => {
<<<<<<< HEAD
  return (
    <div>
      <Carousel className="relative w-full overflow-hidden">
        <CarouselPrevious className="z-2" />
        <CarouselContent>
          <CarouselItem>
            <img className=" w-[900px] h-[400px]" src={carousel1} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img className=" w-72 h-[400px]" src={carousel2} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img className=" w-full h-[400px]" src={carousel3} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img className=" w-full h-[400px]" src={carousel4} alt="" />
          </CarouselItem>
        </CarouselContent>

        <CarouselNext className="bg-black ml-24"/>
      </Carousel>
=======
  const [restaurants, setRestaurants] = useState<Category[]>([]);
  const [burgers, setBurger] = useState<Burger[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((res) => res.json())
      .then((data: Category[]) => setRestaurants(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/popularBurgers")
      .then((res) => res.json())
      .then((data: Burger[]) => setBurger(data))
      .catch((err: Error) => console.log(err));
  }, []);

  return (
    <div className="w-full">
      {/* Carousel */}
      <Carousels />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Rating */}
        <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 border-b pb-6">
          <div className="flex items-center gap-2 text-lg sm:text-xl">
            <FaRegStar className="text-[#FF873E]" />
            <span className="font-bold">4.7</span>
          </div>

          <div className="flex items-center gap-2 text-lg sm:text-xl">
            <FiTruck className="text-[#FF873E]" />
            <span>Free Delivery</span>
          </div>

          <div className="flex items-center gap-2 text-lg sm:text-xl">
            <FiClock className="text-[#FF873E]" />
            <span>20 mins</span>
          </div>
        </div>

        {/* Restaurant Details */}
        <div className="my-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Spicy Restaurant
          </h1>

          <p className="mt-4 text-gray-600 leading-7 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae et
            dignissimos labore nulla expedita itaque suscipit modi dolor soluta
            quia, adipisci consectetur dolore enim, repudiandae quibusdam hic
            quaerat? Fugiat vero dolores voluptate necessitatibus harum,
            reprehenderit vitae maiores ratione cupiditate ut corporis quam
            tempore reiciendis nostrum. Officia eligendi ducimus iste maxime.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-5">Categories</h2>

          <div className="flex flex-wrap gap-4">
            {restaurants.map((restaurant) => (
              <button
                key={restaurant.id}
                className="px-6 py-3 cursor-pointer rounded-full border border-gray-300 hover:bg-[#F58D1D] hover:text-white transition duration-300"
              >
                {restaurant.name}
              </button>
            ))}
          </div>
        </div>

        {/* Burger Section */}
        <div className="mb-5">
          <h2 className="text-2xl sm:text-3xl font-bold">Popular Burgers</h2>
        </div>

        {/* Burger Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {burgers.map((burger) => (
            <div
              key={burger.id}
              className="bg-white cursor-pointer rounded-3xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={burger.image}
                alt={burger.name}
                className="w-full h-52 sm:h-56 object-cover"
              />

              <div className="p-5">
                <h2 className="text-lg font-semibold">{burger.name}</h2>

                <p className="text-gray-500 mt-1">{burger.restaurant}</p>

                <div className="flex justify-between items-center mt-5">
                  <span className="text-xl font-bold text-[#121223]">
                    ₹{burger.price}
                  </span>

                  <button className="w-11 h-11 rounded-full bg-[#F58D1D] text-white flex justify-center items-center hover:bg-orange-600 transition">
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
>>>>>>> 2fc0652 (done payments and restaurantcarousel)
    </div>
  );
};

export default RestaurantCarousel;

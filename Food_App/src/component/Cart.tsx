import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { X, ChevronRight } from "lucide-react";
import { useContext } from "react";
import { LocationContext } from "../Context/LocationContext";
import { Spinner } from "@/components/ui/spinner";

const Cart = () => {
  interface CartItem {
    id: number;
    name: string;
    restaurant: string;
    price: number;
    image: string;
    category: string;
    quantity: number;
  }

  const [cartData, setCartData] = useState<CartItem[]>([]);
  const [open, setopen] = useState<boolean>(false);
  const [spinneropen, setspinneropen] = useState<boolean>(false);

  const { locationName } = useContext(LocationContext);

  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartData(cart);
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {

  // }, 2000);,[])

  // delete function
  function del(id: number): void {
    const x = cartData.filter((item) => item.id !== id);
    setCartData(x);
    localStorage.setItem("cart", JSON.stringify(x));
  }

  // updating count
  function increase(id: number) {
    const updated = cartData.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartData(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  function decrease(id: number) {
    const updated = cartData.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    );
    setCartData(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  function routing(path: string) {
    navigate(path);
  }

  // when cart is empty
  if (cartData.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-black w-screen">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Cart is Empty 🛒</h1>

          <button
            className="px-5 py-2 mt-5 text-white bg-orange-500 rounded-xl"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* cart details */}
      <div className="p-4 sm:p-6 md:p-8 space-y-6 bg-black min-h-screen     w-screen mx-auto">
        <div className="flex items-center justify-between">
          {/* back arrow + title */}
          <div className="flex items-center gap-3">
            <button
              className="p-2 sm:p-2.5 bg-[#2A2A45] rounded-full text-white"
              onClick={() => navigate(-1)}
            >
              <MdKeyboardArrowLeft size={20} />
            </button>
            <h1 className="text-white text-sm sm:text-base md:text-lg font-medium">
              Cart
            </h1>
          </div>

          {/* done button */}
          <button
            className="text-green-400 text-sm sm:text-base md:text-lg font-bold underline underline-offset-2"
            onClick={() => setopen(true)}
          >
            DONE
          </button>
        </div>

        {cartData.map((item) => (
          <div
            key={item.id}
            className="flex md:w-[550px] w-[100%] lg:w-[550px]  text-white bg-[#1A1A1A] h-fit  rounded-3xl p-4"
          >
            {/* Image */}
            <img
              src={item.image}
              className="w-[35%] rounded-3xl object-cover"
              alt={item.name}
            />

            {/* Details */}
            <div className="flex-1 ml-5">
              {/* Name + Delete */}
              <div className="flex justify-between">
                <h2 className="text-base sm:text-lg md:text-xl font-bold">
                  {item.name}
                </h2>

                <div
                  className="p-2 text-white bg-orange-600 rounded-full cursor-pointer hover:bg-orange-200 hover:text-red-500"
                  onClick={() => del(item.id)}
                >
                  <X size={18} />
                </div>
              </div>

              {/* Price */}
              <p className="mt-3 text-lg sm:text-xl font-bold">
                ₹{item.price * item.quantity}
              </p>

              {/* Restaurant */}
              <p className="mt-1 text-sm sm:text-base text-gray-400">
                {item.restaurant}
              </p>

              {/* Quantity */}
              <div className="flex py-4">
                <div className="flex overflow-hidden bg-black rounded-3xl">
                  <button
                    className="bg-[#41414F] px-4 sm:px-5 py-2 rounded-full text-white"
                    onClick={() => decrease(item.id)}
                  >
                    -
                  </button>

                  <h1 className="px-5 sm:px-6 py-2 font-semibold text-white">
                    {item.quantity}
                  </h1>

                  <button
                    className="bg-[#41414F] px-4 sm:px-5 py-2 rounded-full text-white"
                    onClick={() => increase(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* popup —  */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50"
          onClick={() => setopen(false)}
        >
          <div
            className="w-full sm:max-w-[420px] md:max-w-[480px] lg:max-w-[560px] bg-white rounded-t-3xl shadow-xl p-6 sm:p-7 md:p-8 pb-8 sm:pb-9 md:pb-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* delivery address row */}
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm md:text-base font-semibold text-gray-400 tracking-wide">
                DELIVERY ADDRESS
              </span>
              <button className="text-xs sm:text-sm md:text-base font-semibold text-orange-500 underline underline-offset-2">
                EDIT
              </button>
            </div>

            {/* address box */}
            <div className="mt-4 bg-[#F0F3F7] rounded-xl px-4 py-4 sm:py-5 md:py-6">
              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                {locationName}
              </p>
            </div>

            {/* total + breakdown row */}
            <div className="flex items-center justify-between mt-6 sm:mt-7 md:mt-8">
              <div className="flex items-baseline gap-2">
                <span className="text-sm sm:text-base text-gray-400 font-medium">
                  TOTAL:
                </span>
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  ₹
                  {cartData.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                  )}
                </span>
              </div>

              <button className="flex items-center gap-1 text-sm sm:text-base md:text-lg font-semibold text-orange-500">
                Breakdown
                <ChevronRight size={18} />
              </button>
            </div>

            {/* place order button */}
            <button
              className="w-full mt-6 sm:mt-7 md:mt-8 bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold tracking-wide rounded-2xl py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg"
              onClick={() => routing("/paymentpage")}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;

import { MdKeyboardArrowLeft } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import card_img from "../assets/Images/card_img.png";
import PaymentOptions from "./PaymentOptions";
import { useNavigate } from "react-router-dom";
interface Payments {
  id: number;
  name: string;
  image: string;
}

function Payment() {
  const navigate = useNavigate();
  return (
    <div className="max-w-5xl mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 p-4">
        <button
          className="p-2 bg-gray-100 rounded-full"
          onClick={() => navigate(-1)}
        >
          <MdKeyboardArrowLeft size={24} />
        </button>

        <h1 className="text-xl md:text-2xl font-semibold">Payment</h1>
      </div>

      {/* Payment Methods */}
      <PaymentOptions />
      {/* Card Section */}
      <div className="p-4 md:p-6">
        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <img
            src={card_img}
            alt="Master Card"
            className="mx-auto w-52 sm:w-72 md:w-96 object-contain"
          />

          <h2 className="font-semibold mt-4 text-lg">No Master Card Added</h2>

          <p className="text-gray-500 text-sm mt-2">
            You can add a Master Card and save it for later.
          </p>
        </div>

        {/* Add Button */}
        <button className="mt-6 w-full border-2 cursor-pointer border-orange-400 text-orange-500 rounded-lg py-4 flex justify-center items-center gap-2 hover:bg-orange-50 transition">
          <FiPlus size={20} />
          ADD NEW
        </button>
      </div>

      {/* Total */}
      <div className="px-4 md:px-6 flex items-center">
        <span className="text-gray-400 text-sm">TOTAL :</span>

        <span className="text-2xl font-semibold ml-3">$96</span>
      </div>

      {/* Pay Button */}
      <div className="p-4 md:p-6">
        <button className="w-full cursor-pointer bg-orange-500 text-white py-4 rounded-xl font-semibold hover:bg-orange-600 transition">
          Pay & Confirm
        </button>
      </div>
    </div>
  );
}

export default Payment;

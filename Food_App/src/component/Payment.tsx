import { MdKeyboardArrowLeft } from "react-icons/md";
import React, { useState } from "react";
import type { ChangeEvent } from "react";
import { FiPlus } from "react-icons/fi";
import card_img from "../assets/Images/card_img.png";
import PaymentOptions from "../components/ui/PaymentOptions";
import { MdKeyboardArrowDown } from "react-icons/md";
import mastercard from "../assets/Images/payment/mastercard.png";
import { IoClose } from "react-icons/io5";
import { Carousel } from "@/components/ui/carousel";
import Carousels from "@/components/ui/Carousels";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@/components/ui/spinner";
import { toast, Bounce } from "react-toastify";
import "react-toastify/ReactToastify.css";

interface Payments {
  id: number;
  name: string;
  image: string;
}

interface PaymentFormData {
  cardNumber?: string;
  name?: string;
  expiry?: string;
  cvc?: string;
}

interface PaymentProps {
  formData?: Partial<FormData> | PaymentFormData;
}

interface FormData {
  name: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
}

const Payment: React.FC<PaymentProps> = ({ formData: initialFormData }) => {
  const [popup, setPopup] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: initialFormData?.name ?? "",
    cardNumber: initialFormData?.cardNumber ?? "",
    expiry: initialFormData?.expiry ?? "",
    cvc: initialFormData?.cvc ?? "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  function AddCard() {
    setPopup(true);
    setFormData({
      name: initialFormData?.name ?? "",
      cardNumber: initialFormData?.cardNumber ?? "",
      expiry: initialFormData?.expiry ?? "",
      cvc: initialFormData?.cvc ?? "",
    });
  }

  function paymentConfirm() {
    setPopup(false);
    setSpinner(true);

    setTimeout(() => {
      setSpinner(false);
      notifi();
      navigate("/congrats");
    }, 3000);
  }

  //tostify function
  const notifi = () => {
    toast.success(`Your Order Is Confirmed!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const billAmt = JSON.parse(localStorage.getItem("totalamt") || "0");

  const cardLast4 = formData.cardNumber?.slice(-4) ?? "";

  return (
    <div className={` max-w-5xl relative mx-auto bg-white min-h-screen  `}>
      {/* Header */}
      <div className={`${popup ? "hidden" : "block"} top-0 w-full`}>
        <div
          className="flex items-center gap-3 p-4"
          onClick={() => navigate(-1)}
        >
          <button className="p-2 bg-gray-100 rounded-full">
            <MdKeyboardArrowLeft size={24} />
          </button>

          <h1 className="text-xl md:text-2xl font-semibold">Payment</h1>
        </div>

        {/* Payment Methods */}
        <PaymentOptions />

        {/* Card Section */}
        <div className="p-4 mt-[20px] md:p-6">
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

          {cardLast4 && (
            <div className="p-[10px] my-[30px] bg-[#F4F5F7]">
              <h1 className="text-xl font-bold">Mater Card</h1>
              <div className="flex justify-between ">
                <div className="flex ">
                  <img src={mastercard} className="h-[50px] w-[100px]" alt="" />
                  <p className="ml-[20px] text-3xl">************ {cardLast4}</p>
                </div>
                <div>
                  <MdKeyboardArrowDown className="text-3xl" />{" "}
                </div>
              </div>
            </div>
          )}

          {/* Add Button */}
          <button
            onClick={AddCard}
            className="mt-6 w-full border-2 cursor-pointer border-orange-400 text-orange-500 rounded-lg py-4 flex justify-center items-center gap-2 hover:bg-orange-50 transition"
          >
            <FiPlus size={20} />
            ADD NEW
          </button>
        </div>

        {/* Total */}
        <div className="px-4 md:px-6 flex items-center mt-[130px]">
          <span className="text-gray-400 text-sm">TOTAL :</span>

          <span className="text-2xl font-semibold ml-3">${billAmt}</span>
        </div>

        {/* Pay Button */}
        <div className="p-4 md:p-6">
          <button
            className="w-full cursor-pointer bg-orange-500 text-white py-4 rounded-xl font-semibold hover:bg-orange-600 transition"
            onClick={paymentConfirm}
          >
            Pay & Confirm
          </button>
        </div>
      </div>
      <div className={`absolute ${popup ? "block" : "hidden"} top-0 w-full `}>
        {" "}
        <div className="">
          {/* Header */}
          <div className="flex bg-white p-[10px]">
            <div className="bg-[#ECF0F4] p-[10px] rounded-3xl ml-[15px]">
              <IoClose onClick={() => setPopup(false)} />
            </div>

            <div className="ml-[15px] mt-[5px] font-medium">Add Card</div>
          </div>

          {/* Form */}
          <div className=" bg-white flex justify-center items-center h-screen px-4">
            <div className="w-full max-w-sm">
              {/* Card Holder Name */}
              <div className="mb-5">
                <label className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">
                  Card Holder Name <strong className="text-red-500">*</strong>
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="ENTER HOLDER NAME"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full bg-gray-100 rounded-lg p-4 outline-none text-gray-700"
                />
              </div>

              {/* Card Number */}
              <div className="mb-5">
                <label className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">
                  Card Number
                </label>
                <strong className="text-red-500">*</strong>

                <input
                  type="text"
                  name="cardNumber"
                  placeholder="____  ____  ____  ____"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className="mt-2 w-full bg-gray-100 rounded-lg p-4 outline-none text-gray-700 tracking-widest"
                />
              </div>

              {/* Expiry & CVC */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <label className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">
                    Expire Date
                  </label>
                  <strong className="text-red-500">*</strong>

                  <input
                    type="text"
                    name="expiry"
                    placeholder="MM/YYYY"
                    value={formData.expiry}
                    onChange={handleChange}
                    className="mt-2 w-full bg-gray-100 rounded-lg p-4 outline-none text-gray-700"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">
                    CVC
                  </label>

                  <input
                    type="password"
                    name="cvc"
                    placeholder="***"
                    value={formData.cvc}
                    onChange={handleChange}
                    className="mt-2 w-full bg-gray-100 rounded-lg p-4 outline-none text-gray-700"
                  />
                </div>
              </div>

              {/* Button */}

              <div className="mt-[250px]">
                <button
                  className="w-full  cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition"
                  onClick={() => setPopup(false)}
                >
                  ADD & MAKE PAYMENT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {spinner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <Spinner className="w-12 h-12 text-white" />
        </div>
      )}
    </div>
  );
};

export default Payment;

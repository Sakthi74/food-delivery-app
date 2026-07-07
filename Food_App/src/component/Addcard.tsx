import { useState } from "react";
import type { ChangeEvent } from "react";
import { IoClose } from "react-icons/io5";
import Payment from "./Payment";
// Payment's prop types are not available here; cast to any to allow passing formData
const PaymentAny: any = Payment;

interface FormData {
  name: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
}

function Addcard() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    console.log(formData);
  };

  return (
    <div>
      {" "}
      <div className="">
        {/* Header */}
        <div className="flex p-[10px]">
          <div className="bg-[#ECF0F4] p-[10px] rounded-3xl ml-[15px]">
            <IoClose />
          </div>

          <div className="ml-[15px] mt-[5px] font-medium">Add Card</div>
        </div>

        {/* Form */}
        <div className="min-h-screen bg-white flex justify-center items-center p-4">
          <div className="w-full max-w-sm">
            {/* Card Holder Name */}
            <div className="mb-5">
              <label className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">
                Card Holder Name
              </label>

              <input
                type="text"
                name="name"
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
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition">
              ADD & MAKE PAYMENT
            </button>
          </div>
        </div>
      </div>
      <PaymentAny formData={formData} />
    </div>
  );
}

export default Addcard;

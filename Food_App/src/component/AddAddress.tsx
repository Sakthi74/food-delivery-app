import React from "react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useContext, useState } from "react";
import { profileContext } from "../Context/ProfileContext";
import Itemfilter from "./Itemfilter";
import type { Address } from "../Context/ProfileContext";

const AddAddress = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [newAddress, setNewAddress] = useState<Address>({
    id: Date.now(),
    address: "",
    street: "",
    postCode: "",
    apartment: "",
    label: "Home",
  });
  const context = useContext(profileContext);

  if (!context) {
    throw new Error("ProfileContext not found");
  }

  const { addresses, setAddresses } = context;
  const navigate = useNavigate();

  function addBySubmit() {
    const updatedAddress = [...addresses, newAddress];
    setAddresses(updatedAddress);
    localStorage.setItem("addresses", JSON.stringify(updatedAddress));

    console.log(updatedAddress);
    alert("address created");
  }

  return (
    <>
      {" "}
      <div className="min-h-screen bg-white ">
        {/* Top Section */}
        <div className="flex items-center gap-4  p-9 w-screen md:w-[500px] lg:w-[500px]">
          <div
            onClick={() => navigate(-1)}
            className="p-3 bg-[#ECF0F4] rounded-full cursor-pointer"
          >
            <MdKeyboardArrowLeft size={20} />
          </div>
          <h1 className="text-gray-900 p-2 flex justify-center font-semibold text-md md:text-lg lg:text-xl">
            ENTER ADDRESS DETAILS
          </h1>
        </div>

        {/* Bottom Card */}
        <div className="-mt-10 bg-transparent rounded-t-3xl px-6 py-8 relative z-10 flex flex-col justify-center items-center">
          {/* SPAN + INPUT */}
          <div className="flex flex-col w-full md:w-[400px] lg:w-[900px]   gap-2">
            <span className="text-black font-thin text-sm p-1">
              House/Office number<sup className="text-red-500">*</sup>
            </span>
            <input
              type="text"
              placeholder="House/Office number"
              required
              value={newAddress.address}
              onChange={(e) =>
                setNewAddress({ ...newAddress, address: e.target.value })
              }
              className="w-full  border bg-[#f0f5fa]  border-gray-300 rounded-lg px-4 py-6 focus:outline-none focus:border-[#ff7622]"
            />
            <div className="relative  gap-2 w-full md:w-[400px] lg:w-[900px]">
              <span className="text-black font-thin text-sm p-1">
                HOUSE/APARTMENT/OFFICE NAME{" "}
                <strong className="text-red-500">*</strong>
              </span>
              <input
                placeholder="eg : Los Polos Hermanos"
                className="w-full h-fit  border bg-[#f0f5fa]  border-gray-300 rounded-lg px-4 py-6 focus:outline-none focus:border-[#ff7622]"
                required
                value={newAddress.apartment}
                onChange={(e) =>
                  setNewAddress({
                    ...newAddress,
                    apartment: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="flex gap-4 w-full md:w-[400px] lg:w-[900px]">
            {/* Street */}
            <div className="flex flex-col gap-2 flex-1">
              <span className="text-black font-thin text-sm p-1">
                STREET<sup className="text-red-500">*</sup>
              </span>
              <input
                type="text"
                placeholder="eg : Court House street"
                required
                value={newAddress.street}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, street: e.target.value })
                }
                className="w-full border bg-[#f0f5fa] border-gray-300 rounded-lg px-4 py-6 focus:outline-none focus:border-[#ff7622]"
              />
            </div>

            {/* Post Code */}
            <div className="flex flex-col gap-2 flex-1">
              <span className="text-black font-thin text-sm p-1">
                POST CODE <sup className="text-red-500">*</sup>
              </span>
              <input
                type="number"
                placeholder="Enter post code"
                required
                value={newAddress.postCode}
                onChange={(e) =>
                  setNewAddress({
                    ...newAddress,
                    postCode: e.target.value,
                  })
                }
                className="w-full border bg-[#f0f5fa] border-gray-300 rounded-lg px-4 py-6 pr-12 focus:outline-none focus:border-[#ff7622]"
              />
            </div>
          </div>

          <div className="p-3 cursor-pointer  justify-center items-center">
            <Itemfilter
              categories={["HOME", "OFFICE", "OTHER"]}
              selected={selected}
              onSelect={(categorey) => {
                setSelected(categorey);
                setNewAddress({ ...newAddress, label: categorey });
              }}
            />
          </div>
          <button
            className="mt-8 w-full cursor-pointer md:w-[400px] lg:w-[700px] rounded-xl bg-[#ff7622] py-4 text-white font-bold hover:bg-[#ff8650] transition-colors"
            onClick={() => addBySubmit()}
          >
            SAVE
          </button>
          {/* Button */}
        </div>
      </div>
    </>
  );
};

export default AddAddress;

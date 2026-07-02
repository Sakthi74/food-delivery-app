import { House, Briefcase } from "lucide-react";
import { useContext, useState } from "react";
import { profileContext } from "../Context/ProfileContext";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { NotebookPen, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type Profileinfo from "./Profileinfo";

const AddressPage = () => {
  const navigate = useNavigate();
  const { addresses, setAddresses } = useContext(profileContext);

  // function update(id: number, UpdatedAddress:[]) {
  //   addresses.map((item)=>item.id===id? {...item, item.address :address} :item)
  // }
  function deleteAddress(id: number) {
    const unwanted = addresses.filter((item) => item.id !== id);

    setAddresses(unwanted);

    localStorage.setItem("addresses", JSON.stringify(unwanted));
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        {/* Top Section */}
        <div className="flex items-center gap-4 p-9 w-screen justify-between">
          <div className="flex items-center gap-4">
            <div
              onClick={() => navigate(-1)}
              className="p-3 bg-[#ECF0F4] rounded-full cursor-pointer"
            >
              <MdKeyboardArrowLeft size={20} />
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-[#f6f8fa] text-black p-4 rounded-xl w-3/4">
          {/* Row 1: Full Name */}
          {addresses.map((item) => (
            <div
              className="flex items-center justify-between border-b pb-4 mb-4"
              key={item.id}
            >
              <div className="bg-white p-3 rounded-full">
                {item.label === "HOME" ? (
                  <House className="text-[#fcb297]" />
                ) : item.label === "OFFICE" ? (
                  <Briefcase className="text-[#fcb297]" />
                ) : (
                  <Briefcase className="text-[#fcb297]" />
                )}
              </div>

              <div className="flex flex-col justify-center items-start">
                <h1 className="text-gray-900 font-semibold">{item.label}</h1>

                <p className="text-gray-500">
                  {item.address}, {item.street}, {item.apartment},{" "}
                  {item.postCode}
                </p>
              </div>
              <button>UPDATE</button>
              <br />
              <button onClick={() => deleteAddress(item.id)}>DELETE</button>
            </div>
          ))}
        </div>
        <button
          className="mt-8 w-2/3 cursor-pointer md:w-[400px] lg:w-[700px] rounded-xl bg-[#ff7622] py-4 text-white font-bold hover:bg-[#ff8650] transition-colors"
          onClick={() => navigate("/newAddress")}
        >
          Add New Address
        </button>
      </div>
    </>
  );
};

export default AddressPage;

import {
  House,
  Briefcase,
  Trash2,
  SquarePen,
  X,
  ChevronLeft,
} from "lucide-react";
import { useContext, useState } from "react";
import { profileContext } from "../Context/ProfileContext";
import { useNavigate } from "react-router-dom";

const AddressPage = () => {
  const navigate = useNavigate();
  const context = useContext(profileContext);

  if (!context) {
    throw new Error("ProfileContext must be used inside ProfileDataProvider");
  }

  const { addresses, setAddresses } = context;
  // popup state
  const [editId, setEditId] = useState<number | null>(null);
  const [houseNumber, setHouseNumber] = useState("");

  const handleDeleteAddress = () => {
    const unwanted = addresses.filter((item) => item.id !== id);
    setAddresses(unwanted);
    localStorage.setItem("addresses", JSON.stringify(unwanted));
  };

  const handleOpenEdit = (id: number, currentValue: string) => {
    setEditId(id);
    setHouseNumber(currentValue);
  };

  const handleSaveHouseNumber = () => {
    const updated = addresses.map((item) =>
      item.id === editId ? { ...item, apartment: houseNumber } : item
    );
    setAddresses(updated);
    localStorage.setItem("addresses", JSON.stringify(updated));
    setEditId(null);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      {/* Header */}
      <div className="flex items-center gap-4 p-9 w-screen justify-between">
        <div className="flex items-center gap-4">
          <div
            onClick={() => navigate(-1)}
            className="p-3 bg-[#ECF0F4] rounded-full cursor-pointer"
          >
            <ChevronLeft size={20} />
          </div>
        </div>
      </div>

      {/* Address List */}
      <div className="bg-[#f6f8fa] text-black p-4 rounded-xl w-3/4">
        {addresses.length === 0 ? (
          <p className="text-center text-gray-500">No addresses added.</p>
        ) : (
          addresses.map((item) => (
            <div key={item.id} className="flex items-center gap-4  pb-4  ">
              {/* Icon */}
              <div className="bg-white p-3 rounded-full shrink-0">
                {item.label === "HOME" ? (
                  <House className="text-[#fcb297]" />
                ) : item.label === "OFFICE" ? (
                  <Briefcase className="text-[#fcb297]" />
                ) : (
                  <House className="text-[#fcb297]" />
                )}
              </div>

              {/* Address */}
              <div className="flex-1 min-w-0">
                <h1 className="font-semibold text-sm">{item.label}</h1>
                <p className="text-xs text-gray-500 mt-1">
                  {item.address}, {item.street}, {item.apartment},{" "}
                  {item.postCode}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  className="text-orange-400 hover:text-orange-600"
                  onClick={() => handleOpenEdit(item.id, item.apartment)}
                >
                  <SquarePen size={18} />
                </button>

                <button
                  className="text-orange-400 hover:text-red-500 cursor-pointer"
                  onClick={() => handleDeleteAddress(item.id)}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add Address */}
      <button
        className="mt-8 w-2/3 md:w-[400px] lg:w-[700px] cursor-pointer rounded-xl bg-[#ff7622] py-4 text-white font-bold hover:bg-[#ff8650]"
        onClick={() => navigate("/new-address")}
      >
        Add New Address
      </button>

      {/* Edit House Number Popup */}
      {editId !== null && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-[#f6f8fa] rounded-xl p-6 w-3/4 md:w-[400px] flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-sm">Edit House Number</h2>
              <button
                className="text-orange-400 hover:text-red-500"
                onClick={() => setEditId(null)}
              >
                <X size={18} />
              </button>
            </div>

            <input
              type="text"
              value={houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
              className="bg-white rounded-xl p-3 text-sm outline-none border border-transparent focus:border-[#ff7622]"
              placeholder="House number"
            />

            <button
              className="rounded-xl bg-[#ff7622] py-3 text-white font-bold hover:bg-[#ff8650]"
              onClick={handleSaveHouseNumber}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressPage;

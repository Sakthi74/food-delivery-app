import { User, Mail, Phone, ChevronLeft } from "lucide-react";
import { useContext } from "react";
import { profileContext } from "../Context/ProfileContext";
import { useNavigate } from "react-router-dom";

const Profileinfo = () => {
  const navigate = useNavigate();
  const context = useContext(profileContext);

  if (!context) {
    throw new Error("ProfileContext must be used inside ProfileDataProvider");
  }

  const { user } = context;
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
              <ChevronLeft size={20} />
            </div>
            <h1 className="text-gray-900 p-2 flex justify-center font-semibold text-md md:text-lg lg:text-xl">
              Personal Information
            </h1>
          </div>
          <h1
            onClick={() => navigate("/edit")}
            className="text-orange-400 font-semibold hover:underline cursor-pointer"
          >
            Edit
          </h1>
        </div>

        {/* Main Content Card */}
        <div className="bg-[#f6f8fa] text-black p-4 rounded-xl w-3/4">
          {/* Row 1: Full Name */}
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <div className="flex items-center gap-12">
              <div className="bg-white p-3 rounded-full">
                <User className="text-[#fcb297]" />
              </div>
              <div className="flex flex-col justify-center items-start">
                <h1 className="font-medium text-gray-800 p-2 tracking-[0.5px]">
                  FULL NAME
                </h1>
                <p className="text-gray-500">{user?.fullName || "N/A"}</p>
              </div>
            </div>
          </div>

          {/* Row 2: Placeholder for other fields (e.g., Email) */}
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <div className="flex items-center gap-12">
              <div className="bg-white p-3 rounded-full">
                <Mail className="text-blue-400" />
              </div>
              <div className="flex flex-col justify-center items-start">
                <h1 className="font-medium text-gray-800 p-2 tracking-[0.5px]">
                  EMAIL
                </h1>
                <p className="text-gray-500">{user?.email || "N/A"}</p>
              </div>
            </div>
          </div>

          {/* Row 3: Placeholder for Phone */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-12">
              <div className="bg-white p-3 rounded-full">
                <Phone className="text-[#82c0ff]" />
              </div>
              <div className="flex flex-col justify-center items-start">
                <h1 className="font-medium text-gray-800 p-2 ">PHONE NUMBER</h1>
                <p className="text-gray-500">{user?.phone || "N/A"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profileinfo;

import profilesaul from "../assets/Images/profilesaul.jpg";

import { useProfile } from "../Context/ProfileContext";
import {
  ShoppingBag,
  User,
  HeartPlus,
  Bell,
  CreditCard,
  CircleQuestionMark,
  Settings,
  NotebookPen,
  LogOut,
  Ellipsis,
  Map,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const Sidebar = ({
  sidebarpopup,
  setSidebar,
}: {
  sidebarpopup: boolean;
  setSidebar: (popup: boolean) => void;
}) => {
  const { user } = useProfile();

  return (
    <>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
    fixed
    top-0
    left-0
    flex
    flex-col
    justify-start
    items-center
    gap-3
    h-screen
    w-full
    md:w-[430px]
    lg:w-[460px]
    bg-white
    z-[100]
    overflow-y-auto
    py-6
    shadow-2xl
    transition-transform
    duration-400
    ease-in-out
    ${sidebarpopup ? "translate-x-0" : "-translate-x-full"}
  `}
      >
        {/* back arrow / title / ellipsis row */}
        <div className="flex items-center justify-between p-9 w-screen md:w-[500px] lg:w-[500px]">
          <div
            onClick={() => setSidebar(false)}
            className="p-3 bg-[#ECF0F4] rounded-full cursor-pointer"
          >
            <ChevronLeft size={20} />
          </div>
          <h1 className="text-gray-900 font-semibold text-md md:text-lg lg:text-xl">
            Restaurant View
          </h1>
          <div className="p-3 bg-[#ECF0F4] rounded-full cursor-pointer">
            <Ellipsis />
          </div>
        </div>

        {/* image and name div */}
        <div className="flex items-center justify-center gap-4 w-screen">
          <img
            src={profilesaul}
            className="w-20 h-20 rounded-full object-cover"
            alt=""
          />
          {/* name and bio */}
          <div>
            <h1 className="text-lg text-black font-bold bg-green">
              {user.fullName}
            </h1>
            <p className="text-gray-600 text-md">{user.bio}</p>
          </div>
        </div>

        {/* menu div 1 */}
        <div className="bg-[#f6f8fa] text-black p-4 rounded-xl w-3/4 ">
          {/* sub div1 */}
          <div
            className="flex items-center justify-between "
            onClick={() => navigate("/profile-info")}
          >
            {/* icon and h1 div */}
            <div className="flex items-center gap-2">
              <div>
                {" "}
                <User className="text-red-400" />
              </div>
              <h1 className="font-medium text-gray-800 p-2">Personal Info</h1>
            </div>
            {/* icon 2 */}
            <div>
              <div
                className="p-3 md:p-4 cursor-pointer text-black"
                //onClick={() => navigate(-1)}
              >
                <ChevronRight size={20} />
              </div>
            </div>
          </div>

          {/* sub div2 */}
          <div
            className="flex items-center justify-between "
            onClick={() => navigate("/address")}
          >
            {/* icon and h1 div */}
            <div className="flex items-center gap-2 ">
              <div>
                {" "}
                <Map className="text-blue-600" />
              </div>
              <h1 className="font-medium text-gray-800 p-2">Address</h1>
            </div>
            {/* icon 2 */}
            <div>
              <div
                className="p-3 md:p-4 cursor-pointer"
                //onClick={() => navigate(-1)}
              >
                <ChevronRight size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* menu div 2*/}
        <div className="bg-[#f6f8fa] text-black p-6 rounded-xl w-3/4 ">
          {/* sub div1 */}
          <div
            className="flex items-center justify-between "
            onClick={() => navigate("/cart")}
          >
            {/* icon and h1 div */}
            <div className="flex items-center gap-2 ">
              <div>
                {" "}
                <ShoppingBag className="text-[#82c0ff]" />
              </div>
              <h1 className="font-medium text-gray-800 p-2">Cart</h1>
            </div>
            {/* icon 2 */}
            <div>
              <div
                className="p-3 md:p-4 cursor-pointer text-black"
                //onClick={() => navigate(-1)}
              >
                <ChevronRight size={20} />
              </div>
            </div>
          </div>

          {/* Subdiv2 */}
          <div className="flex items-center justify-between ">
            {/* icon and h1 div */}
            <div className="flex items-center gap-2">
              <div>
                {" "}
                <HeartPlus className="text-[#cc7efc]" />
              </div>
              <h1 className="font-medium text-gray-800 p-2">Favorites</h1>
            </div>
            {/* icon 2 */}
            <div>
              <div
                className="p-3 md:p-4 cursor-pointer text-black"
                //onClick={() => navigate(-1)}
              >
                <ChevronRight size={20} />
              </div>
            </div>
          </div>

          {/* sub div3 */}
          <div className="flex items-center justify-between ">
            {/* icon and h1 div */}
            <div className="flex items-center gap-2">
              <div>
                {" "}
                <Bell className="text-[#ffcf88]" />
              </div>
              <h1 className="font-medium text-gray-800 p-2">Notifications</h1>
            </div>
            {/* icon 2 */}
            <div>
              <div
                className="p-3 md:p-4 cursor-pointer"
                //onClick={() => navigate(-1)}
              >
                <ChevronRight size={20} />
              </div>
            </div>
          </div>

          {/* sub div4 */}
          <div className="flex items-center justify-between ">
            {/* icon and h1 div */}
            <div className="flex items-center gap-2">
              <div>
                {" "}
                <CreditCard className="text-blue-400" />
              </div>
              <h1 className="font-medium text-gray-800 p-2">Payment method</h1>
            </div>
            {/* icon 2 */}
            <div>
              <div
                className="p-3 md:p-4 cursor-pointer text-black"
                //onClick={() => navigate(-1)}
              >
                <ChevronRight size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* menu div 3 */}
        <div className="bg-[#f6f8fa] text-black p-4 rounded-xl w-3/4 ">
          {/* sub div1 */}
          <div className="flex items-center justify-between ">
            {/* icon and h1 div */}
            <div className="flex items-center gap-2">
              <div>
                {" "}
                <CircleQuestionMark className="text-[#fcb297]" />
              </div>
              <h1 className="font-medium text-gray-800 p-2">FAQs</h1>
            </div>
            {/* icon 2 */}
            <div>
              <div
                className="p-3 md:p-4 cursor-pointer text-black"
                //onClick={() => navigate(-1)}
              >
                <ChevronRight size={20} />
              </div>
            </div>
          </div>

          {/* sub div2 */}
          <div className="flex items-center justify-between ">
            {/* icon and h1 div */}
            <div className="flex items-center gap-2">
              <div>
                {" "}
                <NotebookPen className="text-[#75ebeb]" />
              </div>
              <h1 className="font-medium text-gray-800 p-2">User Reviews</h1>
            </div>
            {/* icon 2 */}
            <div>
              <div
                className="p-3 md:p-4 cursor-pointer"
                //onClick={() => navigate(-1)}
              >
                <ChevronRight size={20} />
              </div>
            </div>
          </div>

          {/* sub div3 */}
          <div className="flex items-center justify-between ">
            {/* icon and h1 div */}
            <div className="flex items-center gap-2">
              <div>
                {" "}
                <Settings className="text-[#a6a3fc]" />
              </div>
              <h1 className="font-medium text-gray-800 p-2">Settings</h1>
            </div>
            {/* icon 2 */}
            <div>
              <div
                className="p-3 md:p-4 cursor-pointer"
                //onClick={() => navigate(-1)}
              >
                <ChevronRight size={20} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f6f8fa] text-black p-4 rounded-xl w-3/4 ">
          {/* sub div1 */}
          <div className="flex items-center justify-between ">
            {/* icon and h1 div */}
            <div className="flex items-center gap-2">
              <div>
                <LogOut className="text-[#fc7d87]" />
              </div>
              <h1 className="font-medium  p-2">Log Out</h1>
            </div>
            {/* icon 2 */}
            <div>
              <div
                className="p-3 md:p-4 cursor-pointer text-black"
                onClick={() => {
                  localStorage.removeItem("isLoggedIn");
                  navigate("/log-in");
                }}
              >
                <ChevronRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

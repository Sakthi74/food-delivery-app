import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { User } from "lucide-react";
import { Map } from "lucide-react";

const Sidebar = () => {
  return (
    <>
      <div className="md:w-[300px] lg:w-[300px] w-screen flex flex-col  items-center h-screen bg-white ">
        {/* image and name div */}
        <div>
          <img src="" alt="" />
          {/* name and bio */}
          <div>
            <h1>Vishal khadok</h1>
            <p>I LOVE FAST FOOD</p>
          </div>
        </div>

        {/* menu div 1 */}
        <div className="bg-[#f6f8fa] text-black p-2 rounded-3xl w-3/4 ">
          {/* sub div1 */}
          <div className="flex items-center justify-between ">
            {/* icon and h1 div */}
            <div className="flex items-center gap-2">
              <div>
                {" "}
                <User />
              </div>
              <h1 className="font-medium text-gray-800 p-2">Personal Info</h1>
            </div>
            {/* icon 2 */}
            <div>
              <div
                className="p-3 md:p-4 cursor-pointer text-black"
                //onClick={() => navigate(-1)}
              >
                <MdKeyboardArrowRight size={20} />
              </div>
            </div>
          </div>

          {/* sub div2 */}
          <div className="flex items-center justify-between ">
            {/* icon and h1 div */}
            <div className="flex items-center gap-2">
              <div>
                {" "}
                <Map />
              </div>
              <h1 className="font-medium text-gray-800 p-2">Address</h1>
            </div>
            {/* icon 2 */}
            <div>
              <div
                className="p-3 md:p-4 cursor-pointer"
                //onClick={() => navigate(-1)}
              >
                <MdKeyboardArrowRight size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* menu div 2*/}
        <div>
          {/* sub div1 */}
          <div>
            {/* icon and h1 div */}
            <div>
              <div
                className="p-3 md:p-4 cursor-pointer"
                // onClick={() => navigate(-1)}
              >
                <MdKeyboardArrowRight size={20} />
              </div>
              <h1></h1>
            </div>
            {/* icon 2 */}
            <div>
              <div
                className="p-3 md:p-4 cursor-pointer"
                // onClick={() => navigate(-1)}
              >
                <MdKeyboardArrowRight size={20} />
              </div>
            </div>
          </div>

          {/* sub div2 */}
          <div>
            {/* icon and h1 div */}
            <div>
              <p></p>
              <h1></h1>
            </div>
            {/* icon 2 */}
            <div>
              <div
                className="p-3 md:p-4 cursor-pointer"
                // onClick={() => navigate(-1)}
              >
                <MdKeyboardArrowRight size={20} />
              </div>
            </div>
          </div>

          {/* sub div3 */}
          <div>
            {/* icon and h1 div */}
            <div>
              <p></p>
              <h1></h1>
            </div>
            {/* icon 2 */}
            <div>
              <div
                className="p-3 md:p-4 cursor-pointer"
                // onClick={() => navigate(-1)}
              >
                <MdKeyboardArrowRight size={20} />
              </div>
            </div>
          </div>

          {/* sub div4 */}
          <div>
            {/* icon and h1 div */}
            <div>
              <p></p>
              <h1></h1>
            </div>
            {/* icon 2 */}
            <div>
              <div
                className="p-3 md:p-4 cursor-pointer"
                // onClick={() => navigate(-1)}
              >
                <MdKeyboardArrowRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

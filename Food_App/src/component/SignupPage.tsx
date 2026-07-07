import { useState } from "react";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import "react-toastify/ReactToastify.css";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [reshowPassword, setShowrePassword] = useState(false);
  const [details, setDetails] = useState({ password: "", confirmpassword: "" });
  const navigate = useNavigate();

  //tostify function
  const notifi = () => {
    toast.success(`Successfully Signed Up`, {
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

  const handleSignup = () => {
    if (details.password === details.confirmpassword) {
      navigate("/log-in");
      notifi();
    } else {
      toast.error("Password and Confirm Password fields must be same");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white ">
        {/* Top Section */}
        <div className="bg-[#111111] h-72 flex flex-col justify-center items-center px-6 rounded-b-3xl text-center">
          <div className="w-full ">
            <div
              className="w-fit p-3 md:p-4 bg-[#ECF0F4] rounded-full cursor-pointer mb-0"
              onClick={() => navigate("/login")}
            >
              <ChevronLeft size={20} />
            </div>
          </div>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Sign Up
            </h1>
            <p className="text-white/70 ">Please Sign up to get started</p>
          </div>
        </div>{" "}
        {/* Bottom Card */}
        <div className="-mt-10 bg-white rounded-t-3xl px-6 py-8 relative z-10 flex flex-col justify-center items-center">
          {/* SPAN + INPUT */}
          <div className="flex flex-col w-full md:w-[400px] lg:w-[700px] p-1  gap-2">
            <span className="text-black font-thin text-sm p-2">
              NAME{" "}
              <strong>
                <sup className="text-red-500">*</sup>
              </strong>
            </span>
            <input
              type="text"
              placeholder="example@gmail.com"
              className="w-full  border bg-[#f0f5fa]  border-gray-300 rounded-lg px-4 py-6 focus:outline-none focus:border-[#ff7622]"
            />
          </div>
          <div className="flex flex-col gap-2 p-1 w-full md:w-[400px] lg:w-[700px]">
            <span className="text-black font-thin text-sm p-2">
              EMAIL{" "}
              <strong>
                <sup className="text-red-500">*</sup>
              </strong>
            </span>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full border bg-[#f0f5fa]  border-gray-300 rounded-lg px-4 py-6 focus:outline-none focus:border-[#ff7622]"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative flex flex-col gap-2 w-full md:w-[400px] lg:w-[700px] p-1">
            <span className="text-black font-thin text-sm p-2">
              PASSWORD{" "}
              <strong>
                <sup className="text-red-500">*</sup>
              </strong>
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={details.password}
              onChange={(e) =>
                setDetails((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              className="w-full border bg-[#f0f5fa] border-gray-300 rounded-lg px-4 py-6 pr-12 focus:outline-none focus:border-[#ff7622]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 translate-y-1/2 cursor-pointer"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* RE ENTER PASSWORD */}
          <div className="relative flex flex-col gap-2 w-full md:w-[400px] lg:w-[700px] p-1">
            <span className="text-black font-thin text-sm p-2">
              Re-Type Password{" "}
              <strong>
                {" "}
                <sup className="text-red-500">*</sup>
              </strong>
            </span>
            <input
              type={reshowPassword ? "text" : "password"}
              placeholder="example@gmail.com"
              value={details.confirmpassword}
              className="w-full  border bg-[#f0f5fa]  border-gray-300 rounded-lg px-4 py-6 focus:outline-none focus:border-[#ff7622]"
              onChange={(e) =>
                setDetails((prev) => ({
                  ...prev,
                  confirmpassword: e.target.value,
                }))
              }
            />
            <button
              className="absolute right-4 top-1/2 translate-y-1/2 cursor-pointer "
              onClick={() => setShowrePassword(!reshowPassword)}
            >
              {reshowPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button
            className="mt-8 w-full cursor-pointer md:w-[400px] lg:w-[700px] rounded-xl bg-[#ff7622] py-4 text-white font-bold hover:bg-[#ff8650] transition-colors"
            onClick={handleSignup}
          >
            Sign Up
          </button>

          {/* Button */}
        </div>
      </div>
    </>
  );
};

export default SignupPage;

import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-md">
        {/* Top Section */}
        <div className="relative bg-[#111111] h-64 flex flex-col justify-center items-center px-6 rounded-b-[32px] text-center overflow-hidden">
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="absolute top-6 left-6 flex items-center justify-center w-9 h-9 bg-white rounded-full cursor-pointer"
          >
            <ChevronLeft size={20} color="#111111" />
          </button>

          <h1 className="text-3xl font-bold text-white">Forgot Password</h1>
          <p className="text-white/60 text-sm mt-2">
            Please sign in to your existing account
          </p>
        </div>

        {/* Bottom Card */}
        <div className="px-6 pt-10 pb-8">
          <div className="flex flex-col gap-2">
            <span className="text-gray-400 font-semibold text-xs tracking-wide">
              EMAIL
            </span>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full border border-gray-200 bg-[#F5F6F8] rounded-xl px-4 py-4 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#ff7622]"
            />
          </div>

          <button className="mt-10 w-full rounded-2xl bg-[#ff7622] py-4 text-white text-sm font-bold tracking-wide hover:bg-[#ff8650] transition-colors">
            SEND CODE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

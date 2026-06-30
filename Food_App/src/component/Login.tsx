import { useEffect, useRef, useState, FormEvent } from "react";
import { Eye, EyeOff } from "lucide-react";
import xIcon from "../assets/Images/x-icon.png";
import fb from "../assets/Images/fb.png";
import apple from "../assets/Images/apple.png";
import OpeningPage from "./OpeningPage";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(true);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); //show splash for  2 seconds
    return () => clearTimeout(timer);
  }, []);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!emailRef.current || !passwordRef.current) {
        return;
      }

      const email = emailRef.current.value.trim();
      const password = passwordRef.current.value.trim();

      // Email Validation
      if (email === "") {
        alert("Email is required");
        emailRef.current.focus();
        return;
      }

      if (!email.includes("@")) {
        alert("Please enter a valid email");
        emailRef.current.focus();
        return;
      }

      // Password Validation
      if (password === "") {
        alert("Password is required");
        passwordRef.current.focus();
        return;
      }

      if (password.length < 6) {
        alert("Password must be at least 6 characters");
        passwordRef.current.focus();
        return;
      }

        if (loading) {
          return <OpeningPage />;
        }

      // alert("Login Successful!");

      // Clear input fields
      emailRef.current.value = "";
      passwordRef.current.value = "";
    };


  return (
    <>
      <div className="min-h-screen bg-white ">
        {/* Top Section */}
        <div className="bg-[#111111] h-96 flex flex-col justify-center items-center px-6 rounded-b-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Log In</h1>
          <p className="text-white/70 mt-3">
            Please enter in to tour existing account
          </p>
        </div>{" "}
        {/* Bottom Card */}
        <div className="-mt-10 bg-white rounded-t-3xl px-6 py-8 relative z-10 flex flex-col justify-center items-center">
          {/* SPAN + INPUT */}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 w-full md:w-[400px] lg:w-[700px]">
              <span className="text-black font-thin text-sm p-1">EMAIL</span>
              <input
                type="email"
                ref={emailRef}
                placeholder="example@gmail.com"
                className="w-full border bg-[#f0f5fa]  border-gray-300 rounded-lg px-4 py-6 focus:outline-none focus:border-[#ff7622]"
              />
            </div>

            {/* PASSWORD */}
            <div className="relative  w-full md:w-[400px] lg:w-[700px]">
              <span className="text-black font-thin text-sm p-1">PASSWORD</span>
              <input
                type={showPassword ? "text" : "password"}
                ref={passwordRef}
                placeholder="Enter password"
                className="w-full border bg-[#f0f5fa] border-gray-300 rounded-lg px-4 py-6 pr-12 focus:outline-none focus:border-[#ff7622]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* remember me part */}
            <div className="flex justify-between w-full md:w-[400px] lg:w-[700px] ">
              {/* input checkbox+h6 */}
              <div className="flex ">
                <input type="checkbox" className="cursor-pointer" />
                <h6 className="text-gray-900 font-thin text-md p-1">
                  Remember me
                </h6>
              </div>
              <h6 className="text-[#ff7622] font-semibold text-sm p-1 cursor-pointer">
                Forgot Password
              </h6>
            </div>

            <button className="mt-8 w-full cursor-pointer md:w-[400px] lg:w-[700px] rounded-xl bg-[#ff7622] py-4 text-white font-bold hover:bg-[#ff8650] transition-colors">
              Log In
            </button>
          </form>
          <div className="flex ">
            <h6 className="text-gray-900 font-thin text-md p-1">
              Don't have an account?
            </h6>

            <h6 className="text-[#ff7622] font-semibold text-sm p-1 cursor-pointer">
              SIGN UP
            </h6>
          </div>
          {/* icons part */}
          <p>Or</p>
          <div className="w-full  flex  justify-center items-center gap-12 p-3">
            {/* images part */}

            <img src={xIcon} className="h-16 cursor-pointer" alt="" />
            <img src={fb} className="h-16 cursor-pointer" alt="" />
            <img src={apple} className="h-16 cursor-pointer" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

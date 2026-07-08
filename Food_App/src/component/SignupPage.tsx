import { useRef, useState } from "react";
import { useSignup } from "../Context/AuthDataContext";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupPage = () => {
  const navigate = useNavigate();

  const { email, setEmail, setPassword } = useSignup();

  const passwordRef = useRef<HTMLInputElement | null>(null);

  const [showPassword, setShowPassword] = useState(false);
  const [reshowPassword, setShowrePassword] = useState(false);

  const [details, setDetails] = useState({
    name: "",
    password: "",
    confirmpassword: "",
  });

  // Toast Notification
  const notify = () => {
    toast.success("Successfully Signed Up", {
      position: "top-center",
      autoClose: 3000,
      theme: "colored",
      transition: Bounce,
    });
  };

  // Signup Function
  const handleSignup = () => {
    const credentials = {
      email,
      password: details.password,
    };

    localStorage.setItem("creds", JSON.stringify(credentials));

    setPassword(details.password);

    notify();

    navigate("/log-in");
  };

  // Validation
  const handleValidate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginPassword = passwordRef.current?.value.trim() || "";

    // Name
    if (details.name.trim() === "") {
      toast.error("Name is required");
      return;
    }

    // Email
    if (email.trim() === "") {
      toast.error("Email is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Enter a valid email");
      return;
    }

    // Password
    if (loginPassword === "") {
      toast.error("Password is required");
      passwordRef.current?.focus();
      return;
    }

    if (loginPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      passwordRef.current?.focus();
      return;
    }

    // Confirm Password
    if (details.confirmpassword.trim() === "") {
      toast.error("Confirm Password is required");
      return;
    }

    // Password Match
    if (loginPassword !== details.confirmpassword) {
      toast.error("Password and Confirm Password must match");
      return;
    }

    handleSignup();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#111111] h-72 flex flex-col justify-center items-center px-6 rounded-b-3xl text-center">
        <div className="w-full">
          <div
            className="w-fit p-3 md:p-4 bg-[#ECF0F4] rounded-full cursor-pointer"
            onClick={() => navigate("/log-in")}
          >
            <ChevronLeft size={20} />
          </div>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Sign Up</h1>
          <p className="text-white/70">Please Sign up to get started</p>
        </div>
      </div>

      {/* Form */}
      <div className="-mt-10 bg-white rounded-t-3xl px-6 py-8 flex justify-center">
        <form
          onSubmit={handleValidate}
          className="w-full md:w-[400px] lg:w-[700px]"
        >
          {/* Name */}
          <div className="flex flex-col gap-2 mb-4">
            <span className="text-sm">
              NAME <sup className="text-red-500">*</sup>
            </span>

            <input
              type="text"
              placeholder="Enter your name"
              value={details.name}
              onChange={(e) =>
                setDetails((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              className="border bg-[#f0f5fa] rounded-lg px-4 py-4 focus:outline-none focus:border-[#ff7622]"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 mb-4">
            <span className="text-sm">
              EMAIL <sup className="text-red-500">*</sup>
            </span>

            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border bg-[#f0f5fa] rounded-lg px-4 py-4 focus:outline-none focus:border-[#ff7622]"
            />
          </div>

          {/* Password */}
          <div className="relative flex flex-col gap-2 mb-4">
            <span className="text-sm">
              PASSWORD <sup className="text-red-500">*</sup>
            </span>

            <input
              ref={passwordRef}
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={details.password}
              onChange={(e) =>
                setDetails((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              className="border bg-[#f0f5fa] rounded-lg px-4 py-4 pr-12 focus:outline-none focus:border-[#ff7622]"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[52px]"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative flex flex-col gap-2 mb-6">
            <span className="text-sm">
              CONFIRM PASSWORD <sup className="text-red-500">*</sup>
            </span>

            <input
              type={reshowPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={details.confirmpassword}
              onChange={(e) =>
                setDetails((prev) => ({
                  ...prev,
                  confirmpassword: e.target.value,
                }))
              }
              className="border bg-[#f0f5fa] rounded-lg px-4 py-4 pr-12 focus:outline-none focus:border-[#ff7622]"
            />

            <button
              type="button"
              onClick={() => setShowrePassword(!reshowPassword)}
              className="absolute right-4 top-[52px]"
            >
              {reshowPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#ff7622] text-white py-4 rounded-xl font-bold hover:bg-[#ff8a45] transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;

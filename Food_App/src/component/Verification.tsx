import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import sidedesign from "../assets/Images/sidedesign.png";
import Countdown from "react-countdown";

// react-countdown's exported type can sometimes be incompatible with the
// JSX typing in strict TS setups. Cast to a generic component type so
// it can be used safely in JSX.
const CountdownComponent = Countdown as unknown as React.ComponentType<any>;

const Verification = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Top Section */}
        <div className="bg-[#111111] h-96 flex flex-col justify-center items-center px-6 rounded text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Verification
          </h1>

          <p className="text-white/70 mt-3">
            We have sent a code to your email
          </p>

          <p className="text-white font-semibold mt-2">example@gmail.com</p>
        </div>

        {/* Bottom Card */}
        <div className="-mt-10 bg-white rounded-t-3xl px-6 py-8">
          {/* CODE + TIMER */}
          <div className="flex justify-between items-center">
            <p className="text-gray-500">CODE</p>

            <div className="flex items-center gap-2">
              <span className="font-semibold underline">Resend in</span>

              <CountdownComponent date={Date.now() + 10 * 60 * 1000} />

              <span className="text-gray-500">sec</span>
            </div>
          </div>

          {/* OTP */}
          <div className="mt-6 flex justify-center">
            <InputOTP maxLength={4}>
              <InputOTPGroup className="gap-3 md:gap-5">
                <InputOTPSlot index={0} className="rounded-xl bg-[#f0f5fa]" />
                <InputOTPSlot index={1} className="rounded-xl bg-[#f0f5fa]" />
                <InputOTPSlot index={2} className="rounded-xl bg-[#f0f5fa]" />
                <InputOTPSlot index={3} className="rounded-xl bg-[#f0f5fa]" />
              </InputOTPGroup>
            </InputOTP>
          </div>

          {/* Button */}
          <button className="mt-8 w-full rounded-xl bg-[#ff7622] py-4 text-white font-bold hover:bg-[#ff8650]">
            VERIFY
          </button>
        </div>
      </div>
    </>
  );
};

export default Verification;

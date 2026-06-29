import React from "react";
import splash2 from "../assets/Images/Splash Page_2.png";
import splash1 from "../assets/Images/Splash Page_01.png";
import { Spinner } from "../components/ui/spinner";

const OpeningPage = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-white">
      {/* 
        Mobile View (hidden on sm and up)
        We use 'min-h-screen' to ensure it covers the view on mobile
      */}
      <div className="sm:hidden relative">
        <img
          src={splash2}
          alt="Splash Mobile"
          className="w-auto h-auto max-h-screen"
        />
        <Spinner className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* 
        Desktop View (visible on sm and up)
        We use 'h-screen' to match the original code's intent
      */}
      <div className="hidden flex justify-center items-center sm:block relative h-screen w-full">
        <img
          src={splash1}
          alt="Splash Desktop"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        {/* 
          Centered Spinner for Desktop.
          Using top-1/2 left-1/2 with negative translate is the standard way to center.
          Adjust -translate-y-1/2 if the logo sits lower/higher in your specific image.
        */}
        <Spinner className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};

export default OpeningPage;

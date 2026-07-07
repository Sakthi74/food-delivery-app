import { useState } from "react";
import { useAddress } from "../Context/LocationContext";
import locationlogo from "../assets/Images/locationlogo.jpg";
import "../css/LocationAnimation.css";
import { MapPin } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import "react-toastify/ReactToastify.css";

interface LocationDetails {
  lat: number;
  lng: number;
}
const AccessLoaction = () => {
  const { setLocationName } = useAddress();
  const [location, setLocation] = useState<LocationDetails | null>(null);
  const navigate = useNavigate();

  const navigate = useNavigate();

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      setLocation({ lat, lng });
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );

      const data = await response.json();
      localStorage.setItem("location", data.display_name);
      setLocationName(data.display_name);

      notifi(data.display_name);

      setTimeout(() => {
        navigate("/search");
      }, 2000);
    });
  };

  console.log(location);
  const notifi = (address: string) => {
    toast.success(`Current Location: ${address}`, {
      position: "top-center",
      autoClose: 5000,
      theme: "colored",
      transition: Bounce,
    });
  };
  return (
    <>
      <div className="flex flex-col justify-center h-screen items-center  align-middle">
        <img
          src={locationlogo}
          // Change 'Animate-loc' to 'animate-loc'
          className="rounded-full h-96 animation- md:h-[550px] lg:h-[550px] animate-loc"
          alt=""
        />
        <button
          className="mt-8 w-82 cursor-pointer md:w-[400px] lg:w-[700px] relative rounded-xl bg-[#ff7622] py-4 text-white font-bold hover:bg-[#ff8650] transition-colors flex items-center justify-center gap-4"
          onClick={() => {
            handleLocation();
          }}
        >
          ACCESS LOCATION
          <MapPin className="inline-block" />
        </button>
        <p className="font-thin text-gray-600 p-3 w-82 text-center md:w-[400px] lg:w-[700px]">
          DFOOD Will Access Your Location While Using The App.
        </p>
      </div>
    </>
  );
};

export default AccessLoaction;

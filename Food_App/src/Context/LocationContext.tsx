import { createContext, useState, useContext } from "react";

const LocationContext = createContext<any>(null);

const LocationProvider = ({ children }: any) => {
  // State1
  const [locationName, setLocationName] = useState(() => {
    return localStorage.getItem("location") || "";
  });

  return (
    <LocationContext.Provider
      value={{
        locationName,
        setLocationName,
      }}
    >
      {" "}
      {children}
    </LocationContext.Provider>
  );
};

const useAddress = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useAddress must be used inside LocationProvider");
  }
  return context;
};
export { useAddress, LocationContext, LocationProvider };

import { createContext, useState } from "react";
export const LocationContext = createContext<any>(null);
export const LocationProvider = ({ children }: any) => {
  const [locationName, setLocationName] = useState("");

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

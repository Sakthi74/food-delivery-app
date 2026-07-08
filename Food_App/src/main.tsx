import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ProfileDataProvider } from "./Context/ProfileContext";
// import { ThemeProvider } from "next-themes";
import "./index.css";
import "leaflet/dist/leaflet.css";

import App from "./App";
import { LocationProvider } from "./Context/LocationContext";
import { SignupProvider } from "./Context/AuthDataContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ThemeProvider defaultTheme="system" attribute="class"> */}
    <BrowserRouter>
      <SignupProvider>
        <ProfileDataProvider>
          <LocationProvider>
            <App />
          </LocationProvider>
        </ProfileDataProvider>
      </SignupProvider>
    </BrowserRouter>
    {/* </ThemeProvider> */}
  </StrictMode>
);

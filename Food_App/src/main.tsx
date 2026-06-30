import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "leaflet/dist/leaflet.css";

import App from "./App";
import { LocationProvider } from "./Context/LocationContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <LocationProvider>
        <App />
      </LocationProvider>
    </BrowserRouter>
  </StrictMode>
);

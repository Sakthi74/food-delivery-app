import React from "react";

import Login from "./component/Login";
import Details from "./component/Details";
import PopularBurgers from "./component/PopularBurgers";
import AccessLocation from "./component/AccessLoaction";
import OpeningPage from "./component/OpeningPage";
import Searching from "./component/Searching";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./component/SignupPage";
import { LocationContext } from "./Context/LocationContext";
import ForgotPassword from "./component/ForgotPassword";
import Verification from "../src/component/Verification";
import Allcategories from "./component/Allcategories";
<<<<<<< HEAD
import RestarauntView from "./component/RestarauntView";
import Cart from "./component/Cart";
=======
import Allcategories1 from "./component/Allcategories1";
import RestaurantCarousel from "./component/RestaurantCarousel";
import Payment from "./component/Payment";
>>>>>>> 2fc0652 (done payments and restaurantcarousel)

function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <Allcategories /> */}
<<<<<<< HEAD
      {/* <Allcategories1 /> */}
      {/* <RestarauntView /> */}
      {/* <Details /> */}
      {/* <PopularBurgers /> */}
      {/* <OpeningPage /> */}
      {/* <Searching /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/location" element={<AccessLocation />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/verify" element={<Verification />} />
        <Route path="/search" element={<Allcategories />} />
        <Route path="/restaurant/:id" element={<RestarauntView />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/popularburgers" element={<PopularBurgers />} />
      </Routes>
=======
      {/* <Allcategories1/>  */}
      <RestaurantCarousel />
      {/* <Payment/> */}
>>>>>>> 2fc0652 (done payments and restaurantcarousel)
    </>
  );
}

export default App;

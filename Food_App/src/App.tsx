import React from "react";

import Login from "./component/Login";
import Details from "./component/Details";
import PopularBurgers from "./component/PopularBurgers";
import AccessLocation from "./component/AccessLoaction";
import OpeningPage from "./component/OpeningPage";
import Searching from "./component/Searching";

import SignupPage from "./component/SignupPage";
import { LocationContext } from "./Context/LocationContext";
import ForgotPassword from "./component/ForgotPassword";
import Verification from "../src/component/Verification";
import Allcategories from "./component/Allcategories";
import RestarauntView from "./component/RestarauntView";
import Cart from "./component/Cart";
import Payment from "./component/Payment";
import FavoriteCarousel from "./component/FavoriteCarousel";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import Profileinfo from "./component/Profileinfo";
import EditProfile from "./component/EditProfile";
import AddressPage from "./component/AddressPage";
import AddAddress from "./component/AddAddress";
import ContratsPage from "./component/ContratsPage";
import MyOrdersOpening from "./component/MyOrdersOpening";
import MyOrdersHistory from "./component/MyOrdersHistory";

function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <Allcategories /> */}
      {/* <Allcategories1 /> */}
      {/* <RestarauntView /> */}
      {/* <Details /> */}
      {/* <PopularBurgers /> */}
      {/* <OpeningPage /> */}
      {/* <Searching /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/location" element={<AccessLocation />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/verify" element={<Verification />} />
        <Route path="/search" element={<Allcategories />} />
        <Route path="/restaurant/:id" element={<RestarauntView />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/popularburgers" element={<PopularBurgers />} />
        <Route path="/paymentpage" element={<Payment />} />
        <Route path="/slidingpage" element={<FavoriteCarousel />} />
        <Route path="/profileinfo" element={<Profileinfo />} />
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/Address" element={<AddressPage />} />
        <Route path="/newAddress" element={<AddAddress />} />
        <Route path="/congrats" element={<ContratsPage />} />
        <Route path="/trackorder" element={<MyOrdersOpening />} />
        <Route path="/history" element={<MyOrdersHistory />} />
      </Routes>
    </>
  );
}

export default App;

import Login from "./component/Login";
import Details from "./component/Details";
import PopularBurgers from "./component/PopularBurgers";
import AccessLocation from "./component/AccessLoaction";

import SignupPage from "./component/SignupPage";

import Verification from "../src/component/Verification";
import Allcategories from "./component/Allcategories";
import RestarauntView from "./component/RestarauntView";
import Cart from "./component/Cart";
import Payment from "./component/Payment";
import FavoriteCarousel from "./component/FavoriteCarousel";
import RestaurantData from "./component/RestrauntData";
import { Routes, Route } from "react-router-dom";

import Profileinfo from "./component/Profileinfo";
import EditProfile from "./component/EditProfile";
import AddressPage from "./component/AddressPage";
import AddAddress from "./component/AddAddress";
import ContratsPage from "./component/ContratsPage";
import MyOrdersOpening from "./component/MyOrdersOpening";
import MyOrdersHistory from "./component/MyOrdersHistory";
import { ToastContainer } from "react-toastify";
import Searching from "./component/Searching";
import PrivateRoute from "./component/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        {/* Public routes — no auth required */}
        <Route path="/" element={<Login />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/verify" element={<Verification />} />
        <Route path="/location" element={<AccessLocation />} />

        {/* Protected routes — require auth */}
        <Route element={<PrivateRoute />}>
          <Route path="/search" element={<Allcategories />} />
          <Route path="/restaurant/:id" element={<RestarauntView />} />
          <Route path="/restrauntdata-page" element={<RestaurantData />} />
          <Route path="/details" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/popularburgers" element={<PopularBurgers />} />
          <Route path="/paymentpage" element={<Payment />} />
          <Route path="/slidingpage" element={<FavoriteCarousel />} />
          <Route path="/profile-info" element={<Profileinfo />} />
          <Route path="/edit" element={<EditProfile />} />
          <Route path="/address" element={<AddressPage />} />
          <Route path="/new-address" element={<AddAddress />} />
          <Route path="/congrats" element={<ContratsPage />} />
          <Route path="/search-bar" element={<Searching />} />
          <Route path="/track-order" element={<MyOrdersOpening />} />
          <Route path="/history" element={<MyOrdersHistory />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}
export default App;

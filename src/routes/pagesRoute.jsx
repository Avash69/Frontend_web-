// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Homepage from "../pages/homepage/homepage";
// import ShopPage from "../pages/shopPage";
// import AdminPage from "../pages/adminPage";
// import { SearchPage } from "../pages/searchPage/searchPage";
// import { ProductDetailsPage } from "../pages/productDetailsPage";
// import { CheckoutPage } from "../pages/checkoutPage";
// import { LoginPage } from "../pages/loginPage";
// import { RegisterPage } from "../pages/RegisterPage";
// import { EnterNewPassword } from "../pages/enterNewPasswordPage";
// import { ProfilePage } from "../pages/profilePage/index";
// import { AccountInformation } from "../pages/profilePage/accountInformation";
// import { Adresses } from "../pages/profilePage/Adresses";
// import { AccountSettings } from "../pages/profilePage/AccountSettings";
// import { Orders } from "../pages/profilePage/Orders";
// import { Navigate } from "react-router-dom";
// import { ContactUsPage } from "../pages/contactUsPage";
// import { AboutUsPage } from "../pages/aboutUsPage";
// import { AnimatePresence } from "framer-motion";
// import { useLocation } from "react-router-dom";
// import { Dashboard } from "../pages/adminPage/dashboard";
// import { ProductManagement } from "../pages/adminPage/productTab";
// import { UserManagement } from "../pages/adminPage/user";
// import { AdminManagement } from "../pages/adminPage/adminManagement/admins";


// const PagesRoute = ({ setIsCartSectionActive }) => {
//   const location = useLocation();
//   return (
//     <AnimatePresence mode="wait">
//       <Routes key={location.pathname} location={location}>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/shop" element={<ShopPage />} />
//         <Route path="/aboutUs" element={<AboutUsPage />} />
//         <Route path="/contactUs" element={<ContactUsPage />} />

//         <Route path="/admin" element={<AdminPage />} />
//         <Route path="/search" element={<SearchPage />} />
//         <Route path="/product/:productId" element={<ProductDetailsPage />} />
//         <Route path="/checkout" element={<CheckoutPage {...{ setIsCartSectionActive }} />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/changeMyPassword" element={<EnterNewPassword />} />

//         <Route path="profilePage" element={<ProfilePage />}>
//           <Route index element={<Navigate to="accountInformation" />} />
//           <Route path="accountInformation" element={<AccountInformation />} />
//           <Route path="address" element={<Adresses />} />
//           <Route path="myOrders" element={<Orders />} />
//           <Route path="accountSettings" element={<AccountSettings />} />
//         </Route>

//         <Route path="administrator" element={<AdminPage />}>
//           <Route index element={<Navigate to="product-Management" />} />
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="product-Management" element={<ProductManagement />} />
//           <Route path="user-Management" element={<UserManagement />} />
//           <Route path="admin-Management" element={<AdminManagement />} />
//         </Route>

//         <Route path="*" element={<h2>path doesnt exist</h2>} />
//       </Routes>
//     </AnimatePresence>
//   );
// };

// export default PagesRoute;
import React from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

// General Pages
import Homepage from "../pages/homepage/homepage";
import ShopPage from "../pages/shopPage";
import AboutUsPage from "../pages/aboutUsPage";
import ContactUsPage from "../pages/contactUsPage";
import SearchPage from "../pages/searchPage/searchPage";
import ProductDetailsPage from "../pages/productDetailsPage";
import CheckoutPage from "../pages/checkoutPage";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/RegisterPage";
import EnterNewPassword from "../pages/enterNewPasswordPage";

// User Profile Pages
import ProfilePage from "../pages/profilePage";
import AccountInformation from "../pages/profilePage/accountInformation";
import Addresses from "../pages/profilePage/Adresses"; // consider renaming to 'Addresses' if typo
import Orders from "../pages/profilePage/Orders";
import AccountSettings from "../pages/profilePage/AccountSettings";

// Admin Pages
import AdminPage from "../pages/adminPage";
import Dashboard from "../pages/adminPage/dashboard";
import ProductManagement from "../pages/adminPage/productTab";
import UserManagement from "../pages/adminPage/user";
import AdminManagement from "../pages/adminPage/adminManagement/admins";

const PagesRoute = ({ setIsCartSectionActive }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* General Pages */}
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/product/:productId" element={<ProductDetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage setIsCartSectionActive={setIsCartSectionActive} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/change-password" element={<EnterNewPassword />} />

        {/* Profile Pages (Nested) */}
        <Route path="/profilePage" element={<ProfilePage />}>
          <Route index element={<Navigate to="accountInformation" replace />} />
          <Route path="accountInformation" element={<AccountInformation />} />
          <Route path="address" element={<Addresses />} />
          <Route path="myOrders" element={<Orders />} />
          <Route path="accountSettings" element={<AccountSettings />} />
        </Route>

        {/* Admin Pages (Nested) */}
        <Route path="/administrator" element={<AdminPage />}>
          <Route index element={<Navigate to="product-management" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product-management" element={<ProductManagement />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="admin-management" element={<AdminManagement />} />
        </Route>

        {/* 404 Fallback */}
        <Route path="*" element={<h2 className="text-center text-xl font-semibold mt-20">🚫 Path doesn’t exist</h2>} />
      </Routes>
    </AnimatePresence>
  );
};

export default PagesRoute;

import React from "react";
import { Routes, Route } from "react-router-dom";
import CreatePublicProfilePage from "../pages/profile/CreatePublicProfilePage";
import PublicProfile from "../pages/profile/PublicProfile";
import CreateBusinessProfilePage from "../pages/profile/CreateBusinessProfilePage";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import EmailVerification from "../pages/auth/EmailVerification";
import PostPhoneNumber from "../pages/auth/PostPhoneNumber";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CreatePublicProfilePage />} />
      <Route path="/public_profile" element={<PublicProfile />} />
      <Route path="/business_profile" element={<CreateBusinessProfilePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/email_verification" element={<EmailVerification />} />
      <Route path="/submit_phoneNumber" element={<PostPhoneNumber />} />
    </Routes>
  );
};

export default AppRoutes;

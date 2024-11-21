import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import LandingPage from "../pages/LandingPage";
import Header from "../components/Header";
import Cookies from "js-cookie";

const isAuthenticated = () => !!Cookies.get("token");

const AppRouter = () => (
  <>
    {/* Header hanya dirender sekali */}
    <Header />

    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/dashboard"
        element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/profile"
        element={isAuthenticated() ? <ProfilePage /> : <Navigate to="/login" />}
      />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </>
);

export default AppRouter;

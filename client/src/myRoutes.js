import React from "react";
import { Routes, Route, Navigate, Router } from "react-router-dom";

import HomeView from "./Views/HomeView/HomeView";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Countdown from "./Components/Countdown/Countdown";
import Registered from "./Components/Registered/Registered";
import Verified from "./Components/Verified/Verified";

const RequireAuthHome = ({ children }) => {
  let isAuthenticated = false;
  if (localStorage.getItem("currentUser")) isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const RequireAuthLogin = ({ children }) => {
  let isAuthenticated = false;
  if (localStorage.getItem("currentUser")) isAuthenticated = true;
  return isAuthenticated ? <Navigate to="/home" /> : children;
};

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} exact />
      <Route path="/registered" element={<Registered />} exact />
      <Route path="/verified" element={<Verified />} exact />
      <Route
        path="/"
        element={<Countdown countdownTimestampMs={1668790800000} />}
        exact
      />
      <Route
        path="/home"
        element={
          <RequireAuthHome>
            <HomeView />
          </RequireAuthHome>
        }
        exact
      />

      <Route
        path="/login"
        element={
          <RequireAuthLogin>
            <Login />
          </RequireAuthLogin>
        }
        exact
      />
      {/* <Route
        path="/friendscode"
        element={
          <RequireAuth>
            <FriendsCode />
          </RequireAuth>
        }
        exact
      />
      <Route
        path="/login"
        element={
          <CheckAuth>
            <AdminLoginView />
          </CheckAuth>
        }
        exact
      /> */}
    </Routes>
  );
};

export default MyRoutes;

import React from "react";
import { Routes, Route, Navigate, Router } from "react-router-dom";

import HomeView from "./Views/HomeView/HomeView";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";

// import Events from "./Components/Events/Events";
// import AdminLoginView from "./Components/Views/AdminLoginView/AdminLoginView";

// import HomeView from "./Components/Views/HomeView/HomeView.js";

// import FriendsCode from "./Components/FriendsCode/FriendsCode.js";

//This function will check whether a use is already logged in
//so that they cannot login again and again
// const CheckAuth = ({ children }) => {
//   let isAuthenticated = false;
//   if (localStorage.getItem("currentUser")) isAuthenticated = true;
//   return isAuthenticated ? <Navigate to="/friendscode" /> : children;
// };

// //This function will check whther a user is logged in so that
// //they can view the protected routes
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
      {/* <Route path="/" element={} exact /> */}
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

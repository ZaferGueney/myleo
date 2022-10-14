import React from "react";
import "./LoginView.scss";
import Register from "../../Components/Register/Register";
import Login from "../../Components/Login/Login";

function LoginView() {
  return (
    <div className="login-view">
      <Register />
      <Login />
    </div>
  );
}

export default LoginView;

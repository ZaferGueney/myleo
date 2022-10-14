import React, { Component, useState } from "react";
import "./Login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("here");
    axios
      .post("http://localhost:5000/login/signin", {
        email: username,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        toast.success("User Logged in!");
        navigate("/home");
      })
      .catch((err) => {
        if (!err.response.data.isUsernameMatch)
          toast.error("Incorrect Username!");
        else if (!err.response.data.isVerified) toast.error("Not Verified!");
        else toast.error("Incorrect Password!");
      });
  };

  return (
    <div className="login">
      <Toaster />
      <h1 className="login-title">LOGIN</h1>
      <h3 className="login-sub">Schön dass du dabei bist!</h3>
      <div className="login-form">
        <form onSubmit={handleLogin}>
          <div className="login-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            ></input>
          </div>

          <div className="login-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
          </div>

          <input type="submit" className="" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Login;

// class Login extends Component {
//   constructor() {
//     super();
//     this.state = {
//       email: "",
//       password: "",
//     };

//     this.changeEmail = this.changeEmail.bind(this);
//     this.changePassword = this.changePassword.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   changeEmail(event) {
//     this.setState({
//       email: event.target.value,
//     });
//   }

//   changePassword(event) {
//     this.setState({
//       password: event.target.value,
//     });
//   }

//   onSubmit(event) {
//     event.preventDefault();

//     const login = {
//       email: this.state.email,
//       password: this.state.password,
//     };

//     axios
//       .post("http://localhost:5000/login/signin", login)
//       .then((response) => console.log("ISSA RESPONSE"));

//     // window.location = "/";

//     this.setState({
//       email: "",
//       password: "",
//     });
//   }

//   render() {
//     return (
//       <div className="login">
//         <h1 className="login-title">LOGIN</h1>
//         <h3 className="login-sub">Schön dass du dabei bist!</h3>
//         <div className="login-form">
//           <form onSubmit={this.onSubmit}>
//             <div className="login-form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 onChange={this.changeEmail}
//                 value={this.state.email}
//                 required
//               ></input>
//             </div>

//             <div className="login-form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 onChange={this.changePassword}
//                 value={this.state.password}
//               ></input>
//             </div>

//             <input type="submit" className="" value="Submit" />
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;

// // function Register() {
// //   const [registerData, setRegisterData] = useState({
// //     firstname: "",
// //     lastname: "",
// //     email: "",
// //     password: "",
// //   });

// //   function changeFirstName(e) {
// //     setRegisterData({
// //       firstname: e.target.value,
// //     });

// //     console.log(e.target.value);
// //     console.log(registerData);
// //   }

// //   function changeLastName(e) {
// //     setRegisterData({
// //       lastname: e.target.value,
// //     });
// //   }

// //   function changeEmail(e) {
// //     setRegisterData({
// //       email: e.target.value,
// //     });
// //   }

// //   function changePassword(event) {
// //     setRegisterData({
// //       password: event.target.value,
// //     });
// //   }

// //   return (
// //     <div className="register">
// //       <h1 className="register-title">REGISTRIERUNG</h1>
// //       <h3 className="register-sub">Schön dass du dabei bist!</h3>
// //       <div className="register-form">
// //         <form action="">
// //           <input
// //             type="text"
// //             placeholder="Vorname"
// //             onChange={changeFirstName}
// //             value={registerData.firstname}
// //           ></input>
// //           <input
// //             type="text"
// //             placeholder="Nachname"
// //             onChange={changeLastName}
// //             value={registerData.lastname}
// //           ></input>
// //           <input
// //             type="text"
// //             placeholder="Email"
// //             onChange={changeEmail}
// //             value={registerData.email}
// //           ></input>
// //           <input
// //             type="text"
// //             placeholder="Password"
// //             onChange={changePassword}
// //             value={registerData.password}
// //           ></input>

// //           <input type="submit" className="" value="Submit" />
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

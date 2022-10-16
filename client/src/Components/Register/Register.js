import React, { Component } from "react";
import "./Register.scss";
import axios from "axios";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };

    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeFirstName(event) {
    this.setState({
      firstname: event.target.value,
    });

    console.log(this.state);
  }

  changeLastName(event) {
    this.setState({
      lastname: event.target.value,
    });
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const registered = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("http://localhost:5000/register/signup", registered)
      .then((response) => console.log(response.data));

    // window.location = "/";

    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <div className="register">
        <h1 className="register-title">REGISTRIERUNG</h1>
        <h3 className="register-sub">Schön dass du dabei bist!</h3>
        <div className="register-form">
          <form onSubmit={this.onSubmit}>
            <div className="register-form-group">
              <label htmlFor="firstname">Vorname</label>
              <input
                type="text"
                name="firstname"
                placeholder="Vorname"
                onChange={this.changeFirstName}
                value={this.state.firstname}
                required
              ></input>
            </div>

            <div className="register-form-group">
              <label htmlFor="lastname">Nachname</label>
              <input
                type="text"
                name="lastname"
                placeholder="Nachname"
                onChange={this.changeLastName}
                value={this.state.lastname}
                required
              ></input>
            </div>

            <div className="register-form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={this.changeEmail}
                value={this.state.email}
                required
              ></input>
            </div>

            <div className="register-form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.changePassword}
                value={this.state.password}
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;

// function Register() {
//   const [registerData, setRegisterData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     password: "",
//   });

//   function changeFirstName(e) {
//     setRegisterData({
//       firstname: e.target.value,
//     });

//     console.log(e.target.value);
//     console.log(registerData);
//   }

//   function changeLastName(e) {
//     setRegisterData({
//       lastname: e.target.value,
//     });
//   }

//   function changeEmail(e) {
//     setRegisterData({
//       email: e.target.value,
//     });
//   }

//   function changePassword(event) {
//     setRegisterData({
//       password: event.target.value,
//     });
//   }

//   return (
//     <div className="register">
//       <h1 className="register-title">REGISTRIERUNG</h1>
//       <h3 className="register-sub">Schön dass du dabei bist!</h3>
//       <div className="register-form">
//         <form action="">
//           <input
//             type="text"
//             placeholder="Vorname"
//             onChange={changeFirstName}
//             value={registerData.firstname}
//           ></input>
//           <input
//             type="text"
//             placeholder="Nachname"
//             onChange={changeLastName}
//             value={registerData.lastname}
//           ></input>
//           <input
//             type="text"
//             placeholder="Email"
//             onChange={changeEmail}
//             value={registerData.email}
//           ></input>
//           <input
//             type="text"
//             placeholder="Password"
//             onChange={changePassword}
//             value={registerData.password}
//           ></input>

//           <input type="submit" className="" value="Submit" />
//         </form>
//       </div>
//     </div>
//   );
// }

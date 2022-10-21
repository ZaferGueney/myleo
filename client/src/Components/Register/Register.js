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
      passwordRepeat: "",
    };

    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changePasswordRepeat = this.changePasswordRepeat.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeFirstName(event) {
    this.setState({
      firstname: event.target.value,
    });
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

  changePasswordRepeat(event) {
    this.setState({
      passwordRepeat: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.state.password == this.state.passwordRepeat) {
      const registered = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password,
        passwordRepeat: this.state.passwordRepeat,
      };

      axios
        .post("http://localhost:5000/register/signup", registered)
        // .then((response) => clg)
        .then(() => {
          window.location = "/registered";
        });

      // window.location = "/";

      this.setState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        passwordRepeat: "",
      });
    } else {
    }
  }

  render() {
    return (
      <div className="register">
        <h1 className="register-title">REGISTRIERUNG</h1>
        <h3 className="register-sub">Schön dass du dabei bist!</h3>
        <div className="register-form">
          <form className="register-form-form" onSubmit={this.onSubmit}>
            <div className="register-form-group">
              <label htmlFor="firstname">Vorname*</label>
              <input
                type="text"
                name="firstname"
                onChange={this.changeFirstName}
                value={this.state.firstname}
                required
              ></input>
            </div>

            <div className="register-form-group">
              <label htmlFor="lastname">Nachname*</label>
              <input
                type="text"
                name="lastname"
                onChange={this.changeLastName}
                value={this.state.lastname}
                required
              ></input>
            </div>

            <div className="register-form-group">
              <label htmlFor="email">E-Mail Adresse*</label>
              <input
                type="email"
                name="email"
                onChange={this.changeEmail}
                value={this.state.email}
                required
              ></input>
            </div>

            <div className="register-form-group">
              <label htmlFor="password">Passwort*</label>
              <input
                type="password"
                name="password"
                onChange={this.changePassword}
                value={this.state.password}
              ></input>
            </div>

            <div className="register-form-group">
              <label htmlFor="passwordRepeat">Passwort wiederholen*</label>
              <input
                type="password"
                name="passwordRepeat"
                onChange={this.changePasswordRepeat}
                value={this.state.passwordRepeat}
              ></input>
            </div>

            <div className="register-form-group register-form-checkbox">
              <label htmlFor="checkbox_first">
                Aenean mi justo, sagittis vitae enim pulvinar.*
              </label>
              <input
                type="checkbox"
                name="checkbox_first"
                // onChange={this.changePasswordRepeat}
                // value={this.state.passwordRepeat}
                required
              ></input>
            </div>

            <div className="register-form-group register-form-checkbox">
              <label htmlFor="checkbox_second">
                Fusce sed volutpat enim. Aenean velit.*
              </label>
              <input
                type="checkbox"
                name="checkbox_second"
                // onChange={this.changePasswordRepeat}
                // value={this.state.passwordRepeat}
                required
              ></input>
            </div>

            <button className="register-form-button" type="submit">
              JETZT REGISTRIEREN
            </button>
          </form>

          <div className="register-login">
            <p className="register-login-text">Du hast schon einen Account?</p>
            <button
              onClick={() => (window.location = "/login")}
              className="register-login-button"
            >
              ZUM LOGIN
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;

import React from "react";
import "./Registered.scss";

function Registered() {
  return (
    <div className="registered">
      <h1 className="registered-title">REGISTRIERUNG</h1>
      <h3 className="registered-sub">Bestätige Deine E-Mail Adresse</h3>
      <p className="registered-text">
        In deinem E-Mail-Posteingang findest du eine Bestätigungs-E-Mail mit dem
        Betreff <b>"Schweinehundchallenge - Registrierung"</b>. Befolge die in
        der E-Mail angegebenen Schritte, um deine E-Mail-Adresse zu bestätigen.
      </p>
    </div>
  );
}

export default Registered;

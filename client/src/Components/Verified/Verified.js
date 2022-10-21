import React from "react";
import "./Verified.scss";

function Verified() {
  return (
    <div className="verified">
      <h1 className="verified-title">VERIFIZIERT</h1>
      <h3 className="verified-sub">Du wurdest Erfolgreich registriert.</h3>
      <p className="verified-text">
        Logge dich ein, und starte deine Challenge.
      </p>

      <button
        onClick={() => (window.location = "/login")}
        className="verified-button"
      >
        LOGIN
      </button>
    </div>
  );
}

export default Verified;

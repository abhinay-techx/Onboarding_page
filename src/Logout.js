// Logout.js
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const { logout } = useAuth0();

  useEffect(() => {
    logout({ returnTo: window.location.origin });
  }, [logout]);

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Logging Out...</h1>
        <p className="description">You are being logged out.</p>
        <div className="button-container">
          <Navigate to="/" className="button"/>
          <Navigate to="/login" className="button"/>
        </div>
      </div>
    </div>
  );
};

export default Logout;

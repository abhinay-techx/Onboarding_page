// Profile.js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated, logout } = useAuth0();

  return (
    <div className="container">
      {isAuthenticated ? (
      <div className="content">
        <h1 className="title">Hello, {user.name}</h1>
        <p className="description">Email: {user.email}</p>
        <button className="button" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
      </div>
      ):(
        
        <Navigate to="/home"/>

        )}
    </div>
    
  );
};

export default Profile;

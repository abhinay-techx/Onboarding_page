// Home.js
import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import '../src/App.css';

const Home = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
          <div className="container">
            <div className="content">
              <h1 className="title">Welcome, {user.name}!</h1>
              <p className="description">Explore what we have to offer:</p>
              <div className="button-container">
                <Link to="/profile" className="button button-profile">Go to Profile</Link>
                <Link to="/internships" className="button button-internships">Explore Internships</Link>
              </div>
            </div>
          </div>
      ) : (
            <nav className="navbar">
              <div className="container">
                <Link to="/" className="navbar-logo">Internship Platform</Link>
                <ul className="navbar-menu">
                  <li><Link to="/internships">Internships</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <button onClick={() => loginWithRedirect()}>Log In</button>
                  {/* Add more navigation links as needed */}
                </ul>
              </div>
            </nav>
          )}
    </div>
  );
};

export default Home;


// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'; 
import HomePage from '../src/Home'; 
import LoginPage from '../src/Login'; 
import LogoutPage from '../src/Logout'; 
import ProfilePage from '../src/Profile'; 

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0(); 

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage />}
          />
          <Route
            exact
            path="/login"
            element={<LoginPage />}
          />
          <Route
            exact
            path="/logout"
            element={<LogoutPage />}
          />
          <Route
            exact
            path="/profile"
            element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import createSession from "../api/createSession"; // Import the function for creating a session
import checkSession from "../api/checkSession"; // Import the function for checking a session


export const LoginPage = () => {
  const [login, setLogin] = useState(""); // State for login
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(null); // State for handling errors

  useEffect(() => {
    // Check for an existing session on page load
    const existingSessionToken = localStorage.getItem("sessionToken");

    if (existingSessionToken) {
      checkExistingSession(existingSessionToken);
    }
  }, []);

  const checkExistingSession = async (sessionToken) => {
    try {
      // Call the function to check the session
      const response = await checkSession(sessionToken);
  
      // If the response has a message indicating a valid session, redirect to the profile page
      if (response.message === "Сессия действительна") {
        window.location.href = "/profile";
      } else {
        // If the session check fails, clear the session token from local storage
        localStorage.removeItem("sessionToken");
      }
    } catch (error) {
      // Handle errors, for example, display an error message
      console.error("Session check error:", error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Call the function to create a session
      const response = await createSession(login, password);

      // Check if the response contains a session token
      if (response.sessionToken) {
        // Save the session token to local storage
        localStorage.setItem("sessionToken", response.sessionToken);

        // Redirect to the profile page
        window.location.href = "/profile";
      } else {
        setError("Authentication failed"); // Update error state if no session token in the response
      }
    } catch (error) {
      // Handle errors, for example, display an error message
      setError(`Authentication failed: ${error.message}`);
      console.error("Authentication error:", error.message);
    }
  };

  return (
    <div className="auth">
      <div className="container">
        <div className="auth__header">
          <div className="auth-tabs">
            <a className="auth-tabs__item selected" href="/login">
              Login
            </a>
            <a className="auth-tabs__item" href="/register">
              Register
            </a>
          </div>
        </div>
        <div className="auth__content">
          <form className="auth-form" onSubmit={handleLogin}>
            <input
              className="input"
              placeholder="Login"
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <input
              className="input"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="primary-btn" type="submit">
              Login
            </button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

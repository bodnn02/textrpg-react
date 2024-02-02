import React from "react";

import { resetStyles } from "../styles/reset.css";
import { fontStyles } from "../styles/fonts.css";
import { Styles } from "../styles/style.css";

import { PopUp } from "../components/PopUp/PopUp";

export const LoginPage = () => {
  return (
    <div className="auth">
      <div className="container">
        <div className="auth__header">
          <div className="auth-tabs">
            <div className="auth-tabs__item selected">Login</div>
            <div className="auth-tabs__item">Register</div>
          </div>
        </div>
        <div className="auth__content">
          <form className="auth-form" action="">
            <input className="input" placeholder="Login" type="text" />
            <input className="input" placeholder="Password" type="password" />
            <button className="primary-btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

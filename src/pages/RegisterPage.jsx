import React from "react";

import { resetStyles } from "../styles/reset.css";
import { fontStyles } from "../styles/fonts.css";
import { Styles } from "../styles/style.css";

import { PopUp } from "../components/PopUp/PopUp";

export const RegisterPage = () => {
  return (
    <div className="auth">
      <div className="container">
        <div className="auth__header">
          <div className="auth-tabs">
            <div className="auth-tabs__item">Login</div>
            <div className="auth-tabs__item selected">Register</div>
          </div>
        </div>
        <div className="auth__content">
          <form className="auth-form" action="">
            <input className="input" placeholder="Login" type="text" />
            <input className="input" placeholder="Password" type="password" />
            <input className="input" placeholder="Re-enter password" type="password" />
            <button className="primary-btn">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

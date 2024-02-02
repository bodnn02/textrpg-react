import React from "react";

import { resetStyles } from "../styles/reset.css";
import { fontStyles } from "../styles/fonts.css";
import { Styles } from "../styles/style.css";

import { PopUp } from "../components/PopUp/PopUp";

export const CharacterCreation = () => {
  return (
    <>
      <PopUp title={"Character Creation"} isVisible={true}>
        <form className="character-form" action="">
          <div className="form-section">
            <div className="form-section__header">
              <h3 className="form-h3">Input character name:</h3>
            </div>
            <div className="form-section__content">
              <input className="input" placeholder="Name" type="text" />
            </div>
          </div>
          <div className="form-section">
            <div className="form-section__header">
              <h3 className="form-h3">Choose character gender:</h3>
            </div>
            <div className="form-section__content">
              <div className="radio-wrapper">
                <label htmlFor="">
                  <img src="/images/gender-male.svg" alt="" />
                </label>
                <input type="radio"></input>
              </div>
              <div className="radio-wrapper">
                <label htmlFor="">
                  <img src="/images/gender-female.svg" alt="" />
                </label>
                <input type="radio"></input>
              </div>
            </div>
          </div>
          <div className="form-section">
            <div className="form-section__header">
              <h3 className="form-h3">Choose hair color:</h3>
            </div>
            <div className="form-section__content">
              <div className="radio-wrapper">
                <label htmlFor="">
                  <div className="color_rounded" Style={"background-color: yellow;"}></div>
                </label>
                <input type="radio"></input>
              </div>
              <div className="radio-wrapper">
                <label htmlFor="">
                  <div className="color_rounded"></div>
                </label>
                <input type="radio"></input>
              </div>
            </div>
          </div>
        </form>
      </PopUp>
    </>
  );
};

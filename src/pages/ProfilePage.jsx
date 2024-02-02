import React from "react";

import { resetStyles } from "../styles/reset.css";
import { fontStyles } from "../styles/fonts.css";
import { Styles } from "../styles/style.css";

import { PopUp } from "../components/PopUp/PopUp";

export const ProfilePage = () => {
  return (
    <>
      <PopUp title={"Character Creation"} isVisible={false}>
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
              <h3 className="form-h3">Choose haircut:</h3>
            </div>
            <div className="form-section__content">
              <div className="radio-wrapper">
                <label htmlFor="">Bald</label>
                <input type="radio"></input>
              </div>
              <div className="radio-wrapper">
                <label htmlFor="">Long Waves</label>
                <input type="radio"></input>
              </div>
              <div className="radio-wrapper">
                <label htmlFor="">Short Crew Cut</label>
                <input type="radio"></input>
              </div>
              <div className="radio-wrapper">
                <label htmlFor="">Messy Bun</label>
                <input type="radio"></input>
              </div>
              <div className="radio-wrapper">
                <label htmlFor="">Undercut</label>
                <input type="radio"></input>
              </div>
              <div className="radio-wrapper">
                <label htmlFor="">Sleek Ponytail</label>
                <input type="radio"></input>
              </div>
              <div className="radio-wrapper">
                <label htmlFor="">Faded Side Part</label>
                <input type="radio"></input>
              </div>
              <div className="radio-wrapper">
                <label htmlFor="">Pixie Cut</label>
                <input type="radio"></input>
              </div>
              <div className="radio-wrapper">
                <label htmlFor="">Textured Crop</label>
                <input type="radio"></input>
              </div>
              <div className="radio-wrapper">
                <label htmlFor="">Beach Waves</label>
                <input type="radio"></input>
              </div>
              <div className="radio-wrapper">
                <label htmlFor="">Mohawk</label>
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
                  <div
                    className="color_rounded"
                    style={{ backgroundColor: "#996515" }}
                  ></div>
                </label>
                <input type="radio"></input>
              </div>
              <div className="radio-wrapper">
                <label htmlFor="">
                  <div
                    className="color_rounded"
                    style={{ backgroundColor: "#804000" }}
                  ></div>
                </label>
                <input type="radio"></input>
              </div>
              <div className="radio-wrapper">
                <label htmlFor="">
                  <div
                    className="color_rounded"
                    style={{ backgroundColor: "#000000" }}
                  ></div>
                </label>
                <input type="radio"></input>
              </div>
              <div className="radio-wrapper">
                <label htmlFor="">
                  <div
                    className="color_rounded"
                    style={{ backgroundColor: "#80461B" }}
                  ></div>
                </label>
                <input type="radio"></input>
              </div>
              <div className="radio-wrapper">
                <label htmlFor="">
                  <div
                    className="color_rounded"
                    style={{ backgroundColor: "#61380B" }}
                  ></div>
                </label>
                <input type="radio"></input>
              </div>
              <div className="radio-wrapper">
                <label htmlFor="">
                  <div
                    className="color_rounded"
                    style={{ backgroundColor: "#E6B870" }}
                  ></div>
                </label>
                <input type="radio"></input>
              </div>
              <div className="radio-wrapper">
                <label htmlFor="">
                  <div
                    className="color_rounded"
                    style={{ backgroundColor: "#FFE4B5" }}
                  ></div>
                </label>
                <input type="radio"></input>
              </div>
              <div className="radio-wrapper">
                <label htmlFor="">
                  <div
                    className="color_rounded"
                    style={{ backgroundColor: "#F0E68C" }}
                  ></div>
                </label>
                <input type="radio"></input>
              </div>
              <div className="radio-wrapper">
                <label htmlFor="">
                  <div
                    className="color_rounded"
                    style={{ backgroundColor: "#FAF0E6" }}
                  ></div>
                </label>
                <input type="radio"></input>
              </div>
              <div className="radio-wrapper">
                <label htmlFor="">
                  <div
                    className="color_rounded"
                    style={{ backgroundColor: "#FFEFD5" }}
                  ></div>
                </label>
                <input type="radio"></input>
              </div>
            </div>
          </div>
          <div className="form-section">
            <div className="form-section__header">
              <h3 className="form-h3">Choose skin color:</h3>
            </div>
            <div className="form-section__content">
              <div className="radio-wrapper">
                <label htmlFor="">
                  <div
                    className="color_rounded"
                    style={{ backgroundColor: "#F5DEB3" }}
                  ></div>
                </label>
                <input type="radio"></input>
              </div>
              <div className="radio-wrapper">
                <label htmlFor="">
                  <div
                    className="color_rounded"
                    style={{ backgroundColor: "#D2B48C" }}
                  ></div>
                </label>
                <input type="radio"></input>
              </div>
              <div className="radio-wrapper">
                <label htmlFor="">
                  <div
                    className="color_rounded"
                    style={{ backgroundColor: "#C0C0C0" }}
                  ></div>
                </label>
                <input type="radio"></input>
              </div>
              <div className="radio-wrapper">
                <label htmlFor="">
                  <div
                    className="color_rounded"
                    style={{ backgroundColor: "#A52A2A" }}
                  ></div>
                </label>
                <input type="radio"></input>
              </div>
              <div className="radio-wrapper">
                <label htmlFor="">
                  <div
                    className="color_rounded"
                    style={{ backgroundColor: "#FFDAB9" }}
                  ></div>
                </label>
                <input type="radio"></input>
              </div>
            </div>
          </div>
          <button className="primary-btn">Create</button>
        </form>
      </PopUp>
    </>
  );
};

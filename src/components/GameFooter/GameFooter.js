import React from "react";
import {styles} from './GameFooter.css'

export const GameFooter = () => {
  return (
    <div className="game-footer">
      <input className="input" placeholder="Do something.." type="text"></input>
      <button className="primary-btn">Send</button>
    </div>
  );
};

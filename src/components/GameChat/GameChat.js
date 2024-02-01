import React from "react";
import { styles } from "./GameChat.css";

export const GameChat = ({messages}) => {

  return (
    <div className="game-chat">
      {messages.map((item) => (
        <div className="game-chat__item" key={item.id}>
          <div className="game-chat__icon">
            <img src={item.preview} alt={item.title} />
          </div>
          <div className="game-chat__wrapper">
            <h3 className="game-chat__h3">{item.title}</h3>
            <p className="game-chat__p">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

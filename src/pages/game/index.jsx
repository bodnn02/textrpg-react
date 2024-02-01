import React from "react";

import { resetStyles } from "../../styles/reset.css";
import { fontStyles } from "../../styles/fonts.css";
import { Styles } from "../../styles/style.css";

import { GameChat } from "../../components/GameChat/GameChat";

export const Gamepage = () => {
  const chat_items = [
    {
      id: 1,
      preview: "",
      title: "Title",
      text: "text",
    },
    {
      id: 1,
      preview: "",
      title: "Title",
      text: "text",
    },
    {
      id: 1,
      preview: "",
      title: "Title",
      text: "text",
    },
    {
      id: 1,
      preview: "",
      title: "Title",
      text: "text",
    },
    {
      id: 1,
      preview: "",
      title: "Title",
      text: "text",
    },
    {
      id: 1,
      preview: "",
      title: "Title",
      text: "text",
    },
    {
      id: 1,
      preview: "",
      title: "Title",
      text: "text",
    },
    {
      id: 1,
      preview: "",
      title: "Title",
      text: "text",
    },
    {
      id: 1,
      preview: "",
      title: "Title",
      text: "text",
    },
    {
      id: 1,
      preview: "",
      title: "Title",
      text: "text",
    },

    {
      id: 1,
      preview: "",
      title: "Title",
      text: "text",
    },

    {
      id: 1,
      preview: "",
      title: "Title",
      text: "text",
    },
    {
      id: 1,
      preview: "",
      title: "Title",
      text: "text",
    },
    {
      id: 1,
      preview: "",
      title: "Title",
      text: "text",
    },
    {
      id: 1,
      preview: "",
      title: "Title",
      text: "text",
    },
    {
      id: 1,
      preview: "",
      title: "Title",
      text: "text",
    },
    {
      id: 1,
      preview: "",
      title: "Title",
      text: "text",
    },
    {
      id: 1,
      preview: "",
      title: "Title",
      text: "text",
    },
    {
      id: 1,
      preview: "",
      title: "Title",
      text: "text",
    },
  ];

  return (
    <>
      <GameChat messages={chat_items}></GameChat>
    </>
  );
};

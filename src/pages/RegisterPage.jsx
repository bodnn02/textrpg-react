// Импортируем useState
import React, { useState } from "react";

// Импортируем функцию registerUser
import registerUser from "../api/registerUser";

import { resetStyles } from "../styles/reset.css";
import { fontStyles } from "../styles/fonts.css";
import { Styles } from "../styles/style.css";

import { PopUp } from "../components/PopUp/PopUp";

export const RegisterPage = () => {
  // Состояния для хранения данных формы
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [reenteredPassword, setReenteredPassword] = useState("");

  // Обработчик события отправки формы
  const handleRegister = async (e) => {
    e.preventDefault();

    // Проверка на совпадение паролей
    if (password !== reenteredPassword) {
      // Можно отобразить сообщение об ошибке
      console.error("Пароли не совпадают");
      return;
    }

    try {
      // Вызываем функцию registerUser для отправки запроса
      const response = await registerUser(login, password);

      // Обработка успешного ответа
      console.log("Регистрация прошла успешно!", response);

      // Здесь вы можете добавить код для обработки успешной регистрации, например, перенаправление на другую страницу или отображение поп-апа об успешной регистрации.
    } catch (error) {
      // Обработка ошибок
      console.error(error.message);
    }
  };

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
          {/* Добавляем обработчик события для формы */}
          <form className="auth-form" onSubmit={handleRegister}>
            {/* Используем управляемые компоненты для связи с состоянием */}
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
            <input
              className="input"
              placeholder="Re-enter password"
              type="password"
              value={reenteredPassword}
              onChange={(e) => setReenteredPassword(e.target.value)}
            />
            <button className="primary-btn" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

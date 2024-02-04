import React, { useState } from "react";
import createSession from "../api/createSession"; // Импортируем функцию для создания сессии

export const LoginPage = () => {
  const [login, setLogin] = useState(""); // Состояние для хранения логина
  const [password, setPassword] = useState(""); // Состояние для хранения пароля

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Вызываем функцию для создания сессии
      await createSession(login, password);

      // После успешной авторизации, вы можете перенаправить пользователя на другую страницу
      // Например, используя react-router-dom
      // history.push("/profile");
    } catch (error) {
      // Обработка ошибок, например, показ сообщения об ошибке
      console.error("Ошибка авторизации:", error.message);
    }
  };

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
          </form>
        </div>
      </div>
    </div>
  );
};

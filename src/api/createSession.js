const createSession = async (login, password) => {
    const apiHost = "http://localhost:8080";
  
    const apiUrl = `${apiHost}/api/session/create`;
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
  
      if (response.ok) {
        // Получаем данные из ответа
        const data = await response.json();
  
        // Сохраняем идентификатор сессии в localStorage
        localStorage.setItem('sessionId', data.sessionId);
  
        // Перенаправляем на страницу профиля
        window.location.href = '/profile';
      } else {
        // Обработка ошибки
        throw new Error(`Ошибка при создании сессии: ${response.statusText}`);
      }
    } catch (error) {
      // Обработка ошибок сети или других проблем
      console.error(`Произошла ошибка: ${error.message}`);
    }
  };
  
  export default createSession;
  
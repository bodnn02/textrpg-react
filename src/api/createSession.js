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

        return data;
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
  
const registerUser = async (login, password) => {
  const apiHost = "http://localhost:8080";
  
  // Проверка наличия API_HOST
  if (!apiHost) {
    throw new Error('Переменная API_HOST не определена в файле .env');
  }

  const apiUrl = `${apiHost}/api/user/register`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, password }),
    });

    if (response.ok) {
      // Возвращаем данные в случае успешного ответа
      return response.json();
    } else {
      // Обработка ошибки
      throw new Error(`Ошибка при регистрации: ${response.statusText}`);
    }
  } catch (error) {
    // Обработка ошибок сети или других проблем
    throw new Error(`Произошла ошибка: ${error.message}`);
  }
};

export default registerUser;

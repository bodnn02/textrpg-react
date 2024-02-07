const checkSession = async (sessionToken) => {
    const apiHost = "http://localhost:8080";
    const apiUrl = `${apiHost}/api/session/check`;

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ sessionToken }),
        });

        if (response.ok) {
            // Get data from the response
            const data = await response.json();
            return data;
        } else {
            // Handle the error
            throw new Error(`Ошибка при проверке сессии: ${response.statusText}`);
        }
    } catch (error) {
        // Handle network errors or other issues
        console.error(`Произошла ошибка: ${error.message}`);
    }
};

export default checkSession;

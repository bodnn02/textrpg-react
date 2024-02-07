const addCharacter = async (character) => {
    const apiHost = "http://localhost:8080";
    const apiUrl = `${apiHost}/api/character/add`;

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(character),
        });

        if (response.ok) {
            // Get data from the response
            const data = await response.json();
            return data;
        } else {
            // Handle the error
            throw new Error(`Error adding character: ${response.statusText}`);
        }
    } catch (error) {
        // Handle network errors or other issues
        console.error(`An error occurred: ${error.message}`);
    }
};

export default addCharacter;

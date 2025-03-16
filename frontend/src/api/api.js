const API_URL = process.env.REACT_APP_API_URL + "/watches/";

export const fetchWatches = async () => {
    try {
        const response = await fetch(API_URL);
        console.log("Raw response:", response);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Parsed JSON:", data);
        return data;
    } catch (error) {
        console.error("Error fetching the watches:", error);
        return [];
    }
}


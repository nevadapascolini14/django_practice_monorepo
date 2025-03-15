const API_URL = "http://127.0.0.1:8000/polls/api/data/";

export const fetchData = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

import React, { useEffect, useState } from "react";
import { fetchData } from "./api";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetchData().then(data => {
            setMessage(data.message);
        });
    }, []);

    return (
        <div>
            <h1>React + Django</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;


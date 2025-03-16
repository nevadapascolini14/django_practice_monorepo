import React, { useEffect, useState } from "react";
import { fetchWatches } from "./api/api";

function App() {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let data = await fetchWatches(); // ✅ Wait for data to resolve
        setWatches(data); // ✅ Update state with fetched data
        console.log("These are the watches", data); // ✅ Log correct data
      } catch (error) {
        console.error("Error fetching watches:", error);
      }
    }
    fetchData(); // ✅ Call the async function
  }, []);

  const formatImageUrl = (imagePath) => {
    if (!imagePath) return "";  // Handle missing images
    return `http://127.0.0.1:8000/${imagePath.replace("watch_images/watch_images/", "watch_images/")}`;
};

  const watchItems = watches.map((watch) => (
    <li key={watch.id}>
      <p>{watch.name}</p>
      <img src={formatImageUrl(watch.image)} alt={watch.description}></img>
    </li>
  ));

  return (
    <div>
      <h1>React + Django</h1>
      <div>{watchItems}</div>
    </div>
  );
}

export default App;

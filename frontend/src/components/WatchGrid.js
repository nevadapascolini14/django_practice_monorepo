import { useEffect, useState } from "react";
import formatImageUrl from "../utils";
import { fetchWatches } from "../api/api";

export default function WatchGrid() {

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

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <button className="border px-4 py-2 flex items-center space-x-2 text-gray-700 hover:bg-gray-100 transition rounded-lg">
          <span>Filter and Sort</span>
        </button>
        <span className="font-bold text-gray-700">
          {watches.length} products
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {watches.map((watch, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg p-4 hover:shadow-xl transition"
          >
            <img
              src={formatImageUrl(watch.image)}
              alt={watch.description}
              className="w-full h-32 object-cover rounded-lg"
            />
            <div className="flex flex-col flex-grow justify-between">
            <h3 className="mt-3 text-gray-900 text-base">
              {watch.name}
            </h3>
            <p className="text-gray-600 text-xs">{watch.description}</p>
            </div>
            
            <p className="text-gray-800  mt-2">
              {watch.price ? `£${watch.price.toLocaleString()} GBP` : "POA"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

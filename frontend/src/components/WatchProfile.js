import React from "react";

export function WatchProfile({ imageUrl, watch_name="Rolex", watch_description="This is a great watch"}) {
  return (
    <>
      <div className="watch-profile">
        <img src={imageUrl} alt="Watch" width="300" loading="lazy" />
        <h1>{watch_name}</h1>
        <h2>{watch_description}</h2>
      </div>
    </>
  );
}

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
// import "./index.css";
// import App from "./App";

const Test = () => {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating
        maxRating={10}
        color="green"
        onSetRating={setMovieRating}
      />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating maxRating={5} />
    <StarRating size={24} color="red" maxRating={10} />
    <Test />
  </React.StrictMode>
);

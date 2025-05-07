import React, { useState } from "react";
import "./index.css";

function App() {
  const cuisines = [
    "Italian",
    "Mexican",
    "Chinese",
    "Indian",
    "Japanese",
    "Thai",
    "Greek",
    "Middle Eastern",
    "French",
    "Korean",
    "Vietnamese",
    "Spanish",
    "American",
    "Lebanese",
    "Turkish",
  ];

  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleSpin = () => {
    if (spinning) return;

    const slice = 360 / cuisines.length;
    const randomIndex = Math.floor(Math.random() * cuisines.length);
    const extraSpins = 5;
    const finalRotation = 360 * extraSpins - randomIndex * slice;

    setRotation(finalRotation);
    setSpinning(true);

    setTimeout(() => {
      setSelectedCuisine(cuisines[randomIndex]);
      setSpinning(false);
    }, 4000);
  };

  return (
    <div className="container">
      <h1>What's for dinner?</h1>
      <div className="wheel-wrapper">
        <div
          className="wheel"
          style={{ transform: `rotate(${rotation}deg)` }}
        ></div>
        <div className="pointer">▲</div>
      </div>
      <button onClick={handleSpin} disabled={spinning}>
        {spinning ? "Spinning..." : "Spin"}
      </button>
      {selectedCuisine && !spinning && (
        <div>
          <h2>You got: {selectedCuisine}</h2>
          <button
            onClick={() =>
              window.open(
                `https://www.google.com/maps/search/${encodeURIComponent(
                  selectedCuisine
                )}+restaurants+near+me`,
                "_blank"
              )
            }
            className="maps-button"
          >
            Find nearby {selectedCuisine} restaurants
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

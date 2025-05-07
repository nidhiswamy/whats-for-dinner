import React, { useState } from "react";
import Wheel from "./components/Wheel";
import SpinButton from "./components/SpinButton";
import Result from "./components/Result";

function App() {
  const cuisines = [
    "Italian", "Mexican", "Chinese", "Indian", "Japanese",
    "Thai", "Greek", "Middle Eastern", "French", "Korean",
    "Vietnamese", "Spanish", "American", "Lebanese", "Turkish"
  ];

  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleSpin = () => {
    if (spinning) return;

    const slice = 360 / cuisines.length;
    const randomIndex = Math.floor(Math.random() * cuisines.length);
    const extraSpins = 5;
    const finalRotation = (360 * extraSpins) - (randomIndex * slice);

    setRotation(finalRotation);
    setSpinning(true);

    setTimeout(() => {
      setSelectedCuisine(cuisines[randomIndex]);
      setSpinning(false);
    }, 4000);
  };

  const openMaps = () => {
    window.open(
      `https://www.google.com/maps/search/${encodeURIComponent(
        selectedCuisine
      )}+restaurants+near+me`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen font-sans flex flex-col items-center justify-center p-4 text-center space-y-4">
      <h1 className="text-2xl font-bold">What's for dinner?</h1>
      <Wheel rotation={rotation} />
      <SpinButton handleSpin={handleSpin} spinning={spinning} />
      <Result
        selectedCuisine={selectedCuisine}
        spinning={spinning}
        openMaps={openMaps}
      />
    </div>
  );
}

export default App;

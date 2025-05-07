import React, { useState } from 'react';
import './index.css';

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  button: {
    fontSize: "1.2rem",
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
  },
  result: {
    marginTop: "30px",
    fontSize: "1.8rem",
    color: "#333",
  },
};

function App() {
  const cuisines = [
    "American",
    "Indian",
    "Mexican",
    "Italian",
    "Japanese",
    "Chinese",
    "Thai",
    "Greek",
    "Middle Eastern",
    "French",
    "Korean",
    "Vietnamese",
    "Lebanese",
    "Turkish",
  ];

  const [selectedCuisine, setSelectedCuisine] = useState("");

  const handleSpin = () => {
    const randomIdx = Math.floor(Math.random() * cuisines.length)
    setSelectedCuisine(cuisines[randomIdx])
  }

  return (
    <div style={styles.container}>
      <header style={styles.heading}>
        <h1>What's for dinner?</h1>
      </header>
      <button style={styles.button} onClick={handleSpin}>
        Spin
      </button>
      <h2 style={styles.result}>You should eat: {selectedCuisine}</h2>
    </div>
  );
}

export default App;

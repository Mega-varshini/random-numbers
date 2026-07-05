import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(null); 

  const generateNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1; 
    setNumber(randomNum);
  };

  return (
    <div className="container">
      <h1>🎲 Random Number Generator</h1>
      <button onClick={generateNumber}>Generate Number</button>

      {number === null ? (
        <p className="placeholder">No number generated yet</p>
      ) : (
        <h2 className="result">Your Number: {number}</h2>
      )}
    </div>
  );
}

export default App;
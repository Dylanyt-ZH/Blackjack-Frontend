import "./App.css";
import Game from "./Game";
import Head from "./head";
import { useState } from "react";

function App() {
  const [started, setStarted] = useState(false);
  return (
    <>
      <Head />
      {!started ? (
        <div className="center-container">
          <h1 className="game-title">Welcome to Blackjack</h1>
          <p className="game-desc">Get ready to play!</p>

          <button className="start-btn" onClick={() => setStarted(true)}>
            START
          </button>
        </div>
      ) : (
        <Game started={started} setStarted={setStarted} />
      )}
    </>
  );
}

export default App;

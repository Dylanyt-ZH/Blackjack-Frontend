import "./Game.css";
import Pocker from "../componments/pocker";
import { useState } from "react";
import React from "react";
import cardsDict from "../../src/assets/pockers.json";

type GameProps = {
  setStarted: React.Dispatch<React.SetStateAction<boolean>>;
};
Object.entries(cardsDict).forEach(([key, value]) => {
  console.log(`key: ${key}, value: ${value}`);
});

function Game({ setStarted }: GameProps) {
  // Get pocker image paths
  const pockerImagePaths = Object.keys(
    import.meta.glob("../assets/pockers/*.svg")
  );
  const fixedPockerImagePaths = pockerImagePaths.map((path) =>
    path.replace("..", "src")
  );

  const [currentImg, setCurrentImg] = useState(
    fixedPockerImagePaths[
      Math.floor(Math.random() * fixedPockerImagePaths.length)
    ]
  );

  function RandomPockerImage() {
    const randomIndex = Math.floor(
      Math.random() * fixedPockerImagePaths.length
    );
    setCurrentImg(fixedPockerImagePaths[randomIndex]);
    console.log("Current Image:", fixedPockerImagePaths[randomIndex]);
  }

  return (
    <>
      <div className="back-button-container">
        <button className="back-button" onClick={() => setStarted(false)}>
          Home
        </button>
      </div>

      <div className="game-container">
        <div className="dealer-container">
          <h2>Dealer Zone</h2>
        </div>
        <Pocker img_url={currentImg} />
        <div className="player-container">
          <h2>Player Zone</h2>
        </div>
      </div>
      <button onClick={RandomPockerImage}>Change a Card</button>
    </>
  );
}

export default Game;

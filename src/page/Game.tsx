import "./Game.css";
import Pocker from "../componments/pocker";
import { useState } from "react";
import React from "react";
import cardsDictJson from "../../src/assets/pockers.json";

const cardsDict: Record<string, boolean> = cardsDictJson;

type GameProps = {
  setStarted: React.Dispatch<React.SetStateAction<boolean>>;
};

function Game({ setStarted }: GameProps) {
  const [currentImg, setCurrentImg] = useState(
    "src/assets/pockers/joker-s.svg"
  );

  function RandomPockerImage() {
    if (Object.values(cardsDict).every((value) => value === true)) {
      console.log("All cards have been used!");
      return;
    }

    while (true) {
      const keys = Object.keys(cardsDict);
      const randomKey = keys[Math.floor(Math.random() * keys.length)];

      if (cardsDict[randomKey] == false) {
        cardsDict[randomKey] = true;
        console.log("Random key:", randomKey);
        setCurrentImg("src/assets/pockers/" + randomKey + ".svg");
        break;
      }
    }
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

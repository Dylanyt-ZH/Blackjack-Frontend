import "./Game.css";
import Pocker from "../componments/pocker";

type GameProps = {
  setStarted: React.Dispatch<React.SetStateAction<boolean>>;
};

function Game({ setStarted }: GameProps) {
  return (
    <>
      <div className="back-button-container">
        <button className="back-button" onClick={() => setStarted(false)}>
          Home
        </button>
      </div>

      <div className="game-container">
        <Pocker img_url="src/assets/joker-28254.svg" />
      </div>
    </>
  );
}

export default Game;

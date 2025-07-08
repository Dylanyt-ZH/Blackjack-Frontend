import "./Game.css";
type GameProps = {
  started: boolean;
  setStarted: React.Dispatch<React.SetStateAction<boolean>>;
};

function Game({ started, setStarted }: GameProps) {
  return (
    <>
      <div className="back-button-container">
        <button className="back-button" onClick={() => setStarted(false)}>
          Home
        </button>
      </div>
    </>
  );
}

export default Game;

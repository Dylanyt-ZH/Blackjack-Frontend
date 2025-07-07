import "./App.css";
import Head from "./head";

function App() {
  return (
    <>
      <Head />
      <div className="center-container">
        <h1 className="game-title">Welcome to Blackjack</h1>
        <p className="game-desc">Get ready to play!</p>

        <button className="start-btn">START</button>
      </div>
    </>
  );
}

export default App;

import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import Card from "./components/Card";
import Counter from "./components/Counter";
import makeRandomNumberArray from "./lib/makeRandomNumberArray";

export default function App() {
  const [numberOrder, setNumberOrder] = useState(makeRandomNumberArray(25));
  const [current, setCurrent] = useState(0);
  const [gameState, setGameState] = useState("ready"); // 'started', 'done'

  function startGame() {
    setGameState("started");
  }

  useEffect(() => {
    if (current === 50) setGameState("done");
  }, [current]);

  return (
    <div className="App">
      <div className="body">
        <Counter gameState={gameState} />
        <div
          className="cardboard"
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "70%",
            minWidth: "300px",
            margin: "0 auto",
          }}
          onClick={startGame}
        >
          {numberOrder.map((v, idx) => {
            return (
              <Card
                number={v}
                color="black"
                key={idx}
                setCurrent={setCurrent}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

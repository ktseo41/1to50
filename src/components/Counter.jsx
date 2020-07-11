import React, { useState, useEffect } from "react";

export default function Counter({ gameState }) {
  const startTime = new Date().getTime();
  const [elapsed, setElapsed] = useState(0);
  let timerId;

  useEffect(() => {
    switch (gameState) {
      case "started":
        timerId = setInterval(() => {
          setElapsed(((new Date().getTime() - startTime) / 1000).toFixed(1));
        }, 1000 / 60);
        break;
      case "done":
        clearInterval(timerId);
        break;
      default:
        break;
    }

    return () => {
      clearInterval(timerId);
    };
  }, [gameState]);

  return (
    <div
      className="counter"
      style={{
        width: "70%",
        minWidth: "300px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h3 style={{ fontSize: "2rem" }} className="time">
        {elapsed}
      </h3>
    </div>
  );
}

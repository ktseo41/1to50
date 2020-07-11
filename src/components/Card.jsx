import React, { useState, useEffect, useRef } from "react";

export default function Card({ number, color, setCurrent }) {
  const [cardNumber, setCardNumber] = useState(+number);
  const [flipped, setFlipped] = useState(false);
  const [height, setHeight] = useState(0);
  const card = useRef(null);

  function selectCard() {
    setCurrent((current) => {
      if (current + 1 === cardNumber) {
        if (cardNumber <= 25) {
          setCardNumber(cardNumber + 25);
        } else {
          setFlipped(true);
        }
        return cardNumber;
      }
      return current;
    });
  }

  useEffect(() => {
    const width = card.current.offsetWidth;
    setHeight(width);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: `2px solid ${color}`,
        borderRadius: 5,
        width: "calc(20% - 4px)",
        height: height || "",
      }}
      className="card"
      ref={card}
      onClick={selectCard}
    >
      <div
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          visibility: flipped ? "hidden" : "visible",
        }}
        className="number"
      >
        {cardNumber}
      </div>
    </div>
  );
}

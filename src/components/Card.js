import { useState, useEffect } from "react";

function Card(props) {
  const {char, handleCardClick} = props
  
  return (
    <img
      className="transition h-72 rounded-lg cursor-pointer opacity-80 hover:opacity-100 hover:scale-110"
      src={char.source}
      alt={char.name}
      onClick={() => handleCardClick(char)}
    />
  );
}

export default Card;

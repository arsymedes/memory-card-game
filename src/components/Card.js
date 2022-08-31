import { useState, useEffect } from "react";

function Card(props) {
  return (
    <img className="transition h-72 cursor-pointer opacity-80 hover:opacity-100 hover:scale-110" src={props.source} alt="" />
  )
}

export default Card
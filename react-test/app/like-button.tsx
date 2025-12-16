"use client";
//import React from "react";
import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <button type="button" onClick={handleClick}>
      Like ({likes})
    </button>
  );
}

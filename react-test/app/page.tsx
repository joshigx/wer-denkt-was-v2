//import React from "react";
import LikeButton from "./like-button.tsx";

interface HeaderProps {
  title: string;
}

function Header(props: HeaderProps) {
  return <h1>{props.title ? props.title : "Default title"}</h1>;
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];


  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />


    </div>
  );
}

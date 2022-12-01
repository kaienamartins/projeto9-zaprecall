import { useState } from "react";
import Play from "../assets/img/seta_play.png";
import Seta from "../assets/img/seta_virar.png";
import Style from "../styles/Style";

export default function Card({ question, answer }) {
  const [front, setFront] = useState(true);

  function handleClick() {
    setFront((oldState) => !oldState);
  }

  const text = front ? question : answer;
  const sideClass = front ? "pergunta-fechada" : "pergunta-aberta";
  const classList = `${sideClass}`;
  const icon = front ? Play : Seta;
  const iconShown = `${icon}`;

  return (
    <div className={classList} onClick={handleClick} src={iconShown}>
      <Style />
      <p>{text}</p>
      <img src={iconShown} alt={icon} />
    </div>
  );
}

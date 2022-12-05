import Play from "../assets/img/seta_play.png";
import WrongIcon from "../assets/img/icone_erro.png";
import RightIcon from "../assets/img/icone_certo.png";
import AlmostIcon from "../assets/img/icone_quase.png";
import TurnCard from "../assets/img/seta_virar.png";
import styled from "styled-components";
import { useState } from "react";
import Buttons from "./Buttons";

export default function Flashcard(props) {
  const [putColour, setPutColour] = useState({color: "#333"})
  const [putIcon, setPutIcon] = useState({icon: Play});
  const [closed, setClosed] = useState(true);
  const [openQuestion, setOpenQuestion] = useState(false);
  const [openAnswer, setOpenAnswer] = useState(false);

  function showQuestion() {
    setClosed(false);
    setOpenQuestion(true);
  }

  function showAnswer() {
    setOpenQuestion(false);
    setOpenAnswer(true);
  }

  function Wrong() {
    let newColour = { color: "#FF3030"};
    let newIcon = {icon: WrongIcon} //data-test="no-icon"
    setPutColour(newColour);
    setPutIcon(newIcon)
    props.setCounter(props.counter + 1);
    setClosed(true);
    setOpenAnswer(false);
  }

  function Almost() {
    let newColour = { color: "#FF922E"};
    let newIcon = {icon: AlmostIcon}
    setPutColour(newColour);
    setPutIcon(newIcon)
    props.setCounter(props.counter + 1);
    setClosed(true);
    setOpenAnswer(false);
  }

  function Right() {
    let newColour = { color: "#2FBE34"};
    let newIcon = {icon: RightIcon}
    setPutColour(newColour);
    setPutIcon(newIcon)
    props.setCounter(props.counter + 1);
    setClosed(true);
    setOpenAnswer(false);
  }

  return (
    <>
      {closed && (
        <Closed color={putColour.color} onClick={showQuestion} data-test="flashcard-text">
          <p>Pergunta {props.dados.id}</p>
          <img data-test="play-btn" src={putIcon.icon} alt=""/>
        </Closed>
      )}
      {openQuestion && (
        <Question data-test="flashcard-text">
          <p>{props.dados.question}</p>
          <img data-test="turn-btn" onClick={showAnswer} src={TurnCard} alt="/" />
        </Question>
      )}
      {openAnswer && (
        <Answer data-test="flashcard-text">
          <p>{props.dados.answer}</p>
          <Buttons wrong={Wrong} almost={Almost} right={Right}/>
        </Answer>
      )}
    </>
  );
}

const Closed = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
  p {
    font-family: "Recursive", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.color};
    text-decoration-line: ${(props) =>
      props.color !== "#333" ? "line-through" : "none"};
  }
`;

const Question = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Answer = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
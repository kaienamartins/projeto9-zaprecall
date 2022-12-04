import styled from "styled-components";
import Card from "./Card";

const cards = [
  {
    id: 1,
    question: "O que é JSX?",
    answer: "Uma extensão da linguagem JavaScript",
  },

  {
    id: 2,
    question: "O React é __",
    answer: "Uma biblioteca JavaScript para construção de interfaces",
  },

  {
    id: 3,
    question: "Componentes devem iniciar com __",
    answer: "Letra maiúscula",
  },

  { id: 4, question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
];

export default function CardDeck(props) {
  return (
      <Flashcards>
        {cards.map(() => (
          <Card
            key={props.id}
          />
        ))}
      </Flashcards>
  );
}

const Flashcards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
`;
